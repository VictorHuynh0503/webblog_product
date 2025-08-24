@echo off
echo Starting Blog and Analytics Application...

:: Start Backend Server
start "Backend Server" cmd /k "cd /d d:\Projects\website_blog\backend && npm run dev"

:: Wait for 5 seconds to let backend initialize
timeout /t 5

:: Start Frontend Server
start "Frontend Server" cmd /k "cd /d d:\Projects\website_blog\frontend && npm run dev"

echo Both servers are starting...
echo Backend will be available at http://localhost:4000
echo Frontend will be available at http://localhost:3000
pause
