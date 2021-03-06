const {fs, path} = require('@vuepress/shared-utils');

const utils = {
    genSidebar: function () {
        return [
            {
                title: 'ASM API',
                collapsable: false,
                children: [
                    ['', '介绍'],
                    ['1引言', '第 1 章 - 引言']
                ]
            },
            {
                title: '第一部分 核心 API',
                collapsable: false,
                children: [
                    ['2.0类', '第 2 章 - 类'],
                    ['2.1结构', '2.1 结构'],
                    ['2.2接口和组件', '2.2 接口和组件'],
                    ['2.3工具', '2.3 工具'],
                    [`3.0方法`, `第 3 章 - 方法`],
                    [`3.1结构`, `3.1 结构`],
                    [`3.2接口和组件`, `3.2 接口和组件`],
                    [`3.3工具`, `3.3 工具`],
                    [`4.0元数据`, `第 4 章 - 元数据`],
                    [`4.1泛型`, `4.1 泛型`],
                    [`4.2注释`, `4.2 注释`],
                    [`4.3调试`, `4.3 调试`],
                    [`5.0后向兼容`, `第 5 章 - 后向兼容`],
                    [`5.1引言`, `5.1引言`],
                    [`5.2规则`, `5.2规则`]
                ]
            },
            {
                title: '第二部分 树 API',
                collapsable: false,
                children: [
                    ['6.0类', '第 6 章 - 类'],
                    ['6.1接口和组件', '6.1接口和组件'],
                    ['6.2组件合成', '6.2组件合成'],
                    ['7.0方法', '第 7 章节 - 方法'],
                    ['7.1接口和组件', '7.1接口和组件'],
                    ['7.2组件合成', '7.2组件合成'],
                    ['8.0方法分析', '第 8 章 方法分析'],
                    ['8.1介绍', '8.1介绍'],
                    ['8.2组件与接口', '8.2组件与接口'],
                    ['9.0元数据', '第 9 章 元数据'],
                    ['9.1泛型', '9.1泛型'],
                    ['9.2注释', '9.2注释'],
                    ['9.3调试', '9.3调试'],
                    ['10.0后向兼容', '第 10 章 - 后向兼容'],
                    ['10.1介绍', '10.1介绍'],
                    ['10.2规则', '10.2规则']
                ]
            },
            {
                title: '附录',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    ['A.0附录', 'A.0附录'],
                    ['A.1字节代码指', 'A.1字节代码指'],
                    ['A.2子例程', 'A.2子例程'],
                    ['A.3属性', 'A.3属性'],
                    ['A.4规则', 'A.4规则']
                ]
            }
        ]
    },
    getOtherBar: function () {
        return [
            {
                title: '码场故事',
                collapsable: true,
                children: [
                    ['', '介绍'],
                    ['程序员和数学', '1. 程序员和数学']
                ]
            }
        ]
    }
};

// const officalPlugins = fs
//     .readdirSync(path.resolve(__dirname, '../plugin/official'))
//     .map(filename => 'official/' + filename.slice(0, -3))
//     .sort();

function getPluginSidebar(pluginTitle, pluginIntro, officialPluginTitle) {
    return [
        {
            title: pluginTitle,
            collapsable: false,
            children: [
                ['', pluginIntro],
                'using-a-plugin',
                'writing-a-plugin',
                'life-cycle',
                'option-api',
                'context-api'
            ]
        },
        {
            title: officialPluginTitle,
            collapsable: false,
            children: officalPlugins
        }
    ]
}

module.exports = utils;