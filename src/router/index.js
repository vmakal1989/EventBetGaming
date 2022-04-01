import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const _import = (component) => () => import(`@/components/views/${component}.vue`) 

export const routes = [
    {
		path: '/login',
		component: _import('Login')
	},
    {
		path: '/',
		component: _import('Main')
	},
    { 
        path: '*', 
        component: _import('404') 
    }
]


const router =  new VueRouter({
	routes,
	scrollBehavior: () => ({ y: 0 })
})

export default router


