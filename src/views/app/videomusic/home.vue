
<template>
  <div class="main-content main-content-2">
    
    <div class="site-wrapper" >

            <MainHeader :edit="edit" :blocks="blocks" :current_block="current_block"></MainHeader>

            <div  class="site-content main-content-sec center-relative  " v-if="start">
                
                <!--<div class="banner-2 mt-3">
                    <div class="slide-arrow">
                        <div class="slide-arrow-left" @click="slideBanner('previous')">
                            <h6><i class="fa fa-angle-left"></i></h6>

                        </div>
                        <div class="slide-arrow-right" @click="slideBanner('next')">
                            <h6><i class="fa fa-angle-right"></i></h6>
                        </div>
                    </div>
                    
                    <div class="banner-2-slids" :style="'left:'+banner_slide.left+'%'">
                        <div class="banner-item" v-if="banners.length>0">
                            <img :src="banners[banners.length-1].image">
                        </div>
                        <div class="banner-item" v-for="(banner,key) in banners" @click="banner.link?$router.push(banner.link):''">
                            <img :src="banner.image">
                        </div>
                        <div class="banner-item" v-if="banners.length>0">
                            <img :src="banners[0].image">
                        </div>
                    </div>
                    <div class="slide-dot">
                        <div class="dot" v-for="(banner,key) in banners" :class="(key+1)==banner_slide.current?'dot-active':''" @click="clcikBannerDott(key+1)"></div>
                    </div>


                </div>-->

                <div class="second-section main-page-sec " >
                    
                    <div class="image-grid" v-b-tooltip.hover title="We can scroll the page horizontally by SHIFT key + scroll through mouse.">
                        <div class="flex-align mb-1" >
                            <h6 class="section-sidehead text-white">Category</h6>
                            <h6 class="text-more mr-2"> </h6>
                        </div>
                        <div class="video-container" >
                                <div class="video-items">
                                    <router-link to="/video">
                                    <div class="video-child">
                                        <div class="video-item-img">
                                            <img src="https://cdn.cinematerial.com/p/297x/nlvsyuid/uncharted-british-movie-poster-md.jpg?v=1645370145" style="" class="rounded">
                                            <div><i class="fa fa-play"></i></div>
                                        </div>
                                        
                                        <div class="video-items-details">
                                            <h5 class="text-16 font-weight-500 text-white">Pushpa</h5>
                                            <h5 class="text-12 font-weight-400 mt-1 text-light">Malayalam</h5>
                                            <h5 class="mt-1 text-light" style="font-size:10px;">
                                                <span class=" pr-2">98% match</span><span class=" pr-2">2022</span>2h 30m
                                            </h5>
                                        </div>
                                    </div>
                                    </router-link> 
                                    <div class="video-child">
                                        <div class="video-item-img">
                                            <img src="https://cdn.cinematerial.com/p/297x/nlvsyuid/uncharted-british-movie-poster-md.jpg?v=1645370145" style="" class="rounded">
                                            <div><i class="fa fa-play"></i></div>
                                        </div>
                                        
                                        <div class="video-items-details">
                                            <h5 class="text-16 font-weight-500 text-white">Pushpa</h5>
                                            <h5 class="text-12 font-weight-400 mt-1 text-light">Malayalam</h5>
                                            <h5 class="mt-1 text-light" style="font-size:10px;">
                                                <span class=" pr-2">98% match</span><span class=" pr-2">2022</span>2h 30m
                                            </h5>
                                        </div>
                                    </div> 
                                    <div class="video-child">
                                        <div class="video-item-img">
                                            <img src="https://cdn.cinematerial.com/p/297x/nlvsyuid/uncharted-british-movie-poster-md.jpg?v=1645370145" style="" class="rounded">
                                            <div><i class="fa fa-play"></i></div>
                                        </div>
                                        
                                        <div class="video-items-details">
                                            <h5 class="text-16 font-weight-500 text-white">Pushpa</h5>
                                            <h5 class="text-12 font-weight-400 mt-1 text-light">Malayalam</h5>
                                            <h5 class="mt-1 text-light" style="font-size:10px;">
                                                <span class=" pr-2">98% match</span><span class=" pr-2">2022</span>2h 30m
                                            </h5>
                                        </div>
                                    </div> 
                                </div>
                                <div class="video-items">
                                    <div class="video-child">
                                        <div class="video-item-img">
                                            <img src="https://cdn.cinematerial.com/p/297x/nlvsyuid/uncharted-british-movie-poster-md.jpg?v=1645370145" style="" class="rounded">
                                            <div><i class="fa fa-play"></i></div>
                                        </div>
                                        
                                        <div class="video-items-details">
                                            <h5 class="text-16 font-weight-500 text-white">Pushpa</h5>
                                            <h5 class="text-12 font-weight-400 mt-1 text-light">Malayalam</h5>
                                            <h5 class="mt-1 text-light" style="font-size:10px;">
                                                <span class=" pr-2">98% match</span><span class=" pr-2">2022</span>2h 30m
                                            </h5>
                                        </div>
                                    </div> 
                                    <div class="video-child">
                                        <div class="video-item-img">
                                            <img src="https://cdn.cinematerial.com/p/297x/nlvsyuid/uncharted-british-movie-poster-md.jpg?v=1645370145" style="" class="rounded">
                                            <div><i class="fa fa-play"></i></div>
                                        </div>
                                        
                                        <div class="video-items-details">
                                            <h5 class="text-16 font-weight-500 text-white">Pushpa</h5>
                                            <h5 class="text-12 font-weight-400 mt-1 text-light">Malayalam</h5>
                                            <h5 class="mt-1 text-light" style="font-size:10px;">
                                                <span class=" pr-2">98% match</span><span class=" pr-2">2022</span>2h 30m
                                            </h5>
                                        </div>
                                    </div> 
                                    <div class="video-child">
                                        <div class="video-item-img">
                                            <img src="https://cdn.cinematerial.com/p/297x/nlvsyuid/uncharted-british-movie-poster-md.jpg?v=1645370145" style="" class="rounded">
                                            <div><i class="fa fa-play"></i></div>
                                        </div>
                                        
                                        <div class="video-items-details">
                                            <h5 class="text-16 font-weight-500 text-white">Pushpa</h5>
                                            <h5 class="text-12 font-weight-400 mt-1 text-light">Malayalam</h5>
                                            <h5 class="mt-1 text-light" style="font-size:10px;">
                                                <span class=" pr-2">98% match</span><span class=" pr-2">2022</span>2h 30m
                                            </h5>
                                        </div>
                                    </div> 
                                </div>
                                <div class="video-items">
                                    <div class="video-child">
                                        <div class="video-item-img">
                                            <img src="https://cdn.cinematerial.com/p/297x/nlvsyuid/uncharted-british-movie-poster-md.jpg?v=1645370145" style="" class="rounded">
                                            <div><i class="fa fa-play"></i></div>
                                        </div>
                                        
                                        <div class="video-items-details">
                                            <h5 class="text-16 font-weight-500 text-white">Pushpa</h5>
                                            <h5 class="text-12 font-weight-400 mt-1 text-light">Malayalam</h5>
                                            <h5 class="mt-1 text-light" style="font-size:10px;">
                                                <span class=" pr-2">98% match</span><span class=" pr-2">2022</span>2h 30m
                                            </h5>
                                        </div>
                                    </div> 
                                    <div class="video-child">
                                        <div class="video-item-img">
                                            <img src="https://cdn.cinematerial.com/p/297x/nlvsyuid/uncharted-british-movie-poster-md.jpg?v=1645370145" style="" class="rounded">
                                            <div><i class="fa fa-play"></i></div>
                                        </div>
                                        
                                        <div class="video-items-details">
                                            <h5 class="text-16 font-weight-500 text-white">Pushpa</h5>
                                            <h5 class="text-12 font-weight-400 mt-1 text-light">Malayalam</h5>
                                            <h5 class="mt-1 text-light" style="font-size:10px;">
                                                <span class=" pr-2">98% match</span><span class=" pr-2">2022</span>2h 30m
                                            </h5>
                                        </div>
                                    </div> 
                                    <div class="video-child">
                                        <div class="video-item-img">
                                            <img src="https://cdn.cinematerial.com/p/297x/nlvsyuid/uncharted-british-movie-poster-md.jpg?v=1645370145" style="" class="rounded">
                                            <div><i class="fa fa-play"></i></div>
                                        </div>
                                        
                                        <div class="video-items-details">
                                            <h5 class="text-16 font-weight-500 text-white">Pushpa</h5>
                                            <h5 class="text-12 font-weight-400 mt-1 text-light">Malayalam</h5>
                                            <h5 class="mt-1 text-light" style="font-size:10px;">
                                                <span class=" pr-2">98% match</span><span class=" pr-2">2022</span>2h 30m
                                            </h5>
                                        </div>
                                    </div> 
                                </div>
                                <div class="video-items">
                                    <div class="video-child">
                                        <div class="video-item-img">
                                            <img src="https://cdn.cinematerial.com/p/297x/nlvsyuid/uncharted-british-movie-poster-md.jpg?v=1645370145" style="" class="rounded">
                                            <div><i class="fa fa-play"></i></div>
                                        </div>
                                        
                                        <div class="video-items-details">
                                            <h5 class="text-16 font-weight-500 text-white">Pushpa</h5>
                                            <h5 class="text-12 font-weight-400 mt-1 text-light">Malayalam</h5>
                                            <h5 class="mt-1 text-light" style="font-size:10px;">
                                                <span class=" pr-2">98% match</span><span class=" pr-2">2022</span>2h 30m
                                            </h5>
                                        </div>
                                    </div> 
                                    <div class="video-child">
                                        <div class="video-item-img">
                                            <img src="https://cdn.cinematerial.com/p/297x/nlvsyuid/uncharted-british-movie-poster-md.jpg?v=1645370145" style="" class="rounded">
                                            <div><i class="fa fa-play"></i></div>
                                        </div>
                                        
                                        <div class="video-items-details">
                                            <h5 class="text-16 font-weight-500 text-white">Pushpa</h5>
                                            <h5 class="text-12 font-weight-400 mt-1 text-light">Malayalam</h5>
                                            <h5 class="mt-1 text-light" style="font-size:10px;">
                                                <span class=" pr-2">98% match</span><span class=" pr-2">2022</span>2h 30m
                                            </h5>
                                        </div>
                                    </div> 
                                    <div class="video-child">
                                        <div class="video-item-img">
                                            <img src="https://cdn.cinematerial.com/p/297x/nlvsyuid/uncharted-british-movie-poster-md.jpg?v=1645370145" style="" class="rounded">
                                            <div><i class="fa fa-play"></i></div>
                                        </div>
                                        
                                        <div class="video-items-details">
                                            <h5 class="text-16 font-weight-500 text-white">Pushpa</h5>
                                            <h5 class="text-12 font-weight-400 mt-1 text-light">Malayalam</h5>
                                            <h5 class="mt-1 text-light" style="font-size:10px;">
                                                <span class=" pr-2">98% match</span><span class=" pr-2">2022</span>2h 30m
                                            </h5>
                                        </div>
                                    </div> 
                                </div>
                                <div class="video-items">
                                    <div class="video-child">
                                        <div class="video-item-img">
                                            <img src="https://cdn.cinematerial.com/p/297x/nlvsyuid/uncharted-british-movie-poster-md.jpg?v=1645370145" style="" class="rounded">
                                            <div><i class="fa fa-play"></i></div>
                                        </div>
                                        
                                        <div class="video-items-details">
                                            <h5 class="text-16 font-weight-500 text-white">Pushpa</h5>
                                            <h5 class="text-12 font-weight-400 mt-1 text-light">Malayalam</h5>
                                            <h5 class="mt-1 text-light" style="font-size:10px;">
                                                <span class=" pr-2">98% match</span><span class=" pr-2">2022</span>2h 30m
                                            </h5>
                                        </div>
                                    </div> 
                                    <div class="video-child">
                                        <div class="video-item-img">
                                            <img src="https://cdn.cinematerial.com/p/297x/nlvsyuid/uncharted-british-movie-poster-md.jpg?v=1645370145" style="" class="rounded">
                                            <div><i class="fa fa-play"></i></div>
                                        </div>
                                        
                                        <div class="video-items-details">
                                            <h5 class="text-16 font-weight-500 text-white">Pushpa</h5>
                                            <h5 class="text-12 font-weight-400 mt-1 text-light">Malayalam</h5>
                                            <h5 class="mt-1 text-light" style="font-size:10px;">
                                                <span class=" pr-2">98% match</span><span class=" pr-2">2022</span>2h 30m
                                            </h5>
                                        </div>
                                    </div> 
                                    <div class="video-child">
                                        <div class="video-item-img">
                                            <img src="https://cdn.cinematerial.com/p/297x/nlvsyuid/uncharted-british-movie-poster-md.jpg?v=1645370145" style="" class="rounded">
                                            <div><i class="fa fa-play"></i></div>
                                        </div>
                                        
                                        <div class="video-items-details">
                                            <h5 class="text-16 font-weight-500 text-white">Pushpa</h5>
                                            <h5 class="text-12 font-weight-400 mt-1 text-light">Malayalam</h5>
                                            <h5 class="mt-1 text-light" style="font-size:10px;">
                                                <span class=" pr-2">98% match</span><span class=" pr-2">2022</span>2h 30m
                                            </h5>
                                        </div>
                                    </div> 
                                </div>
                                <div class="video-items">
                                    <div class="video-child">
                                        <div class="video-item-img">
                                            <img src="https://cdn.cinematerial.com/p/297x/nlvsyuid/uncharted-british-movie-poster-md.jpg?v=1645370145" style="" class="rounded">
                                            <div><i class="fa fa-play"></i></div>
                                        </div>
                                        
                                        <div class="video-items-details">
                                            <h5 class="text-16 font-weight-500 text-white">Pushpa</h5>
                                            <h5 class="text-12 font-weight-400 mt-1 text-light">Malayalam</h5>
                                            <h5 class="mt-1 text-light" style="font-size:10px;">
                                                <span class=" pr-2">98% match</span><span class=" pr-2">2022</span>2h 30m
                                            </h5>
                                        </div>
                                    </div> 
                                    <div class="video-child">
                                        <div class="video-item-img">
                                            <img src="https://cdn.cinematerial.com/p/297x/nlvsyuid/uncharted-british-movie-poster-md.jpg?v=1645370145" style="" class="rounded">
                                            <div><i class="fa fa-play"></i></div>
                                        </div>
                                        
                                        <div class="video-items-details">
                                            <h5 class="text-16 font-weight-500 text-white">Pushpa</h5>
                                            <h5 class="text-12 font-weight-400 mt-1 text-light">Malayalam</h5>
                                            <h5 class="mt-1 text-light" style="font-size:10px;">
                                                <span class=" pr-2">98% match</span><span class=" pr-2">2022</span>2h 30m
                                            </h5>
                                        </div>
                                    </div> 
                                    <div class="video-child">
                                        <div class="video-item-img">
                                            <img src="https://cdn.cinematerial.com/p/297x/nlvsyuid/uncharted-british-movie-poster-md.jpg?v=1645370145" style="" class="rounded">
                                            <div><i class="fa fa-play"></i></div>
                                        </div>
                                        
                                        <div class="video-items-details">
                                            <h5 class="text-16 font-weight-500 text-white">Pushpa</h5>
                                            <h5 class="text-12 font-weight-400 mt-1 text-light">Malayalam</h5>
                                            <h5 class="mt-1 text-light" style="font-size:10px;">
                                                <span class=" pr-2">98% match</span><span class=" pr-2">2022</span>2h 30m
                                            </h5>
                                        </div>
                                    </div> 
                                </div>
                                <div class="video-items">
                                    <div class="video-child">
                                        <div class="video-item-img">
                                            <img src="https://cdn.cinematerial.com/p/297x/nlvsyuid/uncharted-british-movie-poster-md.jpg?v=1645370145" style="" class="rounded">
                                            <div><i class="fa fa-play"></i></div>
                                        </div>
                                        
                                        <div class="video-items-details">
                                            <h5 class="text-16 font-weight-500 text-white">Pushpa</h5>
                                            <h5 class="text-12 font-weight-400 mt-1 text-light">Malayalam</h5>
                                            <h5 class="mt-1 text-light" style="font-size:10px;">
                                                <span class=" pr-2">98% match</span><span class=" pr-2">2022</span>2h 30m
                                            </h5>
                                        </div>
                                    </div> 
                                    <div class="video-child">
                                        <div class="video-item-img">
                                            <img src="https://cdn.cinematerial.com/p/297x/nlvsyuid/uncharted-british-movie-poster-md.jpg?v=1645370145" style="" class="rounded">
                                            <div><i class="fa fa-play"></i></div>
                                        </div>
                                        
                                        <div class="video-items-details">
                                            <h5 class="text-16 font-weight-500 text-white">Pushpa</h5>
                                            <h5 class="text-12 font-weight-400 mt-1 text-light">Malayalam</h5>
                                            <h5 class="mt-1 text-light" style="font-size:10px;">
                                                <span class=" pr-2">98% match</span><span class=" pr-2">2022</span>2h 30m
                                            </h5>
                                        </div>
                                    </div> 
                                    <div class="video-child">
                                        <div class="video-item-img">
                                            <img src="https://cdn.cinematerial.com/p/297x/nlvsyuid/uncharted-british-movie-poster-md.jpg?v=1645370145" style="" class="rounded">
                                            <div><i class="fa fa-play"></i></div>
                                        </div>
                                        
                                        <div class="video-items-details">
                                            <h5 class="text-16 font-weight-500 text-white">Pushpa</h5>
                                            <h5 class="text-12 font-weight-400 mt-1 text-light">Malayalam</h5>
                                            <h5 class="mt-1 text-light" style="font-size:10px;">
                                                <span class=" pr-2">98% match</span><span class=" pr-2">2022</span>2h 30m
                                            </h5>
                                        </div>
                                    </div> 
                                </div>
                        </div>
                        
                    </div>

                </div>

            </div>
            
            <MainFooter :edit="edit" :blocks="blocks" :current_block="current_block"></MainFooter>
    </div>
  </div>
