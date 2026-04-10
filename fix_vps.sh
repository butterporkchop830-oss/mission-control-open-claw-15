#!/bin/bash
cd /Users/ca/Desktop/openclaw-deploy
# Remove all references to VPS dropdown checkbox
sed -i '' 's/<input[^>]*id="bc-vps"[^>]*>//g' index.html 2>/dev/null || echo "No VPS checkbox found"

# Remove activity filter VPS button if exists
sed -i '' 's/id="af-node-VPS"[^>]*>[^<]*<\/div>//g' index.html 2>/dev/null || echo "No VPS activity filter"

echo "✅ Cleaned VPS UI elements"
