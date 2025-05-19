#!/bin/bash

# Create public directory if it doesn't exist
mkdir -p public

# Copy all HTML files
cp *.html public/ 2>/dev/null || true

# Copy CSS files
cp *.css public/ 2>/dev/null || true

# Copy JS files
cp *.js public/ 2>/dev/null || true

# Copy manifest.json
cp manifest.json public/ 2>/dev/null || true

# Copy assets directory if it exists
if [ -d "assets" ]; then
  mkdir -p public/assets
  cp -r assets/* public/assets/
fi

# Create placeholder image if needed
mkdir -p public/assets/images
if [ ! -f "assets/images/image-placeholder.png" ]; then
  echo "Creating placeholder image..."
  # This is a placeholder for creating a default image - in a real build
  # you'd need to include one manually or use a tool to generate it
  cp assets/images/profile.jpg public/assets/images/image-placeholder.png 2>/dev/null || true
fi

# Create robots.txt
echo "User-agent: *
Allow: /" > public/robots.txt

# Create a simple sitemap
echo '<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourportfolio.com/</loc>
    <lastmod>2025-05-19</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>' > public/sitemap.xml

echo "Build completed successfully!"
