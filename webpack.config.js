const join = require("path").join;

module.exports = {
    devtool: 'source-map',
    entry: [
        'babel-polyfill',
        join(__dirname, 'src/index.js')
    ],
    output: {
        path: join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: ['/node_modules/'],
                loader: 'babel-loader'
            },
            {
                test: /\.p?css$/,
                exclude: ['/node_modules/'],
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            module: true,
                            importLoaders: 1,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    },
                    'postcss-loader'
                ]
            }
        ]
    }
};
