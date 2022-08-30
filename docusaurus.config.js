// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'A Technical Translator\'s Website',
  tagline: 'Be a Translator Who Knows Tech the Most',
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
          editUrl: 'https://github.com/vickyhella/vickyhella.github.io/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/vickyhella/vickyhella.github.io/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
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
                label: 'Translation Portfolio',
                to: '/docs/portfolio',
              },
			  {
                label: 'CAT Tools',
                to: '/docs/cat',
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
                href: 'https://www.linkedin.cn/incareer/in/vicky-wong-95a511aa',
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
