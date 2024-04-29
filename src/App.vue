<script>

// importiamo axios
import axios from 'axios';

export default {
  data() {
    return {

      posts: [],

      

      baseApiUrl: 'http://127.0.0.1:8000/api',

    }
  },

  mounted() {
    
    axios.get(this.baseApiUrl + '/posts').then(res => {

      console.log(res);


      this.posts = res.data.results;

    })

  },

  methods: {

  },
}

</script>

<template>
  <div class="container py-5">

    <h1>Ciao</h1>

    <ul>
      <li v-for="post in posts">
        {{ post.title }}
      </li>
    </ul>

    
  </div>
</template>

<style scoped>



</style>
