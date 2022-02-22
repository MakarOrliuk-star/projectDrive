<template lang="pug">
  .feed_post-comment
    img( src="", class="feed_icon-profile", alt="")
    input.feed_post-comment-add(
      type='text'
      placeholder="Please enter your comment"
      v-model="comments"
    )
    .comment-btn(@click="PostComment")
      img( src="@/assets/img/background/send.jpg", class="feed_icon-profile", alt="" )
</template>

<script>
export default {
  data(){
    return{
      comments: null,
    }
  },

  methods:{
    PostComment(){
      if(this.comments){
        this.$emit('commentPost', this.comments)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/pages/feed/post.scss";

.comment-btn {
  color: #00ad5f;
  //border: 1px solid #00ad5f;
  //padding: 10px;
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