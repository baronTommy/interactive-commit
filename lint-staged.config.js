module.exports = {
  "*.json": ["npm run qualityCheck:fmt"],
  "*.md": ["npm run qualityCheck:fmt"],
  "*.yml": ["npm run qualityCheck:fmt"],
  "*.js": ["npm run qualityCheck:lint", "npm run qualityCheck:fmt"],
  "*.{ts,tsx}": ["npm run qualityCheck:lint", "npm run qualityCheck:fmt"],
};
