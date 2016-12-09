var path = require('path');
var webpack = require('webpack');
module.exports = {
    //入口
    entry: {
        main: './src/entry/index',
        vendors: ['vue', 'vue-router']
    },
    //输出
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js',
        //[name]这里是webpack提供的根据路口文件自动生成的名字
        publicPath: '/dist/'
    },
    //加载器
    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.css$/, loader: 'style!css!autoprefixer' },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap' },
            { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=8192' },
            { test: /\.(html|tpl)$/, loader: 'html-loader' }
        ]
    },
    // // .vue的配置。需要单独出来配置
    // vue: {
    //     loaders: {
    //         css: 'style!css!autoprefixer',
    //         html:'html-loader',
    //         vue: 'loader',
    //         js:'babel'
    //     }
    // },
    // 转es5
    babel: {
        presets: ['es2015', 'stage-2'],
        plugins: ['transform-runtime']
    },
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue'],
        // 别名
        alias: {
            'components': path.join(__dirname, '/src/components'),
            'vue': 'vue/dist/vue.js',
            'vue-router': 'vue-router/dist/vue-router.js'
        }
    },
    resolveLoader: {
        fallback: [path.join(__dirname, '../node_modules')]
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        grogress: true
    },
    // 开启source-map，webpack有多种source-map，在官网文档可以查到
    devtool: 'eval-source-map'
}
