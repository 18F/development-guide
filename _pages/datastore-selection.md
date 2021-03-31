---
title: Datastore Selection
sidenav: tools
sticky_sidenav: true
---

We're fortunate to have dozens of battle-tested datastores available to us,
filling many different niches and general use cases. Each has its own
strengths, weaknesses, configuration, backup system, security profile, and
cognitive overhead. In an effort to make this selection simpler, TTS
engineering **defaults** to using Postgres for the majority of our
applications. This also allows us to collectively learn best practices around
security configurations, indexing strategies, and so forth, particularly
between large, open data projects.

## Our use case

Though we build many different types of systems, we have enough commonality
across projects that we can note some generalities.

1. We have significantly more reads than writes.
2. We almost always have structured data when designing schemas. Very few
   projects need flexible/unstructured models.
3. Maintainability is more important than "interesting" or "cutting-edge".
   We're building software to hand over to agency partners; choosing tools
   that are easy to develop with *and* easy for long-term maintenance is
   critical to that success.
4. Similarly, stability is more important than performance. Our projects often
   waffle between active development and maintenance mode; we need to prepare
   for the latter. We don't know who will be available to fix a downed
   database.

Of course, performance, writes, etc. are still important factors to a
well-rounded application, but the above generalities give us a direction to
lean (think: the [agile manifesto](http://agilemanifesto.org/)).

This general use case negates a large number of the benefits of NoSQL and
other niche solutions. On the other hand, we frequently need more flexibility
than RedShift, VoltDB, and other highly scalable datastores allow.

## Postgres serves our needs

We've used Postgres in some form on the majority of our projects and found
that it covers almost all (if not all) of our needs. When starting a new
project (that requires a datastore), we use Postgres; as the project grows, we
first attempt to build solutions *within* Postgres, pushing it and researching
features we need. Only if we hit a significant wall do we reach for another
datastore.

### Text search

A frequent reason to integrate Elastic, Solr, etc. is a need for text search
(specifics, often, undefined). Luckily, Postgres has this functionality built
in (either directly or by enabling additional modules). Let's cover four of
the more interesting types of text search:

1. *Full text search*, search over large blobs of text, is provided by the
   `tsearch` module. This is capable of word stemming (e.g. ensuring "book"
   will be found if searching for "books"), skipping stop words (e.g. "am",
   "is", "the"), weighting fields, returning results with highlighted matches,
   creating a dictionary of synonyms, and more. The necessary vectorization
   can also be precomputed and indexed. Collectively, this account for 90+% of
   our need for a separate search index.
2. *Trigrams* break the search term and potential results into three-letter,
   overlapping strings and count the number of matches. This type of search
   works really well for smaller text fields, like searching over city names.
   This is provided in Postgres by the `pg_trgm` module, and can also be
   precomputed and indexed.
3. *Edit distance* calculates the number of "edits" (character
   inserts/deletes/shifts) between a search term and text corpus, making it
   very useful for finding misspelled words. This is provided by the
   `fuzzystrmatch` module.
4. *Soundex* convert characters into phonemes (sounds), allowing for search
   over homophones like "Kris" and "Chris". This is excellent option for
   certain types of word search such as name matching, and also provided by
   the `fuzzystrmatch` module. The necessary transforms can be precomputed and
   indexed.

Better still, these features are either already integrated into our existing
ORMs (as with Django) or a quick module install away (including ActiveRecord,
Sequelize, and Sqlalchemy).

### Unstructured data

Another common argument for using Mongo, Elastic, or Couch is the need to
store data without a predefined structure (notably, arbitrary JSON). While
this use case doesn't come up frequently for us, Postgres has us covered when
it does.  **JSON** is a first class data type in Postgres, meaning we can
store arbitrary structures, query arbitrarily nested values, index the
results, add constraints, etc. Postgres doesn't have map-reduce-style
functions, but can perform all of the SQL aggregations we're familiar with
over those JSON structures, which satisfies the majority of this need.

Additionally, Postgres has an older data type called **HStore**, which maps
arbitrary string keys to string values. This provides the same query,
indexing, etc. options as JSON, but can't be nested and only allows string
values. HStore's been around much longer however, so may have more support in
your ORMs (though JSON is supported by most, at this point). Postgres also
supports **XML** as a native data type for the few eXist-db hold outs.

### And more

If you reach for Mongo for GIS support, take a look at PostGIS, which has many
more features. If you're using a document store to store hierarchical data,
consider using the [nested set
model](https://en.wikipedia.org/wiki/Nested_set_model) in Postgres. Heck, it's
pretty easy to replace GridFS, though storing files in the database is
generally a bad idea. The Foreign Data Wrapper also gives a very powerful
avenue for including data from arbitrary sources.

As the pattern indicates, for almost all of the situations we might want to
reach for another datastore, Postgres has a viable (often superior) solution.

## Not a requirement

Postgres is our *default* datastore, not a *requirement*. There are certainly
use cases where it isn't the right choice, and we don't take a dogmatic
stance. If you have a Wordpress project, you should probably use MySQL; their
support for other databases is cursory, at best. Few task queue libraries work
well with Postgres; using Redis makes a lot of sense here. Memcached is still
a workhorse for page caching. Be pragmatic. Push Postgres first, but be
prepared to support alternatives if the need arises.
