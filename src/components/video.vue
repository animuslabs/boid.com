<template lang="pug">
 div
  div
    div(style="height: 120px;" )
    .relative-position.justify-center
      svg.transitioncurve.absolute-top(id="curveDownColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%"  style="fill: white;" viewBox="0 0 100 100" preserveAspectRatio="none")
        path(d="M0 0 C 50 100 80 100 100 0 Z")
      .absolute-bottom.full-width.videobuttonoffset(@click="videoPlaying=true,$root.$emit('videoModal',true)" @mouseout ="$emit(highlightVideoEvent,false)" @mouseover="$emit(highlightVideoEvent,true)").cursor-pointer
        .row.justify-center
          .col-12
            .row.justify-center
              q-btn( round :size="buttonSize3" color="white" @click="videoPlaying=true,$root.$emit('videoModal',true)").bg-green-5
                q-icon(name="play_arrow")
          h5.text-white.q-pt-sm.cursor-pointer Explainer Video
  div(style="padding-bottom: 57.25%; padding-top:0px; margin-top:0px; height:100px; z-index:-2; overflow: hidden" @mouseout ="highlightVideo = false" @mouseover="highlightVideo = true").relative-position.cursor-pointer
    .videocover(@click="videoPlaying=true,$root.$emit('videoModal',true)" v-bind:class="{highlightVideo:highlightVideo}")
    iframe(v-if="!videoPlaying" allow="autoplay; fullscreen" src="https://www.youtube.com/embed/3-C5dxJvFMA?rel=0&amp;autoplay=1;fs=0;autohide=1;hd=0;mute=1;controls=0;showinfo=0;modestbranding=1;loop=1;playlist=3-C5dxJvFMA" frameborder="0").videoadjust
  .relative-position.adjustvideofooter
    .relative-position
      svg.transitioncurve.pointer-none(xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" style="position:absolute; pointer-events: none; padding-top:0; margin-top:0;fill: rgb(0, 112, 208); bottom:0px;" viewBox="0 0 100 100" preserveAspectRatio="none")
        path(d="M0 100 C 60 10 90 50 100 100 Z")
</template>
<style lang="stylus">
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
</style>

<script>
  export default {
    props:['videoPlaying','highlightVideo', 'buttonSize3']
  }
</script>

