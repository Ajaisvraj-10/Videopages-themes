
<template>
  <div class="main-content main-content-2" :class="$root.mode=='light'?'mode_change':''">
    
        <div class="site-wrapper2" :class="menu_click?'nav-active':''">

            <!--<MainHeader :edit="edit" :blocks="blocks" :current_block="current_block"></MainHeader>-->
            <div >
                <div class="row position-relative" v-if="current_movie.id && start">
                    <div class="col-md-12 play-video-col">
                         <div class="" v-if="current_movie.message=='play'">
                          <iframe :src="'https://iframe.mediadelivery.net/embed/'+libary_id+'/'+current_movie.video.video_guid+'?autoplay=true'" loading="lazy" style="border: none;min-height: 300px; width: 100%;" allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowfullscreen="true"></iframe>
                        </div>
                        <div class="cursor-pointer play-video-thumb" @click="playMovie()" v-else>
                            <img :src="api_url+current_movie.thumbnail"  class="banner-vid w-100 thumb_img" >
                        </div>
                       
                        <div class="" style="max-width:1200px;margin: 0 auto;margin-top:-55vh;">
                            <div class="video-controls mb-2">
                                <div class="w-100">
                                    <div class="w-100 " style="position: relative;z-index: 999;">
                                            <div class="mb-2" style="display:flex;justify-content:space-between;align-items:start;flex-flow: wrap; gap: 8px;">
                                                <h5 class="text-28  font-weight-600 text-white main-heading-1 ">{{current_movie.name}}</h5>
                                            </div>
                                            <div class="w-100 mt-3 mb-2">
                                                <h4 class="text-14 my-3 font-weight-400 main-heading-2" style="line-height:20px;color:lightgray;">{{current_movie.description}}</h4>
                                            </div>
                                            <div class="movie-specs mt-3 mb-2" >
                                                <h6 class="rating-child font-weight-400 text-13">{{current_movie.message}}</h6>
                                                <h6 class="rating-child font-weight-400 text-13">Movie</h6>
                                                <h6 class="rating-child font-weight-400 text-13">English</h6>
                                                <h6 class="rating-child font-weight-400 text-13">2hr 30min</h6>
                                                <h6 class="rating-child font-weight-400 text-13">2022</h6>
                                            </div>
                                            
                                        
                                    </div>
                                    <div class="d-flex align-items-center g4 my-3" style="z-index:99;position: relative;">

                                       
                                        <div class="mb-2">
                                            <h6 class="text-13 font-weight-500 pr-2 mb-2" style="min-width:150px;color:lightgray;opacity:.7;">Genres </h6>
                                            <h6 class="text-14 font-weight-400">{{current_movie.category_detail.name}}</h6>
                                        </div>
                                        <div class="mb-2">
                                            <h6 class="text-13 font-weight-500 pr-2 mb-2" style="min-width:150px;color:white;opacity:.7;">Language</h6>
                                            <h6 class="text-14 font-weight-400">{{current_movie.language_detail.name}}</h6>
                                        </div>
                                         <div class="mb-2" v-for="movie_spec in current_movie.specs">
                                            <h6 class="text-13 font-weight-500 pr-2 mb-2" style="min-width:150px;color:white;opacity:.7;">{{movie_spec.label}}</h6>
                                            <h6 class="text-14 font-weight-400"></h6>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center g4 my-3" style="z-index:99;position: relative;" v-if="current_movie.message!='play'">
                                        <button class="watch-play btn btn-light" style="font-weight:500;color:#000;font-size:14px;" @click="playMovie()">
                                            <img src="/m1/images/play2.png" class="mr-1">
                                            Watch now
                                        </button>
                                    </div>
                                    <div class=" my-5" style="z-index:99;position: relative;">
                                        <h6 class="text-26 font-weight-500 mb-4">Cast & Crew</h6>
                                        <div class="align-items-center g4" style="overflow: auto; width: 100%; display: -webkit-inline-box;">
                                            <div class="mb-2" style="border-radius:6px;overflow:hidden;width:150px;">
                                                <img src="/m1/images/cast1.png" style="width:100%;">
                                                <div class="p-2" style="background:#292A2D;">
                                                    <h6 class="text-white text-14">Rajiv Patel</h6>
                                                    <h6 class="text-white text-12 mt-1" style="opacity:.7;">Vikram Rana</h6>
                                                </div>
                                            </div>
                                            <div class="mb-2" style="border-radius:6px;overflow:hidden;width:150px;">
                                                <img src="/m1/images/cast1.png" style="width:100%;">
                                                <div class="p-2" style="background:#292A2D;">
                                                    <h6 class="text-white text-14">Rajiv Patel</h6>
                                                    <h6 class="text-white text-12 mt-1" style="opacity:.7;">Vikram Rana</h6>
                                                </div>
                                            </div>
                                            <div class="mb-2" style="border-radius:6px;overflow:hidden;width:150px;">
                                                <img src="/m1/images/cast1.png" style="width:100%;">
                                                <div class="p-2" style="background:#292A2D;">
                                                    <h6 class="text-white text-14">Rajiv Patel</h6>
                                                    <h6 class="text-white text-12 mt-1" style="opacity:.7;">Vikram Rana</h6>
                                                </div>
                                            </div>
                                            <div class="mb-2" style="border-radius:6px;overflow:hidden;width:150px;">
                                                <img src="/m1/images/cast1.png" style="width:100%;">
                                                <div class="p-2" style="background:#292A2D;">
                                                    <h6 class="text-white text-14">Rajiv Patel</h6>
                                                    <h6 class="text-white text-12 mt-1" style="opacity:.7;">Vikram Rana</h6>
                                                </div>
                                            </div>
                                            <div class="mb-2" style="border-radius:6px;overflow:hidden;width:150px;">
                                                <img src="/m1/images/cast1.png" style="width:100%;">
                                                <div class="p-2" style="background:#292A2D;">
                                                    <h6 class="text-white text-14">Rajiv Patel</h6>
                                                    <h6 class="text-white text-12 mt-1" style="opacity:.7;">Vikram Rana</h6>
                                                </div>
                                            </div>
                                            <div class="mb-2" style="border-radius:6px;overflow:hidden;width:150px;">
                                                <img src="/m1/images/cast1.png" style="width:100%;">
                                                <div class="p-2" style="background:#292A2D;">
                                                    <h6 class="text-white text-14">Rajiv Patel</h6>
                                                    <h6 class="text-white text-12 mt-1" style="opacity:.7;">Vikram Rana</h6>
                                                </div>
                                            </div>
                                            <div class="mb-2" style="border-radius:6px;overflow:hidden;width:150px;">
                                                <img src="/m1/images/cast1.png" style="width:100%;">
                                                <div class="p-2" style="background:#292A2D;">
                                                    <h6 class="text-white text-14">Rajiv Patel</h6>
                                                    <h6 class="text-white text-12 mt-1" style="opacity:.7;">Vikram Rana</h6>
                                                </div>
                                            </div>
                                            <div class="mb-2" style="border-radius:6px;overflow:hidden;width:150px;">
                                                <img src="/m1/images/cast1.png" style="width:100%;">
                                                <div class="p-2" style="background:#292A2D;">
                                                    <h6 class="text-white text-14">Rajiv Patel</h6>
                                                    <h6 class="text-white text-12 mt-1" style="opacity:.7;">Vikram Rana</h6>
                                                </div>
                                            </div>
                                            <div class="mb-2" style="border-radius:6px;overflow:hidden;width:150px;">
                                                <img src="/m1/images/cast1.png" style="width:100%;">
                                                <div class="p-2" style="background:#292A2D;">
                                                    <h6 class="text-white text-14">Rajiv Patel</h6>
                                                    <h6 class="text-white text-12 mt-1" style="opacity:.7;">Vikram Rana</h6>
                                                </div>
                                            </div>
                                            <div class="mb-2" style="border-radius:6px;overflow:hidden;width:150px;">
                                                <img src="/m1/images/cast1.png" style="width:100%;">
                                                <div class="p-2" style="background:#292A2D;">
                                                    <h6 class="text-white text-14">Rajiv Patel</h6>
                                                    <h6 class="text-white text-12 mt-1" style="opacity:.7;">Vikram Rana</h6>
                                                </div>
                                            </div>
                                        </div>
                                        
                                       
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                    
                </div>
            </div>
            <!--<div v-else>
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
            </div>-->
            

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
        <!--<MainFooter :edit="edit" :blocks="blocks" :current_block="current_block"></MainFooter>-->
  </div>
