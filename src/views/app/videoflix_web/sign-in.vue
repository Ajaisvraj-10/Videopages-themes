
<template>
    <div class="main-content capcee-login">
      
      <div class="site-wrapper" v-if="start"> 
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
                  <p>Welcome back. Good to see you again!</p>
                  <!--<h4 class=" text-18 mb-4" style="line-height:20px;" @click="selectContent(blocks[1])" :class="blocks[1].is_edit?'selected_content':''" :id="'blocks_'+blocks[1].id" v-show="blocks[1].status">
                    {{blocks[1].value}}
                  </h4>-->
                </div>
                <div class="google-login">
                  <div class="google-login-child">
                    <img src="/all-images/google.png"> Sign Up with Google
                  </div>
                  <div class="google-login-child">
                    <img src="/all-images/apple-white.png"> Sign Up with Apple ID
                  </div>
                </div>
                <div class="or-border">or</div>
                <form ref="loginUser" @submit.prevent="loginUser()">
                  <label>
                    <label>Email*</label>
                    <input type="email" name="email" placeholder="enter your email" value="" required>
                  </label>
                  <br>
                  <br>
                  <label>
                    <label>Password*</label>
                    <input type="type your password" placeholder="Password" name="password" required>
                  </label>
                  <br>
                  <div class="text-right mb-4">

                      <span><a  style="color: lightgray;">Forgot your password?</a></span>
                    
                </div>
                  <div>
                    <button type="submit" id="capcee" >Login</button>
                  </div>
                </form>
               
                <div class="text-center my-3">
                  <span class="text-12  mx-1 login-opt" style="color:lightgray;">New to capcee?</span>
                  <span class="text-12 cursor-pointer mx-1 login-opt font-weight-600" style="color: white;" @click="crnt_tab='register'">Register</span>
  
                  
                </div>
  
                  <!--<div class="d-flex justify-content-center my-4" style="gap:20px;">
                    <h6 class="text-10 text-white font-weight-600" style="width: 35px;
                      height: 35px;
                      border-radius: 50%;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      background-color: #1d1525;">
  
                      Or
                    </h6>
                    
                  </div>
                  <div class="d-flex justify-content-center my-3" style="gap:20px;">
                    <img src="/videofy/images/apple.svg" style="width:40px;">
                    <img src="/videofy/images/google.svg" style="width:40px;">
                    <img src="/videofy/images/fb.svg" style="width:40px;">
                    <img src="/videofy/images/twitter.svg" style="width:40px;">
                  </div>-->
  
  
              </div>
          </div>
          <!--<div class="otp-am" v-if="crnt_tab=='otp'">
               
              <div id="signInBorder" class="signin-2">
                  <div class="mb-3">
                    <p id="SignInTxt" class="mb-3">
                      Two-Step Verification
                    </p>
                    <h6 class="text-white fontweight-360  text-13 login-opt">
  
                      For added security, please enter the One Time Password (OTP) that has been sent to a phone number ending in 320
                    </h6>
                </div>
  
                <label>
                  <strong>Enter OTP</strong>
                 
                  <input type="email" name="email" value="" class="mb-1">
                </label>
  
                <div class="flex-align3 text-12 mb-1 text-light font-weight-360">
                     <input type="checkbox" class=" m-0" style="width:initial;">
                     <h6 class="text-12 text-light px-2 font-weight-380">Don't require OTP on this browser</h6>
                </div>
                <div>
                  <router-link to="main">
                      <button id="capcee">Sign in</button>
                  </router-link>
                </div>
                <div class="my-2">
                  <h4 class="text-12 text-dark2 font-weight-380" style="line-height:18px;">
                    <a class="text-info"> Didn't receive the OTP?</a>
                  </h4>
                  
                </div>
               
              </div>
          </div> -->
          <div class="signin-am" v-if="crnt_tab=='register'">
              <div id="signInBorder" class="signin-2">
                <div class="text-left mb-4">
                  <h5 class="login-head">
                   SignUp to Subscribe
                  </h5>
                  <p>Welcome. Create Your Account!</p>
  
                  
                  
                </div>
  
                <form ref="registerUser" @submit.prevent="registerUser()">
                  <label>
                    <label>Username*</label>
                    <input type="text" name="username" placeholder="Your Name" value="" required>
                  </label>
                  <br>
                  <br>
  
                  <label>
                    <label>Email*</label>
                    <input type="email" name="email" placeholder="Email ID" value="" required>
                  </label>
                  <br>
                  <br>
                  <label>
                    <label>Password*</label>
                    <input type="password" name="password1" placeholder="Password" required>
                  </label>
                  <br>
                  <br>
                  <label>
                    <label>Confirm password*</label>
                    <input type="password" name="password" placeholder="Confirm Password" required>
                  </label>
                  <br>
                  <br>
                  <!--<div class="text-right  mt-1 mb-4">
                      <span class="text-10 login-opt" style="color:lightgray;">By proceeding you agree to our <a  style="color: #fff;font-weight-500">Terms of service & privacy policy </a></span>
                  </div>-->
                  <div>
                      <button id="capcee" type="submit">Register</button>
                  </div>
                </form>
               
                <div class="text-center my-3">
                  <span class="text-12 text-white mx-1 login-opt" style="color:lightgray;">Already registered?</span>
                  <span class="text-12 cursor-pointer mx-1 font-weight-600 login-opt" style="color: #fff;" @click="crnt_tab='login'">Login</span>
  
                  
                </div>
               <!-- <div class="d-flex justify-content-center my-4" style="gap:20px;">
                    <h6 class="text-10 text-white font-weight-600" style="width: 35px;
                      height: 35px;
                      border-radius: 50%;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      background-color: #1d1525;">
  
                      Or
                    </h6>
                    
                </div>
  
                <div class=" my-3" >
                    
                    <button  class=" w-100 d-flex align-items-center justify-content-center" style="border-radius:6px;background-color:white;color:#e91e63;">
                      <img src="/videofy/images/google.svg" style="width:45px;heoght:45px;"> 
                      Sign in
                    </button>
                    
                </div>-->
                
  
  
  
              </div>
          </div>
  
  
      </div>
  
      <div class="site-wrapper" v-else> 
          <div class="flex-align w-100 p-3 ">
            <div class="animated-background height4" style="width:120px;"></div>
            <div class="animated-background height3 width3" ></div>
          </div>
          <div class="login-am" v-if="crnt_tab=='login'">
              <div id="signInBorder" class="signin-2">
                <div class="text-left mb-4">
                  <div class="animated-background height3" style="width:180px;"></div>
                  <div class="animated-background height2 mt-2" style="width:260px;"></div>
  
                </div>
                <div class="google-login">
                  <div class="animated-background height5 mb-1" style="width:100%;"></div>
                  <div class="animated-background height5 mb-1" style="width:100%;"></div>
  
  
                </div>
                <div class="animated-background my-3" style="height:5px;width:100%;"></div>
                <form ref="loginUser" @submit.prevent="loginUser()">
                  <label class="w-100">
                    <div class="animated-background height2 width7"></div>
                    <div class="animated-background height5 mt-1" style="width:100%;"></div>
                  </label>
                  <br>
                  <br>
                  <label class="w-100">
                    <div class="animated-background height2 width7"></div>
                    <div class="animated-background height5 mt-1" style="width:100%;"></div>
                  </label>
                  <br>
                  <div class="text-right mb-4" style="display: flex;justify-content: flex-end;">
                    <div class="animated-background height2" style="width:180px;"></div>
                  </div>
                  <div class="animated-background height6" style="width:100%;"></div>
                </form>
                <div class="text-center my-3">
                  <div class="animated-background height2 mx-auto" style="width:180px;"></div>
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
        var headers = new Headers();
        headers.append("Authorization", "Bearer "+this.$root.admin_token);
        fetch(this.api_url+'/users/users/', {
            method : 'post',
            headers: headers,
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
        var headers = new Headers();
        headers.append("Authorization", "Bearer "+this.$root.admin_token);
        fetch(this.api_url+'/users/obtain_token/', {
            method : 'post',
            headers: headers,
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
    
  @import '/videoflix_web/style/style.css';
  
  
  </style>
  <style>
  
  #capcee {
      width: 380px;
      height: 46px;
      font-size: 18px;
      color: #fff;
     outline:none;
      border: none;
      font-weight: 500;
      border-radius:10px;
      margin-top: 10px;
      cursor: pointer;
      background: linear-gradient(45deg, rgb(255, 0, 0), rgb(67, 18, 18));
  }
  #capcee:hover{
      background: linear-gradient(45deg, #fff, lightgray);
  
  color:black;
  }
  
  .login-logo{
      width:150px!important;
  }
  
  .capcee-login .site-wrapper {
       background: #000!important;
         height:100vh;
         overflow:auto;
       
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items:center;
  }
  img {
    max-width: 6%;
}
  
   
  #signInBorder{
   
    margin: 0 auto;
  
    width: 380px;
    min-height: calc(100vh - 80px);
      display: flex;
      flex-direction: column;
      justify-content: center;

  }
  input:focus {
      background-color: pink;
  }
  .capcee-login label{
    color:white;
    font-size:14px!important;
}
  .capcee-login input{
    border: 1px solid rgb(255, 0, 0)!important;
    background-color:initial;
    border-radius: 8px;
    border-width: 0.2px;
    height: 40px;
    width: 380px;
    margin-top: 20px!important;
    margin-bottom:10px;
    font-size:14px;
  
    color:white;
    padding:10px 15px;
      margin-top:8px!important;
  
  }
  
  .capcee-login input:focus{
    
    box-shadow:none;
    outline:0;
  }
  
  
  .capcee-login input:-webkit-autofill {
    opacity:.7;
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
  .back-btn{
  
    width:20px!important;
    opacity:.6;
  
  }
  .login-head{
    margin-bottom:10px;
    font-weight:500;
    font-size:24px;
  }
  .videofy-signin-logo{
    position:fixed;
    top:0px;
    left:0px;
    padding:15px;
    height:80px;
    display: flex;
      align-items: center;
      gap: 20px;
      background: black;

  }
  .google-login{
    display:flex;
    align-items:center;
    justify-content:center;
    gap:10px;
    flex-direction:column;
}
  .google-login-child{
    padding:10px;
    height:42px;
    border:1px solid rgb(255, 0, 0);
    border-radius:10px;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:10px;
    width:100%;
    font-size:14px;
    cursor:pointer;
  }
  .or-border{
    width:100%;
    margin:20px 0;
    text-align:center;
    position:relative;
  }
  .or-border:before{
    content:"";
    position:absolute;
    left:0;
    top:50%;
    transform:traslateY(-50%);
    width:calc(50% - 15px);
    height:1px;
    background-color:gray;
  }
  .or-border:after{
    content:"";
    position:absolute;
    right:0;
    top:50%;
    transform:traslateY(-50%);
    width:calc(50% - 15px);
    height:1px;
    background-color:gray;
  }
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
  </style>
  