</template>
<script>
import MainHeader from '/src/views/app/videomusic/header'
import MainFooter from '/src/views/app/videomusic/footer'
export default {
  props: ['edit','blocks','current_block'],
  metaInfo: {
    title: "Main"
  },
  components:{
    MainHeader,
    MainFooter,
  },
  data() {
    return {
        start:false,
        current_page:{},
        banners:[],
        banner_slide: {left:-91.5,banners:0,current:1},
        current_movie:{language_detail:{},category_detail:{},movie_spec:[]},

    };
  },
  mounted(){
    if(this.$route.query.payment){
        this.showAlert('Plan purchased successfully!')
    }
    if(this.edit){
        this.start = true
    }else{
        this.edit=false
        this.blocks = [{},{},{}]
        this.getPage()
    }
    this.getBanners()

   
   
  },
  methods: {
    
   

    slideBanner(move){
        if(move=='next'){
            if(this.banner_slide.current>=this.banner_slide.banners){
                this.banner_slide.left= -91.5
                this.banner_slide.current = 1
            }else{
                this.banner_slide.left=this.banner_slide.left-94
                this.banner_slide.current++
            }
        }else{
            if(this.banner_slide.current<=1){
                this.banner_slide.left= (this.banner_slide.banners*-94)+91.5
                this.banner_slide.current = this.banner_slide.banners
            }else{
                this.banner_slide.left=this.banner_slide.left+94
                this.banner_slide.current--
            }
        }
    },
    clcikBannerDott(position){
        this.banner_slide.left= (position*-94)+91.5
        this.banner_slide.current = position
    },
    getBanners() {
      var headers = new Headers();
      headers.append("Authorization", "Token "+this.$root.token);
      fetch(this.api_url+'/customer/banners/?theme_name='+theme_name, {
          method : 'get',
          headers: headers,
      })
      .then((response) => {
          return response.json()
      })
      .then((jsonData) => {
          this.banners = jsonData
          this.banner_slide.banners = jsonData.length
      })
    },
    getPage() {
      var headers = new Headers();
      headers.append("Authorization", "Token "+this.$root.token);
      fetch(this.api_url+'/content/pages_contents/?theme='+theme_name+'&page=/', {
          method : 'get',
          headers: headers,
      })
      .then((response) => {
          return response.json()
      })
      .then((jsonData) => {
          this.current_page = jsonData
          this.blocks = jsonData.blocks
            for(var i=0;i<this.blocks.length;i++){
              if(this.blocks[i].movie_type!='None'){
                this.blocks[i].movies = this.paginationMovies(this.blocks[i].movies,9)
              }
            }
          this.start = true
      })
    },
    selectContent(block){
        if(this.edit){
            this.$emit('selectedContent', block)
        }
    },


  }

};
</script>
<style scoped>
  @import '/videomusic/style/style.css';
  @import '/videomusic/style/style-2.css';



