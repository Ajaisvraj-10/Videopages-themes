
<template>
  <div class="main-content main-content-2" :class="mode=='light'?'mode_change':''">
    
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
                                           
                                        </div>
                                    </div>
                                </router-link>
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
import MainHeader from '/src/views/app/videopage/header'
import MainFooter from '/src/views/app/videopage/footer'
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
  @import '/videopage/style/style.css';
  @import '/videopage/style/style-2.css';

</style>
