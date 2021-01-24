
const utils = require('./catalog/bar.js');
const navbar = require('./catalog/catalog.js')

module.exports = ctx => ({
    dest: '.site',
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'Java 开发手册',
            description: '沉淀、分享、成长，让自己和他人都能有所收获！'
        }
    },
    head: [
        ['link', {rel: 'icon', href: `/hero.png`}],
        ['link', {rel: 'manifest', href: '/manifest.json'}],
        ['meta', {name: 'theme-color', content: '#3eaf7c'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
        ['link', {rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png`}],
        ['link', {rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c'}],
        ['meta', {name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png'}],
        ['meta', {name: 'msapplication-TileColor', content: '#000000'}],
        [
            "script",
            {
                "data-ad-client": "ca-pub-2245427233262012",
                async: true,
                src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
            }
        ]
    ],
    theme: '@vuepress/default',
    themeConfig: {
        // repo: 'vuejs/vuepress',
        editLinks: true,
        docsDir: 'packages/docs/docs',
        // #697 Provided by the official algolia team.
        algolia: ctx.isProd ? ({
            apiKey: '3a539aab83105f01761a137c61004d85',
            indexName: 'vuepress'
        }) : null,
        smoothScroll: true,
        locales: {
            '/': {
                label: '简体中文',
                selectText: '选择语言',
                ariaLabel: '选择语言',
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdated: '上次更新',
                nav: require('./catalog/catalog'),
                sidebar: {
                    '/notes/other/': utils.getOtherBar(),
                    '/notes/asm/': utils.genSidebar()
                }
            }
        },
        nav: navbar
    },
    plugins: [
        ['@vuepress/back-to-top', true],
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: true
        }],
        ['@vuepress/medium-zoom', true],
        ['@vuepress/google-analytics', {
            ga: 'UA-128189152-1'
        }],
        ['container', {
            type: 'vue',
            before: '<pre class="vue-container"><code>',
            after: '</code></pre>'
        }],
        ['container', {
            type: 'upgrade',
            before: info => `<UpgradePath title="${info}">`,
            after: '</UpgradePath>'
        }],
        ['flowchart']
    ],
    extraWatchFiles: [
        '.vuepress/catalog/catalog.js'
    ]
});

