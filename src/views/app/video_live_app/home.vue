
<template>
  <div class="main-content main-content-2" :class="$root.mode=='light'?'mode_change':''">
    
    <div class="site-wrapper" :class="menu_click?'nav-active':''">   

            <MainHeader :edit="edit" :blocks="blocks" :current_block="current_block"></MainHeader>
           
            <div id="content" class="site-content main-content-sec center-relative  " v-if="start">
                    
                    <div class="banners ">
                       
                        <b-carousel
                          id="carousel-1"
                          :interval="3000"
                          
                          
                         
                          img-width="1024"
                          img-height="480"
                         
                         
                        >

                            <b-carousel-slide v-for="banner in banners" :img-src="banner.image">

                                <div @click="banner.link?$router.push(banner.link):''" style="position:absolute;bottom:-20px;left:-20%;z-index:9999;width:140%;height:140vh" :style="banner.link?'cursor:pointer':''">

                                </div>
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
                            <div
                                :id="'movie'+block.id"
                                class="slider-movie  py-0"
                                :interval="4000"
                                controls>
                                <div v-for="sort_movie in block.movies.datas">
                                    <div >
                                        <div class="image-row">
                                            <div class="hover-modal image" v-for="movie in sort_movie" @click="current_movie=movie">
                                                <router-link :to="edit?'':{name:'video',params: { type: slugify(movie.type), category: slugify(movie.category_detail.name), slug: movie.slug }, query: {language:movie.language_detail.name}}">
                                                <div class="position-relative" >
                                                    <img :src="api_url+movie.thumbnail">
                                                    <div class="hover-modal-div">
                                                       <div class="small-details">
                                                        <h5 class="text-14 font-weight-400 mt-1 text-light">{{movie.name}}</h5>
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
           
    </div>
  </div>
</template>
<script>
import MainHeader from '/src/views/app/video_live_app/header'
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
  @import '/video_live_app/style/style.css';
  @import '/video_live_app/style/style-2.css';



</style>
