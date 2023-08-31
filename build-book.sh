#!/bin/bash

set -euo pipefail

START_SERVER=${1:-false}
PAGE_ROOT=${2:-"/"}
USE_TOC_BLACKLIST=${3:-false}

# Pre-process the book using the blacklist comment
if [ "$USE_TOC_BLACKLIST" = true ]; then
	echo "Using TOC blacklist"
	sed --in-place=".bak" '/# START REMOVE-FROM-PUBLISH/,/# END REMOVE-FROM-PUBLISH/{//!d}' book/_toc.yml
fi

# Build the jupyter book, everything else is post-processing
jupyter-book build book/

# Note: the structure of thebe_lite mimicks where thing are needed in the html folder
cp thebe_lite/* book/_build/html/ -r
sed "s,const PAGE_ROOT = \"/\";,const PAGE_ROOT = \"$PAGE_ROOT\";,g" thebe_lite/_static/sphinx-thebe.js >book/_build/html/_static/sphinx-thebe.js
rm book/_build/html/THEBE_LITE.md

# Copy all non notebook, markdown or build files into the build for local access in pyodide etc.
# The commands do as follows:
# 1. find: finds all paths in book/, filtering to see if they are files
# 2. grep: remove all files which begin in book/_, or have a .md/.ipynb extension or are have thebe_lite in their path
# 3. cut: remove the first 5 letters of each path, this  corresponds to book/
# 4. xargs: will execute the script inside the quotes
# 5. grep: finds a file's parent's path by matching against the section of the string ending in a '/'
# 6. mkdir: makes all the parent directories, -p will do so recrusively
# 7. cp: finally copies all files from the /book folder to /book/_build/html
find book/ -type f | grep -v "^book/_.*\|.*\.\(md\|ipynb\)" | cut -c 6- | xargs -i sh -c 'echo "book/_build/html/{}" | grep -o "^.*/" | xargs -d "\n" mkdir -p; cp book/"{}" book/_build/html/"{}"'

# Check whether python has the alias 'python' or 'python3'
if command -v python3 >/dev/null 2>&1; then
	python_command="python3"
else
	if command -v python >/dev/null 2>&1; then
		python_command="python"
	fi
fi

if [ "$python_command" = "" ]; then
	echo "Book successfully built. If you want to use interactive elements, start a local HTTP server for the _build/html folder."
	exit 0
fi

# Serves the files on port 8000, localhost (127.0.0.1:8000)
if [ "$START_SERVER" = true ]; then
	echo "Starting server on port 8000"
	$python_command -m http.server 8000 --directory book/_build/html
else
	echo "Book successfully built. If you want to use interactive elements,
	start a server locally using the command:
	    $python_command -m http.server 8000 --directory book/_build/html.
	Or run this script again (book will build again!):
		${0} true"
fi

echo "To close a python server run the commeand:
	kill-server.sh"
