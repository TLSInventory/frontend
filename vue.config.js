module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  configureWebpack: {
    //Necessary to run npm link https://webpack.js.org/configuration/resolve/#resolve-symlinks
    resolve: {
       symlinks: false
    },
    module: {
      rules: [
        {
          test: /\.txt$/i,
          use: [
            {
              loader: 'raw-loader',
              options: {
                esModule: false,
              },
            },
          ],
        },
      ],
    },
  },
  transpileDependencies: [
    '@coreui/utils'
  ],
  devServer: {
    // disableHostCheck: true,
    public: 'tlsinventory.test'
  }
}
