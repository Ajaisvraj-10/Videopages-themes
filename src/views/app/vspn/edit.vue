
<template>
  <div>
    <div class="row mx-0 edit-sec" style="height: 100vh;
    overflow: hidden;">
      <div class="col-lg-4 border-right " style="height:100vh;overflow:auto;padding:25px;">
        <div class="card border shadow-2 w-100 mb-4"  v-if="current_block.id">
          <form id="blockForm"  @submit.prevent="updateBlock()" >
            <div class="active_sec" >
              <div class="text-right  p-2" style="background-color: rgb(247, 247, 247);border-radius:10px 10px 0 0;">
                <div class="text-14 text-dark" style="position:absolute;left:10px;top:15px">
                  {{current_block.status?'Show':'Hide'}} <input type="checkbox" name="status" v-model="current_block.status" class="" style="zoom:1.3">
                  

                </div>
                <button type="submit" class="btn py-1 text-white " style="background-color:#0073a7;">Save</button>
              </div>
              <div class="p-3">
                <div v-if="current_block.input_type=='text'">
                  <label class="">{{current_block.name}}:</label>
                  <input v-model="current_block.value" name="value" class="p-2 edit-input w-100" >
                  
                </div>
                <textarea class="p-2 edit-input w-100" v-model="current_block.value" name="value" v-else-if="current_block.input_type=='textarea'" @keyup="$event.target.style.height=($event.target.scrollHeight)+'px'"></textarea>
                <input type="color" v-model="current_block.value" name="value" class="p-2  edit-input w-100" style="height:36px;" v-else-if="current_block.input_type=='color'">
                  

              </div>
              
            </div>
            <div class="p-3" v-if="current_block.input_type=='file'">
                <img :src="current_block.value?current_block.image:api_url+current_block.image" class="rounded w-100">
                <div class="position-relative w-100" style="margin-top:-10px;">
                    <input type="file" name="image" class="p-0  edit-input w-100" style="opacity:0;position: absolute;left: 0;width: 100%;z-index: 9999;height: 100%;cursor:pointer;" @change="selectFile($event,current_block)">
                    
                    <button class="btn text-white  w-100 py-3" type="button" style="background-color:#0073a7;border-radius:0 0 6px 6px; " >Change your image</button>
                </div>
            </div> 

            <div class="p-3" v-if="current_block.movie_type!='None'">
                <label class="">Select Movies:</label>
                <select name="movie_type" v-model="current_block.movie_type" class="edit-input w-100" @change="changeMovieType()">
                    <option v-for="advance_type in advance_types" :value="advance_type">{{advance_type}}</option>
                </select>
                <div class="py-2">
                  <label class="my-2" v-if="current_block.movie_type=='Meta Tags'">Select Tags:</label>
                  <div class="" v-if="current_block.movie_type=='Meta Tags'">
                      <div class="">
                          <b-button class="mx-1" v-for="(spec,key) in specs" @click="addSpec(spec,key)" v-if="!specs_ids.includes(spec.id)">{{spec.name}}</b-button>
                      </div>
                      <hr class="">
                      <div class="row mt-2 mx-0" v-for="movie_spec in specs" v-if="specs_ids.includes(movie_spec.id)">
                        <label class="mb-2 w-100">{{movie_spec.name}}:</label>
                        <div class="row mx-0">
                          <label class="col watermark-align" v-for="value in movie_spec.values" :class="current_block.specs.includes(value.id)?'active_class':''" :for="'id'+value.id">
                              <h6>{{value.name}}</h6>
                              <input type="checkbox" v-model="current_block.specs" :value="value.id" :id="'id'+value.id" v-show="false" class="edit-input">
                              

                          </label>
                        </div>
                      </div>
                      <select name="specs" multiple v-show="false">
                        <option v-for="sp in current_block.specs" :value="sp" selected>{{sp}}</option>
                      </select>
                  </div>
                </div>

                <label class="mt-2" v-if="current_block.movie_type=='Language'">Select Language:</label>
                <div class="" v-if="current_block.movie_type=='Language'">
                    <div class="row mx-0">
                        <label class="col watermark-align" v-for="language in languages" :class="current_block.languages.includes(language.id)?'active_class':''" :for="'id'+language.id">
                            <h6>{{language.name}}</h6>
                            <input type="checkbox" v-model="current_block.languages" :value="language.id" :id="'id'+language.id" v-show="false" class="edit-input">
                            

                        </label>
                    </div>
                    <select name="languages" multiple v-show="false">
                      <option v-for="lg in current_block.languages" :value="lg" selected>{{lg}}</option>
                    </select>
                </div>
                <div class=" py-2">
                  <label class="mt-2" v-if="current_block.movie_type=='Category'">Select Categories:</label>
                  <div class="" v-if="current_block.movie_type=='Category'">
                      <div class="row mx-0">
                          <label class="col watermark-align" v-for="category in categories" :class="current_block.categories.includes(category.id)?'active_class':''" :for="'id'+category.id">
                              <h6>{{category.name}}</h6>
                              <input type="checkbox" v-model="current_block.categories" :value="category.id" :id="'id'+category.id" v-show="false" class="edit-input">
                              

                          </label>
                      </div>
                      <select name="categories" multiple v-show="false">
                        <option v-for="ct in current_block.categories" :value="ct" selected>{{ct}}</option>
                      </select>
                  </div>
                </div>
            </div> 
          </form>
        </div>
        <div class="card border shadow-2 w-100 mb-4" v-for="block in blocks" v-if="!block.is_edit">
          <form>
            <div class="flex-align p-3">
                <h6 class="mb-0 text-dark mr-2 text-14 font-weight-400" style="line-height:20px;">{{block.value}}</h6>
                <button type="button" class="btn" @click="editContent(block)"><i class="fa fa-pencil mr-1" style="font-size:11px;color:gray;"></i>Edit</button>
            </div>
            <div class="p-2" v-if="block.input_type=='file'">
                <img :src="block.value?block.image:api_url+block.image" class="rounded w-100">
            </div> 
          </form>
        </div>

        <div class="card border shadow-2 w-100 mb-2" v-if="current_page.slug=='/' || current_page.slug=='/watching'">
          <button type="button" class="btn btn-danger py-2" @click="add_new=false" v-if="add_new">Cancel Video Block</button>
          <button type="button" class="btn btn-success py-2" @click="current_block={name:'Heading', movie_type:'Category', status:true, input_type:'text', specs:[], languages:[], categories:[], movies:[]};getCategories();add_new=true" v-else><i class="fa fa-pencil mr-1" style="font-size:11px;color:gray;"></i>Add Video Block</button>
        </div>
        <div class="card border shadow-2 w-100 mb-4" v-if="add_new">
          <form id="addBlock"  @submit.prevent="addBlock()">
            <div class="active_sec" >
              <div class="text-right  p-2" style="background-color: rgb(247, 247, 247);border-radius:10px 10px 0 0;">
                <div class="text-14 text-dark" style="position:absolute;left:10px;top:15px">
                  {{current_block.status?'Show':'Hide'}} <input type="checkbox" name="status" v-model="current_block.status" class="" style="zoom:1.3">
                </div>
                <button type="submit" class="btn py-1 text-white " style="background-color:#0073a7;">Save</button>
              </div>
              <div class="p-3">
                <div v-if="current_block.input_type=='text'">
                  <label class="">{{current_block.name}}:</label>
                  <input v-model="current_block.value" placeholder="Type heading" name="value" class="p-2 edit-input w-100" >
                </div>
              </div>
            </div>

            <div class="p-3" v-if="current_block.movie_type!='None'">
                <label class="">Select Movies:</label>
                <select name="movie_type" v-model="current_block.movie_type" class="edit-input w-100" @change="changeMovieType()">
                    <option v-for="advance_type in advance_types" :value="advance_type">{{advance_type}}</option>
                </select>
                <div class="py-2">
                  <label class="my-2" v-if="current_block.movie_type=='Meta Tags'">Select Tags:</label>
                  <div class="" v-if="current_block.movie_type=='Meta Tags'">
                      <div class="">
                          <b-button class="mx-1" v-for="(spec,key) in specs" @click="addSpec(spec,key)" v-if="!specs_ids.includes(spec.id)">{{spec.name}}</b-button>
                      </div>
                      <hr class="">
                      <div class="row mt-2 mx-0" v-for="movie_spec in specs" v-if="specs_ids.includes(movie_spec.id)">
                        <label class="mb-2 w-100">{{movie_spec.name}}:</label>
                        <div class="row mx-0">
                          <label class="col watermark-align" v-for="value in movie_spec.values" :class="current_block.specs.includes(value.id)?'active_class':''" :for="'id'+value.id">
                              <h6>{{value.name}}</h6>
                              <input type="checkbox" v-model="current_block.specs" :value="value.id" :id="'id'+value.id" v-show="false" class="edit-input">
                              

                          </label>
                        </div>
                      </div>
                      <select name="specs" multiple v-show="false">
                        <option v-for="sp in current_block.specs" :value="sp" selected>{{sp}}</option>
                      </select>
                  </div>
                </div>

                <label class="mt-2" v-if="current_block.movie_type=='Language'">Select Language:</label>
                <div class="" v-if="current_block.movie_type=='Language'">
                    <div class="row mx-0">
                        <label class="col watermark-align" v-for="language in languages" :class="current_block.languages.includes(language.id)?'active_class':''" :for="'id'+language.id">
                            <h6>{{language.name}}</h6>
                            <input type="checkbox" v-model="current_block.languages" :value="language.id" :id="'id'+language.id" v-show="false" class="edit-input">
                            

                        </label>
                    </div>
                    <select name="languages" multiple v-show="false">
                      <option v-for="lg in current_block.languages" :value="lg" selected>{{lg}}</option>
                    </select>
                </div>
                <div class=" py-2">
                  <label class="mt-2" v-if="current_block.movie_type=='Category'">Select Categories:</label>
                  <div class="" v-if="current_block.movie_type=='Category'">
                      <div class="row mx-0">
                          <label class="col watermark-align" v-for="category in categories" :class="current_block.categories.includes(category.id)?'active_class':''" :for="'id'+category.id">
                              <h6>{{category.name}}</h6>
                              <input type="checkbox" v-model="current_block.categories" :value="category.id" :id="'id'+category.id" v-show="false" class="edit-input">
                              

                          </label>
                      </div>
                      <select name="categories" multiple v-show="false">
                        <option v-for="ct in current_block.categories" :value="ct" selected>{{ct}}</option>
                      </select>
                  </div>
                </div>
            </div> 
          </form>
        </div>
      </div>
      <div class="col-lg-8 px-0 ">
        <div class="mt-0" style="position:relative" v-if="themename=='vspn'">
          <HomePage edit="1" :blocks="blocks" class="combonent_class" v-if="current_page.slug=='/'" @selectedContent="selectedContent"></HomePage>
          <SignInPage edit="1" :blocks="blocks" class="combonent_class" v-else-if="current_page.slug=='/sign-in'" @selectedContent="selectedContent"></SignInPage>
          <PlanPage edit="1" :blocks="blocks" class="combonent_class" v-else-if="current_page.slug=='/plan'" @selectedContent="selectedContent"></PlanPage>
          <VideosPage edit="1" :blocks="blocks" class="combonent_class" v-else-if="current_page.slug=='/filter'" @selectedContent="selectedContent"></VideosPage>
          <WatchingPage edit="1" :blocks="blocks" class="combonent_class" v-else-if="current_page.slug=='/watching'" @selectedContent="selectedContent"></WatchingPage>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import SignInPage from '/src/views/app/vspn/sign-in'
