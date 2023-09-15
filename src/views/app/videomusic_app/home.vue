
<template>
  <div class="main-content main-content-2" :class="background_start?'':'ott-scroll'">
    
    <div class="site-wrapper" :class="menu_click?'nav-active':''">   

            <MainHeader :edit="edit" :blocks="blocks" :current_block="current_block"></MainHeader>
           
            <div id="content" class="site-content main-content-sec center-relative  " v-if="start">
                    
                    <div class="banners ">
                       
                        <b-carousel
                          id="carousel-1"
                          :interval="3000"
                           controlls
                          indicators
                          img-width="1024"
                          img-height="480"
                         
                         
                        >

                            <b-carousel-slide v-for="banner in banners" :img-src="banner.image">

                                <div @click="banner.link?$router.push(banner.link):''" style="position:absolute;bottom:-20px;left:-20%;z-index:9999;width:140%;height:140vh" :style="banner.link?'cursor:pointer':''">

                                </div>
                            </b-carousel-slide>
                        
                          
                        </b-carousel>


                    </div>
                   

                <div class="second-section main-page-sec mt-2">
                    
                    
                    <div class="image-grid">
                        <div class="flex-align mb-1" >
                            <h6 class="section-sidehead text-white">Category</h6>
                            <h6 class="text-more mr-2"> </h6>
                        </div>
                        <div class="video-container" >
                                
                                <div class="video-items">
                                    <router-link to="video">
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
                        </div>
                        
                    </div>
                    <div class="image-grid">
                        <div class="flex-align mb-1" >
                            <h6 class="section-sidehead text-white">Category</h6>
                            <h6 class="text-more mr-2"> </h6>
                        </div>
                        <div class="video-container" >
                                
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
           
    </div>
  </div>
</template>
<script>
import MainHeader from '/src/views/app/videomusic_app/header'
export default {
  props: ['edit','blocks','current_block'],
  metaInfo: {
    title: "Main"
  },
  components:{
    MainHeader,
  },
  data() {
    return {
        start:false,
        current_page:{},
        banners:[],
        current_movie:{language_detail:{},category_detail:{},movie_spec:[]},
         background_start:true,
        lastScrollPosition: 0,
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
    var self = this
    document.getElementsByClassName("main-content-2")[0].addEventListener("scroll", () => {
        self.handleScroll()
    }); 
  },
  methods: {
    handleScroll () {
      const currentScrollPosition = document.getElementsByClassName("main-content-2")[0]
          .scrollTop
      if (currentScrollPosition < 0) {
        return 0
      }
      this.background_start = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
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
                this.blocks[i].movies = this.paginationMovies(this.blocks[i].movies,this.blocks[i].movies.length)
              }
            }
          this.start = true
      })
    },
    selectContent(block){
        if(this.edit){
            this.$emit('selectedContent', block)
        }
    }
  }

};
</script>
<style scoped>
  @import '/videomusic_app/style/style.css';
  @import '/videomusic_app/style/style-2.css';


.video-container{
    display:flex;
    overflow-x:scroll;
   
    width:100%;
    scroll-snap-type:x mandatory;
    scroll-padding:20px;
    gap:10px;
}
.video-items{
    flex:0 0 65%;
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

</style>
