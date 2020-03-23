<template lang="pug">
  q-layout(view="lHh Lpr lFf" ref="pageLayout")
    q-layout-header(reveal)
      q-toolbar.relative-position(color="white" text-color="black")
        q-toolbar-title(shrink style="width:110px;").q-ma-sm
          | boid
        .row.justify-end(style="overflow:auto;").full-width
          div.gt-md
            q-btn(flat color="grey-8" @click="quickScroll('video')") video
            q-btn(flat color="grey-8" @click="quickScroll('science')") science
            q-btn(flat color="grey-8" @click="quickScroll('power')") power
            q-btn(flat color="grey-8" @click="quickScroll('token')") token
            q-btn(flat color="grey-8" @click="quickScroll('timeline')") timeline
            q-btn(flat color="grey-8" @click="quickScroll('team')") team
            q-btn(flat color="grey-8" @click="quickScroll('faq')") FAQ
            q-btn(color="blue-8" @click="openURL('https://www.boid.com/statics/Boid-WhitePaper-v2.pdf')").on-left Whitepaper
              q-icon(name="get_app").on-right
          q-btn(color="green" outline @click="openURL('https://app.boid.com')").on-left Go To App
          q-btn(color="blue" outline @click="openURL('https://github.com/boid-com/BoidDesktop/releases')") Download
          q-btn(flat color="grey-8").lt-lg
            q-icon(name="menu")
            q-popover(v-model="NavMenu")
              q-list
                q-item(link @click.native="quickScroll('video')") Video
                q-item(link @click.native="quickScroll('teams')") Teams
                q-item(link @click.native="quickScroll('science')") Science
                q-item(link @click.native="quickScroll('power')") Power
                q-item(link @click.native="quickScroll('token')") Token
                q-item(link @click.native="quickScroll('timeline')") Timeline
                q-item(link @click.native="quickScroll('team')") Team
                q-item(link @click.native="quickScroll('faq')") FAQ


            

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
      NavMenu:false,
      videoModalOpen:false,
      screenSize:{
        height: window.innerHeight,
        width: window.innerWidth
      }
    }
  },
  methods: {
    quickScroll(name){
      this.$router.replace('/')
      setTimeout(()=>this.$router.replace(`/#${name}`),100)
    },
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
