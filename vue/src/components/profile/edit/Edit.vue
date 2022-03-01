<template lang="pug">
  .profile-edit_area
    .profile-edit_pic
      img(
        :src="user && user.image ? /storage/ + user.image : 'storage/profile/user.jpg'",
        alt=''
      )
    input#inpFile.create-new-post_form-control(type='file' @change="uploadImg")
    .profile-edit_title Имя
    input.profile-edit_input(
      type='text'
      v-model="infoProfiles.name"
      :placeholder= "user && user.name ? user.name : 'Введите ваше имя'"
    )
    .profile-edit_title Фамилия
    input.profile-edit_input(
      type='text'
      v-model="infoProfiles.lastname"
      :placeholder= "user && user.lastname ? user.lastname : 'Введите вашу фамилию'"
    )
    .profile-edit_title E-mail
    input.profile-edit_input(
      type="email"
      v-model="infoProfiles.email"
      :placeholder= "user && user.email ? user.email : 'Введите ваш email'"
    )
    .profile-edit_title Телефон
    input.profile-edit_input(
      type='text'
      v-model="infoProfiles.phone"
      :placeholder= "user && user.phone ? user.phone : 'Введите ваш номер телефона'"
    )
    .profile-edit_title О себе
    textarea.profile-edit_input(
      v-model="infoProfiles.aboutYou"
    )
    button.profile-edit_edit-save(@click.prevent="getInfoView") Сохранить изменения
</template>

<script>
export default {
  data(){
    return{
      infoProfiles:{
        name: null,
        lastname: null,
        email: null,
        phone: null,
        aboutYou: null,
        image: null,
      },
    }
  },

  props:{
    user: {
      type: Object,
      default: () => {}
    },
  },


  methods:{
    uploadImg(event){
      let file = event?.target?.files?.[0];
      let reader = new FileReader();
      reader.readAsDataURL(file)
      reader.onload = () => {
        this.infoProfiles.image = reader.result;
      };
    },

    getInfoView( ){
      this.$emit('profileInfo', this.infoProfiles)
      this.infoProfiles = ''
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

textarea{
  resize: none;
}

::placeholder {
  color: #007fb9;
  font-size: 1em;
}
</style>