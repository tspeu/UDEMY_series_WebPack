const path = require('path');

//es el file de entrada para webpack empieze a generar
module.exports = {
    entry : './src/index.js',
    output : {
        filename    : 'bundle.js',
        path   : path.resolve(__dirname, 'dist')
    },
    module:{
        rules : [
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use : [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'}
                ]
            }
        ]
    }
};
