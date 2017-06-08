var path = require('path');

module.exports = {
  entry: {
  	app: path.resolve(__dirname, 'src/client/scripts/entry.jsx')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader", query: { presets: ['es2015', 'react'] } }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    alias: {
    	'oo7':path.resolve(__dirname, 'oo7'),
	'oo7-react':path.resolve(__dirname, 'oo7-react'),
	'oo7-parity':path.resolve(__dirname, 'oo7-parity'),
    	'parity-reactive-ui':path.resolve(__dirname, 'parity-reactive-ui')
    },
  }
};
