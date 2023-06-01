#!/bin/bash

# Build your ReactJS app
npm run build

# Deploy the build folder to Surge with custom domain
surge --project ./build --domain leveluptechstudios.com