</template>
<script>
import MainHeader from '/src/views/app/m1/header'
import MainFooter from '/src/views/app/m1/footer'
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
        start:false,
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

        is_start:false,

        crnt_tab: 'tab1',


    };
  },
  mounted(){
    if(this.$root.admin_token){
        this.init()
    }
  },
  watch: {
    '$route': 'changeRoute',
    '$root.admin_token' : function(){
        this.init()
    }
  },
  methods: {
    init(){
        if(!this.libary_id){
            this.frontentSettings()
        }
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
                this.blocks[i].movies = this.paginationMovies(this.blocks[i].movies,5)
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
  @import '/m1/style/style.css';
  @import '/m1/style/style-2.css';
  @import '/m1/style/load-style.css';
  @import '/m1/style/load-style.css';

  
  .thumb_img{
    opacity: 0.5;
    aspect-ratio: 8/3.5;
    object-fit: contain;
    object-position: center;
    background: #0f171e;
    border-radius: 8px;

  }
  .play-video-col iframe{
    aspect-ratio:8/3.5;
}
.play-video-thumb{
    position:relative;
}
.play-video-thumb:before{
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
   
    width: 100%;
    background: linear-gradient(180deg, #0f171e05, #0f171e);
    height: 100%;
    background-size: contain;
    z-index: 9;
}

</style>
