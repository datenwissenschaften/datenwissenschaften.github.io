const fs = require('fs');
const path = require('path');

// Read package.json
const packageJsonPath = path.join(__dirname, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Get current date in CalVer format (YYYY.MM.DD)
const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0');
const day = String(now.getDate()).padStart(2, '0');
const calVer = `${year}.${month}.${day}`;

// Update version if it's different
if (packageJson.version !== calVer) {
  console.log(`Updating version from ${packageJson.version} to ${calVer}`);
  packageJson.version = calVer;

  // Write updated package.json
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');

  // Add the updated package.json to the commit
  const { execSync } = require('child_process');
  execSync('git add package.json');
}
