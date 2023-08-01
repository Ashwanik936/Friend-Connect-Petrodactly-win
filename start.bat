@echo off
echo Starting
node --es-module-specifier-resolution=node  --experimental-fetch ./index.js
echo Closed
@pause