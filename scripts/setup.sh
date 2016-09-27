#!/bin/bash

git config filter.version.smudge '${GIT_WORK_TREE}/scripts/version.sh'
git config filter.version.clean '${GIT_WORK_TREE}/scripts/empty.sh'
