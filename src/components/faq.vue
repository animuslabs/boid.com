<template lang="pug">
  .row.justify-center
    .col-12.justify-center
      .row.justify-center
        .col-auto
          h2.text-blue-5 FAQ
    .col-sm-12.col-md-11.col-lg-10.col-xl-9
      .row.justify-center
        QBtnToggle(toggle-color="blue-5" v-model="activeFaqTab" :size="tabSize" rounded :options="faqTabs" style="")
      .faqcontainer
        div(v-if="activeFaqTab === 0")
          q-collapsible(v-for="(faqItem,index) in $options.faqContent.general" :key="index+'0'" :label="faqItem.q" )
            | {{faqItem.a}}
        div(v-if="activeFaqTab === 1")
          q-collapsible(v-for="(faqItem,index) in $options.faqContent.teams" :key="index+'1'" :label="faqItem.q" )
            | {{faqItem.a}}
        div(v-if="activeFaqTab === 2")
          q-collapsible(v-for="(faqItem,index) in $options.faqContent.apps" :key="index+'2'" :label="faqItem.q" )
            | {{faqItem.a}}
        div(v-if="activeFaqTab === 3")
          q-collapsible(v-for="(faqItem,index) in $options.faqContent.tokenization" :key="index+'3'" :label="faqItem.q" )
            | {{faqItem.a}}
</template>

<script>
import faqContent from '../data/faqContent.js'
export default {
  data () {
    return {
      screenSize:{
        height: window.innerHeight,
        width: window.innerWidth
      },
      activeFaqTab:0,
      faqTabs: [
        { label: "General", value: 0 },
        { label: "Teams", value: 1 },
        { label: "Apps", value: 2 },
        { label: "Tokenization", value: 3 },
      ]
    }
  },
  created(){
    this.$options.faqContent = faqContent
    this.$root.$on('resize',(data)=>{
      this.screenSize = data
    })
  },
  computed:{
    tabSize(){
      if (this.screenSize.width > 769) return 'lg'
      else if (this.screenSize.width > 570) return 'lg'
      else if (this.screenSize.width > 450) return 'md'
      else return 'md'
    }
  }
}
</script>

<style lang="stylus">
@import '~variables'
.q-item-label
  font-size 20px
  font-weight 500
  font-family: 'Comfortaa'
.q-collapsible-sub-item
  font-size 18px
  padding-left 50px
.faqcontainer
  position relative
  box-shadow 0px 3px 5px $grey-5
  min-height 400px
  padding 20px




</style>
