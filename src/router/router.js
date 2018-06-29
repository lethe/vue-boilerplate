import Home from '../pages/Home.vue'
import PageNotFound from '../pages/PageNotFound.vue'
import SamplePage from '../pages/SamplePage.vue'

export default {
	routes: [
		{
			path: '/',
			component: Home,
			name: 'home'
		},
		{
			path: '/page',
			component: SamplePage,
			name: 'samplePage'
		},
		{
			path: '*',
			component: PageNotFound,
		}
	],
	mode : 'history'
}