#!/bin/bash -e
#
#  make release script
#
if [ ! -z "$(git status --porcelain)" ]; then
    echo "Working directory not clean."
    exit 2
fi

echo "Current version: "
echo "=========="
cat src/environments/version.ts
echo
echo "=========="

echo
echo "Enter new version:"
read ver

if [ ! "$ver" ]; then
    echo "Not valid version"
    exit 1
fi

cat << EOF > src/environments/version.ts
export const Version = '${ver}';
export const LastModified = '`date +%Y%m%d`';
EOF

git add src/environments/version.ts
git commit -m ":bookmark: Bump version number"

set -o verbose

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
git checkout develop
