//webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {

   resolve: {
      alias: {
        "@/Components": path.resolve(__dirname, 'src/components/'),
        "@/Layout": path.resolve(__dirname, 'src/layout/'),
        "@/API": path.resolve(__dirname, 'src/api/'),
      },
      
      extensions: [".wasm", ".ts", ".tsx", "jsx", ".mjs", ".cjs", ".js", ".json"],

   },

   //Left is OUTPUT -- Right is INPUT
   entry: {
     'js/toDo.js': '/src/pages/toDo.tsx',
   },

   output: {
      path: path.join(__dirname + '/dist'),
      filename: '[name]',
      clean: true
   },



   devServer: {
      port: 8080,
      static: path.join(__dirname, 'dist'),

      proxy: {
        '/api': {
          target: 'http://localhost:8080',
          router: () => 'http://localhost:5000',
          logLevel: 'debug' /*optional*/
        }
        
      }
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            use: ['babel-loader']
         },
         {
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
         },

         {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader?name=public/images/[name].[ext]',
              },
            ],
          },

         { test: /\.css$/, 
         use: [ 'style-loader', 'css-loader' ] 
         },
         {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: '/public/weather/fonts/'
                }
              }
            ]
          }


      ]
   },

   plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        filename: 'index.html'
      })
    ]

}
