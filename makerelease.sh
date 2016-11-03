#!/bin/bash -e
set -o verbose

git status
ng build --prod
git checkout master
git pull
rm -rf *.html *.js *.gz assets
cp -R dist/* .
cp index.html 404.html
rm -rf dist
git add .
git commit -m "release `date '+%Y%m%d%H%M%S'`"
git push
git checkout angular-team
