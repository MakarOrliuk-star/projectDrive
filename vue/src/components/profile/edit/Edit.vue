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
    span.invalid-feedback(
      v-if="!$v.infoProfiles.name.required"
    ) Name is required
    span.invalid-feedback(
      v-if="infoProfiles.name && !$v.infoProfiles.name.valid"
    ) Name contains atleast One Uppercase and One Lowercase
    .profile-edit_title Фамилия
    input.profile-edit_input(
      type='text'
      v-model="infoProfiles.lastname"
      :placeholder= "user && user.lastname ? user.lastname : 'Введите вашу фамилию'"
    )
    span.invalid-feedback(
      v-if="!$v.infoProfiles.lastname.required"
    ) LastName is required
    .profile-edit_title E-mail
    input.profile-edit_input(
      type="email"
      v-model="infoProfiles.email"
      :placeholder= "user && user.email ? user.email : 'Введите ваш email'"
    )
    span.invalid-feedback(
      v-if="!$v.infoProfiles.email.required"
    ) Email is required
    .profile-edit_title Телефон
    input.profile-edit_input(
      type='text'
      v-model="infoProfiles.phone"
      :placeholder= "user && user.phone ? user.phone : 'Введите ваш номер телефона'"
    )
    span.invalid-feedback(
      v-if="!$v.infoProfiles.phone.required"
    ) Phone is required
    .profile-edit_title О себе
    textarea.profile-edit_input(
      v-model="infoProfiles.aboutYou"
    )
    span.invalid-feedback(
      v-if="!$v.infoProfiles.aboutYou.required"
    ) Information about yourself is required
    button.profile-edit_edit-save(
      @click.prevent="getInfoView"
      :disabled="this.isDisabled"
    ) Сохранить изменения
</template>

<script>
import {required, email} from 'vuelidate/lib/validators'

export default {
  created() {
    this.submitted = true;
    return this.$v.$touch();
  },

  computed: {
    isDisabled() {
      return this.$v.$invalid;
    },
  },

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
      submitted: false,
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

      this.submitted = true;
      this.$v.$touch();

      if (this.$v.$invalid) {
        this.$toaster.success('Данные не введены') // stop here if form is invalid
      } else {
        this.$toaster.success('Ваши данные успешно изменены.')
      }

      this.$emit('profileInfo', this.infoProfiles)
      this.infoProfiles = ''
    },
  },

  validations:{
    infoProfiles:{
      name: {
        required,
        valid: function (value) {
          const containsUppercase = /[A-Z]/.test(value);
          const containsLowercase = /[a-z]/.test(value);
          return (
              containsUppercase &&
              containsLowercase
          );
        },
      },
      lastname: {
        required
      },
      email: {
        required,
        email
      },
      phone: {
        required
      },
      aboutYou: {
        required
      },
    },
  },
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

.invalid-feedback {
  color: red;
}
</style>