<template>
    <div class="wrapper">
        <div class="slider">
            <div class="container">
                <div class="row">
                    <div class="span10 offset1">
                        <div class="flexslider">
                            <ul class="slides">
                                <li data-thumb="../../../static/1.jpg">
                                    <img :src="logo" width="100%" @click="imageHubu">
                                    <!-- <p class="flex-caption">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur.</p> -->
                                </li>
                                <li data-thumb="../../../static/5.jpg">
                                    <img src="../../../static/5.jpg" @click="imageChange">
                                    <!-- <p class="flex-caption">Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p> -->
                                </li>
                                <li data-thumb="../../../static/9.jpg">
                                    <img src="../../../static/9.jpg" @click="imageLocation">
                                    <!-- <p class="flex-caption">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur.</p> -->
                                </li>
                                <li data-thumb="../../../static/10.jpg">
                                    <img src="../../../static/10.jpg" @click="imageWeb">
                                    <!-- <p class="flex-caption">Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p> -->
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="text-align:center;clear:both"></div>
        <!-- <div class="news">
            <span class="newsHubu">
                湖大新闻
            </span>
        </div> -->
        </div>
        
   
</template>

<script>

import $ from 'jquery'
import '@/api/transition/transition'
export default {
    data(){
      return{
        logo: require('../../../static/1.jpg')
      };
    },
    mounted(){
        this.$nextTick(() => {
            $('.flexslider').flexslider({
                animation: "slide",
                controlNav: "thumbnails"
            });
        });
        // this.reflashPage()
        // $(window).on('load',function(){
            
        // });
    },
    methods:{
        // reflashPage(){
        //         let NewPage = '_empty' + '?time=' + new Date().getTime()/500;
        //         this.$router.push(NewPage);
        //         this.$router.go(-1);
        //     },
        imageChange(){
        window.open('http://www.hubu.edu.cn/index/hdyw.htm');
        },
        imageLocation(){
        window.open('http://www.hubu.edu.cn/xxgk/hdjj.htm');
        },
        imageHubu(){
        window.open('http://jwc.hubu.edu.cn/zljk/jxjh.htm')
        },
        imageWeb(){
        window.open('http://jwc.hubu.edu.cn/sjjx/sxsx.htm')
        }
    }
}
</script>

<style>
.wrapper{
    background: #fff;
    text-align: center;
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
    color: #888;
    font-size: 12px;

}
.container,.navbar-static-top .container,.navbar-fixed-top .container,.navbar-fixed-bottom .container{width:980px;}
.container{margin-right:auto;margin-left:auto;*zoom:1;}.container:before,.container:after{display:table;content:"";line-height:0;}

/* ----- Slider ----- */

.slider {
    margin: 0 auto;
}

.flexslider {
    margin-top: 45px;
    margin-bottom: 55px;
    border: 6px solid #fff;
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    border-radius: 0;
    -moz-box-shadow:
        0 5px 15px 0 rgba(0,0,0,.05),
        0 -5px 15px 0 rgba(0,0,0,.05);
    -webkit-box-shadow:
        0 5px 15px 0 rgba(0,0,0,.05),
        0 -5px 15px 0 rgba(0,0,0,.05);
    box-shadow:
        0 5px 15px 0 rgba(0,0,0,.05),
        0 -5px 15px 0 rgba(0,0,0,.05);
}

.flex-caption {
    position: absolute;
    bottom: 20px;
    max-width: 920px;
    padding: 10px 20px;
    margin: 0;
    background: #1d1d1d; /* browsers that don't support rgba */
    background: rgba(0, 0, 0, .7);
    font-size: 14px;
    line-height: 24px;
    color: #eaeaea;
    text-align: left;
    font-style: italic;
}
/*
 * jQuery FlexSlider v2.0
 * http://www.woothemes.com/flexslider/
 *
 * Copyright 2012 WooThemes
 * Free to use under the GPLv2 license.
 * http://www.gnu.org/licenses/gpl-2.0.html
 *
 * Contributing author: Tyler Smith (@mbmufffin)
 */

 
/* Browser Resets */
.flex-container a:active,
.flexslider a:active,
.flex-container a:focus,
.flexslider a:focus  {outline: none;}
.slides,
.flex-control-nav,
.flex-direction-nav {margin: 0; padding: 0; list-style: none;} 

