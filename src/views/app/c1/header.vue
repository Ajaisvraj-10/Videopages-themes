
<template>
    <div>
        <!--<div class="profile-icon">
            <div class="mobile-menu" v-b-toggle.sidebar-1>
                <img src="/all-images/myphoto.jpg" class="profile-pic">
                <img src="/all-images/myphoto2.jpg"class="profile-pic profile-2">
            </div>
        </div>-->

        <header class="header-holder-2" :class="search_page=='open'?'sidebar_active':''">             
            <div class="menu-wrapper  d-flex align-items-center justify-content-between"> 
                <div class="text-center header-left flex-align3" style="gap:10px;" >
                    <div class="mobile-menu" v-b-toggle.sidebar-1>
                        <img src="/all-images/menu2.png" style="width:28px;height:28px;opacity:.8;">
                    </div>
                    <router-link to="/">
                        <div class="back-btn">
                            <img src="/all-images/nav_left.png" style="width:26px;height:24px;">
                        </div>  
                    </router-link>
                    <h6 class="text-16 font-weight-400 mb-0">Home</h6>  
                        
                </div>
                <!--<div class="flex-align3">         
                    <div class="header-logo">
                        <router-link :to="edit?'':{name:'home'}">
                            <img :src="frontent_settings.main_logo" class="logo">
                        </router-link>             
                    </div>
                </div>-->
                <div class="text-center header-left flex-align3" style="gap:20px;" >
                    <div class="search-input" @click="search_page='open'">
                            <img src="/all-images/search.svg" class="">
                    </div>
                    <div class="search_section">
                            <div class="search-header">
                                <img src="/all-images/nav_left.png" style="width:20px;" @click="search_page='close'">
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
                                <div class="col-12 p-2 text-14 text-center" v-if="search_movies.length>9">
                                    <router-link :to="{name:'videos', params: { type: 'search'}, query: { tag: search}}">More results</router-link>
                                </div>
                            </div>
                    </div>
                    <div class="category-btn" :class="menu?'category_off':''">
                        <img src="/all-images/dots.png" class="" style="width:22px;" @click="menu=!menu">
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

                    </div>
                </div>
            </div>
            

            <b-sidebar id="sidebar-1" title="Sidebar" no-header left width="90%" style="max-width:500px;" backdrop shadow>
                <!--<div class="search-header w-100">
                   
                    <img src="/all-images/nav_left.png" style="width:20px;" v-b-toggle.sidebar-1>
                    
                    <div class="header-logo">
                        <router-link :to="edit?'':{name:'home'}">
                          <img src="/all-images/logo.png" class="logo">
                        </router-link>             
                    </div>
                    <div></div>
                                        
                </div>-->
                <div class="py-2" style="background:#353a40">
                    <router-link :to="edit?'':$root.token?{name:'profile'}:{name:'sign-in'}">
                        <div class="sidebar-header px-4 pt-4 pb-2 mx-3 flex-align" >
                            <div  class="flex-align3" style="gap:5px;flex-direction: column;margin: 0 auto;">
                                <div class="user-img position-relative">
                                    <img src="/all-images/myphoto.jpg" class="profile-pic" style="width:55px!important;height:55px!important;">
                                    <img src="/all-images/myphoto2.jpg" class="profile-pic profile-2" style="width:55px!important;height:55px!important;">
                                </div>
                                <div class="text-center" v-if="$root.token">
                                    <h6 class="text-18 font-weight-600 mb-1">{{profile.username}}</h6>
                                    <h6 class="text-12 mb-1">
                                        View Profile
                                    </h6>
                                </div>
                                <div class="text-center" v-else>
                                    <h6 class="text-18 font-weight-600 mb-2">Guest</h6>
                                    <h6 class="text-12">Signup to get started</h6>
                                </div>
                            </div>
                        </div>
                        <div  class="px-4">
                            <button  type="submit" id="capcee" >Sign Up</button>
                        </div>
                    </router-link>
                </div>
                <router-link to="/" >
                   <h6 class="text-white text-18 font-weight-400 m-4 px-3 py-1">
                        <img src="/all-images/home.png" style="width:20px;height:20px;" class="mr-2">
                        Home
                    </h6>
                </router-link>
                <div class="px-3 text-left">
                    <router-link :to="edit?'':$root.token?{name:'profile', query:{tab:'subcriptions'}}:{name:'sign-in'}">
                        
                        <h6 class="text-white text-18 font-weight-400 m-4 py-2">
                            <img src="/all-images/king.png" style="width:20px;height:20px;" class="mr-2">
                            My Subcription
                        </h6>
                    </router-link>
                </div>
                <div class="px-3 text-left">
                    <router-link :to="edit?'':$root.token?{name:'profile', query:{tab:'transactions'}}:{name:'sign-in'}">
                        <h6 class="text-white text-18 font-weight-400 m-4 py-2">
                            <img src="/all-images/up-arrow.png" style="width:20px;height:20px;" class="mr-2">
                            My Transactions
                        </h6>
                    </router-link>
                </div>
                <div class="px-3 text-left">
                    <router-link :to="edit?'':$root.token?{name:'profile', query:{tab:'watchlist'}}:{name:'sign-in'}">
                        <h6 class="text-white text-18 font-weight-400 m-4 py-2">
                            <img src="/all-images/bookmark.png" style="width:20px;height:20px;" class="mr-2">
                            Watchlist
                        </h6>
                    </router-link>
                </div>
                <router-link to="/plan" >
                    <h6 class="text-white text-18 font-weight-400 m-4 px-3 py-1">
                        <img src="/all-images/plan.png" style="width:20px;height:20px;" class="mr-2">
                        Buy Plan
                    </h6>
                </router-link>
                <div class="px-3 text-left">
                   <h6 class="text-white text-18 font-weight-400 m-4 py-1">
                        <img src="/all-images/setting.png" style="width:20px;height:20px;" class="mr-2">
                        Settings
                    </h6>
                </div>
                
                <div class="px-3 text-left">
                    <h6 class="text-white text-18 font-weight-400 m-4 py-1">
                        <img src="/all-images/about-us.png" style="width:20px;height:20px;" class="mr-2">
                        About Us
                    </h6>
                </div>
               
                <div class="px-3 text-left">
                    <h6 class="text-white text-18 font-weight-400 m-4 py-1" @click="signOut()">
                         <img src="/all-images/login.png" style="width:20px;height:20px;" class="mr-2">
                        Sign Out
                    </h6>
                </div>
                
            </b-sidebar>
        </header> 
        <!--<div class="footer-app">
            <router-link to="/">
            <div class="footer-item active-footer-item">
                <img src="/all-images/home-active.png">
                <h6>Home</h6>
            </div>
            </router-link>
            <router-link to="/plan">
            <div class="footer-item">
                <img src="/all-images/plan.png">
                <h6>Plan</h6>
            </div>
            </router-link>
            <router-link to="/profile">
            <div class="footer-item">
                <img src="/all-images/profile2.png">
                <h6>Profile</h6>
            </div>
            </router-link>
            <router-link to="/sign-in">
            <div class="footer-item">
                <img src="/all-images/login.png">
                <h6>Login</h6>
            </div>
            </router-link>
        </div>-->
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
        menu:'false'
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
  @import '/c1/style/style.css';
  @import '/c1/style/style-2.css';



#capcee {
    width: 100%;
    max-width:340px;
    height: 50px;
    font-size: 20px;
    color: lightgray;
    background:linear-gradient(45deg, var(--yellow), #ff9e4d);
    color:black;
    border: 0.5px solid #313131;
    border-radius: 6px;
    margin: 0 auto 20px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-weight: 500;
}


.profile-icon{
   position: absolute;
    right: 20px;
    bottom: 20px;
    z-index: 9;
    cursor:pointer;
    
}
.profile-pic{
    width: 45px!important;
    height: 45px!important;
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
.b-sidebar-backdrop {
    position: fixed !important;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    background-color: #070809;
    opacity: 0.5;
}

.back-btn{
    display:none;
}

.watching-header header.header-holder-2 {
        background: initial;
}
.watching-header .header-left h6{
        display:none;
}
.watching-header  .back-btn{
    display:block;
}
.watching-header  .mobile-menu{
    display:none;
}
.ott-scroll .watching-header .header-holder-2 {

    background: #353a40!important;

}
</style>
