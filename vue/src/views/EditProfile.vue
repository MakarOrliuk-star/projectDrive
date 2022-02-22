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
import UserApi from "@/api/User";

export default {
  components:{
    Edit,
    Preview,
    ButtonProfile
  },

  data(){
    return {
      showInfoWindow: false,
      previewInfo: null,
    }
  },

  methods:{

    toggleInfoWindow(){
      this.showInfoWindow = !this.showInfoWindow;
    },

    getPreviewInfo(infoProfiles){
      this.previewInfo = infoProfiles;
      let info = {
        previewInfo: this.previewInfo,
      }
      console.log(info)
      UserApi.update(info)
      .then(resp => {
        console.log(resp)
      })
      .catch(error => {
        console.log(error)
      })

    }
  },
}
</script>

<style lang="scss" scoped>

</style>