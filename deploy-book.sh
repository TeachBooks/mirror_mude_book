#!/bin/sh

docker compose down
docker compose up -d --build

docker logs -f mude-book
