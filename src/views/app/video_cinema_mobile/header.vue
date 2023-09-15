
<template>
    <div>
        
        <header class="header-holder-2" :class="search_page=='open'?'sidebar_active':''">             
            <div class="menu-wrapper  d-flex align-items-center justify-content-between"> 
                <div class="flex-align3">         
                    <div class="header-logo">
                        <router-link :to="edit?'':{name:'home'}">
                            <img :src="frontent_settings.main_logo" class="logo">
                        </router-link>             
                    </div>
                   
                    
                </div>
                <div class="text-center header-right flex-align3" style="gap:15px;" >
                        
                        <div class="search-input" @click="search_page='open'">
                            <img src="/video_cinema_mobile/images/find.png" class="">
                        </div>
                         <div v-b-toggle.sidebar-1>
                            <i class="fa fa-bars" style="font-size:24px;"></i>

                        </div> 
                        <div class="search_section">
                            <div class="search-header">
                                <img src="/video_cinema_mobile/images/prev.png" @click="search_page='close'" style="width:20px;">
                                <div class="search-bar">
                                    <img src="/video_cinema_mobile/images/search.svg" class="ml-2">
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
            

            <b-sidebar id="sidebar-1" title="Sidebar" no-header right width="100%" shadow>
               
                <router-link :to="edit?'':$root.token?{name:'profile'}:{name:'sign-in'}">
                <div class="sidebar-header m-3 flex-align" >
                    <div  class="flex-align3" style="gap:10px;">
                        <div class="user-img">
                            <i class="fa fa-user"></i>
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
                    <div>
                        <i class="fa fa-angle-right" style="color: white;font-size:25px;"></i>
                    </div>
                </div>
                </router-link>
                <div class="sidebar-items px-3 text-left">
                    <router-link :to="edit?'':{name:'home'}">
                        <h6 class="text-white text-14 font-weight-500 my-4">Home</h6>
                    </router-link>
                    <router-link :to="edit?'':{name:'videos', params: { type: 'tv-shows'}}">
                        <h6 class="text-white text-14 font-weight-500 my-4">TV Shows</h6>
                    </router-link>
                    <router-link :to="edit?'':{name:'videos', params: { type: 'movies'}}">
                        <h6 class="text-white text-14 font-weight-500 my-4">Movies</h6>
                    </router-link>
                    <router-link :to="edit?'':{name:'videos', params: { type: 'web-series'}}">
                        <h6 class="text-white text-14 font-weight-500 my-4">Web Series</h6>
                    </router-link>
                    <router-link :to="edit?'':{name:'videos', params: { type: 'short-filims'}}">
                        <h6 class="text-white text-14 font-weight-500 my-4">Short Filims</h6>
                    </router-link>
                </div>

                <div class="sidebar-items px-3 text-left">
                    
                    <router-link :to="edit?'':$root.token?{name:'profile'}:{name:'sign-in'}">
                        <h6 class="text-white text-14 font-weight-500 my-4">Buy Plan</h6>
                        <h6 class="text-white text-14 font-weight-500 my-4">My Subcription</h6>
                        <h6 class="text-white text-14 font-weight-500 my-4">My Transactions</h6>
                        <h6 class="text-white text-14 font-weight-500 my-4">Watchlist</h6>
                    </router-link>
                   
                   
                </div>
               
                <div class="sidebar-items px-3 text-left">
                  
                   <h6 class="text-white text-14 font-weight-500 my-4">Settings</h6>
                </div>
                
                <div class="sidebar-items px-3 text-left">
                    <h6 class="text-white text-14 font-weight-500 my-4">About Us</h6>
                </div>
               
                <div class="sidebar-items px-3 text-left" v-if="$root.token">
                    <h6 class="text-white text-14 font-weight-500 my-4" @click="signOut()">Sign Out</h6>
                </div>
                <div class="sidebar-close" v-b-toggle.sidebar-1>
                    <i class="fa fa-close" style="font-size:24px;"></i>
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
  @import '/video_cinema_mobile/style/style.css';
  @import '/video_cinema_mobile/style/style-2.css';



</style>
