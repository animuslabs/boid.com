<template lang="pug">
  q-page
    .relative-position()
      .full-width.bg-white.q-pa-lg
        h5 Boid Season 0 is now live
        h6 BOID Staking is now enabled 
        h6 Staking is only available during season breaks
        br
        q-btn(color="green" @click="openURL('https://app.boid.com/staking')") Stake BOIDs
      heading(:buttonSize="buttonSize")
      intro(ref="intro")
      .relative-position.justify-center(ref="video")
        svg.transitioncurve.absolute-top(id="curveDownColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%"  style="fill: white;" viewBox="0 0 100 100" preserveAspectRatio="none")
          path(d="M0 0 C 50 100 80 100 100 0 Z")
        .absolute-bottom.full-width.videobuttonoffset(@click="videoPlaying=true,$root.$emit('videoModal',true)" @mouseout ="highlightVideo = false" @mouseover="highlightVideo = true").cursor-pointer
          .row.justify-center
            .col-12
              .row.justify-center
                q-btn( round :size="buttonSize3" color="white" @click="videoPlaying=true,$root.$emit('videoModal',true)").bg-green-5
                  q-icon(name="play_arrow")
            h5.text-white.q-pt-sm.cursor-pointer Explainer Video
    div( style="padding-bottom: 57.25%; padding-top:0px; margin-top:0px; height:100px; z-index:-2; overflow: hidden" @mouseout ="highlightVideo = false" @mouseover="highlightVideo = true").relative-position.cursor-pointer
      .videocover(@click="videoPlaying=true,$root.$emit('videoModal',true)" v-bind:class="{highlightVideo:highlightVideo}")
      iframe.gt-sm(v-if="!videoPlaying" allow="autoplay; fullscreen" src="https://www.youtube.com/embed/3-C5dxJvFMA?rel=0&amp;autoplay=1;fs=0;autohide=1;hd=0;mute=1;controls=0;showinfo=0;modestbranding=1;loop=1;playlist=3-C5dxJvFMA" frameborder="0").videoadjust
      .lt-md.videoplaceholder.bg-blue-7
        img(src="~assets/videoplaceholder.jpg" style="width: 100%;")
    .relative-position.adjustvideofooter
      .relative-position
        svg.transitioncurve.pointer-none(xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" style="position:absolute; pointer-events: none; padding-top:0; margin-top:0;fill: rgb(0, 112, 208); bottom:0px;" viewBox="0 0 100 100" preserveAspectRatio="none")
          path(d="M0 100 C 60 10 90 50 100 100 Z")
      div(ref="teams" style="background-color: rgb(0, 112, 208); border-bottom-left-radius: 60% 5%; border-bottom-right-radius: 50% 5%;")
        .row.justify-center.gutter-sm(style="margin-top:100px; margin-bottom:10px; padding-bottom: 80px;")
          .col-xl-4.col-lg-5.col-md-auto.col-sm-10
            .row.justify-center
              .col-xs-10
                h3.text-white(style="") Fight the good fight
                h4(style="margin-bottom:0px; text-shadow: 0px 2px 4px grey-1;").text-green-4 Our communities have real impact
            .row.justify-center
              .col-lg-4.col-md-10.col-sm-8.col-xs-10.lt-lg.teamExplainer
                .relative-position(style="" )
                  .relative-position(style="height:350px;")
                    q-carousel.carouselfix2(ref="teamSlides" infinite no-swipe :autoplay="4000" style="position:absolute; top:-30px; margin:0px !important;")
                      q-carousel-slide
                        img.teamicon(src="~assets/commoncause.svg")
                      q-carousel-slide
                        img.teamicon(src="~assets/boidteams.svg")
                      q-carousel-slide
                        img.teamicon(src="~assets/winprizes.svg")
                      q-carousel-slide
                        img.teamicon(src="~assets/teamleader.svg")
                  div(style="height:280px;")
                    ul(style="max-width:340px; bottom:0px;").absolute-bottom
                      transition-group(appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut")
                        li(key="0" v-bind:class="{activelist:teamActiveItem === 0}").q-pa-sm
                          h6 Team leaders rally users around important causes.
                        li(key="1" v-bind:class="{activelist:teamActiveItem === 1}").q-pa-sm
                          h6 Users contribute their computing resources on global leaderboards.
                        li(key="2" v-bind:class="{activelist:teamActiveItem === 2}").q-pa-sm
                          h6 Users can win money and prizes for their contributions.
                        li(key="3" v-bind:class="{activelist:teamActiveItem === 3}").q-pa-sm
                          h6 Team leaders can keep or donate commissions earned from their team performance.
            ul.gt-md(style="max-width:500px;")
              transition-group(appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut")
                li(key="0" v-bind:class="{activelist:teamActiveItem === 0}").q-pa-sm
                  h6 Team leaders rally users around important causes.
                li(key="1" v-bind:class="{activelist:teamActiveItem === 1}").q-pa-sm
                  h6 Users contribute their computing resources on global leaderboards.
                li(key="2" v-bind:class="{activelist:teamActiveItem === 2}").q-pa-sm
                  h6 Users can win money and prizes for their contributions.
                li(key="3" v-bind:class="{activelist:teamActiveItem === 3}").q-pa-sm
                  h6 Team leaders can keep or donate commissions earned from their team performance.
          .col-xl-4.col-lg-5.col-md-12.gt-md
            q-carousel.carouselfix(ref="teamSlides" infinite :autoplay="4000")
              q-carousel-slide
                img.teamicon(src="~assets/commoncause.svg")
              q-carousel-slide
                img.teamicon(src="~assets/boidteams.svg")
              q-carousel-slide
                img.teamicon(src="~assets/winprizes.svg")
              q-carousel-slide
                img.teamicon(src="~assets/teamleader.svg")

      .explainer.relative-position.layout-padding(ref="science" style="margin-top:0px;")
        .row.reverse.justify-center.relative-position
          .col-sm-10.col-md-12.col-lg-12.col-xl-4
            div.headingfix
              h3 Help researchers solve hard problems
          .col-md-12.col-lg-7.col-xl-5.relative-position(style="height:400px; margin-top:50px;")
            .row.justify-center
              .row.justify-center.bg-white.shadow-2.sciwidget
                .col-md-12.relative-position(style="height: 0px;")
                  q-btn-toggle.absolute-center(@input="clearSciInterval" :size="buttonSize2" rounded color="white" text-color="grey-8" v-model="activeScienceBtn" toggle-color="amber-8" :options="scienceBtns")
                .col-12(style="height:15px;")
                .col-sm-12.col-md-5.col-lg-4.col-xl-3.relative-position(style="height:310px;")
                  img(v-if="refresh" :src="scienceInfo.img").scienceIcons.absolute-center.animate-fade
                .col-xs-10.col-sm-12.col-md-6.col-lg-6.col-xl-8
                  div
                    .scienceCard.animate-fade(v-if="refresh")
                      h4.scienceHeader.text-grey-8(key="headertxt") {{scienceInfo.headerText}}
                      h6.bpinfoText(key="infotxt") {{scienceInfo.paragraphText}}
                q-btn.full-width(v-if="hideSciExplain" color="blue" size="lg" @click="hideSciExplain = false") Learn How
        .gt-md(style="height:200px;" v-bind:class="{hidden:!hideSciExplain}")
        .gt-xs.lt-lg(style="height:200px;" v-bind:class="{hidden:!hideSciExplain}")
        .lt-sm(style="height:160px;" v-bind:class="{hidden:!hideSciExplain}")
        div(v-bind:class="{hidden:hideSciExplain}")
          // .lt-md(style="height: 1780px;")
          .lt-md(style="height:200px;")
          .row
            .col-lg-12(style="height: 150px;")
              .absolute
                h3 This is how it works
          .gt-sm(style="height:80px;")
          .row.justify-center.gutter-lg.xl-padding(style="margin-top:200px;")
            .col-lg-5.col-md-12.col-xl-6.sciexplainspacer
              .row.justify-center.relative-position
                img.sciExplain.absolute-center(src="~assets/sciexplain/problem.svg")
              .explaincard.bg-white.shadow-3
                table.full-width
                  tr
                    th
                      h5 1
                    th 
                      h6.poverride Researchers need computing power to solve complex problems. 
            .col-1.gt-md.lt-xl
            .col-lg-5.col-md-12.col-xl-6.sciexplainspacer
              .row.justify-center.relative-position
                img.sciExplain.absolute-center(src="~assets/sciexplain/solution.svg")
              .explaincard.bg-white.shadow-3
                table.full-width
                  tr
                    th
                      h5 2
                    th 
                      h6.poverride Complex problems are broken into small tasks that can run on any computer.
            .col-12.gt-md(style="height:150px;")
            .col-lg-5.col-md-12.col-xl-6.sciexplainspacer
              .row.justify-center.relative-position
                img.sciExplain.absolute-center(src="~assets/sciexplain/distribute.svg")
              .explaincard.bg-white.shadow-3
                table.full-width
                  tr
                    th
                      h5 3
                    th 
                      h6.poverride Small tasks are distributed to computers and phones globally.  
            .col-1.gt-md.lt-xl
            .col-lg-5.col-md-12.col-xl-6.sciexplainspacer
              .row.justify-center.relative-position
                img.sciExplain.absolute-center(src="~assets/sciexplain/process.svg")
              .explaincard.bg-white.shadow-3
                table.full-width
                  tr
                    th
                      h5 4
                    th 
                      h6.poverride Tasks are processed, and the result of each computation is returned.   
            .col-12.gt-md(style="height:200px;")
            .col-lg-5.col-md-12.col-xl-6.sciexplainspacer
              .row.justify-center.relative-position
                img.sciExplain.absolute-center(src="~assets/sciexplain/assemble.svg")
              .explaincard.bg-white.shadow-3
                table.full-width
                  tr
                    th
                      h5 5
                    th 
                      h6.poverride Individual results are verified and assembled together into one big solution.
            .col-1.gt-md.lt-xl
            .col-lg-5.col-md-12.col-xl-6.sciexplainspacer
              .row.justify-center.relative-position
                img.sciExplain.absolute-center(src="~assets/sciexplain/generate.svg")
              .explaincard.bg-white.shadow-3
                table.full-width
                  tr
                    th
                      h5 6
                    th 
                      h6.poverride Users generate ⚡Boid Power in exchange for their contributions.
        .lt-md(style="height:200px" v-if="hideSciExplain")
      boidApp(ref="app")
      boidPower(ref="power")
      boidToken(ref="token")
      roadMap(ref="timeline")
      team(ref="team")
      faq(ref="faq")
      bFooter
</template>

<style lang="stylus">
@import '~variables'

ul
  @media screen and (max-width: $breakpoint-xs) 
    padding-left: 10px
    padding-right: 10px

.transitioncurve
  height: 130px
  @media screen and (max-width: $breakpoint-md) 
    height 70px
  @media screen and (max-width: $breakpoint-sm) 
    height 60px
  @media screen and (max-width: $breakpoint-xs) 
    height 50px
.sciexplainspacer
  height 700px
  @media screen and (max-width: $breakpoint-md) 
    height 750px
  @media screen and (max-width: $breakpoint-sm) 
    height 660px
  @media screen and (max-width: $breakpoint-xs) 
    height 500px


.q-btn
  font-weight 800
button
  font-family: 'boidFont'
  font-weight 1000

.videoplaceholder
  background: url('~assets/header2.png')
  height 600px


.videobuttonoffset
  z-index:999 
  top:10px
  @media screen and (max-width: $breakpoint-lg) 
    top: 0px
  @media screen and (max-width: $breakpoint-md) 
    top: -30px
  @media screen and (max-width: $breakpoint-sm) 
    top: -20px
  @media screen and (max-width: $breakpoint-xs) 
    top: -20px
.adjustvideofooter
  top: -600px
  @media screen and (min-width 1200px) and (max-width 1560px)
    top: -330px
  @media screen and (max-width: $breakpoint-lg) 
    top: -300px
  @media screen and (max-width: $breakpoint-md) 
    top: -250px
  @media screen and (max-width: $breakpoint-sm) 
    top: -180px
  @media screen and (max-width: $breakpoint-xs) 
    top: -100px
.adjustvideoheader

.videoadjust
  width:100%; 
  height:100%; 
  position:absolute; 
  top:-300px; 
  left:0;
  @media screen and (min-width 1200px) and (max-width 1560px)
    top: -80px
  @media screen and (max-width: $breakpoint-lg) 
    top: -100px
  @media screen and (max-width: $breakpoint-md) 
    top: -100px
  @media screen and (max-width: $breakpoint-sm) 
    top: -50px
  @media screen and (max-width: $breakpoint-xs) 
    top: 0px


.videocover
  background-image: linear-gradient(to left top, #00e8ff, alpha(#00c8f7,.9), alpha(#00a7ea,.7), #0086d7, #0064bd);
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 100;
  opacity: .5;
  cursor: pointer
// .videocover:hover
//   opacity: .8
//   cursor: pointer;
//   background-color black
.highlightVideo
  opacity: .8
  cursor: pointer;
  background-color black
  // height: 0px
.sciwidget
  width: 600px


.carouselfix
  width:600px
  @media screen and (max-width: $breakpoint-lg) 
    width 500px
.carouselfix2
  width:400px
  @media screen and (max-width: $breakpoint-sm) 
    width 340px
.appsection
  background-color $green-5
.bpmasterrow
  height:490px;
  @media screen and (max-width: $breakpoint-md) 
    height 380px
  @media screen and (max-width: $breakpoint-sm) 
    height 640px


.teamExplainer
  height: 100%
  padding-bottom: 40px
 
.bpinfoText
  padding-left 35px
  

.bpspacer
  height:0px;
  

.bpHeading
  margin-bottom: 10px
  font-weight: 500
  font-size 35px
  color $grey-8
  font-family: 'boidFont';

.bpinfocard2
  height:290px
  width:850px
  background-color:white
  z-index 1
  left:80px
  top:275px
  position:absolute
  border-radius 30px
  padding 30px
  padding-right:455px
  box-shadow 0px 1px 4px rgb(0,0,0,0.2)
  @media screen and (max-width: $breakpoint-md) 
    top:190px
    height:230px
    width:100vw
  @media screen and (max-width: $breakpoint-sm) 
    left:0px
    top:-60px
    width:100%
    height:auto
    padding 35px
    padding-top 55px
    border-radius 0px


.bpinfocard
  height:290px
  width:850px
  background-color:white
  z-index 1
  left:-455px
  top:275px
  position:absolute
  border-radius 30px
  padding 30px
  padding-left:455px
  box-shadow 0px 1px 4px rgb(0,0,0,0.2)
  @media screen and (max-width: $breakpoint-md) 
    top:190px
    height:270px
  @media screen and (max-width: $breakpoint-sm) 
    left:0px
    top:-60px
    width:100%
    height:auto
    padding 35px
    padding-top 55px
    border-radius 0px


.bpicons
  width: 650px
  height: 650px
  padding:0px
  // background-color: white
  // border-radius: 100%;
  z-index 4
  position relative
  // filter drop-shadow( 0px 0px 4px black)
  @media screen and (max-width: $breakpoint-md)
    width: 480px
    height: 480px
  @media screen and (max-width: $breakpoint-xs)
    width: 380px
    height: 380px


.md-padding
  @media screen and (max-width: $breakpoint-lg) 
    padding-right: 20px
    padding-left: 20px

.xl-padding
  @media screen and (min-width: $breakpoint-lg) 
    padding-right: 100px
    padding-left: 100px
  @media screen and (min-width 1200px) and (max-width 1800px)
    padding-right: 0px
    padding-left: 0px
.heading 
  background: linear-gradient(to right, rgba(30, 87, 153, 0.7) 0%, rgba(79, 138, 194, 0.65) 52%, rgba(125, 185, 232, 0.7) 100%), url('~assets/header2.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  // background-attachment: fixed;
  width: 100%;
  height: 100%;
  min-height: 700px;
  @media screen and (max-width: $breakpoint-xl) 
    min-height: 690px
  @media screen and (max-width: $breakpoint-lg) 
    min-height: 690px
  @media screen and (max-width: $breakpoint-md) 
    min-height: 490p
  @media screen and (max-width: $breakpoint-sm) 
    min-height: 490px

.headingtextoffset
  margin-top 130px
  @media screen and (max-width: $breakpoint-md) 
    margin-top: 30px

.headingsvgheight
  height: 150px
  @media screen and (max-width: $breakpoint-md) 
    height 100px
  @media screen and (max-width: $breakpoint-sm) 
    height 80px

.headingfix
  @media screen and (min-width 1200px) and (max-width 1800px)
    padding-left:200px

.boidPowerHeader 
  color: $yellow-2
.boidPowerLogo
  // filter: drop-shadow( 1px 1px 30px alpha($yellow-9,1))
  width: 100px
  margin 0 auto
  animation powerflicker 1s linear infinite
  @media screen and (min-width 1200px) and (max-width 1800px)
    margin-left:100px
  @media screen and (max-width: $breakpoint-xs)
    width 70px
    margin-left 25px

@keyframes powerflicker
  0% 
    filter: drop-shadow( 1px 1px 30px alpha($yellow-11,1))
  2% 
    filter: drop-shadow( 1px 1px 20px alpha($yellow-9,.1))
  4% 
    filter: drop-shadow( 1px 1px 20px alpha($yellow-9,.5))
  8%
    filter: drop-shadow( 1px 1px 10px alpha($yellow-11,1))
  70%
    filter: drop-shadow( 1px 1px 50px alpha($yellow-9,.1))
  100%
    filter: drop-shadow( 1px 1px 30px alpha($yellow-11,1))

.poverride {
  padding-left: 10px;
  font-weight 400
}

th {
  font-weight: normal;
  text-align: left;
}

.verticalSpacer2 {
  height: 250px;
}

.sciExplain 
  padding: 10px;
  width: 700px;
  // background-color: $blue-9;
  // border-radius: 100%;
  z-index: 3;
  @media screen and (min-width 1200px) and (max-width 1800px)
    width: 580px;
    margin-top: 40px;
  @media screen and (max-width $breakpoint-lg) 
    width: 620px;
  @media screen and (max-width $breakpoint-sm) 
    width: 550px;
  @media screen and (max-width $breakpoint-xs) 
    width: 350px;
  


.explaincard {
  border-radius: 30px;
  z-index: 1;
  margin-top: 295px;
  padding: 30px;
  padding-top: 50px;
  position: relative;
  @media screen and (max-width: $breakpoint-lg) {
    margin-top: 260px;
  }
  @media screen and (max-width: $breakpoint-sm) {
    margin-top: 270px;
  }
  @media screen and (max-width: $breakpoint-xs) {
    margin-top: 110px;
  }


}

.explainer 
  // background-image: url('~assets/hexbg.png');
  background-scale: 200%;

.scienceHeader {
  margin-bottom: 10px;
}

.scienceIcons 
  width: 230px;
  margin: 0 auto;
  display: block;
  padding-left: 20px;
  @media screen and (max-width: $breakpoint-xl) 
    width: 50px;
  @media screen and (max-width: $breakpoint-sm) 
    width: 270px;


.scienceCard 
  border-radius: 30px;
  z-index: 1;
  margin: 20px;
  padding: 20px;
  height: 200px;
  padding-right 10px
  width: 100%


.wave {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
}

.wave + .wave {
  z-index: 2;
}

.yellowheading {
  color: $green-5;
}

li {
  color: $grey-1;
  font-size: 24px;
  padding: 10px;
}

.activelist {
  background-color: $green-5;
  color: $grey-1;
  border-radius: 10px;
  box-shadow: 2 2 10 4 black;
}

.verticalSpacer {
  height:490px
}

.heroicon 
  // background-color #089cfc
  // border-radius 100%
  padding: 20px;
  width: 290px;
  filter: drop-shadow( 0px 2px 1px grey)
  @media screen and (max-width $breakpoint-lg) 
    width: 270px
  @media screen and (max-width $breakpoint-md) 
    width: 290px




.teamicon {
  max-width: 600px;
  display: block;
  margin: 0 auto;
}

.herocard {
  border-radius: 30px;
  z-index: 1;
  margin-top: 110px;
  margin-left:15px;
  margin-right:15px;
  padding-top: 30px;
  padding: 20px;
}

.transition {
  width: 100%;
  height: 500px;
}

h1
  font-family 'boidFont'
  margin-top: 0px
  margin-bottom 0px
  @media screen and (max-width: $breakpoint-lg) 
    font-size 112px
  @media screen and (max-width: $breakpoint-sm) 
    font-size 80px

h2 
  color: white
  font-family: 'boidFont'
  @media screen and (max-width: $breakpoint-sm) 
    font-size 45px


h3 
  color: #089cfc;
  font-family: 'boidFont';
  text-transform: uppercase;
  margin-bottom: 0px;
  @media screen and (max-width: $breakpoint-sm) 
    font-size 35px

p {
  font-size: 18px;
  margin-bottom: 0px;
}

h4 
  color $green-5
  margin-top 0px
  font-family: 'boidFont'
  font-weight 800
  @media screen and (max-width: $breakpoint-lg) 
    font-size 34px
  @media screen and (max-width: $breakpoint-sm) 
    font-size 25px
  @media screen and (max-width: $breakpoint-xs) 
    font-size 18px

h5 {
  color: $grey-9;
  font-size: 35px;
  margin-top: 25px;
  margin-bottom: 20px;
  font-family: 'boidFont'

}
h6 
  margin: 0px
  font-weight:400
  @media screen and (max-width: $breakpoint-md) 
    font-size 20px
  @media screen and (max-width: $breakpoint-sm) 
    font-size 16px





</style>

<script>
import boidToken from 'components/boidtoken.vue'
import roadMap from 'components/roadmap.vue'
import boidPower from 'components/boidPower.vue'
import boidApp from 'components/boidApp.vue'
import faq from 'components/faq.vue'
import bFooter from 'components/footer.vue'
import team from 'components/team.vue'
import intro from 'components/intro.vue'
import heading from 'components/header.vue'
import { openURL } from 'quasar'


export default {
  data() {
    return {
      refresh:true,
      highlightVideo:false,
      videoPlaying:false,
      hideSciExplain:true,
      scrolling:false,
      screenSize:{
        height: window.innerHeight,
        width: window.innerWidth
      },
      teamActiveItem: 0,
      activeScienceBtn: 0,
      sciInterval: "",
      scienceBtns: [
        { label: "Medicine", value: 0 },
        { label: "Climatology", value: 1 },
        { label: "Astronomy", value: 2 },
        { label: "Machine Learning", value: 3 }
      ]
    };
  },
  components:{
    roadMap,
    boidPower,
    boidApp,
    faq,
    bFooter,
    boidToken,
    team,
    intro,
    heading
  },
  mounted() {
    // this.$q.loading.show()
    if(this.$route.hash){
      this.scrollTo()
    }
    this.$root.$on('videoPlaying',(data)=>{
      this.videoPlaying = data
    })
    if(this.$q.platform.is.mobile){
      this.highlightVideo = true
    }
    // setInterval(()=>{
    //   console.log(window.scrollY)
    // },1000)
    this.$root.$on('resize',(data)=>{
      this.screenSize = data
    })
    this.sciInterval = setInterval(() => {
      if (this.activeScienceBtn > 2) {
        this.activeScienceBtn = 0;
      } else this.activeScienceBtn++;
    }, 5000);
    this.$refs.teamSlides.$on("slide", i => {
      this.teamActiveItem = i;
    });
  },
  computed: {
    buttonSize(){
      if (this.screenSize.width > 769) return '30px'
      else return 'lg'
    },
    buttonSize2(){
      if (this.screenSize.width > 769) return 'lg'
      else if (this.screenSize.width > 570) return 'lg'
      else if (this.screenSize.width > 450) return 'md'
      else return 'sm'
    },
    buttonSize3(){
      if (this.screenSize.width > 869) return '55px'
      else if (this.screenSize.width > 670) return '45px'
      else if (this.screenSize.width > 570) return '40px'
      else if (this.screenSize.width > 450) return '35px'
      else return '30px'
    },
    scienceInfo() {
      if (this.activeScienceBtn === 0) {
        return {
          headerText: "Save Lives",
          paragraphText:
            "Your computer can help scientists simulate and isolate more effective treatments for cancer, Alzheimers, and many other diseases.",
          img: require("assets/scicons/chemistry.svg")
        };
      } else if (this.activeScienceBtn === 1) {
        return {
          headerText: "Weather Prediction",
          paragraphText:
            "Help run simulations that predict the effects of climate change on our planet.",
          img: require("assets/scicons/earth.svg")
        };
      } else if (this.activeScienceBtn === 2) {
        return {
          headerText: "Star Stuff",
          paragraphText:
            "Simulate the movement of celestial bodies and help researchers study the most fundamental aspects of how the universe works.",
          img: require("assets/scicons/planetary.svg")
        };
      } else if (this.activeScienceBtn === 3) {
        return {
          headerText: "Neural Networks",
          paragraphText:
            "Help train neural networks to power the next generation of artificial intelligence.",
          img: require("assets/scicons/brain.svg")
        };
      } else if (this.activeScienceBtn === 4) {
        return {
          headerText: "Save Lives",
          paragraphText:
            "Your computer can help scientists simulate and isolate more effictive treatments for cancer, alzheimers, and many other diseases.",
          img: require("assets/scicons/earth.svg")
        };
      }
    }
  },
  methods: {
    clearSciInterval() {
      clearInterval(this.sciInterval)
    },
    openURL,
    scrollTo(){
      this.$nextTick(() =>{
        this.scrolling = true
        var result = this.$refs[this.$route.hash.replace('#','')]
        console.log(result)
        if (result) {
          if (result.$el){
            result = result.$el
          }
          console.log(result)
          this.$nextTick(()=>{
            setTimeout(()=>{

              this.$scrollTo(result, 0)
              this.scrolling=false
            },100)
          })
        }
      })
    }
  },
  watch:{
    activeScienceBtn(){
      this.refresh = false
      setTimeout(()=>{
        this.refresh = true
      },100)
    },
    '$route.hash'(){
      this.scrollTo()
    },
    scrolling(val){
      if (val){
        // this.$q.loading.show({
        //   delay: 0 // ms
        // })
      }else{
        // this.$q.loading.hide()
      }
 
    }
  }
};
</script>
