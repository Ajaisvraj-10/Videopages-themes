
<template>
  <div class="main-content capcee-login">
    
    <div class="site-wrapper pt-5" v-if="start">
        <div class="" style="position:absolute;top:2%;left:3%;"> 
          <router-link to="/" class="flex-align2">
            <img src="/videostar_mobile/images/prev.png"  style="width:16px;"></i><h6 class="text-white ml-2" style="font-size:16px;">back</h6>
          </router-link>
        </div>
        <img src="/videostar_mobile/images/logo.png" class="mb-4" style="max-width:200px;max-height:80px;">
        <div class="login-am" v-if="crnt_tab=='login'">
              
            <div id="signInBorder" class="signin-2">
              <div class="text-center">
               
                <h4 class=" text-20 font-weight-500 mb-5" style="line-height:24px;" @click="selectContent(blocks[1])" :class="blocks[1].is_edit?'selected_content':''" :id="'blocks_'+blocks[1].id" v-show="blocks[1].status">
                  {{blocks[1].value}}
                </h4>
                
              </div>

              <form ref="loginUser" @submit.prevent="loginUser()">
                <label>
                  <h6 class="text-white">Emailo ID or Mobile Number</h6>
                  <input type="email" name="email" value="" required>
                </label>
                
                <label>
                  <h6 class="text-white">Password</h6>
                  <input type="password" name="password" required>
                </label>
                
                <div class="text-center mt-3 mb-5">
                  
                    <span><a  style="color: #1f80e0;">Forgot password?</a></span>
                  
                </div>
                <div>
                  <button type="submit" id="capcee" >Login</button>
                </div>
              </form>
             
              <div class="text-center my-3">
                <span class="text-13 text-white mx-1">New to capcee?</span>
                <span class="text-13 cursor-pointer mx-1" style="color: #1f80e0;" @click="crnt_tab='register'">Register</span>

                
              </div>
               <div class="d-flex justify-content-center my-4" style="gap:20px;">
                  <h6 class="text-10 text-white font-weight-600" style="width: 35px;
                    height: 35px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #192b45;">

                    Or
                  </h6>
                  
                </div>
              <div class="d-flex justify-content-center my-3" style="gap:20px;">
                  <img src="/videostar_mobile/images/apple.svg" style="width:40px;">
                  <img src="/videostar_mobile/images/google.svg" style="width:40px;">
                  <img src="/videostar_mobile/images/fb.svg" style="width:40px;">
                  <img src="/videostar_mobile/images/twitter.svg" style="width:40px;">
                </div>
               



            </div>
        </div>
        <!--<div class="otp-am" v-if="crnt_tab=='otp'">
             
            <div id="signInBorder" class="signin-2">
                <div class="mb-3">
                  <p id="SignInTxt" class="mb-3">
                    Two-Step Verification
                  </p>
                  <h6 class="text-white fontweight-400  text-13">

                    For added security, please enter the One Time Password (OTP) that has been sent to a phone number ending in 320
                  </h6>
              </div>

              <label>
                <strong>Enter OTP</strong>
               
                <input type="email" name="email" value="" class="mb-1">
              </label>

              <div class="flex-align3 text-12 mb-1 text-white font-weight-400">
                   <input type="checkbox" class=" m-0" style="width:initial;">
                   <h6 class="text-12 text-white px-2 font-weight-500">Don't require OTP on this browser</h6>
              </div>
              <div>
                <router-link to="main">
                    <button id="capcee">Sign in</button>
                </router-link>
              </div>
              <div class="my-2">
                <h4 class="text-12 text-dark2 font-weight-500" style="line-height:18px;">
                  <a class="text-info"> Didn't receive the OTP?</a>
                </h4>
                
              </div>
             
            </div>
        </div> -->
        <div class="signin-am" v-if="crnt_tab=='register'">
            <div id="signInBorder" class="signin-2">
              <div class="text-center">
                <p id="SignInTxt" class="mb-3">
                  Create a new account
                </p>
                <h4 class=" text-13 mb-4" style="line-height:20px;">
                  Create an account to continue enjoying uninterrupted video and personalised experience
                </h4>
                
              </div>

              <form ref="registerUser" @submit.prevent="registerUser()">
                <label>
                  <h6 class="text-white">Your Name</h6>
                  <input type="text" name="username" value="" required>
                </label>
                <label>
                  <h6 class="text-white">Email ID</h6>
                  <input type="email" name="email" value="" required>
                </label>
                
                <label>
                  <h6 class="text-white">Password</h6>
                  <input type="password" name="password1" required>
                </label>
                
                <label>
                  <h6 class="text-white">Confirm Password</h6>
                  <input type="password" name="password" required>
                </label>
                
                <div class="text-center  my-3">
                  
                    <span class="text-13 text-white">By proceeding you agree to our <a  style="color: #1f80e0;">Terms of service & privacy policy </a></span>
                  
                </div>
                <div>
                    <button id="capcee" type="submit">Register</button>
                </div>
              </form>
             
              <div class="text-center my-3">
                <span class="text-13 text-white mx-1">Already registered?</span>
                <span class="text-13 cursor-pointer mx-1" style="color: #192b452e;" @click="crnt_tab='login'">Login</span>

                
              </div>
              
                



            </div>
        </div>


    </div>
    
    
  </div>
