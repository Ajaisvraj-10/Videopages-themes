
<template>
  <div class="main">
    <MainHeader></MainHeader>
    <div class="banners" v-if="preview_movie.id">
        <img :src="'https://vz-896b2506-892.b-cdn.net/'+preview_movie.video.video_guid+'/thumbnail.jpg'" style="width: 100%; height: 80vh; object-fit: cover;" v-if="show_banner">
        <video   loop="loop" autoplay  style="width: 100%; height: 80vh; object-fit: cover;" v-else>
            <source :src="preview_movie.video.video_url_player" type="video/mp4">
            Your browser does not support HTML5 video. 
        </video>
        <div class="title-sec">
            <h6 class="text-14 font-weight-500">Adventure • Rated for 3+</h6>
            <h4 class="font-weight-500">{{preview_movie.name}}</h4>
            <h6 class="text-18 font-weight-500" style="line-height:26px;">{{preview_movie.description}}</h6>
            
            <router-link :to="edit?'':{name:'video',params: { type: slugify(preview_movie.type), category: slugify(preview_movie.category_detail.name), slug: preview_movie.slug }, query: {language:preview_movie.language_detail.name}}">
                <button class="button-site"><img src="/m2/images/play2.png">Play</button>
            </router-link>
        </div>
 
    </div>
    <div class="main-section" style="margin-top:-50px;z-index:999;">
        <div class="horizontal-div my-5" v-for="block in blocks" @click="selectContent(block)" :class="block.is_edit?'selected_content':''" :id="'blocks_'+block.id" v-show="block.status" v-if="block.movie_type!='None'">
            <h6 class="slide-heading">{{block.name}}</h6>
            <div class="sliders">
                <div class="slider-child horizontal-slider" v-for="movie in block.movies">
                    <button class="hover-card" style="border: none;background: transparent;" @click="clickMovie(movie)" @focus="previewBanner(movie)">
                        <div class="focus-img">
                            <img :src="api_url+movie.thumbnail">
                        </div>
                    </button>
                    <h6>{{movie.name}}</h6>
                </div>
            </div>
        </div>
        <div class="vertical-div my-5" v-for="block in blocks" @click="selectContent(block)" :class="block.is_edit?'selected_content':''" :id="'blocks_'+block.id" v-show="block.status" v-if="block.movie_type!='None'">
            <h6 class="slide-heading">Latest</h6>
            <div class="sliders">
                <div class="slider-child vertical-slider" v-for="movie in block.movies">
                    <button class="hover-card" style="border: none;background: transparent;" @click="clickMovie(movie)" @focus="previewBanner(movie)">
                        <div class="focus-img">
                            <img :src="api_url+movie.thumbnail">
                        </div>
                    </button>
                    <h6>{{movie.name}}</h6>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import MainHeader from '/src/views/app/m2/header'
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
        preview_movie:{language_detail:{},category_detail:{},movie_spec:[]},
        show_banner:true,
        play_video:{},

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
    previewBanner(movie){
      var self = this;
      this.preview_movie=movie
      if(!this.show_banner){
        clearInterval(this.play_video)
      }
      this.show_banner = true
      this.play_video = setInterval(function() {
        self.show_banner = false
      }, 5000);
    },
    clickMovie(movie){
        this.current_movie=movie
        this.previewBanner(movie)
        // if(!this.edit){
        //     this.$router.push({
        //         name:'video',
        //         params: {
        //             type: this.slugify(movie.type),
        //             category: this.slugify(movie.category_detail.name),
        //             slug: movie.slug
        //         },
        //         query: {
        //             language:movie.language_detail.name
        //         }
        //     })
        // }
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
  @import '/m2/style/style.css';

</style>
