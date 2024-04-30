<script>

import axios from 'axios';

export default {
    name: 'SinglePost',

    data() {
        return {
            post: null,

            apiBaseUrl: 'http://127.0.0.1:8000/api',
        }
    },

    mounted() {
        // console.log(this.apiBaseUrl + '/posts/2')
        
        axios.get(this.apiBaseUrl + '/posts/2').then(res => {

            console.log(res)

            this.post = res.data.post

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