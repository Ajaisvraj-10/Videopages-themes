
<template>
  <div class="main-content main-content-2">
    
    <div class="site-wrapper" :class="menu_click?'nav-active':''">   
            
            <header class="header-holder-2" >             
                <div class="menu-wrapper  d-flex align-items-center justify-content-between"> 
                    <div class="flex-align3">         
                        <div class="header-logo">
                            <a >
                                <img src="/videozone_web/images/logo.png" >
                            </a>               
                        </div>
                        <!--<div class="menu-home" >
                            <ul class="home-nav" >
                                <li>Home</li>
                                <li>Store</li>
                                <li>Channels</li>
                                <li>Categories</li>
                                <li>My Stuff</li>
                            </ul>

                        </div>
                        <div class="max-990 mx-3" @click="menu_click=!menu_click">
                                <h6 class="text-light text-14 font-weight-600">Browse <i class="fa fa-caret-down"></i></h6>
                        </div>-->
                    </div>
                    <div class="text-center header-right flex-align3" >
                            
                            <div class="search-input">
                                <img src="/videozone_web/images/search.svg" class="mx-1">
                                <input type="text" placeholder="search here....">
                            </div>
                          
                         
                            <div class="profile-sec">
                                <a class=" text-white flex-align3 mx-2" >
                                    <img src="/videozone_web/images/profile.png" style="width:28px!important;" class="">
                                    <h6 class="text-13  min-768">Arunghosh</h6>
                                    <i class="fa fa-caret-down text-light ml-2"></i>
                                </a>
                                <div class="profile-dropdown">
                                    <div class="profile-nav">
                                        <router-link :to="edit?'':{name:'home'}">
                                            <h6 class="text-14 py-2 ">Sign Out</h6>
                                        </router-link>
                                        <router-link :to="edit?'':{name:'plan'}">
                                            <h6 class="text-14 py-2 ">Plan</h6>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                          
                    </div>
                </div>
            </header> 
            
           
            <div id="content" class="site-content main-content-sec center-relative  " >
                    <div class="banners min-768">
                       
                        <b-carousel
                          id="carousel-1"
                          v-model="slide"
                          :interval="3000"
                          controls
                          indicators
                          background="#ababab"
                          img-width="1024"
                          img-height="480"
                         
                         
                        >
                              <b-carousel-slide img-src="/videozone_web/images/banner1.webp"
                              >
                              </b-carousel-slide>

                              <b-carousel-slide img-src="/videozone_web/images/banner2.webp"
                              >
                              </b-carousel-slide>

                              <b-carousel-slide img-src="/videozone_web/images/banner3.webp"
                              >
                              </b-carousel-slide>

                              <b-carousel-slide img-src="/videozone_web/images/banner4.webp"
                              >
                              </b-carousel-slide>
                        
                          
                        </b-carousel>

                    </div>
                    <div class="banners max-768">
                       
                        <b-carousel
                          id="carousel-1"
                          v-model="slide"
                          :interval="3000"
                          controls
                          indicators
                          background="#ababab"
                          img-width="1024"
                          img-height="480"
                         
                         
                        >
                       
                              <b-carousel-slide img-src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_CROW_UN_Belashuru_HC/8950edac-d8d7-42d8-8362-6baf0ef2a642._UR1280,600_SX3000_FMwebp_.jpeg"
                              >
                              </b-carousel-slide>

                              <b-carousel-slide img-src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_FantasticBeastsS3_Launch/16674109-f780-496e-bf29-4e15b19b325a._UR1280,600_SX3000_FMwebp_.jpeg"
                              >
                              </b-carousel-slide>

                              <b-carousel-slide img-src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_TopGunMaverick/e077f991-444e-4379-b93c-6e78d5379fb0._UR1280,600_SX3000_FMwebp_.jpeg"
                              >
                              </b-carousel-slide>

                              <b-carousel-slide img-src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_CROW_UN_PriyanOttathilanu_MM/f90020e6-9879-496d-97c2-1221366e0fd8._UR1280,600_SX3000_FMwebp_.jpeg"
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
                                <b-carousel-slide v-for="sort_movie in sort_movies.datas">
                                    <template #img>
                                        <div class="image-row">
                                            
                                            <div class="hover-modal image"v-for="movie in sort_movie" @click="current_movie=movie">
                                                <router-link :to="edit?'':{name:'video',params: { video_id: movie.id }}">
                                                <div class="position-relative" >
                                                    <img :src="movie.thumbnail">
                                                    <h6 class="prime">prime</h6>
                                                    <div class="hover-modal-div">
                                                       
                                                       <div class="small-details">
                                                            <div class="flex-align mb-2">
                                                                <div class="flex-align3 modal-icons">
                                                                    <i class="fa fa-play  text-white play"></i>
                                                                    <h5 class="text-12 text-white font-weight-600">Play</h5>
                                                                </div>
                                                                <div class="d-flex modal-icons">
                                                                    
                                                                    <i class="fa fa-plus text-white"></i>

                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="20px" width="20px" class="_2Z_ZKn"><defs></defs><path fill="currentColor" fill-rule="evenodd" d="M12,20 C10.152,20 8.455,19.367 7.1,18.314 L18.314,7.1 C19.367,8.455 20,10.152 20,12 C20,16.418 16.418,20 12,20 M4,12 C4,7.582 7.582,4 12,4 C13.848,4 15.545,4.633 16.9,5.686 L5.686,16.9 C4.633,15.545 4,13.848 4,12 M12,2 C6.477,2 2,6.477 2,12 C2,17.523 6.477,22 12,22 C17.523,22 22,17.523 22,12 C22,6.477 17.523,2 12,2" transform="translate(-2 -2)"></path></svg>
                                                                </div>
                                                                    
                                                                
                                                            </div>
                                                            <h5 class="text-11 text-info text-white font-weight-600">Included with Prime</h5>

                                                            <h5 class="text-14 font-weight-600 mt-1 text-white">{{movie.name}}</h5>

                                                            <h5 class="text-10 font-weight-600 mt-1 text-white">{{movie.description}}</h5>

                                                            <h5 class="text-10 font-weight-600 mt-1 text-white"><span class=" pr-2">98% match</span><span class=" pr-2">2022</span>2h 30m</h5>

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
                                <b-carousel-slide v-for="sort_movie in sort_movies.datas">
                                    <template #img>
                                        <div class="image-row">
                                            
                                            <div class="hover-modal image"v-for="movie in sort_movie" @click="current_movie=movie">
                                                <router-link :to="edit?'':{name:'video',params: { video_id: movie.id }}">
                                                <div class="position-relative" >
                                                    <img :src="movie.thumbnail">
                                                    <h6 class="prime">prime</h6>
                                                    <div class="hover-modal-div">
                                                       
                                                       <div class="small-details">
                                                            <div class="flex-align mb-2">
                                                                <div class="flex-align3 modal-icons">
                                                                    <i class="fa fa-play  text-white play"></i>
                                                                    <h5 class="text-12 text-white font-weight-600">Play</h5>
                                                                </div>
                                                                <div class="d-flex modal-icons">
                                                                    
                                                                    <i class="fa fa-plus"></i>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="20px" width="20px" class="_2Z_ZKn"><defs></defs><path fill="currentColor" fill-rule="evenodd" d="M12,20 C10.152,20 8.455,19.367 7.1,18.314 L18.314,7.1 C19.367,8.455 20,10.152 20,12 C20,16.418 16.418,20 12,20 M4,12 C4,7.582 7.582,4 12,4 C13.848,4 15.545,4.633 16.9,5.686 L5.686,16.9 C4.633,15.545 4,13.848 4,12 M12,2 C6.477,2 2,6.477 2,12 C2,17.523 6.477,22 12,22 C17.523,22 22,17.523 22,12 C22,6.477 17.523,2 12,2" transform="translate(-2 -2)"></path></svg>
                                                                </div>
                                                                    
                                                                
                                                            </div>
                                                            <h5 class="text-11 text-info text-white font-weight-600">Included with Prime</h5>

                                                            <h5 class="text-14 font-weight-600 mt-1 text-white">{{movie.name}}</h5>

                                                            <h5 class="text-10 font-weight-600 mt-1 text-white">{{movie.description}}</h5>

                                                            <h5 class="text-10 font-weight-600 mt-1 text-white"><span class=" pr-2">98% match</span><span class=" pr-2">2022</span>2h 30m</h5>

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
            <footer class="footer p-4" style="background-color:initial;">
                <div class="text-center mb-3">
                    <img src="/videozone_web/images/logo.png" width="100" style="width:100px!important;">
                    <div class="flex-align2 mb-2" style="flex-wrap: wrap;">
                        <h6 class="text-13 text-info px-2">Terms and Privacy </h6> 
                        <h6 class="text-13 text-info px-2">Notice </h6> 
                        <h6 class="text-13 text-info px-2">Send us feedback </h6> 
                        <h6 class="text-13 text-info px-2">Help </h6> 
                    </div>
                    <h6 class="text-13 text-light p-2">© 1996-2022, Videozone.com, Inc. or its affiliates </h6>
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
        current_page:{},
        menu_click:false,
        movies:[],
        first_movie:{},
        sort_movies2:{datas:[]},
        sort_movies:{datas:[]},
        current_movie:{language_detail:{},category_detail:{},movie_spec:[]},

    };
  },
  mounted(){
    if(this.edit){
    }else{
        this.edit=false
        this.blocks = [{},{},{}]
        this.getPage()
    }
    this.getMovies()
    var self = this
    document.getElementsByClassName("main-content")[0].addEventListener("scroll", () => {
        self.handleScroll()
    });
  },
  methods: {
    getMovies(filter='') {
      if(filter!=''){
        if(this.movie.type!='Select Type' && this.current_category.id){
          this.filter_movies = []
          filter = '?category='+this.current_category.id+'&type='+this.movie.type
        }else{
          return false
        }
      }
      var headers = new Headers();
      headers.append("Authorization", "Token "+this.$root.token);
      fetch(this.api_url+'/movies/movies/'+filter, {
          method : 'get',
          headers: headers,
      })
      .then((response) => {
          return response.json()
      })
      .then((jsonData) => {
        if(filter){
          this.filter_movies = jsonData
        }else{
          this.movies = jsonData
          if(this.movies.length>0){
            this.first_movie = this.movies[0]
          }
          this.sort_movies = this.pagination(this.movies,6)
          this.sort_movies2 = this.pagination2(this.movies,4)
        }
      })
    },
    pagination2(items,page=10){
      var datas=[];
      var key=0;
      var index=0;
      items.forEach(function(value,index2){
        if((index%page)==0 || index==0){
          datas[key]=[]
        }
        datas[key].push(value)
        index = index+1
        if((index%page)==0){
          key++;
          index = 0
            if(key%2==0){
                page=4
            }else{
                page=3
            }
        }
      })
      key=datas.length
      if(datas.length<=1){key=0}
      return {total:key,datas:datas}
    },
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
      })
    },
    selectContent(block){
        if(this.edit){
            this.blocks.forEach(function(blk){
                blk.is_edit = false
            })
            block.is_edit=true
            this.$emit('selectedContent', block)
        }
    }
  }

};
</script>
<style scoped>
  @import '/videozone_web/style/style.css';
  @import '/videozone_web/style/style-2.css';

</style>
