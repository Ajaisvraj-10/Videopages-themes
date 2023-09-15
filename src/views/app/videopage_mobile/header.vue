
<template>
    <div>
       <!-- <div class="dark">
            <h6 class="light-mode" @click="mode='light'"> <i class="fa fa-moon-o mr-1"></i>Light Mode</h6>
            <h6 class="dark-mode" @click="mode='dark'"><i class="fa fa-sun-o mr-1"></i>Dark Mode</h6>
        </div>-->

        <header class="header-holder-2" :class="search_page=='open'?'sidebar_active':''">             
            <div class="menu-wrapper  d-flex align-items-center justify-content-between"> 
                
                            
                    <div class="header-logo">
                        <!--<router-link :to="edit?'':{name:'home'}">
                            <img :src="frontent_settings.main_logo" class="logo">
                        </router-link>-->  
                        <router-link :to="edit?'':{name:'home'}">
                            <img src="/videopage_mobile/images/logo-4.png" class="logo">
                        </router-link>           
                    </div>
                    <!--<div class="text-right"  style="">
                    <router-link :to="edit?'':{name:'plan'}">
                        <button class="btn" style="background-color: #8230c6;color: white;font-size: 13px;font-weight: 500;border: 1px solid #8230c6;border-radius: 4px;padding:4px 7px;">
                           {{$root.token?'UPGRADE PLAN':'BUY PLAN'}}
                        </button>
                    </router-link>
                    </div>-->
                    
               
                    
            </div>
            <div class="menu-home" >
                <div class="mobile-menu" style="width: 60px;text-align: center;margin-top:-5px;" v-b-toggle.sidebar-1>
                       
                        <img src="/videopage_mobile/images/menubar.png" style="width:20px;">
                </div>
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
                <div class="text-right header-right flex-align3" style="width:40px;" >
                        
                        <div class="search-input" v-b-toggle.search>
                            <img src="/videopage_mobile/images/search2.png" class="">
                        </div>
                        <b-sidebar id="search" no-header right width="340px" backdrop shadow>
                            <img src="/videopage_mobile/images/back-cap.png" v-b-toggle.search style="position: absolute;left: -35px;top: -7px;">
                            <div class="search_section px-3 py-5">
                                <h6 class="text-left text-danger pt-2 text-13 font-weight-700">I Want to Watch</h6>
                                <div class="search-header mt-3">
                                    
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
                        </b-sidebar>
                        
                </div>

            </div>

            <b-sidebar id="sidebar-1" title="Sidebar" no-header left width="100%" backdrop shadow>
                <div class="flex-align px-3 py-4">
                    <h6 class="text-14">Capcee Movies & Tv</h6>
                    <div class="sidebar-close" v-b-toggle.sidebar-1>
                        <img src="/videopage_mobile/images/left-arrow.png">
                    </div>
                </div>
                <router-link :to="edit?'':$root.token?{name:'profile'}:{name:'sign-in'}">
                <div class="sidebar-header p-3 flex-align" >
                    
                    <div  class="flex-align3 p-4 rounded2" style="gap:20px;background-color:#171617;width:100%;">
                        <div class="user-img">
                            <img src="/videopage_mobile/images/profile.png" class="rounded-circle" style="width:45px;">
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
                    
                    
                    <div class="row mx-0">
                        
                        <div class="col-4 px-1">
                            <router-link :to="edit?'':{name:'plan'}">
                            <div class="sidebar-box   p-3 rounded2" >
                                <img src="/videopage_mobile/images/plans.png">

                                <h6 class="text-white text-12 font-weight-400">Buy Plan</h6>
                            </div>
                            </router-link>
                        </div>
                        
                        <div class="col-4 px-1">
                            <router-link :to="edit?'':$root.token?{name:'profile'}:{name:'sign-in'}">
                        
                            <div class="sidebar-box   p-3 rounded2" >
                                <img src="/videopage_mobile/images/subscribe.png">

                                <h6 class="text-white text-12 font-weight-400">My Subcription</h6>
                            </div>
                            </router-link>
                        </div>
                        
                        <div class="col-4 px-1">
                            <router-link :to="edit?'':$root.token?{name:'profile'}:{name:'sign-in'}">
                            <div class="sidebar-box   p-3 rounded2" >
                                <img src="/videopage_mobile/images/transfer.png">
                                <h6 class="text-white text-12 font-weight-400">My Transactions</h6>
                            </div>
                            </router-link>
                        </div>
                        <div class="col-4 px-1">
                            <router-link :to="edit?'':$root.token?{name:'profile'}:{name:'sign-in'}">
                            <div class="sidebar-box   p-3 rounded2" >
                                
                                <img src="/videopage_mobile/images/watchlist.png">
                                <h6 class="text-white text-12 font-weight-400">Watchlist</h6>
                            </div>
                            </router-link>
                        </div>
                        <div class=" col-4 px-1">
                            <router-link :to="edit?'':$root.token?{name:'profile'}:{name:'sign-in'}">
                        
                           <div class="sidebar-box  p-3 rounded2" >
                                <img src="/videopage_mobile/images/settings.png">

                               <h6 class="text-white text-12 font-weight-400">Settings</h6>
                           </div>
                           </router-link>
                        </div>
                       
                        <div class=" col-4 px-1">
                            <router-link :to="edit?'':$root.token?{name:'profile'}:{name:'sign-in'}">
                            <div class="sidebar-box   p-3 rounded2" >
                                <img src="/videopage_mobile/images/info.png">

                                <h6 class="text-white text-12 font-weight-400">About Us</h6>
                            </div>
                            </router-link>
                        </div>
                    </div>
                    
                   
                   
                </div>
               
                <div class="row mx-0 mt-4 justify-content-center">
                    <div class="px-3 col-5 ">
                        <div class="text-center signout-btn   p-3 rounded3" @click="signOut()" >
                            <h6  class="text-white text-14 font-weight-500">Sign Out</h6></div>
                    </div> 
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
  @import '/videopage_mobile/style/style.css';
  @import '/videopage_mobile/style/style-2.css';



</style>
