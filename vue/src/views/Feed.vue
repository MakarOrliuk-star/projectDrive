<template lang="pug">
div
  ButtonFeed(@click="togglePostModalWindow")
  .feed_main
    PostFeed(
      :posts="posts"
      @editButtonClicked="setEditingPost"
      @deleteButtonClicked="deletePost"
      @commentClick="commentCreate"
      :comments="comments"
      @toggleDeleteComment="toggleDeleteCommentId"
      :user="getUser"
    )
    MenuFeed
    ModulWindow(
      v-if="showPostModalWindow"
      @post-created="handlePostCreate"
      @post-updated="handlePostUpdate"
      @close="togglePostModalWindow"
      :post="editingPostId"
    )
</template>

<script>
import ButtonFeed from "@/components/feed/ButtonFeed";
import MenuFeed from "@/components/feed/MenuFeed";
import ModulWindow from "@/components/feed/ModulWindow";
import PostFeed from "@/components/feed/PostFeed";
import PostApi from "@/api/Post";
import CommentApi from "@/api/Comment";
import {mapGetters} from 'vuex'
import scrollToTop from "@/mixins/scrollToTop";


export default {
  mixins: [scrollToTop],
  computed: {
    editingPost () {
      return this.editingPostId && this.posts.find(post => post.id === this.editingPostId);
    },
    ...mapGetters(['getUser']),
  },

  components: {
    ButtonFeed,
    MenuFeed,
    ModulWindow,
    PostFeed
  },
  data () {
    return {
      showPostModalWindow: false,
      posts: null,
      editingPostId: null,
      comments: null,
    }
  },

  mounted() {
    this.getPosts()
    this.getComment()
  },

  methods: {
    getPosts(){
      PostApi.index()
      .then(resp => {
        this.posts = resp.data.data
      })
      .catch(error => {
        console.log(error)
      })
    },

    handlePostCreate(post) {
      PostApi.store(post)
          .then(resp => {
            this.posts.push(resp.data.data)
          })
          .catch(console.error)
          .finally(() => {
            this.editedPost = null;
            this.togglePostModalWindow();
          });
    },

    handlePostUpdate(post) {
      PostApi.update(post.id, post)
          .then(() => {
          })
          .catch(error => {
            console.log(error)
          })
          .finally(() => {
            this.editedPost = null;
            this.togglePostModalWindow();
          });
    },

    togglePostModalWindow () {
      if (this.showPostModalWindow) {
        this.editingPostId = null;
      }
      this.showPostModalWindow = !this.showPostModalWindow;
    },

    deletePost (postId) {
      PostApi.destroy(postId)
      .then(() => {
        const postIndex = this.posts.findIndex(post => postId === post.id);
        this.posts.splice(postIndex, 1);
      })
      .catch(error =>{
        console.log(error)
      })
    },

    setEditingPost (postId) {
      this.editingPostId = postId;
      this.togglePostModalWindow();
    },

    commentCreate(post){
      console.log(post)
      CommentApi.store(post)
      .then(resp => {
        this.comments.push(resp.data.data)
      })
      .catch(error => {
        console.log(error)
      })
    },

    getComment(){
      CommentApi.index()
      .then(resp => {
        this.comments = resp.data.data
      })
      .catch(error => {
        console.log(error)
      })
    },

    toggleDeleteCommentId(commentId){
      console.log(commentId)
      CommentApi.destroy(commentId)
      .then(() =>{
        const commentIndex = this.posts.findIndex(comment => commentId === comment.id);
        this.comments.splice(commentIndex, 1);
      })
      .catch(error => {
        console.log(error)
      })
    }
  },
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