const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "OSR",
    tagline: "Old School Renaissance",
    url: "https://osr.owlbeardm.com",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/logo.webp",
    organizationName: "c7d5a6", // Usually your GitHub org/user name.
    projectName: "osr", // Usually your repo name.

    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            // Please change this to your repo.
            // editUrl:
              // "https://github.com/facebook/docusaurus/edit/main/website/",
          },
          blog: {
            showReadingTime: true,
            // Please change this to your repo.
            // editUrl:
              // 'https://github.com/facebook/docusaurus/edit/main/website/blog/',
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */

      ({
        navbar: {
          title: "Old School Renaissance",
          logo: {
            alt: "Old School Renaissance",
            src: "img/logo.webp",
          },
          items: [
            {
              type: "doc",
              docId: "intro",
              position: "left",
              label: "Rules",
            },
            {to: '/blog', label: 'Blog', position: 'left'},
          ],
        },
        footer: {
          style: "light",
          links: [
            {
              title: "Docs",
              items: [
                {
                  label: "OSE SRD",
                  to: "https://oldschoolessentials.necroticgnome.com/srd/index.php/Main_Page",
                },
              ],
            },
            {
              title: "Community",
              items: [
                {
                  label: "OSR Reddit",
                  href: "https://www.reddit.com/r/osr/",
                },
                {
                  label: "OSR Discord",
                  href: "https://discord.gg/QeYcrfd",
                },
              ],
            },
            {
              title: "More",
              items: [
                {
                  label: "GitHub",
                  href: "https://github.com/c7d5a6/osr",
                },
                {
                  label: "OSE",
                  href: "https://necroticgnome.com/",
                },
              ],
            },
          ],
          copyright: `${new Date().getFullYear()} @c7d5a6.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
        colorMode: {
          // "light" | "dark"
          defaultMode: "light",
          disableSwitch: true,
        },
      }),
  }
);
