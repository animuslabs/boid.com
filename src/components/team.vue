<template lang="pug">
.row.justify-center(style="margin-bottom: 100px;")
  .col-12
    .row.justify-center(style="padding-bottom:0px; margin-top: 100px;")
      h2.text-blue-5(style="margin:10px;") Team
  .col-xs-12.col-sm-12.col-md-10.col-xl-10
    .row.justify-center.relative-position.gutter-lg
      teamCard.col-xs-12.col-sm-5.col-md-5.col-lg-3(:person='john')
  .col-xs-12.col-sm-12.col-md-10.col-xl-10
    .row.justify-center.relative-position.gutter-lg
      teamCard.col-xs-12.col-sm-5.col-md-5.col-lg-3(v-for="(person,index) in team" :key="index" :person='person')
  .col-12
    .row.justify-center(style="margin-top:100px;")
      h2.text-blue-5(style="margin:10px;") Advisors
  .col-sm-12.col-md-10.col-xl-10
    .row.justify-center.relative-position.gutter-lg
      teamCard.col-xs-12.col-sm-5.col-md-5.col-lg-3(v-for="(person,index) in advisors" :key="index" :person='person')
        
</template>

<script>
import teamCard from 'components/teamcard.vue'
export default {
  components:{
    teamCard
  },
  data () {
    return {
      john:{
        name:"John Heeter",
        image:require("assets/team/John.svg"),
        position:"Founder",
        linkedIn:"johnheeter"

      },
      team:[
        {
          name:"Eric Solomon",
          image:"statics/heads/Eric.png",
          position:"Technical Lead",
          linkedIn:"eric-solomon-35a22490"

        },
        {
          name:"Luke Dickerson",
          image:"statics/heads/Luke.png",
          position:"Engineering",
          linkedIn:"luke-dickerson-644272b9"

        },
        {
          name:"Daniel Carroll",
          image:"statics/heads/Dan.png",
          position:"Community Lead",
          linkedIn:"danielmcarroll"
        },
        {
          name:"Jamie Cupper",
          image:"statics/heads/Jamie.png",
          position:"Research",
          linkedIn:"jamie-cupper-mcips-b1290112"
        },
        // {
        //   name:"Woosang Kwon",
        //   image:"https://i.imgsafe.org/63/6321667889.jpeg",
        //   position:"Korean Community Lead",
        //   linkedIn:"woosang-kwon-941b9540"
        // }
      ],
    advisors:[
      {
        name:"Johnnie Chamberlin",
        image:require("assets/team/Johnnie.svg"),
        position:"Science",
        linkedIn:"johnniechamberlin"
      },
      {
        name:"Devon Bernard",
        image:require("assets/team/Devon.svg"),
        position:"Technology",
        linkedIn:"devonbernard"
      },
      {
        name:"Cem Ozkal",
        image:require("assets/team/Jim.svg"),
        position:"Strategy",
        linkedIn:"cem-jim-ozkal-18a45211"
      },
      {
        name:"Cesar Diaz",
        image:require("assets/team/Cesar.svg"),
        position:"Blockchain",
        linkedIn:"cesardiazoai"
      }
    ]
    }
  },
  created(){
  },
  computed:{
  },
  methods:{
    calcDelay(index){
      return {
        delay: (index+1) * 10
      } 
    }
  }
}
</script>

<style lang="stylus">
@import '~variables'



</style>
