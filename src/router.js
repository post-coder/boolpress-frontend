import { createRouter, createWebHistory } from 'vue-router';


// importo tutti i componenti che verranno utilizzati come pagina
import HomePage from './pages/HomePage.vue';
import SinglePost from './pages/SinglePost.vue'
import ContactMe from './pages/ContactMe.vue';


const router = createRouter({
    history: createWebHistory(),

    // questo array conterrà tutte le rotte della nostra applicazione
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        }, 
        {
            path: '/posts/:slug',
            name: 'single-post',
            component: SinglePost
        },
        {
            path: '/contact-me',
            name: 'contact-me',
            component: ContactMe
        }
    ]

})

export { router };