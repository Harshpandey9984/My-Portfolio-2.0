@echo off
title Portfolio Deployment Assistant

echo.
echo ^🚀 Portfolio Deployment Assistant
echo =================================
echo.

echo Please choose your deployment platform:
echo 1) Netlify (Recommended)
echo 2) Vercel
echo 3) GitHub Pages  
echo 4) Surge.sh
echo 5) Build only (for manual deployment)
echo.

set /p choice="Enter your choice (1-5): "

if "%choice%"=="1" (
    echo ^📦 Building for Netlify...
    call npm run build
    echo ^✅ Build complete!
    echo ^📋 Next steps:
    echo    1. Go to https://netlify.com
    echo    2. Drag and drop the 'build' folder
    echo    3. Or connect your GitHub repository for auto-deploy
) else if "%choice%"=="2" (
    echo ^📦 Building for Vercel...
    call npm run build
    echo ^✅ Build complete!
    echo ^📋 Next steps:
    echo    1. Install Vercel CLI: npm install -g vercel
    echo    2. Run: vercel --prod
    echo    3. Or connect your GitHub repository at https://vercel.com
) else if "%choice%"=="3" (
    echo ^📦 Building for GitHub Pages...
    call npm run build
    echo ^✅ Build complete!
    echo ^📋 Next steps:
    echo    1. Install gh-pages: npm install --save-dev gh-pages
    echo    2. Add homepage to package.json
    echo    3. Run: npm run deploy:gh
) else if "%choice%"=="4" (
    echo ^📦 Building for Surge.sh...
    call npm run build
    echo ^✅ Build complete!
    echo ^📋 Next steps:
    echo    1. Install Surge: npm install -g surge
    echo    2. Run: surge build
    echo    3. Choose your domain
) else if "%choice%"=="5" (
    echo ^📦 Building project...
    call npm run build
    echo ^✅ Build complete!
    echo ^📁 Your built files are in the 'build' folder
    echo ^🌐 You can deploy these files to any static hosting service
) else (
    echo ^❌ Invalid choice. Please run the script again.
)

echo.
echo ^🎉 Happy deploying!
echo ^📚 Check DEPLOYMENT.md for detailed instructions
echo.
pause
