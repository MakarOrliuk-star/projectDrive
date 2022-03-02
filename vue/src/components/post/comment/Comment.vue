<template lang="pug">
  .feed_post-comment
    input.feed_post-comment-add(
      type='text'
      placeholder="Please enter your comment"
      v-model="content"
    )
    .comment-btn(@click="postCommentClickButton")
      img(
        src="@/assets/img/feed/sendImage.png",
        class="feed_icon-profile",
        alt=""
      )
</template>

<script>
export default {
  data(){
    return{
      content: null,
    }
  },

  methods:{
    postCommentClickButton(){
      if(this.content){
        this.$emit('commentPost', this.content)
      }
      this.content = ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/pages/feed/post.scss";

.comment-btn {
  color: #00ad5f;
  margin: 5px;
  border-radius: 7px;
  cursor: pointer;
  background-color: #fff;
  transition: all .3s linear;
}

.comment-btn:hover {
  color: #fff;
  border: 1px solid #00ad5f;
  background-color: #fff;
}
</style>