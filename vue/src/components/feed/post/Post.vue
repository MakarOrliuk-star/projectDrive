<template lang="pug">
  div
    .feed_post-info
      .feed_post-info-user
        .feed_profile-pic
          img( src="", alt="")
        .feed_username-post User 1
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
      CommentSection(
        @commentPost ="getCommentPost"
      )
</template>

<script>
import CommentSection from "@/components/post/comment/Comment";

export default {
  data(){
    return{
      comments: null,
    }
  },

  components:{
    CommentSection
  },

  props:{
    post: {
      type: Object,
      default: () => {}
    }
  },

  methods:{
    getCommentPost(Comments){
      this.comments = Comments;
      this.post['comments'] = Comments;
    },

    deletePost(){
      this.$emit('delete');
    },

    editPost(){
      this.$emit('edit');
    },
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
</style>