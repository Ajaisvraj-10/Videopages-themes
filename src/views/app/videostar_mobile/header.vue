
<template>
    <div :class="$root.mode=='light'?'mode_change':''">
        <!--<div class="dark">
            <h6 class="light-mode" @click="$root.mode='light'"> <i class="fa fa-moon-o mr-1"></i>Light Mode</h6>
            <h6 class="dark-mode" @click="$root.mode='dark'"><i class="fa fa-sun-o mr-1"></i>Dark Mode</h6>
        </div>-->
        
        <header class="header-holder-2" :class="search_page=='open'?'sidebar_active':''">             
            <div class="menu-wrapper  d-flex align-items-center justify-content-between"> 
                <div class="flex-align3" style="gap:15px;">
                    <div class="mobile-menu" v-b-toggle.sidebar-1>
                            <img src="/videostar_mobile/images/menubar.png" style="width:20px;" class="menubar1">
                            <img src="/videostar_mobile/images/menubar2.png" style="width:24px;" class="menubar2">
                        
                    </div>         
                    <div class="header-logo">
                        <router-link :to="edit?'':{name:'home'}">
                            <img :src="frontent_settings.main_logo" class="logo">
                        </router-link>             
                    </div>
                    <router-link :to="edit?'':{name:'plan'}">
                            <button class="btn" style="background-color: #3b8bef;color: white;font-size: 11px;font-weight: 700;border: 1px solid #3b8bef;border-radius: 2px;padding:1px 4px;">
                                {{$root.token?'UPGRADE PLAN':'BUY PLAN'}}
                            </button>
                    </router-link>
                    
                    
                </div>
                <div class="text-center header-right flex-align3" style="gap:10px;" >
                        
                        <div class="search-input" @click="search_page='open'">
                            <img src="/videostar_mobile/images/search.svg" class=" search-1">
                            <img src="/videostar_mobile/images/search2.png" class=" search-2">

                        </div>
                        <div class="search_section">
                            <div class="search-header">
                                <img src="/videostar_mobile/images/nav_left.png" @click="search_page='close'" style="width:24px;">
                                
                                <div class="search-bar">
                                    <img src="/videostar_mobile/images/search.svg" class="ml-2">
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

            <b-sidebar id="sidebar-1" title="Sidebar" width="300px"  backdrop no-header left  shadow>
                <router-link :to="edit?'':$root.token?{name:'profile'}:{name:'sign-in'}">
                <div class="sidebar-header p-4 m-3 flex-align" style="background-color: #1a1a1a;border-radius:10px;">
                    <div  class="d-flex" style="gap:15px;flex-direction:column;">
                        <div class="user-img">
                            <img src="/videostar_mobile/images/user_1.png" class="rounded-circle" style="width:40px;">
                        </div>
                        <div class="text-left" v-if="$root.token">
                            <h6 class="text-14 font-weight-600 mb-1">{{profile.username}}</h6>
                            <h6 class="text-12">
                                View Profile
                            </h6>
                        </div>
                        <div class="text-left" v-else>
                            <h6 class="text-14 font-weight-600 mb-1">Guest</h6>
                            <h6 class="text-12">Login/Register for best experience</h6>
                        </div>

                    </div>
                  
                </div>
                </router-link>

                <div class=" text-left p-3">
                    
                    <router-link :to="edit?'':$root.token?{name:'profile'}:{name:'sign-in'}">
                        <h6 class="nav-tab nav-tab text-white text-14 font-weight-400 px-3 py-2 my-2">Buy Plan</h6>
                        <h6 class="nav-tab nav-tab text-white text-14 font-weight-400 px-3 py-2 my-2">My Subcription</h6>
                        <h6 class="nav-tab nav-tab text-white text-14 font-weight-400 px-3 py-2 my-2">My Transactions</h6>
                        <h6 class="nav-tab nav-tab text-white text-14 font-weight-400 px-3 py-2 my-2">Watchlist</h6>
                    </router-link>
                   
                   
              
                  
                   <h6 class="nav-tab nav-tab text-white text-14 font-weight-400 px-3 py-2 my-2">Settings</h6>
               
                    <h6 class="nav-tab nav-tab text-white text-14 font-weight-400 px-3 py-2 my-2">About Us</h6>
               
                    <h6 class="nav-tab nav-tab text-white text-14 font-weight-400 px-3 py-2 my-2" @click="signOut()">Sign Out</h6>
                </div>

                <!--<div class="sidebar-close" v-b-toggle.sidebar-1>
                    <i class="fa fa-close" style="font-size:24px;"></i>
                </div>-->
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
  @import '/videostar_mobile/style/style.css';
  @import '/videostar_mobile/style/style-2.css';


.b-sidebar:not(.b-sidebar-right) {
   
    background-color: black!important;
}
</style>
