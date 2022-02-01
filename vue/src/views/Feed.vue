<template lang="pug">
div
  ButtonFeed(@click="togglePostModalWindow")
  .feed_main
    PostFeed(
      :posts="posts"
      @editButtonClicked="setEditingPost"
      @deleteButtonClicked="deletePost"
    )
    MenuFeed
    ModulWindow(
      v-if="showPostModalWindow"
      @close="togglePostModalWindow"
      @postCreated="createPost"
      :editingPost="editingPost"
    )
</template>

<script>
import ButtonFeed from "@/components/feed/ButtonFeed";
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
      text: "",
      editingPostId: null
    }
  },
  methods: {
    togglePostModalWindow () {
      if (this.showPostModalWindow) {
        this.editingPostId = null;
      }
      this.showPostModalWindow = !this.showPostModalWindow;
    },
    createPost(post) {
      this.posts.push(post);
      this.togglePostModalWindow();
    },
    deletePost (postId) {
      const postIndex = this.posts.findIndex(post => postId === post.id);
      this.posts.splice(postIndex, 1);
    },
    setEditingPost (postId) {
      this.editingPostId = postId;
      this.togglePostModalWindow();
    },
    updatePost (post) {
      const updateIndex = this.posts.findIndex(innerPost => innerPost.id === post.id);
      this.posts.splice(updateIndex, post);
      this.togglePostModalWindow();
    }
  },
  computed: {
    editingPost () {
      return this.editingPostId && this.posts.find(post => post.id === this.editingPostId);
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