
<template>
  <div class="main-content main-content-2" :class="$root.mode=='light'?'mode_change':''">
    
    <div class="site-wrapper" :class="menu_click?'nav-active':''">

            <MainHeader :edit="edit" :blocks="blocks" :current_block="current_block"></MainHeader>
            
           
            <div id="content" class="site-content main-content-sec center-relative  " v-if="start">
                
                <div class="second-section main-page-sec ">
                    
                    <div class="image-grid" v-for="block in blocks" @click="selectContent(pblk)" :class="block.is_edit?'selected_content':''" :id="'blocks_'+block.id" v-show="block.status" v-if="block.movie_type!='None'">
                        <div class="position-relative" >
                            <div class="flex-align" >
                                <h6 class="section-sidehead text-white  pl-2">{{block.value}}</h6>
                                <h6 class="text-more mr-2">Show All </h6>
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
                                                    <h6 class="prime">
                                                        <i class="fa fa-play"></i>
                                                    </h6>
                                                    <div class="hover-modal-div">
                                                       <div class="small-details">
                                                            <h5 class="font-weight-500 mb-2 text-white2" style="font-size:14px;">{{movie.name}}</h5>

                                                            <!--<h5 class="text-11 font-weight-400 text-light">{{movie.description}}</h5>-->

                                                                
                                                            <h5 class="my-1 text-light font-weight-400" style="font-size:11px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">Watch {{movie.name}}</h5>
                                                                
                                                            <h5 class=" font-weight-400 text-light" style="font-size:11px;"><span class=" pr-2">98% match</span><span class=" pr-2">2022</span>2h 30m</h5>

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
import MainHeader from '/src/views/app/videofy/header'
import MainFooter from '/src/views/app/videofy/footer'
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
  @import '/videofy/style/style.css';
  @import '/videofy/style/style-2.css';



</style>
