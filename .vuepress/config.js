module.exports = {
    title: 'limdongjin',
    description: '도큐멘팅!',
    email: 'geniuslim27@gmail.com',
    url: 'https://limdongjin.github.io',
    head: [
        ['link', {rel: 'icon', href: `/images/logo-144.png`}],
        ['link', {rel: 'manifest', href: '/manifest.json'}],
        ['meta', {name: 'theme-color', content: '#3eaf7c'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
        ['link', {rel: 'apple-touch-icon', href: `/images/logo-144.png`}],
        ['link', {rel: 'mask-icon', href: '/images/logo-144.png', color: '#3eaf7c'}],
        ['meta', {name: 'msapplication-TileImage', content: '/images/logo-144.png'}],
        ['meta', {name: 'msapplication-TileColor', content: '#000000'}]
    ],
    themeConfig: {
        repo: 'limdongjin',
        nav: [
            {text: 'Home', link: '/'},
            {text: 'About', link: '/about/'},
            {text: 'Blog', link: '/blog/'},
            {text: 'Tags', link: '/_tags/'}
        ],
        sidebar: [
            {
                title: 'Vuepress',
                collapsable: true,
                children: [
                    '/vuejs/vuepress/',
                    '/vuejs/vuepress/layout-extend'
                ]
            },
            {
                title: 'Java',
                collapsable: true,
                children: [
                    '/java/useful-reference-java',
                    '/java/introduction/',
                    '/java/ds/array/',
                    '/java/design-pattern/template-pattern/',
                    '/java/design-pattern/useful-reference-java-pattern',
                    '/java/class/',
                    '/java/helloworld10/',
                    '/java/tomcat/',
                    '/java/servlet/',
                    '/java/spring/start/',
                    '/java/spring/start/start-with-gradle',
                    '/java/spring/start/start-with-gradle-xml'

                ]
            },
            {
                title: 'ProblemSolving',
                collapsable: true,
                children: [
                    '/problemsolving/twosum',
                    '/problemsolving/add-two-numbers'
                ]
            },
            {
                title: 'Algorithms',
                collapsable: true,
                children: [
                    '/algorithms/',
                    '/algorithms/analysis/'
                ]
            },
            {
                title: 'Vue.js',
                collapsable: true,
                children: [
                    '/vuejs/references/',
                    '/vuejs/general/axios/',
                    '/vuejs/general/editor/',
                    '/vuejs/general/imagerender/',
                    '/vuejs/general/spinner/'
                ]
            },
            {
                title: 'AWS',
                collapsable: true,
                children: [
                    '/aws/redirection_a_to_b'
                ]
            },
            {
                title: 'AWS Elastic Beanstalk',
                collapsable: true,
                children: [
                    '/aws/elasticbeanstalk/useful_reference_eb',
                    '/aws/elasticbeanstalk/ebextensions/',
                    '/aws/elasticbeanstalk/ebextensions/useful_reference_ebex'
                ]
            },
            {
                title: 'Blockchain',
                collapsable: true,
                children: [
                    '/blockchain/bitcoin/whitepaper/',
                    '/blockchain/ethereum/whitepaper/',
                    '/blockchain/blockchain-tip'
                ]
            },
            {
                title: 'Database',
                collapsable: true,
                children: [
                    '/database/dynamodb/useful-reference-dynamodb'
                ]
            },
            {
                title: 'DataStructure',
                collapsable: true,
                children: [
                    '/java/ds/array/'
                ]
            },
            {
                title: 'Elastic Search',
                collapsable: true,
                children: [
                    '/elasticsearch/useful-reference-es.md',
                    '/elasticsearch/general/',
                    '/elasticsearch/python/'
                ]
            },
            {
                title: 'GIT',
                collapsable: true,
                children: [
                    '/git/'
                ]
            },
            {
                title: 'Javascript',
                collapsable: true,
                children: [
                    '/js/useful-reference-js'
                ]
            },
            {
                title: 'nodejs',
                collapsable: true,
                children: [
                    '/nodejs-serverside/sequelize/',
                    '/nodejs-serverside/sequelize/migration/',
                    '/nodejs-serverside/sequelize/crud/c/',
                    '/nodejs-serverside/sequelize/crud/r/',
                ]
            },
            {
                title: 'OOP',
                collapsable: true,
                children: [
                    '/oop/'
                ]
            },
            {
                title: 'Rails',
                collapsable: true,
                children: [
                    '/rails/mailer/',
                    '/rails/tip/',
                    '/rails/tip/useful-codeblock-ror'
                ]
            },
            {
                title: 'NLP',
                collapsable: true,
                children: [
                    '/nlp/useful-reference-nlp'
                ]
            },
            {
                title: 'ETC',
                collapsable: true,
                children: [
                    '/etc/',
                    '/nodejs_serverless/useful-reference-serverless',
                    '/tools/'
                ]
            }
        ],
        displayAllHeaders: false,
        lastUpdated: 'Last Updated'
    },
    plugins: [
        '@vuepress/blog',
        '@vuepress/back-to-top',
        '@vuepress/google-analytics', // 1.0.0.alpha.0 버전에서는 에러가 발생했지만 1.0.0.alpha.29로 높여서 해결하였음.
        '@vuepress/active-header-links',
        '@vuepress/medium-zoom',
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: true
        }],
        '@vuepress/pagination',
        '@limdongjin/vuepress-plugin-sidebar-on-off',
        [ '@limdongjin/vuepress-plugin-simple-seo', {
            default_image: '/images/main-image-min.jpg',
            root_url: 'https://limdongjin.github.io'
        }]
        // require('./plugins/vuepress-plugin-simple-seo')
        // [ require('./plugins/vuepress-plugin-simple-seo'), {
        //     default_image: '/images/main-image-min.jpg',
        //     root_url: 'https://limdongjin.github.io',
        //     default_site_name: 'limdongjin TIL'
        // }]
    ],
    ga: 'UA-131016591-1',
    markdown: {
        lineNumbers: true
    }
}
