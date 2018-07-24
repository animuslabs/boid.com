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
      div
        .q-video.bg-black.videocontainer(v-if="videoModalOpen")
          iframe(width="100%" height="90%" src="https://www.youtube.com/embed/3-C5dxJvFMA?rel=0&amp;autoplay=1;fs=1;autohide=1;hd=1;modestbranding=1;" frameborder="0" allowfullscreen allow="autoplay")
      .absolute-bottom.row.justify-center.block(style="height:300px;")
        // q-btn(color="blue" size="20px") Return to site
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
  font-family 'boidFont' !important
  font-size 35px
  color #089cfc
.videocontainer
  width:80vw 
  height:80vh
  @media screen and (max-width: $breakpoint-lg) 
    width: 100vw
    height: 70vh

</style>
