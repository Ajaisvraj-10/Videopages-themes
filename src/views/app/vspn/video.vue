
<template>
  <div class="main-content main-content-2" :class="$root.mode=='light'?'mode_change':''">
    
        <div class="site-wrapper2" :class="menu_click?'nav-active':''">

            <MainHeader :edit="edit" :blocks="blocks" :current_block="current_block"></MainHeader>

            <div class="row position-relative" style="margin-top:80px;" v-if="current_movie.id && start">
                <div class="col-md-8">
                     <div class="" v-if="current_movie.message=='play'">
                      <iframe :src="'https://iframe.mediadelivery.net/embed/'+libary_id+'/'+current_movie.video.video_guid+'?autoplay=true'" loading="lazy" style="border: none;height: 400px; width: 100%;" allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowfullscreen="true"></iframe>
                    </div>
                    <div class="cursor-pointer" v-else>
                        <img :src="api_url+current_movie.thumbnail"  class="banner-vid w-100 thumb_img" @click="playMovie()">
                    </div>
                   
                    <div class="overlay-in-video px-lg-5 px-4">
                       
                        <div class="video-controls mb-2">
                            <div class="w-100">
                                <div class="w-50 " style="position: relative;z-index: 999;">
                                    
                                    <h5 class="text-26 my-2 font-weight-600 text-white main-heading-1 ">{{current_movie.name}}</h5>

                                    

                                    
                                    <div class="ratings flex-align3 my-3" style="opacity:.5;">
                                        <div class="flex-align3 mr-2">
                                            <span class="text-10 border font-weight-800 rounded mr-2" style="padding:2px 3px;">IMDB</span>
                                            <h6 class="font-weight-600 text-15 mr-2">{{current_movie.message}}</h6>
                                        </div>
                                        <div class="flex-align3 mr-2">
                                            
                                            <h6 class="font-weight-600 text-15 mr-2 text-nowrap">2 h 38 min</h6>
                                            <h6 class="font-weight-600 text-15 mr-2">2022</h6>
                                        </div>
                                        
                                    </div>

                                    
                                </div>

                                <div class="reverse-680">
                                    <div class='w-50'>
                                        <h4 class="text-14 my-3 font-weight-400 text-white main-heading-2" style="line-height:20px;">{{current_movie.description}}</h4>
                                    </div>
                                    <div class="flex-align3 modal-icons-2 play-buttons">
                                        <div class="share text-32 text-white flex-align3 py-2 px-4 rounded mr-3 button-control" style="min-height:55px;">
                                            <i class="fa fa-share mr-3"></i>
                                            <h4 class="font-weight-500 text-22">Share</h4>
                                        </div>
                                        
                                        <div class="text-32 bg-gray text-white flex-align3 py-2 px-4 rounded mr-3 button-control"  style="min-height:55px;">
                                            <h4 class="font-weight-500 text-19"> Watchlist</h4>
                                        </div>
                                        
                                    </div>
                                   
                                </div>
                                <div class="stars my-3" style="opacity:.6;">
                                    <div class="flex-align3 my-1" v-for="movie_spec in current_movie.specs">
                                        <h6 class="text-16 text-white font-weight-600 pr-2" style="min-width:150px;">{{movie_spec.label}}</h6>

                                        <h6 class="text-16 font-weight-600 pr-2" style="color:#0f79af;min-width:150px;">: {{movie_spec.name}}</h6>
                                    </div>
                                    <div class="flex-align3 mb-3">
                                        <h6 class="text-16 text-white font-weight-600 pr-2" style="min-width:150px;">Genres</h6>

                                        <h6 class="text-16 font-weight-600 pr-2" style="color:#0f79af;min-width:150px;">: {{current_movie.category_detail.name}}</h6>
                                    </div>
                                    <div class="flex-align3 mb-3">
                                        <h6 class="text-16 text-white font-weight-600 pr-2" style="min-width:150px;">Language</h6>

                                        <h6 class="text-16 font-weight-600 pr-2" style="color:#0f79af;min-width:150px;">: {{current_movie.language_detail.name}}</h6>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>
                <div class="col-md-4 min-768">
                    <h6 class="text-14 my-3 font-weight-600">Recommended Movies for you</h6>
                    <div class="row">
                        <div class="col-6" v-for="movie in recommended_movies">
                            <div class="image-row" >
                                            
                                <div class="hover-modal image ml-0" >
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
                        </div>
                    </div>
                </div>
            </div>
            <div class="second-section main-page-sec ">

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
                          <img src="/vspn/images/apple.svg" style="width:40px;">
                          <img src="/vspn/images/google.svg" style="width:40px;">
                          <img src="/vspn/images/fb.svg" style="width:40px;">
                          <img src="/vspn/images/twitter.svg" style="width:40px;">
                        </div>

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
import MainHeader from '/src/views/app/vspn/header'
import MainFooter from '/src/views/app/vspn/footer'
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
      headers.append("Authorization", "Token "+this.$root.token);
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
      headers.append("Authorization", "Token "+this.$root.token);
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
  @import '/vspn/style/style.css';
  @import '/vspn/style/style-2.css';
  .thumb_img:hover{
    opacity:0.5;
  }
</style>
