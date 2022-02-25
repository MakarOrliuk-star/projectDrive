<template lang="pug">
  div
    .feed_post-info
      .feed_post-info-user
        img.feed_profile-pic(
          :src="user && user.image ? /storage/ + user.image : 'storage/profile/user.jpg'",
          alt=""
        )
        .feed_username-post {{user && user.name}}
    img(
      :src="post.image | apiFile",
      class="post_image-profile",
      alt=""
    )
    .feed_post-content
      .feed_post-content-reaction
        p.feed_post-content-likes 1,012 likes
        .comment-btn(@click.prevent="deletePost") Delete
        .comment-btn(@click.prevent="editPost") Edit
      p.feed_post-content-description
        span username
      p.feed_post-content-description {{post.title}}
      p.feed_post-content-time {{ moment(post.created_at).format("h:mm:ss") }}
      Comment(
        @commentPost ="getCommentPost"
        :comment="comments"
      )
      div
        div.feed_post-content-comments(
          v-for="(comment, index) in  comments"
          :key="index"
        ) {{comment.content}}
          div.comment-btn-delete(
            @click="$emit('deleteComment', comment.id)"
          ) Delete
</template>

<script>
import Comment from "@/components/post/comment/Comment";

export default {
  components:{
    Comment
  },

  props:{
    post: {
      type: Object,
      default: () => {}
    },
    comments: {
      type: Array,
      default: () => []
    },
    user: {
      type: Object,
      default: () => {}
    },
  },

  methods:{
    getCommentPost(comment){
      this.post['content'] = comment
      this.$emit('getComment', this.post);
    },

    deletePost(){
      this.$emit('delete');
    },

    editPost(){
      this.$emit('edit');
    },
    deleteComment(){
      this.$emit('deleteComment');
    }
  },
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/pages/feed/post.scss";

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

.feed_post-content-likes{
  display: inline-block;
  width: 100%;
}

.feed_post-content-comments{
  display: flex;
  justify-content: space-between;
}

.comment-btn-delete{
  color: #00ad5f;
  border: 1px solid #00ad5f;
  border-radius: 7px;
  cursor: pointer;
  background-color: #fff;
  transition: all .3s linear;
}

.comment-btn-delete:hover {
  color: #fff;
  border: 1px solid #00ad5f;
  background-color: #00ad5f;
}

</style>