import {defineConfig} from '@umijs/max';
import routes from './routes';

export default defineConfig({
    /**
     *  代理
     */

    proxy: {
        '/api/': {
            target: 'http://127.0.0.1:5000/api', // 后端服务地址
            changeOrigin: true, // 是否跨域
            pathRewrite: {'^/api': ''}, // 路径重写
        },
    },
/*    history: {
        type: 'hash',
    },*//*hash 模式会在 URL 中使用 # 符号来进行路由管理，
    而不依赖服务器端来处理路径。GitHub Pages 是静态文件托管服务，无法处理像 /home 这样的深层路径请求，
    因此直接访问 /home 会返回 404。使用 hash 模式后，URL 会变成 https://xuewenrui.github.io/laboratory/#/home，
    这种 URL 是完全由前端处理的，不会经过服务器端，因此不会产生 404 问题。*/
    routes,
    npmClient: 'npm',
    base: '/laboratory/',
    publicPath: '/laboratory/', // 替换为你的 GitHub 仓库名
});
