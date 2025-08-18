#!/bin/bash

# Portfolio Deployment Script
echo "🚀 Starting portfolio deployment process..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📁 Initializing git repository..."
    git init
fi

# Add all files
echo "📦 Adding files to git..."
git add .

# Commit changes
echo "💾 Committing changes..."
read -p "Enter commit message (or press Enter for default): " commit_message
if [ -z "$commit_message" ]; then
    commit_message="Portfolio update with mobile enhancements"
fi
git commit -m "$commit_message"

# Check if remote origin exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "🔗 Setting up GitHub repository..."
    echo "Please create a new repository on GitHub first, then enter the repository URL:"
    read -p "GitHub repository URL (e.g., https://github.com/username/repo.git): " repo_url
    git remote add origin "$repo_url"
fi

# Push to GitHub
echo "⬆️ Pushing to GitHub..."
git push -u origin main

echo "✅ Code pushed to GitHub successfully!"
echo ""
echo "🌐 Next steps for deployment:"
echo "1. Go to https://vercel.com"
echo "2. Sign in with your GitHub account"
echo "3. Click 'New Project'"
echo "4. Import your repository"
echo "5. Click 'Deploy'"
echo ""
echo "🎉 Your portfolio will be live in 2-3 minutes!"