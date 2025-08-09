#!/bin/bash

rm -rf dist

npm ci
npm run build:prod

rm -rf docs

mv dist docs