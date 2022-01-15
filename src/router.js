import Foo from "./pages/Foo.vue"
import Bar from "./pages/Bar.vue"
import VueRouter from "vue-router"
import Homepage from "./pages/Homepage"
import Apartment from './pages/Apartment.vue'
import ErrorPage from './pages/ErrorPage'
import Login from './pages/Login'
import Registration from './pages/Registration.vue'
const routes=[{
    path:'/foo',
    component:Foo
},{
    path:'/bar',
    component:Bar
},
{
    path:'/',
    component:Homepage,
    name:'homepage'
},
{
    path:'/apartments/:id',
    component:Apartment,
    name:'apartment'
},
{
    path:'/login',
    component:Login,
    name:'login-page'
},
{
    path:'/registration',
    component:Registration,
    name:'registration-page'
},
{
    path:'*',
    component:ErrorPage,
    name:'error-page'
}]

const router =new VueRouter({routes})
export default router