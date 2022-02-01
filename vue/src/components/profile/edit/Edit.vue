<template lang="pug">
  .profile-edit_area
    .profile-edit_pic
      img(:src='infoProfiles.img', alt='')
    input#inpFile.create-new-post_form-control(type='file' @change="uploadImg")
    .profile-edit_title Логин
    input.profile-edit_input(
      type='text'
      v-model="infoProfiles.login"
    )
    .profile-edit_title Фамилия
    input.profile-edit_input(
      type='text'
      v-model="infoProfiles.surname"
    )
    .profile-edit_title Имя
    input.profile-edit_input(
      type='text'
      v-model="infoProfiles.name"
    )
    .profile-edit_title Отчество
    input.profile-edit_input(
      type='text'
      v-model="infoProfiles.middleName"
    )
    .profile-edit_title E-mail
    input.profile-edit_input(
      type="email"
      v-model="infoProfiles.mail"
      placeholder="Please enter your email here"
      required
    )
    .profile-edit_title Телефон
    input.profile-edit_input(
      type='text'
      v-model="infoProfiles.phone"
    )
    .profile-edit_title О себе
    textarea.profile-edit_input(
      v-model="infoProfiles.aboutYou"
    )
    button.profile-edit_edit-save(@click="getInfoView") Сохранить изменения
</template>

<script>
export default {
  data(){
    return{
      infoProfiles:{
        login: '',
        surname: '',
        name: '',
        middleName: '',
        mail: '',
        phone: '',
        aboutYou: '',
        img:''
      },
    }
  },
  methods:{
    uploadImg(event){
      let file = event?.target?.files?.[0];
      let reader = new FileReader();
      reader.readAsDataURL(file)
      reader.onload = () => {
        this.infoProfiles.img = reader.result;
      };
    },
    getInfoView( ){
      if(this.infoProfiles.login && this.infoProfiles.phone && this.infoProfiles.mail){
        this.$emit('profileInfo', this.infoProfiles)
      }
    },
  }
}
</script>


<style lang="scss" scoped>
@import "src/assets/scss/pages/profile/editprofile.scss";
.profile-edit_edit-save{
  color: #00ad5f;
  border: 1px solid #00ad5f;
  padding: 10px;
  border-radius: 7px;
  cursor: pointer;
  background-color: #fff;
  transition: all .3s linear;
}

.profile-edit_edit-save:hover{
  color: #fff;
  border: 1px solid #00ad5f;
  background-color: #00ad5f;
}

</style>