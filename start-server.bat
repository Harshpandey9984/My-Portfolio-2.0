@echo off
echo Starting Portfolio Website Development Server...
echo.
echo Once the server starts, open your browser to http://localhost:8000
echo Press Ctrl+C to stop the server when done
echo.

REM Check for Python 3
python --version 2>NUL
if %ERRORLEVEL% EQU 0 (
    echo Using Python to start server...
    echo Access your site at: http://localhost:8000
    python -m http.server 8000
    goto :end
)

REM Check for Python 2
python2 --version 2>NUL
if %ERRORLEVEL% EQU 0 (
    echo Using Python 2 to start server...
    python2 -m SimpleHTTPServer
    goto :end
)

REM Check for py launcher
py --version 2>NUL
if %ERRORLEVEL% EQU 0 (
    echo Using Python launcher to start server...
    py -m http.server
    goto :end
)

REM Check for Node.js
node --version 2>NUL
if %ERRORLEVEL% EQU 0 (
    echo Using Node.js to start server...
    npx http-server
    goto :end
)

echo No suitable server software found.
echo Please install Python or Node.js to use this script.
echo.
echo Alternatively, you can open index.html directly in your browser.
echo.
pause

:end
