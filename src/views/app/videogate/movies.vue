
<template>
  <div class="main-content main-content-2" :class="$root.mode=='light'?'mode_change':''">
    
        <div class="site-wrapper2" :class="menu_click?'nav-active':''">

            <MainHeader :edit="edit" :blocks="blocks" :current_block="current_block"></MainHeader>

            <div class="position-relative px-md-5 px-3 pt-2 pb-5" style="margin-top:80px;">
                <div class=" filter-search mb-5">
                      
                    <img src="/videogate/images/search.svg" class=" cursor-pointer" @click="searchResult()">
                    <input type="text" v-model="search" placeholder="search for Movies, Shows, channels etc.">
                </div>
                <div>
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
                                                        
                                                            <h5 class="text-20 text-center font-weight-600 mt-1 text-white2">{{movie.name}}</h5>

                                                            <h5 class="more-info">More Info</h5>

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

            <MainFooter :edit="edit" :blocks="blocks" :current_block="current_block"></MainFooter>
        </div>
  </div>
</template>
<script>
import MainHeader from '/src/views/app/videogate/header'
import MainFooter from '/src/views/app/videogate/footer'
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
  @import '/videogate/style/style.css';
  @import '/videogate/style/style-2.css';

</style>
