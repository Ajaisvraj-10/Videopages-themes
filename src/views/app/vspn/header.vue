
<template>
    <div :class="menu_click?'nav-active':''">
        <!--<div class="dark">
            <h6 class="light-mode" @click="$root.mode='light'"> <i class="fa fa-moon-o mr-1"></i>Light Mode{{$root.mode}}</h6>
            <h6 class="dark-mode" @click="$root.mode='dark'"><i class="fa fa-sun-o mr-1"></i>Dark Mode</h6>
        </div>-->
        <Mainlogin></Mainlogin>
        <Mainplan></Mainplan>

        <header class="header-holder-2" >             
            <div class="menu-wrapper">
                <div class="flex-align px-2" style="height:45px;background-color:black;"> 
                    <div class="flex-align3">         
                        <div class="header-logo" v-show="site_header[0].status">
                            <router-link :to="edit?'':{name:'home'}">
                                <img :src="frontent_settings.main_logo" class="logo">
                            </router-link>             
                        </div>
                        
                        
                    </div>
                    <div class="text-center header-right flex-align3" style="gap:20px;">
                            
                        <div class="search-input">
                            <img src="/vspn/images/search.svg" class="ml-2 cursor-pointer" @click="searchResult()">
                            <input type="text" v-model="search" placeholder="search for Movies, Shows, channels etc.">
                        </div>
                        <div class="" v-if="$root.token">
                            <router-link :to="edit?'':{name:'profile'}">
                                <button class="btn login-btn p-0" style="background-color: initial;color: white;font-size: 13px;font-weight: 500;">Profile</button>
                            </router-link>
                            
                        </div>
                        <div class="" v-else>
                            
                            <button class="btn login-btn p-0" @click="$root.login_open='open'" style="background-color: initial;color: white;font-size: 13px;font-weight: 500;z-index:9;">LOGIN</button>
                            
                            
                        </div>
                        <div class="max-650" v-if="$root.token">
                           
                            
                            <button class="btn" @click="$root.plan_open='open2'" style="background-color:initial;color: white;font-size: 13px;font-weight: 500;">UPGRADE PLAN</button>
                            
                        </div>
                        <div class="max-650" v-else>
                            
                                <button class="btn" @click="$root.plan_open='open2'" style="background-color:initial;color: white;font-size: 13px;font-weight: 500;">BUY PLAN</button>
                            
                        </div>

                        <div class="max-990 mr-1" style="z-index:99;" @click="menu_click=!menu_click">
                            
                            <h6 v-if="menu_click"  class="text-light text-22"><i class="fa fa-close ml-1" style="position:relative;right: 20px;"></i></h6>

                            <h6 v-else class="text-light text-22"><i class="fa fa-bars"></i></h6>
                        </div>
                          
                    </div>
                </div>
                <div class="menu-home flex-align px-2" style="height:40px;background-color:#252627;">
                        <ul class="home-nav pl-lg-0" >
                            <router-link v-for="header in site_header" :to="edit?'':header.link" v-if="header.header_type=='Menu' && header.status">
                                <li :class="active_menu==header.name?'active-nav':''" @click="active_menu=header.name">{{header.name}}</li>
                            </router-link>
                            <div class="min-650 mobile-plan" v-if="$root.token">
                                
                               
                                <button class="btn" @click="$root.plan_open='open2'" style="background-color: #fff;color: #000;font-size: 13px;font-weight: 500;border: 1px solid #fff;border-radius: 5px;">UPGRADE PLAN</button>
                               
                            </div>
                            <div class="min-650 mobile-plan" v-else>
                               
                                    <button class="btn" @click="$root.plan_open='open2'" style="background-color: #fff;color: #000;font-size: 13px;font-weight: 500;border: 1px solid #fff;border-radius: 5px;">BUY PLAN</button>
                                
                            </div>
                        </ul>

                </div>
            </div>
        </header> 
    </div>
</template>
<script>
import Mainlogin from '/src/views/app/vspn/sign-in'
import Mainplan from '/src/views/app/vspn/plan'


export default {
  props: ['edit','blocks','current_block'],
  components:{
    
    Mainlogin,
    Mainplan,

  },
  data() {
    return {
        active_menu:'home',
        search:'',
        site_header:[],
       
    };
  },
  mounted(){
    this.active_menu = ''
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
  @import '/vspn/style/style.css';
  @import '/vspn/style/style-2.css';



</style>
