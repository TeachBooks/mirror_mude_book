#!/bin/bash

set -euo pipefail

docker compose -f ./docker/docker-compose.yml down
START_SERVER=${1:-true} docker compose -f ./docker/docker-compose.yml up -d

docker logs -f mude-book
