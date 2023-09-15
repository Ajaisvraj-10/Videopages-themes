
<template>
  <div class="search-content" :style="$root.search_tab?'display:block':'display:none'">
    
        <div class="search-wrapper">
            <div class="search-input">
                <img src="/videomusic/images/nav_left.png" @click="$root.search_tab=!$root.search_tab" class="cursor-pointer">
                <input placeholder="Search">
            </div>
            <div class="search-container position-relative">
                <h6 class="text-14 mb-2 mx-1 font-weight-600" v-if="type=='search'">Search results ({{$route.query.tag}})</h6>
                <h6 class="text-14 mb-2 mx-1 font-weight-600" v-else>List {{slugToWord(category)}} for you</h6>
                <div class="row m-0">
                    <div class="col-2 p-0" v-for="movie in movies">
                        <div class="image-row" >
                            <div class="hover-modal image" >
                                <router-link :to="edit?'':{name:'video',params: { type: slugify(movie.type), category: slugify(movie.category_detail.name), slug: movie.slug }, query: {language:movie.language_detail.name}}">
                                    <div class="position-relative d-flex" >
                                        <img :src="movie.thumbnail">
                                        <div class="hover-modal-div">
                                            <div class="small-details">
                                                <h5 class="text-12 font-weight-400 text-light">{{movie.name}}</h5>
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
</template>
<script>

import MainFooter from '/src/views/app/videomusic/footer'
export default {
  props: ['edit','blocks','current_block'],
  metaInfo: {
    title: "Movies"
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
  @import '/videomusic/style/style.css';
  @import '/videomusic/style/style-2.css';



.search-content {
    position: fixed;
    top: 0px;
    height: 100vh;
    background-color: rgba(255,255,255,0.1);
    width: 100vw;
    padding: 0;
    overflow: hidden;
    z-index: 999999999;
    padding-top:10px;
    
 
  
}
.search-wrapper{
    padding: 0;
    display: flex;
    flex-direction:column;
    width: 55vw;
   
    margin: 0 auto;
    background-color:#071b1c;
    border-radius:6px;
}
.search-container{
   
    max-height:80vh;
    overflow-y:auto;
    overflow-x:hidden;
    width:100%;;
   
    padding:15px;
   
}

.search-input{
    display: flex;
    align-items: center;
    background-color: #071b1c;
    display: flex;
    gap: 15px;
    height: 40px;
    position: relative;
    border: 1px solid #071b1c;
    border-radius: 5px;
    padding:10px 20px;
    height: 48px;
}
.search-input input{
    border: none;
    padding: 10px 0;
    background-color:initial;
    font-size:18px;
    color:white;
    font-weight:400;
    

}
.search-input img{
    padding: 5px;
    width: 26px;
    opacity:.8;

}

@media screen and (max-width: 990px) {
    .search-wrapper{

    width: 90vw;
}
.search-content{
    left: 0;
}
}
</style>
