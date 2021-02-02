<template lang="pug">
  .row.justify-center.roadmapmaster
    .col-12
      .row.justify-center.relative-position
        div.bg-grey-9(style="z-index:1; height:300px; width: 300px; position:absolute; top:-80px; border-radius:100%; clip:rect(0px,300px,80px,0px)")
      .row.justify-center(style="padding-bottom:0px;")
        h2.text-blue-5(style="margin:10px; z-index:2;") Timeline
    .row.justify-center
      .row.justify-center      
        .col-auto
          li Boid Defi
          li Boid IBC Bridge
          li New GPU Miner Integration
          li New user contracts + Quasar UI
          li BoidVoid Game Alpha
          li Boid Power/Devices contract rewrite
        .col-auto
          li On-chain WPS system
          li Boid DAC Voting
          li Chargeable Boid NFTs
          li Team staking mechanics
          li Boid Telegram/Discord Bot
          //- table.full-width
          //-   tr(v-scroll-reveal={ delay: 0 })
          //-     td
          //-       q-icon(name="check_circle" size="70px" color="green")
          //-     td(style="padding-top:35px; padding-left:20px")
          //-       h6.bpHeading.text-green Done 
          //-       h6.bpinfoText.text-white Private alpha and native applications are implemented.
          //-   tr(v-scroll-reveal={ delay: 50 })
          //-     td
          //-       q-icon(name="timelapse" size="70px" color="orange")
          //-     td(style="padding-top:35px; padding-left:20px")
          //-       h6.bpHeading.text-orange Today 
          //-       h6.bpinfoText.text-white Public alpha is available for early adopters. You can use the Boid Web and Boid Native applications today.
          //-   tr(v-scroll-reveal={ delay: 100 })
          //-     td
          //-       q-icon(name="timeline" size="70px" color="blue")
          //-     td(style="padding-top:35px; padding-left:20px")
          //-       h6.bpHeading.text-blue Tomorrow 
          //-       h6.bpinfoText.text-white Boid will function as an autonomous network using EOSIO technology.
      //- .col-12.q-pt-xl(v-if="!viewTimeline")
        //- .row.justify-center
          //- q-btn(color="green" style="z-index:10" size="lg" @click="viewTimeline = true") View Detailed Roadmap
           
    .col-11(v-if="viewTimeline")
      .row.justify-center
        .col-xs-9.col-xl-6
          q-timeline(color="blue")
            q-timeline-entry(heading) 2017
            q-timeline-entry(
              v-for="(entry,index) in timelineEntries1" :key="index"
              :title="entry.title"
              :subtitle="'Q' + (index+1)"
              :side="findSide(index)"
              :icon="entry.icon"
              :color="entry.color"
            )
              |{{entry.content}}
        .col-xs-9.col-xl-6
          q-timeline(color="blue-3")
            q-timeline-entry(heading) 2018
            q-timeline-entry(
              v-for="(entry,index) in timelineEntries2" :key="index"
              :title="entry.title"
              :subtitle="'Q' + (index+1)"
              :side="findSide(index)"
              :color="entry.color"
              :icon="entry.icon"

            )        
              |{{entry.content}}
        .col-xs-9.col-md-9.col-xl-10(style="max-width: 700px;")
          q-timeline(color="blue-3")
            q-timeline-entry(heading).text-blue 2019
            q-timeline-entry(
              v-for="(entry,index) in timelineEntries3" :key="index"
              :title="entry.title"
              :subtitle="'Q' + (index+1)"
              :side="findSide(index)"
              :color="entry.color"
              :icon="entry.icon"
            )
              |{{entry.content}}
        .col-xs-9.col-md-9.col-xl-12
          .row.justify-center
            .col-12(style="max-width:700px;")
              q-timeline(color="blue-3")
                q-timeline-entry(heading).text-blue 2020
                q-timeline-entry(
                  v-for="(entry,index) in timelineEntries4" :key="index"
                  :title="entry.title"
                  :subtitle="'Q' + (index+1)"
                  :side="findSide(index)"
                  :color="entry.color"
                  :icon="entry.icon")
                  |{{entry.content}}
</template>

<script>
import {timelineEntries1,timelineEntries2,timelineEntries3,timelineEntries4} from '../data/roadmap.js'
function isEven(n) {
   return n % 2 == 0;
}
export default {
  data () {
    return {
      viewTimeline: false,
      timelineEntries1,
      timelineEntries2,
      timelineEntries3,
      timelineEntries4
    }
  },
  mounted(){
  },
  methods:{
    findSide(index){
      if (isEven(index)){
        return 'right'
      }else return 'left'
    }
  }
}
</script>

<style lang="stylus">
@import '~variables'

.roadmapmaster
  background-color:$grey-9
  padding-bottom:100px
.q-timeline
  transform: scale(1.3)
  padding:60px;
  @media screen and (max-width: $breakpoint-md)
    padding 10px 
    padding-top: 160px
.q-timeline-title
  color: $grey-2
  font-size: 20px;
  font-weight: 800
  font-family: 'boidFont'
.q-timeline-heading-title
  color: $grey-3
  font-size: 35px;
  font-family: 'boidFont'
  padding-bottom: 5px
  margin-top 60px
h3
  padding-bottom 0px
  padding-top: 40px;
.q-timeline-content
  color: $grey-4
  font-size: 14px;
  padding-left: 10px;
.q-timeline-subtitle
  color: $grey-5
  @media screen and (max-width: $breakpoint-md)
    // padding-left:15px
    // padding-right:15px
  // padding-left: 20px
  font-size:25px;


</style>
