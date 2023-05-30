<script>

import axios from 'axios';
import PostCard from '../components/PostCard.vue';


export default {
  name: 'PostsIndex',

  data() {
    return {
      posts: [],

      currentPage: 1,
    }
  },

  components: {
    PostCard,
  },  

  created() {
    this.getPosts();
  },

  methods: {
    getPosts() {

      axios.get('http://127.0.0.1:8000/api/posts?page=' + this.currentPage).then(response => {
        console.log(response.data.results);
        this.posts = response.data.results.data;
      });

    },

  },
}

</script>

<template>
  <div class="container py-5">

    <div v-if="posts.length > 0"  class="container pt-5">
      <h1>Tutti i post del mio blog</h1>
  
      <hr>
  
      <div class="row">
        <div v-for="post in posts" class="col-4 mb-5">
  
          <PostCard :post="post"></PostCard>
  
        </div>
      </div>
    </div>
  
    <div v-else class="loading-screen">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

  </div>

</template>

<style lang="scss" scoped>
  .loading-screen {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    min-height: 600px;


  }
</style>