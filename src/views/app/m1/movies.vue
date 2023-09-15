
<template>
  <div class="main-content main-content-2" >
    
        <div class="site-wrapper2" :class="menu_click?'nav-active':''">

            <MainHeader :edit="edit" :blocks="blocks" :current_block="current_block"></MainHeader>

            <div class="position-relative second-section py-4 pr-4" style="margin-left:100px;" v-if="is_start">
                <h6 class="text-14 mb-3 font-weight-600 px-2" v-if="type=='search'">Search results ({{$route.query.tag}})</h6>
                <h6 class="text-14 mb-3 font-weight-600 px-2" v-else>List {{slugToWord(category)}} for you</h6>
                <div class="row mx-0">
                    <div class="col-md-2 col-3 p-2"  v-for="movie in movies">
                        <div class="image-row" style="overflow:initial;">
                           
                                <router-link :to="edit?'':{name:'video',params: { type: slugify(movie.type), category: slugify(movie.category_detail.name), slug: movie.slug }, query: {language:movie.language_detail.name}}" class="hover-modal image w-100" >
                                   
                                        <div class="position-relative w-100" >
                                            <div class="focus-img">
                                                <img :src="movie.thumbnail">
                                            </div>
                                            <div class="hover-modal-div">
                                                <div class="small-details">
                                                    <h5 class="text-14 font-weight-600 mt-1 text-white">{{movie.name}}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    
                                </router-link>
                            
                                        
                        </div> 
                    </div>
                </div>
            </div>

            <div class="position-relative py-4 pr-4" style="margin-left:100px;"  v-else>
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
