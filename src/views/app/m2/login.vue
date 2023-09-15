
<template>
  <div class="main-content capcee-login">
    <div class="site-wrapper"> 
        <div class="flex-align w-100 p-3 ">
          <img src="/all-images/logo.png" style="max-width:120px;max-height:60px;">
          <router-link to="/">
            <img src="/all-images/close.png" style="width:16px;opacity:.5;">
          </router-link>
        </div>
        <div class="login-am" v-if="crnt_tab=='login'">
            <div id="signInBorder" class="signin-2">
              <div class="text-left mb-4">
                <h5 class=" login-head">
                  Login Account
                </h5>
                <p>Welcome back. Good to see you again!</p>
              </div>
              <div class="google-login">
                <div class="google-login-child">
                  <img src="/all-images/google.png" width="25"> Sign Up with Google
                </div>
                <div class="google-login-child">
                  <img src="/all-images/apple-dark.png" width="25"> Sign Up with Apple ID
                </div>
              </div>
              <div class="or-border">or</div>
              <form >
                <label>
                  <label>Email*</label>
                  <input type="email" name="email" placeholder="enter your email" value="" required>
                </label>
                <br>
                <label>
                  <label>Password*</label>
                  <input type="type your password" placeholder="Password" name="password" required>
                </label>
                <br>
                <div class="text-right mb-4">
                  
                    <span><a  style="color:gray;">Forgot your password?</a></span>
                  
                </div>
                <div>
                  <button type="submit" id="capcee" >Login</button>
                </div>
              </form>
             
              <div class="text-center my-3">
                <span class="text-12  mx-1 login-opt" style="color:gray">New to capcee?</span>
                <span class="text-12 cursor-pointer mx-1 login-opt font-weight-600" style="color: gray;" @click="crnt_tab='register'">Register</span>

                
              </div>

            </div>
        </div>
       
        <div class="signin-am" v-if="crnt_tab=='register'">
            <div id="signInBorder" class="signin-2">
              <div class="text-left mb-4">
                <h5 class="login-head">
                 SignUp to Subscribe
                </h5>
                <p>Welcome. Create Your Account!</p>

                
              </div>

              <form>
                <label>
                  <label>Username*</label>
                  <input type="text" name="username" placeholder="Your Name" value="" required>
                </label>
                <br>

                <label>
                  <label>Email*</label>
                  <input type="email" name="email" placeholder="Email ID" value="" required>
                </label>
                <br>
                <label>
                  <label>Password*</label>
                  <input type="password" name="password1" placeholder="Password" required>
                </label>
                <br>
                <label>
                  <label>Confirm password*</label>
                  <input type="password" name="password" placeholder="Confirm Password" required>
                </label>
                <br>
                <div class="text-right  mt-1 mb-4">
                    <span class="text-10 login-opt" style="color:gray">By proceeding you agree to our <a  style="color: #fff;font-weight-500">Terms of service & privacy policy </a></span>
                </div>
                <div>
                    <button id="capcee" type="submit">Register</button>
                </div>
              </form>
             
              <div class="text-center my-3">
                <span class="text-12 text-gray mx-1 login-opt" style="color:gray">Already registered?</span>
                <span class="text-12 cursor-pointer mx-1 font-weight-600 login-opt" style="color: gray;" @click="crnt_tab='login'">Login</span>

                
              </div>
             
            </div>
        </div>


    </div>
  </div>
</template>
<script>

export default {
  metaInfo: {
    title: "login"
  },
  
   data() {
    return {
      crnt_tab:"login",
    };
  },
  mounted(){
   
  },
};
</script>
<style scoped>

  @import '/m2/style/style.css';


  
</style>
<style>

#capcee {
    width: 360px;
    height: 52px;
    font-size: 18px;
    color: #000;
   outline:none;
    border: none;
    font-weight: 500;
    border-radius:8px;
    margin-top: 10px;
    cursor: pointer;
    background: #fff;
}
#capcee:hover{
    background: linear-gradient(45deg, #fff, lightgray);

color:black;
}

.login-logo{
    width:150px!important;
}

.capcee-login .site-wrapper {
     background:#1a1c1e!important;
       height:100vh;
       overflow:auto;
     
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items:center;
}


#signInBorder{
 
  margin: 0 auto;
 
  width: 360px;
  min-height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    justify-content: center;

}
input:focus {
    background-color: pink;
}
.capcee-login label{
  color:#fff;
  font-size:14px!important;
}
.capcee-login input{
  border: 1px solid gray!important;
  background-color:initial;
  border-radius: 6px;
  border-width: 0.2px;
  height: 44px;
  width: 360px;
  margin-top: 20px!important;
  margin-bottom:10px;
  font-size:14px;
  
  color:gray;
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
  color:gray;
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
  height:46px;
  border:1px solid gray;
  border-radius:6px;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:10px;
  width:100%;
  font-size:14px;
  cursor:pointer;
  background:#fff;
  color:#000;
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

</style>
