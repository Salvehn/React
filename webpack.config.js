const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './main.js',
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'index_bundle.js'
   },
   devServer: {
      inline: true,
      historyApiFallback: true,
      port: 3000
   },
   stats: 'errors-only',
   module: {
    rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env','@babel/react'],
                plugins: ['@babel/plugin-proposal-object-rest-spread']
              }
            }
          },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
+         test: /\.(png|svg|jpg|gif)$/,
+         use: [
+           'file-loader',
+         ],
+       }
    ]
  },
   plugins:[
      new HtmlWebpackPlugin({
         template: './index.html'
      })
   ]
}
