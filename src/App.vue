<script>

// importiamo axios
import axios from 'axios';

export default {
  data() {
    return {

      posts: [],

      // link ai vari endpoint dell'api per vedere le varie pagine dei post
      apiLinks: [],
      apiPageNumber: 1,

      isLoading: true,

      baseApiUrl: 'http://127.0.0.1:8000/api',

    }
  },

  mounted() {
    
    this.apiCall();

  },

  methods: {

    apiCall() {
      // impostiamo la variabile isLoading a true
      this.isLoading = true

      axios.get(this.baseApiUrl + '/posts', {
        params: {
          page: this.apiPageNumber
        }
      }).then(res => {

        // solo quando riceviamo una risposta di successo
        if(res.data.success) {
          // impostiamo isLoading a false
          this.isLoading = false
        }

        console.log(res);

        // salvo i post
        this.posts = res.data.results.data;

        // salvo i link
        this.apiLinks = res.data.results.links;

      })
    },

    changeApiPage(pageNumber) {
      // console.log(pageNumber)
      this.apiPageNumber = pageNumber;

      // rifaccio la chiamata api così riottengo i post relativi alla nuova pagina selezionata
      this.apiCall();
    },

  },
}

</script>

<template>
  <div class="container py-5">

    <h1>I nostri post</h1>

    <div v-if="!isLoading">

      <ul>
        <li v-for="post in posts">
          {{ post.title }}
        </li>
      </ul>
  
      <nav >
        <ul class="d-flex gap-2">
  
          <li v-for="link in apiLinks" v-html="link.label" @click="changeApiPage(link.label)" :class="link.label == apiPageNumber ? 'active' : ''">
            
          </li>
  
        </ul>      
      </nav>
    </div>
    <div v-else>
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>

nav {
  margin-top: 100px;
  padding-top: 20px;
  border-top: solid 1px gray;

  ul {

    list-style-type: none;
    
    li {
      
      padding: 8px;

      text-decoration: none;
      color: white;

      transition: all .3s ease;

      cursor: pointer;

      &:hover, &.active {
        background-color: rgba(255,255,255,0.4);
        color: black;
      }

    }
  }
}


</style>
