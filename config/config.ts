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
                pathRewrite: { '^/api': '' }, // 路径重写
            },
        },

    routes,
    npmClient: 'npm',
});

