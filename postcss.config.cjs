const autoprefixer = require("autoprefixer");
const presetEnv = require("postcss-preset-env");

const config = {
  plugins: [presetEnv, autoprefixer],
};

module.exports = config;
