(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["128b6aeb"],{"48f9":function(t,e,i){},7521:function(t,e,i){"use strict";var o=i("48f9"),n=i.n(o);n.a},"7b3d":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-layout",{ref:"pageLayout",attrs:{view:"lHh Lpr lFf"}},[i("q-layout-header",{attrs:{reveal:""}},[i("q-toolbar",{staticClass:"relative-position",attrs:{color:"white","text-color":"black"}},[i("q-toolbar-title",{staticClass:"q-ma-sm",staticStyle:{width:"110px"},attrs:{shrink:""}},[t._v("boid")]),i("div",{staticClass:"row justify-end full-width",staticStyle:{overflow:"auto"}},[i("div",{staticClass:"gt-md"},[i("q-btn",{staticClass:"on-left",attrs:{color:"blue-8"},on:{click:function(e){t.openURL("https://www.boid.com/statics/Boid-WhitePaper-v2.pdf")}}},[t._v("Whitepaper"),i("q-icon",{staticClass:"on-right",attrs:{name:"get_app"}})],1)],1),i("q-btn",{staticClass:"on-left",attrs:{color:"green",outline:""},on:{click:function(e){t.openURL("https://universe.boid.com")}}},[t._v("Boidverse")]),i("q-btn",{staticClass:"lt-lg",attrs:{flat:"",color:"grey-8"}},[i("q-icon",{attrs:{name:"menu"}}),i("q-popover",{model:{value:t.NavMenu,callback:function(e){t.NavMenu=e},expression:"NavMenu"}},[i("q-list",[i("q-item",{attrs:{link:""},nativeOn:{click:function(e){t.quickScroll("video")}}},[t._v("Video")]),i("q-item",{attrs:{link:""},nativeOn:{click:function(e){t.quickScroll("teams")}}},[t._v("Teams")]),i("q-item",{attrs:{link:""},nativeOn:{click:function(e){t.quickScroll("science")}}},[t._v("Science")]),i("q-item",{attrs:{link:""},nativeOn:{click:function(e){t.quickScroll("power")}}},[t._v("Power")]),i("q-item",{attrs:{link:""},nativeOn:{click:function(e){t.quickScroll("token")}}},[t._v("Token")]),i("q-item",{attrs:{link:""},nativeOn:{click:function(e){t.quickScroll("timeline")}}},[t._v("Timeline")]),i("q-item",{attrs:{link:""},nativeOn:{click:function(e){t.quickScroll("faq")}}},[t._v("FAQ")])],1)],1)],1)],1)],1)],1),i("q-page-container",[i("router-view",{staticStyle:{height:"100vh"}})],1),i("q-modal",{ref:"videoModal",on:{show:function(e){t.videoModalOpen=!0},hide:function(e){t.videoModalOpen=!1}}},[i("div",[t.videoModalOpen?i("div",{staticClass:"q-video bg-black videocontainer"},[i("iframe",{attrs:{width:"100%",height:"90%",src:"https://www.youtube.com/embed/3-C5dxJvFMA?rel=0&amp;autoplay=1;fs=1;autohide=1;hd=1;modestbranding=1;",frameborder:"0",allowfullscreen:"",allow:"autoplay"}})]):t._e()]),i("div",{staticClass:"absolute-bottom row justify-center block",staticStyle:{height:"300px"}})])],1)},n=[];o._withStripped=!0;i("a481");var a=i("96a1"),l={name:"LayoutDefault",data:function(){return{NavMenu:!1,videoModalOpen:!1,screenSize:{height:window.innerHeight,width:window.innerWidth}}},methods:{quickScroll:function(t){var e=this;this.$router.replace("/"),setTimeout(function(){return e.$router.replace("/#".concat(t))},100)},openURL:a["a"],logout:function(){}},mounted:function(){var t=this;this.$refs.pageLayout.$on("resize",function(e){t.screenSize=e,t.$root.$emit("resize",e)}),this.$root.$on("videoModal",function(e){e&&t.screenSize.width<770?t.openURL("https://www.youtube.com/watch?v=3-C5dxJvFMA"):e&&t.$q.platform.is.mobile?t.openURL("https://www.youtube.com/watch?v=3-C5dxJvFMA"):e?t.$refs.videoModal.show():t.$refs.videoModal.hide()})},watch:{videoModalOpen:function(t){t?this.$root.$emit("videoPlaying",!0):this.$root.$emit("videoPlaying",!1)}},props:[]},c=l,r=(i("7521"),i("2877")),s=Object(r["a"])(c,o,n,!1,null,null,null);s.options.__file="default.vue";e["default"]=s.exports},"96a1":function(t,e,i){"use strict";var o=i("a60d");e["a"]=function(t,e){if(o["a"].is.cordova&&navigator&&navigator.app)return navigator.app.loadUrl(t,{openExternal:!0});var i=window.open(t,"_blank");if(i)return i.focus(),i;e&&e()}}}]);