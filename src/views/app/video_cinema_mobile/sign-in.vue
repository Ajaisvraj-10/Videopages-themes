
<template>
  <div class="main-content capcee-login">
    
    <div class="site-wrapper"> 
      
        <div class="py-3 mb-3 flex-align w-100" style="gap:10px;">             
                
                    <router-link :to="edit?'':{name:'home'}" class="float-left">
                      <i class="fa fa-angle-left" style="font-size:24px;color:white;padding: 8px 20px;background: #2d2d2d;"></i>
                    </router-link>
                    <div class="header-logo">
                        <router-link :to="edit?'':{name:'home'}">
                            <img src="/video_cinema_mobile/images/logo.png" class="" style="max-width:100px;max-height:60px;">
                    </router-link>             
        </div>
             
        </div>
        
        <div class="login-am" v-if="crnt_tab=='login'">
              
            <div id="signInBorder" class="signin-2">
              <div class="text-left">
                
                <h5 class=" text-18 font-weight-500 mb-4" style="line-height:20px;" >
                  afqagfgf
                </h5>

                <h5 class=" text-left w-100 mt-4 font-weight-400" style="font-family: ui-sans-serif;">Hello Again!<br>Welcome<br>back</h5>

                <div class="mt-4 mb-5">
                  <form ref="loginUser" @submit.prevent="loginUser()">
                    <label>
                      
                      <input type="email" placeholder="Emailo ID or Mobile Number" name="email" value="" required>
                    </label>
                    <br>
                    <label>
                      
                      <input type="password" placeholder="Password" name="password" required>
                    </label>
                    <br>
                    <div class="text-center my-3">
                      
                        <span><a  style="color: #D9008D;">Forgot password?</a></span>
                      
                    </div>
                    <div>
                      <button type="submit" id="capcee" >Login</button>
                    </div>
                   
                    <div class="text-center my-3">
                      <span class="text-13 text-white mx-1">New to capcee?</span>
                      <span class="text-13  mx-1" style="color: #D9008D;" @click="crnt_tab='register'">Register</span>

                      
                    </div>
                  </form>
                </div>

                <div class="d-flex justify-content-center my-4" style="gap:20px;">
                  <h6 class="text-10 text-white font-weight-400">

                    Or continue with:
                  </h6>
                  
                </div>
                <div class="d-flex justify-content-center my-3" style="gap:20px;">
                  <img src="/video_cinema_mobile/images/apple.svg" style="width:40px;">
                  <img src="/video_cinema_mobile/images/google.svg" style="width:40px;">
                  <img src="/video_cinema_mobile/images/fb.svg" style="width:40px;">
                  <img src="/video_cinema_mobile/images/twitter.svg" style="width:40px;">
                </div>
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

              <div class="flex-align3 text-12 mb-1 text-light font-weight-400">
                   <input type="checkbox" class=" m-0" style="width:initial;">
                   <h6 class="text-12 text-light px-2 font-weight-500">Don't require OTP on this browser</h6>
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
              <div class="text-left">
                
                <h5 class=" text-left w-100 mb-4 pb-3 font-weight-400" style="font-family: ui-sans-serif;">Hello!<br>Signup to<br>get started</h5>
               
              </div>
              <form ref="registerUser" @submit.prevent="registerUser()">
                <label>
                  
                  <input type="text"  placeholder="Your Name" name="username" value="" required>
                </label>
                <label>
                  
                  <input type="email"  placeholder="Email ID" name="email" value="" required>
                </label>
                <br>
                <label>
                  
                  <input type="password" placeholder="Password" name="password1" required>
                </label>
                <br>
                <label>
                  
                  <input type="password" placeholder="Confirm Password" name="password" required>
                </label>
                <br>
                <div class="text-center  my-3">
                  
                    <span class="text-13 text-white">By proceeding you agree to our <a  style="color: #D9008D;">Terms of service & privacy policy </a></span>
                  
                </div>
                <div>
                    <button id="capcee" type="submit">Register</button>
                </div>
              </form>
             
              <div class="text-center my-3">
                <span class="text-13 text-white mx-1">Already registered?</span>
                <span class="text-13 cursor-pointer mx-1" style="color: #D9008D;" @click="crnt_tab='login'">Login</span>

                
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
  
  @import '/video_cinema_mobile/style/style.css';

</style>
<style>
body{
  background-color:#0f0617;
}
#capcee {
    width: 340px;
    height: 50px;
    font-size: 14px;
    color: lightgray;
    background: #d9008d;
    border: 0.5px solid #d9008d;
    border-radius: 30px;
    margin-top: 10px;
}
#capcee:hover{
background: white;
color:black;
}

.login-logo{
    width:150px!important;
}

.capcee-login .site-wrapper {
     background: #0f0617!important;
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


.capcee-login input {
   
    border: 1px solid #343333!important;
    background-color: initial;
    border-radius: 30px;
    border-width: 0.2px;
    height: 50px;
    width: 340px;
    margin-bottom: 15px;
    font-size: 12px;
    color: white;
    padding: 15px 25px;
    margin-top: 5px;
    box-shadow: 2px 2px 4px 1px #1f1f1f;
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

</style>
