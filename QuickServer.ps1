# Simple server launcher for portfolio website

Write-Host "Portfolio Website Server" -ForegroundColor Cyan
Write-Host "======================" -ForegroundColor Cyan
Write-Host ""
Write-Host "This script will start a local server to view your portfolio website." -ForegroundColor White
Write-Host ""

Write-Host "Choose a server option:" -ForegroundColor Yellow
Write-Host "1. Python server (http://localhost:8000)" -ForegroundColor White
Write-Host "2. Node.js server (http://localhost:8000)" -ForegroundColor White
Write-Host "3. NPM live-server (http://localhost:8080)" -ForegroundColor White
Write-Host ""

$choice = Read-Host "Enter your choice (1-3)"

switch ($choice) {
    "1" {
        Write-Host ""
        Write-Host "Starting Python server..." -ForegroundColor Green
        Write-Host "Access your website at: http://localhost:8000" -ForegroundColor Cyan
        Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
        Write-Host ""
        python -m http.server 8000
    }
    "2" {
        Write-Host ""
        Write-Host "Starting Node.js server..." -ForegroundColor Green
        Write-Host "Access your website at: http://localhost:8000" -ForegroundColor Cyan
        Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
        Write-Host ""
        node server.js
    }
    "3" {
        Write-Host ""
        Write-Host "Starting NPM live-server..." -ForegroundColor Green
        Write-Host "Access your website at: http://localhost:8080" -ForegroundColor Cyan
        Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
        Write-Host ""
        npx live-server --port=8080
    }
    default {
        Write-Host "Invalid choice. Please try again." -ForegroundColor Red
        exit 1
    }
}
