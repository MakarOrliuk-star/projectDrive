<template>
  <div class="create-new-post">
    <h3>Contact me</h3>
    <div class="create-new-post_group-name">
      <button @click="closeModule" type="submit" class="create-new-post create-new-post_button create-new-post_primary-color">
        Close
      </button>
    </div>
  </div>

</template>

<script>

export default {
 methods:{
   closeModule(){
     this.$emit('close');
   }
 }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/pages/profile/popup.scss";

</style>

