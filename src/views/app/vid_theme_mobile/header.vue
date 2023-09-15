
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
                    <router-link :to="edit?'':{name:'plan'}">
                        <button class="btn" style="background-color: #8230c6;color: white;font-size: 13px;font-weight: 500;border: 1px solid #8230c6;border-radius: 4px;padding:4px 8px;">
                            <img src="/vid_theme_mobile/images/king.png" style="width:14px;" class="mr-1">{{$root.token?'UPGRADE PLAN':'BUY PLAN'}}
                        </button>
                    </router-link>
                    
                </div>
                <div class="text-center header-right flex-align3" style="gap:5px;" >
                        
                        <div class="search-input" @click="search_page='open'">
                            <img src="/vid_theme_mobile/images/search.png" class="">
                        </div>
                        <div class="search_section">
                            <div class="search-header">
                                <i class="fa fa-arrow-left" style="font-size:22px;" @click="search_page='close'"></i>
                                <div class="search-bar">
                                    <img src="/vid_theme_mobile/images/search.svg" class="ml-2">
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
                            <img src="/vid_theme_mobile/images/menubar2.png" style="width:34px;" class="">
                            
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
                <div class="mb-2">
                    <div class="sidebar-close" v-b-toggle.sidebar-1>
                        <img src="/vid_theme_mobile/images/close.png">
                    </div>
                    <div class="header-logo">
                        <router-link :to="edit?'':{name:'home'}">
                            <img :src="frontent_settings.main_logo" class="logo mx-auto d-flex">
                        </router-link>
                    </div>
                </div>
                <router-link :to="edit?'':$root.token?{name:'profile'}:{name:'sign-in'}">
                <div class="sidebar-header p-3 flex-align" style="background-color: #ffffff0f;">
                    <div  class="flex-align3" style="gap:10px;">
                        <div class="user-img">
                            <img src="/vid_theme_mobile/images/user_1.png" class="rounded-circle" style="width:45px;">
                        </div>
                        <div class="text-left mt-2" v-if="$root.token">
                            <h6 class="text-14 font-weight-600 mb-2">{{profile.username}}</h6>
                            <h6 class="text-12">
                                View Profile
                            </h6>
                        </div>
                        <div class="text-left mt-2" v-else>
                            <h6 class="text-14 font-weight-600 mb-2">Guest</h6>
                            <h6 class="text-12">Login/Register for best experience</h6>
                        </div>

                    </div>
                    <div>
                        <i class="fa fa-angle-right" style="color: #fff;font-size:25px;"></i>
                    </div>
                </div>
                </router-link>
                <div class="px-3 text-left">
                    
                    <router-link :to="edit?'':$root.token?{name:'profile'}:{name:'sign-in'}">
                        
                        <h6 class="text-white text-14 font-weight-500 my-4 p-1">
                            <i class="fa fa-tasks mr-2"></i>Buy Plan
                        </h6>
                        <h6 class="text-white text-14 font-weight-500 my-4 p-1">
                            <i class="fa  fa-archive mr-2"></i>My Subcription
                        </h6>
                        <h6 class="text-white text-14 font-weight-500 my-4 p-1">
                            <i class="fa  fa-money mr-2"></i>My Transactions
                        </h6>
                        <h6 class="text-white text-14 font-weight-500 my-4 p-1">
                             <i class="fa fa-list mr-2"></i>Watchlist
                        </h6>
                    </router-link>
                   
                   
                </div>
               
                <div class="px-3 text-left">
                  
                    <h6 class="text-white text-14 font-weight-500 my-4 p-1">
                         <i class="fa fa-cog mr-2"></i>Settings
                    </h6>
                </div>
                
                <div class="px-3 text-left">
                    <h6 class="text-white text-14 font-weight-500 my-4 p-1">
                         <i class="fa fa-user mr-2"></i>About Us
                    </h6>
                </div>
                
                <div class="px-3 text-left" v-if="$root.token">
                    <h6 class="text-white text-14 font-weight-500 my-4 p-1" @click="signOut()">
                         <i class="fa fa-sign-in mr-2"></i>Sign Out
                    </h6>
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
      headers.append("Authorization", "Bearer "+(this.$root.token?this.$root.token:this.$root.admin_token));
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
  @import '/vid_theme_mobile/style/style.css';
  @import '/vid_theme_mobile/style/style-2.css';



</style>
