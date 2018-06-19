<template lang="pug">
  q-page
    .heading.relative-position
      .row.justify-center
        .col-12(style="margin-top:300px;")
          h2.text-center The Social Supercomputer
        div
          q-btn.on-left.shadow-5(:size="buttonSize" color="green-6") Join Us
          q-btn.shadow-5(:size="buttonSize" color="blue") Learn More 
            q-icon.on-right(name="arrow_downward")
      .row.absolute-bottom.justify-center
        // img.transition(src="~assets/transition1.svg")
        svg(id="curveDownColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" style="fill: #fff;" viewBox="0 0 100 100" preserveAspectRatio="none")
          path(d="M0 100 C 20 0 50 0 100 100 Z")
    .row.justify-center.gutter-md
      .col-12.relative-position(style="margin-top:100px; margin-bottom:100px;")
        div.absolute-center
          h3 Do something Huge
          h4 boid makes it easy
      div(style="height:30px;").lt-lg
    .row.justify-center.xl-padding.md-padding(style="margin-top:120px;")
      .col-lg-3.col-md-6.col-sm-12
        .row.justify-center.relative-position
          img.heroicon.absolute-center(src="~assets/installBoid.svg")
        .herocard.bg-white.shadow-3
          h5.text-center Connect your Devices
          p Install the Boid app on your computers and phones.
      .col-12.gt-sm.lt-lg(style="height:200px;")
      .verticalSpacer.lt-md
      .col-lg-3.col-md-6.col-sm-12
        .row.justify-center.relative-position
          img.heroicon.absolute-center(src="~assets/team2.svg")
        .herocard.bg-white.shadow-3
          h5.text-center Contribute to big ideas
          p Your spare computing resouces will make an impact in important science and cryptocurrency projects.
      .verticalSpacer.lt-md
      .col-lg-3.col-md-6.col-sm-12
        .row.justify-center.relative-position
          img.heroicon.absolute-center(src="~assets/bitcoin.svg")
        .herocard.bg-white.shadow-3
          h5.text-center Earn Rewards
          p Earn money for your computing power, or donate your earnings to charity.
    .relative-position
      <svg id="curveDownColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" style="position:absolute; padding-top:0; margin-top:0;fill: rgb(0, 112, 208); top:0px;" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0 100 C 60 10 90 50 100 100 Z"></path></svg>
    div(style="background-color: rgb(0, 112, 208); border-bottom-left-radius: 60% 5%; border-bottom-right-radius: 50% 5%;")
      .row.justify-center.gutter-sm(style="margin-top:100px; margin-bottom:10px;")
        .col-lg-5.col-md-auto.col-sm-10
          h3.text-white(style="") Fight the good fight
          h4.yellowheading(style="margin-bottom:0px;") Our communities have real impact
          .row.justify-center
            .col-lg-4.col-md-10.col-sm-10.lt-lg.teamExplainer
              .relative-position(style="width:450px;")
                q-carousel(ref="teamSlides" infinite no-swipe :autoplay="4000" style="margin:0px !important;")
                  q-carousel-slide
                    img.teamicon(src="~assets/commoncause.svg")
                  q-carousel-slide
                    img.teamicon(src="~assets/boidteams.svg")
                  q-carousel-slide
                    img.teamicon(src="~assets/winprizes.svg")
                  q-carousel-slide
                    img.teamicon(src="~assets/teamleader.svg")
                div(style="height:250px;")
                  ul(style="max-width:500px; bottom:0px;").absolute-bottom
                    transition-group(appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut")
                      li(key="0" v-bind:class="{activelist:teamActiveItem === 0}").q-pa-sm
                        h6 Team Leaders rally users around important causes
                      li(key="1" v-bind:class="{activelist:teamActiveItem === 1}").q-pa-sm
                        h6 Users contribute their computing resouces on global leaderboards
                      li(key="2" v-bind:class="{activelist:teamActiveItem === 2}").q-pa-sm
                        h6 Users can win money and prizes for their contributions
                      li(key="3" v-bind:class="{activelist:teamActiveItem === 3}").q-pa-sm
                        h6 Team leaders can keep or donate commisions earned from their team performance
          ul.gt-md(style="max-width:500px;")
            transition-group(appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut")
              li(key="0" v-bind:class="{activelist:teamActiveItem === 0}").q-pa-sm
                h6 Team Leaders rally users around important causes
              li(key="1" v-bind:class="{activelist:teamActiveItem === 1}").q-pa-sm
                h6 Users contribute their computing resouces on global leaderboards
              li(key="2" v-bind:class="{activelist:teamActiveItem === 2}").q-pa-sm
                h6 Users can win money and prizes for their contributions
              li(key="3" v-bind:class="{activelist:teamActiveItem === 3}").q-pa-sm
                h6 Team leaders can keep or donate commisions earned from their team performance
        .col-lg-4.col-md-12.gt-md
          q-carousel(style="width:600px" ref="teamSlides" infinite :autoplay="4000")
            q-carousel-slide
              img.teamicon(src="~assets/commoncause.svg")
            q-carousel-slide
              img.teamicon(src="~assets/boidteams.svg")
            q-carousel-slide
              img.teamicon(src="~assets/winprizes.svg")
            q-carousel-slide
              img.teamicon(src="~assets/teamleader.svg")

    .explainer.relative-position.layout-padding(style="margin-top:0px;")
      .row.reverse.justify-center.relative-position
        .col-lg-12.col-xl-4
          div.headingfix
            h3 Help researchers solve hard problems
        .col-lg-7.col-md-12.col-xl-5.relative-position.gt-sm(style="height:400px;")
          br
          br
          .absolute-center
            .row.justify-center.bg-white.shadow-2(style="width:630px")
              .col-md-12.relative-position.q-ma-lg
                QBtnToggle.absolute-center(@input="clearSciInterval" size="xl" rounded color="white" text-color="grey-8" v-model="activeScienceBtn" toggle-color="orange-6" :options="scienceBtns")
              .col-sm-12.col-md-5.col-lg-6.relative-position(style="height:310px;")
                img.scienceIcons.absolute-center(:src="scienceInfo.img")
              .col-sm-12.col-md-6.col-lg-6.col-xl-6
                div
                  .scienceCard
                    h6.scienceHeader.text-orange-6 {{scienceInfo.headerText}}
                    p  {{scienceInfo.paragraphText}}
        .col-lg-6.col-md-12.col-xl-5.lt-md
          br
          br
          .row.justify-center
            .row.justify-center.bg-white.shadow-2(style="margin-top:0px; width:500px; height:490px;")
              .col-md-12.relative-position.q-ma-lg
                QBtnToggle.absolute-center.gt-xs(@input="clearSciInterval" size="lg" rounded color="white" text-color="grey-8" v-model="activeScienceBtn" toggle-color="orange-6" :options="scienceBtns")
                QBtnToggle.absolute-center.lt-sm(@input="clearSciInterval" size="sm" rounded color="white" text-color="grey-8" v-model="activeScienceBtn" toggle-color="orange-6" :options="scienceBtns")
              .col-sm-12.col-md-3.col-lg-4.relative-position(style="height:250px;")
                img.scienceIcons.absolute-center(:src="scienceInfo.img")
              .col-sm-12.col-md-8.col-lg-7.col-xl-6
                div
                  .scienceCard
                    h6.scienceHeader.text-orange-6 {{scienceInfo.headerText}}
                    p  {{scienceInfo.paragraphText}}
      .row
        .col-lg-12.layout-padding
          h3 This is How it works
      .row.justify-center.gutter-lg.xl-padding(style="margin-top:180px;")
        .col-lg-5.col-md-12.col-xl-4(style="height:620px;")
          .row.justify-center.relative-position
            img.sciExplain.absolute-center(src="~assets/sciexplain/problem.svg").shadow-5
          .explaincard.bg-white.shadow-3
            table.full-width
              tr
                th
                  h5 1
                th 
                  h6.poverride Researchers need computing power to solve complex problems. 
        .col-1.gt-md.lt-xl
        .col-lg-5.col-md-12.col-xl-4(style="height:620px;")
          .row.justify-center.relative-position
            img.sciExplain.absolute-center(src="~assets/sciexplain/solution.svg").shadow-5
          .explaincard.bg-white.shadow-3
            table.full-width
              tr
                th
                  h5 2
                th 
                  h6.poverride Complex problems are broken into small tasks that can run on any computer.
        .col-lg-5.col-md-12.col-xl-4(style="height:620px;")
          .row.justify-center.relative-position
            img.sciExplain.absolute-center(src="~assets/sciexplain/distribute.svg").shadow-5
          .explaincard.bg-white.shadow-3
            table.full-width
              tr
                th
                  h5 3
                th 
                  h6.poverride Small tasks are distributed to computers and phones globally.  
        .col-1.gt-md.lt-xl
        .col-lg-5.col-md-12.col-xl-4(style="height:620px;")
          .row.justify-center.relative-position
            img.sciExplain.absolute-center(src="~assets/sciexplain/process.svg").shadow-5
          .explaincard.bg-white.shadow-3
            table.full-width
              tr
                th
                  h5 4
                th 
                  h6.poverride Tasks are processed, and the result of each computation is returned.   
        .col-lg-5.col-md-12.col-xl-4(style="height:620px;")
          .row.justify-center.relative-position
            img.sciExplain.absolute-center(src="~assets/sciexplain/assemble.svg").shadow-5
          .explaincard.bg-white.shadow-3
            table.full-width
              tr
                th
                  h5 5
                th 
                  h6.poverride Individual results are verified and assembled together into one big solution.
        .col-1.gt-md.lt-xl
        .col-lg-5.col-md-12.col-xl-4(style="height:620px;")
          .row.justify-center.relative-position
            img.sciExplain.absolute-center(src="~assets/sciexplain/earn.svg").shadow-5
          .explaincard.bg-white.shadow-3
            table.full-width
              tr
                th
                  h5 6
                th 
                  h6.poverride Users generate ⚡Boid Power in exchange for their contributions.
    .relative-position()
      svg.absolute-bottom(style="width:100%; height:100px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none") 
        // polygon.svg--sm(fill="white" points="0,0 30,100 65,21 90,100 100,75 100,100 0,100")
        polygon.svg--lg(fill="rgb(0, 112, 208)" points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100")
    .layout-padding(style="background-color:rgb(0, 112, 208);")
      .row.justify-center.q-mt-xl
        .col-xl-3.col-lg-5.col-md-6.col-sm-7.col-xs-8
          div(style="height: 230px;")
            h1.text-white.relative-position boid
              h1.text-white.absolute(style="top:80px") power
          h4.text-yellow-8(style="text-shadow: 1px 1px 1px yellow-6; white-space:nowrap;") Your gateway to the new economy
        .col-2.col-sm-1.col-xs-1
          .relative-position.justify-center
            img.boidPowerLogo(src="~assets/BoidPower.svg")
        .col-xs-3.lt-sm
      .row.justify-center.q-mt-xl
        .col-12-auto
          .row.justify-center
            .col-sm-12.col-md-5.col-lg-5
              .row.justify-center
                img.bpicons(src="~assets/BoidPower.svg")
            .col-sm-12.col-md-7.col-lg-7.relative-position(style="width:400px; height:200px;")
              .bpinfocard
                h6.bpHeading Devices generate Boid Power
                h6.bpinfoText The amount of Boid Power generated by a device is determined by it's hardware performance and how long the Boid application is running each day.
      .gt-sm.bpspacer
      .row.justify-center.q-mt-xl
        .col-12-auto
          .row.justify-center.reverse
            .col-sm-12.col-md-5.col-lg-5
              .row.justify-center
                img.bpicons(src="~assets/BoidPower.svg")
            .col-sm-12.col-md-7.col-lg-7.relative-position(style="width:400px; height:200px;")
              .bpinfocard2
                h6.bpHeading Weekly competitions
                h6.bpinfoText Users compete in weekly challenges for money and prizes. Our global leaderboards are based on live Boid Power metrics.
      .gt-sm.bpspacer              
      .row.justify-center.q-mt-xl
        .col-12-auto
          .row.justify-center
            .col-sm-12.col-md-5.col-lg-5
              .row.justify-center
                img.bpicons(src="~assets/BoidPower.svg")
            .col-sm-12.col-md-7.col-lg-7.relative-position(style="width:400px; height:200px;")
              .bpinfocard
                h6.bpHeading Passive Income
                h6.bpinfoText Your Boid Power can be used to mine for various cryptos. Get paid out daily however you like.
      .gt-sm.bpspacer              
      .row.justify-center.q-mt-xl
        .col-12-auto
          .row.reverse.justify-center
            .col-sm-12.col-md-5.col-lg-5
              .row.justify-center
                img.bpicons(src="~assets/BoidPower.svg")
            .col-sm-12.col-md-7.col-lg-7.relative-position(style="width:400px; height:200px;")
              .bpinfocard2
                h6.bpHeading Do Good
                h6.bpinfoText Divert your Boid Power towards important non-profits in epic fundraising campaigns.
    svg.absolute-bottom(style="width:100%; height:100px; padding-top:300px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none") 
      // polygon.svg--sm(fill="white" points="0,0 30,100 65,21 90,100 100,75 100,100 0,100")
      polygon.svg--lg(fill="white" points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100")
</template>

<style lang="stylus">
@import '~variables'
.teamExplainer
  height: 100%
  padding-bottom: 40px
 
.bpinfoText
  padding-left 35px

.bpspacer
  height:50px;
  

.bpHeading
  margin-bottom: 10px
  font-weight: 800
  font-size 25px

.bpinfocard2
  height:190px
  width:550px
  background-color:white
  z-index 1
  left:-30px
  top:30px
  position:absolute
  border-radius 30px
  padding 20px
  padding-right:155px
  box-shadow 0px 1px 4px rgb(0,0,0,0.2)
  @media screen and (max-width: $breakpoint-sm) 
    left:0px
    top:-40px
    width:100%
    height:100%
    padding 25px
    padding-top 55px

.bpinfocard
  height:190px
  width:550px
  background-color:white
  z-index 1
  left:-140px
  top:30px
  position:absolute
  border-radius 30px
  padding 20px
  padding-left:155px
  box-shadow 0px 1px 4px rgb(0,0,0,0.2)
  @media screen and (max-width: $breakpoint-sm) 
    left:0px
    top:-40px
    width:100%
    height:100%
    padding 25px
    padding-top 55px

.bpicons
  height: 250px
  width: 250px
  background-color: $grey-9;
  border-radius: 100%;
  z-index 4
  position relative
  filter drop-shadow( 0px 0px 4px black)


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
  

.headingfix
  @media screen and (min-width 1200px) and (max-width 1800px)
    padding-left:140px

.boidPowerHeader 
  color: $yellow-2
.boidPowerLogo
  // filter: drop-shadow( 1px 1px 30px alpha($yellow-9,1))
  width: 100px
  margin 0 auto
  animation powerflicker 1s linear infinite
  @media screen and (min-width 1200px) and (max-width 1800px)
    margin-left:100px

@keyframes powerflicker
  0% 
    filter: drop-shadow( 1px 1px 60px alpha($yellow-11,1))
  2% 
    filter: drop-shadow( 1px 1px 30px alpha($yellow-9,.1))
  4% 
    filter: drop-shadow( 1px 1px 30px alpha($yellow-9,.5))
  8%
    filter: drop-shadow( 1px 1px 20px alpha($yellow-11,1))
  70%
    filter: drop-shadow( 1px 1px 10px alpha($yellow-9,.1))
  100%
    filter: drop-shadow( 1px 1px 60px alpha($yellow-11,1))

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
  width: 480px;
  background-color: $blue-9;
  border-radius: 100%;
  z-index: 3;
  @media screen and (min-width 1200px) and (max-width 1800px)
    width: 380px;
    margin-top: 40px;
  @media screen and (max-width $breakpoint-lg) 
    width: 450px;

  @media screen and (max-width $breakpoint-sm) 
    width: 400px;
  


.explaincard {
  border-radius: 30px;
  z-index: 1;
  margin-top: 195px;
  padding: 30px;
  padding-top: 50px;
  position: relative;

  @media screen and (max-width: $breakpoint-sm) {
    margin-top: 170px;
  }

  @media screen and (max-width: $breakpoint-lg) {
    margin-top: 160px;
  }
}

.explainer {
  background-image: url('~assets/hexbg.png');
  background-scale: 200%;
}

.scienceHeader {
  margin-bottom: 10px;
}

.scienceIcons 
  width: 300px;
  padding: 0px;
  margin: 0 auto;
  display: block;
  @media screen and (max-width: $breakpoint-sm) 
    width: 200px;


.scienceCard 
  border-radius: 30px;
  z-index: 1;
  margin: 20px;
  padding: 20px;
  height: 200px;


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
  font-weight: 400;
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
  height: 440px;
}

.heroicon 
  padding: 30px;
  width: 350px;
  filter: drop-shadow( 0px 2px 2px grey)
  @media screen and (max-width $breakpoint-lg) 
    width: 300px
  @media screen and (max-width $breakpoint-md) 
    width: 350px




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
  padding: 20px;
}

.transition {
  width: 100%;
  height: 500px;
}

h1
  font-family 'Comfortaa'
  margin-top: 0px
  margin-bottom 0px
  @media screen and (max-width: $breakpoint-lg) 
    font-size 112px
  @media screen and (max-width: $breakpoint-sm) 
    font-size 80px

h2 {
  color: white;
  font-family: 'Comfortaa';
}

h3 
  color: #089cfc;
  font-family: 'Comfortaa';
  text-transform: uppercase;
  margin-bottom: 0px;
  @media screen and (max-width: $breakpoint-sm) 
    font-size 35px


p {
  font-size: 18px;
  margin-bottom: 0px;
}

h4 
  color $green-6
  margin-top 0px
  @media screen and (max-width: $breakpoint-lg) 
    font-size 34px
  @media screen and (max-width: $breakpoint-sm) 
    font-size 25px

h5 {
  color: $grey-9;
  font-size: 35px;
  margin-top: 25px;
  margin-bottom: 20px;
}

h6 
  margin: 0px;
  @media screen and (max-width: $breakpoint-md) 
    font-size 20px


.heading {
  background: linear-gradient(to right, rgba(30, 87, 153, 0.5) 0%, rgba(79, 138, 194, 0.45) 52%, rgba(125, 185, 232, 0.5) 100%), url('~assets/header2.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  width: 100%;
  height: 100%;
  min-height: 950px;
}
</style>

<script>
console.log(screen.height,screen.width)

export default {
  data() {
    return {
      screenSize:{
        height: window.innerHeight,
        width: window.innerWidth
      },
      teamActiveItem: 0,
      activeScienceBtn: 0,
      sciInterval: "",
      scienceBtns: [
        { label: "Medicine", value: 0 },
        { label: "Ecology", value: 1 },
        { label: "Astronomy", value: 2 },
        { label: "Machine Learning", value: 3 },
        { label: "More", value: 4 }
      ]
    };
  },
  mounted() {
    this.$root.$on('resize',(data)=>{
      this.screenSize = data
    })
    this.sciInterval = setInterval(() => {
      if (this.activeScienceBtn > 3) {
        this.activeScienceBtn = 0;
      } else this.activeScienceBtn++;
    }, 1000);
    this.$refs.teamSlides.$on("slide", i => {
      this.teamActiveItem = i;
    });
  },
  computed: {
    buttonSize(){
      if (this.screenSize.width > 769) return 'xl'
      else return 'lg'
    },
    scienceInfo() {
      if (this.activeScienceBtn === 0) {
        return {
          headerText: "Save Lives",
          paragraphText:
            "Your computer can help scientists simulate and isolate more effictive treatments for cancer, alzheimers, and many other diseases.",
          img: require("assets/scicons/chemistry.svg")
        };
      } else if (this.activeScienceBtn === 1) {
        return {
          headerText: "Study Global Warming",
          paragraphText:
            "Help run climate simulations that predict the effects of climate change on our planet.",
          img: require("assets/scicons/earth.svg")
        };
      } else if (this.activeScienceBtn === 2) {
        return {
          headerText: "Save Lives",
          paragraphText:
            "Your computer can help scientists simulate proteins to isolate more effictive treatments for cancer, alzheimers, and many other diseases.",
          img: require("assets/scicons/planetary.svg")
        };
      } else if (this.activeScienceBtn === 3) {
        return {
          headerText: "Save Lives",
          paragraphText:
            "Your computer can help scientists simulate and isolate more effictive treatments for cancer, alzheimers, and many other diseases.",
          img: require("assets/scicons/magnifyingglass.svg")
        };
      } else if (this.activeScienceBtn === 4) {
        return {
          headerText: "Save Lives",
          paragraphText:
            "Your computer can help scientists simulate and isolate more effictive treatments for cancer, alzheimers, and many other diseases.",
          img: require("assets/scicons/earth.svg")
        };
      }
    }
  },
  methods: {
    clearSciInterval() {
      clearInterval(this.sciInterval);
    }
  }
};
</script>
