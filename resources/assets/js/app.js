require('./bootstrap');

window.Vue = require('vue');


// Import Vue router
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


let Myheader = require('./components/Myheader.vue');
let Myfooter = require('./components/Myfooter.vue');

let Home = require('./components/Home.vue');
let About = require('./components/About.vue');

// Path for Vue page
const routes = [
  { path: '/home', component: Home }, // Goto let Home = ..... ->
  { path: '/about', component: About } // Goto let About = ..... ->
]

const router = new VueRouter({
    mode : 'history',
    routes // short for `routes: routes`
})

const app = new Vue({
    el: '#app',
    router,
    components:{Myheader,Myfooter}
});