</template>
<script>
export default {
  props: ['edit','blocks','current_block'],
  data() {
    return {
      start:false,
      current_page:{},
      menu_click:false,
      crnt_tab:"login",
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
  },
  methods: {
    registerUser() {
      var formdata = new FormData(this.$refs['registerUser'])
      fetch(this.api_url+'/users/users/', {
          method : 'post',
          body : formdata
      })
      .then((response) => {
          return response.json()
      })
      .then((jsonData) => {
        if(jsonData.is_active){
          this.loginUser(true)
        }else{
          this.showAlert('Something Wrong!')
        }
      })
    },
    loginUser(new_user=false) {
      if(new_user){
        var formdata = new FormData(this.$refs['registerUser'])
      }else{
        var formdata = new FormData(this.$refs['loginUser'])
      }
      fetch(this.api_url+'/users/obtain_token/', {
          method : 'post',
          body : formdata
      })
      .then((response) => {
          return response.json()
      })
      .then((jsonData) => {
        if(jsonData.access){
          localStorage.setItem("userInfo", JSON.stringify(jsonData));
          this.$root.token = jsonData.access
          if(this.$root.token==''){
              localStorage.removeItem("userInfo");
          }else{
            window.location.href = '/';
          }
        }else{
          this.showAlert(jsonData.detail)
            localStorage.removeItem("userInfo");
        }
      })
    },
    getPage() {
      var headers = new Headers();
      headers.append("Authorization", "Token "+this.$root.token);
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
  
  @import '/videostar_mobile/style/style.css';

</style>
<style>
.capcee-login{
  background-image: linear-gradient(0deg, #180d2cb5, #070707b8), url(/videostar_mobile/images/bg-gif2.gif)!important;
    backdrop-filter: blur(5px);
    background: no-repeat;
    background-size: cover;
}
    #capcee{
  width:200px;
  height:48px;
  font-size:20px;
  color:lightgray;
  background: initial;
  border: 0.5px solid #898989;
  border-radius:30px;
  display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px auto;
}

#capcee:hover{
background: white;
color:black;
}

.login-logo{
    width:150px!important;
}

.capcee-login .site-wrapper {
     background: initial!important;
     backdrop-filter: blur(35px);
     z-index: 99999;
    position: relative;
       height:100vh;
       overflow:auto;
     
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items:center;
}

#signInBorder{
 
  margin: 0 auto;
 
  width: 340px;

}

.capcee-login input{
  border:none;
  border-bottom: 2px solid #1f80e0!important;
  background-color:initial;
  border-radius: 0px;
  border-width: 0.2px;
  height: 35px;
  width: 340px;
  margin-bottom: 5px;
  font-size:12px;
  color:white;
  padding:10px;
    margin-top:5px;

}

.capcee-login input:focus{
  -webkit-box-shadow: 0px 0px 1.5px 1.5px rgba(231,118,0,0.9);
  -moz-box-shadow: 0px 0px 1.5px 1.5px rgba(231,118,0,0.9);
  box-shadow: 0px 0px 1.5px 1.5px rgba(231,118,0,0.9);
  outline:0;
}


#SignInTxt, #blocks_9{

  font-size: 16px;
  color:white;
  font-weight:600;

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

#createAccount{
  margin-top: 30px;
}

#newAccount{
  background: linear-gradient(#f6f7f9, #e7e9ec);
  margin-top: 10px;
  margin-bottom: 20px;
  width:340px;
  height:33px;
  font-size:14px;
  border: 0.5px solid #aaaaaa;
  border-radius:3px;
}

#newAccount:hover{
  background: linear-gradient(#f5f6f8, #d9dce1);
}

.capcee-login #footer{
  border: 0;
   height: 0;
   border-top: 1px solid rgba(0, 0, 0, 0.1);
   border-bottom: 1px solid rgba(255, 255, 255, 0.3);
   margin-top: 30px;
}





 .links{
  font-size: 10px;
  text-align: center;
  padding-left: 15px;
}


#special{
  font-size: 11px;
}
form label{
  margin-top:15px;
}
</style>
