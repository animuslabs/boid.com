(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"F/06":function(t,o,i){},PTxA:function(t,o,i){"use strict";var e=i("F/06"),n=i.n(e);n.a},ez0Y:function(t,o,i){"use strict";i.r(o);var e=function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("q-layout",{ref:"pageLayout",attrs:{view:"lHh Lpr lFf"}},[i("q-layout-header",{attrs:{reveal:""}},[i("q-toolbar",{staticClass:"relative-position",attrs:{color:"white","text-color":"black"}},[i("q-toolbar-title",{staticClass:"q-ma-sm",staticStyle:{width:"110px"},attrs:{shrink:""}},[t._v("boid")]),i("div",{staticClass:"row justify-end full-width",staticStyle:{overflow:"auto"}},[i("div",{staticClass:"gt-md"},[i("q-btn",{attrs:{flat:"",color:"grey-8"},on:{click:function(o){t.quickScroll("video")}}},[t._v("video")]),i("q-btn",{attrs:{flat:"",color:"grey-8"},on:{click:function(o){t.quickScroll("teams")}}},[t._v("teams")]),i("q-btn",{attrs:{flat:"",color:"grey-8"},on:{click:function(o){t.quickScroll("science")}}},[t._v("science")]),i("q-btn",{attrs:{flat:"",color:"grey-8"},on:{click:function(o){t.quickScroll("power")}}},[t._v("power")]),i("q-btn",{attrs:{flat:"",color:"grey-8"},on:{click:function(o){t.quickScroll("token")}}},[t._v("token")]),i("q-btn",{attrs:{flat:"",color:"grey-8"},on:{click:function(o){t.quickScroll("timeline")}}},[t._v("timeline")]),i("q-btn",{staticClass:"on-left",attrs:{flat:"",color:"grey-8"},on:{click:function(o){t.quickScroll("faq")}}},[t._v("FAQ")]),i("q-btn",{staticClass:"on-left",attrs:{color:"blue-8"},on:{click:function(o){t.openURL("https://www.boid.com/statics/Boid-WhitePaper-v2.pdf")}}},[t._v("Whitepaper"),i("q-icon",{staticClass:"on-right",attrs:{name:"get_app"}})],1)],1),i("q-btn",{staticClass:"on-left",attrs:{color:"green",outline:""},on:{click:function(o){t.openURL("https://app.boid.com")}}},[t._v("Go To App")]),i("q-btn",{attrs:{color:"blue",outline:""},on:{click:function(o){t.openURL("https://github.com/boid-com/BoidDesktop/releases")}}},[t._v("Download")]),i("q-btn",{staticClass:"lt-lg",attrs:{flat:"",color:"grey-8"}},[i("q-icon",{attrs:{name:"menu"}}),i("q-popover",{model:{value:t.NavMenu,callback:function(o){t.NavMenu=o},expression:"NavMenu"}},[i("q-list",[i("q-item",{attrs:{link:""},nativeOn:{click:function(o){t.quickScroll("video")}}},[t._v("Video")]),i("q-item",{attrs:{link:""},nativeOn:{click:function(o){t.quickScroll("teams")}}},[t._v("Teams")]),i("q-item",{attrs:{link:""},nativeOn:{click:function(o){t.quickScroll("science")}}},[t._v("Science")]),i("q-item",{attrs:{link:""},nativeOn:{click:function(o){t.quickScroll("power")}}},[t._v("Power")]),i("q-item",{attrs:{link:""},nativeOn:{click:function(o){t.quickScroll("token")}}},[t._v("Token")]),i("q-item",{attrs:{link:""},nativeOn:{click:function(o){t.quickScroll("timeline")}}},[t._v("Timeline")]),i("q-item",{attrs:{link:""},nativeOn:{click:function(o){t.quickScroll("faq")}}},[t._v("FAQ")])],1)],1)],1)],1)],1)],1),i("q-page-container",[i("router-view",{staticStyle:{height:"100vh"}})],1),i("q-modal",{ref:"videoModal",on:{show:function(o){t.videoModalOpen=!0},hide:function(o){t.videoModalOpen=!1}}},[i("div",[t.videoModalOpen?i("div",{staticClass:"q-video bg-black videocontainer"},[i("iframe",{attrs:{width:"100%",height:"90%",src:"https://www.youtube.com/embed/3-C5dxJvFMA?rel=0&amp;autoplay=1;fs=1;autohide=1;hd=1;modestbranding=1;",frameborder:"0",allowfullscreen:"",allow:"autoplay"}})]):t._e()]),i("div",{staticClass:"absolute-bottom row justify-center block",staticStyle:{height:"300px"}})])],1)},n=[];e._withStripped=!0;i("pIFo");var c=i("4IOb"),l={name:"LayoutDefault",data:function(){return{NavMenu:!1,videoModalOpen:!1,screenSize:{height:window.innerHeight,width:window.innerWidth}}},methods:{quickScroll:function(t){var o=this;this.$router.replace("/"),setTimeout(function(){return o.$router.replace("/#".concat(t))},100)},openURL:c["G"],logout:function(){}},mounted:function(){var t=this;this.$refs.pageLayout.$on("resize",function(o){t.screenSize=o,t.$root.$emit("resize",o)}),this.$root.$on("videoModal",function(o){o&&t.screenSize.width<770?t.openURL("https://www.youtube.com/watch?v=3-C5dxJvFMA"):o&&t.$q.platform.is.mobile?t.openURL("https://www.youtube.com/watch?v=3-C5dxJvFMA"):o?t.$refs.videoModal.show():t.$refs.videoModal.hide()})},watch:{videoModalOpen:function(t){t?this.$root.$emit("videoPlaying",!0):this.$root.$emit("videoPlaying",!1)}},props:[]},a=l,r=(i("PTxA"),i("KHd+")),s=Object(r["a"])(a,e,n,!1,null,null,null);o["default"]=s.exports}}]);