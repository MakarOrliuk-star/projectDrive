<template lang="pug">
div.profile_position
  .profile-card_header
    .profile-card_pic
      img(
        :src="previewInfo.image"
        alt=''
      )
    .profile-card_name {{previewInfo.name}} {{previewInfo.lastname}}
    .profile-card_desc Web Developer
    .profile-card_links
      a.profile-card_icon(href='https://www.facebook.com/')
        img.profile-card_icon.profile-card_fab-icon__border(
          src='../../../assets/img/card/facebook.png'
          alt=''
        )
      a.profile-card_icon(href='https://github.com/')
        img.profile-card_icon.profile-card_fab-icon__border(
          src='../../../assets/img/card/git.png'
          alt=''
        )
      a.profile-card_icon(href='https://www.instagram.com/')
        img.profile-card_icon.profile-card_fab-icon__border(
          src='../../../assets/img/card/inst.png'
          alt=''
        )
      a.profile-card_icon(href='https://web.telegram.org/')
        img.profile-card_icon.profile-card_fab-icon__border(
          src='../../../assets/img/card/tg.png'
          alt=''
        )
</template>

<script>
export default {
  props:{
    previewInfo: {
      type: Object,
      default: () => {}
    }
  },
}
</script>


<style lang="scss" scoped>
@import "src/assets/scss/pages/profile/profile.scss";
.profile-card_header{
  position: relative;
  width: 315px;
  min-height: 355px;
  padding: 20px;
  left: 1000px;
}
.profile_position{
  position: absolute;
  top: 100px;
  margin-left: 70px;
}

</style>