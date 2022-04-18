const path = require('path');
const HWP = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'build.js',
    path: path.join(__dirname, '/build'),
  },
  module: {
    rules: [
      {
        // test: /\.jsx?$/,
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { // reads as stack (from right to left)
          presets: ['@babel/preset-react', '@babel/preset-env'],
        },
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg)$/, use: 'url-loader?limit=8192' 
      },
    ],
  },
 
   devServer: {
    // contentBase: './',
    // watchContentBase: true,
    static: {
      publicPath: '/build',
      directory: path.resolve(__dirname, 'build')
    },
    proxy: {
      '/api': 'http://localhost:3000/'
    },
  },
  plugins: 
    [new HWP({
      title: 'Development',
      template: path.join(__dirname, '/src/index.html') 
    }), 
  ],
  externals: {
    'react': 'React'
  }
};
