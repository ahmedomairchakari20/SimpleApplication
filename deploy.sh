#!/bin/bash

cd ~/SimpleApplication/app

git pull origin main

mkdir ~/.npm-global

npm config set prefix '~/.npm-global'

export PATH=~/.npm-global/bin:$PATH

source ~/.profile

pm2 restart simple_app
