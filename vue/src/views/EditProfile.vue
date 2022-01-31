<template lang="pug">
  .profile-edit
    .profile-edit_area
      .profile-edit_pic
        img(:src='profile.img', alt='')
      input#inpFile.create-new-post_form-control(type='file' @change="uploadImg")
      .profile-edit_title Логин:
      input.profile-edit_input(type='text')
      .profile-edit_title Фамилия:
      input.profile-edit_input(type='text')
      .profile-edit_title Имя:
      input.profile-edit_input(type='text')
      .profile-edit_title Отчество:
      input.profile-edit_input(type='text')
      .profile-edit_title E-mail:
      input.profile-edit_input(type='text')
      .profile-edit_title Телефон:
      input.profile-edit_input(type='text')
      .profile-edit_title О себе:
      textarea.profile-edit_input
      button.profile-edit_edit-save Сохранить изменения
</template>

<script>
export default {
  data(){
    return{
      profile:{
        img:''
      }
    }
  },
  methods:{
    uploadImg(event){
      let file = event?.target?.files?.[0];
      let reader = new FileReader();

      reader.readAsDataURL(file)
      reader.onload = () => {
        this.profile.img = reader.result;
      };
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/pages/profile/editprofile.scss";
</style>