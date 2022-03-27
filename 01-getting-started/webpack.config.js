
const path = require('path');

/** @type {import('webpack').Configuartion} */
module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist/js'),
  }
}
