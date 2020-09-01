FROM ruby:2.7

WORKDIR /usr/src/app

COPY Gemfile Gemfile.lock ./
RUN gem install bundler && \
  bundle install

ENV LC_ALL=C.UTF-8

CMD bundle exec jekyll serve --config _config.yml,override.yml --host 0.0.0.0 --incremental
