
<template>
  <div class="main-content">
    
    <div class="site-wrapper">   
            <b-modal id="video-modal" size="lg" hide-header hide-footer>
                <img src="/main/images/close.png" class="close-modal" @click="$bvModal.hide('video-modal');current_movie.message=''">
                <div class="video-in-modal position-relative" v-if="current_movie.message=='play'">
                  <iframe :src="'https://iframe.mediadelivery.net/embed/'+libary_id+'/'+current_movie.video.video_guid+'?autoplay=true'" loading="lazy" style="border: none;height: 400px; width: 100%;" allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowfullscreen="true"></iframe>
                </div>
                <div class="video-in-modal position-relative" v-else>
                    <img :src="current_movie.thumbnail" class="w-100">
                    <div class="overlay-in-video">
                        <div class="video-controls mb-2">
                            <div class="d-flex modal-icons-2">
                                <h6 class="text-14" @click="current_movie.message='play'">
                                    <i class="fa fa-play mr-2"></i>Play
                                </h6>
                                <h6 class="text-14">
                                    <i class="fa fa-plus"></i>
                                </h6>
                                <h6 class="text-14">
                                    <i class="fa fa-thumbs-up"></i>
                                </h6>

                            </div>
                                
                            <h6 class=" cursor-pointer text-white" ><i class="fa fa-volume-up"></i>  </h6>
                        </div>
                    </div>
                </div>
                <div class="vide-description  p-3">
                    <div class="row mx-0 ">
                        <div class="col-md-6">
                            <h5>
                                2022 <span class="rounded border px-1 mx-2">A</span> 2h 12m <span class="rounded border px-1 mx-2">HD</span>
                            </h5>
                        </div>
                        <div class="col-md-6">
                            <h6 v-for="movie_spec in current_movie.specs"><span class="mr-2">{{movie_spec.label}}:</span> {{movie_spec.name}}</h6>


                            <h6><span class="mr-2">Genres:</span> {{current_movie.language_detail.name}} Language {{current_movie.type}}, {{current_movie.category_detail.name}}</h6>
                            <h6><span class="mr-2">This movie is:</span> {{current_movie.description}}</h6>
                        </div>
                    </div>

                    <div class="second-section mb-2" v-for="sort_movie in sort_movies.datas">
                        <hr> 
                        <div class="image-grid">
                            <div class="flex-align mb-2">
                                <h6 class="section-sidehead text-white pl-2">TV Shows & Movies in India</h6>
                                <h6 class="text-more">Explore More <i class="fa fa-angle-right"></i></h6>

                            </div>
                          <div class="image-row">
                            <div class=" col-md-2 col-4" v-for="movie in sort_movie" @click="current_movie=movie">
                                <img :src="movie.thumbnail" height="100%" style="object-fit:cover;">
                            </div> 
                          </div> 
                         

                        </div> 
                    </div>
                </div>

            </b-modal>
            <b-modal id="explore-modal" size="lg" hide-header hide-footer>
                <img src="/main/images/close.png" class="close-modal" @click="$bvModal.hide('explore-modal')">
                
                <div class="vide-description rounded p-3">
                    <div class="row mx-0">
                        <h1 class="text-white p-5 mx-auto font-weight-800 text-40">  Hindi Movies & Shows</h1>
                    </div>
                    <hr>
                    <div class="second-section mb-2">
                   
                        <div class="image-grid">
                            <div class="flex-align mb-2">
                                <h6 class="section-sidehead text-white pl-3">TV Shows & Movies in India</h6>
                               

                            </div>
                          <div class="row m-0">
                            <div class=" col-md-3 col-4 my-3">
                                <img src="https://www.nowrunning.com/content/movie/2013/Drishyam/bg1.jpg" height="100%" style="object-fit:cover;">
                              

                                
                            </div> 
                            <div class=" col-md-3 col-4 my-3">
                                <img src="https://movieposters2.com/images/1614171-b.jpg" height="100%" style="object-fit:cover;">
                               
                            </div>  
                            
                            <div class=" col-md-3 col-4 my-3">
                                <img src="https://pbs.twimg.com/media/FUYriQnaMAA5gMM?format=jpg&name=large" height="100%" style="object-fit:cover;">
                                
                            </div>  
                            <div class=" col-md-3 col-4 my-3">
                                <img src="https://live.staticflickr.com/65535/49137122002_7b7185b2a7_b.jpg" height="100%" style="object-fit:cover;">
                                
                            </div>  
                            <div class=" col-md-3 col-4 my-3">
                                <img src="https://live.staticflickr.com/65535/49137122002_7b7185b2a7_b.jpg" height="100%" style="object-fit:cover;">
                                
                            </div> 
                            <div class=" col-md-3 col-4 my-3">
                                <img src="https://movieposters2.com/images/1614171-b.jpg" height="100%" style="object-fit:cover;">
                               
                            </div> 
                            <div class=" col-md-3 col-4 my-3">
                                <img src="https://www.nowrunning.com/content/movie/2013/Drishyam/bg1.jpg" height="100%" style="object-fit:cover;">
                              

                                
                            </div> 
                            <div class=" col-md-3 col-4 my-3">
                                <img src="https://movieposters2.com/images/1614171-b.jpg" height="100%" style="object-fit:cover;">
                               
                            </div>  
                            
                            <div class=" col-md-3 col-4 my-3">
                                <img src="https://pbs.twimg.com/media/FUYriQnaMAA5gMM?format=jpg&name=large" height="100%" style="object-fit:cover;">
                                
                            </div>  
                            <div class=" col-md-3 col-4 my-3">
                                <img src="https://live.staticflickr.com/65535/49137122002_7b7185b2a7_b.jpg" height="100%" style="object-fit:cover;">
                                
                            </div>  
                            <div class=" col-md-3 col-4 my-3">
                                <img src="https://live.staticflickr.com/65535/49137122002_7b7185b2a7_b.jpg" height="100%" style="object-fit:cover;">
                                
                            </div> 
                            <div class=" col-md-3 col-4 my-3">
                                <img src="https://movieposters2.com/images/1614171-b.jpg" height="100%" style="object-fit:cover;">
                               
                            </div> 
                           
                          </div> 
                         

                        </div>  
                    </div>
                    <hr>
                    <div class="second-section mb-2">
                   
                        <div class="image-grid">
                            <div class="flex-align mb-2">
                                <h6 class="section-sidehead text-white pl-3">TV Shows & Movies in India</h6>
                               

                            </div>
                          <div class="row m-0">
                            <div class=" col-md-3 col-4 my-3">
                                <img src="https://www.nowrunning.com/content/movie/2013/Drishyam/bg1.jpg" height="100%" style="object-fit:cover;">
                              

                                
                            </div> 
                            <div class=" col-md-3 col-4 my-3">
                                <img src="https://movieposters2.com/images/1614171-b.jpg" height="100%" style="object-fit:cover;">
                               
                            </div>  
                            
                            <div class=" col-md-3 col-4 my-3">
                                <img src="https://pbs.twimg.com/media/FUYriQnaMAA5gMM?format=jpg&name=large" height="100%" style="object-fit:cover;">
                                
                            </div>  
                            <div class=" col-md-3 col-4 my-3">
                                <img src="https://live.staticflickr.com/65535/49137122002_7b7185b2a7_b.jpg" height="100%" style="object-fit:cover;">
                                
                            </div>  
                            <div class=" col-md-3 col-4 my-3">
                                <img src="https://live.staticflickr.com/65535/49137122002_7b7185b2a7_b.jpg" height="100%" style="object-fit:cover;">
                                
                            </div> 
                            <div class=" col-md-3 col-4 my-3">
                                <img src="https://movieposters2.com/images/1614171-b.jpg" height="100%" style="object-fit:cover;">
                               
                            </div> 
                            <div class=" col-md-3 col-4 my-3">
                                <img src="https://www.nowrunning.com/content/movie/2013/Drishyam/bg1.jpg" height="100%" style="object-fit:cover;">
                              

                                
                            </div> 
                            <div class=" col-md-3 col-4 my-3">
                                <img src="https://movieposters2.com/images/1614171-b.jpg" height="100%" style="object-fit:cover;">
                               
                            </div>  
                            
                            <div class=" col-md-3 col-4 my-3">
                                <img src="https://pbs.twimg.com/media/FUYriQnaMAA5gMM?format=jpg&name=large" height="100%" style="object-fit:cover;">
                                
                            </div>  
                            <div class=" col-md-3 col-4 my-3">
                                <img src="https://live.staticflickr.com/65535/49137122002_7b7185b2a7_b.jpg" height="100%" style="object-fit:cover;">
                                
                            </div>  
                            <div class=" col-md-3 col-4 my-3">
                                <img src="https://live.staticflickr.com/65535/49137122002_7b7185b2a7_b.jpg" height="100%" style="object-fit:cover;">
                                
                            </div> 
                            <div class=" col-md-3 col-4 my-3">
                                <img src="https://movieposters2.com/images/1614171-b.jpg" height="100%" style="object-fit:cover;">
                               
                            </div> 
                           
                          </div> 
                         

                        </div>  
                    </div>
                    
                    
                </div>

            </b-modal>
            <header class="header-holder-2" :style="background_start?'background-color:transparent':'background-color:#060606'">             
                <div class="menu-wrapper  d-flex align-items-center justify-content-between">             
                    <div class="header-logo">
                        <a >
                            <img src="/main/images/logo.png" alt="Seppo">
                        </a>               
                    </div>

                  

                    
                        
                    <div class="toggle-holder" @click="menu_click=!menu_click">
                        <div id="toggle">
                            <div class="first-menu-line"></div>
                            <div class="second-menu-line"></div>
                            <div class="third-menu-line"></div>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="menu-holder" :style="menu_click?'right:0':'right:-100%'">
                            <nav id="header-main-menu">
                                <ul class="main-menu sm sm-clean">
                                    <li class="active">
                                        <a >Home</a>
                                    </li>
                                    <li>
                                        <a >TV Shows</a>
                                    </li>
                                    <li>
                                        <a >Movies</a>
                                    </li>
                                    <li>
                                        <a >New & Popular</a>
                                    </li>
                                    <li>
                                        <a >My List</a>
                                    </li>
                                    
                                
                                </ul>
                                
                            </nav>                       
                        </div>
                        <div class="search-icon">
                            <i class="fa fa-search ml-4"@click="search_click=true"></i>
                            <div class="searchbar" :style="search_click?'top:0':'top:-100%'">
                                <div class="input-groups d-flex align-items-center">
                                    <div class="input-language-buttons">
                                        <button class="btn btn-dark mx-2 my-1">English Movies</button>
                                        <button class="btn btn-dark mx-2 my-1">Malayalam Movies</button>
                                        <button class="btn btn-dark mx-2 my-1">Hindi Movies</button>
                                        <button class="btn btn-dark mx-2 my-1">Tamil Movies</button>
                                    </div>

                                    <input placeholder="search movies, tv shows, games">
                                </div>
                                <div class="searchbar-icon" @click="search_click=false">
                                    <i class="fa fa-search"></i>
                                </div>

                            </div>
                        </div>
                        <div class="ml-3 margin-1024">
                                       <img src="/main/images/user_1.png" class="ml-3 cursor-pointer" style="width:38px!important;" v-b-toggle.profile>
                                        <b-sidebar id="profile" right bg-variant="dark" text-variant="light"  shadow>
                                              <div class="pl-4 pr-2 py-5 my-2">
                                               
                                                <h6 class="mb-4 text-white text-15 d-flex align-items-center">
                                                    <img src="/main/images/user_1.png" class="mr-3" style="width:26px!important;">
                                                    Nithul kp
                                                </h6>
                                                <h6 class="mb-4 text-white text-15 d-flex align-items-center">
                                                    <img src="/main/images/user_1.png" class="mr-3" style="width:26px!important;">
                                                    Arungosh
                                                </h6>
                                                <h6 class="mb-4 text-white text-15 d-flex align-items-center">
                                                     <i class="fa fa-edit  mr-3" style="width:26px;font-size:26px;"></i> 
                                                    Manage Profiles
                                                </h6>
                                                <h6 class="mb-4 text-white text-15 d-flex align-items-center">
                                                     <i class="fa fa-user-circle  mr-3" style="width:26px;font-size:26px;"></i> 
                                                    Account
                                                </h6>
                                                <h6 class="mb-4 text-white text-15 d-flex align-items-center">
                                                    <i class="fa fa-question-circle  mr-3" style="width:26px;font-size:28px;"></i> 
                                                    Help Center
                                                </h6>
                                               
                                                <hr>
                                                <h6 class="my-4 text-danger text-20">
                                                    <router-link :to="{name:'home'}">
                                                        <i class="fa fa-sign-out mr-2"></i>Sign Out
                                                    </router-link>

                                                </h6>

                                              </div>
                                        </b-sidebar>
                        </div>

                    </div>

                               
                   
                                            
                  
                   
                </div>
            </header> 
            <div class=" position-relative" v-if="first_movie.id">
                    <img :src="first_movie.thumbnail" class="w-100 banner-vid">
                    
                   
                    <div class="overlay-in-video-2">
                    </div>
                    <div class="overlay-in-video px-lg-5 px-4">
                       
                        <div class="video-controls mb-2">
                            <div>
                                <img :src="first_movie.thumbnail" class="name-tag" >

                                <div class="d-flex modal-icons-2" v-b-modal.video-modal @click="current_movie=first_movie;current_movie.message='play'">
                                    <h6 class="text-14">
                                        <i class="fa fa-play mr-2"></i>Play
                                    </h6>
                                    <h6 class="text-14" v-b-modal.video-modal @click="current_movie=first_movie;current_movie.message=''">
                                        <i class="fa fa-info mr-2"></i>More Info
                                    </h6>
                                   
                                </div>
                            </div>
                                
                            <h6 class=" cursor-pointer text-white" ><i class="fa fa-volume-up"></i>  </h6>
                        </div>
                    </div>
            </div>
            
            <div id="content" class="site-content center-relative main-page-sec" style="margin-top: -10%;">



                <div class="first-section mb-2">
                   
                    <div class="image-grid">
                    <h6 class="section-sidehead text-white pl-2 mb-2">TV Shows & Movies in India</h6>
                      <div class="image-row" v-for="(sort_movie,key) in sort_movies2.datas">
                        <div class="hover-modal image" :class="'image-0'+(key+1)" v-for="movie in sort_movie" v-b-modal.video-modal @click="current_movie=movie">
                            <img :src="movie.thumbnail">
                            <div class="hover-modal-div">
                               
                               <div class="small-details">
                                    <div class="flex-align mb-2">
                                        <div class="d-flex modal-icons">
                                            <i class="fa fa-play"></i>
                                            <i class="fa fa-plus"></i>
                                            <i class="fa fa-thumbs-up"></i>

                                        </div>
                                            
                                        <h6 class=" cursor-pointer text-white more-details" v-b-modal.video-modal><span>More Details </span><i class="fa fa-angle-down"></i>  </h6>
                                    </div>
                                    <h6 class=" mt-1 text-white">{{movie.name}}</h6>
                                    <h6 class=" mt-1 text-white">2h 30m</h6>
                                    <h6 class=" mt-1 text-white">{{movie.description}}</h6>

                               </div>

                                
                            </div>

                            
                        </div> 
                      </div> 

                    </div>  
                </div>
                <div class="second-section mb-2">
                   
                    <div class="image-grid">
                    <div class="flex-align">
                        <h6 class="section-sidehead text-white pl-2">New Releases</h6>
                        <h6 class="text-more mr-2" v-b-modal.explore-modal>Explore More <i class="fa fa-angle-right"></i></h6>

                    </div>
                    <b-carousel
                        id="movie1"
                        class="mb-4"
                        :interval="4000"
                        controls>
                        <b-carousel-slide v-for="sort_movie in sort_movies.datas">
                            <template #img>
                                <div class="image-row">
                                    <div class="hover-modal image" v-b-modal.video-modal v-for="movie in sort_movie" @click="current_movie=movie">
                                        <img :src="movie.thumbnail">
                                        <div class="hover-modal-div">
                                           
                                           <div class="small-details">
                                                <div class="flex-align mb-2">
                                                    <div class="d-flex modal-icons">
                                                        <i class="fa fa-play"></i>
                                                        <i class="fa fa-plus"></i>
                                                        <i class="fa fa-thumbs-up"></i>

                                                    </div>
                                                        
                                                    <h6 class=" cursor-pointer text-white more-details"><span>More Details </span><i class="fa fa-angle-down"></i>  </h6>
                                                </div>
                                                <h6 class=" mt-1 text-white">{{movie.name}}</h6>
                                                <h6 class=" mt-1 text-white">2h 30m</h6>
                                                <h6 class=" mt-1 text-white">{{movie.description}}</h6>

                                           </div>

                                            
                                        </div>

                                        
                                    </div> 
                                </div>    
                            </template>
                        </b-carousel-slide>
                    </b-carousel>
                    <div class="flex-align">
                        <h6 class="section-sidehead text-white pl-2">Movies and TV shows</h6>
                        <h6 class="text-more mr-2" v-b-modal.explore-modal>Explore More <i class="fa fa-angle-right"></i></h6>

                    </div>
                    <b-carousel
                        id="movie2"
                        class="mb-4"

                        :interval="4000"
                        controls>
                        <b-carousel-slide v-for="sort_movie in sort_movies.datas">
                            <template #img>
                                <div class="image-row">
                                    <div class="hover-modal image" v-b-modal.video-modal v-for="movie in sort_movie" @click="current_movie=movie">
                                        <img :src="movie.thumbnail">
                                        <div class="hover-modal-div">
                                           
                                           <div class="small-details">
                                                <div class="flex-align mb-2">
                                                    <div class="d-flex modal-icons">
                                                        <i class="fa fa-play"></i>
                                                        <i class="fa fa-plus"></i>
                                                        <i class="fa fa-thumbs-up"></i>

                                                    </div>
                                                        
                                                    <h6 class=" cursor-pointer text-white more-details"><span>More Details </span><i class="fa fa-angle-down"></i>  </h6>
                                                </div>
                                                <h6 class=" mt-1 text-white">{{movie.name}}</h6>
                                                <h6 class=" mt-1 text-white">2h 30m</h6>
                                                <h6 class=" mt-1 text-white">{{movie.description}}</h6>

                                           </div>

                                            
                                        </div>

                                        
                                    </div> 
                                </div>    
                            </template>
                        </b-carousel-slide>
                    </b-carousel>
                </div>  
            </div>
                   

  
        </div>
    </div>
  </div>
