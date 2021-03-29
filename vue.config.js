module.exports = {
    devServer: {
        disableHostCheck: false,
        host: "127.0.0.1",
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {
            '/api': {
                target: 'http://localhost:7903',//里面填写目标接口域名
                changeOrigin: true,//开启代理
                pathRewrite: {
                    '^/api': ''//重写接口
                }
            }
        }
    },
};