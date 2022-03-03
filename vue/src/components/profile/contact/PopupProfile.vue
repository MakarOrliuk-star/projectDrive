<template lang="pug">
  .card.text-center
    .card-body
      .card-title Если забыл номер телефона, то напоминаю
      | {{user && user.phone ? user.phone : 'Введите ваш номер телефона в настройках'}}
    .card_comment-btn(@click="closeModal") Close
</template>

<script>

export default {
  props:{
   user: {
     type: Object,
     default: () => {}
   }
  },

 methods:{
   closeModal(){
     this.$emit('close');
   }
 }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/pages/profile/popup.scss";

.card_comment-btn {
  color: #00ad5f;
  border: 1px solid #00ad5f;
  padding: 10px;
  margin: 5px;
  border-radius: 7px;
  cursor: pointer;
  background-color: #fff;
  transition: all .3s linear;
}

.card_comment-btn:hover {
  color: #fff;
  border: 1px solid #00ad5f;
  background-color: #00ad5f;
}
</style>

