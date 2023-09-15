
<template>
    <div :class="background_start?'':'ott-scroll'">
    <div :class="menu_click?'nav-active':''">
        
        <header class="header-holder-2" >             
            <div class="menu-wrapper  d-flex align-items-center justify-content-between"> 
                <div class="header-left">         
                    <div class="header-logo" v-show="site_header[0].status">
                        <router-link :to="edit?'':{name:'home'}">
                            <img :src="frontent_settings.main_logo" class="logo">
                        </router-link>             
                    </div>
                    <div class="menu-home" >
                        <ul class="home-nav" >
                            <router-link v-for="header in site_header" :to="edit?'':header.link" v-if="header.header_type=='Menu' && header.status">
                                <li :class="active_menu==header.name?'active-nav':''" @click="active_menu=header.name">{{header.name}}</li>
                            </router-link>
                            <div class="min-650" v-if="$root.token">
                                <router-link :to="edit?'':{name:'profile'}">
                                    <button class="btn login-btn border mr-2" >Profile</button>
                                </router-link>
                                <router-link :to="edit?'':{name:'plan'}">
                                    <button class="btn plan-btn border mr-2" >UPGRADE PLAN</button>
                                </router-link>
                            </div>
                            <div class="min-650" v-else>
                                <router-link :to="edit?'':{name:'sign-in'}">
                                    <button class="btn login-btn border mr-2" >LOGIN</button>
                                </router-link>
                                <router-link :to="edit?'':{name:'plan'}">

                                    <button class="btn plan-btn border mr-2" >BUY PLAN</button>
                                </router-link>
                            </div>
                        </ul>

                    </div>
                    
                </div>
                <div class="text-center header-right flex-align3" style="gap:10px;">
                    
                    <div class="search-input">
                        <img src="/videoplay/images/search.svg" class=" cursor-pointer" @click="searchResult()">
                        <input  type="text" v-model="search" placeholder="search for Movies, Shows, channels etc." v-if="$route.path!='/'">
                    </div>
                    <div class="max-650" v-if="$root.token">
                        <router-link :to="edit?'':{name:'profile'}">
                            <button class="btn login-btn">Profile</button>
                        </router-link>
                        <router-link :to="edit?'':{name:'plan'}">
                            <button class="btn  plan-btn" >UPGRADE PLAN</button>
                        </router-link>
                    </div>
                    <div class="max-650" v-else>
                        <router-link :to="edit?'':{name:'sign-in'}">
                            <button class="btn login-btn " >LOGIN</button>
                        </router-link>
                        <router-link :to="edit?'':{name:'plan'}">

                            <button class="btn plan-btn" >BUY PLAN</button>
                        </router-link>
                    </div>

                  
                 
                    <div class="max-990" @click="menu_click=!menu_click">
                        
                        <img  v-if="menu_click" src="/videoplay/images/close.png" style="width:20px;opacity:.6;">
                        <img v-else src="/videoplay/images/menubar.png" style="width:22px;opacity:.6;">
                    </div>
                      
                </div>
            </div>
        </header> 
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
  @import '/videoplay/style/style.css';
  @import '/videoplay/style/style-2.css';



</style>
