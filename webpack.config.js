const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');




module.exports = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
    //   title: 'Output Management',
    //   filename: 'assets/index.html',
      template: './src/index.html'
    }),
    new HtmlWebpackPlugin({
        filename: 'portfolio-1.html',
        template: 'src/portfolio-1.html',
        chunks: ['exampleEntry'],
        hash: true,
        inject: 'body'
    }),
    new HtmlWebpackPlugin({
      filename: 'portfolio-2.html',
      template: 'src/portfolio-2.html',
      chunks: ['exampleEntry'],
      hash: true,
      inject: 'body'
  }),
  new HtmlWebpackPlugin({
    filename: 'portfolio-3.html',
    template: 'src/portfolio-3.html',
    chunks: ['exampleEntry'],
    hash: true,
    inject: 'body'
}),

    new CopyWebpackPlugin({
        patterns: [
          { from: "./src/css", to: "css" },
          { from: "./src/static/app", to: "app" },
          { from: "./src/static/js", to: "js" },
          { from: "./src/static/assets", to: "assets" },
          { from: "./src/static/images", to: "images" },
          { from: "./src/static/lib", to: "lib" },
          { from: "./src/static/fonts", to: "fonts" },
        ],
      }),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
                'style-loader',
                'css-loader',
                'sass-loader' //1. Turns sass into css,
            ]
      },
    //   {
    //     test: /\.(png|svg|jpg|jpeg|gif)$/i,
    //     type: 'asset/resource',
    //   },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    hot: true
  },
};