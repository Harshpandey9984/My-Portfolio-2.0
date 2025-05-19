#!/bin/bash

# Create public directory if it doesn't exist
mkdir -p public

# Copy all HTML, CSS, JS files to public
cp *.html *.css *.js public/ 2>/dev/null || true

# Copy assets directory if it exists
if [ -d "assets" ]; then
  mkdir -p public/assets
  cp -r assets/* public/assets/
fi

echo "Build completed successfully!"
