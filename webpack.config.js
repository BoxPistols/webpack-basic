// output.pathに指定するパスがOSによって異なることを
// 防ぐためにpathモジュールを読み込んでおく
const path = require('path')
const outputPath = path.resolve(__dirname, 'public/js')
// View on Terminal
console.log(`Output Path => ${outputPath}`)

module.exports = {
  // モードの設定（モードを指定しないとwebpack実行時に警告が出る）
  mode: 'development',
  // エントリーポイントの設定
  entry: './src/js/app.js',
  // 出力の設定
  output: {
    // 出力するファイル名
    filename: 'bundle.js',
    // 出力先のパス（絶対パスを指定しないとエラーが出るので注意）
    path: outputPath,
  },
	// ドキュメントルートの設定
  devServer: {
    contentBase: outputPath,
		compress: true,
		port: 9000,
		historyApiFallback: true,
		publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        // scope loader on js or jsx
        include: [path.resolve(__dirname, 'src/js')],
        // not scope
        exclude: [path.resolve(__dirname, 'node_modules')],
        // use loader
        loader: 'babel-loader',
        query: {
          presets: [
            [
              '@babel/env',
              {
                targets: {
                  browsers: 'last 2 chrome versions',
                },
              },
            ],
          ],
        },
      },
      {
        // ローダーの処理対象ファイル
        test: /\.scss$/,
        // ローダーの処理対象となるディレクトリ
        include: path.resolve(__dirname, 'src/scss'),
        // 利用するローダー
        // sass-loader css-loader style-loader の順で実行される
        use: [
          // HTML に、style-loader で変換した CSS のスタイルが記述された <style> タグを追加する
          'style-loader',
          // CSS をモジュールに変換する
          'css-loader',
          // Sass を CSS にコンパイルする
          'sass-loader',
        ],
      },
    ],
  },
}

/* ===== Note
if select to config-file：
npx webpack --config webpack.config.js
===== */
