
<template>
    <div :class="menu_click?'nav-active':''">
        <!--<div class="dark">
            <h6 class="light-mode" @click="mode='light'"> <i class="fa fa-moon-o mr-1"></i>Light Mode</h6>
            <h6 class="dark-mode" @click="mode='dark'"><i class="fa fa-sun-o mr-1"></i>Dark Mode</h6>
        </div>-->
        <header class="header-holder-2" >             
            <div class="menu-wrapper  d-flex align-items-center justify-content-between" > 
                <div class="flex-align3" style="gap:10px;"> 
                    <div class="max-990 ml-2" @click="menu_click=!menu_click">
                        <h6 class="text-light text-22" v-if="menu_click"><i class="fa fa-close" ></i></h6>
                        <h6 class="text-light text-22" v-else><i class="fa fa-bars"></i></h6>
                    </div>         
                    <div class="header-logo">
                        <router-link :to="edit?'':{name:'home'}">
                            <img :src="frontent_settings.main_logo" class="logo">
                        </router-link>             
                    </div>
                    <div class="buttons-for-web" v-if="$root.token" style="gap:15px;display:flex;border-left:1px solid white;padding-left:15px;">
                        <router-link :to="edit?'':{name:'profile'}">
                            <button class="btn login-btn" style="background-color: initial;color: white;font-size: 13px;font-weight: 500;border: 1px solid white;border-radius: 5px;">Profile</button>
                        </router-link>
                        <router-link :to="edit?'':{name:'plan'}">
                            <button class="btn" style="background-color: #29d4b6;color: black;font-size: 13px;font-weight: 500;border: 1px solid #29d4b6;border-radius: 5px;">UPGRADE PLAN</button>
                        </router-link>
                    </div>
                    <div class="buttons-for-web" v-else style="gap:15px;display:flex;border-left:1px solid white;padding-left:15px;">
                        <router-link :to="edit?'':{name:'sign-in'}">
                            <button class="btn login-btn" style="background-color: initial;color: white;font-size: 13px;font-weight: 500;border: 1px solid white;border-radius: 5px;">LOGIN</button>
                        </router-link>
                        <router-link :to="edit?'':{name:'plan'}">

                            <button class="btn" style="background-color: #29d4b6;color: black;font-size: 13px;font-weight: 500;border: 1px solid #29d4b6;border-radius: 5px;">BUY PLAN</button>
                        </router-link>
                    </div>
                    
                </div>
                <div class="text-center header-right flex-align3" style="gap:10px;height: 80px;">
                    <div class="menu-home h-100" >
                        <ul class="home-nav" >
                            <router-link v-for="header in site_header" :to="edit?'':header.link" v-if="header.header_type=='Menu' && header.status">
                                <li :class="active_menu==header.name?'active-nav':''" @click="active_menu=header.name">{{header.name}}</li>
                            </router-link>
                            <div class="buttons-for-mob" v-if="$root.token" style="gap:15px;display:flex;border-left:1px solid white;padding-left:15px;">
                                <router-link :to="edit?'':{name:'profile'}">
                                    <button class="btn login-btn" style="background-color: initial;color: white;font-size: 13px;font-weight: 500;border: 1px solid white;border-radius: 5px;">Profile</button>
                                </router-link>
                                <router-link :to="edit?'':{name:'plan'}">
                                    <button class="btn" style="background-color: #29d4b6;color: black;font-size: 13px;font-weight: 500;border: 1px solid #29d4b6;border-radius: 5px;">UPGRADE PLAN</button>
                                </router-link>
                            </div>
                            <div class="buttons-for-mob" v-else style="gap:15px;display:flex;border-left:1px solid white;padding-left:15px;">
                                <router-link :to="edit?'':{name:'sign-in'}">
                                    <button class="btn login-btn" style="background-color: initial;color: white;font-size: 13px;font-weight: 500;border: 1px solid white;border-radius: 5px;">LOGIN</button>
                                </router-link>
                                <router-link :to="edit?'':{name:'plan'}">

                                    <button class="btn" style="background-color: #29d4b6;color: black;font-size: 13px;font-weight: 500;border: 1px solid #29d4b6;border-radius: 5px;">BUY PLAN</button>
                                </router-link>
                            </div>
                        </ul>

                    </div>
                      
                    <div class="search-input">
                        <img src="/videoot/images/search.svg" class="ml-2 cursor-pointer" @click="searchResult()">
                       
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
  @import '/videoot/style/style.css';
  @import '/videoot/style/style-2.css';



</style>
