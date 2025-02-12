import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: 'Home', link: '/' },
  { text: 'About', link: '/notes/intro/about-us.md' },
  { text: 'Member', link: '/notes/intro/our-member.md'},
  { text: 'Publications', link: '/notes/publications.md'},
  { text: 'Articles', link: '/blog/' }
])
