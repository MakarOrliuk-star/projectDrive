<template lang="pug">
  .profile-edit
    Edit(
      :user="getUser"
      @profileInfo="getPreviewInfo"
    )
    ButtonProfile(@click="toggleInfoWindow")
    Preview(
      v-if="showInfoWindow"
      :previewInfo="previewInfos"
    )
</template>

<script>
import Edit from "@/components/profile/edit/Edit";
import Preview from "@/components/profile/edit/Preview";
import ButtonProfile from "@/components/profile/button/ButtonProfile";
import UserApi from "@/api/User";
import {mapGetters} from "vuex";

export default {

  computed:{
    ...mapGetters(['getUser']),
  },

  components:{
    Edit,
    Preview,
    ButtonProfile
  },

  data(){
    return {
      showInfoWindow: false,
      previewInfos: null,
    }
  },

  methods:{
    toggleInfoWindow(){
      this.showInfoWindow = !this.showInfoWindow;
    },

    getPreviewInfo(infoProfiles){
      this.previewInfos = infoProfiles;
      let info = {
        previewInfos: this.previewInfos,
        id: this.getUser.id,
      }
      UserApi.update(info.id,info.previewInfos)
      .then(resp => {
        console.log(resp)
      })
      .catch(error => {
        console.log(error)
      })
    },
  },
}
</script>

<style lang="scss" scoped>

</style>