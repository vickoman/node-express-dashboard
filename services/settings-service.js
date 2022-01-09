const fs = require('fs');
const path = require('path');

const settingsFilePath = path.join(__dirname, '../json/settings.json');
function getSettings() {
  const settingsData = fs.readFileSync(path.join(settingsFilePath));
  return JSON.parse(settingsData);
}

function writeSettings(newSettings) {
 const settingsJson = JSON.stringify(newSettings, null, 2);
 try {
   fs.writeFileSync(settingsFilePath, settingsJson);
   return true;
 } catch (e) {
   return false;
 }
}

function getDefaultDir() {
  const defaultDir = getSettings().defaultDir;
  if(!defaultDir){
    return process.cwd();
  }
  return isValidDir(defaultDir) ? defaultDir : process.cwd();
}

function isValidDir(dirPath) {
  try {
    fs.readdirSync(dirPath);
    return true;
  }catch (e) {
    return false;
  }
}

module.exports = {
  getSettings,
  writeSettings,
  getDefaultDir,
  isValidDir
};