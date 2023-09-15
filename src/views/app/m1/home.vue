
<template>
  <div class="main-content main-content-2">
    
    <div class="site-wrapper">

            <MainHeader :edit="edit" :blocks="blocks" :current_block="current_block"></MainHeader>
            <div class="site-content main-content-sec center-relative" v-if="start">
                <div class="second-section main-page-sec p-0">
                    <div class="banners" style="position: relative;" v-if="preview_movie.id">
                        <!-- <img :src="api_url+preview_movie.thumbnail" style="width: 100%;height: 60vh;" v-if="show_banner"/> -->
                        <img :src="'https://vz-896b2506-892.b-cdn.net/'+preview_movie.video.video_guid+'/thumbnail.jpg'" style="width: 100%;height: 60vh;" v-if="show_banner"/>
                        <video :autoplay="false" loop id="myVideo" style="width: 100%;height: 60vh;object-fit:cover;" v-else>
                            <source :src="preview_movie.video.video_url_player" type="video/mp4" >
                            Your browser does not support HTML5 video.
                        </video>
                        <div class="banner-content">
                            <h1>{{preview_movie.name}}</h1>
                            <h6>{{preview_movie.description}}</h6>
                            <!-- <router-link :to="edit?'':{name:'video',params: { type: slugify(preview_movie.type), category: slugify(preview_movie.category_detail.name), slug: preview_movie.slug }, query: {language:preview_movie.language_detail.name}}" class="watch-play btn btn-light">
                                <img src="/m1/images/play2.png">
                                Watch now
                            </router-link> -->
                            <button class="watch-play btn btn-light foucs-btn" @click="watchNow()" type="button">
                                <img src="/m1/images/play2.png">
                                Watch now
                            </button>
                        </div>
                    </div>
                    
                    <div class="image-grid mt-5" v-for="block in blocks" @click="selectContent(block)" :class="block.is_edit?'selected_content':''" :id="'blocks_'+block.id" v-show="block.status" v-if="block.movie_type!='None'">
                        <div class="position-relative" >
                            <div class="flex-align mb-3" >
                                <h6 class="section-sidehead text-white  pl-2">{{block.name}}</h6>
                                <!-- <h6 class="text-more mr-3" @click="$router.push('/filter/block/'+slugify(block.value)+'?block='+block.id)">View More</h6> -->
                            </div>
                                        <div class="image-row" :id="'block'+block.id">
                                            
                                            <button
                                                :id="'block'+block.id+'movie'+movie.id"
                                                class="hover-modal image"
                                                v-for="(movie,mkey) in block.movies"
                                                @click="clickMovie(movie)"
                                                @focus="previewBanner(movie, block, mkey)"
                                            >
                                                    <div class="position-relative" >
                                                        <div class="focus-img">
                                                            <img :src="api_url+movie.thumbnail">
                                                        </div>
                                                        <div class="hover-modal-div">
                                                            <div class="small-details">
                                                                    <h5 class="text-14 font-weight-600 mt-1 text-white">{{movie.name}}</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                            </button> 
                                            
                                        </div>   
                        </div>

                    </div>

                    <div class="image-grid mt-4" v-for="block in blocks" @click="selectContent(block)" :class="block.is_edit?'selected_content':''" :id="'v_blocks_'+block.id" v-show="block.status" v-if="block.movie_type!='None'">
                        <div class="position-relative" >
                            <div class="flex-align mb-3" >
                                <h6 class="section-sidehead text-white  pl-2">Top 10 in the US</h6>
                                <!--<h6 class="text-more mr-3" @click="$router.push('/filter/block/'+slugify(block.value)+'?block='+block.id)">View More</h6>-->
                            </div>
                                        <div class="image-row top-list-img" :id="'block2'+block.id">
                                            <button
                                                :id="'block2'+block.id+'movie'+movie.id"
                                                class="hover-modal image"
                                                v-for="(movie,mkey) in block.movies"
                                                @click="clickMovie(movie)"
                                                @focus="previewBanner(movie, block, mkey, 'block2')"
                                            >
                                                    <div class="position-relative" >
                                                        <div class="top-banner-text">
                                                            <div class="focus-img">
                                                                <img :src="api_url+movie.thumbnail">
                                                            </div>
                                                            <h5>#1</h5>
                                                        </div>
                                                        
                                                        <div class="hover-modal-div">
                                                            <div class="small-details">
                                                                <h5 class="text-14 font-weight-600 mt-1 text-white">{{movie.name}}</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                            </button> 
                                            
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
        current_movie:{language_detail:{},category_detail:{},movie_spec:[]},
        preview_movie:{language_detail:{},category_detail:{},movie_spec:[], video:{}},
        show_banner:true,
        play_video:{},
        old_key:0,
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
    previewBanner(movie, block, mkey, block_type='block'){
      var self = this;
      this.preview_movie=movie
      var content = document.getElementById(block_type+block.id)
      var element = document.getElementById(block_type+block.id+'movie'+movie.id)
      
      if(this.old_key<mkey){
        if(mkey>2){
            content.scrollTo({left: content.scrollLeft += element.offsetWidth,behavior: 'smooth',})
        }
      }else{
        if((block.movies.length-3)>mkey){
            content.scrollTo({left: content.scrollLeft -= element.offsetWidth,behavior: 'smooth',})
        }
      }
      this.old_key=mkey

      if(!this.show_banner){
        clearInterval(this.play_video)
        document.getElementById("myVideo").pause()
      }
      this.show_banner = true
      this.play_video = setInterval(function() {
        self.show_banner = false
        document.getElementById("myVideo").play()
      }, 5000);
    },
    watchNow(){
        this.show_banner = false
        document.getElementById("myVideo").play()
    },
    clickMovie(movie){
        this.current_movie=movie
        if(!this.edit){
            this.$router.push({
                name:'video',
                params: {
                    type: this.slugify(movie.type),
                    category: this.slugify(movie.category_detail.name),
                    slug: movie.slug
                },
                query: {
                    language:movie.language_detail.name
                }
            })
        }
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
        
          if(this.blocks.length>0){
            if(this.blocks[0].movies.length>0){
                this.preview_movie = this.blocks[0].movies[0]
                var self = this
                setTimeout(function(){
                    document.getElementById('block'+self.blocks[0].id+'movie'+self.blocks[0].movies[0].id).focus()
                },1000)
            }
          }
          this.start = true
      })
    },
    selectContent(block){
        if(this.edit){
            this.$emit('selectedContent', block)
        }
    },
  }

};
</script>
<style scoped>
  @import '/m1/style/style.css';
  @import '/m1/style/style-2.css';
  @import '/m1/style/style-tv.css';

  @import '/m1/style/load-style.css';

</style>
