#!/bin/sh

SCRIPT_DIR=`dirname $0`

echo "extract-attributes.js"
node $SCRIPT_DIR/extract-attributes.js

echo "generate-components.js"
node $SCRIPT_DIR/generate-components.js $SCRIPT_DIR/data/elements.txt

echo "generate-index.js"
node $SCRIPT_DIR/generate-index.js
