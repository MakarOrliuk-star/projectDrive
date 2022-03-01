module.exports = {
    devServer: {
        port: 8080,
        //contentBase: path.resolve(__dirname, 'static'),
        proxy: {
            '/api': {
                target: process.env.APP_API_URL,
                changeOrigin: true,
                secure: false,
            },
            '/storage': {
                target: process.env.APP_API_URL,
                changeOrigin: true,
                secure: false,
            },
        },
    },
}