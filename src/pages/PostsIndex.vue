<script>

import axios from 'axios';
import PostCard from '../components/PostCard.vue';


export default {
  name: 'PostsIndex',

  data() {
    return {
      posts: [],

      currentPage: 1,

      categories: [],

      selectedCategoryId: '', 

      postsFound: false,
      isLoading: true,
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

      // console.log('URL: ', 'http://127.0.0.1:8000/api/posts?page=' + this.currentPage + '&category_id=' + this.selectedCategoryId);
      axios.get('http://127.0.0.1:8000/api/posts?page=' + this.currentPage + '&category_id=' + this.selectedCategoryId).then(response => {
        
        console.log(response);
        this.isLoading = false;

        if(response.data.success) {
          // se l'api mi restituisce un oggetto con success: true

          this.posts = response.data.results;
          this.categories = response.data.allCategories;
          this.postsFound = true;

        } else {

          this.postsFound = false;

        }

      });

    },

  },
}

</script>

<template>
  <div class="container py-5">

    <h1>Tutti i post del mio blog</h1>

    <form @submit.prevent="" action="" class="d-flex">

      <select name="category_id" id="category_id" class="form-select" v-model="selectedCategoryId" @change="getPosts()">

        <option value="">Tutte</option>

        <option v-for="category in categories" :value="category.id">{{ category.name }}</option>

      </select>

      <!-- <button class="btn btn-primary">Filtra</button> -->
    </form>

    <div v-if="!isLoading"  class="container pt-5">
  
      <hr>
  
      <div v-if="postsFound" class="row">
        <div v-for="post in posts" class="col-4 mb-5">
  
          <PostCard :post="post"></PostCard>
  
        </div>
      </div>
      <div v-else>
        <div class="alert alert-warning" role="alert">
          Nessun post trovato
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