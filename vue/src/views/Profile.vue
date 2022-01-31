<template lang="pug">
  .profile-card
    PopupProfile(v-if="isShow" @close="togglePopup")
    .profile-card_header
      .profile-card_pic
        img(src='../assets/img/card/main1.jpeg' alt='')
      .profile-card_name Makar Orliuk
      .profile-card_desc Web Developer
      .profile-card_links
        a.profile-card_icon(href='https://www.facebook.com/')
          img.profile-card_icon.profile-card_fab-icon__border(
            src='../assets/img/card/facebook.png'
            alt=''
          )
        a.profile-card_icon(href='https://github.com/')
          img.profile-card_icon.profile-card_fab-icon__border(src='../assets/img/card/git.png' alt='')
        a.profile-card_icon(href='https://www.instagram.com/')
          img.profile-card_icon.profile-card_fab-icon__border(src='../assets/img/card/inst.png' alt='')
        a.profile-card_icon(href='https://web.telegram.org/')
          img.profile-card_icon.profile-card_fab-icon__border(src='../assets/img/card/tg.png' alt='')
      button(@click="togglePopup") Contact me
    .profile-card_footer
      .profile-card_numbers-block
        .profile-card_item
          span 10K
          |  Posts
        .profile-card_numbers-block.profile-card_numbers-block__item-center
        .profile-card_item
          span 107
          |  Subscriptions
        .profile-card_numbers-block.profile-card_numbers-block__item-center
        .profile-card_item
          span 10K
          |  Subscribers
</template>

<script>
import PopupProfile from "@/components/profile/contact/PopupProfile";

export default {
  data(){
    return{
      isShow: false
    }
  },
  components:{
    PopupProfile
  },
  methods:{
    togglePopup: function() {
      this.isShow = !this.isShow;
    },
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/pages/profile/profile.scss";

</style>