</template>
<script>

export default {
  metaInfo: {
    title: "Main"
  },
  data() {
    return {
        menu_click:false,
        search_click:false,
        background_start:true,
        lastScrollPosition: 0,
        movies:[
            {image:'https://www.nowrunning.com/content/movie/2013/Drishyam/bg1.jpg'},
            {image:'https://movieposters2.com/images/1614171-b.jpg'},
            {image:'https://pbs.twimg.com/media/FUYriQnaMAA5gMM?format=jpg&name=large'},
            {image:'https://live.staticflickr.com/65535/49137122002_7b7185b2a7_b.jpg'},
            {image:'https://live.staticflickr.com/65535/49137122002_7b7185b2a7_b.jpg'},
            {image:'https://live.staticflickr.com/65535/49137122002_7b7185b2a7_b.jpg'},
            {image:'https://movieposters2.com/images/1614171-b.jpg'},
            {image:'https://www.nowrunning.com/content/movie/2013/Drishyam/bg1.jpg'},
            {image:'https://movieposters2.com/images/1614171-b.jpg'},
            {image:'https://pbs.twimg.com/media/FUYriQnaMAA5gMM?format=jpg&name=large'},
            {image:'https://live.staticflickr.com/65535/49137122002_7b7185b2a7_b.jpg'},
            {image:'https://live.staticflickr.com/65535/49137122002_7b7185b2a7_b.jpg'},
            {image:'https://live.staticflickr.com/65535/49137122002_7b7185b2a7_b.jpg'},
            {image:'https://movieposters2.com/images/1614171-b.jpg'},
        ],
        first_movie:{},
        sort_movies2:{datas:[]},
        sort_movies:{datas:[]},
        current_movie:{language_detail:{},category_detail:{},movie_spec:[]},

    };
  },
  mounted(){
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
  }

};
</script>
<style scoped>
  @import '/main/style/style.css';
  @import '/main/style/style-2.css';

</style>
