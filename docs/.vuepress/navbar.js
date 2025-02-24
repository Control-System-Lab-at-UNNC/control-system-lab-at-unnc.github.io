import {defineNavbarConfig} from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
    {text: 'Home', link: '/'},
    // {text: 'About', link: '/notes/about-us.md'},
    {text: 'Member', link: '/notes/our-member.md'},
    {
        text: 'Research', items: [
            {text: 'Publications', link: '/notes/publications.md'},
            {text: 'Projects', link: '/notes/projects.md'},
        ]
    },
    {text: 'Open Positions', link: '/notes/opportunities.md'},
    {text: 'News', link: '/blog/'}
])
