
<template>
    <div>
        <header class="header-holder-2" >             
            <div class="menu-wrapper  d-flex align-items-center justify-content-between"> 
                <div class="flex-align3">         
                    <div class="header-logo">
                        <router-link to="profile">
                            <img src="/m1/images/dp.png" class="logo">
                        </router-link>             
                    </div>
                    <div class="menu-home" >
                        <ul class="home-nav" >
                            <li v-for="header in site_header" :to="edit?'':header.link" v-if="header.header_type=='Menu' && header.status" :class="active_class==header.name?'active':''" @click="active_class=header.name">
                                <router-link  :to="edit?'':header.link" >{{header.name}}</router-link>
                            </li>
                            
                            <li :class="active_class=='Search'?'active':''" @click="active_class='Search'">
                                <router-link to="" style="padding: 5px 10px;display: flex;">
                                    <img src="/m1/images/search_stream.png">
                                </router-link>
                            </li>
                        </ul>

                    </div>
                    
                </div>
                <div class="text-center header-right flex-align3" style="gap:8px;">
                        
                    <div class="d-flex-in-header">
                                <img src="/m1/images/stream_logo.svg" class="logo">
                    </div>
                </div>
            </div>
        </header>

        <!--<header class="header-holder-2 loading-header">             
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
        </header>-->
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
    align-items: center;
    list-style: none;
    gap: 5px;
    color: white;
    font-size: 14px;
    margin: 0;
    padding-left: 20px;
}
.home-nav li a{
    color: #E3E2E6;
    padding: 8px 15px;
    border-radius: 4px;
    font-weight:400;

}
.home-nav li a:hover {
    background-color: #3E4758;
    color: #E3E2E6;


}

.home-nav li.active a {
    background-color: #E3E2E6;
    color: #1A1C1E;
}
</style>
