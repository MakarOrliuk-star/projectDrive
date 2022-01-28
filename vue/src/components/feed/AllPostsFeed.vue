<template lang="pug">
    .feed_button-create
      button.feed_button-create-post(type='button', name='foo', value='upvote', @click="$emit('click')") Create post
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/pages/feed/button.scss";

</style>