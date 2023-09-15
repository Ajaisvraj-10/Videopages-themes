
<template>
  <div class="main-content main-content-2" :class="background_start?'':'ott-scroll'">
    
    <div class="site-wrapper" :class="menu_click?'nav-active':''">   

            <MainHeader :edit="edit" :blocks="blocks" :current_block="current_block"></MainHeader>
           
            <div id="content" class="site-content main-content-sec center-relative  " v-if="start">
                <div class="second-section main-page-sec mt-2">
                    <div class="image-grid" v-for="block in blocks" @click="selectContent(pblk)" :class="block.is_edit?'selected_content':''" :id="'blocks_'+block.id" v-show="block.status" v-if="block.movie_type!='None'">
                        <div class="position-relative" >
                            <div class=" pl-2" >
                                <div class="flex-align3 g1 mb-1">
                                    <h6 class="section-sidehead text-white ">{{block.value}}</h6>
                                    <img src="/all-images/rightarrow.png" style="width:16px;height:16px;">
                                </div>
                                <h6 class="text-light text-11 font-weight-400"> Movies & shows (on videopages)</h6>
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
                                                       <div class="small-details pb-0">
                                                        <h5 class="text-14 font-weight-300 mt-1 text-white mb-0">{{movie.name}}</h5>
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
            <div id="content" class="site-content main-content-sec center-relative" v-else>
                <div class="second-section main-page-sec ">
                    <div class="image-grid">
                        <div class="position-relative" >
                            <div class="" >
                                <h6 class="section-sidehead height3 width5 animated-background ml-2 px-5"></h6>
                                <h6 class="section-sidehead height1 width11 animated-background ml-2 mt-1 mb-2 px-5"></h6>
                            </div>
                            <div class="image-row">
                                <div class="image">
                                    <div class="position-relative" >
                                        <div class="animated-background width-100 height-100" style="aspect-ratio: 2/2.8;">
                                        </div>
                                    </div>
                                    <div class="hover-modal-div">
                                        <div class="small-details">
                                            <h6 class="height2 width7 animated-background"></h6>
                                        </div>
                                    </div>
                                </div> 
                                <div class="image">
                                    <div class="position-relative" >
                                        <div class="animated-background width-100 height-100" style="aspect-ratio: 2/2.8;">
                                        </div>
                                    </div>
                                    <div class="hover-modal-div">
                                        <div class="small-details">
                                            <h6 class="height2 width7 animated-background"></h6>
                                        </div>
                                    </div>
                                </div> 
                                <div class="image">
                                    <div class="position-relative" >
                                        <div class="animated-background width-100 height-100" style="aspect-ratio: 2/2.8;">
                                        </div>
                                    </div>
                                    <div class="hover-modal-div">
                                        <div class="small-details">
                                            <h6 class="height2 width7 animated-background"></h6>
                                        </div>
                                    </div>
                                </div> 
                                <div class="image">
                                    <div class="position-relative" >
                                        <div class="animated-background width-100 height-100" style="aspect-ratio: 2/2.8;">
                                        </div>
                                    </div>
                                    <div class="hover-modal-div">
                                        <div class="small-details">
                                            <h6 class="height2 width7 animated-background"></h6>
                                        </div>
                                    </div>
                                </div> 
                                <div class="image">
                                    <div class="position-relative" >
                                        <div class="animated-background width-100 height-100" style="aspect-ratio: 2/2.8;">
                                        </div>
                                    </div>
                                    <div class="hover-modal-div">
                                        <div class="small-details">
                                            <h6 class="height2 width7 animated-background"></h6>
                                        </div>
                                    </div>
                                </div> 
                                <div class="image">
                                    <div class="position-relative" >
                                        <div class="animated-background width-100 height-100" style="aspect-ratio: 2/2.8;">
                                        </div>
                                    </div>
                                    <div class="hover-modal-div">
                                        <div class="small-details">
                                            <h6 class="height2 width7 animated-background"></h6>
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
                                <h6 class="section-sidehead height3 width7 animated-background ml-2 px-5"></h6>
                                <h6 class="section-sidehead height1 width10 animated-background ml-2 mt-1 mb-2 px-5"></h6>

                            </div>
                            <div class="image-row">
                                <div class="image">
                                    <div class="position-relative" >
                                        <div class="animated-background width-100 height-100" style="aspect-ratio: 2/2.8;">
                                        </div>
                                    </div>
                                    <div class="hover-modal-div">
                                        <div class="small-details">
                                            <h6 class="height2 width7 animated-background"></h6>
                                        </div>
                                    </div>
                                </div> 
                                <div class="image">
                                    <div class="position-relative" >
                                        <div class="animated-background width-100 height-100" style="aspect-ratio: 2/2.8;">
                                        </div>
                                    </div>
                                    <div class="hover-modal-div">
                                        <div class="small-details">
                                            <h6 class="height2 width7 animated-background"></h6>
                                        </div>
                                    </div>
                                </div> 
                                <div class="image">
                                    <div class="position-relative" >
                                        <div class="animated-background width-100 height-100" style="aspect-ratio: 2/2.8;">
                                        </div>
                                    </div>
                                    <div class="hover-modal-div">
                                        <div class="small-details">
                                            <h6 class="height2 width7 animated-background"></h6>
                                        </div>
                                    </div>
                                </div> 
                                <div class="image">
                                    <div class="position-relative" >
                                        <div class="animated-background width-100 height-100" style="aspect-ratio: 2/2.8;">
                                        </div>
                                    </div>
                                    <div class="hover-modal-div">
                                        <div class="small-details">
                                            <h6 class="height2 width7 animated-background"></h6>
                                        </div>
                                    </div>
                                </div> 
                                <div class="image">
                                    <div class="position-relative" >
                                        <div class="animated-background width-100 height-100" style="aspect-ratio: 2/2.8;">
                                        </div>
                                    </div>
                                    <div class="hover-modal-div">
                                        <div class="small-details">
                                            <h6 class="height2 width7 animated-background"></h6>
                                        </div>
                                    </div>
                                </div> 
                                <div class="image">
                                    <div class="position-relative" >
                                        <div class="animated-background width-100 height-100" style="aspect-ratio: 2/2.8;">
                                        </div>
                                    </div>
                                    <div class="hover-modal-div">
                                        <div class="small-details">
                                            <h6 class="height2 width7 animated-background"></h6>
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
                                <h6 class="section-sidehead height1 width11 animated-background ml-2 mt-1 mb-2 px-5"></h6>
                            </div>
                            <div class="image-row">
                                <div class="image">
                                    <div class="position-relative" >
                                        <div class="animated-background width-100 height-100" style="aspect-ratio: 2/2.8;">
                                        </div>
                                    </div>
                                    <div class="hover-modal-div">
                                        <div class="small-details">
                                            <h6 class="height2 width7 animated-background"></h6>
                                        </div>
                                    </div>
                                </div> 
                                <div class="image">
                                    <div class="position-relative" >
                                        <div class="animated-background width-100 height-100" style="aspect-ratio: 2/2.8;">
                                        </div>
                                    </div>
                                    <div class="hover-modal-div">
                                        <div class="small-details">
                                            <h6 class="height2 width7 animated-background"></h6>
                                        </div>
                                    </div>
                                </div> 
                                <div class="image">
                                    <div class="position-relative" >
                                        <div class="animated-background width-100 height-100" style="aspect-ratio: 2/2.8;">
                                        </div>
                                    </div>
                                    <div class="hover-modal-div">
                                        <div class="small-details">
                                            <h6 class="height2 width7 animated-background"></h6>
                                        </div>
                                    </div>
                                </div> 
                                <div class="image">
                                    <div class="position-relative" >
                                        <div class="animated-background width-100 height-100" style="aspect-ratio: 2/2.8;">
                                        </div>
                                    </div>
                                    <div class="hover-modal-div">
                                        <div class="small-details">
                                            <h6 class="height2 width7 animated-background"></h6>
                                        </div>
                                    </div>
                                </div> 
                                <div class="image">
                                    <div class="position-relative" >
                                        <div class="animated-background width-100 height-100" style="aspect-ratio: 2/2.8;">
                                        </div>
                                    </div>
                                    <div class="hover-modal-div">
                                        <div class="small-details">
                                            <h6 class="height2 width7 animated-background"></h6>
                                        </div>
                                    </div>
                                </div> 
                                <div class="image">
                                    <div class="position-relative" >
                                        <div class="animated-background width-100 height-100" style="aspect-ratio: 2/2.8;">
                                        </div>
                                    </div>
                                    <div class="hover-modal-div">
                                        <div class="small-details">
                                            <h6 class="height2 width7 animated-background"></h6>
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
                                <h6 class="section-sidehead height3 width7 animated-background ml-2 px-5"></h6>
                                <h6 class="section-sidehead height1 width10 animated-background ml-2 mt-1 mb-2 px-5"></h6>

                            </div>
                            <div class="image-row">
                                <div class="image">
                                    <div class="position-relative" >
                                        <div class="animated-background width-100 height-100" style="aspect-ratio: 2/2.8;">
                                        </div>
                                    </div>
                                    <div class="hover-modal-div">
                                        <div class="small-details">
                                            <h6 class="height2 width7 animated-background"></h6>
                                        </div>
                                    </div>
                                </div> 
                                <div class="image">
                                    <div class="position-relative" >
                                        <div class="animated-background width-100 height-100" style="aspect-ratio: 2/2.8;">
                                        </div>
                                    </div>
                                    <div class="hover-modal-div">
                                        <div class="small-details">
                                            <h6 class="height2 width7 animated-background"></h6>
                                        </div>
                                    </div>
                                </div> 
                                <div class="image">
                                    <div class="position-relative" >
                                        <div class="animated-background width-100 height-100" style="aspect-ratio: 2/2.8;">
                                        </div>
                                    </div>
                                    <div class="hover-modal-div">
                                        <div class="small-details">
                                            <h6 class="height2 width7 animated-background"></h6>
                                        </div>
                                    </div>
                                </div> 
                                <div class="image">
                                    <div class="position-relative" >
                                        <div class="animated-background width-100 height-100" style="aspect-ratio: 2/2.8;">
                                        </div>
                                    </div>
                                    <div class="hover-modal-div">
                                        <div class="small-details">
                                            <h6 class="height2 width7 animated-background"></h6>
                                        </div>
                                    </div>
                                </div> 
                                <div class="image">
                                    <div class="position-relative" >
                                        <div class="animated-background width-100 height-100" style="aspect-ratio: 2/2.8;">
                                        </div>
                                    </div>
                                    <div class="hover-modal-div">
                                        <div class="small-details">
                                            <h6 class="height2 width7 animated-background"></h6>
                                        </div>
                                    </div>
                                </div> 
                                <div class="image">
                                    <div class="position-relative" >
                                        <div class="animated-background width-100 height-100" style="aspect-ratio: 2/2.8;">
                                        </div>
                                    </div>
                                    <div class="hover-modal-div">
                                        <div class="small-details">
                                            <h6 class="height2 width7 animated-background"></h6>
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
import MainHeader from '/src/views/app/c1/header'
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
         background_start:true,
        lastScrollPosition: 0,
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
        var self = this
        document.getElementsByClassName("main-content-2")[0].addEventListener("scroll", () => {
            self.handleScroll()
        }); 
    },
    handleScroll () {
      const currentScrollPosition = document.getElementsByClassName("main-content-2")[0]
          .scrollTop
      if (currentScrollPosition < 0) {
        return 0
      }
      this.background_start = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
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
  @import '/c1/style/load-style.css';


    .watching-header header.header-holder-2 {
        background: initial;
    }
    .watching-header .mobile-menu h6{
        display:none;
    }

</style>
