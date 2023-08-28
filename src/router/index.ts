import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import ContactView from '../views/ContactView.vue'
import DashboardView from '../views/DashboardView.vue'
import ActualityView from '@/views/ActualityView.vue'
import CreateActualityView from '@/views/CreateActualityView.vue'
import ArticleView from '@/views/ArticleView.vue'
import TagView from '@/views/TagView.vue'
import CRUDDayOpenShootingRangeVue from '@/views/CRUDDayOpenShootingRange.vue'

/**
 * Update also the navbar file
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
        path:'/dashboard',
        name: 'dashboard',
        component: DashboardView
    },
    {
        path:'/actuality',
        name: 'actuality',
        component: ActualityView
    },
    {
        path:'/createArticle',
        name: 'createArticle',
        component: CreateActualityView
    },
    {
        path:'/article',
        name: 'article',
        component: ArticleView
    },
    {
        path:'/tag',
        name: 'tag',
        component: TagView
    },
    {
        path:'/openShootingRange',
        name: 'openShootingRange',
        component: CRUDDayOpenShootingRangeVue
    },
  ]
})

export default router
