
<template>
  <div class="main-content main-content-2" :class="$root.mode=='light'?'mode_change':''">
    
        <div class="site-wrapper" :class="menu_click?'nav-active':''">

            <MainHeader :edit="edit" :blocks="blocks" :current_block="current_block"></MainHeader>

            <div id="content" class="site-content main-content-sec center-relative">
                
                <div class="position-relative second-section main-page-sec" >
                    <div class="col-12 movies-input">
                        <input placeholder="Search Movies, Series, etc...">
                        <img src="/videofy/images/search.png">
                    </div>
                    <div class="col-12">
                        <h6 class="text-14 my-2 font-weight-600" v-if="type=='search'">Search results ({{$route.query.tag}})</h6>
                        <h6 class="text-14 my-2 font-weight-600" v-else>List {{slugToWord(category)}} for you</h6>
                    </div>
                    <div class="row m-0">
                        <div class="px-2 col-md-2 col-6" v-for="movie in movies">
                            <div class="image-row d-flex" >
                                            
                                <div class="hover-modal image mx-0" style="width:100%;">
                                    <router-link :to="edit?'':{name:'video',params: { type: slugify(movie.type), category: slugify(movie.category_detail.name), slug: movie.slug }, query: {language:movie.language_detail.name}}">
                                        <div class="position-relative" >
                                            <img :src="movie.thumbnail">
                                            <h6 class="prime">
                                                        <i class="fa fa-play"></i>
                                                    </h6>
                                                    <div class="hover-modal-div">
                                                       <div class="small-details">
                                                            <h5 class="font-weight-500 mb-2 text-white2" style="font-size:14px;">{{movie.name}}</h5>
                                                            <h5 class=" font-weight-400 text-light" style="font-size:11px;"><span class=" pr-2">2022</span>2h 30m</h5>


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
</template>
<script>
import MainHeader from '/src/views/app/videofy/header'
import MainFooter from '/src/views/app/videofy/footer'
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
  @import '/videofy/style/style.css';
  @import '/videofy/style/style-2.css';


.movies-input{
    width:95%;
    border:2px solid transparent;
    border-radius:10px;
    margin:10px auto 20px auto;
    display:flex;
    align-itesm:center;
    justify-content:space-between;
    padding:10px 15px;
    background:#181818;
    box-shadow:0 7px 16px 5px #191919a6;
}
.movies-input:hover{
    ;
    border:2px solid #2323237d;
}
.movies-input img{
    width:30px;
}
.movies-input input{
    border:none;
    background-color:initial;
   color:white;
   width:100%;

}
</style>
