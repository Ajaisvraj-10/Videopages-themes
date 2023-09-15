
<template>
  <div class="main-content main-content-2" >
    
    <div class="site-wrapper" :class="menu_click?'nav-active':''">   
            
            <header class="header-holder-2" >             
                <div class="menu-wrapper  d-flex align-items-center justify-content-between"> 
                    <div class="flex-align3">         
                        <div class="header-logo">
                            <a >
                                <img src="/videostar_mobile/images/logo.png" class="logo">
                            </a>               
                        </div>
                        <!--<div class="menu-home" >
                            <ul class="home-nav" >
                                <li class="active-nav">Home</li>
                                <li>TV Shows</li>
                                <li>Movies</li>
                                <li>Web Series</li>
                                <li>Movies</li>
                            </ul>

                        </div>
                        <div class="max-990 mx-3" @click="menu_click=!menu_click">
                                <h6 class="text-light text-14 font-weight-600">Browse <i class="fa fa-caret-down"></i></h6>
                        </div>-->
                    </div>
                    <div class="text-center header-right flex-align3" style="gap:20px;">
                            
                            <div class="search-input">
                                <img src="/videostar_mobile/images/search.svg" class="ml-2">
                                <input type="text" placeholder="search for Movies, Shows, channels etc.">
                            </div>
                            <div v-if="$root.token">
                                <button class="btn login-btn mr-2" style="background-color: initial;color: white;font-size: 13px;font-weight: 500;border: 1px solid white;border-radius: 5px;" @click="signOut()">LOGOUT</button>
                                <router-link :to="edit?'':{name:'plan'}">
                                    <button class="btn" style="background-color: #8230c6;color: white;font-size: 13px;font-weight: 500;border: 1px solid #8230c6;border-radius: 5px;"><img src="/videostar_mobile/images/king.png" style="width:22px;" class="mr-1">UPGRADE PLAN</button>
                                </router-link>
                            </div>
                            <div v-else>
                                <router-link :to="edit?'':{name:'sign-in'}">
                                    <button class="btn login-btn mr-2" style="background-color: initial;color: white;font-size: 13px;font-weight: 500;border: 1px solid white;border-radius: 5px;">LOGIN</button>
                                </router-link>
                                <router-link :to="edit?'':{name:'plan'}">

                                    <button class="btn" style="background-color: #8230c6;color: white;font-size: 13px;font-weight: 500;border: 1px solid #8230c6;border-radius: 5px;"><img src="/videostar_mobile/images/king.png" style="width:22px;" class="mr-1">BUY PLAN</button>
                                </router-link>
                            </div>

                          
                         
                            <!--<div class="profile-sec">
                                <a class=" text-white flex-align3 mx-2" >
                                    <img src="/images/profile.png" style="width:28px!important;" class="mr-2">
                                    <h6 class="text-13  min-768">Arunghosh</h6>
                                    <i class="fa fa-caret-down text-light ml-2"></i>
                                </a>
                                <div class="profile-dropdown">
                                    <div class="profile-nav">
                                        <router-link to="home">
                                            <h6 class="text-14">Sign out</h6>
                                        </router-link>
                                    </div>
                                </div>
                            </div>-->
                          
                    </div>
                </div>
            </header> 
            
           
            <div id="content" class="site-content main-content-sec center-relative  " v-if="start">
                    <div class="banner-top-div" style="height:30px;background: #0f0617;"></div>
                    <div class="banners ">
                       
                        <b-carousel
                          id="carousel-1"
                          :interval="3000"
                          controls
                          indicators
                          background="#0f0617"
                          img-width="1024"
                          img-height="480"
                         
                         
                        >
                        
                              <b-carousel-slide img-src="/videostar_mobile/images/banner1.webp"
                              >
                              </b-carousel-slide>

                              <b-carousel-slide img-src="/videostar_mobile/images/banner2.webp"
                              >
                              </b-carousel-slide>

                              <b-carousel-slide img-src="/videostar_mobile/images/banner3.webp"
                              >
                              </b-carousel-slide>

                              <b-carousel-slide img-src="/videostar_mobile/images/banner4.webp"
                              >
                              </b-carousel-slide>
                        
                          
                        </b-carousel>


                    </div>
                   

                <div class="second-section main-page-sec ">
                    
                    <div class="image-grid" @click="selectContent(blocks[0])" :class="blocks[0].is_edit?'selected_content':''" :id="'blocks_'+blocks[0].id" v-show="blocks[0].status">
                        <div class="position-relative" >
                            <div class="flex-align" >
                                <h6 class="section-sidehead text-white  pl-2">{{blocks[0].value}}</h6>
                                <h6 class="text-more mr-2"> </h6>

                            </div>
                            <b-carousel
                                id="movie1"
                                class="slider-movie  py-0"
                                :interval="4000"
                                controls>
                                <b-carousel-slide v-for="sort_movie in blocks[0].movies.datas">
                                    <template #img>
                                        <div class="image-row">
                                            
                                            <div class="hover-modal image"v-for="movie in sort_movie" @click="current_movie=movie">
                                                <router-link :to="edit?'':{name:'video',params: { type: slugify(movie.type), category: slugify(movie.category_detail.name), slug: movie.slug }, query: {language:movie.language_detail.name}}">
                                                <div class="position-relative" >
                                                    <img :src="api_url+movie.thumbnail">
                                                    
                                                    <div class="hover-modal-div">
                                                       
                                                       <div class="small-details">
                                                            
                                                           

                                                            <h5 class="text-14 font-weight-600 mt-1 text-dark2">{{movie.name}}</h5>

                                                            <!--<h5 class="text-10 font-weight-600 mt-1 text-dark">{{movie.description}}</h5>-->

                                                            <h5 class="text-10 font-weight-600 mt-1 text-dark"><span class=" pr-2">98% match</span><span class=" pr-2">2022</span>2h 30m</h5>

                                                            <div class="flex-align3 mt-2">
                                                                <button class="rounded py-1 flex-align3 modal-icons" style="border:1px solid gray;background-color:initial;">
                                                                    <i class="fa fa-play  text-dark " style="font-size:10px;"></i>
                                                                    <h5 class="text-10 text-dark font-weight-600">Watch</h5>
                                                                </button>
                                                                <button class="rounded py-1 flex-align3 modal-icons" style="border:none;background-color:initial;">
                                                                    <i class="fa fa-share-alt  text-dark " style="font-size:10px;"></i>
                                                                    <h5 class="text-10 text-dark font-weight-600">Share</h5>
                                                                </button>
                                                               
                                                                    
                                                                
                                                            </div>

                                                       </div>
                                                    </div>
                                                </div>
                                                </router-link>
                                            </div> 
                                            
                                        </div>    
                                    </template>
                                </b-carousel-slide>
                            </b-carousel>
                        </div>

                    </div>

                    <div class="image-grid" @click="selectContent(blocks[1])" :class="blocks[1].is_edit?'selected_content':''" :id="'blocks_'+blocks[1].id" v-show="blocks[1].status">
                        <div class="position-relative" >
                            <div class="flex-align" >
                                <h6 class="section-sidehead text-white  pl-2">{{blocks[1].value}}</h6>
                                <h6 class="text-more mr-2"> </h6>

                            </div>
                            <b-carousel
                                id="movie1"
                                class="slider-movie  py-0"
                                :interval="4000"
                                controls>
                                <b-carousel-slide v-for="sort_movie in blocks[1].movies.datas">
                                    <template #img>
                                        <div class="image-row">
                                            
                                            <div class="hover-modal image"v-for="movie in sort_movie" @click="current_movie=movie">
                                                <router-link :to="edit?'':{name:'video',params: { type: slugify(movie.type), category: slugify(movie.category_detail.name), slug: movie.slug }, query: {language:movie.language_detail.name}}">
                                                <div class="position-relative" >
                                                    <img :src="api_url+movie.thumbnail">
                                                    
                                                    <div class="hover-modal-div">
                                                       
                                                       <div class="small-details">
                                                            
                                                           

                                                            <h5 class="text-14 font-weight-600 mt-1 text-dark2">{{movie.name}}</h5>

                                                            <!--<h5 class="text-10 font-weight-600 mt-1 text-dark">{{movie.description}}</h5>-->

                                                            <h5 class="text-10 font-weight-600 mt-1 text-dark"><span class=" pr-2">98% match</span><span class=" pr-2">2022</span>2h 30m</h5>

                                                            <div class="flex-align3 mt-2">
                                                                <button class="rounded py-1 flex-align3 modal-icons" style="border:1px solid gray;background-color:initial;">
                                                                    <i class="fa fa-play  text-dark " style="font-size:10px;"></i>
                                                                    <h5 class="text-10 text-dark font-weight-600">Watch</h5>
                                                                </button>
                                                                <button class="rounded py-1 flex-align3 modal-icons" style="border:none;background-color:initial;">
                                                                    <i class="fa fa-share-alt  text-dark " style="font-size:10px;"></i>
                                                                    <h5 class="text-10 text-dark font-weight-600">Share</h5>
                                                                </button>
                                                               
                                                                    
                                                                
                                                            </div>

                                                       </div>
                                                    </div>
                                                </div>
                                                </router-link>
                                            </div> 
                                            
                                        </div>    
                                    </template>
                                </b-carousel-slide>
                            </b-carousel>
                        </div>

                    </div>
                   
                </div>
                   

  
            </div>
            <footer class="footer py-4 px-5" >
                <div class="flex-align">
                    <div class="flex-align3" style="gap:10px;">
                        <h6 class="text-14">Download Apps</h6>
                        <img src="/videostar_mobile/images/play_store.png">
                        <img src="/videostar_mobile/images/app_store.png">

                    </div>
                    <div class="flex-align3 social2" >
                        <h6 class="text-14 mr-2">Connect with us</h6>
                        <a><i class="fa fa-facebook"></i></a>
                        <a><i class="fa fa-instagram"></i></a>
                        <a><i class="fa fa-twitter"></i></a>
                        <a><i class="fa fa-youtube"></i></a>


                    </div>
                </div>
                <div class="text-center mb-3">
                    <img src="/videostar_mobile/images/logo.png" class="logo"  style="width:100px!important;">
                    <div class="flex-align2 mb-2" style="flex-wrap: wrap;">
                        <h6 class="text-13 text-info px-2">Terms and Privacy </h6> 
                        <h6 class="text-13 text-info px-2">Notice </h6> 
                        <h6 class="text-13 text-info px-2">Send us feedback </h6> 
                        <h6 class="text-13 text-info px-2">Help </h6> 
                    </div>
                    <h6 class="text-13 text-light p-2">© 1996-2022, videostar_mobile.com, Inc. or its affiliates </h6>
                </div>
            </footer>
    </div>
  </div>
