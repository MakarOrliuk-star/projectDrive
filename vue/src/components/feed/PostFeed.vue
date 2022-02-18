<template lang="pug">
  div.feed_background
    .feed_post(
      v-for="post in posts"
    )
      .feed_post-info
        .feed_post-info-user
          .feed_profile-pic
            img( src="", alt="")
          .feed_username-post User 1
        img(src="", class="feed_options", alt="")
      img(
        :src="post.image | apiFile",
        class="post_image-profile",
        alt=""
      )
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
        p.feed_post-content-time {{ moment(post.created_at).format("DD-MM-YYYY") }}
      .feed_post-comment
        img( src="", class="feed_icon-profile", alt="")
        input.feed_post-comment-add(
          type='text'
          placeholder="Please enter your comment"
          v-model="comment"
        )
        .comment-btn(@click="commentPost()") Submit
</template>

<script>
import PostApi from "@/api/Post";
import scrollMixin from '@/mixins/scrollToTop';
import moment from "moment";

export default {
  // props: {
  //   posts: {
  //     type: Array,
  //     default: () => []
  //   }
  // },
  mixins: [scrollMixin],

  data() {
    return {
      editedPost: null,
      posts: null,
      comment: null,
      moment: moment,
    }
  },

  mounted() {
    this.getPost();
  },

  methods: {
    editPost(postId) {
      this.$emit('editButtonClicked', postId);
      this.scrollToTop();
    },

    deletePost(postId) {
      this.$emit('deleteButtonClicked', postId);
    },

    getPost() {
      PostApi.index()
          .then(resp => {
            this.posts = resp.data.data;
            console.log(this.posts)
          })
          .catch(console.error);
    },

    commentPost() {
      // CommentApi.store()
      //     .then(resp => {
      //
      //     })
    }
  },

}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/pages/feed/post.scss";

.feed_background {
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

.feed_post-comment-add {
  margin: 2% !important;
}

::-webkit-input-placeholder {
  color: #887f7f;
}
</style>