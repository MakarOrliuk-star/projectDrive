<template lang="pug">
  .create-new-post-bg
    .create-new-post
      h3 Create new post
      .create-new-post_group-name
        label.create-new-post_label Title
        .create-new-post_input
          input.create-new-post_form-control(
            type='text',
            required='',
            v-model="posts.title"
          )
      .create-new-post_group-name
        label.create-new-post_label Your image
        .create-new-post_input
          input#inpFile.create-new-post_form-control(type='file' @change="uploadImg")
      .create-new-post_group-name
        label.create-new-post_label Your comment
        .create-new-post_input
          input.create-new-post_form-control(
            type='text',
            required='',
            v-model="posts.sign"
            )
      .create-new-post_group-name
        button#btn.create-new-post.create-new-post_button.create-new-post_primary-color(
          type='button',
          @click="addPost"
          )
          | Send
          | Post
      span.create-new-post_close(
        @click="closeModal"
      ) X
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  },

  data () {
    return {
      posts: {
        title: null,
        sign: null,
        image: null,
      }
    }
  },

  mounted() {
    if (this.post) {
      this.posts = Object.assign({}, this.post);
    }
  },

  methods: {
    closeModal() {
      this.$emit('close');
    },

    uploadImg(event) {
      let file = event?.target?.files?.[0];
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        this.posts.image = reader.result;
      };
    },

    addPost() {
        this.$emit(this.post ? 'post-updated' : 'post-created', this.posts);
    },
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/pages/feed/modall";
</style>