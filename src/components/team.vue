<template lang="pug">
.row.justify-center(style="margin-bottom: 100px;")
  .col-12
    .row.justify-center(style="padding-bottom:0px; margin-top: 100px;")
      h2.text-blue-5(style="margin:10px;") Team
  .col-sm-12.col-md-10.col-xl-10
    .row.justify-center.relative-position.gutter-lg
      teamCard.col-sm-12.col-md-12.col-lg-3(v-for="(person,index) in team" :key="index" :person='person')
  .col-12
    .row.justify-center(style="margin-top:100px;")
      h2.text-blue-5(style="margin:10px;") Advisors
  .col-sm-12.col-md-10.col-xl-10
    .row.justify-center.relative-position.gutter-lg
      teamCard.col-sm-12.col-md-12.col-lg-3(v-for="(person,index) in advisors" :key="index" :person='person')
        
</template>

<script>
import teamCard from 'components/teamcard.vue'
export default {
  components:{
    teamCard
  },
  data () {
    return {
      team:[
        {
          name:"John Heeter",
          image:require("assets/team/John.svg"),
          position:"Founder",
          linkedIn:"johnheeter"

        },
        {
          name:"José Luis Romero",
          image:require("assets/team/Jose.svg"),
          position:"COO",
          linkedIn:"jose-luis-romero-何希-8a98b824"
        },
        {
          name:"Justin Suttmiller",
          image:require("assets/team/Justin.svg"),
          position:"CPO",
          linkedIn:"justin-suttmiller-7b1424b"
        },
        {
          name:"Scott Mattson",
          image:require("assets/team/Scott.svg"),
          position:"VP Partnerships",
          linkedIn:"gamecentergroup"
        }
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
  }
}
</script>

<style lang="stylus">
@import '~variables'



</style>
