<script>
import axios from 'axios';

export default {
  name: 'SinglePost',

  data() {
    return {
      post: {},

      isLoading: true,
      postFound: false,

      postSlug: '',

      baseUrl: 'http://127.0.0.1:8000/',
    }
  }, 

  mounted() {
    console.log(this.$route);
    this.postSlug = this.$route.params.slug;

    this.getPost();
  },

  computed: {
    postImage() {
      return this.baseUrl + 'storage/' + this.post.cover_image;
    }
  },

  methods: {
    getPost() {
      
      // console.log('http://127.0.0.1:8000/api/posts/' + this.postSlug);
      axios.get( this.baseUrl + 'api/posts/' + this.postSlug).then(response => {

        console.log('post:', response);
        this.isLoading = false;

        if(response.data.success) {

          this.post = response.data.post;
          this.postFound = true;

        } else {
          this.postFound = false;
        }


      });

    }
  }
}
</script>

<template>
  <div v-if="isLoading" id="spinner-container">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div v-else class="container py-5">
    <div v-if="postFound">
      <div class="post-image text-center">
        <img :src="postImage" alt="">
      </div>

      <h1>{{ post.title }}</h1>

      <div class="tags">
        <span v-for="tag in post.tags" class="badge rounded-pill" :style="{backgroundColor: tag.color}">{{ tag.name }}</span>
      </div>
      <h4>
        {{ post.category ? post.category.name : 'Nessuna categoria' }}
      </h4>
      <hr>
      <p>
        {{ post.content }}
      </p>

    </div>
    <div v-else>
      <div class="alert alert-danger" role="alert">
        Nessun post trovato
      </div>

    </div>
    
  </div>

</template>

<style lang="scss">

#spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  
  width: 100%;
  height: 600px;

}


.post-image img {
  max-height: 400px;

  object-fit: cover;
}

.tags {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: .5em;

  padding: .8em 0;

  overflow-x: scroll;
}

</style>