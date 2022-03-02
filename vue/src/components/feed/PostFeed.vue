<template lang="pug">
  .feed_background
    .feed_post(
      v-for="post in posts"
      :key="post.id"
    )
      Post(
        :post="post"
        @delete="$emit('deleteButtonClicked', post.id)"
        @edit="$emit('editButtonClicked', post)"
        @getComment="$emit('commentClick', post)"
        @deleteComment="commentDelete"
      )
</template>

<script>
import Post from "@/components/feed/post/Post";

export default {
  props: {
    posts: {
      type: Array,
      default: () => []
    },
  },

  components: {
    Post,
  },

  methods:{
    commentDelete(post){
      this.posts= post
      this.$emit('toggleDeleteComment', post);
    },
  },
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/pages/feed/post.scss";

.feed_background {
  grid-row-start: 1;
}

::-webkit-input-placeholder {
  color: #887f7f;
}

</style>