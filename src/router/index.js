import { createRouter, createWebHistory } from "vue-router"; // 2 phuong thuc
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Jobs from '../views/Jobs.vue';
import JobDetails from '../views/jobs/JobDetails.vue';



const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    },
    {
        path: '/jobs',
        name: 'Jobs',
        component: Jobs
    },
    {
        path: '/jobs/:id',
        name: 'JobDetails',
        component: JobDetails
    }
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router;