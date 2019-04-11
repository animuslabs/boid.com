<template lang="pug">
  q-page
    faq
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

import faq from 'components/faq.vue'
import bFooter from 'components/footer.vue'
import heading from 'components/header.vue'
import { openURL } from 'quasar'

export default {
  data() {
    return {}
  },
  components:{
    faq,
    bFooter,
    team,
    intro,
    heading
  },
  mounted() {
  
  },
  computed: {
  },
  methods: {
  },
  watch:{
  }
}
</script>
