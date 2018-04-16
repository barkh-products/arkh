const path = require("path");
module.exports = {
  components: "src/**/AH*.{js,jsx,ts,tsx}",
  styleguideDir: "docs",
  require: [path.join(__dirname, "src/icons.js")],
  styles: {
    StyleGuide: {
      "@global body": {
        fontFamily: "Helvetica"
      }
    }
  }
};
