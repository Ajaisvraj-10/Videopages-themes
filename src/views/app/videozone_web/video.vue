
<template>
    <div class="main-content main-content-2">
        <div class="site-wrapper2" :class="menu_click?'nav-active':''">   
            
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
                                <img src="/videozone_web/images/search.svg" class="mx-2">
                                <input type="text" placeholder="search here....">
                            </div>
                          
                         
                            <div class="profile-sec">
                                <a class=" text-white flex-align3 mx-2" >
                                    <img src="/videozone_web/images/profile.png" style="width:28px!important;" class="mr-2">
                                    <h6 class="text-13  min-768">Arunghosh</h6>
                                    <i class="fa fa-caret-down text-light ml-2"></i>
                                </a>
                                <div class="profile-dropdown">
                                    <div class="profile-nav">
                                        <router-link :to="{name:'home'}">
                                            <h6 class="text-14">Sign out</h6>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                          
                    </div>
                </div>
            </header> 
            <div class=" position-relative" style="margin-top:72px;" v-if="first_movie.id">
                    
                   
                    <div class="overlay-in-video" v-if="current_movie.message!='play'">
                        <div class="video-in-modal banner-vid position-relative" v-if="current_movie.message=='play'">
                          <iframe :src="'https://iframe.mediadelivery.net/embed/'+libary_id+'/'+current_movie.video.video_guid+'?autoplay=true'" loading="lazy" style="border: none;height: 400px; width: 100%;" allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowfullscreen="true"></iframe>
                        </div>
                        <div class="text-right" v-else>
                            <img :src="current_movie.thumbnail" style="width:70%;" class="banner-vid">
                        </div>
                       
                        <div class="video-controls videozone-vid mb-2">
                            <div class="w-100 pl-4 pl-md-5">
                                <div class="w-50 " style="position: relative;z-index: 999;">
                                    
                                    <h5 class="text-26 my-2 font-weight-600 text-white main-heading-1 ">{{current_movie.name}}</h5>

                                    <div class="ratings flex-align3 my-3" style="opacity:.5;">
                                        <div class="flex-align3 mr-2">
                                            <span class="text-10 border font-weight-800 rounded mr-2" style="padding:2px 3px;">IMDB</span>
                                            <h6 class="font-weight-600 text-15 mr-2">8.6</h6>
                                        </div>
                                        <div class="flex-align3 mr-2">
                                            
                                            <h6 class="font-weight-600 text-15 mr-2">2 h 38 min</h6>
                                            <h6 class="font-weight-600 text-15 mr-2">2022</h6>
                                        </div>
                                        <!--<div class="flex-align3 mr-2">
                                            <span class="text-10 border font-weight-800 rounded mr-2" style="padding:2px 3px;">X-Ray</span>
                                            <span class="text-10 border font-weight-800 rounded mr-2" style="padding:2px 3px;">UHD</span>
                                            <span class="text-10 border font-weight-800 rounded mr-2" style="padding:2px 3px;">U</span>
                                           
                                        </div>-->
                                    </div>

                                    
                                </div>

                                <div class="">
                                    <div class='w-50'>
                                        <h4 class="text-14 my-3 font-weight-400 text-white main-heading-2" style="line-height:20px;">
                                            {{current_movie.description}}
                                        </h4>
                                    </div>
                                    <div class="flex-align3 modal-icons-2 play-buttons">
                                        <div class="text-32 bg-info text-white flex-align3 py-2 px-4 rounded mr-3 button-control cursor-pointer" style="min-height:55px;" @click="current_movie.message='play'">
                                            <i class="fa fa-play mr-3"></i>
                                            <h5 class="font-weight-500 text-22">Play</h5>
                                        </div>
                                        
                                       <!-- <div class="text-32 bg-gray text-white flex-align3 py-2 px-4 rounded mr-3 button-control"  style="min-height:55px;">
                                            <h5 class="font-weight-500 text-19">More prurchase options</h5>
                                        </div>-->
                                        <div class="flex-align3">
                                            <div class="text-32 bg-gray text-white flex-align2 rounded-circle mr-3 " style="width:45px;height:45px;">
                                                <svg  width="24" height="24" xmlns="http://www.w3.org/2000/svg"><title>Trailer</title><path d="M4.078 3.319c-.2-.116-.078-.186-.078.045v17.272c0 .231-.123.16.078.045l15.03-8.641c.197-.115.197.034 0-.08L4.077 3.32z" stroke="currentColor" stroke-width="2" fill="none"></path></svg>
                                            </div>
                                            <div class="text-32 bg-gray text-white flex-align2 rounded-circle  mr-3 " style="width:45px;height:45px;">
                                                <svg class="_22qEau" viewBox="0 0 24 24" height="24" width="24" role="img" style="height:var(--dvui-icon-height);width:var(--dvui-icon-width)" aria-hidden="true"><title>Add</title><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><title>Add</title><path d="M3 12h18m-9 9V3" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"></path></svg></svg>
                                            </div>
                                            
                                        </div>
                                    
                                       
                                    </div>
                                   
                                </div>
                                <div class="stars my-3" style="opacity:.6;">
                                    <div class="flex-align3 my-1" v-for="movie_spec in current_movie.specs">
                                        <h6 class="text-16 text-white font-weight-600 pr-2" style="min-width:150px;">{{movie_spec.label}}</h6>

                                        <h6 class="text-16 font-weight-600 pr-2" style="color:#0f79af;min-width:150px;">{{movie_spec.name}}</h6>
                                    </div>
                                    <div class="flex-align3 my-1">
                                        <h6 class="text-16 text-white font-weight-600 pr-2" style="min-width:150px;">Language</h6>

                                        <h6 class="text-16 font-weight-600 pr-2" style="color:#0f79af;min-width:150px;">{{current_movie.language_detail.name}}</h6>
                                    </div>

                                </div>

                                <div class="mt-4 mb-2 flex-align" style="flex-flow: wrap;">
                                    <h6 class="my-2 text-14 font-weight-600" style="opacity:.4;">By clicking play, you agree to our <span class="text-info">Terms of Use.</span></h6>
                                    <!--<div class="my-2 flex-align3">
                                        <h6 class="text-18 font-weight-500 mr-3"><i class="fa fa-share-alt mr-2"></i>Share</h6>
                                        <h6 class="text-18 font-weight-500 mr-3"><i class="fa fa-pencil mr-2"></i>Feedback</h6>
                                        <h6 class="text-18 font-weight-500"><i class="fa fa-info-circle mr-2"></i>Get help</h6>
                                    </div>-->
                                </div>
                            </div>
                            

                        </div>


                    </div>
                    <div class="w-100">

                        <div class="second-section main-page-sec ">
            
                            <div class="image-grid">
                                <div class="position-relative" >
                                    <div class="flex-align" >
                                        <h6 class="section-sidehead text-white  pl-2">New Releases</h6>
                                        <h6 class="text-more mr-2"> </h6>

                                    </div>
                                    <b-carousel
                                        id="movie2"
                                        class="slider-movie py-0"
                                        :interval="4000"
                                        controls>
                                        <b-carousel-slide v-for="sort_movie in sort_movies.datas">
                                            <template #img>
                                                <div class="image-row">
                                                    
                                                    <div class="hover-modal image"v-for="movie in sort_movie" @click="current_movie=movie">
                                                        <router-link :to="{name:'video'}">
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
                            <div class="image-grid">
                                <div class="position-relative" >
                                    <div class="flex-align" >
                                        <h6 class="section-sidehead text-white  pl-2">TV Series</h6>
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
                                                        <router-link :to="{name:'video'}">
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
                        <footer class="footer p-4" style="background-color:initial;">
                            <div class="text-center mb-3">
                                <img src="/videozone_web/images/logo.png" width="100">
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
        movies:[],
        first_movie:{},
        sort_movies2:{datas:[]},
        sort_movies:{datas:[]},
        current_movie:{language_detail:{},category_detail:{},movie_spec:[]},

    };
  },
  mounted(){
    this.getMovie(this.$route.params.video_id)
    this.getMovies()
    var self = this
    document.getElementsByClassName("main-content")[0].addEventListener("scroll", () => {
        self.handleScroll()
    });
  },
  methods: {
    getMovie(video_id=3) {
      var headers = new Headers();
      headers.append("Authorization", "Token "+this.$root.token);
      fetch(this.api_url+'/movies/movies/'+video_id+'/', {
          method : 'get',
          headers: headers,
      })
      .then((response) => {
          return response.json()
      })
      .then((jsonData) => {
          this.current_movie = jsonData
      })
    },
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
  @import '/videozone_web/style/style.css';
  @import '/videozone_web/style/style-2.css';

</style>