import HomePage from '/src/views/app/vspn/home'
import PlanPage from '/src/views/app/vspn/plan'
import VideosPage from '/src/views/app/vspn/movies'
import WatchingPage from '/src/views/app/vspn/video'
export default {
  components: {
    SignInPage,
    HomePage,
    PlanPage,
    VideosPage,
    WatchingPage,
  },
  data() {
    return {
      page_id:null,
      current_page:{slug:''},
      blocks:[],
      add_new:false,
      current_block:{specs:[], languages:[], categories:[], movies:[]},
      specs:[],
      specs_ids:[],
      categories:[],
      languages:[],
      themename:'',
    };
  },
  mounted(){
    this.themename = theme_name
    this.page_id = this.$route.params.page
    this.getCurrentPage()
  },
  methods:{
    getCurrentPage() {
      var headers = new Headers();
      headers.append("Authorization", "Token "+this.$root.token);
      fetch(this.api_url+'/content/pages/'+this.page_id+'/', {
          method : 'get',
          headers: headers,
      })
      .then((response) => {
          return response.json()
      })
      .then((jsonData) => {
        this.current_page = jsonData
        this.blocks = jsonData.blocks
        for(var i=0;i<this.blocks.length;i++){
          if(this.blocks[i].movie_type!='None'){
            this.blocks[i].movies = this.paginationMovies(this.blocks[i].movies,6)
          }
        }
      })
    },
    editContent(block){
      var self=this
      this.add_new = false
      this.current_block = block
      this.blocks.forEach(function(blk){
        blk.is_edit = false
        if(blk.id == block.id){
          if(blk.movie_type == 'Language')self.getLanguages();
          if(blk.movie_type == 'Category')self.getCategories();
          if(blk.movie_type == 'Meta Tags')self.getSpecs();
        }
      })
      const element = document.getElementById('blocks_'+block.id);
      if(element){
        element.scrollIntoView({ behavior: "smooth", block: 'end' });
      }
      setTimeout(function(){
        block.is_edit = true
      },50)

    },
    selectedContent(content){
      this.editContent(content)
    },
    selectFile(e,block) {
      block.is_edit=true
      block.value=true
      var img_file = e.target.files[0];
      if(img_file){
        block.image = ''
        var self=this
        setTimeout(function(){
          block.image = URL.createObjectURL(img_file);
        },10)
      }
    },
    changeMovieType(){
      if(this.current_block.movie_type == 'Language'){
        this.getLanguages()
      }
      else if(this.current_block.movie_type == 'Category'){
        this.getCategories()
      }
      else if(this.current_block.movie_type == 'Meta Tags'){
        this.getSpecs()
      }
    },
    getSpecs() {
      var headers = new Headers();
      headers.append("Authorization", "Token "+this.$root.token);
      fetch(this.api_url+'/movies/specs/', {
          method : 'get',
          headers: headers,
      })
      .then((response) => {
          return response.json()
      })
      .then((jsonData) => {
        this.specs = jsonData
        this.specs_ids = []
        if(this.current_block.id){
          for(var i=0;i<this.current_block.meta_tags.length;i++){
            this.specs_ids.push(this.current_block.meta_tags[i].spec)
          }
        }
      })
    },
    addSpec(spec,key){
      this.specs_ids.push(spec.id)
    },
    getCategories() {
      var headers = new Headers();
      headers.append("Authorization", "Token "+this.$root.token);
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
    getLanguages() {
      var headers = new Headers();
      headers.append("Authorization", "Token "+this.$root.token);
      fetch(this.api_url+'/movies/languages/', {
          method : 'get',
          headers: headers,
      })
      .then((response) => {
          return response.json()
      })
      .then((jsonData) => {
        this.languages = jsonData
      })
    },
    getMovies(filter='') {
      if(filter!=''){
        if(this.movie.type!='Select Type' && this.current_category.id){
          this.filter_movies = []
          filter = '?category='+this.current_category.id+'&type='+this.movie.type
        }else{
          return false
        }
      }
      var headers = new Headers();
      headers.append("Authorization", "Token "+this.$root.token);
      fetch(this.api_url+'/movies/movies/'+filter, {
          method : 'get',
          headers: headers,
      })
      .then((response) => {
          return response.json()
      })
      .then((jsonData) => {
        this.current_block.movies = jsonData
      })
    },
    addBlock() {
      var formdata = new FormData(document.getElementById('addBlock'))
      formdata.append('name',this.current_block.name)
      formdata.append('page',this.page_id)
      this.add_new = false
      var headers = new Headers();
      headers.append("Authorization", "Token "+this.$root.token);
      fetch(this.api_url+'/content/blocks/', {
          method : 'POST',
          body : formdata,
          headers: headers,
      })
      .then((response) => {
          return response.json()
      })
      .then((jsonData) => {
        if(jsonData.id){
          this.current_block = {specs:[], languages:[], categories:[], movies:[]}
          this.getCurrentPage()
        }
      })
    },
    updateBlock() {
      this.current_block.is_edit = false
      var formdata = new FormData(document.getElementById('blockForm'))
      formdata.append('name',this.current_block.name)
      formdata.append('page',this.current_block.page)
      var headers = new Headers();
      headers.append("Authorization", "Token "+this.$root.token);
      fetch(this.api_url+'/content/blocks/'+this.current_block.id+'/', {
          method : 'PUT',
          body : formdata,
          headers: headers,
      })
      .then((response) => {
          return response.json()
      })
      .then((jsonData) => {
        if(jsonData.id){
          this.current_block = {specs:[], languages:[], categories:[], movies:[]}
          this.getCurrentPage()
        }
      })
    },
  }
 

};
</script>
<style scoped>




.combonent_class{
  border:0;
  transform:scale(.666);
  width:100vw;
  transform-origin: left top;
  height: 150vh;
}
.flex-align{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.shadow-2 {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
textarea {
    /*resize: none;*/
    overflow: hidden;
    height:calc(80vh - 200px);
    min-height: 20px;
    border:1px solid lightgray;
    line-height:22px;
    border-radius:6px;
    padding:10px 20px!important;
    font-size:14px;
}

.watermark-align{
    text-align: center !important;
    border: 1px solid white;
    padding: 8px;
    cursor: pointer;
    border-radius: 5px;
    background-color: #0073a7;
    flex-grow: initial;
    white-space: nowrap;
    margin:0 6px 6px 0;
}
.watermark-align h6{
    font-size: 12px;
}
.edit-sec .active_class{
    box-shadow:inset 0px 0px 0px 2px #035478;
    
    background-color: #035478;
    transition:.2s;
    padding: 8px 25px;

    

}

</style>


<style>


  ::-webkit-scrollbar {
  width: 7px;
}



::-webkit-scrollbar-thumb {
  background: lightgray!important; 

}

.selected_content{
    border: 1px solid red;
    padding:10px;
    position:relative;
    cursor:pointer;  
}

.selected_content:after{
    content: '✎ Edit';
    position: absolute;
    top: 0;
    right: 0;
    color: white;
    font-size: 18px;
    border: 1px solid red;
    background-color: red;
    padding: 5px;
    line-height: 18px;
}

.edit-sec .btn:hover{
 transform:translate(1px);
 transition:.1s;
}
.edit-sec .btn{
 padding:3px 12px;
 font-size: 12px;
}


.active_sec{
  
  height:auto;
  opacity:1;
  transition:1s;


}
.hide_sec{

  height:0;
  opacity:0;


}

textarea.edit-input {
    overflow: hidden;
    height: calc(80vh - 200px);
    min-height: 20px;
    border: 1px solid #d3d3d3;
    line-height: 22px;
    border-radius: 6px;
    padding: 10px 15px!important;
    font-size: 14px;
   

}
input.edit-input {
    overflow: hidden;
   
    min-height: 20px;
    border: 1px solid #d3d3d3;
    line-height: 22px;
    border-radius: 6px;
    padding: 10px 15px!important;
    font-size: 14px;


}
select.edit-input {
    overflow: hidden;
 
    min-height: 20px;
    border: 1px solid #d3d3d3;
    line-height: 22px;
    border-radius: 6px;
    padding: 10px 15px!important;
    font-size: 14px;
  

}
.edit-sec label{
  font-size:14px;
  font-weight:400;
  color:gray;
     margin-bottom:5px;

}
.edit-sec .btn-secondary{
    color: black !important;
    background-color: #c1c1c1 !important;
    border: 1px solid #b3b3b3 !important;
}
</style>
