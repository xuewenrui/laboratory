export default [
    {
        path: "/",
        component: "./index",
        name: '首页'
    },
    {
        component: "@/pages/about",
        path: "/about",
        name: "关于我们",
        //layout:'@/layouts/GlobalLayout',
    },
    {
        path: "/publications",
        component: "@/pages/publications",
        name: "出版"
    },
    {
        path: "/members",
        component: "@/pages/members",
        name: "团队成员"
    },
    {
        path: "/projects",
        component: "@/pages/projects",
        name: "科研项目"
    },
    {
        path: '/articles',
        component: '@/pages/article', // 指向文章页面的组件
       /* routes: [ // 嵌套路由示例
            {
                path: '/article/:id', // 动态路由，:id 是动态参数
                component: '@/pages/article/detail', // 指向文章详情页面的组件
            },
        ],*/
    },
    {
        component: "@/pages/contact",
        path: "/contact",
        name: "联系我们",
        //layout:'@/layouts/GlobalLayout',
    },
    /*自定义404页面*/
    {
        path: "*",
        component: "./404",
        layout: false
    },
];