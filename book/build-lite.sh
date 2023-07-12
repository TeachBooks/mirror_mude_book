#!/bin/sh

jupyter-book build ./
cp thebe_lite/libs/* _build/html -r
cp thebe_lite/sphinx-thebe.js _build/html/_static

python3 -m http.server --directory _build/html
