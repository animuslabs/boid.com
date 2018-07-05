<template lang="pug">
  .q-app
    router-view()
</template>

<script>
import { scroll } from 'quasar'
const { getScrollTarget, setScrollPosition } = scroll
// takes an element object
function scrollToElement (el) {
  let target = getScrollTarget(el)
  let offset = el.offsetTop - el.scrollHeight
  let duration = 1000
  setScrollPosition(target, offset, duration)
}



export default {
  data(){
    return{
      
    }
  },
  mounted(){
    // this.$nextTick(()=>{
    //   setTimeout(()=>{
    //     var result = document.getElementById("app")
    //     console.log(result)
    //     if (result) scrollToElement(result)
    //   },1000)
    // })
  }
}
</script>

<style>
</style>