</template>
<script>

export default {
  props: ['edit','blocks','current_block'],
  metaInfo: {
    title: "Main"
  },
  data() {
    return {
        start:false,
        current_page:{},
        menu_click:false,
        movies:[],
        current_movie:{language_detail:{},category_detail:{},movie_spec:[]},
      

    };
  },
  mounted(){
    if(this.edit){
        this.start = true
    }else{
        this.edit=false
        this.blocks = [{},{},{}]
        this.getPage()
    }
    var self = this
    document.getElementsByClassName("main-content")[0].addEventListener("scroll", () => {
        self.handleScroll()
    });
  },
  methods: {
    handleScroll () {
      const currentScrollPosition = document.getElementsByClassName("main-content")[0]
          .scrollTop
      if (currentScrollPosition < 0) {
        return 0
      }
      this.background_start = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    },
    getPage() {
      var headers = new Headers();
      headers.append("Authorization", "Token "+this.$root.token);
      fetch(this.api_url+'/content/pages_contents/?theme='+theme_name+'&page=/main', {
          method : 'get',
          headers: headers,
      })
      .then((response) => {
          return response.json()
      })
      .then((jsonData) => {
          this.current_page = jsonData
          this.blocks = jsonData.blocks
          this.blocks[0].movies = this.paginationMovies(this.blocks[0].movies,6)
          this.blocks[1].movies = this.paginationMovies(this.blocks[1].movies,6)
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
  @import '/videostar_mobile/style/style.css';
  @import '/videostar_mobile/style/style-2.css';



</style>
