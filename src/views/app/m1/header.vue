
<template>
    <div>
        <header class="header-holder-2" >             
                    <div to="profile" class="header-logo">
                        <img :src="frontent_settings.main_logo" class="logo">
                    </div>             
                        <ul class="home-nav" >
                            <li class="tv-tab" v-for="header in site_header" v-if="header.header_type=='Menu' && header.status" :class="active_class==header.name?'active':''" @click="active_class=header.name">
                                <router-link :to="edit?'':header.link" style="padding: 5px 10px;display: flex;">
                                    <img :src="header.icon" :class="active_class==header.name?'active-search':'not-active-search'" style="width:24px;height:24px;">
                                    <h6>{{header.name}}</h6>
                                </router-link>
                            </li>
                            <li :class="active_class=='Search'?'active':''" @click="active_class='Search';show_keybord=true">
                                <router-link to="" style="padding: 5px 10px;display: flex;">
                                    <img src="/m1/images/search_stream.png" class="not-active-search" style="width:25px;height:25px;">
                                    <img src="/m1/images/search.png" class="active-search" style="width:25px;height:25px;">
                                </router-link>
                            </li>
                            <li v-if="$root.token">
                                <router-link :to="edit?'':{name:'profile'}">" style="padding: 5px 10px;display: flex;">
                                    <img src="/m1/images/dp.png" class="not-active-search" style="width:30px;height:30px;">
                                    <img src="/m1/images/dp.png" class="active-search" style="width:30px;height:30px;">
                                </router-link>
                            </li>
                            <li v-else>
                                <router-link :to="edit?'':{name:'sign-in'}" style="padding: 5px 10px;display: flex;">
                                    <img src="/m1/images/dp.png" class="not-active-search" style="width:30px;height:30px;">
                                    <img src="/m1/images/dp.png" class="active-search" style="width:30px;height:30px;">
                                </router-link>
                            </li>
                        </ul>

                <!--<div class="text-center header-right flex-align3" style="gap:8px;">
                        
                    <router-link to="profile" class="header-logo">
                                <img src="/m1/images/stream_logo.svg" class="logo">
                    </router-link>
                </div>-->
            
        </header>
        
        <div class="keyboard-layout" v-if="show_keybord">
            <div class="keyboard">
                <div class="section-a">
                    <div class="p-3" style="display: flex; align-items: center;gap: 15px;justify-content: center;background: #191C22;font-weight:500;color:white;font-size:22px;">
                        Press and hold <img src="/m1/images/mic.png" style="width:45px;height:45px;"> to speak
                    </div>
                    <div>
                        <button>input</button>
                        <input type="text" class="form-control">
                    </div>
                </div>
            </div>  
        </div>

    </div>
</template>
<script>
export default {
  props: ['edit','blocks','current_block'],
  data() {
    return {
        active_class:'Home',
        search:'',
        site_header:[],
        show_keybord: false,
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
        if(this.$route.params.type){
            this.active_class = this.$route.params.type
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
  @import '/m1/style/style.css';
  @import '/m1/style/style-2.css';
  @import '/m1/style/load-style.css';



.home-nav{
    display: flex;
    align-items:center;
    flex-direction:column;
    justify-content: center;
    gap:15px;
    height:100%;
    list-style: none;
    gap: 15px;
    color: white;
    font-size: 14px;
    margin: 0;
    padding-left:0;
    padding-right:0;

    padding-top:100px;
}
.home-nav li a{
    color: #E3E2E6;
    padding: 8px 15px;
    border-radius: 4px;
    font-weight:400;

}
.home-nav li a:hover, .home-nav li a:focus {
    background-color: #23384a;
    color: #E3E2E6;


}

.home-nav li.active a {
    background-color: #E3E2E6;
    color: #1A1C1E;
}
.active-search{
    display:none;
}
.home-nav li.active .active-search{
    display:block;
    filter: invert(50%);
}
.home-nav li.active .not-active-search{
    display:none;
}
</style>
