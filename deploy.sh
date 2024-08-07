#! /bin/bash

# status latest 
git status

# pull latest 
git pull

# prepare for generate docs
cd docs

# re-generate docs
rm -rf _book/ && gitbook build

# copy to docs
cp -rf _book/* ./

# prepare for push 
cd ..

# add commits
git add .

# commit 
git commit -m "auto deploy website"

# push to github and others
git pu
h origin

# status latest 
git status