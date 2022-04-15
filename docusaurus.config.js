// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Project Galaxy Developer Documentation",
  // TODO: Update url and baseUrl once we move to custom domain
  url: "https://docs.galaxy.eco",
  baseUrl: "/galaxy-dev-docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "ProjectGalaxyHQ",
  projectName: "galaxy-dev-docs",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/", // Serve the docs at the site's root
          path: "docs",
          id: "default",
          sidebarPath: require.resolve("./sidebars.js"),
          sidebarCollapsible: false,
          editUrl: "https://github.com/ProjectGalaxyHQ/galaxy-dev-docs",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        logo: {
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "getting-started/introduction",
            label: "Developer",
            position: "left",
          },
          {
            href: "https://galaxy.eco",
            label: "Home",
            position: "right",
          },
          {
            href: "https://github.com/ProjectGalaxyHQ",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} Project Galaxy`,
      },
      prism: {
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;