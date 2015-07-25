const path = require('path'),
      node_modules = path.resolve(__dirname, 'node_modules'),
      pathToReact = path.resolve(node_modules, 'react/dist/react-with-addons.js');

module.exports = {
    resolve: {
        alias: {
            'react': pathToReact
        }
    },
    entry: path.resolve(__dirname, 'app/main.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel'
            },
            {
                test: /\.scss$/,
                loader: "style!css!sass"
            },
            {
                test: /\.(png|jpg|svg)$/,
                loader: 'url?limit=25000'
            }
        ]
    },
    noParse: [pathToReact]
};