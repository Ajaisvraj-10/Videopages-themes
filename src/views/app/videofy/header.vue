
<template>
    <div :class="background_start?'':'ott-scroll'">
    <div :class="menu_click?'nav-active':''">
        <header class="header-holder-2" >             
            <div class="menu-wrapper  d-flex align-items-center justify-content-between"> 
                <div class="header-left d-flex justify-content-between w-100">  
                    <div class="flex-align2" style="gap:7px;"> 
                        <div class="menubar" @click="menu_click='visible'">
                            <img src="/videofy/images/menubar.png">
                        </div>      
                        <div class="header-angle">
                            <img src="/videofy/images/prev.png">
                            <img src="/videofy/images/next.png">
                            
                        </div>
                        
                        <div class="header-logo max-768" v-show="site_header[0].status">
                            <router-link :to="edit?'':{name:'home'}">
                                <img :src="frontent_settings.main_logo" class="logo" style="max-width:90px;width:auto;max-height:46px;">
                            </router-link>             
                        </div>
                    </div>

                    <div class="menu-home" >
                        <ul class="home-nav" >
                            
                            <div class="d-flex" v-if="$root.token">
                                
                                <router-link :to="edit?'':{name:'plan'}">
                                    <button class="btn plan-btn  min-768" style="gap:7px;" ><img src="/videofy/images/plan.png"  style="width:20px;"> Upgrade Plan</button>
                                </router-link>
                                <router-link :to="edit?'':{name:'profile'}">
                                    <button class="btn login-btn ml-2 " style="gap:7px;"><img src="/all-images/user.png"  style="width:20px;"><div style="max-width:100px;text-overflow: ellipsis;overflow:hidden;white-space:nowrap;">User Name</div></button>
                                </router-link>
                            </div>
                            <div class="flex-align2" v-else>
                                <router-link :to="edit?'':{name:'plan'}">
                                    <button class="btn plan-btn  min-768" >Buy Plan</button>
                                </router-link>
                                <router-link :to="edit?'':{name:'sign-in'}">
                                    <button class="btn login-btn  ml-2" >Login</button>
                                </router-link>
                            </div>
                        </ul>

                    </div>
                    
                </div>
                
            </div>
        </header> 
        <div class="sidebar" :class="menu_click=='visible'?'sidebar_active':''">
            <div class="header-logo flex-align" v-show="site_header[0].status">
                        <router-link :to="edit?'':{name:'home'}">
                            <img :src="frontent_settings.main_logo" class="logo">
                        </router-link>
                        <div class="menubar" @click="menu_click='hide'">
                            <img src="/videofy/images/close.png">
                        </div>             
            </div>
            <div class="sidebar-sec mt-2">
                <router-link to="/">
                    <div class="sidebar-child" >
                        <img src="/videofy/images/home.png">
                        Home
                    </div>
                </router-link>
                <div class="sidebar-child" @click="searchResult()">
                    <img src="/videofy/images/search.png">
                    Search
                </div>
                <router-link :to="edit?'':{name:'profile'}">
                    <div class="sidebar-child">
                        <img src="/videofy/images/user.png">
                        Profile
                    </div>
                </router-link>
                
                <router-link :to="edit?'':{name:'plan'}">
                    <div class="sidebar-child">
                        <img src="/videofy/images/plan.png">
                        Plan
                    </div>
                </router-link>


                <router-link :to="edit?'':{name:'sign-in'}">
                    <div class="sidebar-child">
                        <img src="/videofy/images/log-in.png">
                        Sign In
                    </div>
                </router-link>

            </div>
            <hr style="opacity:.3;">
            <router-link v-for="header in site_header" :to="edit?'':header.link" v-if="header.header_type=='Menu' && header.status">
                <li :class="active_menu==header.name?'active-nav':''" class="sidebar-child" @click="active_menu=header.name"><img src="/videofy/images/pause.png">{{header.name}}</li>
            </router-link>
        </div>
        
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
        site_header:[],
        background_start:true,
        lastScrollPosition: 0,
        menu_click:'hide',
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
  @import '/videofy/style/style.css';
  @import '/videofy/style/style-2.css';

.sidebar {
    width: 240px;
    height: 100vh;
    overflow: auto;
    position: fixed;
    left: 0;
    top: 0;
    background-color: black;
    padding:15px 20px;
}
.header-angle{
    display:flex;
    gap:15px;

}
.header-angle img{
    width:32px;
    height:32px;
    border-radius:50%;
    padding:8px;
    background:rgba(0,0,0,.7);
    cursor:pointer;
}
.sidebar-child{
    color:white;
    list-style:none;
    font-weight:500;
    padding:10px 10px 10px 0;
    display:flex;
    gap:10px;
    align-items:center;
    font-size:15px;
    opacity:.97;
    cursor:pointer;
}
.sidebar-child:hover{
   
    opacity:1;
}
.sidebar-child img{
    width:22px;
    height:22px;
}
.menubar{
    display:none;
}
.menubar img{
    width:20px;
}
@media screen and (max-width: 990px) {
    .menubar{
       display:block;
    }
    .sidebar {
        left: -240px;
        transition:.3s;
        z-index:99999999;
    }
    .sidebar.sidebar_active{
        left:0;
        
        width:100%;
        transition:.3s;
    }
    .header-holder-2 {
        width:100%;
        left:0;
    }
 
   
}
</style>
