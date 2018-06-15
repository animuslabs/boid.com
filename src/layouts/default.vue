<template lang="pug">
  q-layout(view="lHh Lpr lFf")
    q-layout-header
      q-toolbar(color="white" text-color="black")
        q-toolbar-title.q-ma-sm
          | boid
        q-btn(color="green" outline) Login
    q-page-container
      router-view
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'LayoutDefault',
  data() {
    return {
    }
  },
  methods: {
    openURL,
    logout(){
    }
  },
  props:[]
}
</script>

<style lang="stylus">
.q-toolbar-title
  font-family 'Comfortaa' !important
  font-size 35px
  color #089cfc

</style>
