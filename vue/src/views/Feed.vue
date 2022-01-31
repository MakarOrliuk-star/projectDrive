<template lang="pug">
div
  ButtonFeed(@click="togglePostModalWindow")
  .feed_main
    PostFeed(:posts="posts")
    MenuFeed
    ModulWindow(v-if="showPostModalWindow" @close="togglePostModalWindow" @postCreated="createPost")
</template>

<script>
import ButtonFeed from "@/components/feed/AllPostsFeed";
import MenuFeed from "@/components/feed/MenuFeed";
import ModulWindow from "@/components/feed/ModulWindow";
import PostFeed from "@/components/feed/PostFeed";

export default {
  components: {
    ButtonFeed,
    MenuFeed,
    ModulWindow,
    PostFeed
  },
  data () {
    return {
      showPostModalWindow: false,
      posts: [],
      text: ""
    }
  },
  methods: {
    togglePostModalWindow () {
      this.showPostModalWindow = !this.showPostModalWindow;
    },
    createPost (post) {
      this.posts.push(post);
      this.togglePostModalWindow();
    }
  }
}
</script>

<style lang="scss" scoped>
.feed_main{
  width: 70%;
  max-width: 1000px;
  display: grid;
  grid-template-columns: 60% 40%;
  grid-gap: 30px;
  margin: 10px auto;
}
</style>