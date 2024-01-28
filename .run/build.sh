#!/bin/bash

rm -rf docs
npm run build:prod
mv dist docs
cp .run/CNAME docs
git add -A
