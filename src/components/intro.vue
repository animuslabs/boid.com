<template lang="pug">
  div
    .row.justify-center.gutter-md(v-scroll-reveal={ delay: 450 })
      .col-12.relative-position(style="margin-top:100px; margin-bottom:130px;")
        div.absolute-center
          h3 Do something Huge
          h4 boid makes it easy
      div(style="height:30px;").lt-lg
    .row.justify-center.xl-padding.md-padding(style="margin-top:120px;" )
      .col-xl-3.col-lg-4.col-md-6.col-sm-12(v-scroll-reveal={ delay: 0 })
        .row.justify-center.relative-position
          img.heroicon.absolute-center(src="~assets/connectdevices.svg")
        .herocard
          h5.text-center Connect Your Devices
      .col-12.gt-sm.lt-lg(style="height:200px;")
      .verticalSpacer.lt-md
      .col-xl-3.col-lg-4.col-md-6.col-sm-12(v-scroll-reveal={ delay: 20 })
        .row.justify-center.relative-position
          img.heroicon.absolute-center(src="~assets/contribute3.svg")
        .herocard
          h5.text-center Contribute To Big Ideas
      .verticalSpacer.lt-md
      .col-xl-3.col-lg-4.col-md-6.col-sm-12(v-scroll-reveal={ delay: 40 })
        .row.justify-center.relative-position
          img.heroicon.absolute-center(src="~assets/earnrewards3.svg")
        .herocard
          h5.text-center Earn Rewards
    div(style="height:150px")
</template>
<style lang="stylus">
</style>
<script>
export default {}
</script>