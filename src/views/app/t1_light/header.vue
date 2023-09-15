
<template>
    <div :class="menu_click?'nav-active':''">
       
        <header class="header-holder-2" v-if="is_start">             
            <div class="menu-wrapper  d-flex align-items-center justify-content-between"> 
                <div class="flex-align3">         
                    <div class="header-logo" v-show="site_header[0].status">
                        <router-link :to="edit?'':{name:'home'}">
                            <!--<img :src="frontent_settings.main_logo" class="logo">-->
                            <img src="/all-images/logo-dark.png" class="logo">

                        </router-link>             
                    </div>
                    <div class="menu-home" >
                        <ul class="home-nav" >
                            <router-link v-for="header in site_header" :to="edit?'':header.link" v-if="header.header_type=='Menu' && header.status">
                                <li :class="active_menu==header.name?'active-nav':''" @click="active_menu=header.name">{{header.name}}</li>
                            </router-link>
                            <div class="min-650 d-flex-in-header" v-if="$root.token">
                                <router-link :to="edit?'':{name:'profile'}">
                                    <button class="btn login-btn mr-2" style="background-color: initial;color: dark;font-size: 13px;font-weight: 500;border: 1px solid rgb(130, 48, 198);border-radius: 5px;height: 35px;align-items: center;display: flex;"><img src="/all-images/account-violet.png" style="width:20px;" class="mr-1 buy-plan-img"> Profile</button>
                                </router-link>
                                <router-link :to="edit?'':{name:'plan'}">
                                    <button class="btn" style="background:linear-gradient(45deg, #8230c6, #7d208e);color: white;font-size: 13px;font-weight: 500;border: 1px solid #8230c6;border-radius: 5px;display:flex; align-items:center;"><img src="/all-images/up-arrow.png" style="width:20px;" class="mr-1 buy-plan-img">UPGRADE PLAN</button>
                                </router-link>
                            </div>
                            <div class="min-650 d-flex-in-header" v-else>
                                <router-link :to="edit?'':{name:'sign-in'}">
                                    <button class="btn login-btn mr-2" style="background-color: initial;color: #8230c6;font-size: 13px;font-weight: 500;border: 1px solid rgb(130, 48, 198);border-radius: 5px;">LOGIN</button>
                                </router-link>
                                <router-link :to="edit?'':{name:'plan'}">

                                    <button class="btn" style="background:linear-gradient(45deg, #8230c6, #7d208e);color: white;font-size: 13px;font-weight: 500;border: 1px solid #8230c6;border-radius: 5px;display:flex; align-items:center;"><img src="/all-images/up-arrow.png" style="width:20px;" class="mr-1 buy-plan-img">BUY PLAN</button>
                                </router-link>
                            </div>
                        </ul>

                    </div>
                    
                </div>
                <div class="text-center header-right flex-align3" style="gap:8px;">
                        
                    <div class="search-input">
                        <img src="/all-images/search.png" class="ml-2 cursor-pointer" @click="searchResult()">
                        <input type="text" v-model="search" placeholder="search for Movies, Shows, channels etc." style="height: 36px;">
                    </div>
                    <div class="d-flex-in-header" v-if="$root.token">
                        <router-link :to="edit?'':{name:'profile'}">
                            <button class="btn login-btn mr-2" style="background-color: initial;color: #8230c6;font-size: 13px;font-weight: 500;border: 1px solid rgb(130, 48, 198);border-radius: 5px;height: 35px;align-items: center;display: flex;"><img src="/all-images/account-violet.png" style="width:20px;" class="mr-1 buy-plan-img"> Profile</button>
                        </router-link>
                        <router-link :to="edit?'':{name:'plan'}">
                            <button class="max-650 btn" style="background:linear-gradient(45deg, #8230c6, #7d208e);color: white;font-size: 13px;font-weight: 500;border: 1px solid #8230c6;border-radius: 5px;align-items: center;display: flex;padding: 0.375rem 0.75rem .375rem .5rem;height: 35px;"><img src="/all-images/up-arrow.png" style="width:20px;" class="mr-1 buy-plan-img">UPGRADE PLAN</button>
                        </router-link>
                    </div>
                    <div class="d-flex-in-header" v-else>
                        <router-link :to="edit?'':{name:'sign-in'}">
                            <button class="btn login-btn mr-2" style="background-color: initial;color: #8230c6;font-size: 13px;font-weight: 500;border:1px solid rgb(130, 48, 198);border-radius: 5px;height: 35px;">LOGIN</button>
                        </router-link>
                        <router-link :to="edit?'':{name:'plan'}">
                            <button class="max-650 btn" style="background:linear-gradient(45deg, #8230c6, #7d208e);color: white;font-size: 13px;font-weight: 500;border: 1px solid #8230c6;border-radius: 5px;align-items: center;display: flex;padding: 0.375rem 0.75rem .375rem .5rem;height: 35px;"><img src="/all-images/up-arrow.png" style="width:20px;" class="mr-1 buy-plan-img">BUY PLAN</button>
                        </router-link>
                    </div>
                    <div class="max-990 mx-1" @click="menu_click=!menu_click">
                        <img src="/all-images/close-dark.png"  v-if="menu_click" style="width:22px;opacity:.8;">
                        <img src="/all-images/menu.png" style="width:22px;opacity:.8;"  v-else >
                    </div>
                      
                </div>
            </div>
        </header> 
        <header class="header-holder-2 loading-header" v-else>             
            <div class="menu-wrapper  d-flex align-items-center justify-content-between"> 
                <div class="flex-align3">         
                    <div class="animated-background height5" style="width:160px;">
                                    
                    </div>
                    <div class="menu-home" >
                        <ul class="home-nav g2" >
                            
                            <li class="animated-background height2"></li>
                            <li class="animated-background height2"></li>
                            <li class="animated-background height2"></li>
                            <div class="min-650 d-flex-in-header">
                                <div class="animated-background height4" style="width:50px;"></div>
                                <div class="animated-background height4 header-btn"></div>
                                <div class="animated-background height4 header-btn"></div>
                            </div>
                        </ul>
                    </div>
                </div>
                <div class="text-center header-right flex-align3" style="gap:8px;">
                    
                    <div class="d-flex-in-header g2">
                        <div class="animated-background height4 d-none d-md-block" style="width:220px;"></div>
                        <div class="animated-background height4 width4"></div>
                        <div class="animated-background height4 width5 "></div>
                    </div>
                    
                    <div class="max-990 mx-1">
                        <div class="animated-background height4" style="width:30px;"></div>
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

        is_start:false,

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
        this.active_menu = ''
        if(this.$route.params.type){
            this.active_menu = this.$route.params.type
        }
        this.getHeader()
    },
    searchResult(){
        this.$router.push({name:'videos', params: { type: 'search'}, query: { tag: this.search}})
    },
    getHeader() {
      var headers = new Headers();
      headers.append("Authorization", "Bearer "+(this.$root.token?this.$root.token:this.$root.admin_token));
      fetch(this.api_url+'/content/site_header/?theme='+theme_name, {
          method : 'get',
          headers: headers,
      })
      .then((response) => {
          return response.json()
      })
      .then((jsonData) => {
        this.is_start = true
        this.site_header = jsonData
      })
    },
  }

};
</script>
<style scoped>
  @import '/t1_light/style/style.css';
  @import '/t1_light/style/style-2.css';
  @import '/t1_light/style/load-style.css';




</style>
