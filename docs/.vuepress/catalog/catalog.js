module.exports = [
    {
        text: '码场',
        link: '/notes/other/'
    },
    {
        text: '字节码',
        items: [
            {
                text: 'ASM',
                link: '/notes/asm/'
            }
        ]
    },
    {
        text: '多层菜单',
        ariaLabel: '配置案例',
        items: [
            {
                text: 'API',
                items: [
                    {
                        text: 'CLI',
                        link: '/zh/api/cli.html'
                    },
                    {
                        text: 'Node',
                        link: '/zh/api/node.html'
                    }
                ]
            },
            {
                text: '开发指南',
                items: [
                    {
                        text: '本地开发',
                        link: '/zh/miscellaneous/local-development.html'
                    },
                    {
                        text: '设计理念',
                        link: '/zh/miscellaneous/design-concepts.html'
                    },
                    {
                        text: 'FAQ',
                        link: '/zh/faq/'
                    },
                    {
                        text: '术语',
                        link: '/zh/miscellaneous/glossary.html'
                    }
                ]
            },
            {
                text: '其他',
                items: [
                    {
                        text: '从 0.x 迁移',
                        link: '/zh/miscellaneous/migration-guide.html'
                    },
                    {
                        text: 'Changelog',
                        link: 'https://github.com/vuejs/vuepress/blob/master/CHANGELOG.md'
                    }
                ]
            }
        ]
    },
    {
        text: '关于',
        link: 'https://bugstack.cn/about.html'
    }
];
