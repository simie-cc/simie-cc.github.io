#!/bin/bash -e
set -o verbose

ng build --prod
git checkout master
rm -rf *.html *.js *.gz assets
cp -R dist/* .
cp index.html 404.html
rm -rf dist
git add .
git commit
