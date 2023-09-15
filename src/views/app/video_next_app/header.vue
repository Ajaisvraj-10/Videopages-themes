
<template>
    <div>
        <!--<div class="dark">
            <h6 class="light-mode" @click="mode='light'"> <i class="fa fa-moon-o mr-1"></i>Light Mode</h6>
            <h6 class="dark-mode" @click="mode='dark'"><i class="fa fa-sun-o mr-1"></i>Dark Mode</h6>
        </div>-->

        <header class="header-holder-2" :class="search_page=='open'?'sidebar_active':''">             
            <div class="menu-wrapper  d-flex align-items-center justify-content-between"> 
                <div class="flex-align3">         
                    <div class="header-logo">
                        <router-link :to="edit?'':{name:'home'}">
                            <img :src="frontent_settings.main_logo" class="logo">
                        </router-link>             
                    </div>
                    
                    
                </div>
                <div class="text-center header-right flex-align3" style="gap:10px;" >
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
                <router-link :to="edit?'':$root.token?{name:'profile'}:{name:'sign-in'}">
                <div class="sidebar-header p-3 flex-align" >
                    <div  class="flex-align3" style="gap:10px;">
                        <div class="user-img">
                            <img src="/video_next_app/images/user_1.png" class="rounded-circle" style="width:45px;">
                        </div>
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
                   
                </div>
                </router-link>
                <div class="px-3 text-left">
                    
                    <router-link :to="edit?'':$root.token?{name:'profile'}:{name:'sign-in'}">
                        <h6 class="text-white text-14 font-weight-500 my-4">Buy Plan</h6>
                        <h6 class="text-white text-14 font-weight-500 my-4">My Subcription</h6>
                        <h6 class="text-white text-14 font-weight-500 my-4">My Transactions</h6>
                        <h6 class="text-white text-14 font-weight-500 my-4">Watchlist</h6>
                    </router-link>
                   
                   
                </div>
                <hr>
                <div class="px-3 text-left">
                  
                   <h6 class="text-white text-14 font-weight-500 my-4">Settings</h6>
                </div>
                <hr>
                <div class="px-3 text-left">
                    <h6 class="text-white text-14 font-weight-500 my-4">About Us</h6>
                </div>
                <hr>
                <div class="px-3 text-left">
                    <h6 class="text-white text-14 font-weight-500 my-4" @click="signOut()">Sign Out</h6>
                </div>
                <div class="sidebar-close" v-b-toggle.sidebar-1>
                    <i class="fa fa-close" style="font-size:24px;"></i>
                </div>
            </b-sidebar>
        </header> 
        <footer class="footer2 px-3 flex-align" >
                <router-link :to="edit?'':{name:'home'}">  
                <div class="footer-items active-footer-item" >
                    <img src="/video_next_app/images/home.png" style="height:18px!important;">
                    <h6 class="text-12 t mt-1">Home</h6>
                </div>
                </router-link>

                <div class="footer-items" @click="search_page='open'">
                    <img src="/video_next_app/images/find.png" style="height:18px!important;">
                    <h6 class="text-11 mt-1">Search</h6>
                </div>
                <router-link :to="edit?'':{name:'plan'}">
                <div class="footer-items">
                    <img src="/video_next_app/images/king.png" style="height:18px!important;">
                    <h6 class="text-11 mt-1">{{$root.token?'UPGRADE PLAN':'BUY PLAN'}}</h6>
                </div>
                </router-link>
                <!--<div class="footer-items">
                    <img src="/video_next_app/images/profile2.png" style="height:18px!important;">
                    <h6 class="text-11 mt-1">Profile</h6>
                </div>-->
                <router-link to="/sign-in">
                <div class="footer-items">
                    <img src="/video_next_app/images/login.png" style="height:18px!important;">
                    <h6 class="text-11 mt-1">Login</h6>
                </div>
                </router-link>
                <div class="footer-items" v-b-toggle.sidebar-1>
                    <img src="/video_next_app/images/settings.png" style="height:18px!important;">
                    <h6 class="text-11 mt-1">Settings</h6>
                </div>
                                        
                   
            </footer>
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
        profile:{}
    };
  },
  mounted(){
    if(this.$route.params.type){
        this.active_menu = this.$route.params.type
    }
    if(this.$root.token){
    this.getProfile()
    }
  },
  methods: {
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
  @import '/video_next_app/style/style.css';
  @import '/video_next_app/style/style-2.css';



</style>