</style>


<style>
.banner-2{
    height:400px;
    margin-bottom:50px;
   
    flex-wrap: nowrap;
    position:relative;
}
.banner-2 img{ 
    width:100%!important;
    height: 100%!important;
    }
.banner-2-slids{
    position:absolute;
    left:-91.5%;
     display: flex;
    width: 10000px;
    flex-wrap: nowrap;
    transition: 1s;
    height:100%;
}
.banner-item {
    width: 93.7vw;
    padding:0 8px;
    transition:1s;
}
.banner-item img {
    width: 100%;
    height:400px;
    object-fit:cover;
    
    border-radius:5px;
}
.slide-arrow {
    position: absolute;
    left: 10px;
    right: 10px;
   
    display: flex;
    justify-content: space-between;
    top: 50%;
    transform: translateY(-50%);
    z-index: 99;
}
.slide-arrow h6{
   
    background-color:#0000007a;
    border-radius:50%;
    width:50px;
    height:50px;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;

}
.slide-dot{
    position: absolute;
    bottom:-50px;
    left:50%;
   
    transform: translateX(-50%);

    display:flex;
    gap:8px;
}
.dot{
    width:8px;
    height:8px;
    background-color:gray;
    border-radius:50%;
}
.dot-active{
    background-color:white;
    
}










