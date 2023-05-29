<script>
export default {
  name: 'PostCard',

  data() {
    return {
      baseUrl: 'http://127.0.0.1:8000/',
    }
  },

  props: {
    post: Object,
  },

  computed: {
    shortContent() {
      if(this.post.content.length > 50) {
        return this.post.content.substring(0, 50) + '...';
      } else {
        return this.post.content;
      }
    },

    coverImage() {
      if(this.post.cover_image == null) {
        return "https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";
      } else {
        return this.baseUrl + 'storage/' + this.post.cover_image;
      }
    }
  },
}
</script>

<template>
  <div class="card post">

    <img :src="coverImage" class="cover-image card-img-top" alt="...">

    <div class="card-body">

      <h5 class="card-title">{{ post.title }}</h5>
      <small>Categoria: {{ post.category ? post.category.name : 'nessuna' }}</small>

      <div class="tags">
        <span v-for="tag in post.tags" class="badge rounded-pill" :style="{backgroundColor: tag.color}">{{ tag.name }}</span>
      </div>

      <p class="card-text"> {{ shortContent }} </p>
      <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->

    </div>

  </div>
</template>

<style lang="scss" scoped>

  .post.card {
    .cover-image {
      height: 200px;
      
      object-fit: cover;
      object-position: center;
    }

    .tags {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: .5em;

      padding: .8em 0;

      overflow-x: scroll;
    }
    
  }

</style>