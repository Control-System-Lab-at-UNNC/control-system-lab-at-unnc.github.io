import {defineClientConfig} from 'vuepress/client'
// import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
// import NpmBadge from 'vuepress-theme-plume/features/NpmBadge.vue'
// import NpmBadgeGroup from 'vuepress-theme-plume/features/NpmBadgeGroup.vue'
// import Swiper from 'vuepress-theme-plume/features/Swiper.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import PeopleComponent from './theme/components/People.vue'
import PublicationComponent from './theme/components/Publication.vue'
import DividerComponent from './theme/components/Divider.vue'

import './theme/styles/custom.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


export default defineClientConfig({
    enhance({app}) {
        // built-in components
        // app.component('RepoCard', RepoCard)
        // app.component('NpmBadge', NpmBadge)
        // app.component('NpmBadgeGroup', NpmBadgeGroup)
        // app.component('Swiper', Swiper) // you should install `swiper`

        // your custom components
        app.component('People', PeopleComponent)
        app.component('Publication', PublicationComponent)
        app.component('Divider', DividerComponent)

        app.use(ElementPlus)
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component)
        }
    },
})
