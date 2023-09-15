
<template>
    <div :class="menu_click?'nav-active':''">
        <!--<div class="dark">
            <h6 class="light-mode" @click="$root.mode='light'"> <i class="fa fa-moon-o mr-1"></i>Light Mode</h6>
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
                            <router-link v-for="header in site_header" :to="edit?'':header.link" v-if="header.header_type=='Menu' && header.status">
                                <li :class="active_menu==header.name?'active-nav':''" @click="active_menu=header.name">{{header.name}}</li>
                            </router-link>
                            <div class="flex-align2 max-768" style="gap:15px;" v-if="$root.token">
                                <router-link :to="edit?'':{name:'profile'}">
                                    <button class="p-0 btn login-btn " style="background-color: initial;color: white;font-size: 13px;font-weight: 500;border: none;">Profile</button>
                                </router-link>
                                <router-link :to="edit?'':{name:'plan'}">
                                    <button class="btn plan-btn flex-align3" style="background-color: #2a2620;color: white;font-size: 13px;font-weight: 400;border: 1px solid #625336;border-radius: 15px;padding: 5px 10px;line-height:initial;"><img src="/videoplayer/images/king.png" style="width:14px;" class="mr-2">UPGRADE</button>
                                </router-link>
                            </div>
                            <div class="flex-align2 max-768" style="gap:15px;" v-else>
                                <router-link :to="edit?'':{name:'sign-in'}">
                                    <button class="p-0 btn login-btn " style="background-color: initial;color: white;font-size: 13px;font-weight: 500;border: none;">LOGIN</button>
                                </router-link>
                                <router-link :to="edit?'':{name:'plan'}">

                                    <button class="btn plan-btn flex-align3" style="background-color: #2a2620;color: white;font-size: 13px;font-weight: 400;border: 1px solid #625336;border-radius: 15px;padding: 5px 10px;line-height:initial;"><img src="/videoplayer/images/king.png" style="width:14px;" class="mr-2">PLAN</button>
                                </router-link>
                            </div>
                        </ul>

                    </div>
                    
                </div>
                <div class="text-center header-right flex-align3" style="gap:15px;">
                        
                    <div class="search-input">
                        <img src="/videoplayer/images/search.svg" class=" cursor-pointer" @click="searchResult()">
                        <!--<input type="text" v-model="search" placeholder="search for Movies, Shows, channels etc.">-->

                    </div>
                    <div class="flex-align2 min-768" style="gap:15px;" v-if="$root.token">
                        <router-link :to="edit?'':{name:'profile'}">
                            <button class="btn login-btn " style="background-color: initial;color: white;font-size: 13px;font-weight: 500;border: none;">Profile</button>
                        </router-link>
                        <router-link :to="edit?'':{name:'plan'}">
                            <button class="btn plan-btn flex-align3" style="background-color: #2a2620;color: white;font-size: 13px;font-weight: 400;border: 1px solid #625336;border-radius: 15px;padding: 5px 10px;line-height:initial;"><img src="/videoplayer/images/king.png" style="width:14px;" class="mr-2">UPGRADE</button>
                        </router-link>
                    </div>
                    <div class="flex-align2 min-768" style="gap:15px;" v-else>
                        <router-link :to="edit?'':{name:'sign-in'}">
                            <button class="btn login-btn" style="background-color: initial;color: white;font-size: 13px;font-weight: 500;border: none;">LOGIN</button>
                        </router-link>
                        <router-link :to="edit?'':{name:'plan'}">

                            <button class="btn plan-btn flex-align3" style="background-color: #2a2620;color: white;font-size: 13px;font-weight: 400;border: 1px solid #625336;border-radius: 15px;padding: 5px 10px;line-height:initial;"><img src="/videoplayer/images/king.png" style="width:14px;" class="mr-2">PLAN</button>
                        </router-link>
                    </div>
                    <div class="max-990" @click="menu_click=!menu_click">
                        <img src="/videoplayer/images/close.png" style="width:20px;" v-if="menu_click">
                        <img src="/videoplayer/images/menubar.png" style="width:22px;" v-else>

                    </div>

                  
                 
                   
                      
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
  @import '/videoplayer/style/style.css';
  @import '/videoplayer/style/style-2.css';



</style>
