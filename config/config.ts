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
    history: {
        type: 'hash',
    },
    routes,
    npmClient: 'npm',
    base: '/laboratory/',
    publicPath: '/laboratory/', // 替换为你的 GitHub 仓库名
});
