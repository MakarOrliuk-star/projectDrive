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
  components: {
    Post,
  },

  props: {
    posts: {
      type: Array,
      default: () => []
    },
  },

  methods:{
    commentDelete(){
      this.$emit('toggleDeleteComment');
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