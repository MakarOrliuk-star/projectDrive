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
  position: relative;
}

.profile-edit_edit-save{
  position: relative;
  left: 650px;
  top: 813px;
}
</style>