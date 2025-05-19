@echo off
echo Copying files to public directory for Vercel deployment...

:: Create public directory if it doesn't exist
if not exist "public" mkdir public

:: Copy all HTML, CSS, and JS files
copy *.html public\
copy *.css public\
copy *.js public\

:: Create assets directory in public if it doesn't exist
if not exist "public\assets" mkdir public\assets
if not exist "public\assets\images" mkdir public\assets\images

:: Copy images
xcopy /E /I /Y assets\images public\assets\images

echo Build complete! Files copied to public directory.
