// update-version.js
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Path to package.json
const packageJsonPath = path.join(__dirname, 'package.json');

// Read and parse package.json
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Get the current date in CalVer format (YYYY.MM.DD)
const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0');
const day = String(now.getDate()).padStart(2, '0');
const calVer = `${year}.${month}.${day}`;

// Update version if necessary
if (packageJson.version !== calVer) {
  console.log(`Updating version from ${packageJson.version} to ${calVer}`);
  packageJson.version = calVer;

  // Write the updated package.json back to disk
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');

  // Automatically add the updated package.json to the commit
  execSync('git add package.json');
}
