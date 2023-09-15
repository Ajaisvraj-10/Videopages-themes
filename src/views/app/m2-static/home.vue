
<template>
  <div class="main">
    <MainHeader></MainHeader>
    <div class="banners">
        <!--<video   loop="loop" autoplay  style="width: 100%; height: 80vh; object-fit: cover;">
            <source  src="https://vz-896b2506-892.b-cdn.net/d58571ca-a9cb-49bd-b870-7d658c1f31f3/play_360p.mp4" type="video/mp4">
            Your browser does not support HTML5 video. 
        </video>-->
        <img src="/m2/images/bg1.png" style="width: 100%; height: 80vh; object-fit: cover;">
        <div class="title-sec">
            <h6 class="text-12">Adventure • Rated for 3+</h6>
            <h4 class="">Hammy's Gold Pursuit</h4>
            <h6 style="line-height:26px;">An award-winning platform adventure game where you follow the village spirits in pursuit of folk’s stolen gold as you face dire challenges.</h6>
            <button class="button-site"><img src="/m2/images/play2.png">Play</button>
        </div>
 
    </div>
    <div class="main-section" style="margin-top:-50px;z-index:999;">
        <div class="horizontal-div my-5">
            <h6 class="slide-heading">Latest</h6>
            <div class="sliders">
                <div class="slider-child horizontal-slider">
                    <a class="hover-card"><img src="/m2/images/slide1.png"></a>
                    <h6>Anabelle</h6>
                </div>
                <div class="slider-child horizontal-slider">
                    <a class="hover-card"><img src="/m2/images/slide1.png"></a>
                    <h6>Anabelle</h6>
                </div>
                <div class="slider-child horizontal-slider">
                    <a class="hover-card"><img src="/m2/images/slide1.png"></a>
                    <h6>Anabelle</h6>
                </div>
                <div class="slider-child horizontal-slider">
                    <a class="hover-card"><img src="/m2/images/slide1.png"></a>
                    <h6>Anabelle</h6>
                </div>
                <div class="slider-child horizontal-slider">
                    <a class="hover-card"><img src="/m2/images/slide1.png"></a>
                    <h6>Anabelle</h6>
                </div>
                <div class="slider-child horizontal-slider">
                    <a class="hover-card"><img src="/m2/images/slide1.png"></a>
                    <h6>Anabelle</h6>
                </div>
            </div>
        </div>
        <div class="vertical-div my-5">
            <h6 class="slide-heading">Latest</h6>
            <div class="sliders">
                <div class="slider-child vertical-slider">
                    <a class="hover-card"><img src="/m2/images/slide1.png"></a>
                    <h6>Anabelle</h6>
                </div>
                <div class="slider-child vertical-slider">
                    <a class="hover-card"><img src="/m2/images/slide1.png"></a>
                    <h6>Anabelle</h6>
                </div>
                <div class="slider-child vertical-slider">
                    <a class="hover-card"><img src="/m2/images/slide1.png"></a>
                    <h6>Anabelle</h6>
                </div>
                <div class="slider-child vertical-slider">
                    <a class="hover-card"><img src="/m2/images/slide1.png"></a>
                    <h6>Anabelle</h6>
                </div>
                <div class="slider-child vertical-slider">
                    <a class="hover-card"><img src="/m2/images/slide1.png"></a>
                    <h6>Anabelle</h6>
                </div>
                <div class="slider-child vertical-slider">
                    <a class="hover-card"><img src="/m2/images/slide1.png"></a>
                    <h6>Anabelle</h6>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import MainHeader from '/src/views/app/m2/header'
export default {
  metaInfo: {
    title: "Home"
  },
  components:{
    MainHeader,
  },
  data() {
    return {
      
    };
  },
  mounted(){
  },
  methods: {
    
  },
};
</script>
<style scoped>
  @import '/m2/style/style.css';

</style>
