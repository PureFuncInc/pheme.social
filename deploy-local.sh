#!/bin/bash

npm ci
npm run build:prod

rm -f dist.zip
zip -r dist.zip dist

scp dist.zip office:~
