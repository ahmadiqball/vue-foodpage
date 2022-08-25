import { createRouter, createWebHistory } from 'vue-router';
import CategoryPage from '../components/Page/CategoryPage.vue';
import FoodsPage from '../components/Page/FoodsPage.vue';
import RecipePage from '../components/Page/RecipePage.vue';

const routeInfos = [
    {
        path: '/cmlab-foodpage',
        name: 'categories',
        component: CategoryPage
    },
    {
        path: '/cmlab-foodpage/:cname',
        name: 'foods',
        component: FoodsPage
    },
    {
        path: '/cmlab-foodpage/:cname/:cid',
        name: 'recipe',
        component: RecipePage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routeInfos
})

export default router;