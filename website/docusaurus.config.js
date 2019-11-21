/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: "Infer",
  tagline:
    "A tool to detect bugs in Java and C/C++/Objective-C code before it ships",
  url: "https://fbinfer.com",
  baseUrl: "/",
  favicon: "img/favicon.png",
  organizationName: "facebook",
  projectName: "infer",
  themeConfig: {
    navbar: {
      title: "Infer",
      logo: { alt: "Infer Logo", src: "img/logo.png" },
      links: [
        { to: "docs/getting-started", label: "Docs" },
        { to: "docs/support", label: "Support" },
        { to: "blog", label: "Blog" },
        {
          href: "https://twitter.com/fbinfer",
          label: "Twitter",
          position: "right"
        },
        {
          href: "https://www.facebook.com/inferstaticanalyzer",
          label: "Facebook",
          position: "right"
        },
        {
          href: "https://github.com/facebook/infer",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [{ label: "GitHub", href: "https://github.com/facebook" }]
        },
        {
          title: "Social",
          items: [
            { label: "Blog", to: "blog" },
            { label: "Twitter", href: "https://twitter.com/fbOpenSource" }
          ]
        }
      ],
      logo: {
        alt: "Facebook Open Source Logo",
        src: "https://docusaurus.io/img/oss_logo.png",
        href: "https://opensource.facebook.com/"
      },
      copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc. Built with Docusaurus.`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: { sidebarPath: require.resolve("./sidebars.js") },
        theme: { customCss: require.resolve("./src/css/custom.css") }
      }
    ]
  ]
};
