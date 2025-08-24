#!/bin/bash

echo "Starting deployment process..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "Installing Vercel CLI globally..."
    npm install -g vercel
fi

# Install dependencies
echo "Installing dependencies..."
npm install

# Run tests if they exist
if grep -q "\"test\"" package.json; then
    echo "Running tests..."
    if ! npm test; then
        echo "Tests failed! Deployment aborted."
        exit 1
    fi
fi

# Build the application
echo "Building the application..."
npm run build

# Deploy to Vercel
echo "Deploying to Vercel..."
if vercel --prod; then
    echo "Deployment successful!"
else
    echo "Deployment failed!"
    exit 1
fi

echo "Done!"
