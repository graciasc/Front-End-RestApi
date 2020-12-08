import ContactPage from './views/ContactPage.svelte'
import LandingPage from './views/LandingPage.svelte'
import ListPage from './views/ListPage.svelte'
import Test from './views/Test.svelte'
const routes = [
  {
    name:'/',
    component: LandingPage
  },
  {
    name: '/connor',
    component: ContactPage
  },
  {
    name:'/gracias',
    component: ListPage
  },
  {
  name: '/test',
  component: Test 
  }
]

export {routes}