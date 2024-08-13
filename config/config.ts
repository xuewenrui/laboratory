import {defineConfig} from '@umijs/max';
import routes from './routes';

export default defineConfig({
    /**
     *  代理
     */

        proxy: {
            '/api/': {
                target: 'http://localhost:5000/api', // 后端服务地址
                changeOrigin: true, // 是否跨域
                pathRewrite: { '^/api': '' }, // 路径重写
            },
        },

    routes,
    npmClient: 'npm',
/*    theme: {
        "primary-color": "#1DA57A",
        'link-color': '#1DA57A',
        'border-radius-base': '2px',
    },*/
});

