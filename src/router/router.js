import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/ingresar',
        component: () => import('../modules/Inscripcion/pages/EstudiantePage')
    },

    {
        path: '/token',
        component: () => import('../modules/Inscripcion/pages/TokenPage')
    },
    
 
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router