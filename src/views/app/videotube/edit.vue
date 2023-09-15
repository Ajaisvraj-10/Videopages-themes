
<template>
  <div>
    <div class="row mx-0 edit-sec" style="height: 100vh;
    overflow: hidden;">
      <div class="col-lg-4 border-right " style="height:100vh;overflow:auto;padding:25px;">
          <div class="card border shadow-2 w-100 mb-4" style="max-height:80vh" v-if="current_block.id">
          <form id="blockForm"  @submit.prevent="updateBlock()">
            <div class="active_sec" >
              <div class="text-right  p-2" style="background-color: rgb(247, 247, 247);border-radius:10px 10px 0 0;">
                <div class="text-14 text-dark" style="position:absolute;left:10px;top:15px">
                  {{current_block.status?'Show':'Hide'}} <input type="checkbox" name="status" v-model="current_block.status" style="zoom:1.3">
                </div>
                <button type="submit" class="btn py-1 text-white " style="background-color:#0073a7;">Save</button>
              </div>
              <div class="  m-2">
                <input v-model="block.value" name="value" class="p-2 modal-input w-100" style="height:36px!important;" v-if="current_block.input_type=='text'">
                <!-- <div  class="textareaElement px-3 py-2 modal-input " contenteditable v-else-if="block.input_type=='textarea'">{{block.value}}</div> -->
                <textarea class="p-2 modal-input w-100" v-model="current_block.value" name="value" v-else-if="current_block.input_type=='textarea'" @keyup="$event.target.style.height=($event.target.scrollHeight)+'px'"></textarea>
                <input type="color" v-model="current_block.value" name="value" class="p-2  modal-input w-100" style="height:36px;" v-else-if="current_block.input_type=='color'">
              </div>
              
            </div>
            <div class="p-3" v-if="current_block.input_type=='file'">
                <img :src="current_block.value?current_block.image:api_url+current_block.image" class="rounded w-100">
                <div class="position-relative w-100" style="margin-top:-10px;">
                    <input type="file" name="image" class="p-0  modal-input w-100" style="opacity:0;position: absolute;left: 0;width: 100%;z-index: 9999;height: 100%;cursor:pointer;" @change="selectFile($event,current_block)">
                    <button class="btn text-white  w-100 py-3" type="button" style="background-color:#0073a7;border-radius:0 0 6px 6px; " >Change your image</button>
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
      </div>
      <div class="col-lg-8 px-0 ">
        <div class="mt-0" style="position:relative" v-if="themename=='videotube_web'">
          <HomePageNtflixWeb edit="1" :blocks="blocks" class="combonent_class" v-if="current_page.slug=='/'" @selectedContent="selectedContent"></HomePageNtflixWeb>
          <SignInPageNtflixWeb edit="1" :blocks="blocks" class="combonent_class" v-else-if="current_page.slug=='/sign-in'" @selectedContent="selectedContent"></SignInPageNtflixWeb>
          <SignUpPageNtflixWeb edit="1" :blocks="blocks" class="combonent_class" v-else-if="current_page.slug=='/sign-up'" @selectedContent="selectedContent"></SignUpPageNtflixWeb>
          <LoginHelpPageNtflixWeb edit="1" :blocks="blocks" class="combonent_class" v-else-if="current_page.slug=='/login-help'" @selectedContent="selectedContent"></LoginHelpPageNtflixWeb>
          <PlanPageNtflixWeb edit="1" :blocks="blocks" class="combonent_class" v-else-if="current_page.slug=='/plan'" @selectedContent="selectedContent"></PlanPageNtflixWeb>
          <MainPageNtflixWeb edit="1" :blocks="blocks" class="combonent_class" v-else-if="current_page.slug=='/main'" @selectedContent="selectedContent"></MainPageNtflixWeb>
          <WatchingPageNtflixWeb edit="1" :blocks="blocks" class="combonent_class" v-else-if="current_page.slug=='/watching/22'" @selectedContent="selectedContent"></WatchingPageNtflixWeb>
        </div>
      </div>

    </div>
  </div>
</template>
<script>

import SignInPageNtflixWeb from '/src/views/app/videotube/sign-in'
import HomePageNtflixWeb from '/src/views/app/videotube/home'
import PlanPageNtflixWeb from '/src/views/app/videotube/plan'

export default {
  components: {
    SignInPageNtflixWeb,
    SignUpPageNtflixWeb,
    HomePageNtflixWeb,
    LoginHelpPageNtflixWeb,
    PlanPageNtflixWeb,
    MainPageNtflixWeb,
    WatchingPageNtflixWeb,
  },
  data() {
    return {
      page_id:null,
      current_page:{slug:''},
      blocks:[],
      current_block:{},
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
      })
    },
    editContent(block){
      this.blocks.forEach(function(blk){
          blk.is_edit = false
      })
      var self=this
      const element = document.getElementById('blocks_'+block.id);
      if(element){
        element.scrollIntoView({ behavior: "smooth", block: 'end' });
      }
      setTimeout(function(){
        block.is_edit = true
        self.current_block = block
      },50)

    },
    selectedContent(content){
      this.current_block = content
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
          this.current_block = {}
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
</style>
