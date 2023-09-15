<template>
    <div class="main-content">
       <div class="site-wrapper">   
          <MainHeader></MainHeader>
              <div id="content" class="site-content center-relative" style="margin-top:-85px;">
                <div id="home" class="section no-page-title" style=" background:linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.50)), url(/crystal-clear/images/bg1.jpg);background-size: cover;background-position: center left;background-repeat: no-repeat;">  
                      <div class="overlay-in-video-3">
                      </div>                 
                      <div class="section-wrapper block content-1170 center-relative">                                                
                          <div class="content-wrapper banner-captions text-center mt-5 pt-5">                           
                              <h1 v-for="(blocks, index) in blocks"
      :key="index" class="big-text banner-text text-center" @click="selectContent(blocks)" :class="blocks.is_edit?'selected_content':''" :id="'blocks_'+blocks.id" v-show="blocks.status">
                                 <span>{{blocks.value}}</span>
                              </h1>
                              <h4 v-for="(blocks, index) in blocks"
      :key="index" class="fadein banner-text-2 text-25 my-2 text-white font-weight-400" @click="selectContent(blocks)" :class="blocks.is_edit?'selected_content':''" :id="'blocks_'+blocks.id" v-show="blocks.status">{{blocks.value}}</h4>
                              <h4 v-for="(blocks, index) in blocks"
      :key="index" @click="selectContent(blocks)" class="fadein banner-text-3 text-18 mt-4 pt-2 text-white font-weight-400 " :class="blocks.is_edit?'selected_content':''" :id="'blocks_'+blocks.id" v-show="blocks.status">{{blocks.value}}</h4>
                              <div class="fadein home-sign-input mt-4">
                                <input type="text" placeholder="email address">
                                <router-link :to="edit?'':{name:'registration'}"><a  class="text-white cursor-pointer" >Get Started <i class="fa fa-angle-right ml-3"></i></a></router-link>
                                
                              </div>
                          </div>                        
                      </div>
                  </div> 
                </div> 
                <!-- Services Section -->
                  
                <div class="borders-bottom"></div>
                  <!-- About Section -->
                  <div id="about" class="section">                   
                      
  
                      <div class="section-wrapper  block content-1170 center-relative ">                                                
                          <div class="content-wrapper d-flex  align-items-center">
  
                              <div class="one_half">
                                  
                                  <h2 class="entry-title medium-text">
                                     Enjoy on your TV.
                                  </h2>
                                  <h1 class="text-26 text-4 text-white">
                                      Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
                                  </h1>
                                  <br>
                                  
                              </div>
  
                              <div class="one_half last" >
                                <div class="video-in-image">
                                  <img src="/crystal-clear/images/tv.png" alt="" /> 
                                  <img src="/crystal-clear/images/tv.png" alt="" class="gif-vid-parts" />
  
                                  <video class="our-story-card-video gif-vid-4" data-uia="our-story-card-video" autoplay="" playsinline="" muted="" loop=""><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4"></video>
                                 
                                </div>                  
                              </div>
                              <div class="clear"></div>
                          </div>                        
                      </div>
                      <div class="borders-bottom"></div>
                      <div class="section-wrapper order-0 content-1170 center-relative ">                                                
                          <div class="content-wrapper d-flex align-items-center">
                              <div class="one_half last" >
                                  <div class="video-in-image">
                                      <img v-for="(blocks, index) in blocks"
      :key="index" :src="blocks.value?blocks.image:api_url+blocks.image" alt="" @click="selectContent(blocks)" :class="blocks.is_edit?'selected_content':''" :id="'blocks_'+blocks.id" v-show="blocks.status"/> 
                                      <div class="flex-align border rounded2 p-2 mobile-mockup" >
                                          <div class="our-story-card-animation-image d-flex align-items-center">
                                              <img alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" style="width:50px;" class="rounded">
                                              <div class="our-story-card-animation-text pl-3">
                                                  <div class="text-white pb-1 text-18" >Stranger Things</div>
                                                  <div class="text-info" >Downloading...</div>
                                              </div>
                                          </div>
                                          
                                          <i class="fa fa-download px-2"></i>
                                      </div>  
  
                                   
  
                                  </div>                   
                              </div>
                              <div class="one_half">
                                  
                                  <h2 class="entry-title medium-text">
                                     Download your shows to watch offline.
                                  </h2>
                                  <h1 class="text-26 text-4 text-white">
                                     Save your favourites easily and always have something to watch.
                                  </h1>
                                  
                              </div>
  
                              
                              <div class="clear"></div>
                          </div>                        
                      </div>
                      <div class="borders-bottom"></div>
                      <div class="section-wrapper  block content-1170 center-relative">                                                
                          <div class="content-wrapper d-flex align-items-center">
  
                              <div class="one_half">
                                  
                                  <h2 class="entry-title medium-text">
                                     Watch everywhere.
                                  </h2>
                                  <h1 class="text-26 text-4 text-white">
                                      Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
                                  </h1>
                                  
                              </div>
  
                              <div class="one_half last" >
                                <div class="video-in-image">
                                  <img src="/crystal-clear/images/device-pile-in.png" alt="" /> 
                                  <img src="/crystal-clear/images/device.png" alt="" class="gif-vid-parts" />   
  
                                 
                                  <video class="gif-vid" data-uia="our-story-card-video" autoplay="" playsinline="" muted="" loop=""><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4"></video>
                                 
  
                                </div>                   
                              </div>
                              <div class="clear"></div>
                          </div>                        
                      </div>
                      <div class="borders-bottom"></div>
                      <div class="section-wrapper order-0 block content-1170 center-relative">                                                
                          <div class="content-wrapper d-flex align-items-center">
                              <div class="one_half last" >
                                <div class="video-in-image">
                                  <img src="/crystal-clear/images/children.png" alt="" /> 
                                    
  
                                </div>                   
                              </div>
                              <div class="one_half">
                                  
                                  <h2 class="entry-title medium-text">
                                     Download your shows to watch offline.
                                  </h2>
                                  <h1 class="text-26 text-4 text-white">
                                     Save your favourites easily and always have something to watch.
                                  </h1>
                                  
                              </div>
  
                              
                              <div class="clear"></div>
                          </div>                        
                      </div>
                      <div class="borders-bottom"></div>
  
                  </div> 
                  <div id="services" class="section">                   
                      
                      <div class="section-wrapper block content-1170 center-relative">      
                          <div class="faq">
                            
                                  <h1 class="entry-title medium-text text-center mb-3">Frequently Asked Questions</h1>
                                
                                <b-button v-b-toggle.collapse-1 variant="dark" class="my-2 collapses d-flex justify-content-between align-items-center">What is videoflex? <i class="fa fa-plus"></i></b-button>
                                <b-collapse id="collapse-1" class="">
                                  <b-card>
                                      <h1 class="text-24 text-5">
                                      videoflex is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.<br><br>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                                      </h1>
                                  </b-card>
                                </b-collapse>
                                <b-button v-b-toggle.collapse-2 variant="dark" class="my-2 collapses d-flex justify-content-between align-items-center">How much does videoflex cost? <i class="fa fa-plus"></i></b-button>
                                <b-collapse id="collapse-2" class="">
                                  <b-card>
                                      <h1 class="text-24 text-5">
                                      Watch videoflex on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
                                      </h1>
                                  </b-card>
                                </b-collapse>
                              
                                
                                <b-button v-b-toggle.collapse-4 variant="dark" class="my-2 collapses d-flex justify-content-between align-items-center">Where can I watch? <i class="fa fa-plus"></i></b-button>
                                <b-collapse id="collapse-4" class="">
                                  <b-card>
                                      <h1 class="text-24 text-5">
                                      Watch videoflex on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
                                      </h1>
                                  </b-card>
                                </b-collapse>
                                <b-button v-b-toggle.collapse-6 variant="dark" class="my-2 collapses d-flex justify-content-between align-items-center">How much does videoflex cost? <i class="fa fa-plus"></i></b-button>
                                <b-collapse id="collapse-6" class="">
                                  <b-card>
                                      <h1 class="text-24 text-5">
                                      Watch videoflex on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
                                      </h1>
                                  </b-card>
                                </b-collapse>
                                <b-button v-b-toggle.collapse-3 variant="dark" class="my-2 collapses d-flex justify-content-between align-items-center">Where can I watch? <i class="fa fa-plus"></i></b-button>
                                <b-collapse id="collapse-3" class="">
                                  <b-card>
                                      <h1 class="text-24 text-5">
                                      Watch videoflex on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
                                      </h1>
                                  </b-card>
                                </b-collapse>
                                <b-button v-b-toggle.collapse-5 variant="dark" class="my-2 collapses d-flex justify-content-between align-items-center">Where can I watch? <i class="fa fa-plus"></i></b-button>
                                <b-collapse id="collapse-5" class="">
                                  <b-card>
                                      <h1 class="text-24 text-5">
                                      Watch videoflex on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
                                      </h1>
                                  </b-card>
                                </b-collapse>
  
                              
                          </div>                                          
                          <div class="content-wrapper">
  
                             
                              <div class="mt-5 pt-3">
                                <h4 class=" text-18 my-2 text-white text-center">Ready to watch? Enter your email to create or restart your membership.</h4>
                                
                                <div class="home-sign-input mt-3">
                                  <input type="text" placeholder="email address">
                                  <router-link :to="edit?'':{name:'registration'}"><a  class="text-white cursor-pointer" >Get Started <i class="fa fa-angle-right ml-3"></i></a></router-link>
                                </div>
                              </div>
  
                          </div>                        
                      </div>
                  </div>  
                  <div class="borders-bottom"></div>
  
  
    
              <footer class="footer container">
                  <div class="text-left mb-3">
                      <h5 class="text-16 text-gray">Questions? Call 1-866-579-7172</h5>
                              
                             
                  </div>
                  <div class="row">
                            
                      <ul class="list1 col-sm-3 col-6 m-0">
                   
                          <li><a >FAQ</a></li>
                          <li><a >Investor Relation</a></li>
                          <li><a >Ways to Watch</a></li>
  
                          <li><a >Corporate Information</a></li>
                          
                      </ul>
                      <ul class="list1 col-sm-3 col-6 m-0">
                          <li><a >Home</a></li>
                              <li><a >Jobs</a></li>
                              <li><a >Terms of Use</a></li>
                              <li><a >Contact Us</a></li>
                             
                      </ul>
                      <ul class="list1 col-sm-3 col-6 m-0">
                                  <li><a >Account</a></li>
                                  <li><a >Redeem Gift Cards</a></li>
                                  <li><a >Privacy</a></li>
                                  <li><a >Speed Test</a></li>
                                 
  
                      </ul>
                      <ul class="list1 col-sm-3 col-6 m-0">
                                      <li><a >Media Center</a></li>
                                      <li><a >Buy Gift Cards</a></li>
                                      <li><a >Cookie Preferences</a></li>
                                      <li><a >Legal Notices</a></li>
                                      <li><a >videoflex Originals</a></li>
                                     
  
                      </ul>
                  </div>
                  <div class="text-left" >
                            
                            
                            <select class="button-3 text-light mr-4 px-4 py-2" style="border:1px solid gray;">
                              <option>Englis</option>
                              <option>Hindi</option>
  
                            </select>
                            <h6 class="mt-3 text-light text-12">videoflex India</h6>
                           
  
                  </div>
              </footer>
          </div>
    </div>
  </template>
  <script>
  import MainHeader from '/src/views/app/crystal-clear/header'
  export default {
    props: ['edit','blocks','current_block'],
    metaInfo: {
      title: "Main"
    },
    components:{
      MainHeader,
    },
    data() {
      return {
          start:false,
          current_page:{},
          banners:[],
          current_movie:{language_detail:{},category_detail:{},movie_spec:[]},
          localBlocks: [...this.blocks],
          localEdit: this.edit,
  
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
        if(this.$route.query.payment){
            this.showAlert('Plan purchased successfully!')
        }
        if(this.localEdit){
            this.start = true
        }else{
            this.localEdit=false
            this.localBlocks = Array.isArray(this.blocks) ? [...this.blocks] : [];
            this.getPage()
        }
        this.getBanners()
      },
      handleScroll () {
        const currentScrollPosition = document.getElementsByClassName("main-content")[0]
            .scrollTop
        if (currentScrollPosition < 0) {
          return 0
        }
        this.background_start = currentScrollPosition < this.lastScrollPosition
        this.lastScrollPosition = currentScrollPosition
      },
      getBanners() {
        var headers = new Headers();
        headers.append("Authorization", "Bearer "+this.$root.admin_token);
        fetch(this.api_url+'/customer/banners/?theme_name='+theme_name, {
            method : 'get',
            headers: headers,
        })
        .then((response) => {
            return response.json()
        })
        .then((jsonData) => {
            this.banners = jsonData
        })
      },
      getPage() {
        var headers = new Headers();
        headers.append("Authorization", "Bearer "+this.$root.admin_token);
        fetch(this.api_url+'/content/pages_contents/?theme='+theme_name+'&page=/', {
            method : 'get',
            headers: headers,
        })
        .then((response) => {
            return response.json()
        })
        .then((jsonData) => {
            this.current_page = jsonData
            this.blocks = jsonData.blocks
              for(var i=0;i<this.blocks.length;i++){
                if(this.blocks[i].movie_type!='None'){
                  this.blocks[i].movies = this.paginationMovies(this.blocks[i].movies,6)
                }
              }
            this.start = true
        })
      },
      selectContent(block){
          if(this.edit){
              this.$emit('selectedContent', block)
          }
      }
    }
  
  };
  </script>
  <style scoped>
  @import '/crystal-clear/style/style1.css';
  @import '/crystal-clear/style/style.css';
  @import '/crystal-clear/style/style2.css';
  
  </style>
   
  
  