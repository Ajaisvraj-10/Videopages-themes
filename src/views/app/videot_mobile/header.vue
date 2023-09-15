
<template>
    <div>
        <!--<div class="dark">
            <h6 class="light-mode" @click="mode='light'"> <i class="fa fa-moon-o mr-1"></i>Light Mode</h6>
            <h6 class="dark-mode" @click="mode='dark'"><i class="fa fa-sun-o mr-1"></i>Dark Mode</h6>
        </div>-->

        <header class="header-holder-2" :class="search_page=='open'?'sidebar_active':''">             
            <div class="menu-wrapper  d-flex align-items-center justify-content-between"> 
                <div class="flex-align3  p-0" style="gap:15px;">         
                    <div class="header-logo">
                        <router-link :to="edit?'':{name:'home'}">
                            <img :src="frontent_settings.main_logo" class="logo">
                        </router-link>             
                    </div>
                    <router-link :to="edit?'':{name:'plan'}">
                        <button class="btn" style="background-color: #29d4b6;color: black;font-size: 10px;font-weight: 500;border: 1px solid #29d4b6;border-radius: 2px;padding:2px 7px;">
                            {{$root.token?'Upgrade PLAN':'Buy Plan'}}
                        </button>
                    </router-link>
                    
                </div>
                
                <div class=" p-0 flex-align3" style="gap:10px;">
                        
                    <div class="search-input" @click="search_page='open'">
                        <img src="/videot_mobile/images/search.png" class="">
                    </div>
                    <div class="search_section">
                            <div class="search-header">
                                <i class="fa fa-arrow-left" style="font-size:22px;" @click="search_page='close'"></i>
                                <div class="search-bar">
                                    <img src="/videot_mobile/images/search.svg" class="ml-2">
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
                    <div class="mobile-menu " v-b-toggle.sidebar-1>
                        <img src="/videot_mobile/images/profile.png" style="width:30px;" class="">
                            
                    </div>
                        
                </div>
            </div>
            

            <b-sidebar id="sidebar-1" title="Sidebar" no-header right backdrop width="100%" shadow>
                <div class=" p-4 mx-2">
                    <div class="" v-b-toggle.sidebar-1 style="position:absolute;left:30px;top:25px;">
                        <img src="/videot_mobile/images/prev.png" class="" style="width:20px;">
                    </div>
                    <div class="">
                        <h6 class="font-weight-400 text-20 text-center">Account</h6>            
                    </div>
                </div>
                <router-link :to="edit?'':$root.token?{name:'profile'}:{name:'sign-in'}">
                <div class="sidebar-header px-4 mx-2 py-3 flex-align3" style="gap:25px;">
                    <div  class="" >

                        <div class="user-img text-center">
                            <img src="/videot_mobile/images/profile.png" class="rounded-circle" style="width:40px;">
                        </div>
                        <div class="text-left mt-2" v-if="$root.token">
                            <h6 class="text-14 font-weight-600 mb-2">{{profile.username}}</h6>
                            <h6 class="text-12">
                                View Profile
                            </h6>
                        </div>
                        <div class="text-left mt-2" v-else>
                            <h6 class="text-14 font-weight-600 mb-2">Guest</h6>
                            
                        </div>


                    </div>
                    <div  class="" >

                        <div class="user-img text-center">
                            <img src="/videot_mobile/images/profile.png" class="rounded-circle" style="width:40px;">
                        </div>
                        <div class="text-left mt-2" v-if="$root.token">
                            <h6 class="text-14 font-weight-600 mb-2">{{profile.username}}</h6>
                            <h6 class="text-12">
                                View Profile
                            </h6>
                        </div>
                        <div class="text-left mt-2" v-else>
                            <h6 class="text-14 font-weight-600 mb-2">+ Add</h6>
                            
                        </div>


                    </div>
                    
                </div>
                </router-link>
                <div class="px-4 mx-2 text-left">
                    
                    <router-link :to="edit?'':$root.token?{name:'profile'}:{name:'sign-in'}">


                            <router-link :to="edit?'':{name:'home'}">
                                <h6 class="text-white text-14 font-weight-400 my-4" :class="active_menu=='home'?'':''" @click="active_menu='home'">Home</h6>
                            </router-link>
                            <router-link :to="edit?'':{name:'videos', params: { type: 'tv-shows'}}">
                                <h6 class="text-white text-14 font-weight-400 my-4" :class="active_menu=='tv-shows'?'':''" @click="active_menu='tv-shows'">TV Shows</h6>
                            </router-link>
                            <router-link :to="edit?'':{name:'videos', params: { type: 'movies'}}">
                                <h6 class="text-white text-14 font-weight-400 my-4" :class="active_menu=='movies'?'':''" @click="active_menu='movies'">Movies</h6>
                            </router-link>
                            <router-link :to="edit?'':{name:'videos', params: { type: 'web-series'}}">
                                <h6 class="text-white text-14 font-weight-400 my-4" :class="active_menu=='web-series'?'':''" @click="active_menu='web-series'">Web Series</h6>
                            </router-link>
                            <router-link :to="edit?'':{name:'videos', params: { type: 'short-filims'}}">
                                <h6 class="text-white text-14 font-weight-400 my-4" :class="active_menu=='short-filims'?'':''" @click="active_menu='short-filims'">Short Filims</h6>
                            </router-link>
                        


                        <h6 class="text-white text-14 font-weight-400 my-4">Buy Plan</h6>
                        <h6 class="text-white text-14 font-weight-400 my-4">My Subcription</h6>
                        <h6 class="text-white text-14 font-weight-400 my-4">My Transactions</h6>
                        <h6 class="text-white text-14 font-weight-400 my-4">Watchlist</h6>
                    </router-link>
                   
                   
                </div>
                <hr>
                <div class="px-4 mx-2 text-left">
                  
                   <h6 class="text-white text-14 font-weight-400 my-4">Settings</h6>
                </div>
                <hr>
                <div class="px-4 mx-2 text-left">
                    <h6 class="text-white text-14 font-weight-400 my-4">About Us</h6>
                </div>
                <hr>
                <div class="px-4 mx-2 text-left">
                    <h6 class="text-white text-14 font-weight-400 my-4" @click="signOut()">Sign Out</h6>
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
  @import '/videot_mobile/style/style.css';
  @import '/videot_mobile/style/style-2.css';



</style>
