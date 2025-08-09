#!/bin/bash

npm ci
npm run build:github

rm -rf dist
rm -f dist.zip
rm -rf docs

mkdir docs
zip -r dist.zip docs
