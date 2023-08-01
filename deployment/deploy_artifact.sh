#!/bin/bash

set -euo pipefail

if [[ $# -lt 3 ]]; then
    echo "[!] Illegal number of parameters" >&2
    echo "Usage: $0 <branch> <from_dir> <deployment_dir> [job-name] [project-id] [gitlab-token]" >&2
    exit 2
fi

BRANCH_NAME=$1
FROM_DIR=$2
DEPLOYMENT_DIR=$3


JOB_NAME=${4-"build-book"}
PROJECT_ID=${5-"mude/book"}
# PLEASE, don't leak this. It's a project access token with read access to the book repository.
GITLAB_TOKEN=${6-"glpat-NEFk4DUgxy2cBr4FHyzS"}

CURRENT_DIR=$(pwd)
WORKDIR=$(mktemp -d)

echo "[*] Using workdir $WORKDIR"

cleanup() {
    echo "[*] Cleaning up workdir $WORKDIR"
    rm -rIf $WORKDIR
    cd $CURRENT_DIR
}

trap cleanup EXIT

urlencode() {
    old_lc_collate=${LC_COLLATE-"C"}
    LC_COLLATE=C

    local length="${#1}"
    for (( i = 0; i < length; i++ )); do
        local c="${1:$i:1}"
        case $c in
            [a-zA-Z0-9.~_-]) printf '%s' "$c" ;;
            *) printf '%%%02X' "'$c" ;;
        esac
    done
    LC_COLLATE=$old_lc_collate
}

if ! command -v curl &> /dev/null
then
    echo "[!] curl command could not be found"
    exit 255
fi

if ! command -v unzip &> /dev/null
then
    echo "[!] unzip command could not be found"
    exit 255
fi

PROJECT_ENCODED=$(urlencode "$PROJECT_ID")
BRANCH_ENCODED=$(urlencode "$BRANCH_NAME")
JOB_ENCODED=$(urlencode "$JOB_NAME")

echo "[*] Downloading artifact for job $JOB_NAME on branch $BRANCH_NAME of project $PROJECT_ID"
curl -sS --location --output "$WORKDIR/artifact.zip" --header "PRIVATE-TOKEN: $GITLAB_TOKEN" "https://gitlab.tudelft.nl/api/v4/projects/$PROJECT_ENCODED/jobs/artifacts/$BRANCH_ENCODED/download?job=$JOB_ENCODED"
cd $WORKDIR

echo "[*] Unzipping artifact"
unzip -q artifact.zip
echo "[*] Removing artifact"
rm artifact.zip

echo "[*] Deploying artifact"
mkdir -p $DEPLOYMENT_DIR || echo "Could not create deployment directory"
cp -r $WORKDIR/$FROM_DIR/* $DEPLOYMENT_DIR
