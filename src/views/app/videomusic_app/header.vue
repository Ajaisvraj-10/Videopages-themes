
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
                    
                    
                </div>
                <div class="text-center header-right flex-align3" style="gap:10px;" >
                        
                       <div class="search-input" @click="search_page='open'">
                            <img src="/videomusic_app/images/search.png" class="mr-2">
                        </div>
                        <div class="search_section">
                            <div class="search-box m-3 flex-align2" style="gap:15px;">
                                <img src="/videomusic_app/images/nav_left.png" style="width:20px;" @click="search_page='close'">
                                <div class="search-bar">
                                    <!--<img src="/videomusic_app/images/search.png" class="" style="width:22px;">-->
                                    <input placeholder="search for Movies, Shows etc" @input="searchMovies()">
                                </div>
                            </div>
                            <div class="search-movies row m-2">
                                <div class="col-4 p-2" v-for="(movie,key) in search_movies" v-if="key<9">
                                    <router-link :to="edit?'':{name:'video',params: { type: slugify(movie.type), category: slugify(movie.category_detail.name), slug: movie.slug }, query: {language:movie.language_detail.name}}">
                                        <img :src="movie.thumbnail">
                                    </router-link>
                                </div>
                                <div class="col-12 p-2 text-14 text-center" v-if="search_movies.length>9">
                                    <router-link :to="{name:'videos', params: { type: 'search'}, query: { tag: search}}">More results</router-link>
                                </div>
                            </div>
                        </div>
                        <div class="mobile-menu" v-b-toggle.sidebar-1>
                            <img src="/videomusic_app/images/myphoto.jpg" class="profile-pic">
                            <img src="/videomusic_app/images/myphoto2.jpg"class="profile-pic profile-2">
                            
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
                <div class="search-header w-100">
                   
                    <img src="/videomusic_app/images/nav_left.png" style="width:20px;" v-b-toggle.sidebar-1>
                    
                    <div class="header-logo">
                        <router-link :to="edit?'':{name:'home'}">
                          <img src="/videomusic_app/images/logo.png" class="logo">
                        </router-link>             
                    </div>
                    <div></div>
                                        
                </div>
                <router-link :to="edit?'':$root.token?{name:'profile'}:{name:'sign-in'}">
                <div class="sidebar-header p-4 mx-3 flex-align" >
                    <div  class="flex-align3" style="gap:20px;">
                        <div class="user-img position-relative">
                            <img src="/videomusic_app/images/myphoto.jpg" class="profile-pic" style="width:45px!important;height:45px!important;">
                            <img src="/videomusic_app/images/myphoto2.jpg"class="profile-pic profile-2" style="width:45px!important;height:45px!important;">
                        </div>
                        <div class="text-left" v-if="$root.token">
                            <h6 class="text-18 font-weight-600 mb-2">{{profile.username}}</h6>
                            <h6 class="text-12">
                                View Profile
                            </h6>
                        </div>
                        <div class="text-left" v-else>
                            <h6 class="text-18 font-weight-600 mb-2">Guest</h6>
                            <h6 class="text-12">Signup to get started</h6>
                        </div>

                    </div>

                   
                </div>
                <button type="submit" id="capcee" >Sign Up</button>
                <hr>
                </router-link>
                <div class="px-3 text-left">
                    
                    <router-link :to="edit?'':$root.token?{name:'profile'}:{name:'sign-in'}">
                        <h6 class="text-white text-18 font-weight-400 m-4 py-1">Buy Plan</h6>
                        <h6 class="text-white text-18 font-weight-400 m-4 py-1">My Subcription</h6>
                        <h6 class="text-white text-18 font-weight-400 m-4 py-1">My Transactions</h6>
                        <h6 class="text-white text-18 font-weight-400 m-4 py-1">Watchlist</h6>
                    </router-link>
                   
                   
                </div>
               
                <div class="px-3 text-left">
                  
                   <h6 class="text-white text-18 font-weight-400 m-4 py-1">Settings</h6>
                </div>
               
                <div class="px-3 text-left">
                    <h6 class="text-white text-18 font-weight-400 m-4 py-1">About Us</h6>
                </div>
               
                <div class="px-3 text-left">
                    <h6 class="text-white text-18 font-weight-400 m-4 py-1" @click="signOut()">Sign Out</h6>
                </div>
                
            </b-sidebar>
        </header> 
        <div class="footer-app">
            <router-link to="/">
            <div class="footer-item active-footer-item">
                <img src="/videomusic_app/images/home.png">
                <h6>Home</h6>
            </div>
            </router-link>
            <router-link to="/plan">
            <div class="footer-item">
                <img src="/videomusic_app/images/plan.png">
                <h6>Plan</h6>
            </div>
            </router-link>
            <router-link to="/profile">
            <div class="footer-item">
                <img src="/videomusic_app/images/profile2.png">
                <h6>Profile</h6>
            </div>
            </router-link>
            <router-link to="/sign-in">
            <div class="footer-item">
                <img src="/videomusic_app/images/login.png">
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
  @import '/videomusic_app/style/style.css';
  @import '/videomusic_app/style/style-2.css';


#capcee {
    width: 340px;
    height: 50px;
    font-size: 20px;
    color: lightgray;
    background:#1e4e50;
    border: 0.5px solid #313131;
    border-radius: 6px;
    margin: 0 auto 20px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-weight: 500;
}



.profile-pic{
    width: 35px!important;
    height: 35px!important;
    border-radius: 50%;
    object-fit: cover;
}
.profile-2{
    position: absolute;
    top: 0;
    left: 0;
    animation: mymove 2s infinite;

}


@keyframes mymove {
  0%  {opacity: 1;}
  50%  {opacity: 0;}
  100% {opacity: 1;}
}
</style>
