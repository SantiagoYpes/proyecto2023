#!/bin/bash

set -m

npm start &

cd ./client/

npm i

npm run build