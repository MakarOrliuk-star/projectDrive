<template lang="pug">
  div.feed_background
    .feed_post(
      v-for="post in posts"
      :key="post.title"
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
        | {{post.title}}
        p.feed_post-content-time 2 minutes ago
      .feed_post-comment
        img( src="", class="feed_icon-profile", alt="")
        p.feed_post-comment-add {{post.comment}}
        button.comment-btn post
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/pages/feed/post.scss";
.feed_background{
  grid-row-start: 1;
}
</style>