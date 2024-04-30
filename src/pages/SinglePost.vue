<script>

import axios from 'axios';

export default {
    name: 'SinglePost',

    data() {
        return {
            post: null,
            postSlug: null,

            apiBaseUrl: 'http://127.0.0.1:8000/api',
        }
    },

    mounted() {
        // come recuperiamo il parametro dell'id del post dall'url?
        console.log('parametro id della rotta: ', this.$route.params.slug);
        // lo assegnamo alla variabile postSlug per comodità
        this.postSlug = this.$route.params.slug;
        
        axios.get(this.apiBaseUrl + '/posts/' + this.postSlug).then(res => {

            console.log(res)

            if(res.data.success) {
                
                // se troviamo il post lo salviamo
                this.post = res.data.post

            } else {
                // altrimenti torniamo alla home
                this.$router.push({name: 'home'})
            }


        })
    },
}

</script>

<template>

    <div v-if="post">
        <h2>
            {{ post.title }}
        </h2>

        <p>
            {{ post.content }}
        </p>
    </div>
    <div v-else>
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>

</template>


<style lang="scss" scoped>
</style>