
<template>
  <div class="main-content">
    
     <div class="site-wrapper">   

            <header class="header-holder-2" :style="background_start?'background-color:transparent':'background-color:#060606'">             
                <div class="menu-wrapper  d-flex align-items-center justify-content-between">             
                    <div class="header-logo">
                        <a >
                            <img src="/main/images/logo.png" alt="Seppo">
                        </a>               
                    </div>

                  

                    
                        
                    <div class="fadein button-holder text-center mt-3" v-b-modal.sign-in>
                          <a  class="button-2 text-white">Sign in</a>
                    </div>
                               
                    <b-modal id="sign-in" hide-header hide-footer>
                      <i class="fa fa-close cursor-pointer" style="position:absolute;top:10px;right:10px;z-index:999;" @click="$bvModal.hide('sign-in')"></i>
                        <form action="#" class="sign-in container">
                          <h1>Sign In</h1>
                          <hr>
                          <div class="form-element">
                            <input type="text" name="username" id="username" required />
                            <label class="floating-label" for="username">Email or Phone Number</label>
                          </div>
                          <div class="form-element">
                            <input type="password" name="password" id="password" required />
                            <label class="floating-label" for="password">Password</label>
                          </div>
                         
                          <div class="button-holder text-center mt-3 mx-5" v-b-modal.sign-in>
                                <router-link :to="{name:'plan'}">
                                  <a  class="button text-white w-100 text-center">Sign in</a>
                                </router-link>
                          </div>
                        </form>
                    </b-modal>  
                                            
                  
                   
                </div>
            </header>    
            <div id="content" class="site-content center-relative">


              <div id="home" class="section no-page-title" style=" background:linear-gradient(0deg, rgb(60 60 60 / 77%), rgb(0 0 0 / 56%)), url(/main/images/bg1.jpg);background-size: cover;background-position: top;background-repeat: no-repeat;">                   
                    <div class="section-wrapper block content-1170 center-relative">                                                
                        <div class="content-wrapper text-center">                           
                            <h1 class="big-text text-center">
                               <span>Unlimited </span> 
                               <span>movies, </span>
                               <br> 
                               <span>TV </span> 
                               <span>shows </span>
                               <span>and </span> 
                               <span>more.</span>
                            </h1>
                            <h4 class="fadein text-18 my-2 text-white">Watch anywhere. Cancel anytime.</h4>
                            <h4 class="fadein text-18 mt-2 text-white">Ready to watch? Register in our platform.</h4>
                            <div class="fadein home-sign-input mt-3">
                              <input type="text" placeholder="email address">
                              <a  class="text-white cursor-pointer" v-b-modal.sign-in>Get Started</a>
                            </div>
                        </div>                        
                    </div>
                </div> 
              </div> 
              <!-- Services Section -->
                

                <!-- About Section -->
                <div id="about" class="section">                   
                    <div class="page-title-holder">
                        <h3 class="entry-title text-white">
                            Get Started            
                        </h3>
                    </div>

                    <div class="section-wrapper order-0 block content-1170 center-relative">                                                
                        <div class="content-wrapper">

                            <div class="one_half">
                                <p class="title-description-up">
                                  Ready to watch
                                </p>
                                <h2 class="entry-title medium-text">
                                   Enjoy on your TV.
                                </h2>
                                <p class="text-16 text-white">
                                    Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
                                </p>
                                <br>
                                <div class="button-holder text-left">
                                    <a href="#portfolio" class="button">
                                        Join Free for a Month
                                    </a>
                                    <p class="text-light">
                                       With select credit, debit card, or UPI ID
                                    </p>
                                </div>
                            </div>

                            <div class="one_half last" data-threshold="0 0" data-jarallax-element="120 0">
                              <div class="video-in-image">
                                <img src="/main/images/device-pile-in.png" alt="" /> 
                                <img src="/main/images/device-pile-in.png" alt="" class="gif-vid-parts" />   

                                <img src="https://i.gifer.com/UN71.gif" alt="" class="gif-vid" />  
                                <img src="https://i.gifer.com/UN71.gif" alt="" class="gif-vid-2" /> 
                                <img src="https://i.gifer.com/UN71.gif" alt="" class="gif-vid-3" />   



                              </div>                  
                            </div>
                            <div class="clear"></div>
                        </div>                        
                    </div>
                    <div class="borders-bottom"></div>
                    <div class="section-wrapper block content-1170 center-relative">                                                
                        <div class="content-wrapper">
                            <div class="one_half last" data-threshold="0 0" data-jarallax-element="120 0">
                              <div class="video-in-image">
                                <img src="/main/images/device-pile-in.png" alt="" /> 
                                <img src="/main/images/device-pile-in.png" alt="" class="gif-vid-parts" />   

                                <img src="https://media1.giphy.com/media/3oEjI1erPMTMBFmNHi/giphy.gif" alt="" class="gif-vid" />  
                                <img src="https://media1.giphy.com/media/3oEjI1erPMTMBFmNHi/giphy.gif" alt="" class="gif-vid-2" />   
                                <img src="https://media1.giphy.com/media/3oEjI1erPMTMBFmNHi/giphy.gif" alt="" class="gif-vid-3" />    

                              </div>                   
                            </div>
                            <div class="one_half">
                                <p class="title-description-up">
                                  Ready to watch
                                </p>
                                <h2 class="entry-title medium-text">
                                   Download your shows to watch offline.
                                </h2>
                                <p class="text-16 text-white">
                                   Save your favourites easily and always have something to watch.
                                </p>
                                <br>
                                <div class="button-holder text-left">
                                    <a href="#portfolio" class="button">
                                        Monthly at $252
                                    </a>
                                    <p class="text-light">
                                       With select credit, debit card, or UPI ID
                                    </p>
                                </div>
                            </div>

                            
                            <div class="clear"></div>
                        </div>                        
                    </div>
                    <div class="borders-bottom"></div>
                    <div class="section-wrapper order-0 block content-1170 center-relative">                                                
                        <div class="content-wrapper">

                            <div class="one_half">
                                <p class="title-description-up">
                                  Ready to watch
                                </p>
                                <h2 class="entry-title medium-text">
                                   Watch everywhere.
                                </h2>
                                <p class="text-16 text-white">
                                    Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
                                </p>
                                <br>
                                <div class="button-holder text-left">
                                    <a href="#portfolio" class="button">
                                        Annually at $252
                                    </a>
                                    <p class="text-light">
                                       With select credit, debit card, or UPI ID
                                    </p>
                                </div>
                            </div>

                            <div class="one_half last" data-threshold="0 0" data-jarallax-element="120 0">
                              <div class="video-in-image">
                                <img src="/main/images/device-pile-in.png" alt="" /> 
                                <img src="/main/images/device-pile-in.png" alt="" class="gif-vid-parts" />   

                                <img src="https://im.rediff.com/movies/2017/jul/05spiderman3.gif" alt="" class="gif-vid" /> 
                                <img src="https://im.rediff.com/movies/2017/jul/05spiderman3.gif" alt="" class="gif-vid-2" />  
                                <img src="https://im.rediff.com/movies/2017/jul/05spiderman3.gif" alt="" class="gif-vid-3" />

                              </div>                   
                            </div>
                            <div class="clear"></div>
                        </div>                        
                    </div>
                    <div class="borders-bottom"></div>
                </div> 
                <div id="services" class="section">                   
                    <div class="page-title-holder">
                        <h3 class="entry-title">
                            Join with us             
                        </h3>
                    </div>
                    <div class="section-wrapper block content-1170 center-relative">                                                
                        <div class="content-wrapper">

                            <div class="one_third ">
                                <div class="service-holder">
                                    <p class="service-num">1</p>
                                    <div class="service-txt">
                                        <h4>Monthly Plan</h4>
                                        <h2 class="text-white mb-2 font-weight-700">$88</h2>
                                        <p>
                                            Curabitur cursus mattis ligula a maximus pellentesque in purus malesuada pharetra eros.
                                        </p>
                                        <br>
                                        <div class="button-holder text-left">
                                            <a href="#portfolio" class="button-dot">
                                                <span>ACTIVATE</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="one_third ">
                                <div class="service-holder">
                                    <p class="service-num">2</p>
                                    <div class="service-txt">
                                        <h4>Semi-annual Plan</h4>
                                        <h2 class="text-white mb-2 font-weight-700">$928</h2>

                                        <p>
                                            Est sem integer suscipit enim quis dictum feugiat etiam pellentesque curabitur donec porttitor.
                                        </p>
                                        <br>
                                        <div class="button-holder text-left">
                                            <a href="#news" class="button-dot">
                                                <span>ACTIVATE</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="one_third last">
                                <div class="service-holder">
                                    <p class="service-num">3</p>
                                    <div class="service-txt">
                                        <h4>Annual Plan</h4>
                                        <h2 class="text-white mb-2 font-weight-700">$1828</h2>

                                        <p>
                                            Donec vel est sem integer suscipit enim quis lorem posuere vestibulum metus tempor vitae.
                                        </p>
                                        <br>
                                        <div class="button-holder text-left">
                                            <a href="#contact" class="button-dot">
                                                <span>ACTIVATE</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>    
                            <div class="clear"></div>
                            <div class="mt-5">
                              <h4 class=" text-18 my-2 text-white text-center">Watch anywhere. Cancel anytime.</h4>
                              <h4 class=" text-18 mt-2 text-white text-center">Ready to watch? Register in our platform.</h4>
                              <div class="home-sign-input mt-3">
                                <input type="text" placeholder="email address">
                                <a  class="text-white cursor-pointer" v-b-modal.sign-in>Get Started</a>
                              </div>
                            </div>

                        </div>                        
                    </div>
                </div>             

  
            <footer class="footer">
                <div class="footer-content center-relative">
                    <div class="footer-logo">
                        <img src="/main/images/footer_logo.png" alt="Seppo" />
                    </div>        
                    <div class="footer-logo-divider"></div>
                    <div class="footer-mail">            
                        <a href="">Capceetech.com</a>
                    </div>
                    <div class="footer-social-divider"></div>
                    <div class="social-holder">
                        <a >
                            <i class="fa fa-twitter"></i>
                        </a>
                        <a >
                            <i class="fa fa-facebook"></i>
                        </a>
                        <a >
                            <i class="fa fa-youtube"></i>
                        </a>
                        <a >
                            <i class="fa fa-instagram"></i>
                        </a>
                    </div>

                    <div class="copyright-holder">
                        © 2022 All Rights Reserved <a href="">Capcee Technologies</a>            
                    </div>
                </div>
            </footer>
        </div>
  </div>
</template>
<script>

export default {
  metaInfo: {
    title: "Home"
  },
  data() {
    return {
       menu_click:false,
        search_click:false,
        background_start:true,
        lastScrollPosition: 0,
        
    };
  },
  mounted(){
   
    var self = this
    document.getElementsByClassName("main-content")[0].addEventListener("scroll", () => {
        self.handleScroll()
    });
  },
  methods: {
    pagination(items,page=10){
      var datas=[];
      var key=0;
      items.forEach(function(value,index){
        if((index%page)==0 || index==0){
          datas[key]=[]
        }
        datas[key].push(value)
        index = index+1
        if((index%page)==0){
          key++;
        }
      })
      key=datas.length
      if(datas.length<=1){key=0}
      return {total:key,datas:datas}
    },
    handleScroll () {
      console.log(this.background_start)
      const currentScrollPosition = document.getElementsByClassName("main-content")[0]
          .scrollTop
      if (currentScrollPosition < 0) {
        return 0
      }
      this.background_start = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
      console.log(this.background_start)
    },
  }

};
</script>
<style scoped>
  @import '/main/style/style.css';
</style>
