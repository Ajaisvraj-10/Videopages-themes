
<template>
  <div class="main-content main-content-2" :class="$root.mode=='light'?'mode_change':''">
    
        <div class="site-wrapper2" :class="menu_click?'nav-active':''">

            <MainHeader :edit="edit" :blocks="blocks" :current_block="current_block"></MainHeader>

            <div class="position-relative p-5" style="margin-top:80px;">
                <h6 class="text-14 my-3 font-weight-600" v-if="type=='search'">Search results ({{$route.query.tag}})</h6>
                <h6 class="text-14 my-3 font-weight-600" v-else>List {{slugToWord(category)}} for you</h6>
                <div class="row">
                    <div class="col-2" v-for="movie in movies">
                        <div class="image-row" >
                                        
                            <div class="hover-modal image" >
                                <router-link :to="edit?'':{name:'video',params: { type: slugify(movie.type), category: slugify(movie.category_detail.name), slug: movie.slug }, query: {language:movie.language_detail.name}}">
                                    <div class="position-relative" >
                                        <img :src="movie.thumbnail">
                                                
                                        <div class="hover-modal-div">
                                                   
                                            <div class="small-details">
                                                <h5 class="text-14 font-weight-600 mt-1 text-dark2">{{movie.name}}</h5>
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
                    </div>
                </div>
            </div>
            <footer class="footer py-4 px-5" >
                    <div class="flex-align">
                        <div class="flex-align3" style="gap:10px;">
                            <h6 class="text-14">Download Apps</h6>
                            <img src="/vid_theme_mobile/images/play_store.png">
                            <img src="/vid_theme_mobile/images/app_store.png">

                        </div>
                        <div class="flex-align3 social2" >
                            <h6 class="text-14 mr-2">Connect with us</h6>
                            <a v-for="social_link in social_links" :href="social_link.link" target="_blank"><i :class="social_link.icon"></i></a>

                        </div>
                    </div>
                                   
            </footer>
        </div>
  </div>
</template>
<script>
import MainHeader from '/src/views/app/vid_theme_mobile/header'
export default {
  props: ['edit','blocks','current_block'],
  metaInfo: {
    title: "Movies"
  },
  components:{
    MainHeader,
  },
  data() {
    return {
        edit:false,
        menu_click:false,
        movies:[],
        mode:"dark",
        type:'',
        category:'',
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
        this.movies = jsonData
      })
    },
  }

};
</script>
<style scoped>
  @import '/vid_theme_mobile/style/style.css';
  @import '/vid_theme_mobile/style/style-2.css';

</style>
