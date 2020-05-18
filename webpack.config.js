const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );


module.exports = {
  mode: "production",
  entry: "./examples/index.tsx",

  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader',],
      },
    ],
  },
  devServer: {
    port: 3000
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve( __dirname, './examples/index.html' ),
      filename: 'index.html'
    })
  ]
};
