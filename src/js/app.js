import '../styles/app.css';

import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Welcome from "./Welcome.vue";
import Profile from "./Profile.vue";
import Projects from "./Projects.vue";
import Contacts from "./Contacts.vue";

let app = new Vue({
    el: '#app',

    data() {
        return {
            sidebarOpen: false
        }
    },

    watch:{
        $route (to, from){
            this.sidebarOpen = false;
        }
    },

    router: new VueRouter({
        mode: 'history',

        routes:[
            {
                path: '/',
                component: Welcome,
                name: 'welcome'
            },
            {
                path: '/profile',
                component: Profile,
                name: 'profile'
            },
            {
                path: '/projects',
                component: Projects,
                name: 'projects'
            },
            {
                path: '/contacts',
                component: Contacts,
                name: 'contacts'
            }
        ]
    })
});