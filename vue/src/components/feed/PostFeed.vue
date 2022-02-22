<template lang="pug">
  div.feed_background
    .feed_post(
      v-for="post in posts"
      :key="post.id"
    )
      ModulWindow(
        v-if="showPostModalWindow"
        @close="togglePostModalWindow"
      )
      Post(
        :post="post"
        @delete="postDelete(post.id)"
        @edit="postEdit(post)"
      )
</template>

<script>
import PostApi from "@/api/Post";
import scrollMixin from '@/mixins/scrollToTop';
import moment from "moment";
import Post from "@/components/feed/post/Post";
import ModulWindow from "@/components/feed/ModulWindow";

export default {
  components:{
    Post,
    ModulWindow,
  },

  mixins: [scrollMixin],

  data() {
    return {
      editedPost: null,
      posts: null,
      moment: moment,
      showPostModalWindow: false,
    }
  },

  mounted() {
    this.getPost();
  },

  methods: {
    togglePostModalWindow () {
      this.showPostModalWindow = !this.showPostModalWindow;
    },

    getPost() {
      PostApi.index()
          .then(resp => {
            this.posts = resp.data.data;
          })
          .catch(console.error);
    },

    postDelete(id){
      PostApi.destroy(id)
      .then(() => {
        let index = this.posts.findIndex(post => post.id === id);
        this.posts.splice(index, 1);
      })
      .catch(error =>{
        console.log(error)
      })
    },

    postEdit(post){
      PostApi.update(post)
      .then(() => {
        const updateIndex = this.posts.findIndex(innerPost => innerPost.id === post.id);
        this.posts.splice(updateIndex, post);
      })
      .catch(error =>{
        console.log(error)
      })
      this.togglePostModalWindow();
    },
  },

}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/pages/feed/post.scss";

.feed_background {
  grid-row-start: 1;
}

.feed_post-comment-add {
  margin: 2% !important;
}

::-webkit-input-placeholder {
  color: #887f7f;
}

</style>