export default [
    {
      path:'/',
      redirect: '/home'
    },
    {
        path: "/home",
        component: "./index.tsx",
        name: '首页'
    },
    {
        redirect: '/about/introduction',
        path: "/about",
        name: "实验室概述",
    },
    {
        path: '/about/introduction',
        component: '@/pages/about/introduction'},
    {
        path: '/about/facilities',
        component: '@/pages/about/facilities'},
    {
        path: '/about/add',
        component: '@/pages/about/add'},
    {
        path: "/member",
        component: "@/pages/members",
        name: "团队成员"
    },
    {
        path: "/projects",
        redirect: "/projects/direction",
        name: "科学研究",
    },
    {
        path: '/projects/direction',
        component: '@/pages/projects/direction'},
    {
        path: '/projects/project',
        component: '@/pages/projects/project'},
    {
        path: '/projects/achievement',
        component: '@/pages/projects/achievement'},
    {
        path: '/articles',
        redirect: '/articles/paper', // 指向文章页面的组件
        name: '论文专利',
    },
    {
        path: '/articles/paper',
        component: '@/pages/article/paper'},
    {
        path: '/articles/patent',
        component: '@/pages/article/patent'},
    {
        path: '/article/:id', // 动态路由，:id 是动态参数
        component: '@/pages/article/detail', // 指向文章详情页面的组件
    },
    {
        path: '/member/detail/:id', // 动态路由，:id 是动态参数
        component: '@/pages/members/detail', // 指向详情页面的组件
    },
    {
        component: "@/pages/contact",
        path: "/contact",
        name: "联系我们",
    },
    {
        component: "@/pages/test",
        path: "/test",
        name: "仅供测试",
    },
    {
        component: "@/pages/genome",
        path: "/genomes",
    },
    /*自定义404页面*/
    {
        path: "*",
        component: "./404",
        layout: false
    },
];