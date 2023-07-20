#!/bin/sh

jupyter-book build book
cp book/thebe_lite/* book/_build/html/ -r

if command -v python > /dev/null 2>&1
then
	python_command="python"
else
	if command -v python3 > /dev/null 2>&1
	then
		python_command="python3"
	else
		echo "Could not find python, cannot start webserver."
		exit 1
	fi
fi

# Copy all non notebook, markdown or build files into the build for local access in pyodide etc.
find book/ -exec test -f {} \; -print | grep -v "^book/_.*\|.*\.\(md\|ipynb\)\|thebe_lite" | cut -c 6- | xargs -i sh -c 'echo "book/_build/html/{}" | grep -o "^.*/" | xargs -d "\n" mkdir -p; cp book/"{}" book/_build/html/"{}"'

$python_command -m http.server 8000 --directory book/_build/html

