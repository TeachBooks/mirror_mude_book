#!/bin/sh

pid=$(ps aux | grep http.server | head -n 1 | awk '{ print $2 }')
kill -9 $pid
