#!/bin/bash

export GIT_USER=c7d5a6
export USE_SSH=true

git add --all
git commit -m "new release"

git push

yarn deploy