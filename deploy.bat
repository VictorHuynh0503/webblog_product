@echo off
echo Starting deployment process...

:: Check if Vercel CLI is installed
where vercel >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo Installing Vercel CLI globally...
    npm install -g vercel
)

:: Install dependencies
echo Installing dependencies...
npm install

:: Run tests if they exist
if exist "package.json" (
    findstr "test" package.json >nul 2>nul
    if %ERRORLEVEL% EQU 0 (
        echo Running tests...
        npm test
        if %ERRORLEVEL% NEQ 0 (
            echo Tests failed! Deployment aborted.
            exit /b 1
        )
    )
)

:: Build the application
echo Building the application...
npm run build

:: Deploy to Vercel
echo Deploying to Vercel...
vercel --prod

if %ERRORLEVEL% EQU 0 (
    echo Deployment successful!
) else (
    echo Deployment failed!
    exit /b 1
)

echo Done!
