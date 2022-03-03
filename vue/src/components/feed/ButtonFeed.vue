<template lang="pug">
  .feed_button-create
    button.feed_button-create-post(type='button', name='foo', value='upvote', @click="$emit('click')") Создать пост
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/pages/feed/button.scss";
.feed_button-create{
  height: 10px;
}
</style>