
<template>
    <div>
        <!--<div class="dark">
            <h6 class="light-mode" @click="mode='light'"> <i class="fa fa-moon-o mr-1"></i>Light Mode</h6>
            <h6 class="dark-mode" @click="mode='dark'"><i class="fa fa-sun-o mr-1"></i>Dark Mode</h6>
        </div>-->
        <header class="header-holder-2" >             
            <div class="menu-wrapper  d-flex align-items-center justify-content-between"> 
                <div class="flex-align3" style="gap:15px;">   
                    <div class="menu-cap">
                        <img src="/videopage/images/menubar.png" class="cursor-pointer">
                        <div class="home-nav-cap">
                            <div class="home-navig">
                                <router-link v-for="header in site_header" :to="edit?'':header.link" v-if="header.header_type=='Menu' && header.status">
                                        <h6 :class="active_menu==header.name?'active-nav':''" @click="active_menu=header.name">{{header.name}}</h6>
                                </router-link>
                            </div>
                        </div>
                    </div>      
                    <div class="header-logo">
                        <router-link :to="edit?'':{name:'home'}">
                            <img :src="frontent_settings.main_logo" class="logo">
                        </router-link>             
                    </div>
                    
                    
                </div>
                <div class="text-center header-right flex-align3" style="gap:20px;height: 40px;">
                    
                    
                    <div class="search-input">
                        <img src="/videopage/images/search.png" class=" cursor-pointer" >
                        <input placeholder="Movies, series, Etc">
                       
                    </div>
                    
                    <div class="profile-sec">
                        <img src="/videopage/images/profile.png">
                        <div class="profile-nav">
                            
                               
                                <div class="profile" v-if="$root.token">
                                    <router-link :to="edit?'':{name:'profile'}">
                                        <h6 class="">Profile</h6>
                                    </router-link>
                                    <router-link :to="edit?'':{name:'plan'}">
                                        <h6 >Upgrade Plan</h6>
                                    </router-link>
                                </div>
                                <div class="profile" v-else>
                                    <router-link :to="edit?'':{name:'sign-in'}">
                                        <h6 class="">Login</h6>
                                    </router-link>
                                    <router-link :to="edit?'':{name:'plan'}">

                                        <h6 >Buy Plan</h6>
                                    </router-link>
                                </div>
                            
                        </div>
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
  @import '/videopage/style/style.css';
  @import '/videopage/style/style-2.css';



</style>
