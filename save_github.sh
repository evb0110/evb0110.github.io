#!/bin/bash

git add .
commit=$(date)
git commit -m"automatic: $commit"
git push
