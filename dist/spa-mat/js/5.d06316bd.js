(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"F/06":function(t,i,o){},PTxA:function(t,i,o){"use strict";var e=o("F/06"),n=o.n(e);n.a},ez0Y:function(t,i,o){"use strict";o.r(i);var e=function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("q-layout",{ref:"pageLayout",attrs:{view:"lHh Lpr lFf"}},[o("q-layout-header",{attrs:{reveal:""}},[o("q-toolbar",{staticClass:"relative-position",attrs:{color:"white","text-color":"black"}},[o("q-toolbar-title",{staticClass:"q-ma-sm",staticStyle:{width:"110px"},attrs:{shrink:""}},[t._v("boid")]),o("div",{staticClass:"row justify-end full-width",staticStyle:{overflow:"auto"}},[o("div",{staticClass:"gt-md"},[o("q-btn",{attrs:{flat:"",color:"grey-8"},on:{click:function(i){t.quickScroll("video")}}},[t._v("video")]),o("q-btn",{attrs:{flat:"",color:"grey-8"},on:{click:function(i){t.quickScroll("teams")}}},[t._v("teams")]),o("q-btn",{attrs:{flat:"",color:"grey-8"},on:{click:function(i){t.quickScroll("science")}}},[t._v("science")]),o("q-btn",{attrs:{flat:"",color:"grey-8"},on:{click:function(i){t.quickScroll("power")}}},[t._v("power")]),o("q-btn",{attrs:{flat:"",color:"grey-8"},on:{click:function(i){t.quickScroll("token")}}},[t._v("token")]),o("q-btn",{attrs:{flat:"",color:"grey-8"},on:{click:function(i){t.quickScroll("timeline")}}},[t._v("timeline")]),o("q-btn",{attrs:{flat:"",color:"grey-8"},on:{click:function(i){t.quickScroll("team")}}},[t._v("team")]),o("q-btn",{attrs:{flat:"",color:"grey-8"},on:{click:function(i){t.quickScroll("faq")}}},[t._v("FAQ")])],1),o("q-btn",{attrs:{color:"green",outline:""},on:{click:function(i){t.openURL("https://app.boid.com")}}},[t._v("Go To App")]),o("q-btn",{staticClass:"lt-lg",attrs:{flat:"",color:"grey-8"}},[o("q-icon",{attrs:{name:"menu"}}),o("q-popover",{model:{value:t.NavMenu,callback:function(i){t.NavMenu=i},expression:"NavMenu"}},[o("q-list",[o("q-item",{attrs:{link:""},nativeOn:{click:function(i){t.quickScroll("video")}}},[t._v("Video")]),o("q-item",{attrs:{link:""},nativeOn:{click:function(i){t.quickScroll("teams")}}},[t._v("Teams")]),o("q-item",{attrs:{link:""},nativeOn:{click:function(i){t.quickScroll("science")}}},[t._v("Science")]),o("q-item",{attrs:{link:""},nativeOn:{click:function(i){t.quickScroll("power")}}},[t._v("Power")]),o("q-item",{attrs:{link:""},nativeOn:{click:function(i){t.quickScroll("token")}}},[t._v("Token")]),o("q-item",{attrs:{link:""},nativeOn:{click:function(i){t.quickScroll("timeline")}}},[t._v("Timeline")]),o("q-item",{attrs:{link:""},nativeOn:{click:function(i){t.quickScroll("team")}}},[t._v("Team")]),o("q-item",{attrs:{link:""},nativeOn:{click:function(i){t.quickScroll("faq")}}},[t._v("FAQ")])],1)],1)],1)],1)],1)],1),o("q-page-container",[o("router-view",{staticStyle:{height:"100vh"}})],1),o("q-modal",{ref:"videoModal",on:{show:function(i){t.videoModalOpen=!0},hide:function(i){t.videoModalOpen=!1}}},[o("div",[t.videoModalOpen?o("div",{staticClass:"q-video bg-black videocontainer"},[o("iframe",{attrs:{width:"100%",height:"90%",src:"https://www.youtube.com/embed/3-C5dxJvFMA?rel=0&amp;autoplay=1;fs=1;autohide=1;hd=1;modestbranding=1;",frameborder:"0",allowfullscreen:"",allow:"autoplay"}})]):t._e()]),o("div",{staticClass:"absolute-bottom row justify-center block",staticStyle:{height:"300px"}})])],1)},n=[];e._withStripped=!0;o("pIFo");var c=o("4IOb"),l={name:"LayoutDefault",data:function(){return{NavMenu:!1,videoModalOpen:!1,screenSize:{height:window.innerHeight,width:window.innerWidth}}},methods:{quickScroll:function(t){var i=this;this.$router.replace("/"),setTimeout(function(){return i.$router.replace("/#".concat(t))},100)},openURL:c["G"],logout:function(){}},mounted:function(){var t=this;this.$refs.pageLayout.$on("resize",function(i){t.screenSize=i,t.$root.$emit("resize",i)}),this.$root.$on("videoModal",function(i){i&&t.screenSize.width<770?t.openURL("https://www.youtube.com/watch?v=3-C5dxJvFMA"):i&&t.$q.platform.is.mobile?t.openURL("https://www.youtube.com/watch?v=3-C5dxJvFMA"):i?t.$refs.videoModal.show():t.$refs.videoModal.hide()})},watch:{videoModalOpen:function(t){t?this.$root.$emit("videoPlaying",!0):this.$root.$emit("videoPlaying",!1)}},props:[]},a=l,r=(o("PTxA"),o("KHd+")),s=Object(r["a"])(a,e,n,!1,null,null,null);i["default"]=s.exports}}]);