@echo off
echo 🚀 Starting portfolio deployment process...

REM Check if git is initialized
if not exist ".git" (
    echo 📁 Initializing git repository...
    git init
)

REM Add all files
echo 📦 Adding files to git...
git add .

REM Commit changes
echo 💾 Committing changes...
set /p commit_message="Enter commit message (or press Enter for default): "
if "%commit_message%"=="" set commit_message=Portfolio update with mobile enhancements
git commit -m "%commit_message%"

REM Check if remote origin exists
git remote get-url origin >nul 2>&1
if errorlevel 1 (
    echo 🔗 Setting up GitHub repository...
    echo Please create a new repository on GitHub first, then enter the repository URL:
    set /p repo_url="GitHub repository URL (e.g., https://github.com/username/repo.git): "
    git remote add origin "%repo_url%"
)

REM Push to GitHub
echo ⬆️ Pushing to GitHub...
git push -u origin main

echo ✅ Code pushed to GitHub successfully!
echo.
echo 🌐 Next steps for deployment:
echo 1. Go to https://vercel.com
echo 2. Sign in with your GitHub account
echo 3. Click 'New Project'
echo 4. Import your repository
echo 5. Click 'Deploy'
echo.
echo 🎉 Your portfolio will be live in 2-3 minutes!
pause