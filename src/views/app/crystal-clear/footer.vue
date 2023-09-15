
<template>
    <div>
        <footer class="footer " v-if="is_start">
            <div class="row justify-content-center" style="row-gap:50px;">
                <div class="col-md-4 col-lg-3" style="display:flex;flex-direction:column;gap:30px;">
                    <div class="text-left footer-column">
                        <h6 class="text-16 font-weight-600 mb-3">Download Apps</h6>
                        <div class="flex-align3" style="gap:10px;">
                            <a class="d-flex" :href="site_footer.playstore_link" target="_blank" v-show="site_footer.is_playstore"><img src="/all-images/play_store.png"></a>
                            <a class="d-flex" :href="site_footer.appstore_link" target="_blank" v-show="site_footer.is_appstore"><img src="/all-images/app_store.png"></a>
                        </div>
                    </div>
                    <div class="text-left footer-column">
                        <h6 class="text-16 font-weight-600 mb-3">Address</h6>
                        <div class="d-flex" style="flex-direction:column;gap:10px;">
                            <h6 class="text-14">69 Queen St, Melbourne Australia</h6>
                            <h6 class="text-14">ph no: 2145 558 52</h6>
                            <h6 class="text-14">Email ID: videopages@gmail.com</h6>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-5 footer-column" style="display:flex;flex-direction:column;gap:10px;">
                    <h6 class="text-16 font-weight-600 mb-3">Links</h6>
                    <div class="row justify-content-center" style="gap:15px;">
                        <div class="col-auto" style="text-align: left;">
                            <h6 class="text-14 mb-2">Home</h6>
                            <h6 class="text-14 mb-2">About</h6>
                            <h6 class="text-14 mb-2">Category</h6>
                            <h6 class="text-14 mb-2">Contact</h6>
                        </div>
                        <div class="col-auto" style="text-align: left;">
                            <h6 class="text-14 mb-2">Terms and Privacy</h6>
                            <h6 class="text-14 mb-2">Notice</h6>
                            <h6 class="text-14 mb-2">Send us feedback</h6>
                            <h6 class="text-14 mb-2">Help </h6>
                        </div>
                    </div>
                    <div class="text-center mb-3">
                        <h6 class="text-13  p-2" v-html="site_footer.description"></h6>
                    </div>
                </div>
                <div class="col-md-4 col-lg-3" style="display:flex;flex-direction:column;gap:30px;">
                    <div class="text-left footer-column">
                        <h6 class="text-16 font-weight-600 mb-3">Follow</h6>
                        <div class="flex-align3 social2 m-0" style="gap:20px;" v-show="site_footer.is_social_links">
                            <a v-for="social_link in social_links" :href="social_link.link" target="_blank"><i :class="social_link.icon"></i></a>
                        </div>
                    </div>
                    <div class="text-left footer-column">
                        <img src="/all-images/logo.png" class="logo" style="max-width:180px!important;max-height:80px;object-fit:contain;width:100%;">
                    </div>
                </div>
                <!--<div class="copy-right">
                    <h6 class="text-13  p-2" v-html="site_footer.description"></h6>
                </div>-->
            </div>
            
            
        </footer>
        <footer class="footer " v-else>
            <div class="row justify-content-center">
                <div class="col-md-3" style="display:flex;flex-direction:column;gap:30px;">
                    <div class="text-left footer-column">
                         <div>
                            <h6 class="animated-background height3 width9"></h6>
                            <div class="flex-align3 mt-4" style="gap:10px;">
                                <h6 class="animated-background height5" style="width:120px;"></h6>
                                <h6 class="animated-background height5" style="width:120px;"></h6>
                            </div>
                        </div>
                    </div>
                    <div class="text-left footer-column">
                        <h6 class="animated-background height3 width9 mb-3"></h6>
                        <div class="d-flex" style="flex-direction:column;gap:10px;">
                            <h6 class="animated-background height2 mb-1"></h6>
                            <h6 class="animated-background height2 width9 mb-1"></h6>
                            <h6 class="animated-background height2 width7 mb-1"></h6>
                        </div>
                    </div>
                </div>
                <div class="col-md-5" style="display:flex;flex-direction:column;gap:10px;">
                    <h6 class="animated-background height3 mx-auto width6 mb-3  "></h6>
                    <div class="row justify-content-center" style="gap:15px;">
                        <div class="col-auto" style="text-align: left;">
                            <h6 class="animated-background height2 mb-1"></h6>
                            <h6 class="animated-background height2 width6 mb-1"></h6>
                            <h6 class="animated-background height2 width8 mb-1"></h6>
                            <h6 class="animated-background height2 width7 mb-1"></h6>

                        </div>
                        <div class="col-auto" style="text-align: left;">
                            <h6 class="animated-background height2 mb-1"></h6>
                            <h6 class="animated-background height2 width9 mb-1"></h6>
                            <h6 class="animated-background height2 width8 mb-1"></h6>
                            <h6 class="animated-background height2 width7 mb-1"></h6>
                        </div>
                    </div>
                    <div class="text-center mb-3">
                        <h6 class="animated-background height3 mx-5 mb-3"></h6>
                    </div>
                </div>
                <div class="col-md-3" style="display:flex;flex-direction:column;gap:30px;">
                    <div class="text-left footer-column">
                        <h6 class="animated-background height3 width5 mb-3"></h6>
                        <div class="flex-align3 social2 m-0" style="gap:20px;" >
                            <h6 class="animated-background height3 width3 rounded-circle"></h6>
                             <h6 class="animated-background height3 width3 rounded-circle"></h6>
                             <h6 class="animated-background height3 width3 rounded-circle"></h6>
                             <h6 class="animated-background height3 width3 rounded-circle"></h6>
                        </div>
                    </div>
                    <div class="text-left footer-column">
                         <div class="animated-background height7 mx-auto my-3" style="width:260px;"></div>
                    </div>
                </div>
                <!--<div class="copy-right">
                    <h6 class="text-13 text-dark p-2" v-html="site_footer.description"></h6>
                </div>-->
            </div>
            
            
        </footer>
    </div>
