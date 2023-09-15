
<template>
    <div class="" :class="background_start?'':'ott-scroll'">
        <div :class="menu_click?'nav-active':''">
            <Mainsearch ></Mainsearch>
            <header class="header-holder-2" >             
                <div class="menu-wrapper row d-flex align-items-center justify-content-between"> 
                    <div class="flex-align3 col-lg-2 col-6 p-0">         
                        <div class="header-logo" v-show="site_header[0].status">
                            <router-link :to="edit?'':{name:'home'}">
                                <img :src="frontent_settings.main_logo" class="logo">
                            </router-link>             
                        </div>
                    </div>
                    <div class="menu-home col-8" >
                            <ul class="home-nav p-0" >
                                <router-link  to="/">
                                    <li class="active_menu==header.name?'active-nav':''">
                                        Home
                                    </li>
                                </router-link>
                                <router-link  to="/profile">
                                    <li class="">
                                        Profile
                                    </li>
                                </router-link>
                                
                                <li class="" v-if="$root.token" style="display:flex;gap:10px;">
                                        <router-link :to="edit?'':{name:'plan'}">
                                            <li class="" >Upgrade Plan</li>
                                        </router-link>
                                </li>
                                <li class="" v-else style="display:flex;gap:10px;align-items: center;">
                                        <router-link :to="edit?'':{name:'plan'}">
                                                <li class="" >Buy Plan</li>
                                        </router-link>
                                </li>
                                <li class="d-flex min-990" @click="$root.search_tab=!$root.search_tab">
                                    <img src="/videomusic/images/search.svg" class="search-icon" >
                                    Search
                                </li>
                               
                            </ul>
                    </div>

                    <div class="text-center header-right col-lg-2 col-6 p-0" style="gap:20px;display: flex;justify-content: flex-end;align-items: center;">
                        <div class="d-flex align-items-center max-990" @click="$root.search_tab=!$root.search_tab">
                            <img src="/videomusic/images/search.svg" class="search-icon mr-0" >
                                    
                        </div>
                        <div class="" v-if="$root.token" style="display:flex;gap:10px;">
                            
                            <router-link :to="edit?'':{name:'profile'}">
                                <div class="mobile-menu position-relative" v-b-toggle.sidebar-1>
                                    <img src="/videomusic/images/myphoto.jpg" class="profile-pic">
                                    <img src="/videomusic/images/myphoto2.jpg"class="profile-pic profile-2">
                                    
                                </div>
                            </router-link>
                        </div>
                        <div class="" v-else style="display:flex;gap:10px;align-items: center;justify-content: end;">
                             <router-link :to="edit?'':{name:'sign-in'}">
                                <button class="btn login-btn">Sign In</button>
                            </router-link>
                        </div>

                        <div class="max-990 " @click="menu_click=!menu_click" style="z-index:9;">
                            
                            <h6 class=" text-23 text-light " v-if="menu_click"><img src="/videomusic/images/nav_right.png" style="width:20px;"></h6>
                            <h6 class=" text-23 text-light " v-else><i class="fa fa-bars"></i></h6>

                        </div>
                    </div>
                </div>
                
            </header> 
            

        </div>
        <ul id="content" class="home-nav2" >
            <router-link v-for="header in site_header" :to="edit?'':header.link" v-if="header.header_type=='Menu' && header.status">
                <li :class="active_menu==header.name?'active-nav':''" @click="active_menu=header.name">{{header.name}}</li>
            </router-link>

        </ul>
    </div>
</template>
<script>
import Mainsearch from '/src/views/app/videomusic/movies'
export default {
  props: ['edit','blocks','current_block'],
    components:{
        
        Mainsearch,
    },
  data() {
    return {
        active_menu:'home',
        search:'',
        site_header:[],
       

        background_start:true,
        lastScrollPosition: 0,
    };
  },
  mounted(){
    this.active_menu = ''
    if(this.$route.params.type){
        this.active_menu = this.$route.params.type
    }
    this.getHeader()
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
    searchResult(){
        this.$router.push({name:'videos', params: { type: 'search'}, query: { tag: this.search}})
    },
    getHeader() {
      var headers = new Headers();
      headers.append("Authorization", "Token "+this.$root.token);
      fetch(this.api_url+'/content/site_header/?theme='+theme_name, {
          method : 'get',
          headers: headers,
      })
      .then((response) => {
          return response.json()
      })
      .then((jsonData) => {
          this.site_header = jsonData
      })
    },
  }

};
</script>
<style scoped>
  @import '/videomusic/style/style.css';
  @import '/videomusic/style/style-2.css';

.search-icon{
    width:18px;
    margin-right:10px;
    opacity:.8;
}
.home-nav li:hover .search-icon{
    opacity:1;
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
