<template lang="pug">
  .profile-edit_area
    button.profile-edit_edit-save(@click="$emit('click')") Предпросмотр
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/pages/profile/buttons.scss";
.profile-edit_area{
  width: 400px;
  box-sizing: border-box;
  margin-top: -24px;
}

.profile-edit_edit-save{
  position: relative;
  left: 650px;
}
</style>