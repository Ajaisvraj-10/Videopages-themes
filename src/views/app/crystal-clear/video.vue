
<template>
    <div class="main-content main-content-2" :class="$root.mode=='light'?'mode_change':''">
      
          <div class="site-wrapper2" :class="menu_click?'nav-active':''">
  
              <MainHeader :edit="edit" :blocks="blocks" :current_block="current_block"></MainHeader>
              <div v-if="is_start">
                  <div class="row position-relative" style="margin-top:80px;min-height: calc(100vh - 340px);" v-if="current_movie.id && start">
                      <div class="col-md-8 play-video-col">
                           <div class="" v-if="current_movie.message=='play'">
                            <iframe :src="'https://iframe.mediadelivery.net/embed/'+libary_id+'/'+current_movie.video.video_guid+'?autoplay=true'" loading="lazy" style="border: none;min-height: 300px; width: 100%;" allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowfullscreen="true"></iframe>
                          </div>
                          <div class="cursor-pointer play-video-thumb" @click="playMovie()" v-else>
                              <img :src="api_url+current_movie.thumbnail"  class="banner-vid w-100 thumb_img" >
                          </div>
                         
                          <div class=" px-4">
                             
                              <div class="video-controls mb-2">
                                  <div class="w-100">
                                      <div class="w-100 " style="position: relative;z-index: 999;">
                                              <div class="mb-2" style="display:flex;justify-content:space-between;align-items:start;flex-flow: wrap; gap: 8px;">
                                                  <h5 class="text-22  font-weight-600 text-white main-heading-1 ">{{current_movie.name}}</h5>
                                                  <div class="flex-align3  g2">
                                                      <div class="btn-outline-light px-2 py-1 btn" style="font-size: 14px;font-weight:500;">
                                                           Share
                                                      </div>
                                                      <div class="btn-primary px-2 py-1 btn" style="font-size: 14px;font-weight:400;">
                                                           Watchlist
                                                      </div>
                                                      
                                                  </div>
                                              </div>
                                              <div class="ratings flex-align3 mt-3 mb-2" style="flex-flow: wrap;gap: 5px;">
                                                  <span class="rating-child text-10 border font-weight-600 rounde4 mr-2" style="padding:2px 3px;">IMDB</span>
                                                  <h6 class="rating-child font-weight-400 text-13">{{current_movie.message}}</h6>
                                                  <h6 class="rating-child font-weight-400 text-13">Movie</h6>
                                                  <h6 class="rating-child font-weight-400 text-13">English</h6>
                                                  <h6 class="rating-child font-weight-400 text-13">2hr 30min</h6>
                                                  <h6 class="rating-child font-weight-400 text-13">2022</h6>
                                              </div>
                                              <div class="w-100">
                                                  <h4 class="text-14 my-3 font-weight-400 main-heading-2" style="line-height:20px;color:lightgray;">{{current_movie.description}}</h4>
                                                  
                                              </div>
                                          
                                      </div>
  
                                      <div class="stars my-1">
                                          
                                          <div class="flex-align3 movie-specs mb-2" v-for="movie_spec in current_movie.specs">
                                              <h6 class="text-13 font-weight-500 pr-2" style="min-width:150px;color:lightgray;">{{movie_spec.label}}</h6>
                                              <h6 class="text-12 font-weight-400  bg-primary text-white px-2 rounded py-1"></h6>
                                          </div>
                                          <div class="flex-align3 mb-2">
                                              <h6 class="text-13 font-weight-500 pr-2" style="min-width:150px;color:lightgray;">Genres </h6>
                                              <h6 class="text-12 font-weight-400  bg-primary text-white px-2 rounded py-1">{{current_movie.category_detail.name}}</h6>
                                          </div>
                                          <div class="flex-align3 mb-2">
                                              <h6 class="text-13 font-weight-500 pr-2" style="min-width:150px;color:lightgray;">Language</h6>
                                              <h6 class="text-12 font-weight-400  bg-primary text-white px-2 rounded py-1">{{current_movie.language_detail.name}}</h6>
                                          </div>
                                      </div>
  
                                  </div>
  
                              </div>
  
                          </div>
                      </div>
                      <div class="col-md-4 min-768">
                          <h6 class="text-14 mb-3 font-weight-600">Recommended Movies for you</h6>
                          <div class="row">
                              <div class="col-6" v-for="movie in recommended_movies">
                                  <div class="image-row" >
                                                  
                                      <div class="hover-modal image ml-0" >
                                          <router-link :to="edit?'':{name:'video',params: { type: slugify(movie.type), category: slugify(movie.category_detail.name), slug: movie.slug }, query: {language:movie.language_detail.name}}">
                                              <div class="position-relative" >
                                                  <img :src="api_url+movie.thumbnail">
                                                          
                                                  <div class="hover-modal-div">
                                                             
                                                      <div class="small-details">
                                                                  <h5 class="text-14 font-weight-600 mt-1 text-white">{{movie.name}}</h5>
  
                                                                  
  
                                                                  <h5 class="text-10 font-weight-600 mt-1 text-light"><span class=" pr-2">98% match</span><span class=" pr-2">2022</span>2h 30m</h5>
  
                                                                  <div class="flex-align3 mt-2">
                                                                      <button class="rounded py-1 flex-align3 modal-icons" style="border:1px solid white;background-color:initial;">
                                                                          <i class="fa fa-play  text-white " style="font-size:10px;"></i>
                                                                          <h5 class="text-10 text-white font-weight-600">Watch</h5>
                                                                      </button>
                                                                      <button class="rounded py-1 flex-align3 modal-icons" style="border:none;background-color:initial;">
                                                                          <i class="fa fa-share-alt  text-white " style="font-size:10px;"></i>
                                                                          <h5 class="text-10 text-white font-weight-600">Share</h5>
                                                                      </button>
                                                                     
                                                                          
                                                                      
                                                                  </div>
  
                                                             </div>
                                                  </div>
                                              </div>
                                          </router-link>
                                      </div> 
                                                  
                                  </div> 
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div v-else>
                  <div class="row position-relative" style="margin-top:80px;min-height: calc(100vh - 340px);">
                      <div class="col-md-8 play-video-col">
                          <div class="animated-background width-100 height-100" style="aspect-ratio: 16/9;"></div>
                         
                          <div class="overlay-in-video px-lg-5 px-4">
                             
                              <div class="video-controls mb-2">
                                  <div class="w-100">
                                      <div class="w-50 " style="position: relative;z-index: 999;">
                                          
                                          <h5 class="height4 animated-background" style="width:300px;"></h5>
  
                                          <div class="ratings flex-align3 my-3" style="opacity:.5;">
                                              <h5 class="height3 animated-background" style="width:360px;"></h5>
                                          </div>
                                      </div>
                                      
                                      <div class="stars my-3">
                                          <div class="flex-align3 movie-specs my-2">
                                              <h5 class="height3 mr-3  animated-background" style="min-width:150px;"></h5>
                                              <h5 class="height5 width9 animated-background" ></h5>
  
                                          </div>
                                          <div class="flex-align3 movie-specs my-2">
                                              <h5 class="height3 mr-3  animated-background" style="min-width:150px;"></h5>
                                              <h5 class="height5 width9 animated-background" ></h5>
  
                                          </div>
                                          <div class="flex-align3 movie-specs my-2">
                                              <h5 class="height3 mr-3  animated-background" style="min-width:150px;"></h5>
                                              <h5 class="height5 width9 animated-background" ></h5>
  
                                          </div>
                                          
                                      </div>
  
                                  </div>
  
                              </div>
  
                          </div>
                      </div>
                      <div class="col-md-4 min-768">
                          <h6 class="height3 width9 animated-background px-5 mb-2"></h6>
                          <div class="row">
                              <div class="col-6">
                                  <div class="image-row" >
                                      <div class="hover-modal image ml-0" >
                                          <div class="position-relative" >
                                              <div class="animated-background width-100 height-100" style="aspect-ratio: 2/2.8;"></div>
                                          </div>
                                      </div> 
                                  </div> 
                              </div>
                              <div class="col-6">
                                  <div class="image-row" >
                                      <div class="hover-modal image ml-0" >
                                          <div class="position-relative" >
                                              <div class="animated-background width-100 height-100" style="aspect-ratio: 2/2.8;"></div>
                                          </div>
                                      </div> 
                                  </div> 
                              </div>
                              <div class="col-6">
                                  <div class="image-row" >
                                      <div class="hover-modal image ml-0" >
                                          <div class="position-relative" >
                                              <div class="animated-background width-100 height-100" style="aspect-ratio: 2/2.8;"></div>
                                          </div>
                                      </div> 
                                  </div> 
                              </div>
                              <div class="col-6">
                                  <div class="image-row" >
                                      <div class="hover-modal image ml-0" >
                                          <div class="position-relative" >
                                              <div class="animated-background width-100 height-100" style="aspect-ratio: 2/2.8;"></div>
                                          </div>
                                      </div> 
                                  </div> 
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="second-section main-page-sec " v-if="is_start">
  
                  <div class="image-grid" v-for="block in blocks" @click="selectContent(pblk)" :class="block.is_edit?'selected_content':''" :id="'blocks_'+block.id" v-show="block.status" v-if="block.movie_type!='None'">
                      <div class="position-relative" >
                          <div class="flex-align" >
                              <h6 class="section-sidehead text-white  pl-2">{{block.value}}</h6>
                              <h6 class="text-more mr-3">View More </h6>
                          </div>
                          <b-carousel
                              :id="'movie'+block.id"
                              class="slider-movie  py-0"
                              :interval="4000"
                              controls>
                              <b-carousel-slide v-for="sort_movie in block.movies.datas">
                                  <template #img>
                                      <div class="image-row">
                                          
                                          <div class="hover-modal image" v-for="movie in sort_movie" @click="current_movie=movie">
                                              <router-link :to="edit?'':{name:'video',params: { type: slugify(movie.type), category: slugify(movie.category_detail.name), slug: movie.slug }, query: {language:movie.language_detail.name}}">
                                              <div class="position-relative" >
                                                  <img :src="api_url+movie.thumbnail">
                                                  
                                                  <div class="hover-modal-div">
                                                     
                                                     <div class="small-details">
                                                              <h5 class="text-14 font-weight-600 mt-1 text-white">{{movie.name}}</h5>
  
                                                              <!--<h5 class="text-10 font-weight-600 mt-1 text-white">{{movie.description}}</h5>-->
  
                                                              <h5 class="text-10 font-weight-600 mt-1 text-light"><span class=" pr-2">98% match</span><span class=" pr-2">2022</span>2h 30m</h5>
  
                                                              <div class="flex-align3 g1 mt-2">
                                                                  <button class="rounded py-1 flex-align3 modal-icons" style="border:1px solid white;background-color:initial;">
                                                                      <i class="fa fa-play  text-white " style="font-size:10px;"></i>
                                                                      <h5 class="text-10 text-white font-weight-600">Watch</h5>
                                                                  </button>
                                                                  <button class="rounded py-1 flex-align3 modal-icons" style="border:none;background-color:initial;">
                                                                      <i class="fa fa-share-alt  text-white " style="font-size:10px;"></i>
                                                                      <h5 class="text-10 text-white font-weight-600">Share</h5>
                                                                  </button>
                                                                 
                                                                      
                                                                  
                                                              </div>
  
                                                         </div>
                                                  </div>
                                              </div>
                                              </router-link>
                                          </div> 
                                          
                                      </div>    
                                  </template>
                              </b-carousel-slide>
                          </b-carousel>
                      </div>
  
                  </div>
              </div>
              <div class="second-section main-page-sec " v-else>
  
                  <div class="image-grid" v-for="block in blocks" @click="selectContent(pblk)" :class="block.is_edit?'selected_content':''" :id="'blocks_'+block.id" v-show="block.status" v-if="block.movie_type!='None'">
                      <div class="position-relative" >
                          <div class="flex-align" >
                              <h6 class="height3 width5 animated-background ml-2 px-5"></h6>
                          </div>
                          <b-carousel
                              :id="'movie'+block.id"
                              class="slider-movie  py-0"
                              :interval="4000"
                              controls>
                              <b-carousel-slide v-for="sort_movie in block.movies.datas">
                                  <template #img>
                                      <div class="image-row">
                                          
                                          <div class="hover-modal image" v-for="movie in sort_movie" @click="current_movie=movie">
                                              <router-link :to="edit?'':{name:'video',params: { type: slugify(movie.type), category: slugify(movie.category_detail.name), slug: movie.slug }, query: {language:movie.language_detail.name}}">
                                              <div class="position-relative" >
                                                  <div class="animated-background width-100 height-100" style="aspect-ratio: 2/2.8;"></div>
                                                  
                                              </div>
                                              </router-link>
                                          </div> 
                                          
                                      </div>    
                                  </template>
                              </b-carousel-slide>
                          </b-carousel>
                      </div>
  
                  </div>
              </div>
  
              <b-modal id="payment" hide-header hide-footer>
                <img src="/all-images/close.png" class="cursor-pointer" style="position:absolute;top:20px;right:20px;z-index:999;width:15px;height:15px;" @click="$bvModal.hide('payment')">
                <div>
  
                    <div class="plan-sec2 p-4" style="max-height: 66vh;overflow: auto;">
                      <h6 class="text-white font-weight-500 mb-4 text-20">Video Rent </h6>
                      <div class="plan-card2 row mx-0" v-if="crnt_tab=='tab1'">
                          <div class="d-flex align-items-center w-100 g3">
                              <img :src="current_movie.mobile_thumbnail?api_url+current_movie.mobile_thumbnail:api_url+current_movie.thumbnail"  class=""  style="width: 90px;">
                              <div>
                                  <h5 class="text-14 font-weight-500 mb-1">{{current_movie.name}} ({{current_movie.language_detail.name}})</h5>
                                  <h6 class="text-12 text-light font-weight-500 mb-1">{{current_movie.type}}</h6>
                                  <h6 class="text-12 text-light font-weight-500 mb-1">2h 51m 10s</h6>
                                  <h6 class="text-12 text-light font-weight-500 mb-1">{{current_movie.category_detail.name}}</h6>
                                  <span class="text-12 text-light font-weight-500 mb-1">
                                      8.3 <span class="imdb ml-2">IMDB</span>
                                  </span>
                              </div>
  
                          </div>
                          <div class="mt-3 border-top w-100 pt-4">
                              <h6 class="text-14 font-weight-600 mb-2">Rent movie</h6>
                              <h6 class="text-12 font-weight-500 text-light">Start within 30 days, finish within 48 hours after first playback</h6>
                              <div class="flex-align g2 mb-3 mt-3">
                                  <h6 class="mb-0 text-14 font-weight-600" >High Definition</h6>
                                  <h6 class="mb-0 btn py-1 px-2 btn-primary font-weight-600" style="font-size: 12px;" @click="crnt_tab='tab2'">$ 150.00</h6>
                              </div>
                          </div>
                          <div class="mt-3 border-top pt-4 w-100">
                              <h6 class="text-14 mb-2 font-weight-600">Buy movie</h6>
                              <div class="flex-align g2 mb-3 mt-2">
                                  <h6 class="mb-0 text-14  font-weight-600">Ultray High Definition</h6>
                                  <h6 class="mb-0 btn py-1 px-2 btn-primary font-weight-600" style="font-size: 12px;" @click="crnt_tab='tab2'">$ 750.00</h6>
                              </div>
                              <div class="flex-align g2 mb-3 mt-2">
                                  <h6 class="mb-0 text-14  font-weight-600">Standard Definition</h6>
                                  <h6 class="mb-0 btn py-1 px-2 btn-primary font-weight-600" style="font-size: 12px;" @click="crnt_tab='tab2'">$ 600.00</h6>
                              </div>
                          </div>
                        
                      </div>
                      <div class="plan-card2 row mx-0" v-if="crnt_tab=='tab2'">
                        <div class="col-md-12 p-0 plan-card-col">
                          <div class="flex-align mb-4">
                              <h6 class="text-16 font-weight-500  mb-0">Select Payment Method</h6>
                              <h6 class="mb-0 text-12 text-info cursor-pointer" @click="crnt_tab='tab1'">Back</h6>
                          </div>
                          <button class="btn btn-primary-outline rounded2 py-2 w-100 my-2" v-for="payment_method in payment_methods" @click="setRazorpay()">{{payment_method.name}}</button>
                        </div>
                      </div>
                    </div>
                </div>
              </b-modal>  
  
          </div>
          <MainFooter :edit="edit" :blocks="blocks" :current_block="current_block"></MainFooter>
    </div>
  </template>
  <script>
  import MainHeader from '/src/views/app/crystal-clear/header'
  import MainFooter from '/src/views/app/crystal-clear/footer'
  export default {
    props: ['edit','blocks','current_block'],
    metaInfo: {
      title: "Movie"
    },
    components:{
      MainHeader,
      MainFooter,
    },
    data() {
      return {
          datas: {},
          current_page:{},
          current_movie:{language_detail:{},category_detail:{},movie_spec:[]},
          payment_methods:[],
          razorpay_options:{
              key: "",
              amount: "",
              currency: "",
              name: "Purchase Now",
              order_id: "",
              callback_url: "",
          },
          is_not_play:true,
  
          is_start:true,
  
          crnt_tab: 'tab1',
  
  
      };
    },
    mounted(){
      if(this.$route.query.payment){
          this.showAlert('Plan purchased successfully!')
      }
      if(this.edit){
          this.start = true
      }else{
          this.edit=false
          this.blocks = [{},{},{}]
          this.getPage()
      }
      this.getMovie(this.$route.params.slug)
    },
    watch: {
      '$route': 'changeRoute',
    },
    methods: {
      changeRoute(){
          this.is_not_play = true
          this.getMovie(this.$route.params.slug)
      },
      getMovie(slug='default') {
        var headers = new Headers();
        headers.append("Authorization", "Bearer "+(this.$root.token?this.$root.token:this.$root.admin_token));
        fetch(this.api_url+'/customer/get_movie/'+slug+'/', {
            method : 'get',
            headers: headers,
        })
        .then((response) => {
            return response.json()
        })
        .then((jsonData) => {
            this.current_movie = jsonData.movie
            this.recommended_movies = jsonData.recommended_movies
        })
      },
      playMovie(){
          if(this.$root.token){
              if(this.current_movie.rent_video && this.current_movie.rent_video.is_rent){
                  this.checkRent()
              }else{
                  this.playNow()
              }
          }else{
              if(this.current_movie.free_video && this.current_movie.free_video.is_free){
                  this.playNow()
              }else{
                  this.$router.push('/sign-in')
              }
          }
      },
      playNow(){
          this.current_movie.message='play'
          if(this.is_not_play){
              var headers = new Headers();
              var formdata = new FormData();
              headers.append("Authorization", "Bearer "+this.$root.token);
              formdata.append('movie', this.current_movie.id)
              fetch(this.api_url+'/customer/user_watch/', {
                  method : 'post',
                  headers: headers,
                  body: formdata,
              })
              .then((response) => {
                  return response.json()
              })
              .then((jsonData) => {
                  this.is_not_play = true
              })
          }
      },
      checkRent() {
        var headers = new Headers();
        var formdata = new FormData()
        formdata.append('movie',this.current_movie.id)
        headers.append("Authorization", "Bearer "+this.$root.token);
        fetch(this.api_url+'/customer/check_rent/', {
            method : 'post',
            headers: headers,
            body: formdata,
        })
        .then((response) => {
            return response.json()
        })
        .then((jsonData) => {
          if(jsonData.success){
              this.playNow()
          }else{
              this.getPaymentMethods()
              this.$bvModal.show('payment')
          }
        })
      },
      getPaymentMethods() {
        var headers = new Headers();
        headers.append("Authorization", "Bearer "+(this.$root.token?this.$root.token:this.$root.admin_token));
        fetch(this.api_url+'/content/payment_settings/', {
            method : 'get',
            headers: headers,
        })
        .then((response) => {
            return response.json()
        })
        .then((jsonData) => {
          this.payment_methods = jsonData
        })
      },
      setRazorpay(){
        var headers = new Headers();
        headers.append("Authorization", "Bearer "+this.$root.token);
        fetch(this.api_url+'/payments/razorpay_payment/?data_type=rent&movie_id='+this.current_movie.id, {
          method : 'get',
          headers: headers,
        })
        .then((response) => {
          return response.json()
        })
        .then((jsonData) => {
            this.razorpay_options = {
                key: jsonData.razorpay_merchant_key,
                amount: jsonData.razorpay_amount,
                currency: jsonData.currency,
                name: "Purchase Now",
                order_id: jsonData.razorpay_order_id,
                callback_url: this.api_url+jsonData.callback_url,
            };
            this.purchasePlan(this.$event)
        })
      },
      purchasePlan(e){
        var rzp1 = new Razorpay(this.razorpay_options);
        rzp1.open();
        e.preventDefault()
      },
      getPage() {
        var headers = new Headers();
        headers.append("Authorization", "Bearer "+(this.$root.token?this.$root.token:this.$root.admin_token));
        fetch(this.api_url+'/content/pages_contents/?theme='+theme_name+'&page=/watching', {
            method : 'get',
            headers: headers,
        })
        .then((response) => {
  
            return response.json()
        })
        .then((jsonData) => {
              this.is_start = true
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
    @import '/crystal-clear/style/style.css';
    @import '/crystal-clear/style/style-2.css';
    @import '/crystal-clear/style/load-style.css';
    
    .thumb_img{
      opacity: 0.5;
      aspect-ratio: 16/9;
      object-fit: contain;
      object-position: center;
      background: black;
      border-radius: 8px;
  
    }
    .play-video-col iframe{
      aspect-ratio:16/9;
  }
  .play-video-thumb{
      position:relative;
  }
  .play-video-thumb:before{
      content:"";
      position:absolute;
      left:50%;
      top:50%;
      transform:translate(-50%, -50%);
      width:70px;
      background:url(/all-images/play-button.png);
      height:70px;
      background-size: contain;
      z-index: 9;
  }
  
  </style>
  