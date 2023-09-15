
<template>
  <div class="main-content videozone-login">
    
    <div class="site-wrapper pb-3"> 
        <div class="login-am" v-if="crnt_tab=='tab1'">
            <div class="my-3">
                <img src="/videozone_app/images/logo2.png" class="login-logo">
            </div>  
            <div id="signInBorder" class="signin-2">
              <p id="SignInTxt" class="mb-4">
                Sign in
              </p>
              <label>
                <strong>Emailor mobile phone number</strong>
                <input type="email" name="email" value="">
              </label>
              <br>
              <label>
                <div class="flex-align">
                    <strong>Password</strong>
                    <span><a href="#" id="password">Forgot your password?</a></span>
                </div>
                <input type="password" name="password" value="">
              </label>
              <div>
                <button id="videozone" @click="crnt_tab='tab2'">Sign in</button>
              </div>
              <div class="my-2">
                <h4 class="text-12 text-dark2 font-weight-500" style="line-height:18px;">
                    By continuing, you agree to the videozone<a class="text-info"> Conditions of Use and Privacy Notice.</a>
                </h4>
              </div>
                <div class="flex-align3 text-12 mb-2 text-dark2 font-weight-400">
                   <input type="checkbox" class=" m-0" style="width:initial;">
                   <h6 class="text-12 text-dark2 px-2 font-weight-500">Keep me signed in</h6>
                </div>
              <div id="createAccount">
                <h2><span>New to videozone?</span></h2>
                <button id="newAccount" name="newAcct" @click="crnt_tab='tab3'">Create your videozone account</button>
              </div>



            </div>
        </div>
        <div class="otp-am" v-if="crnt_tab=='tab2'">
            <div class="my-3">
                <img src="/videozone_app/images/logo2.png" class="login-logo">
            </div>  
            <div id="signInBorder" class="signin-2">
                <div class="mb-4">
                  <p id="SignInTxt" class="mb-3">
                    Two-Step Verification
                  </p>
                  <h6 class="text-dark2 fontweight-400  text-13">

                    For added security, please enter the One Time Password (OTP) that has been sent to a phone number ending in 320
                  </h6>
              </div>

              <label>
                <strong>Enter OTP</strong>
               
                <input type="email" name="email" value="" class="mb-1">
              </label>

              <div class="flex-align3 text-12 mb-1 text-dark2 font-weight-400">
                   <input type="checkbox" class=" m-0" style="width:initial;">
                   <h6 class="text-12 text-dark2 px-2 font-weight-500">Don't require OTP on this browser</h6>
              </div>
              <div>
                <router-link :to="{name:'main'}">
                    <button id="videozone">Sign in</button>
                </router-link>
              </div>
              <div class="my-2">
                <h4 class="text-12 text-dark2 font-weight-500" style="line-height:18px;">
                  <a class="text-info"> Didn't receive the OTP?</a>
                </h4>
                
              </div>
             
            </div>
        </div> 
        <div class="signin-am" v-if="crnt_tab=='tab3'">
            <div class="my-3">
                <img src="/videozone_app/images/logo2.png" class="login-logo">
            </div>  
            <div id="signInBorder" class="signin-2">
              <p id="SignInTxt" class="mb-4">
                Sign in
              </p>

              <label>
                <strong>Your name</strong>
               
                <input type="name" name="name" value="">
              </label>

              <br>
              <label>
                <strong>Email</strong>
               
                <input type="email" name="email" value="">
              </label>

              <br>
              <label>
                <strong>Password</strong>
               
                <input type="password" name="password" value="">
              </label>

              <br>
              <label>
                <strong>RE-enter Password</strong>
               
                <input type="password" name="password" value="">
              </label>

              <br>

             

              <div>
                <button id="videozone">Create your videozone account</button>
              </div>
              <div class="my-2">
                <h4 class="text-12 text-dark2 font-weight-500" style="line-height:18px;">
                    By creating an account, you agree to the videozone<a class="text-info"> Conditions of Use and Privacy Notice.</a>
                </h4>
                
              </div>
                

              <div id="createAccount">
                <h6 class="text-12 text-dark2">
                    <span>Already have an account?</span>
                    <a class="text-info" @click="crnt_tab='tab1'"> Sign in</a>
                </h6>

              </div>



            </div>
        </div>


    </div>
    
    <div class="extra-footer">
                <p class="links">
                    <a href="#" id="first" class="px-2"> Terms and Privacy Notice </a>
                    <a href="#" class="px-2">Send us feedback </a>
                    <a href="#" class="px-2">Help</a>
                </p>
                <p class="text-dark" id="special">
                  © 1996-2016, videozone.com, Inc. or its affiliates
                </p>
    </div>
  </div>
