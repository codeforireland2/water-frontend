// cosmos.config.js
export default {
  componentPaths: ['src/components'],
  containerQuerySelector: '#root',
  globalImports: [
    './src/static/css/styledbootstrap.css',
    //  './node_modules/react-grid-layout/css/styles.css',
    //  './node_modules/react-resizable/css/styles.css',
    // './src/static/css/layout.css',
    './src/static/css/bootstrap.css',
    './src/static/css/bootstrap-cyborg.css',
    // './index2_files/6a2277d1.tw.min.js',
    './src/static/css/main.css'
  ],
  webpackConfigPath: 'react-scripts/config/webpack.config.dev'
}
