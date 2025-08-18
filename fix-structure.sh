#!/bin/bash

echo "🔧 Fixing repository structure for deployment..."

# Create a temporary directory
mkdir -p temp_portfolio

# Copy all contents from Web-Portfolio-Duel-main to temp
cp -r Web-Portfolio-Duel-main/* temp_portfolio/
cp -r Web-Portfolio-Duel-main/.* temp_portfolio/ 2>/dev/null || true

# Remove the old Web-Portfolio-Duel-main folder
rm -rf Web-Portfolio-Duel-main

# Move everything from temp to current directory
mv temp_portfolio/* ./
mv temp_portfolio/.* ./ 2>/dev/null || true

# Clean up temp directory
rm -rf temp_portfolio

echo "✅ Structure fixed! Now commit and push:"
echo "git add ."
echo "git commit -m 'Fix folder structure'"
echo "git push"