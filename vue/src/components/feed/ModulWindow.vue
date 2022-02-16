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
            v-model="post.title"
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
            v-model="post.comment"
            )
      .create-new-post_group-name
        button#btn.create-new-post.create-new-post_button.create-new-post_primary-color(
          type='button',
          @click="addPost"
          )
          | Send
          | Post
      span.create-new-post_close(
        @click="closeModule"
      ) X
</template>

<script>
import PostApi from "@/api/Post";

export default {
  props: {
    editingPost: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      post: {
        title:'',
        comment:'',
        getImg:'',
        id: ''
      }
    }
  },
  mounted() {
    if (this.editingPost) {
      this.post = Object.assign({}, this.editingPost);
    }
  },
  methods: {
    closeModule () {
      this.$emit('close');
    },
    uploadImg (event) {
      let file = event?.target?.files?.[0];
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        this.post.getImg = reader.result;
      };
    },
    addPost () {
         if (this.post.getImg && this.post.title && this.post.comment) {
           const eventName = this.editingPost ? 'postUpdated' : 'postCreated'

           this.$emit(eventName, this.post);
            let form ={
              title: this.post.title,
              image: this.post.getImg,
            }
            PostApi.store(form)
            .then((resp) => {
              console.log(resp)
              this.$router.push({ name: 'feed' })
            })
            .catch(error =>{
              console.log(error)
            })
         }
       },
    }
}
</script>


<style lang="scss" scoped>
@import "src/assets/scss/pages/feed/modul.scss";
</style>