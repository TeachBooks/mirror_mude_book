# syntax=docker/dockerfile:1

FROM python:3.11-slim-bullseye AS builder
WORKDIR /book
RUN apt-get update && apt-get -y install git

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

COPY ./ /book
RUN rm -R /book/book/_build && mv /book/.artifacts/build /book/book/_build

RUN ./build-lite.sh

FROM httpd:2.4
WORKDIR /build
COPY --from=0 /book/book/_build/. /build
RUN rm -rf /usr/local/apache2/htdocs/ && ln -s /build/html /usr/local/apache2/htdocs

