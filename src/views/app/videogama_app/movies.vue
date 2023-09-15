
<template>
  <div class="main-content main-content-2" :class="$root.mode=='light'?'mode_change':''">
    
        <div class="site-wrapper2" :class="menu_click?'nav-active':''">

            <MainHeader :edit="edit" :blocks="blocks" :current_block="current_block"></MainHeader>

            <div class="position-relative p-3" >
                <h6 class="text-14 my-3 font-weight-600" v-if="type=='search'">Search results ({{$route.query.tag}})</h6>
                <h6 class="text-14 my-3 font-weight-600" v-else>List {{slugToWord(category)}} for you</h6>
                <div class="row">
                    <div class="col-4 p-0" v-for="movie in movies">
                        <div class="image-row" >
                                        
                            <div class="hover-modal image" >
                                <router-link :to="edit?'':{name:'video',params: { type: slugify(movie.type), category: slugify(movie.category_detail.name), slug: movie.slug }, query: {language:movie.language_detail.name}}">
                                    <div class="position-relative" >
                                        <img :src="movie.thumbnail">
                                                
                                        <div class="hover-modal-div">
                                                       <div class="small-details">
                                                        <h5 class="text-14 font-weight-400 mt-1 text-dark">{{movie.name}}</h5>
                                                       </div>
                                        </div>
                                    </div>
                                </router-link>
                            </div> 
                                        
                        </div> 
                    </div>
                </div>
            </div>
            <footer class="footer py-2" >
                    <div class="flex-align">
                        <div class="flex-align3" style="gap:10px;">
                            <h6 class="text-14">Download Apps</h6>
                            <img src="/videogama_app/images/play_store.png">
                            <img src="/videogama_app/images/app_store.png">

                        </div>
                        <div class="flex-align3 social2" >
                            <h6 class="text-14 mr-2 mb-0">Connect with us</h6>
                            <a v-for="social_link in social_links" :href="social_link.link" target="_blank"><i :class="social_link.icon"></i></a>

                        </div>
                    </div>
                                    
            </footer>
        </div>
  </div>
</template>
<script>
import MainHeader from '/src/views/app/videogama_app/header'
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
      headers.append("Authorization", "Token "+this.$root.token);
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
  @import '/videogama_app/style/style.css';
  @import '/videogama_app/style/style-2.css';

</style>