</template>
<script>
export default {
  props: ['edit','blocks','current_block'],
  data() {
    return {
        site_footer:{},
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
        this.getFooter()
    },
    getFooter() {
      var headers = new Headers();
      headers.append("Authorization", "Bearer "+(this.$root.token?this.$root.token:this.$root.admin_token));
      fetch(this.api_url+'/content/site_footer/1/?theme='+theme_name, {
          method : 'get',
          headers: headers,
      })
      .then((response) => {
          return response.json()
      })
      .then((jsonData) => {
        this.is_start = true
        this.site_footer = jsonData
      })
    },
  }

};
</script>
<style scoped>
  @import '/crystal-clear/style/style.css';
  @import '/crystal-clear/style/style-2.css';
  @import '/crystal-clear/style/load-style.css';



footer a {
    color: #fff;
}

footer ul {
    list-style: none;
    padding-left: 0;
    margin-left: 0;
}

.footer {
    font-size: 16px;
    line-height: 36px;
   padding:60px 30px 80px 30px;
 
    color: #fff;
    text-align: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center top;
     background-color: #0a060d;

    border-top: 1px solid #a6a6a640;
    position:relative;
}
.copy-right{
    position:absolute;
    left:0;
    bottom:0;
    width:100%;
    padding:15px;
    background-color:#f4f4f4;
    display:flex;
    justify-content:center;
}
.footer .social2 i{
    background: hsla(0,0%,100%,.08);
    border: 1px solid hsla(0,0%,100%,.05);
    border-radius: 20px;
    color: #fff;
    display:flex;
    align-items: center;
    justify-content: center;
   
    height: 34px;
   
    margin: 0;
    text-decoration: none;
    width: 34px;
    font-size: 16px;
}

.list1{
    text-align: left;
    font-size: 12px;
}
footer .list1 li {
    
    height: 26px;
}
footer .list1 a {
    color: #959595;
}






.social-holder {
    margin-bottom: 35px;
}

.social-holder a {
    font-size: 28px;
    margin-right: 25px;
}

.social-holder a:last-of-type {
    margin: 0;
}

.footer-column {
    min-height:100px;
    margin:0 auto;
}
@media screen and (max-width: 768px) {
    
.footer {
    
   padding:60px 30px 30px 30px;
   }
}
</style>
