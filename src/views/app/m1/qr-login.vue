
<template>
  <div class="main-content capcee-login">
    
    <div class="site-wrapper"> 
        <div class="flex-align w-100 p-3 ">
          <img src="/all-images/logo.png" style="max-width:120px;max-height:60px;">
          <router-link :to="edit?'':{name:'home'}">
            <img src="/all-images/close.png" style="width:20px;opacity:.5;">
          </router-link>
        </div>
        <div class="login-am" v-if="crnt_tab=='login'">
            <div id="signInBorder" class="signin-2">
              <div class="text-left mb-4">
                <h5 class=" login-head">
                  Login Account
                </h5>
                <h6 class="text-white">Welcome back. Good to see you again!</h6>
                <!--<h4 class=" text-18 mb-4" style="line-height:20px;" @click="selectContent(blocks[1])" :class="blocks[1].is_edit?'selected_content':''" :id="'blocks_'+blocks[1].id" v-show="blocks[1].status">
                  {{blocks[1].value}}
                </h4>-->
              </div>
              
              <!--<div class="google-login">
                <div class="google-login-child">
                   Scan QR Code
                </div>
              </div>-->
              <form ref="loginUser" @submit.prevent="loginUser()">
                <div class="text-center scanner border-light">
                  <qr-code 
                    :text="base_url+'/sign-in?theme=m1&device_token='+device_token+'&login='+login_code"
                    size="400"
                    color="#1c1c1c"
                    bg-color="#f7f9fa" 
                    error-level="L"
                    style="padding: 10px; border: 2px solid lightgray;border-radius:14px;"
                    >
                  </qr-code>
                  <h6 class="mt-2 text-white">Scan qr code and your account</h6>
                </div>
                <div class="mt-2">
                  <button type="button" class="btn btn-light foucs-btn w-100" style="opacity: .8;font-weight:600;min-height:40px;color:#000;">{{login_code}}</button>
                </div>
              </form>
             

            

            </div>
        </div>
    
    </div>

    
    
    
  </div>
</template>
<script>
export default {
  props: ['edit','blocks','current_block'],
  components:{
    
  },
  data() {
    return {
      start:false,
      current_page:{},
      menu_click:false,
      crnt_tab:"login",
      device_token:'',
      login_code : '',
      error_count:0,
    };
  },
  mounted(){
    if(this.edit){
      this.start = true
    }else{
        this.edit=false
        this.blocks = [{},{},{}]
        this.getPage()
    }
    
    if(localStorage.getItem("device_token")){
      if(localStorage.getItem("device_token").length>0){
        this.device_token = localStorage.getItem("device_token")
      }
    }
    if(this.device_token==''){
      this.device_token = this.generateToken()
      localStorage.setItem("device_token", this.device_token)
    }
    this.setLoginCode()
  },
  methods: {
    generateToken() {
      var token = Math.random().toString(36).slice(2);
      return token
    },
    setLoginCode() {
      var formdata = new FormData()
      formdata.append('device_token',this.device_token)
      var headers = new Headers();
      headers.append("Authorization", "Bearer "+this.$root.admin_token);
      fetch(this.api_url+'/users/tv_login/', {
          method : 'post',
          headers: headers,
          body : formdata
      })
      .then((response) => {
          return response.json()
      })
      .then((jsonData) => {
        if(jsonData.success){
          this.login_code = jsonData.code
          this.checkLogin2()
        }else{
          this.showAlert('Something Wrong!','red')
        }
      })
    },
    checkLogin2() {
      var formdata = new FormData()
      formdata.append('device_token',this.device_token)
      var headers = new Headers();
      headers.append("Authorization", "Bearer "+this.$root.admin_token);
      fetch(this.api_url+'/users/tv_login/', {
          method : 'put',
          headers: headers,
          body : formdata
      })
      .then((response) => {
          if(response.status!=200 && this.error_count<5){
            var self = this
            setTimeout(function(){
              self.error_count++
              self.checkLogin2()
            },2000)
          }else{
            return response.json()
          }
      })
      .then((jsonData) => {
        if(jsonData.success){
          this.error_count = 0
          if(jsonData.is_logged){
            var userdata = jsonData.user
            if(userdata.access){
              localStorage.setItem("userInfo", JSON.stringify(userdata));
              this.$root.token = userdata.access
              if(this.$root.token==''){
                  localStorage.removeItem("userInfo");
              }else{
                window.location.href = '/';
              }
            }else{
              this.showAlert('Something Wrong!','red')
              localStorage.removeItem("userInfo");
            }
          }else{
            var self = this
            setTimeout(function(){
              self.checkLogin2()
            },5000)
          }
        }else{
          this.showAlert('Something Wrong!','red')
        }
      })
      .catch((error) => {
        alert(error)
        var self = this
        setTimeout(function(){
          self.checkLogin2()
        },2000)
      });

    },
    getPage() {
      var headers = new Headers();
      headers.append("Authorization", "Bearer "+this.$root.admin_token);
      fetch(this.api_url+'/content/pages_contents/?theme='+theme_name+'&page=/sign-in', {
          method : 'get',
          headers: headers,
      })
      .then((response) => {
          return response.json()
      })
      .then((jsonData) => {
        this.current_page = jsonData
        this.blocks = jsonData.blocks
        this.start = true
      })
    },
    selectContent(block){
        if(this.edit){
            this.blocks.forEach(function(blk){
                blk.is_edit = false
            })
            block.is_edit=true
            this.$emit('selectedContent', block)
        }
    },
  }

};
</script>
<style scoped>
  
  @import '/m1/style/style.css';
  @import '/m1/style/load-style.css';


</style>
<style>

.login-logo{
    width:150px!important;
}

.capcee-login .site-wrapper {
     background: #0f171e!important;
       height:100vh;
       overflow:auto;
     
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items:center;
}


#signInBorder{
 
  margin: 0 auto;
 
  width: 380px;
  min-height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    justify-content: center;

}

.capcee-login h6{
  
    font-size:13px;
    color:black;


}
.capcee-login a{
    font-weight:600;
    font-size:12px;

    
}
.capcee-login h2 {
   color: rgb(134, 134, 134);
   font-weight: normal;
   letter-spacing: 1px;
   font-size: 11.5px;
   width: 340px;
   text-align: center;
   border-top: 1px solid rgba(0, 0, 0, 0.1);
   border-bottom: 1px solid rgba(255, 255, 255, 0.3);
   line-height: 0.1em;
   margin: 10px 0 20px;
   margin-bottom: 5px;
}

.capcee-login h2 span {
    background:#fff;
    padding:0 10px;
}


.back-btn{

  width:20px!important;
  opacity:.6;

}
.login-head{
  margin-bottom:10px;
  font-weight:500;
  font-size:24px;
}

.
@media (max-width: 990px) {
  .videofy-signin-logo{
    width: 100%;
  }
}
@media (max-width: 520px) {

  .back-btn{
  

  width:15px!important;
}
.login-head{
 
  font-size:20px;
}
}

@media (max-width: 420px) {
  #signInBorder {
 
    width: 360px;
  }
   .capcee-login input {
 
    width: 360px;
    font-size:16px;
  }
    #capcee {
 
    width: 360px;
  }
  .login-opt{
  font-size:11px!important;
  }
  .login-opt span{
  font-size:11px!important;
  }
  .login-opt a{
  font-size:11px!important;
  }
}
@media (max-width: 380px) {
  #signInBorder {
 
    width: 330px;
  }
   .capcee-login input {
    height:40px;
    width: 330px;
  }
    #capcee {
 
    width: 330px;
  }
}
.scanner img{
  border-radius:8px;
}
</style>
