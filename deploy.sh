#!/usr/bin/env bash

set -ex
ulimit -u 512

DIR=$(mktemp --directory)
trap "rm -rf $DIR" EXIT

pushd $DIR

git clone file:///srv/git/www/class-profile-2023.git --depth=1
cd class-profile-2023

export NEXT_PUBLIC_BASE_PATH="/classprofile/2023"
npm ci
npm run build

chgrp -R www out
chmod -R g+w out

shopt -s dotglob

rm -rf /srv/classprofile/2023/*
mv out/* /srv/classprofile/2023/

popd