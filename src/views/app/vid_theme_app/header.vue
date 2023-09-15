
<template>
    <div>
        <!--<div class="dark">
            <h6 class="light-mode" @click="$root.mode='light'"> <i class="fa fa-moon-o mr-1"></i>Light Mode</h6>
            <h6 class="dark-mode" @click="$root.mode='dark'"><i class="fa fa-sun-o mr-1"></i>Dark Mode</h6>
        </div>-->

        <header class="header-holder-2" :class="search_page=='open'?'sidebar_active':''">             
            <div class="menu-wrapper  d-flex align-items-center justify-content-between"> 
                <div class="flex-align3">         
                    <div class="header-logo">
                        <router-link :to="edit?'':{name:'home'}">
                            <img :src="frontent_settings.main_logo" class="logo">
                        </router-link>             
                    </div>
                    <!-- <router-link :to="edit?'':{name:'plan'}">
                        <button class="btn" style="background-color: #8230c6;color: white;font-size: 13px;font-weight: 500;border: 1px solid #8230c6;border-radius: 4px;padding:2px 4px;">
                            {{$root.token?'UPGRADE PLAN':'BUY PLAN'}}
                        </button>
                    </router-link> -->
                    
                </div>
                <div class="text-center header-right flex-align3" style="gap:10px;" >
                        
                        <div class="search-input" @click="search_page='open'">
                            <img src="/vid_theme_app/images/search.png" class="mr-2">
                        </div>
                        <div class="search_section">
                            <div class="search-header">
                                
                                <img src="/vid_theme_app/images/nav_left.png" style="width:20px;" @click="search_page='close'">

                                <div class="search-bar">
                                    <img src="/vid_theme_app/images/search.png" class="ml-2">
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
                        <div class="mobile-menu" v-b-toggle.sidebar-1>
                            <img src="/vid_theme_app/images/profile.png" style="width:34px;" class="">
                            <img src="/vid_theme_app/images/menubar.png" class="menubar">
                        </div>
                </div>
            </div>
            <div class="menu-home" >
                <ul class="home-nav" >
                    <router-link :to="edit?'':{name:'home'}">
                        <li :class="active_menu=='home'?'active-nav':''" @click="active_menu='home'">Home</li>
                    </router-link>
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

            <b-sidebar id="sidebar-1" title="Sidebar" no-header right width="100%" shadow>
                <div class="mb-2" style="height:60px;">
                    <div class="sidebar-close" v-b-toggle.sidebar-1>
                        <img src="/vid_theme_app/images/close.png">
                    </div>
                    <div class="header-logo">
                        <router-link :to="edit?'':{name:'home'}">
                            <img :src="frontent_settings.main_logo" class="logo mx-auto d-flex">
                        </router-link>
                    </div>
                </div>
                <router-link :to="edit?'':$root.token?{name:'profile'}:{name:'sign-in'}">
                <div class="sidebar-header p-3 flex-align" style="background-color: #ffffff0f;min-height:90px;max-height:120px;">
                    
                    
                    
                    <div  class="flex-align3 w-100" style="gap:10px;">
                        <div v-if="$root.token">
                            <div class="user-img">
                                <img src="/vid_theme_app/images/user_1.png" class="rounded-circle" style="width:45px;">
                            </div>
                            <div class="text-left" >
                                <h6 class="text-14 font-weight-600 mb-2">{{profile.username}}</h6>
                                <h6 class="text-12">
                                    View Profile
                                </h6>
                            </div>
                        </div>
                        <div class="w-100" style="display:flex; gap:10px;justify-content:center;" v-else>
                            <button class="btn btn-outline-light px-2 py-1">Login</button>
                            <button class="btn btn-primary px-2 py-1">Sign Up</button>
                        </div>

                    </div>
                    
                </div>
                </router-link>
                <div style="max-height:calc(100vh - 160px);overflow:auto;">
                    <div class="px-3 text-left" >
                        
                        <router-link :to="edit?'':$root.token?{name:'profile'}:{name:'sign-in'}">
                            <!-- <h6 class="text-white text-14 font-weight-400 my-4">Buy Plan</h6> -->
                            <h6 class="text-white text-14 font-weight-400 my-4">My Subcription</h6>
                            <h6 class="text-white text-14 font-weight-400 my-4">My Transactions</h6>
                            <h6 class="text-white text-14 font-weight-400 my-4">Watchlist</h6>
                        </router-link>
                       
                        <h6 class="text-white text-14 font-weight-400 my-4">Settings</h6>
                   
                        <h6 class="text-white text-14 font-weight-400 my-4">About Us</h6>
                    </div>
                   
                    <div class="px-3 text-left" v-if="$root.token">
                        <h6 class="text-white text-14 font-weight-500 my-4" @click="signOut()">Sign Out</h6>
                    </div>
                </div>
                
            </b-sidebar>
        </header> 
        <div class="footer-app">
            <router-link to="/">
            <div class="footer-item active-footer-item">
                <img src="/vid_theme_app/images/home.png">
                <h6>Home</h6>
            </div>
            </router-link>
            <!-- <router-link to="/plan">
            <div class="footer-item">
                <img src="/vid_theme_app/images/king.png">
                <h6>Plan</h6>
            </div>
            </router-link>
            <router-link to="/profile">
            <div class="footer-item">
                <img src="/vid_theme_app/images/profile2.png">
                <h6>Profile</h6>
            </div>
            </router-link> -->
            <router-link to="/sign-in">
            <div class="footer-item">
                <img src="/vid_theme_app/images/login.png">
                <h6>Login</h6>
            </div>
            </router-link>
        </div>
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
    if(this.$root.admin_token){
        this.init()
    }
  },
  watch: {
    '$root.admin_token' : function(){
        this.init()
    }
  },
  methods: {
    init(){
        if(this.$route.params.type){
            this.active_menu = this.$route.params.type
        }
        if(this.$root.token){
            this.getProfile()
        }
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
      headers.append("Authorization", "Bearer "+this.$root.admin_token);
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
  @import '/vid_theme_app/style/style.css';
  @import '/vid_theme_app/style/style-2.css';



</style>
