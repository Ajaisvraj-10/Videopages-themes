
<template>
  <div class="main-content main-content-2" :class="$root.mode=='light'?'mode_change':''">
    
        <div class="site-wrapper2" :class="menu_click?'nav-active':''">

            <MainHeader :edit="edit" :blocks="blocks" :current_block="current_block"></MainHeader>

            <div class="position-relative p-md-5 p-3" style="margin-top:80px;min-height: calc(100vh - 340px);" v-if="is_start">
                <h6 class="text-14 mb-3 font-weight-600" v-if="type=='search'">Search results ({{$route.query.tag}})</h6>
                <h6 class="text-14 mb-3 font-weight-600" v-else>List {{slugToWord(category)}} for you</h6>
                <div class="row mx-0">
                    <div class="col-md-2 col-3" style="padding:0;" v-for="movie in movies">
                        <div class="image-row" >
                            <div class="hover-modal image" >
                                <router-link :to="edit?'':{name:'video',params: { type: slugify(movie.type), category: slugify(movie.category_detail.name), slug: movie.slug }, query: {language:movie.language_detail.name}}">
                                    <div class="position-relative" >
                                        <img :src="movie.thumbnail">
                                        <div class="hover-modal-div">
                                            <div class="small-details">
                                                <h5 class="text-14 font-weight-600 mt-1 text-white">{{movie.name}}</h5>
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
                    </div>
                </div>
            </div>

            <div class="position-relative p-md-5 p-3" style="margin-top:80px;min-height: calc(100vh - 340px);" v-else>
                <h6 class="section-sidehead height3 width5 animated-background ml-2 px-5"></h6>
                <div class="row mx-0">
                    <div class="col-md-2 col-3" style="padding:0;" >
                        <div class="image-row" >
                            <div class="hover-modal image" >
                                <div class="animated-background width-100 height-100" style="aspect-ratio: 2/2.8;"></div>
                            </div> 
                                        
                        </div> 
                    </div>
                    <div class="col-md-2 col-3" style="padding:0;" >
                        <div class="image-row" >
                            <div class="hover-modal image" >
                                <div class="animated-background width-100 height-100" style="aspect-ratio: 2/2.8;"></div>
                            </div> 
                                        
                        </div> 
                    </div>
                    <div class="col-md-2 col-3" style="padding:0;" >
                        <div class="image-row" >
                            <div class="hover-modal image" >
                                <div class="animated-background width-100 height-100" style="aspect-ratio: 2/2.8;"></div>
                            </div> 
                                        
                        </div> 
                    </div>
                    <div class="col-md-2 col-3" style="padding:0;" >
                        <div class="image-row" >
                            <div class="hover-modal image" >
                                <div class="animated-background width-100 height-100" style="aspect-ratio: 2/2.8;"></div>
                            </div> 
                                        
                        </div> 
                    </div>
                    <div class="col-md-2 col-3" style="padding:0;" >
                        <div class="image-row" >
                            <div class="hover-modal image" >
                                <div class="animated-background width-100 height-100" style="aspect-ratio: 2/2.8;"></div>
                            </div> 
                                        
                        </div> 
                    </div>
                    <div class="col-md-2 col-3" style="padding:0;" >
                        <div class="image-row" >
                            <div class="hover-modal image" >
                                <div class="animated-background width-100 height-100" style="aspect-ratio: 2/2.8;"></div>
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
    title: "Movies"
  },
  components:{
    MainHeader,
    MainFooter,
  },
  data() {
    return {
        edit:false,
        menu_click:false,
        movies:[],
        mode:"dark",
        type:'',
        category:'',
        is_start:false,
    };
  },
  mounted(){
    this.changeRoute()
  },
  watch: {
    '$route': 'changeRoute',
  },
  methods: {
    changeRoute(){
        this.movies = []
        this.type = this.$route.params.type
        if(this.$route.params.category){
            this.category = this.$route.params.category
        }
        var filter = ''
        if(this.type=='category'){
            filter = '?category='+this.slugToWord(this.category)
        }else if(this.type=='genre'){
            filter = '?type='+this.slugToWord(this.category)
        }else if(this.type=='block'){
            filter = '?block='+this.$route.query.block
        }else if(this.type=='search'){
            filter = '?search='+this.$route.query.tag
        }
        this.getMovies(filter)
    },
    getMovies(filter='') {
      var headers = new Headers();
      headers.append("Authorization", "Bearer "+(this.$root.token?this.$root.token:this.$root.admin_token));
      fetch(this.api_url+'/customer/movies/'+filter, {
          method : 'get',
          headers: headers,
      })
      .then((response) => {
          return response.json()
      })
      .then((jsonData) => {
        this.is_start = true
        this.movies = jsonData
      })
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
