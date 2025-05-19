# Portfolio Website Development Server Starter

Write-Host "Starting Portfolio Website Development Server..." -ForegroundColor Cyan
Write-Host ""
Write-Host "Once the server starts, open your browser to http://localhost:8000" -ForegroundColor Yellow
Write-Host "Press Ctrl+C to stop the server when done"
Write-Host ""

# Try Python 3
try {
    $pythonVersion = python --version 2>&1
    if ($pythonVersion -match "Python 3") {
        Write-Host "Using Python 3 to start server..." -ForegroundColor Green
        Write-Host "Access your site at: http://localhost:8000" -ForegroundColor Cyan
        python -m http.server 8000
        exit
    }
} catch {
    # Python command not found
}

# Try Python 2
try {
    $python2Version = python2 --version 2>&1
    if ($python2Version -match "Python 2") {
        Write-Host "Using Python 2 to start server..." -ForegroundColor Green
        python2 -m SimpleHTTPServer
        exit
    }
} catch {
    # Python2 command not found
}

# Try py launcher
try {
    $pyVersion = py --version 2>&1
    if ($pyVersion -match "Python") {
        Write-Host "Using Python launcher to start server..." -ForegroundColor Green
        py -m http.server
        exit
    }
} catch {
    # py command not found
}

# Try Node.js
try {
    $nodeVersion = node --version 2>&1
    if ($nodeVersion -match "v") {
        Write-Host "Using Node.js to start server..." -ForegroundColor Green
        npx http-server
        exit
    }
} catch {
    # Node command not found
}

Write-Host "No suitable server software found." -ForegroundColor Red
Write-Host "Please install Python or Node.js to use this script."
Write-Host ""
Write-Host "Alternatively, you can open index.html directly in your browser."
Write-Host ""
Read-Host -Prompt "Press Enter to exit"
