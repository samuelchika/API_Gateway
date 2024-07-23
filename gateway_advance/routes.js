const ROUTES = [
    {
        url: '/feed_service',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: "http://localhost:3002",
            //changeOrigin: true,
            pathRewrite: {
                "^/feed_service": "",
            },
        }
    },
    {
        url: '/chat_service',
        auth: true,
        creditCheck: true,
        proxy: {
            target: "http://localhost:3001",
            //changeOrigin: true,
            pathRewrite: {
                [`^/chat_service`]: '',
            },
        }
    }
]

export default ROUTES;