<template lang="pug">
  .col
    .row.justify-center
      .relative-position.teamimg(@click="openURL('https://www.linkedin.com/in/'+person.linkedIn)")
        .row.justify-center
          img.teamimg.teamimg2(:src="person.image")
          img.absolute.linkedinico(src="~assets/linkedin.svg")
    .row.justify-center
      .teamposition.text-center {{person.position}}
    .row.justify-center
      .teamname {{person.name}}
</template>
<script>
  import { openURL } from 'quasar'
  export default {
  props:['person'],
  methods:{
    openURL
  }
  }
</script>
<style lang="stylus">
@import '~variables'

.linkedinico
  width: 35px
  height: 35px
  right: 10%
  bottom: 10%
  // box-shadow 0px 3px 4px rgb(0,0,0,0.2)
  filter drop-shadow( 0px 2px 2px rgba(0,0,0,0.5))
.teamimg
  border-radius 100%
  margin 20px
  max-width 300px
  width 100%
  height 100%
  cursor pointer
.teamimg2
  // box-shadow 0px 3px 4px rgb(0,0,0,0.2)
.teamimg2:hover
  // box-shadow 0px 5px 2px alpha($green-9,.6)
  background-color $green-6

.teamname
  color $grey-9
  margin-bottom 5px
  font-size 20px
.teamposition
  color $green-7
  margin-bottom 5px
  font-size 25px
</style>
