
<template>
  <div class="main-content main-content-2" :class="mode=='light'?'mode_change':''">
    
    <div class="site-wrapper" :class="menu_click?'nav-active':''">   

            <MainHeader :edit="edit" :blocks="blocks" :current_block="current_block"></MainHeader>
           
            <div id="content" class="site-content main-content-sec center-relative  " v-if="start">
                    
                <div class="banner-2">
                    <div class="slide-arrow">
                        <div class="slide-arrow-left" @click="slideBanner('previous')">
                            <h6><i class="fa fa-angle-left"></i></h6>

                        </div>
                        <div class="slide-arrow-right" @click="slideBanner('next')">
                            <h6><i class="fa fa-angle-right"></i></h6>
                        </div>
                    </div>
                    
                    <div class="banner-2-slids" :style="'left:'+banner_slide.left+'%'">
                        <div class="banner-item" v-if="banners.length>0">
                            <img :src="banners[banners.length-1].image">
                        </div>
                        <div class="banner-item" v-for="(banner,key) in banners" @click="banner.link?$router.push(banner.link):''">
                            <img :src="banner.image">
                        </div>
                        <div class="banner-item" v-if="banners.length>0">
                            <img :src="banners[0].image">
                        </div>
                    </div>
                    <div class="slide-dot">
                        <div class="dot" v-for="(banner,key) in banners" :class="(key+1)==banner_slide.current?'dot-active':''" @click="clcikBannerDott(key+1)"></div>
                    </div>


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
                   
                </div>
                   

  
            </div>
           
    </div>
  </div>
</template>
<script>
import MainHeader from '/src/views/app/videot_mobile/header'
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

        banner_slide: {left:-85,banners:0,current:1},
        
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
    autoSlider(time=1500){
        var self = this
        setTimeout(function(){
            self.slideBanner('next')
            self.autoSlider(100)
        },time)
    },
    slideBanner(move){
        if(move=='next'){
            if(this.banner_slide.current>=this.banner_slide.banners){
                this.banner_slide.left= -85
                this.banner_slide.current = 1
            }else{
                this.banner_slide.left=this.banner_slide.left-90
                this.banner_slide.current++
            }
        }else{
            if(this.banner_slide.current<=1){
                this.banner_slide.left= (this.banner_slide.banners*-90)+63
                this.banner_slide.current = this.banner_slide.banners
            }else{
                this.banner_slide.left=this.banner_slide.left+90
                this.banner_slide.current--
            }
        }
    },
    clcikBannerDott(position){
        this.banner_slide.left= (position*-90)+63
        this.banner_slide.current = position
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
  @import '/videot_mobile/style/style.css';
  @import '/videot_mobile/style/style-2.css';



</style>
<style>
.banner-2{
    height:160px;
    margin-bottom:50px;
   
    flex-wrap: nowrap;
    position:relative;
}
.banner-2-slids{
    position:absolute;
    left:-85%;
     display: flex;
    width: 10000px;
    flex-wrap: nowrap;
    transition: 1s;
}
.banner-item {
    width: 90vw;
    padding:10px;
    transition:1s;
}
.banner-item img {
    width: 100%;
    height:160px;
    object-fit:cover;
    
    border-radius:10px;
}
.slide-arrow {
    position: absolute;
    left: 10px;
    right: 10px;
   
    display: none;
    justify-content: space-between;
    top: 50%;
    transform: translateY(-50%);
    z-index: 99;
}
.slide-arrow h6{
   
    background-color:#0000007a;
    border-radius:50%;
    width:50px;
    height:50px;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;

}
.slide-dot{
    position: absolute;
    bottom:-50px;
    left:50%;
   
    transform: translateX(-50%);

    display:flex;
    gap:8px;
}
.dot{
    width:8px;
    height:8px;
    background-color:#a46eff;
    border-radius:50%;
}
.dot-active{
    background-color:#601dd1;
    
}
</style>