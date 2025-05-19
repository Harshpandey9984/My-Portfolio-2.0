@echo off
echo Simple Portfolio Server Launcher - FIXED VERSION
echo =============================================
echo.
echo Starting Python HTTP server...
echo.
echo When the server starts, open your web browser to:
echo.
echo http://localhost:8000
echo.
echo (NOT http://[::]:8000/ which may cause an error)
echo.
echo Press Ctrl+C to stop the server when done
echo.
python -m http.server 8000
pause
