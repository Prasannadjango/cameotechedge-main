const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output bundle filename
  },

  module: {
    rules: [
      {
        test: /\.js$/, // Apply the following rules to .js files
        exclude: /node_modules/, // Exclude node_modules directory
        use: {
            use: [ 'style-loader', 'css-loader' ], // Use Babel for transpiling ES6+ syntax
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  devServer: {
    static: {
        directory: path.resolve(__dirname, 'dist'), // Serve files from the 'dist' directory
      },
    port: 3001, // Dev server port
  },
};
