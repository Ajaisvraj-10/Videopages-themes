
<template>
  <div class="main-content" :class="mode=='light'?'mode_change':''">
    
    <div class="site-wrapper"> 
        <MainHeader :edit="edit" :blocks="blocks" :current_block="current_block"></MainHeader>
        <div class="categories-container menu-wrapper">
            <div class="row m-5">
                <div class="col-md-3 p-2" v-for="(category,key) in categories">
                    <router-link :to="'/filter/category/'+slugify(category.name)">
                        <div class="categorie-card" :style="'background: '+setBgColor(key)+';'">
                            <h6>{{category.name}}</h6>
                        </div>
                    </router-link>
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
  metaInfo: {
    title: "Movies"
  },
  components:{
    MainHeader,
    MainFooter,
  },
  data() {
    return {
      show_img:true,
      categories:[],
      colors : [
        'linear-gradient(222deg, red, #920b0b, #00000094)',
        'linear-gradient(222deg, #6b6b6b, rgb(147 147 147), rgb(0 0 0))',
        'linear-gradient(222deg, black, rgb(90 80 80), rgb(178 137 137 / 58%))',
        'linear-gradient(222deg, #9c9a03, rgb(146 76 11), rgb(107 54 54 / 50%))',
        'linear-gradient(222deg, #060505, rgb(81 58 58), rgba(0, 0, 0, 0.58))',
        'linear-gradient(222deg, #204c00, rgb(0 79 73), rgba(0, 0, 0, 0.58))',
        'linear-gradient(222deg, #341801, rgb(70 5 0), rgb(76 23 23 / 58%))',
        'linear-gradient(222deg, var(--secondary), var(--purple), rgb(0 0 0))',
        'linear-gradient(222deg, #220c0c, rgb(63 10 10), rgba(0, 0, 0, 0.58))',
        'linear-gradient(222deg, #322929, rgb(37 28 28), rgb(85 85 85 / 58%))',
        'linear-gradient(222deg, #4f0000, rgb(45 29 29), rgba(0, 0, 0, 0.58))',
      ],
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
        this.getCategories()
    },
    setBgColor(index){
        if(index>10){
            index = parseInt(index%10)
        }
        return this.colors[index]
    },
    getCategories() {
      var headers = new Headers();
      headers.append("Authorization", "Bearer "+(this.$root.token?this.$root.token:this.$root.admin_token));
      fetch(this.api_url+'/movies/categories/', {
          method : 'get',
          headers: headers,
      })
      .then((response) => {
          return response.json()
      })
      .then((jsonData) => {
        this.categories = jsonData
      })
    },
  },
};
</script>
<style scoped>
  
  @import '/m1/style/style.css';

</style>
<style>
.categories-container{
    z-index: 9;
    position: absolute;
    height: 100vh;
    overflow: auto;
    width: 100%;
    padding-top: 30px!important;
    background: #1a1c1e;
}
  .categorie-card{
    aspect-ratio:1/.55;
    background:red;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:6px;
    filter: grayscale(60%);
    opacity:.8;
    cursor:pointer;
  }
  .categorie-card:hover{
    filter: grayscale(0%);
    opacity:1;
    filter: contrast(150%);
    box-shadow:0 0 0px 3px #fff;
  }
  .categorie-card h6{
    color:white;
    font-size:16px;
    font-weight:500;
  }
</style>
