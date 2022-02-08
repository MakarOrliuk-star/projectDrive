<template lang="pug">
  .card.text-center
    .card-header Bootstrap 4 card example
    .card-body
      .card-title Hello World, this is PugHtml
      i.fa.fa-home.fa-2x.text-primary
    .card-footer.text-muted powered by Bibooki
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

