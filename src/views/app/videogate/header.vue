
<template>
    <div :class="menu_click?'nav-active':''">
        <!--<div class="dark">
            <h6 class="light-mode" @click="$root.mode='light'"> <i class="fa fa-moon-o mr-1"></i>Light Mode{{$root.mode}}</h6>
            <h6 class="dark-mode" @click="$root.mode='dark'"><i class="fa fa-sun-o mr-1"></i>Dark Mode</h6>
        </div>-->
        <header class="header-holder-2" >             
            <div class="menu-wrapper  d-flex align-items-center justify-content-between"> 
                <div class="flex-align3">         
                    <div class="header-logo" v-show="site_header[0].status">
                        <router-link :to="edit?'':{name:'home'}">
                            <img :src="frontent_settings.main_logo" class="logo">
                        </router-link>             
                    </div>
                    <div class="menu-home" >
                        <ul class="home-nav" >
                            <router-link to="/">
                                <li :class="active_menu=='home'?'active-nav':''" >Home</li>
                            </router-link>
                            <router-link v-for="header in site_header" :to="edit?'':header.link" v-if="header.header_type=='Menu' && header.status">
                                <li :class="active_menu==header.name?'active-nav':''" @click="active_menu=header.name">{{header.name}}</li>
                            </router-link>
                            <div class="min-650" v-if="$root.token">
                                <router-link :to="edit?'':{name:'profile'}">
                                    <button class="btn login-btn mr-2" style="background-color: initial;color: white;font-size: 13px;font-weight: 500;border: 1px solid white;border-radius: 5px;">Profile</button>
                                </router-link>
                                <router-link :to="edit?'':{name:'plan'}">
                                    <button class="btn button-capcee" >UPGRADE PLAN</button>
                                </router-link>
                            </div>
                            <div class="min-650" v-else>
                                <router-link :to="edit?'':{name:'sign-in'}">
                                    <button class="btn login-btn mr-2" style="background-color: initial;color: white;font-size: 13px;font-weight: 500;border: 1px solid white;border-radius: 5px;">LOGIN</button>
                                </router-link>
                                <router-link :to="edit?'':{name:'plan'}">

                                    <button class="btn button-capcee">BUY PLAN</button>
                                </router-link>
                            </div>
                        </ul>

                    </div>
                    
                    <div class="search-input ml-md-3 ml-1">
                        
                        <h6 class="text-14 font-weight-600 d-flex align-items-center" @click="searchResult()">
                            <img src="/videogate/images/search.svg" class=" cursor-pointer" >
                            Search 
                        </h6>

                        <!--<input type="text" v-model="search" placeholder="search for Movies, Shows, channels etc.">-->
                    </div>
                </div>
                <div class="text-center header-right flex-align3" style="gap:20px;">
                        
                    
                    <div class="max-650" v-if="$root.token">
                        <router-link :to="edit?'':{name:'profile'}">
                            <button class="btn login-btn mr-2" style="background-color: initial;color: white;font-size: 16px;font-weight: 500;border: none;">Profile</button>
                        </router-link>
                        <router-link :to="edit?'':{name:'plan'}">
                            <button class="btn py-1 button-capcee" >UPGRADE PLAN</button>
                        </router-link>
                    </div>
                    <div class="max-650" v-else>
                        <router-link :to="edit?'':{name:'sign-in'}">
                            <button class="btn login-btn mr-2" style="background-color: initial;color: white;font-size: 16px;font-weight: 500;border: none;">LOGIN</button>
                        </router-link>
                        <router-link :to="edit?'':{name:'plan'}">

                            <button class="btn py-1 button-capcee" >BUY PLAN</button>
                        </router-link>
                    </div>

                    <div class="max-990" @click="menu_click=!menu_click">
                        <h6 class="text-light text-22" v-if="menu_click"><i class="fa fa-close"></i></h6>
                        <h6 class="text-light text-22" v-else><i class="fa fa-bars"></i></h6>
                    </div>
                 
                    <!--<div class="profile-sec">
                        <a class=" text-white flex-align3 mx-2" >
                            <img src="/images/profile.png" style="width:28px!important;" class="mr-2">
                            <h6 class="text-13  min-768">Arunghosh</h6>
                            <i class="fa fa-caret-down text-light ml-2"></i>
                        </a>
                        <div class="profile-dropdown">
                            <div class="profile-nav">
                                <router-link to="home">
                                    <h6 class="text-14">Sign out</h6>
                                </router-link>
                            </div>
                        </div>
                    </div>-->
                      
                </div>
            </div>
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
        site_header:[],
    };
  },
    mounted(){
    // this.active_menu = ''
    if(this.$route.params.type){
        this.active_menu = this.$route.params.type
    }
    this.getHeader()
  },
  methods: {
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
  @import '/videogate/style/style.css';
  @import '/videogate/style/style-2.css';



</style>
