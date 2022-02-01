<template lang="pug">
  .profile-edit
    Edit(
    @profileInfo="getPreviewInfo"
    )
    ButtonProfile(@click="toggleInfoWindow")
    Preview(
      v-if="showInfoWindow"
      :previewInfo="previewInfo"
    )
</template>

<script>

import Edit from "@/components/profile/edit/Edit";
import Preview from "@/components/profile/edit/Preview";
import ButtonProfile from "@/components/profile/button/ButtonProfile";

export default {
  components:{
    Edit,
    Preview,
    ButtonProfile
  },
  data(){
    return {
      showInfoWindow: false,
      previewInfo: null
    }
  },
  methods:{
    toggleInfoWindow(){
      this.showInfoWindow = !this.showInfoWindow;
    },
    getPreviewInfo(infoProfiles){
      this.previewInfo = infoProfiles;
      this.toggleInfoWindow();
    }
  },
}
</script>

<style lang="scss" scoped>

</style>