module.exports = {
    publicPath: '/',
    outputDir: 'html',
    indexPath: '/index.html',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:18888/api/v1', // 目标地址
                changeOrigin: true, // 允许跨域
                pathRewrite: {
                    '^/api/v1': '' // 去除路径中的/api
                }
            }
        }
    }
}
