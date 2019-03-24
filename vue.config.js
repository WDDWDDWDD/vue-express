const vuxLoader = require('vux-loader')
module.exports = {
    publicPath : "./",//配置打包时的相对路径
    // vux 相关配置,使用vux-ui
    configureWebpack: config => {
        vuxLoader.merge(config, {
            options: {},
            plugins: ['vux-ui']
        })
    },
    devServer: {
        port: "8081",//代理端口
        open: false,//项目启动时是否自动打开浏览器，我这里设置为false,不打开，true表示打开
        proxy: {
            '/app': {//代理api
                target: "http://localhost:3000/",//服务器api地址
                changeOrigin: true,//是否跨域
                ws: true, // proxy websockets
                pathRewrite: {//重写路径
                    "^/app": ''
                }
            }
        }
    }
}