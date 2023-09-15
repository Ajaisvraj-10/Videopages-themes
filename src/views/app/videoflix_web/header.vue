<template>
    <div :class="menu_click?'nav-active':''">
        <header class="header-holder-2" >             
                <div class="menu-wrapper  d-flex align-items-center justify-content-between">             
                    <div class="header-logo">
                        <a >
                            <img src="/videoflix_web/images/logo.png" alt="Seppo">
                        </a>               
                    </div>
                    <div class="fadein text-center" >
                          <select class="button-3 text-white mr-sm-4 mr-3">
                            <option>English</option>
                            <option>Hindi</option>
                          </select>
                          <router-link :to="edit?'':{name:'sign-in'}">   
                            <a  class="button-2 text-white" v-b-modal.sign-in>Sign in</a><br><br>
                          </router-link>
                          <div class="profile-btn-div">
                            <router-link :to="edit?'':{name:'profile'}">
                                    <button class="profile-btn"><img src="/all-images/account.png" style="width:20px;" class="mr-1 buy-plan-img"> Profile</button><br>
                                </router-link>
                          </div>
                          <div class="btn-div1">
                            <router-link :to="edit?'':{name:'plan'}">
                                    <button class="btn" style="background:linear-gradient(45deg, #fe0202, #631502);color: white;font-size: 13px;font-weight: 500;border: 1px solid #000000;border-radius: 5px;display:flex; align-items:center;"><img src="/all-images/up-arrow.png" style="width:20px;" class="mr-1 buy-plan-img">BUY PLAN</button><br>
                                </router-link>
                          </div>
                          <div class="btn-div2">
                            <router-link :to="edit?'':{name:'plan'}">
                                    <button class="btn" style="background:linear-gradient(45deg, #4d0000, #ff0000);color: white;font-size: 13px;font-weight: 500;border: 1px solid #000000;border-radius: 5px;display:flex; align-items:center;"><img src="/all-images/up-arrow.png" style="width:20px;" class="mr-1 buy-plan-img">UPGRADE PLAN</button><br>
                                </router-link>
                          </div>
                         
                               
                               
                    </div>
                </div>
            </header> 
            <div class="menu-home" >
                        <ul class="home-nav" >
                            <router-link v-for="header in site_header" :to="edit?'':header.link">
                                <li :class="active_menu==header.name?'active-nav':''" @click="active_menu=header.name">{{header.name}}</li>
                            </router-link>
                            <div class="min-650 d-flex-in-header" v-if="$root.token">
                               
                               
                            </div>
                            <div class="min-650 d-flex-in-header" v-else>
                                <router-link :to="edit?'':{name:'sign-in'}">
                                    <button class="btn login-btn mr3" style="background-color: initial;color: white;font-size: 13px;font-weight: 500;border: 1px solid rgb(130, 48, 198);border-radius: 5px;">LOGIN</button>
                                </router-link>
                               
                            </div>
                        </ul>

                    </div>
                        <div :class="menu_click?'nav-active':''">
        <header class="header-holder-2" v-if="is_start">             
            <div class="menu-wrapper  d-flex align-items-center justify-content-between"> 
                <div class="flex-align3">         
                    <div class="header-logo" v-show="site_header[0].status">
                        <router-link :to="edit?'':{name:'home'}">
                            <img :src="frontent_settings.main_logo" class="logo">
                        </router-link>             
                    </div>
                    <div class="menu-home" >
                        <ul class="home-nav" >
                            <router-link v-for="header in site_header" :to="edit?'':header.link">
                                <li :class="active_menu==header.name?'active-nav':''" @click="active_menu=header.name">{{header.name}}</li>
                            </router-link>
                            <div class="min-650 d-flex-in-header">
                                <router-link :to="edit?'':{name:'profile'}">
                                    <button class="btn login-btn mr3" style="background-color: initial;color: white;font-size: 13px;font-weight: 500;border: 1px solid rgb(130, 48, 198);border-radius: 5px;height: 35px;align-items: center;display: flex;"><img src="/all-images/account.png" style="width:20px;" class="mr-1 buy-plan-img"> Profile</button>
                                </router-link>
                                <router-link :to="edit?'':{name:'plan'}">
                                    <button class="btn" style="background:linear-gradient(45deg, #8230c6, #7d208e);color: white;font-size: 13px;font-weight: 500;border: 1px solid #8230c6;border-radius: 5px;display:flex; align-items:center; margin-left: 400px;"><img src="/all-images/up-arrow.png" style="width:20px;" class="mr-1 buy-plan-img">UPGRADE PLAN</button>
                                </router-link>
                            </div>
                            <div class="min-650 d-flex-in-header" >
                                <router-link :to="edit?'':{name:'sign-in'}">
                                    <button class="btn login-btn mr3" style="background-color: initial;color: white;font-size: 13px;font-weight: 500;border: 1px solid rgb(130, 48, 198);border-radius: 5px;">LOGIN</button>
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
                        <img src="/all-images/search.svg" class="ml-2 cursor-pointer" @click="searchResult()">
                        <input type="text" v-model="search" @input="searchResult()" placeholder="search for Movies, Shows, channels etc." style="height: 36px;">
                    </div>
                    <div class="d-flex-in-header" v-if="$root.token">
                        <router-link :to="edit?'':{name:'profile'}">
                            <button class="btn login-btn mr3" style="background-color: initial;color: white;font-size: 13px;font-weight: 500;border: 1px solid rgb(130, 48, 198);border-radius: 5px;height: 35px;align-items: center;display: flex; padding: 0.375rem 0.75rem .375rem .5rem;height: 35px;"><img src="/all-images/account.png" style="width:20px;" class="mr-1 buy-plan-img"> Profile</button>
                        </router-link>
                        <router-link :to="edit?'':{name:'plan'}">
                            <button class="max-650 btn" style="background:linear-gradient(45deg, #8230c6, #7d208e);color: white;font-size: 13px;font-weight: 500;border: 1px solid #8230c6;border-radius: 5px;align-items: center;display: flex;padding: 0.375rem 0.75rem .375rem .5rem;height: 35px;"><img src="/all-images/up-arrow.png" style="width:20px;" class="mr-1 buy-plan-img">UPGRADE PLAN</button>
                        </router-link>
                    </div>
                    <div class="d-flex-in-header" v-else>
                        <router-link :to="edit?'':{name:'sign-in'}">
                            <button class="btn login-btn mr3" style="background-color: initial;color: white;font-size: 13px;font-weight: 500;border:1px solid rgb(130, 48, 198);border-radius: 5px;height: 35px;">LOGIN</button>
                        </router-link>
                        <router-link :to="edit?'':{name:'plan'}">
                            <button class="max-650 btn" style="background:linear-gradient(45deg, #8230c6, #7d208e);color: white;font-size: 13px;font-weight: 500;border: 1px solid #8230c6;border-radius: 5px;align-items: center;display: flex;padding: 0.375rem 0.75rem .375rem .5rem;height: 35px;"><img src="/all-images/up-arrow.png" style="width:20px;" class="mr-1 buy-plan-img">BUY PLAN</button>
                        </router-link>
                    </div>
                    <div class="max-990 mx-1" @click="menu_click=!menu_click">
                        <img src="/all-images/close.png"  v-if="menu_click" style="width:22px;">
                        <img src="/all-images/menubar.png" style="width:22px;"  v-else >
                    </div>
                      
                </div>
            </div>
        </header>

        <header class="header-holder-2 loading-header" v-else>             
            <!-- <div class="menu-wrapper  d-flex align-items-center justify-content-between"> 
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
            </div> -->
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
        search_page:"sidebar",
        search_movies:[],
        profile:{}
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
      headers.append("Authorization", "Bearer "+this.$root.admin_token);
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
.profile-btn{
    font-size: 13px;
    font-weight: 500;
    border: 1px solid rgb(255, 0, 0);
    border-radius: 5px;
    height: 35px;
    align-items: center;
    display: flex; 
    background:linear-gradient(45deg, #fe0202, #631502);
    color: white;
}
.profile-btn-div{
    margin-left: -90px;
    margin-top: -50px;
}
.btn-div1{
    margin-left: -235px;
    margin-top: -50px;
}
.btn-div2{
    margin-top: -55px;
    margin-left: -410px;
    
}

@import '/videoflix_web/style/style1.css';
@import '/videoflix_web/style/style.css';
@import '/videoflix_web/style/style2.css';
@import '/videoflix_web/style/style.css';
@import '/videoflix_web/style/style-2.css';
@import '/videoflix_web/style/load-style.css';



</style>
 
