@echo off
echo 🔧 Fixing repository structure for deployment...

REM Create a temporary directory
mkdir temp_portfolio

REM Copy all contents from Web-Portfolio-Duel-main to temp
xcopy /E /I /H /Y "Web-Portfolio-Duel-main\*" "temp_portfolio\"

REM Remove the old Web-Portfolio-Duel-main folder
rmdir /S /Q "Web-Portfolio-Duel-main"

REM Move everything from temp to current directory
xcopy /E /I /H /Y "temp_portfolio\*" ".\"

REM Clean up temp directory
rmdir /S /Q "temp_portfolio"

echo ✅ Structure fixed! Now commit and push:
echo git add .
echo git commit -m "Fix folder structure"
echo git push

pause