<template lang="pug">
  div
    ButtonFeed(
      @click="togglePostModalWindow"
    )
    .feed_main
      PostFeed(
        :posts="posts"
        @editButtonClicked="setEditingPost"
        @deleteButtonClicked="deletePost"
        @commentClick="commentCreate"
      )
      MenuFeed
      ModalWindow(
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
import ModalWindow from "@/components/feed/ModalWindow";
import PostFeed from "@/components/feed/PostFeed";
import PostApi from "@/api/Post";
import CommentApi from "@/api/Comment";
import {mapGetters} from 'vuex'

export default {
  components: {
    ButtonFeed,
    MenuFeed,
    ModalWindow,
    PostFeed
  },

  data() {
    return {
      showPostModalWindow: false,
      posts: null,
      editingPostId: null,
      comments: null,
    }
  },

  mounted() {
    this.getPosts()
  },

  methods: {
    getPosts() {
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
            console.log(resp)
            if (resp.data === '') {
              this.$toaster.error('Добавьте аватарку для создания поста.')
            } else {
              this.posts.push(resp.data.data)
              this.$toaster.success('Пост успешно создан')
            }
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

    togglePostModalWindow() {
      if (this.showPostModalWindow) {
        this.editingPostId = null;
      }
      this.showPostModalWindow = !this.showPostModalWindow;
    },

    deletePost(postId) {
      PostApi.destroy(postId)
          .then(() => {
            const postIndex = this.posts.findIndex(post => postId === post.id);
            this.posts.splice(postIndex, 1);
          })
          .catch(error => {
            console.log(error)
          })
    },

    setEditingPost(postId) {
      this.editingPostId = postId;
      this.togglePostModalWindow();
    },

    commentCreate(post) {
      let filteredArray = post.comments.filter(e => typeof e === 'string')
      console.log(filteredArray)
      let form = {
        content: filteredArray.toString()
      }
      CommentApi.store(post.id, form)
          .then(resp => {
            console.log(resp)
          })
          .catch(error => {
            console.log(error)
          })
    },
  },

  computed: {
    editingPost() {
      return this.editingPostId && this.posts.find(post => post.id === this.editingPostId);
    },
    ...mapGetters(['getUser']),
  },
}
</script>

<style lang="scss" scoped>
.feed_main {
  width: 70%;
  max-width: 1000px;
  display: grid;
  grid-template-columns: 60% 40%;
  grid-gap: 30px;
  margin: 10px auto;
}
</style>