</template>
<script>

export default {
  metaInfo: {
    
  },
  data() {
    return {
    crnt_tab:"tab1",

    };
  },
 
};
</script>
<style scoped>
  
  @import '/videozone_app/style/style.css';

</style>
<style>
    #videozone{
  width:305px;
  height:33px;
  font-size:14px;

  background: linear-gradient(#F7DEA1, #F0C14D);
  border: 0.5px solid #898989;
  border-radius:3px;
  margin-top: 10px;
}
.extra-footer{
   min-height: 100px;
    background-color:white;
   position:relative;
    width: 100%;
    padding: 10px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.extra-footer:after{
    
    content:"";
    background: linear-gradient(to bottom,#fff,rgb(183 183 183 / 25%),#ebebeb);
    position:absolute;
    top:0;
    lefte:0;
    width:100%;
    height:3px;
}
#videozone:hover{
background: linear-gradient(#F5D68A, #EEBA36);
}

.login-logo{
    width:150px!important;
}

.videozone-login .site-wrapper {
     background: white!important;
        min-height: calc(100vh - 150px);
     
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items:center;
}

.videozone-login img{
  margin: auto;
  display: block;
}

#signInBorder{
  position: static;
  margin: 0 auto;
  border-color: #DDDDDD;
  border: 0.5px solid #DDDDDD;
  border-radius: 3px;
  width: 360px;
  padding: 25px 25px 15px 25px;
}

.videozone-login input{
  border: 1px solid #898989;

  border-radius: 3px;
  border-width: 0.2px;
  height: 30px;
  width: 305px;
  margin-bottom: 15px;
  font-size:12px;
  color:black;
  padding:10px;
    margin-top:5px;

}

.videozone-login input:focus{
  -webkit-box-shadow: 0px 0px 1.5px 1.5px rgba(231,118,0,0.9);
  -moz-box-shadow: 0px 0px 1.5px 1.5px rgba(231,118,0,0.9);
  box-shadow: 0px 0px 1.5px 1.5px rgba(231,118,0,0.9);
  outline:0;
}


#SignInTxt{

  font-size: 26px;
  color:black;
  font-weight:600;

}
.videozone-login strong{
    font-weight:600;
    font-size:13px;
  color:black;


}
.videozone-login a{
    font-weight:600;
    font-size:12px;

    
}
.videozone-login h2 {
   color: rgb(134, 134, 134);
   font-weight: normal;
   letter-spacing: 1px;
   font-size: 11.5px;
   width: 305px;
   text-align: center;
   border-top: 1px solid rgba(0, 0, 0, 0.1);
   border-bottom: 1px solid rgba(255, 255, 255, 0.3);
   line-height: 0.1em;
   margin: 10px 0 20px;
   margin-bottom: 5px;
}

.videozone-login h2 span {
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
  width:305px;
  height:33px;
  font-size:14px;
  border: 0.5px solid #aaaaaa;
  border-radius:3px;
}

#newAccount:hover{
  background: linear-gradient(#f5f6f8, #d9dce1);
}

.videozone-login #footer{
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
