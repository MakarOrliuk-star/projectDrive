<template lang="pug">
  div.feed_background
    .feed_post(
      v-for="(post,index) in posts"
      :id="index"
      )
      .feed_post-info
        .feed_post-info-user
          .feed_profile-pic
            img( src="", alt="")
          .feed_username-post User 1
        img(src="", class="feed_options", alt="")
      img(
        :src="post.getImg",
        class="post_image-profile",
        alt="")
      .feed_post-content
        .feed_post-content-reaction
          img( src="", class="feed_icon-profile", alt="")
          img( src="", class="feed_icon-profile", alt="")
          img( src="", class="feed_icon-profile", alt="")
          img( src="", class="feed_icon-profile icon", alt="")
        p.feed_post-content-likes 1,012 likes
        p.feed_post-content-description
          span username
        p.feed_post-content-description {{post.title}}
        p.feed_post-content-time 2 minutes ago
      .feed_post-comment
        img( src="", class="feed_icon-profile", alt="")
        p.feed_post-comment-add
          span {{post.comment}}
        .comment-btn(@click="deletePost(post.id)") Delete
        .comment-btn(@click="editPost(post.id)") Edit
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      editedPost: null,
    }
  },
  methods: {
    scrollToTop(){
      const top = document.querySelector('.feed_background')
      top.scrollTo({
        top: 1000,
        behavior: "smooth"
      });
    },
    editPost (postId) {
      this.$emit('editButtonClicked', postId);
    },
    deletePost (postId) {
      this.$emit('deleteButtonClicked', postId);
    },
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/pages/feed/post.scss";
.feed_background{
  grid-row-start: 1;
}

.comment-btn {
  color: #00ad5f;
  border: 1px solid #00ad5f;
  padding: 10px;
  margin: 5px;
  border-radius: 7px;
  cursor: pointer;
  background-color: #fff;
  transition: all .3s linear;
}

.comment-btn:hover {
  color: #fff;
  border: 1px solid #00ad5f;
  background-color: #00ad5f;
}
</style>