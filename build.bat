@echo off
echo Copying files to public directory for Vercel deployment...

:: Create public directory if it doesn't exist
if not exist "public" mkdir public

:: Copy all HTML, CSS, and JS files
copy *.html public\
copy *.css public\
copy *.js public\

:: Copy manifest.json
copy manifest.json public\

:: Create assets directory in public if it doesn't exist
if not exist "public\assets" mkdir public\assets
if not exist "public\assets\images" mkdir public\assets\images

:: Copy images
xcopy /E /I /Y assets\images public\assets\images

:: Create placeholder image if needed
if not exist "assets\images\image-placeholder.png" (
    echo Creating placeholder image...
    copy assets\images\profile.jpg public\assets\images\image-placeholder.png
)

:: Create robots.txt
echo User-agent: * > public\robots.txt
echo Allow: / >> public\robots.txt

:: Create a simple sitemap
echo ^<?xml version="1.0" encoding="UTF-8"?^> > public\sitemap.xml
echo ^<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"^> >> public\sitemap.xml
echo   ^<url^> >> public\sitemap.xml
echo     ^<loc^>https://yourportfolio.com/^</loc^> >> public\sitemap.xml
echo     ^<lastmod^>2025-05-19^</lastmod^> >> public\sitemap.xml
echo     ^<priority^>1.0^</priority^> >> public\sitemap.xml
echo   ^</url^> >> public\sitemap.xml
echo ^</urlset^> >> public\sitemap.xml

echo Build complete! Files copied to public directory.
