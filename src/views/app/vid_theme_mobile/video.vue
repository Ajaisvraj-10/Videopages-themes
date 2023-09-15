
<template>
  <div class="main-content main-content-2" :class="$root.mode=='light'?'mode_change':''">
    
    <div class="site-wrapper2 video-wrapper" :class="menu_click?'nav-active':''">   
           
            <div class="px-3 py-2 w-100" style="position:absolute;top:0; left:0; width:100%;" >    
                <router-link :to="edit?'':{name:'home'}">
                  <i class="fa fa-angle-left" style="font-size:26px;color:white;"></i>
                </router-link>
            </div>
            <div v-if="current_movie.id && start">
                <div class="video-tab" v-if="current_movie.message=='play'">
                    <iframe :src="'https://iframe.mediadelivery.net/embed/'+libary_id+'/'+current_movie.video.video_guid+'?autoplay=true'" loading="lazy" style="border: none;height: 400px; width: 100%;" allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowfullscreen="true"></iframe>
                </div>
                <div class="video-tab" v-else>
                    <img :src="current_movie.mobile_thumbnail?api_url+current_movie.mobile_thumbnail:api_url+current_movie.thumbnail"  class="w-100 thumb_img" @click="playMovie()">
                </div>
                <div class="flex-align plan-banner" v-if="!frontent_settings.have_plan">
                    <h6 class="text-10">Ad-Free with Premium now at 30%OFF:$699/year</h6> 
                    <router-link :to="edit?'':{name:'plan'}">
                        <button class="btn" style="background-color: #8230c6;color: white;font-size: 13px;font-weight: 500;border: 1px solid #8230c6;border-radius: 5px;padding:5px 8px;width: max-content;">
                        <img src="/vid_theme_mobile/images/king.png" style="width:16px;" class="mr-1">BUY PLAN</button>
                    </router-link>
                        
                </div>
                <div class="video-details">
                    <h5 class="text-14 font-weight-700 mb-2">{{current_movie.name}} ({{current_movie.language_detail.name}})</h5>
                    <h6 class="text-10">
                        <span>{{current_movie.type}}</span>
                        <!-- <span>{{dateFormate(current_movie.created_on}}</span> -->
                        <span>2h 51m 10s</span>
                        <span>{{current_movie.category_detail.name}}</span>
                    </h6>


                </div>
                <div class="video-detail-icons flex-align" style="gap:15px;">
                    <div class="flex-align3" style="gap:10px;">
                        <div class="text-center">
                            <i class="fa fa-share pb-1"></i>
                            <h6 class="text-10">Share</h6>
                        </div>
                        <div class="text-center">
                            <i class="fa fa-list pb-1"></i>
                            <h6 class="text-10">Watchlist</h6>
                        </div>
                        <div class="text-center ">
                            <i class="fa fa-download pb-1"></i>
                            <h6 class="text-10">Download</h6>
                        </div>
                    </div>
                    <div class="text-center">
                            <i class="fa fa-video-camera pb-1"></i>
                            <h6 class="text-10">Watch Trailer</h6>
                    </div>
                </div>
                <div class="row m-0 py-4">
                    <div class="col-6">
                        <h6 class="text-12 mb-1">Audio Language <span class="text-primary">{{current_movie.language_detail.name}}</span></h6>
                        <h6 class="text-10 text-light">Available in 1 Language</h6>
                    </div>
                    <div class="col-6">
                        <h6 class="text-12 mb-1">Subtitile</h6>
                        <h6 class="text-10 text-light">No subtitile avilable</h6>
                    </div>
                </div>
                <div class="px-3">
                        <h6 class="text-12 mb-1">{{current_movie.description}}</h6>
                        
                </div>
                <div class="my-3">
                    <h6 class="text-10 text-light px-3">Info</h6>
                    <div class="flex-align3" style="overflow: auto;lex-wrap: nowrap;">
                        <div class="p-3" v-for="movie_spec in current_movie.specs">
                            <h6 class="text-12 mb-1" style="white-space:nowrap;">{{movie_spec.label}}</h6>
                            <h6 class="text-14 font-weight-600" style="white-space:nowrap;">{{movie_spec.name}}</h6>
                        </div>
                    </div>
                </div>
                
            </div>
            
            <div class="second-section main-page-sec " v-if="current_movie.id && start">
                    
                <div class="image-grid" v-for="block in blocks" @click="selectContent(pblk)" :class="block.is_edit?'selected_content':''" :id="'blocks_'+block.id" v-show="block.status" v-if="block.movie_type!='None'">
                    <div class="position-relative" >
                        <div class="flex-align" >
                            <h6 class="section-sidehead text-white  pl-2">{{block.value}}</h6>
                            <h6 class="text-more mr-2"> </h6>
                        </div>
                        <b-carousel
                            :id="'movie'+block.id"
                            class="slider-movie  py-0"
                            :interval="4000"
                            controls>
                            <b-carousel-slide v-for="sort_movie in block.movies.datas">
                                <template #img>
                                    <div class="image-row">
                                        
                                        <div class="hover-modal image"v-for="movie in sort_movie" @click="current_movie=movie">
                                            <router-link :to="edit?'':{name:'video',params: { type: slugify(movie.type), category: slugify(movie.category_detail.name), slug: movie.slug }, query: {language:movie.language_detail.name}}">
                                            <div class="position-relative" >
                                                <img :src="api_url+movie.thumbnail">
                                                
                                                <div class="hover-modal-div">
                                                   
                                                   <div class="small-details">
                                                        
                                                       

                                                        <h5 class="text-14 font-weight-600 mt-1 text-dark2">{{movie.name}}</h5>

                                                        <!--<h5 class="text-10 font-weight-600 mt-1 text-dark">{{movie.description}}</h5>-->

                                                        <h5 class="text-10 font-weight-600 mt-1 text-dark"><span class=" pr-2">98% match</span><span class=" pr-2">2022</span>2h 30m</h5>

                                                        <div class="flex-align3 mt-2">
                                                            <button class="rounded py-1 flex-align3 modal-icons" style="border:1px solid gray;background-color:initial;">
                                                                <i class="fa fa-play  text-dark " style="font-size:10px;"></i>
                                                                <h5 class="text-10 text-dark font-weight-600">Watch</h5>
                                                            </button>
                                                            <button class="rounded py-1 flex-align3 modal-icons" style="border:none;background-color:initial;">
                                                                <i class="fa fa-share-alt  text-dark " style="font-size:10px;"></i>
                                                                <h5 class="text-10 text-dark font-weight-600">Share</h5>
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


            <b-modal id="payment" hide-header hide-footer>
              <i class="fa fa-close cursor-pointer" style="position:absolute;top:10px;right:10px;z-index:999;" @click="$bvModal.hide('payment')"></i>
              <div>

                  <div class="plan-sec2 mt-5">
                    <h6 class="text-white font-weight-500 mb-4">Payment Methods</h6>
                    <div class="plan-card2 row mx-0">
                      <div class="col-md-12 plan-card-col">
                        <h6 class="text-22 font-weight-600 my-2 mb-4">Select Payment Method</h6>
                        <button class="btn btn-primary rounded2 py-2 w-100 my-2" v-for="payment_method in payment_methods" @click="setRazorpay()">{{payment_method.name}}</button>
                        <h6 class="text-center text-12 mt-2" @click="$bvModal.hide('payment')">Cancel</h6>


                        <div class="or-sec">Or</div>
                        <div class="d-flex justify-content-center plans-social-icons my-3" style="gap:20px;">
                          <img src="/vid_theme_mobile/images/apple.svg" style="width:40px;">
                          <img src="/vid_theme_mobile/images/google.svg" style="width:40px;">
                          <img src="/vid_theme_mobile/images/fb.svg" style="width:40px;">
                          <img src="/vid_theme_mobile/images/twitter.svg" style="width:40px;">
                        </div>

                      </div>
                     

                    </div>
                  </div>
              </div>
            </b-modal>  

    </div>
          
  </div>
</template>
<script>
import MainHeader from '/src/views/app/vid_theme_mobile/header'
export default {
  props: ['edit','blocks','current_block'],
  metaInfo: {
    title: "Movie"
  },
  components:{
    MainHeader,
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
      headers.append("Authorization", "Token "+this.$root.token);
      fetch(this.api_url+'/content/pages_contents/?theme='+theme_name+'&page=/watching', {
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
  @import '/vid_theme_mobile/style/style.css';
  @import '/vid_theme_mobile/style/style-2.css';

</style>
