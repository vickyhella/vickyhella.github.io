// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Vickyhella',
  tagline: 'Be a Translator Who Knows Something About Tech',
  url: 'https://vickyhella.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'vickyhella', // Usually your GitHub org/user name.
  projectName: 'vickyhella.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/vickyhella/vickyhella.github.io/edit/main',
          showLastUpdateAuthor: true,
          showLastUpdateTime: false,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/vickyhella/vickyhella.github.io/edit/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-google-gtag', // Add google gtag. For details, see https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-google-gtag
      {
        trackingID: 'G-CSJKGN2CK8',
        anonymizeIP: true,
      },
    ],
    [
      '@docusaurus/plugin-google-tag-manager',
      {
        containerId: 'GTM-TWXF9N9',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
        algolia: {
            // The application ID provided by Algolia
            appId: '4QH5ES95SJ',
      
            // Public API key: it is safe to commit it
            apiKey: 'a0381a2fb9debec2ac54d7c87a1471a6',
      
            indexName: 'vickyhella',
      
            // Optional: see doc section below
            contextualSearch: true,
      
            // Optional: Algolia search parameters
            searchParameters: {},
      
            // Optional: path for search page that enabled by default (`false` to disable it)
            searchPagePath: 'search',
      
            //... other Algolia params
          },
        navbar: {
        title: 'Vickyhella',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Docs',
          },
		  {
			type: 'localeDropdown',
			position: 'right',
		  },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/vickyhella/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Translation',
                to: '/docs/translation',
              },
			  {
                label: 'Development Basics',
                to: '/docs/development-basics/linux_commands',
              },
              {
                label: 'Docusaurus',
                to: '/docs/docusaurus',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'Email Me',
                href: 'mailto:vickyhella@hotmail.com',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.cn/incareer/in/vickyhella',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/vickyhella',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Vickyhella, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
