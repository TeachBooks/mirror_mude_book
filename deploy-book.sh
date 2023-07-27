#!/bin/sh

docker compose down
docker compose up -d

docker logs -f mude-book
