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
        @getComment="storeCommentClick"
        :comments="comments"
        @deleteComment="commentDelete"
        :user="user"
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
    comments: {
      type: Array,
      default: () => []
    },
    user: {
      type: Object,
      default: () => {}
    }
  },

  components: {
    Post,
  },

  methods:{
    storeCommentClick(getComment){
      this.$emit('commentClick', getComment);
    },

    commentDelete(commentId){
      this.$emit('toggleDeleteComment', commentId);
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