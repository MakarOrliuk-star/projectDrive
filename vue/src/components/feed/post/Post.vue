<template lang="pug">
  div
    .feed_post-info
      .feed_post-info-user
        img.feed_profile-pic(
          :src="getUser && getUser.image ? /storage/ + getUser.image : 'storage/profile/user.jpg'",
          alt=""
        )
        .feed_username-post {{getUser && getUser.name}}
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
      )
      div
        .feed_post-content-comments(
          v-for="comment in  post.comments"
          :key="comment.content"
        ) {{comment.content}}
          .comment-btn-delete(
            @click="deleteComment(comment)"
          ) Delete
</template>

<script>
import Comment from "@/components/post/comment/Comment";
import {mapGetters} from "vuex";
import scrollToTop from "@/mixins/scrollToTop";
import CommentApi from "@/api/Comment"

export default {
  mixins:[scrollToTop],

  components:{
    Comment
  },

  computed:{
    ...mapGetters(['getUser']),
  },

  props:{
    post: {
      type: Object,
      default: () => {}
    },
  },

  methods:{
    getCommentPost(comment){
      this.post.comments.push(comment)
      this.$emit('getComment');
    },

    deletePost(){
      this.scrollToTop()
      this.$emit('delete');
    },

    editPost(){
      this.$emit('edit');
      this.scrollToTop()
    },

    deleteComment(commentToRemove){
      console.log(commentToRemove.id)
      this.post.comments = this.post.comments.filter(comment => comment !== commentToRemove)

      CommentApi.destroy(commentToRemove.id)
      .then(resp => {
        console.log(resp)
      })
      .catch(error => {
        console.log(error)
      })
      //  console.log(this.post.comments)
      //  for(var i = 0; i < this.post.comments.length;i++){
      //    console.log(this.post.comments[i].id + ' ' + this.post.comments[i].content);
      //  }
      //
      // this.$emit('deleteComment');
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
  margin: 15px;
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