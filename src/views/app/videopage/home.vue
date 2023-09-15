
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
                        <div class="banner-item" v-for="(banner,key) in banners"  :class="(key+1)==banner_slide.current?'banner-active':''" @click="banner.link?$router.push(banner.link):''">
                            <img :src="banner.image">
                        </div>
                        <div class="banner-item" v-if="banners.length>0">
                            <img :src="banners[0].image">
                        </div>
                    </div>
                   <!--<div class="slide-dot">
                        <div class="dot" v-for="(banner,key) in banners" :class="(key+1)==banner_slide.current?'dot-active':''" @click="clcikBannerDott(key+1)"></div>
                    </div>-->


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

            <MainFooter :edit="edit" :blocks="blocks" :current_block="current_block"></MainFooter>
    </div>
  </div>
</template>
<script>
import MainHeader from '/src/views/app/videopage/header'
import MainFooter from '/src/views/app/videopage/footer'
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
        banner_slide: {left:-24,banners:0,current:1},
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
            self.autoSlider(3000)
        },time)
    },
    slideBanner(move){
        if(move=='next'){
            if(this.banner_slide.current>=this.banner_slide.banners){
                this.banner_slide.left= -24
                this.banner_slide.current = 1
            }else{
                this.banner_slide.left=this.banner_slide.left-50
                this.banner_slide.current++
            }
        }else{
            if(this.banner_slide.current<=1){
                this.banner_slide.left= (this.banner_slide.banners*-50)+24
                this.banner_slide.current = this.banner_slide.banners
            }else{
                this.banner_slide.left=this.banner_slide.left+50
                this.banner_slide.current--
            }
        }
    },
    clcikBannerDott(position){
        this.banner_slide.left= (position*-50)+24
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
          this.banner_slide.banners = jsonData.length
          this.autoSlider()
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
                this.blocks[i].movies = this.paginationMovies(this.blocks[i].movies,7)
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
  @import '/videopage/style/style.css';
  @import '/videopage/style/style-2.css';



</style>


<style>
.banner-2{
    height:380px;
    margin-bottom:50px;
   
    flex-wrap: nowrap;
    position:relative;
}
.banner-2-slids{
    position:absolute;
    left:-24%;
     display: flex;
    width: 10000px;
    flex-wrap: nowrap;
    transition: 1s;
    height:100%;
}
.banner-item {
    width: 50vw;
    padding:15px;
    border-radius:20px;

    transition:1s;
}

.banner-item img {
    width: 100%;
    height:100%!important;
    object-fit:cover;
    transform: scale(.94);
    
    border-radius:10px;
   transition:.3s;
}
.banner-item.banner-active img{
    transform: scale(1.08);
   

    
}
.slide-arrow {
    position: absolute;
    left: 10px;
    right: 10px;
   
    display: flex;
    justify-content: space-between;
    top: 50%;
    transform: translateY(-50%);
    z-index: 99;
}
.slide-arrow h6{
   
    //background-color:#0000007a;
    border-radius:50%;
    width:50px;
    height:50px;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;

}
.slide-arrow h6 i{
    font-size:70px;
}
.slide-arrow h6 i:hover{
    color:red;
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
    background-color:gray;
    border-radius:50%;
}
.dot-active{
    background-color:white;
    
}

</style>