/* FlexSlider Necessary Styles
*********************************/ 
.flexslider {margin: 0; padding: 0;}
.flexslider .slides > li {display: none; -webkit-backface-visibility: hidden;} /* Hide the slides before the JS is loaded. Avoids image jumping */
.flexslider .slides img {width: 100%; display: block;}
.flex-pauseplay span {text-transform: capitalize;}

/* Clearfix for the .slides element */
.slides:after {content: "."; display: block; clear: both; visibility: hidden; line-height: 0; height: 0;} 
html[xmlns] .slides {display: block;} 
* html .slides {height: 1%;}

/* No JavaScript Fallback */
/* If you are not using another script, such as Modernizr, make sure you
 * include js that eliminates this class on page load */
.no-js .slides > li:first-child {display: block;}


/* FlexSlider Default Theme
*********************************/
.flexslider {margin: 0 0 60px; background: #fff; border: 4px solid #fff; position: relative; -webkit-border-radius: 4px; -moz-border-radius: 4px; -o-border-radius: 4px; border-radius: 4px; box-shadow: 0 1px 4px rgba(0,0,0,.2); -webkit-box-shadow: 0 1px 4px rgba(0,0,0,.2); -moz-box-shadow: 0 1px 4px rgba(0,0,0,.2); -o-box-shadow: 0 1px 4px rgba(0,0,0,.2); zoom: 1;}
.flex-viewport {max-height: 2000px; -webkit-transition: all 1s ease; -moz-transition: all 1s ease; transition: all 1s ease;}
.loading .flex-viewport {max-height: 300px;}
.flexslider .slides {zoom: 1;}

.carousel li {margin-right: 5px}


/* Direction Nav */
.flex-direction-nav {*height: 0;}
.flex-direction-nav a {width: 60px; height: 60px; margin: -20px 0 0; display: block; background: url(img/slider-nav.png) no-repeat 0 0; position: absolute; top: 50%; z-index: 10; cursor: pointer; text-indent: -9999px; opacity: 0; -webkit-transition: all .3s ease;}
.flex-direction-nav .flex-next {background-position: 100% 0; right: -36px; }
.flex-direction-nav .flex-prev {left: -36px;}
.flexslider:hover .flex-next {opacity: 0.8; right: 15px;}
.flexslider:hover .flex-prev {opacity: 0.8; left: 15px;}
.flexslider:hover .flex-next:hover, .flexslider:hover .flex-prev:hover {opacity: 1;}
.flex-direction-nav .flex-disabled {opacity: .3!important; filter:alpha(opacity=30); cursor: default;}

/* Control Nav */
.flex-control-nav {width: 100%; position: absolute; bottom: -40px; text-align: center;}
.flex-control-nav li {margin: 0 6px; display: inline-block; zoom: 1; *display: inline;}
.flex-control-paging li a {width: 11px; height: 11px; display: block; background: #666; background: rgba(0,0,0,0.5); cursor: pointer; text-indent: -9999px; -webkit-border-radius: 20px; -moz-border-radius: 20px; -o-border-radius: 20px; border-radius: 20px; box-shadow: inset 0 0 3px rgba(0,0,0,0.3);}
.flex-control-paging li a:hover { background: #333; background: rgba(0,0,0,0.7); }
.flex-control-paging li a.flex-active { background: #000; background: rgba(0,0,0,0.9); cursor: default; }

.flex-control-thumbs {margin: 5px 0 0; position: static; overflow: hidden;}
.flex-control-thumbs li {width: 25%; float: left; margin: 0;}
.flex-control-thumbs img {width: 100%; display: block; opacity: .7; cursor: pointer;}
.flex-control-thumbs img:hover {opacity: 1;}
.flex-control-thumbs .flex-active {opacity: 1; cursor: default;}

@media screen and (max-width: 860px) {
  .flex-direction-nav .flex-prev {opacity: 1; left: 0;}
  .flex-direction-nav .flex-next {opacity: 1; right: 0;}
}
.news{
    display: inline-block;
    position: relative;
    top: -80px;
    width: 80%;
    height: 500px;
    background: #fff;
    /* border: 1px solid #000 */
}
.news .newsHubu{
    display: inline-block;
    position:absolute;
    left: 10px;
    top: 20px;
    font-size: 23px;
    font-weight: bold;

}
</style>
