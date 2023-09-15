
<template>
  <div class="main-content main-content-2" :class="background_start?'':'ott-scroll'">
    
    <div class="site-wrapper2 video-wrapper" :class="menu_click?'nav-active':''">   
            <MainHeader class="watching-header" :edit="edit" :blocks="blocks" :current_block="current_block"></MainHeader>
            <div v-if="start">
                <div v-if="current_movie.id && start">
                    <div class="video-tab" v-if="current_movie.message=='play'">
                        <iframe :src="'https://iframe.mediadelivery.net/embed/'+libary_id+'/'+current_movie.video.video_guid+'?autoplay=true'" loading="lazy" style="border: none;height: 400px; width: 100%;" allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowfullscreen="true"></iframe>
                    </div>
                    <div class="video-tab watching-banner" v-else>
                        <img :src="current_movie.mobile_thumbnail?api_url+current_movie.mobile_thumbnail:api_url+current_movie.thumbnail"  class="w-100 thumb_img">
                        <div class="watching-thumbnail">
                            <img :src="current_movie.mobile_thumbnail?api_url+current_movie.mobile_thumbnail:api_url+current_movie.thumbnail"  class="" @click="playMovie()">
                            <div>
                                <h5 class="text-14 font-weight-500 mb-1">{{current_movie.name}} ({{current_movie.language_detail.name}})</h5>
                                <h6 class="text-12 text-light font-weight-500 mb-1">{{current_movie.type}}</h6>
                                <!-- <h6 class="text-12 text-light font-weight-500 mb-1">{{dateFormate(current_movie.created_on}}</h6> -->
                                <h6 class="text-12 text-light font-weight-500 mb-1">2h 51m 10s</h6>
                                <h6 class="text-12 text-light font-weight-500 mb-1">{{current_movie.category_detail.name}}</h6>
                                <span class="text-12 text-light font-weight-500 mb-1">
                                    8.3 <span class="imdb ml-2">IMDB</span>
                                </span>
                                <div class="rate">
                                    <input type="radio" id="star5" name="rate" value="5" />
                                    <label for="star5" title="text">5 stars</label>
                                    <input type="radio" id="star4" name="rate" value="4" />
                                    <label for="star4" title="text">4 stars</label>
                                    <input type="radio" id="star3" name="rate" value="3" />
                                    <label for="star3" title="text">3 stars</label>
                                    <input type="radio" id="star2" name="rate" value="2" />
                                    <label for="star2" title="text">2 stars</label>
                                    <input type="radio" id="star1" name="rate" value="1" />
                                    <label for="star1" title="text">1 star</label>
                                  </div>

                            </div>

                        </div>
                    </div>
                    <div class="p-3 flex-align" style="gap:15px;">
                        <div class="flex-align3" style="gap:10px;">
                            <div class="text-center flex-align3 btn-yellow g2 px-5"  @click="playMovie()">
                                <i class="fa fa-play pb-1"></i>
                                Play
                            </div>
                        </div>
                        <div class="text-center flex-align g4">
                            <i class="fa fa-bookmark pb-1" style="font-size:22px;"></i>
                            <i class="fa fa-share pb-1" style="font-size:20px;"></i>
                            <i class="fa fa-info-circle pb-1" style="font-size:22px;"></i>

                        </div>
                    </div>
                    <div class="px-3">
                        <h6 class="text-13 mb-3">{{current_movie.description}}</h6>
                    </div>
                    <div class="row m-0 py-1">
                        <div class="col-4">
                            <h6 class="text-12 mb-1 text-light font-weight-500" style="text-transform: uppercase;">Director</h6>
                        </div>
                        <div class="col-8">
                            <h6 class="text-12 mb-1">Tony tilse, Rowan woods</h6>
                        </div>
                    </div>
                    <div class="row m-0 py-1">
                        <div class="col-4">
                            <h6 class="text-12 mb-1 text-light font-weight-500" style="text-transform: uppercase;">writer</h6>
                        </div>
                        <div class="col-8">
                            <h6 class="text-12 mb-1">Tony tilse, Rowan woods</h6>
                        </div>
                    </div>
                    <div class="row m-0 py-1">
                        <div class="col-4">
                            <h6 class="text-12 mb-1 text-light font-weight-500" style="text-transform: uppercase;">studio</h6>
                        </div>
                        <div class="col-8">
                            <h6 class="text-12 mb-1">Austrlian studio</h6>
                        </div>
                    </div>
                    <div class="row m-0 py-1">
                        <div class="col-4">
                            <h6 class="text-12 mb-1 text-light font-weight-500" style="text-transform: uppercase;">Genre</h6>
                        </div>
                        <div class="col-8">
                            <h6 class="text-12 mb-1">Adventure, Drama</h6>
                        </div>
                    </div>
                </div>

                
                <div class="second-section main-page-sec mt-4" v-if="current_movie.id && start">
                        
                    <div class="image-grid" v-for="block in blocks" @click="selectContent(pblk)" :class="block.is_edit?'selected_content':''" :id="'blocks_'+block.id" v-show="block.status" v-if="block.movie_type!='None'">
                        <div class="position-relative" >
                            <div class=" pl-2" >
                                 <div class="flex-align3 g1 mb-1">
                                    <h6 class="section-sidehead text-white ">{{block.value}}</h6>
                                <!--<img src="/all-images/rightarrow.png" style="width:16px;height:16px;">-->
                                </div>
                                <!--<h6 class="text-light text-11 font-weight-400"> Movies & shows (on videopages)</h6>-->
                            </div>
                            <div
                                :id="'movie'+block.id"
                                class="slider-movie  py-0"
                                :interval="4000"
                                controls>
                                <div v-for="sort_movie in block.movies.datas">
                                    <div>
                                        <div class="image-row">
                                            <div class="hover-modal image" v-for="movie in sort_movie" @click="current_movie=movie">
                                                <router-link :to="edit?'':{name:'video',params: { type: slugify(movie.type), category: slugify(movie.category_detail.name), slug: movie.slug }, query: {language:movie.language_detail.name}}">
                                                <div class="position-relative" >
                                                    <img :src="api_url+movie.thumbnail">
                                                    
                                                    <div class="hover-modal-div">
                                                       
                                                       <div class="small-details">
                                                            <h5 class="text-14 font-weight-300 mt-1 text-white">{{movie.name}}</h5>
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
                </div>
            </div>
            <div v-else>
                <div class="video-tab watching-banner">
                        <div class="animated-background" style="height:45vh;width:100%;"></div>
                        <div class="watching-thumbnail">
                            <div style="width: 150px;aspect-ratio: 1/1.4;background: gray;"></div>
                            <div>
                                <h6 class="height2 width8 animated-background mb-1"></h6>
                                <h6 class="height1 width10 animated-background mb-1"></h6>
                                <h6 class="height1 width7 animated-background mb-1"></h6>
                                <h6 class="height1 width11 animated-background mb-1"></h6>
                                <h6 class="height1 width11 animated-background mb-1"></h6>
                                <div class="d-flex g2">
                                    <h6 class="height3 width3 animated-background mb-1"></h6>
                                    <h6 class="height3 width3 animated-background mb-1"></h6>
                                    <h6 class="height3 width3 animated-background mb-1"></h6>
                                    <h6 class="height3 width3 animated-background mb-1"></h6>
                                    <h6 class="height3 width3 animated-background mb-1"></h6>
                                </div>
                            </div>
                        </div>
                </div>
                <div class="p-3 flex-align" style="gap:15px;">
                    <div class="flex-align3" style="gap:10px;">
                        <h6 class="height4 width8 animated-background mb-1"></h6>
                    </div>
                    <div class="d-flex g2">
                        <h6 class="height3 width3 animated-background mb-1"></h6>
                        <h6 class="height3 width3 animated-background mb-1"></h6>
                        <h6 class="height3 width3 animated-background mb-1"></h6>
                    </div>
                </div>
                <div class="row m-0 py-1">
                        <div class="col-4">
                            <h6 class="height2 width6 animated-background"></h6>
                        </div>
                        <div class="col-8">
                            <h6 class="height2 width8 animated-background"></h6>
                        </div>
                </div>
                <div class="row m-0 py-1">
                        <div class="col-4">
                            <h6 class="height2 width7 animated-background"></h6>
                        </div>
                        <div class="col-8">
                            <h6 class="height2 width9 animated-background"></h6>
                        </div>
                </div>
                <div class="row m-0 py-1">
                        <div class="col-4">
                            <h6 class="height2 width9 animated-background"></h6>
                        </div>
                        <div class="col-8">
                            <h6 class="height2 width10 animated-background"></h6>
                        </div>
                </div>
                <div class="row m-0 py-1">
                        <div class="col-4">
                            <h6 class="height2 width8 animated-background"></h6>
                        </div>
                        <div class="col-8">
                            <h6 class="height2 width8 animated-background"></h6>
                        </div>
                </div>
                <div class="row m-0 py-1">
                        <div class="col-4">
                            <h6 class="height2 width6 animated-background"></h6>
                        </div>
                        <div class="col-8">
                            <h6 class="height2 width7 animated-background"></h6>
                        </div>
                </div>
                <div class="second-section main-page-sec ">
                    <div class="image-grid">
                        <div class="position-relative" >
                            <div class="" >
                                <h6 class="section-sidehead height3 width5 animated-background ml-2 px-5"></h6>
                            </div>
                            <div class="image-row">
                                <div class="image">
                                    <div class="position-relative" >
                                        <div class="animated-background width-100 height-100" style="aspect-ratio: 2/2.8;">
                                        </div>
                                    </div>
                                </div> 
                                <div class="image">
                                    <div class="position-relative" >
                                        <div class="animated-background width-100 height-100" style="aspect-ratio: 2/2.8;">
                                        </div>
                                    </div>
                                </div> 
                                <div class="image">
                                    <div class="position-relative" >
                                        <div class="animated-background width-100 height-100" style="aspect-ratio: 2/2.8;">
                                        </div>
                                    </div>
                                </div> 
                                <div class="image">
                                    <div class="position-relative" >
                                        <div class="animated-background width-100 height-100" style="aspect-ratio: 2/2.8;">
                                        </div>
                                    </div>
                                </div> 
                            </div>    
                        </div>
                    </div>
                </div>
                <div class="second-section main-page-sec ">
                    <div class="image-grid">
                        <div class="position-relative" >
                            <div class="" >
                                <h6 class="section-sidehead height3 width5 animated-background ml-2 px-5"></h6>
                            </div>
                            <div class="image-row">
                                <div class="image">
                                    <div class="position-relative" >
                                        <div class="animated-background width-100 height-100" style="aspect-ratio: 2/2.8;">
                                        </div>
                                    </div>
                                </div> 
                                <div class="image">
                                    <div class="position-relative" >
                                        <div class="animated-background width-100 height-100" style="aspect-ratio: 2/2.8;">
                                        </div>
                                    </div>
                                </div> 
                                <div class="image">
                                    <div class="position-relative" >
                                        <div class="animated-background width-100 height-100" style="aspect-ratio: 2/2.8;">
                                        </div>
                                    </div>
                                </div> 
                                <div class="image">
                                    <div class="position-relative" >
                                        <div class="animated-background width-100 height-100" style="aspect-ratio: 2/2.8;">
                                        </div>
                                    </div>
                                </div> 
                            </div>    
                        </div>
                    </div>
                </div>
            </div>


            <b-modal id="payment" hide-header hide-footer>
              <img src="/all-images/close.png" class="cursor-pointer" style="position:absolute;top:20px;right:20px;z-index:999;width:15px;height:15px;" @click="$bvModal.hide('payment')">
              <div>
                  <div class="plan-sec2 p-2" style="max-height: 66vh;overflow: auto;">
                    <h6 class="text-white font-weight-500 mb-4 text-20">Video Rent </h6>
                    <div class="plan-card2 row mx-0" v-if="crnt_tab=='tab1'">
                        <div class="watching-thumbnail position-relative px-0 pb-3 pt-0">
                            <img :src="current_movie.mobile_thumbnail?api_url+current_movie.mobile_thumbnail:api_url+current_movie.thumbnail"  class=""  style="width: 100px;">
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
                        <div class="mt-3 border-top pt-4">
                            <h6 class="text-14">Rent movie</h6>
                            <h6 class="text-12 text-light">Start within 30 days, finish within 48 hours after first playback</h6>
                            <div class="flex-align g2 mb-3">
                                <h6 class="mb-0 text-14 ">High Definition</h6>
                                <h6 class="mb-0 btn py-1 px-2 btn-primary" style="font-size: 12px;" @click="crnt_tab='tab2'">$ 150.00</h6>
                            </div>
                        </div>
                        <div class="mt-3 border-top pt-4 w-100">
                            <h6 class="text-14">Buy movie</h6>
                            <div class="flex-align g2 mb-3">
                                <h6 class="mb-0 text-14 ">Ultray High Definition</h6>
                                <h6 class="mb-0 btn py-1 px-2 btn-primary" style="font-size: 12px;" @click="crnt_tab='tab2'">$ 750.00</h6>
                            </div>
                            <div class="flex-align g2 mb-3">
                                <h6 class="mb-0 text-14 ">Standard Definition</h6>
                                <h6 class="mb-0 btn py-1 px-2 btn-primary" style="font-size: 12px;" @click="crnt_tab='tab2'">$ 600.00</h6>
                            </div>
                        </div>
                      
                    </div>
                    <div class="plan-card2 row mx-0" v-if="crnt_tab=='tab2'">
                      <div class="col-md-12 p-0 plan-card-col">
                        <div class="flex-align mb-4">
                            <h6 class="text-16 font-weight-500  mb-0">Select Payment Method</h6>
                            <h6 class="mb-0 text-12 text-info" @click="crnt_tab='tab1'">Back</h6>
                        </div>
                        <button class="btn btn-primary-outline rounded2 py-2 w-100 my-2" v-for="payment_method in payment_methods" @click="setRazorpay()">{{payment_method.name}}</button>
                      </div>
                    </div>
                  </div>
              </div>
            </b-modal>  

    </div>
          
  </div>
</template>
<script>
import MainHeader from '/src/views/app/c1/header'
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
        background_start:true,
        lastScrollPosition: 0,
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
    var self = this
    document.getElementsByClassName("main-content-2")[0].addEventListener("scroll", () => {
        self.handleScroll()
    }); 
    this.getMovie(this.$route.params.slug)
  },
  watch: {
    '$route': 'changeRoute',
  },
  methods: {
    handleScroll () {
      const currentScrollPosition = document.getElementsByClassName("main-content-2")[0]
          .scrollTop
      if (currentScrollPosition < 0) {
        return 0
      }
      this.background_start = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
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
          this.current_page = jsonData
          this.blocks = jsonData.blocks
            for(var i=0;i<this.blocks.length;i++){
              if(this.blocks[i].movie_type!='None'){
                this.blocks[i].movies = this.paginationMovies(this.blocks[i].movies,this.blocks[i].movies.length)
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
  @import '/c1/style/style.css';
  @import '/c1/style/style-2.css';
   


   .watching-banner{
        height:45vh;
        position:relative;

   }
   .watching-banner:before{
        content:'';
        position:absolute;
        left:0;
        top:0;
        width:100%;
        height:100%;
        background:linear-gradient(0deg, #24272c, #24272cbd, #24272c9e, #0000001f);
   }
    .watching-banner .thumb_img{
        height: 100%;
        object-fit: cover;
   }

   .watching-banner{
    position: relative;
}
.watching-thumbnail{
    position: absolute;
    bottom: 0;
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 20px;
     width: 100%;
     align-items: flex-end;
}

.watching-thumbnail img{
    width: 150px;
    aspect-ratio: 1/1.4;
    object-fit: contain;
}
.imdb{
    padding: 2px 4px;
    background: hsl(45deg 100% 51%);
    color: black;
    font-weight: 800;
    font-size: 12px;
    border-radius:4px;
}
.btn-yellow{
    padding: 4px 8px;
    background: hsl(45deg 100% 51%);
    font-weight: 800;
    font-size: 16px;
    border-radius:6px;
    color:#232323;
}
rate {
    float: left;
    height: 46px;
    padding: 0 10px;
}
.rate:not(:checked) > input {
    position:absolute;
    top:-9999px;
}
.rate:not(:checked) > label {
    float:right;
    width:1em;
    overflow:hidden;
    white-space:nowrap;
    cursor:pointer;
    font-size:30px;
    color:#9b9b9b;
}
.rate:not(:checked) > label:before {
    content: '★ ';
}
.rate > input:checked ~ label {
    color: #ffc700;    
}
.rate:not(:checked) > label:hover,
.rate:not(:checked) > label:hover ~ label {
    color: #deb217;  
}
.rate > input:checked + label:hover,
.rate > input:checked + label:hover ~ label,
.rate > input:checked ~ label:hover,
.rate > input:checked ~ label:hover ~ label,
.rate > label:hover ~ input:checked ~ label {
    color: #c59b08;
}

</style>
