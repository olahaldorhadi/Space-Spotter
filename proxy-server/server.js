import express from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware'

const app = express()

app.use(
    '/api',
    createProxyMiddleware({
        target: 'https://tp.educloud.no/educloud/',
        changeOrigin: true,
        pathRewrite: {
            '^/api': '',
        },
    })
)

app.listen(3000, () => {
    console.log('Proxy server running on http://localhost:3000')
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})
