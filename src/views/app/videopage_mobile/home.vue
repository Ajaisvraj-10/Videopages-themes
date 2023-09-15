
<template>
  <div class="main-content main-content-2" :class="mode=='light'?'mode_change':''">
    
    <div class="site-wrapper" :class="menu_click?'nav-active':''">   

            <MainHeader :edit="edit" :blocks="blocks" :current_block="current_block"></MainHeader>
           
            <div id="content" class="site-content main-content-sec center-relative  " v-if="start">
                    
                    <div class="banners ">
                       
                        <b-carousel
                          id="carousel-1"
                          :interval="2000"
                          
                          indicators
                          background="#000"
                          img-width="1024"
                          img-height="480"
                         
                         
                        >

                            <!--<b-carousel-slide v-for="banner in banners" :img-src="banner.image">

                                <div @click="banner.link?$router.push(banner.link):''" style="position:absolute;bottom:-20px;left:-20%;z-index:9999;width:140%;height:140vh" :style="banner.link?'cursor:pointer':''">

                                </div>
                                
                            </b-carousel-slide>-->


                            <b-carousel-slide img-src="https://static.vodafoneplay.in/99762/375x500_AajTak_99762_44ad621d-1782-4b75-8417-f81ac759a074.jpg" >
                              
                            </b-carousel-slide>

                            <b-carousel-slide img-src="https://img2.vodafoneplay.in/632449/375x500_MukhbirTheStoryofaSpy_632449_dc9a7ccb-3d64-4a72-a7fb-be1a473a90a7.jpg" >
                              
                            </b-carousel-slide>
                            <b-carousel-slide img-src="https://img2.vodafoneplay.in/631904/375x500_Tadka_631904_276d8695-b741-4069-9a63-6d9481a88efa.jpg" >
                              
                            </b-carousel-slide>
                            <b-carousel-slide img-src="https://img2.vodafoneplay.in/633104/375x500_CountryMafia_633104_15ddb753-6e19-4aa9-be4b-2168ae03445f.jpg" >
                              
                            </b-carousel-slide>
                        
                          
                        </b-carousel>


                    </div>
                   

                <div class="second-section main-page-sec mt-4">
                    
                    
               
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
                   

  
            </div>
           
    </div>
  </div>
</template>
<script>
import MainHeader from '/src/views/app/videopage_mobile/header'
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
    this.getBanners()
  },
  methods: {
    getBanners() {
      var headers = new Headers();
      headers.append("Authorization", "Token "+this.$root.token);
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
      headers.append("Authorization", "Token "+this.$root.token);
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
  @import '/videopage_mobile/style/style.css';
  @import '/videopage_mobile/style/style-2.css';



</style>
