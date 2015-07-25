const path = require('path'),
      node_modules = path.resolve(__dirname, 'node_modules'),
      pathToReact = path.resolve(node_modules, 'react/dist/react-with-addons.js');

module.exports = {
    resolve: {
        alias: {
            'react': pathToReact
        }
    },
    entry: path.resolve(__dirname, 'app/js/main.js'),
    output: {
        path: path.resolve(__dirname, 'app/js/build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel'
        }]
    },
    noParse: [pathToReact]
};