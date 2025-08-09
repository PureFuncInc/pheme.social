#!/bin/bash

rm -rf dist

npm ci
npm run build:github

rm -rf docs

mv dist docs