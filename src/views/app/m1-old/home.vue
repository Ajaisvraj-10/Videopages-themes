
<template>
  <div class="main-content main-content-2">
    
    <div class="site-wrapper">

            <MainHeader :edit="edit" :blocks="blocks" :current_block="current_block"></MainHeader>
            <div id="content" class="site-content main-content-sec center-relative" v-if="start">
                <div class="second-section main-page-sec ">
                    <div class="banners ">
                        <b-carousel
                          id="carousel-1"
                          v-model="slide"
                          :interval="3000"
                          indicators 
                          > 
                            <b-carousel-slide class="bg_tv" img-src="/m1/images/stream_bg1.png">
                                <div class="banner-content">
                                    <h1>Shadow Hunter</h1>
                                    <h6>A relentless detective unravels a web of secrets</h6>
                                    <button class="watch-play btn btn-light">
                                        <img src="/m1/images/play2.png">
                                        Watch now
                                    </button>
                                </div>
                            </b-carousel-slide>
                             <b-carousel-slide class="bg_tv" img-src="/m1/images/stream_bg1.png">
                                <div class="banner-content">
                                    <h1>Shadow Hunter</h1>
                                    <h6>A relentless detective unravels a web of secrets</h6>
                                    <button class="watch-play btn btn-light">
                                        <img src="/m1/images/play2.png">
                                        Watch now
                                    </button>
                                </div>
                            </b-carousel-slide>
                             <b-carousel-slide class="bg_tv" img-src="/m1/images/stream_bg1.png">
                                <div class="banner-content">
                                    <h1>Shadow Hunter</h1>
                                    <h6>A relentless detective unravels a web of secrets</h6>
                                    <button class="watch-play btn btn-light">
                                        <img src="/m1/images/play2.png">
                                        Watch now
                                    </button>
                                </div>
                            </b-carousel-slide>
                             <b-carousel-slide class="bg_tv" img-src="/m1/images/stream_bg1.png">
                                <div class="banner-content">
                                    <h1>Shadow Hunter</h1>
                                    <h6>A relentless detective unravels a web of secrets</h6>
                                    <button class="watch-play btn btn-light">
                                        <img src="/m1/images/play2.png">
                                        Watch now
                                    </button>
                                </div>
                            </b-carousel-slide>
                             <b-carousel-slide class="bg_tv" img-src="/m1/images/stream_bg1.png">
                                <div class="banner-content">
                                    <h1>Shadow Hunter</h1>
                                    <h6>A relentless detective unravels a web of secrets</h6>
                                    <button class="watch-play btn btn-light">
                                        <img src="/m1/images/play2.png">
                                        Watch now
                                    </button>
                                </div>
                            </b-carousel-slide>
                        </b-carousel>
                    </div>
                    
                    <div class="image-grid mt-5" v-for="block in blocks" @click="selectContent(block)" :class="block.is_edit?'selected_content':''" :id="'blocks_'+block.id" v-show="block.status" v-if="block.movie_type!='None'">
                        <div class="position-relative" >
                            <div class="flex-align mb-3" >
                                <h6 class="section-sidehead text-white  pl-2">Trending</h6>
                                <!--<h6 class="text-more mr-3" @click="$router.push('/filter/block/'+slugify(block.value)+'?block='+block.id)">View More</h6>-->
                            </div>
                            <b-carousel
                                :id="'movie'+block.id"
                                class="slider-movie  py-0"
                                controls>
                                <b-carousel-slide v-for="sort_movie in paginationMovies(block.movies,6).datas">
                                    <template #img>
                                        <div class="image-row">
                                            
                                            <div class="hover-modal image" v-for="movie in sort_movie" @click="current_movie=movie">
                                                <router-link :to="edit?'':{name:'video',params: { type: slugify(movie.type), category: slugify(movie.category_detail.name), slug: movie.slug }, query: {language:movie.language_detail.name}}">
                                                    <div class="position-relative" >
                                                        <img :src="api_url+movie.thumbnail">
                                                        
                                                        <div class="hover-modal-div">
                                                            <div class="small-details">
                                                                    <h5 class="text-14 font-weight-600 mt-1 text-white">{{movie.name}}</h5>
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

                    <div class="image-grid mt-4" v-for="block in blocks" @click="selectContent(block)" :class="block.is_edit?'selected_content':''" :id="'v_blocks_'+block.id" v-show="block.status" v-if="block.movie_type!='None'">
                        <div class="position-relative" >
                            <div class="flex-align mb-3" >
                                <h6 class="section-sidehead text-white  pl-2">Top 10 in the US</h6>
                                <!--<h6 class="text-more mr-3" @click="$router.push('/filter/block/'+slugify(block.value)+'?block='+block.id)">View More</h6>-->
                            </div>
                            <b-carousel
                                :id="'v_movie'+block.id"
                                class="slider-movie  py-0"
                                controls>
                                <b-carousel-slide v-for="sort_movie in paginationMovies(block.movies,3).datas">
                                    <template #img>
                                        <div class="image-row top-list-img">
                                            <div class="hover-modal image" v-for="movie in sort_movie" @click="current_movie=movie">
                                                <router-link :to="edit?'':{name:'video',params: { type: slugify(movie.type), category: slugify(movie.category_detail.name), slug: movie.slug }, query: {language:movie.language_detail.name}}">
                                                    <div class="position-relative" >
                                                        <div class="top-banner-text">
                                                            <img :src="api_url+movie.thumbnail">
                                                            <h5>#1</h5>
                                                        </div>
                                                        
                                                        <div class="hover-modal-div">
                                                            <div class="small-details">
                                                                <h5 class="text-14 font-weight-600 mt-1 text-white">{{movie.name}}</h5>
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
             
            </div>
            <div class="keyboard-layout" v-if="show_keybord">
                <div class="keyboard">
                    <div class="section-a">
                        <div class="p-3" style="display: flex; align-items: center;gap: 15px;justify-content: center;background: #191C22;font-weight:500;color:white;font-size:22px;">
                            Press and hold <img src="/m1/images/mic.png" style="width:45px;height:45px;"> to speak
                        </div>
                        <div class="p-3" style="background: #1c1e20;box-shadow: 0px -12px 36px 0px #0000004D;">
                            <div>
                                <div class="key letter"> <span>1</span>Q </div>
                                <div class="key letter"> <span>2</span>W </div>
                                <div class="key letter"> <span>3</span>E </div>
                                <div class="key letter"> <span>4</span>R </div>
                                <div class="key letter"> <span>5</span>T </div>
                                <div class="key letter"> <span>6</span>Y </div>
                                <div class="key letter"> <span>7</span>U </div>
                                <div class="key letter"> <span>8</span>I </div>
                                <div class="key letter"> <span>9</span>O </div>
                                <div class="key letter"> <span>0</span>P </div>
                            </div>
                            <div>
                                <div class="key letter"> A </div>
                                <div class="key letter"> S </div>
                                <div class="key letter"> D </div>
                                <div class="key letter"> F </div>
                                <div class="key letter"> G </div>
                                <div class="key letter"> H </div>
                                <div class="key letter"> J </div>
                                <div class="key letter"> K </div>
                                <div class="key letter"> L </div>
                                <div class="key letter">.</div>
                            </div>
                            <div>
                                <div class="key letter"> <img src="/m1/images/keyboard-top.png" style="width:25px;height:25px; "> </div>
                                <div class="key letter"> Z </div>
                                <div class="key letter"> X </div>
                                <div class="key letter"> C </div>
                                <div class="key letter"> V </div>
                                <div class="key letter"> B </div>
                                <div class="key letter"> N </div>
                                <div class="key letter"> M </div>
                                <div class="key letter">, </div>
                                <div class="key letter"> <img src="/m1/images/backspace.png" style="width:25px;height:25px; "> </div>
                            </div>
                            <div>
                                <div class="key letter" style="font-size:18px;">123?</div>
                                <div class="key letter">
                                    <img src="/m1/images/keyboard-left.png" style="width:18px;height:18px;object-fit:contain; ">
                                </div>
                                <div class="key letter">
                                    <img src="/m1/images/keyboard-right.png" style="width:35px;height:35px;object-fit:contain; ">
                                </div>
                                <div class="key space">
                                    <img src="/m1/images/space.png" style="width:25px;height:25px;object-fit:contain; ">
                                </div>
                                <div class="key letter">-</div>
                                <div class="key letter">_</div>
                                <div class="key search-space" @click="show_keybord=false">
                                    <img src="/m1/images/keyboard-search.png" style="width:20px;height:20px;object-fit:contain; ">
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>  
            </div>
            
            <!--<MainFooter :edit="edit" :blocks="blocks" :current_block="current_block"></MainFooter>-->
    </div>
  </div>
</template>
<script>
import MainHeader from '/src/views/app/m1/header'
import MainFooter from '/src/views/app/m1/footer'
export default {
  props: ['edit','blocks','current_block'],
  metaInfo: {
    title: "Main"
  },
  components:{
    MainHeader,
    MainFooter,
  },
  data() {
    return {
        start:false,
        current_page:{},
        banners:[],
        show_keybord: true,
        current_movie:{language_detail:{},category_detail:{},movie_spec:[]},
        slide:0,
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
        if(this.edit){
            this.start = true
        }else{
            this.edit=false
            this.blocks = [{},{},{}]
            this.getPage()
        }
        this.getBanners()
    },
    getBanners() {
      var headers = new Headers();
      headers.append("Authorization", "Bearer "+(this.$root.token?this.$root.token:this.$root.admin_token));
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
      headers.append("Authorization", "Bearer "+(this.$root.token?this.$root.token:this.$root.admin_token));
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
  @import '/m1/style/style-tv.css';

  @import '/m1/style/load-style.css';



</style>
