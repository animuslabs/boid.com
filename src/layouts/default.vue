<template lang="pug">
  q-layout(view="lHh Lpr lFf" ref="pageLayout")
    q-layout-header(reveal)
      q-toolbar(color="white" text-color="black")
        q-toolbar-title.q-ma-sm
          | boid
        q-btn(color="green" outline @click="openURL('https://app.boid.com')") Login
    q-page-container
      router-view(style="height: 100vh")
    q-modal(ref="videoModal" @show="videoModalOpen = true" @hide="videoModalOpen = false")
      .q-video.bg-black.videocontainer(v-if="videoModalOpen")
        iframe(width="100%" height="100%" src="https://www.youtube.com/embed/3-C5dxJvFMA?rel=0&amp;autoplay=1;fs=1;autohide=1;hd=1;modestbranding=1;" frameborder="0" allowfullscreen)
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'LayoutDefault',
  data() {
    return {
      videoModalOpen:false,
      screenSize:{
        height: window.innerHeight,
        width: window.innerWidth
      }
    }
  },
  methods: {
    openURL,
    logout(){
    }
  },
  mounted(){
    this.$refs.pageLayout.$on('resize',(data)=>{
      this.screenSize = data
      this.$root.$emit('resize',data)
    })
    this.$root.$on('videoModal',(data)=>{
      if (data && this.screenSize.width < 770) this.openURL('https://www.youtube.com/watch?v=3-C5dxJvFMA')
      else if(data && this.$q.platform.is.mobile) this.openURL('https://www.youtube.com/watch?v=3-C5dxJvFMA')
      else if (data) this.$refs.videoModal.show()
      else this.$refs.videoModal.hide()
    })
    
  },
  watch:{
    videoModalOpen(data){
      if (data) this.$root.$emit('videoPlaying',true)
      else this.$root.$emit('videoPlaying',false)
    }
  },
  props:[]
}
</script>

<style lang="stylus">
.q-toolbar-title
  font-family 'Comfortaa' !important
  font-size 35px
  color #089cfc
.videocontainer
  width:70vw 
  height:70vh
  @media screen and (max-width: $breakpoint-md) 
    width: 100vw
    height: 100vh
</style>
