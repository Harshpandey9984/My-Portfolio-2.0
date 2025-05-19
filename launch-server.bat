@echo off
echo Portfolio Server Launcher
echo ========================
echo.
echo This script will start a local server to view your portfolio website.
echo.
echo Choose a server option:
echo 1. Python server (recommended)
echo 2. Node.js server
echo 3. NPM live-server (if installed)
echo.

set /p choice="Enter choice (1-3): "

if "%choice%"=="1" (
    echo.
    echo Starting Python server...
    echo Access your website at: http://localhost:8000
    echo.
    python -m http.server 8000
) else if "%choice%"=="2" (
    echo.
    echo Starting Node.js server...
    echo Access your website at: http://localhost:8000
    echo.
    node server.js
) else if "%choice%"=="3" (
    echo.
    echo Starting NPM live-server...
    echo Access your website at: http://localhost:8080
    echo.
    npx live-server --port=8080
) else (
    echo Invalid choice. Please try again.
    pause
    exit /b 1
)

pause
