module.exports = {
  "*.json": ["npm run fmt"],
  "*.md": ["npm run fmt"],
  "*.yml": ["npm run fmt"],
  "*.js": ["npm run lint", "npm run fmt"],
  "*.{ts,tsx}": ["npm run lint", "npm run fmt"],
};
