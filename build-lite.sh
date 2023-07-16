#!/bin/sh

jupyter-book build book
cp book/thebe_lite/libs/* book/_build/html -r
cp book/thebe_lite/* book/_build/html/_static

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

$python_command -m http.server 8000 --directory book/_build/html &