.video-container{
    display:flex;
    overflow-x:scroll;
   
    width:100%;
    scroll-snap-type:x mandatory;
    scroll-padding:20px;
    gap:10px;
}
.video-items{
    flex:0 0 22%;
    padding:10px;
    padding-left:0;
    padding-bottom:15px;
    scroll-snap-align:start;
    gap:15px;
    display:flex;
    flex-direction:column;
}
.video-child{
    display:flex;
    gap:10px;
    cursor:pointer;
}
.video-item-img{
    width:55px;
    height:55px;
    position:relative;
    
}
.video-item-img img{
    width:55px;
    height:55px;
    object-fit:cover;
}

.video-item-img div{
    position:absolute;
    top:0;
    background-color:black;
    width:100%;
    height:100%;
  
    display:flex;
    align-items:center;
    justify-content:center;
    opacity:0;
    transition:.2s;

}
.video-child:hover .video-item-img div{
    opacity:.7;
}
@media screen and (max-width: 1200px) {
    .video-items {
    flex: 0 0 28%;
    }
}
@media screen and (max-width: 990px) {
    .video-items {
    flex: 0 0 34%;
    }
}
@media screen and (max-width: 768px) {
    .video-items {
    flex: 0 0 40%;
    }
}
@media screen and (max-width: 540px) {
    .video-items {
    flex: 0 0 70%;
    }
}
</style>