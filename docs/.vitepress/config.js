export default {
  title: "SOLID Principles",
  description: "Dokumentasi lengkap SOLID untuk developer",

  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
    ],

    sidebar: [
      {
        text: "Dasar",
        items: [
          { text: "Requirements", link: "/01-requirements" },
          { text: "Kenapa SOLID", link: "/02-why-solid" },
          { text: "Masalah", link: "/03-problems-solved" },
          { text: "Masalah Umum", link: "/04-recurring-problems" },
          { text: "Implementasi", link: "/05-implementation" },
        ]
      },
      {
        text: "SOLID Principles",
        items: [
          { text: "SRP", link: "/solid-srp" },
          { text: "OCP", link: "/solid-ocp" },
          { text: "LSP", link: "/solid-lsp" },
          { text: "ISP", link: "/solid-isp" },
          { text: "DIP", link: "/solid-dip" },
        ]
      }
    ]
  }
}