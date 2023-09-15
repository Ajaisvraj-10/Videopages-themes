
<template>
    <div class="main-content">
    
        <div class="site-wrapper2" :class="menu_click?'nav-active':''">   
            <header class="header-holder-2" >             
                <div class="menu-wrapper  d-flex align-items-center justify-content-between"> 
                    <div class="flex-align3">         
                        <div class="header-logo">
                            <a >
                                <img src="/videozone_web/images/logo.png" >
                            </a>               
                        </div>
                        <!--<div class="menu-home" >
                            <ul class="home-nav" >
                                <li>Home</li>
                                <li>Store</li>
                                <li>Channels</li>
                                <li>Categories</li>
                                <li>My Stuff</li>
                            </ul>
                        </div>
                        <div class="max-990 mx-3" @click="menu_click=!menu_click">
                                <h6 class="text-light text-14 font-weight-600">Browse <i class="fa fa-caret-down"></i></h6>
                        </div>-->
                    </div>
                    <div class="text-center header-right flex-align3" >
                            
                            <button class="btn btn-info px-3 min-768 py-1 mx-3">Try for free</button>
                            <div class="search-input home-search">
                                <img src="/videozone_web/images/search.svg" class="">
                                <input type="text" placeholder="search here....">
                            </div>
                          
                         
                            <div class="profile-sec ml-2">
                                <a class=" text-white flex-align3 mx-2" >
                                    <img src="/videozone_web/images/user.svg">
                                <i class="fa fa-caret-down text-light ml-2"></i>
                                </a>
                                <div class="profile-dropdown" style="top:20px;">
                                    <div class="profile-nav">
                                        <router-link :to="{name:'sign-in'}">
                                            <h6 class="text-14 py-2 ">Sign In</h6>
                                        </router-link>
                                        <router-link :to="{name:'plan'}">
                                            <h6 class="text-14 py-2 ">Plan</h6>
                                        </router-link>
                                    </div>

                                </div>
                            </div>
                    </div>
                </div>
            </header>    
            <div id="content" class="site-content center-relative" >
                <div id="home" class="section no-page-title row m-0" >  
                                
                    <div class="col-md-5 col-12 p-0 ">                                                
                        <div class="content-wrapper banner-captions  ">                           
                            <h2 class="big-text banner-text">
                               <span>Welcome to Prime Video </span> 
                              
                            </h2>
                           
                            <h4 class="fadein banner-text-3 mt-4 pt-2  text-white  ">Join Prime to watch the latest movies, TV shows and award-winning Videozone Originals</h4>

                            <div class=" mt-3" style="display: flex;flex-direction: column;text-align: center; width: fit-content;">
                              <button class="btn btn-info text-20 "  style="padding:12px 35px;font-weight:400;">Start Your 30 Day Free Trial</button>
                              <span class="text-13 text-white my-2">With select credit, debit card, or UPI ID</span>
                            </div>
                        </div>                        
                    </div>
                    <div class="col-md-7 col-12 p-0" style=" background:url(/videozone_web/images/bg1.jpg);background-size: cover;background-position: top left;background-repeat: no-repeat;min-height:350px;">

                    </div>
                </div> 
                <div id="home" class="section no-page-title row m-0" >  
                                
                    <div class="col-md-5 mt-5 p-0 ">                                                
                        <div class="content-wrapper banner-captions  ">                           
                            <h2 class="big-text banner-text">
                               <span>Movie rentals on Prime Video</span> 
                              
                            </h2>
                           
                            <h4 class="fadein banner-text-3 mt-4 pt-2  text-white  ">Early Access to new movies, before digital subscription</h4>

                            <div class=" mt-3" style="display: flex;flex-direction: column;text-align: center; width: fit-content;">
                              <button class="btn btn-info text-20"  style="padding:8px 35px;font-weight:400;">Rent now</button>
                             
                            </div>
                        </div>                        
                    </div>
                    <div class="col-md-7 col-12 p-0" >
                         <div class="" style=" background:url(/videozone_web/images/bg2.jpg);background-size: cover;background-position: top left;background-repeat: no-repeat;height:100%;min-height:350px;">
                        
                        </div>

                    </div>
                </div> 
            </div> 
            <div id="about" class="section-white  ">                   
                    

                    <div class="section-wrapper2 bg-white block  center-relative ">                                                
                        <div class=" row m-0 home-sections d-flex  align-items-start">

                            <div class="col-md-6 px-5 py-4 mt-4">
                                
                                <h2 class="text-40 font-weight-400 text-dark2" style="line-height:50px; ">
                                   Your favorite channels all in one place
                                </h2>
                                <h4 class="text-18 font-weight-300 mt-4 text-dark2" style="line-height:28px;">
                                    With Prime Video Channels, find shows and movies from your favorite channels all in one place. Enjoy with an add-on subscription to Channels of your choice
                                </h4>
                                
                                
                            </div>

                            <div class="col-md-6 p-0   m-0" >
                                
                                        <img src="https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2022/09/09/199571-puja-special-trains-3.jpg?itok=PG03biU9" class="w-100">
                                       
                                    
                            </div>
                            <div class="clear"></div>
                        </div>                        
                    </div>
                   
                    <div class="section-wrapper2  center-relative ">                                                
                        <div class=" row m-0 home-sections d-flex align-items-start">
                            <div class="col-md-6 p-0" >
                                <div class="">
                                    <img src="/videozone_web/images/bg3.png" alt="" /> 
                                    

                                </div>                   
                            </div>
                            <div class="col-md-6 px-5 py-4 mt-4">
                                
                                <h2 class="text-40 font-weight-400 " style="line-height:50px; ">
                                   Even better with Fire TV Stick
                                </h2>
                                <h4 class="text-18 font-weight-300 mt-4" style="line-height:28px;">
                                    The biggest movies and TV shows are always better on a big screen. Simply plug in your Videozone Fire TV Stick and stream on any HDTV. Press the voice button on the remote and say the name of the title you want to watch to find it in seconds.
                                </h4>
                                <button class="btn btn-info px-5 mt-4">Get Started</button>
                                
                            </div>

                            
                            
                        </div>                        
                    </div>
                    
                    <div class="section-wrapper2  center-relative">                                                
                        <div class="row reverse-flex home-sections m-0 d-flex align-items-start">

                            <div class="col-md-6 px-5 py-4 mt-4">
                                
                                <h2 class="text-40 font-weight-400" style="line-height:50px; ">
                                   Family Friendly
                                </h2>
                                <h4 class="text-18 font-weight-300 mt-4 " style="line-height:28px;">
                                    With easy to use Parental Controls and a dedicated kids page, enjoy secure, ad-free kids entertainment. Kids can enjoy popular TV shows like Peppa Pig, Powerpuff Girls, and Chhota Bheem.
                                </h4>
                                <button class="btn btn-info px-5 mt-4">Get Started</button>
                                
                            </div>

                            <div class="col-md-6 p-0" >
                              <div class="">
                                <img src="/videozone_web/images/bg4.png" alt="" /> 
                                
                              </div>                   
                            </div>
                            <div class="clear"></div>
                        </div>                        
                    </div>
            </div> 
            <footer class="footer p-4">
                <div class="text-center mb-3">
                    <img src="/videozone_web/images/logo3.png" width="100">
                    <div class="flex-align2 mb-2" tyle="flex-wrap: wrap;">
                        <h6 class="text-13 text-info px-2">Terms and Privacy </h6> 
                        <h6 class="text-13 text-info px-2">Notice </h6> 
                        <h6 class="text-13 text-info px-2">Send us feedback </h6> 
                        <h6 class="text-13 text-info px-2">Help </h6> 
                    </div>
                    <h6 class="text-13 text-light p-2">© 1996-2022, Videozone.com, Inc. or its affiliates </h6>
                </div>
            </footer>
        </div>
    </div>
</template>
<script>

export default {

  data() {
    return {
       menu_click:false,
        
    };
  },
  mounted(){
   
    
  },
  methods: {

  }

};
</script>
<style scoped>
  @import '/videozone_web/style/style.css';


</style>
