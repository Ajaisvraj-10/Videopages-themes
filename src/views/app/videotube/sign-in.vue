
<template>
  <div class="main-content capcee-login">
    
        <div class="site-wrapper"> 
       
        <div class="p-3 w-100" style="display:flex;justify-content:flex-end;">             
                
                    <router-link to="/" class="float-left" style="width: 35px;
                      height: 35px;
                      background-color: #3f3f3f;
                      border-radius: 50%;
                      display: flex;
                      align-items: center;
                      justify-content: center;"
                    >
                      <img src="/videotube/images/close2.png" style="width:15px;"></i>
                    </router-link>
                    
               
        </div>
        <div class="login-am" v-if="crnt_tab=='login'">
              
            <div id="signInBorder" class="signin-2">
              <h5 class="text-20 text-center font-weight-400 text-white">Welcome back!</h5>
              <h5 class="text-20 text-center font-weight-400 text-white">Login below.</h5>

              <div class="text-center">
                
                <h4 class=" text-24 font-weight-500 my-3 text-white" style="line-height:30px;">
                  Capcee
                </h4>
                <div class="py-3" style="display: flex;
                  gap: 20px;
                  flex-wrap: wrap;
                  justify-content: center;">
                  <div class="facebook-login">
                    <img src="/videotube/images/fb.png">
                    Continue with Facebook
                  </div>
                  <div class="google-login">
                    <img src="/videotube/images/google.png">
                    Login with Google
                  </div>
                </div>
                <div class="register-tab my-3">
                      <span class="not-active-register" @click="crnt_tab='register'">Sign Up</span>
                      <span class="active-register" >Login</span>
 
                </div>
                <div class="my-5">
                  
                  <form ref="loginUser">
                    <label>
                      
                      <input type="email" placeholder="Emailo ID or Mobile Number" name="email" value="" required>
                    </label>
                    <br>
                    <label>
                     
                      <input type="password" placeholder="Password" name="password" required>
                    </label>
                    <br>
                    
                    <div>
                      <button type="submit" id="capcee" >Login</button>
                    </div>
                    <div class="text-center my-3">
                      
                        <span><a  style="color: #a785ff;">Forgot password?</a></span>
                      
                    </div>
                   
                    
                  </form>
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
              <h5 class="text-20 text-center font-weight-400 text-white">Welcome!</h5>
              <h5 class="text-20 text-center font-weight-400 text-white">Create a new account</h5>
              
              <div class="register-tab pt-5">
                      <span class="active-register">Sign Up</span>
                      <span class="not-active-register" @click="crnt_tab='login'">Login</span>
 
              </div>
              <div class="my-5">
                <form ref="registerUser">
                  <label>
                    
                    <input type="text" placeholder="Your Name" name="username" value="" required>
                  </label>
                  <label>
                   
                    <input type="email" placeholder="Email ID" name="email" value="" required>
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
                  
                  <div>
                      <button id="capcee" type="submit">Register</button>
                  </div>
                  <div class="text-center  my-3">
                    
                      <span class="text-13 text-white">
                        <input type="checkbox" style="width: auto;margin:0;height:auto;">
                        By proceeding you agree to our 
                        <a style="color: #0082e9;">Terms of service & privacy policy </a>
                      </span>
                    
                  </div>
                </form>
              </div>
             
              
            </div>
        </div>


    </div>
  </div>
</template>
<script>

export default {
  metaInfo: {
    title: "VideoTube"
  },
  data() {
    return {
       crnt_tab:"login",
        
    };
  },
 

};
</script>
<style scoped>
  @import '/videotube/style/style2.css';
  @import '/videotube/style/style.css';

</style>
<style>

.capcee-login{
  background-image: linear-gradient(0deg, #180d2cb5, #070707b8), url(/youtube/images/bg-gif.gif)!important;
    backdrop-filter: blur(5px);
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
 
  width: 460px;

}

.capcee-login input{
  border:none;
  border-bottom: 2px solid lightgray!important;
  background-color:initial;
  border-radius: 0px;
  border-width: 0.2px;
  height: 35px;
  width: 460px;
  margin-bottom: 15px;
  font-size:14px;
  color:white;
  font-weight:600;
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
   width: 460px;
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
  width:460px;
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
.facebook-login{
display:flex;
gap:10px;
align-items:center;
justify-content:center; 
margin:0px auto;
background-color: #1484b7;
    padding: 6px;
    min-width:220px;
    border-radius: 35px;
    font-weight: 500;
    color: white;
  
}
.google-login{
display:flex;
gap:10px;
align-items:center;
justify-content:center; 
margin:0 auto;
background-color: #f44336;
    padding: 6px;
    min-width:220px;
    border-radius: 35px;
    font-weight: 600;
    color: #fff;
  
}
.facebook-login img{
  
  height:30px!important;
  padding:3px;
  
}
.google-login img{
  
  height:30px!important;
  padding:3px;
  
}
.register-tab {
    display: flex;
}
span.active-register {
    width: 100%;
    color: white;
    font-size: 18px;
    font-weight: 400;
    border-bottom: 3px solid #f44336;
    padding-bottom: 8px;
    text-align:center;
    cursor:pointer;
}
span.not-active-register {
    width: 100%;
    color: gray;
    font-size: 18px;
    font-weight: 400;
    border-bottom: 1px solid gray;
    padding-bottom: 8px;
    text-align:center;
    cursor:pointer;
}


@media screen and (max-width: 500px) {
  #signInBorder{
 
  width: 340px;

  }

#newAccount{

  width:340px;
  }
  .capcee-login h2 {

   width: 340px;
   }
   .capcee-login input{
  
  width: 340px;
  }
}
</style>
