
<template>
  <div class="main-content main-content-2" :class="$root.mode=='light'?'mode_change':''">
    
    <div class="site-wrapper" :class="menu_click?'nav-active':''">

            <MainHeader :edit="edit" :blocks="blocks" :current_block="current_block"></MainHeader>
            
           
            <div id="content" class="site-content main-content-sec center-relative"  v-if="start">
                  
                 <div class="banners ">
                    <b-carousel
                          id="carousel-1"
                          :interval="3000"
                          controls
                          indicators
                          background="#0a060d"
                          img-width="1024"
                          img-height="480"
                        >
                            <b-carousel-slide v-for="banner in banners" :img-src="banner.image">
                                <div @click="banner.link?$router.push(banner.link):''" style="position:absolute;bottom:0;left:-20%;z-index:9999;width:140%;height:140vh" :style="banner.link?'cursor:pointer':''">

                                </div>
                            </b-carousel-slide>
                    </b-carousel>
                </div>
                   
                <div class="second-section main-page-sec ">
                    
                    <div class="image-grid" v-for="block in blocks" @click="selectContent(block)" :class="block.is_edit?'selected_content':''" :id="'blocks_'+block.id" v-show="block.status" v-if="block.movie_type!='None'">
                        <div class="position-relative" >
                            <div class="flex-align mb-3" >
                                <h6 class="section-sidehead text-white  pl-2">{{block.value}}</h6>
                                <h6 class="text-more mr-3" @click="$router.push('/filter/block/'+slugify(block.value)+'?block='+block.id)">View More</h6>
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
             
            </div>
            <div id="content" class="site-content main-content-sec center-relative" v-else>
                <div class="banners animated-background w-100" style="aspect-ratio: 2.7/1;background:#160e1d;">
                </div>
                <div class="second-section main-page-sec ">
                    <div class="image-grid">
                        <div class="position-relative" >
                            <div class="flex-align" >
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
                            <div class="flex-align" >
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
            
            <MainFooter :edit="edit" :blocks="blocks" :current_block="current_block"></MainFooter>
    </div>
  </div>
</template>
<script>
import MainHeader from '/src/views/app/vid_theme/header'
import MainFooter from '/src/views/app/vid_theme/footer'
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
        current_movie:{language_detail:{},category_detail:{},movie_spec:[]},

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
  @import '/vid_theme/style/style.css';
  @import '/vid_theme/style/style-2.css';
  @import '/vid_theme/style/load-style.css';



</style>
