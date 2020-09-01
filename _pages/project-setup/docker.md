---
title: Docker for development
layout: post
---

Below we lay out recommendations for using Docker to wrap development
dependencies. Unfortunately, this is a relatively new space and we don't have
a consistent, end-to-end setup at the moment. Instead, we'll provide pointers,
partial solutions, and examples. We intend to flesh out complete solutions as
they become apparent in addition to a comprehensive introduction.

## Why?

Consider your app's production environment. You're likely running on cloud.gov
(which runs Ubuntu Linux) with specific versions of databases, app language
(e.g. Go/Node/Python/Ruby), and required libraries (you are [pinning your
dependencies](https://pages.18f.gov/before-you-ship/infrastructure/pinning-dependencies/),
right?). Now consider your local environment; if you're an TTS engineer, you
likely have OS X, language version management tools, and an assortment of
strategies for running databases, worker queues, etc. If you're a designer,
open source contributor, or working at a partner agency, we should assume even
less. Not only do we have significant mismatches between these environments,
we also require significant setup for new and infrequent contributors.

Docker promises a partial solution to this problem by wrapping dependencies
into a consistent, reproducible environment. While we don't generally support
Docker in production, we can create a setup that matches cloud.gov relatively
closely and which makes running our app painless.

## Recommendations

We hope to have an end-to-end recommendation in the future, but for now we
provide these scoped recommendations.

### Use Docker-Compose

Docker introductions tend to highlight the
[`Dockerfile`](https://docs.docker.com/engine/reference/builder/), a
procedural description of how to build a Docker image, but that's generally
not encompassing enough for development needs. We will likely want to run a
database (or other service) separate from our application, and provide
different environments (e.g. one for building, one for development, one for
production-like); while it's possible to include all of that in a single
image, it's generally better to use separate, focused images. Moreover, while
Dockerfiles provide _hints_ around which ports should be exposed, which files
should be shared with the host, etc., the docker-compose file instantiates
_specific_ values. This is needed when we run the app locally.

[Docker-compose files](https://docs.docker.com/compose/compose-file/) solve
both of these problems by allowing us to specify different services,
dependencies between those services, and specific values for exposed ports,
mount points, etc. Though it feels more complex at first, we recommend using
docker-compose even when a single Dockerfile would suffice so that we have a
consistent tool across TTS engineering. One of the bigger "aha" moments you
will encounter is transitioning from thinking of Docker as a VM build script
(a la `vagrant`) to thinking of it as a way to configure ("orchestrate")
several, single-purpose containers (i.e. microservices).

### Base-images

There's a balance to be struck between mirroring cloud.gov (e.g. through the
[cflinuxfs3 base image](https://hub.docker.com/r/cloudfoundry/cflinuxfs3/) based on Ubuntu 18.04 LTS, aka Bionic Beaver)
and using [official Docker images](https://hub.docker.com/explore/) for Node,
Postgres, Nginx, etc. We're waiting on [Docker-based buildpacks](https://buildpacks.io) to stabilize, but in the meantime we
recommend using the Ubuntu build (where available) of the official images,
such as `python:3.5`, `ruby:2.4`, etc. Avoid the `slim` and `alpine` images as
they aren't likely to closely match the production environment.

### Mounting the working directory

Demanding the developers rebuild their Docker images after every modification
won't fly and isn't necessary. Instead, we'll want to mount the source code
into a shared volume, meaning edits on the host file system are visible within
the container and vice versa. This will likely look something like:

```yml
# docker-compose.yml
my-service:
  volumes:
  - $PWD:/usr/src/app
  working_dir: /usr/src/app
  ...
```

where `/usr/src/app` is the mount point within the container (different Docker
images will assume the project's code is at different spots within the file
system; be sure to verify).

By doing this, you guarantee that the container sees your changes without
needing to rebuild the Docker image (which can take a considerable amount of
time).

Does this mean that your Dockerfile shouldn't include the application's source
code? It certainly means that whatever the container _had_ stored at the
mount point is ignored during local development. That doesn't rule out all of
the benefits of including a checkpoint of the application source within the
docker image, however. See [Are Dockerfiles needed?](#are-dockerfiles-needed)
for further discussion.

### Matching cloud.gov

We'd like our local environment to match production, so let's mirror our
cloud.gov manifest files in docker-compose.yml. This way, we'll be accessing
our configuration variables the same way (e.g. via cf-env) in our two
environments.

Adding fixed environment variables (e.g. `DJANGO_SETTINGS_MODULE`) is straight
forward, just add an `environment` key to your service definition. We'll also
want to include settings provided within cloud.gov like `PORT`,
`DATABASE_URL`, and (potentially) `TMPDIR`. See the [full
list](https://docs.cloudfoundry.org/devguide/deploy-apps/environment-variable.html#app-system-env)
from Cloud Foundry. We'll also want to duplicate the serialized JSON of the
`VCAP_APPLICATION` and `VCAP_SERVICES` variables, which is pretty straight
forward using a "folded" string literal (`>`):

```yml
my-service:
  environment:
    DATABASE_URL: postgres://postgres@my-database-service/postgres
    PORT: 8000
    SOMETHING: Else
    TMPDIR: /tmp
    VCAP_APPLICATION: >
      {"uris": ["localhost", "0.0.0.0", "127.0.0.1"]}
    VCAP_SERVICES: >
      {"my-user-provided-service": [{"credentials": {"SOME_KEY": "VALUE"}}],
       "my-elastic-service": [{"more": "settings"}]}
```

## For further debate

As with any new tool, we need time to derive best practices. Below we catalog
a few of the more important debates and solutions we're actively using. We'll
see which of the competing strategies resonates the most at a future date.

### Library storage

One of our primary needs from Docker is to wrap all of our application's
runtime (and development) libraries -- how do we do that?

One strategy would be to create a Dockerfile which instructed Docker to
include a description of these libraries (`requirements.txt`, `package.json`,
`Gemfile.lock`, etc.) and to download those requirements into the constructed
Docker image (e.g. via `pip install`, `gem install`, `npm install -g`). Any
commands which use this constructed image would have the libraries already at
their disposal. The benefit to this approach is that we could ship this image
around and all users would have access to the full environment (this is the
promise of Docker in production). The cost is that every change to our
requirements forces us to rebuild our images.

A different strategy would store the libraries somewhere in the current
directory, as we've come to expect from `npm install` and `node_modules`. This
can be recreated in other languages through careful configuration of
`virtualenv`s, `bundler`, etc. In this scenario, we don't need to worry about
rebuilding images based on requirements (which are effectively dynamically
included). Further, we can destroy our Docker containers and images with
little fear as all the libraries are actually stored in the host's file
system. This approach requires a bit more planning and configuration and
diverges from the majority of Docker's use cases (meaning documentation is
harder to find). It also has confusion points around Linux binaries being
stored on OS X/Windows/etc.

As a third strategy, we can try storing these libraries within a Docker
volume, meaning they stay with the project between restarts but are not
(generally) accessible from the host. We'd more commonly use volumes like this
for database storage, but there's nothing to stop us from storing our runtime
libraries the same way. This approach has the benefit of being very flexible
-- our docker-compose configurations aren't closely tied to our specific
projects, but requires significant planning and configuration.

### One-off commands

Apps generally require more than a single "run-everything" command -- we'll
want to get to the database console, run tests, migrate data, etc. etc. We
have several strategies at our disposal.

Before we dive too deep, it's important to first discuss `docker-compose run`.
Consider
```sh
docker-compose run --rm my-service py.test --pdb
```
This starts your `my-service` (as defined in your docker-compose manifest),
including any necessary dependencies, such as databases. It doesn't execute
`my-service`'s startup command, however; instead it runs `py.test` within the
`my-service` container. Once that command finished, Docker stops and deletes
(`--rm`) the running container (any services it depended on will continue to
run).

As a first approach, we can run these one-off commands directly as described
above. This works well, but requires engineers keep track of the relevant
commands and which image they should be ran within. We can soften the burden
by writing wrapping shell scripts or command aliases.

A second strategy places those commands within the docker-compose manifest as
pseudo-services, e.g.
```yml
services:
  py.test:
    image: thing-that-contains-pytest
    volumes:
    - $PWD:/apps-dir
    entrypoint: py.test
```
These would be executed via
```sh
docker-compose run --rm py.test --pdb
```
This approach defines a concise list of the entry points to your software
suite, but may require additional image rebuilding and can be confusing when
combined with `docker-compose up`. If taking this approach, be sure to use
YAML anchors to reduce duplication (search within [this
example](https://learnxinyminutes.com/docs/yaml/) for more details).

If using Django, [Atul](https://github.com/toolness) has written a [manage.py
library](https://github.com/18F/calc/blob/0994b0aa496e9ec11224cb403b8f6b408ba5eb04/docker_django_management.py)
which intelligently selects between docker-compose and the local environment.
If we can describe all of our one-time commands via Django, this tactic may
get you going faster.

### Are Dockerfiles needed?

Describing our application setup in a Dockerfile is a great way to create a
standard platform for the team. We aren't actually shipping this image around,
however, and, in many cases, we're overriding much of the work it performed
(e.g. by replacing the working directory with the local version of the files).
Can we get by without an application image, then?

For example, consider a docker-compose manifest that referred only to official
images but shared a Docker volume:
```yml
services:
  my-app:
    image: python:3.5
    volumes:
    - dependencies:/path/to/dependency/storage
volumes:
  dependencies:
```

Then we could execute all of our application setup _without_ an application
image:
```sh
docker-compose run --rm my-app pip install
docker-compose run --rm my-app gunicorn   # start app
```

This approach isn't described often (it seems the community is still
settling), but it's worth considering.

## Examples

### Docker as primary dev env

* [calc](https://github.com/18F/calc)
* [e-QIP](https://github.com/18F/e-QIP-prototype)
* [omb-eregs](https://github.com/18F/omb-eregs)
* [pa11y-lambda](https://github.com/18F/pa11y-lambda)
* [tock](https://github.com/18F/tock)
* [federalist](https://github.com/18F/federalist)

### Docker as alternative dev env

* [acqstackdb](https://github.com/18F/acqstackdb)
* [autoapi](https://github.com/18F/autoapi)
* [checklistomania](https://github.com/18F/checklistomania)
* [continua11y](https://github.com/18F/continua11y)
* [domain-scan](https://github.com/18F/domain-scan)
* [iaa-gem](https://github.com/18F/iaa-gem)
* [identity-idp](https://github.com/18F/identity-idp)
* [micropurchase](https://github.com/18F/micropurchase)

## Additional reading

* Atul's [Reflections on Docker-based
  development](https://github.com/18F/dev-environment-standardization/blob/18f-pages/pages/virtualization/docker.md)
* OMB eRegs' [Resolving common container
  issues](https://github.com/18F/omb-eregs#resolving-common-container-issues)
