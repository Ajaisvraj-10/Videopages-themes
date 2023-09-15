
<template>
    <div :class="background_start?'':'ott-scroll'">
        <!--<div class="dark">
            <h6 class="light-mode" @click="mode='light'"> <i class="fa fa-moon-o mr-1"></i>Light Mode</h6>
            <h6 class="dark-mode" @click="mode='dark'"><i class="fa fa-sun-o mr-1"></i>Dark Mode</h6>
        </div>-->

        <header class="header-holder-2" :class="search_page=='open'?'sidebar_active':''">             
            <div class="menu-wrapper  flex-align"> 
                <div class="flex-align3">         
                    <div class="header-logo">
                        <router-link :to="edit?'':{name:'home'}">
                            <img :src="frontent_settings.main_logo" class="logo">
                        </router-link>             
                    </div>
                    
                </div>
                <div style="display:flex;gap:22px;align-items:center;">
                    <div class="search-container" @click="search_page='open'">
                        <i class="fa fa-search" style="font-size:20px;"></i>
                        
                    </div>

                    <i class="fa fa-bars" style="font-size:20px;" v-b-toggle.sidebar-1></i>
                </div>
                
            </div>
            <div class="text-center header-second flex-align3" style="gap:10px;" >
                    <div class="menu-home" >
                        <ul class="home-nav" >
                          
                            <router-link :to="edit?'':{name:'videos', params: { type: 'tv-shows'}}">
                                <li :class="active_menu=='tv-shows'?'active-nav':''" @click="active_menu='tv-shows'">TV Shows</li>
                            </router-link>
                            <router-link :to="edit?'':{name:'videos', params: { type: 'movies'}}">
                                <li :class="active_menu=='movies'?'active-nav':''" @click="active_menu='movies'">Movies</li>
                            </router-link>
                            <router-link :to="edit?'':{name:'videos', params: { type: 'web-series'}}">
                                <li :class="active_menu=='web-series'?'active-nav':''" @click="active_menu='web-series'">Web Series</li>
                            </router-link>
                            <router-link :to="edit?'':{name:'videos', params: { type: 'short-filims'}}">
                                <li :class="active_menu=='short-filims'?'active-nav':''" @click="active_menu='short-filims'">Short Filims</li>
                            </router-link>
                        </ul>

                    </div>    
                       
            </div>
            <div class="search_section">
                            <div class="search-header">
                                <i class="fa fa-arrow-left" style="font-size:22px;" @click="search_page='close'"></i>
                                <div class="search-bar">
                                    
                                    <input placeholder="search for Movies, Shows etc" @input="searchMovies()">
                                </div>
                            </div>
                            <div class="search-movies row m-2">
                                <div class="col-4 p-2" v-for="(movie,key) in search_movies" v-if="key<9">
                                    <router-link :to="edit?'':{name:'video',params: { type: slugify(movie.type), category: slugify(movie.category_detail.name), slug: movie.slug }, query: {language:movie.language_detail.name}}">
                                        <img :src="movie.thumbnail">
                                    </router-link>
                                </div>
                                <div class="col-12 p-2 text-center" v-if="search_movies.length>9">
                                    <router-link :to="{name:'videos', params: { type: 'search'}, query: { tag: search}}">More results</router-link>
                                </div>
                            </div>
            </div>

            <b-sidebar id="sidebar-1" title="Sidebar" no-header right width="100%" shadow>
                
                <div class="sidebar-header p-3" >
                    <div  class="flex-align mb-3" style="gap:10px;">
                        <div class="user-img">
                            <img src="/video_next_mobile/images/user_1.png" class="rounded-circle" style="width:40px;">
                        </div>
                        <div class="" v-b-toggle.sidebar-1>
                            <img src="/video_next_mobile/images/close-right.png" style="width:24px;">
                        </div>
                       

                    </div>
                    <router-link :to="edit?'':$root.token?{name:'profile'}:{name:'sign-in'}">
                    <div  class="flex-align3" style="gap:10px;padding: 15px;border-radius: 10px;background-color: #500601;">
                        
                        <div class="text-left" v-if="$root.token">
                            <h6 class="text-14 font-weight-600 mb-2">{{profile.username}}</h6>
                            <h6 class="text-12">
                                View Profile
                            </h6>
                        </div>
                        <div class="text-left" v-else>
                            <h6 class="text-14 font-weight-600 mb-2">Guest</h6>
                            <h6 class="text-12">Login/Register for best experience</h6>
                        </div>

                    </div>
                    </router-link>
                   
                </div>
               
                <div class="px-4 text-left">
                    <router-link to="/plan">
                        <h6 class="text-white text-14 font-weight-500 my-4">Buy Plan</h6>
                       
                    </router-link>
                    
                    <router-link :to="edit?'':$root.token?{name:'profile'}:{name:'sign-in'}">
                        
                        <h6 class="text-white text-14 font-weight-500 my-4">My Subcription</h6>
                        <h6 class="text-white text-14 font-weight-500 my-4">My Transactions</h6>
                        <h6 class="text-white text-14 font-weight-500 my-4">Watchlist</h6>
                    </router-link>
                   
                   
                </div>
                <hr>
                <div class="px-4 text-left">
                  
                   <h6 class="text-white text-14 font-weight-500 my-4">Settings</h6>
                </div>
                <hr>
                <div class="px-4 text-left">
                    <h6 class="text-white text-14 font-weight-500 my-4">About Us</h6>
                </div>
                <hr>
                <div class="px-4 text-left">
                    <h6 class="text-white text-14 font-weight-500 my-4" @click="signOut()">Sign Out</h6>
                </div>
                
            </b-sidebar>
        </header> 
        
    </div>
</template>
<script>
export default {
  props: ['edit','blocks','current_block'],
  data() {
    return {
        active_menu:'home',
        search:'',
        search_page:"sidebar",
        search_movies:[],
        profile:{},
        background_start:true,
        lastScrollPosition: 0,
    };
  },
  mounted(){
    if(this.$route.params.type){
        this.active_menu = this.$route.params.type
    }
    if(this.$root.token){
    this.getProfile()
    }
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
    getProfile() {
        var headers = new Headers();
        headers.append("Authorization", "Bearer "+this.$root.token);
        fetch(this.api_url+'/users/users/'+this.userId+'/', {
            method : 'get',
            headers: headers,
        })
        .then((response) => {
            return response.json()
        })
        .then((jsonData) => {
            this.profile = jsonData
        })
    },
    searchMovies() {
      var headers = new Headers();
      headers.append("Authorization", "Token "+this.$root.token);
      fetch(this.api_url+'/customer/movies/?search='+this.search, {
          method : 'get',
          headers: headers,
      })
      .then((response) => {
          return response.json()
      })
      .then((jsonData) => {
        this.search_movies = jsonData
      })
    },
  }

};
</script>
<style scoped>
  @import '/video_next_mobile/style/style.css';
  @import '/video_next_mobile/style/style-2.css';


.ott-scroll ul.home-nav {
    height: 0;
    display: none;
}


</style>
