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
git commit
git push
git checkout angular-team
