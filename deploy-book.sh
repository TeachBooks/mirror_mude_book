#!/bin/sh

docker compose down
mkdir -p .artifacts/build

docker compose up -d --build

docker cp mude-book:/build ./.artifacts

docker logs -f mude-book
