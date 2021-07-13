#!/bin/bash
FORSPID=$(ps aux | grep -iv "grep" | grep 'node ./node_modules/.bin/electron js/electron.js' | head -1 | awk '{print $2}')
if [ ! -z "$FORSPID" ]; then
	kill $FORSPID
fi
