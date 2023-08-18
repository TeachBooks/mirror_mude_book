#!/bin/sh

pid=$(ps aux | grep http.server | head -n 1 | awk '{ print $2 }')
kill -9 $pid

echo "If kill-server.sh did not successfully kill the server:
    - you are probably using Windows ;)
    - try the following commands

    in git bash:
        tskill python

    in cmd or PowerShell:
        TASKKILL /IM python.exe /F"