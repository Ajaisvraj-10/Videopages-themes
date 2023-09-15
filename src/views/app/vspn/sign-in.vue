
<template>
  <div class="main-content capcee-login" :class="$root.login_open=='open'?'open_login':''">
    
    <div class="site-wrapper pt-5" v-if="start"> 
        
        <div class="login-am" v-if="crnt_tab=='login'">
              
            <div id="signInBorder" class="signin-2">
              <div class="">
                
                <i class="fa fa-close text-dark" @click="$root.login_open='close'" style="position:absolute;top:2%;right:2%;font-size:20px;"></i>
                
                <div class="text-center" >
                    <router-link :to="edit?'':{name:'home'}">
                        <img src="/vspn/images/logo.png" class="logo" style="max-width:200px;max-height:80px;object-fit:contain;">
                    </router-link>             
                </div>
                <h4 class="text-center text-dark font-weight-500 text-18 mb-2 mt-4" style="line-height:20px;" @click="selectContent(blocks[1])" :class="blocks[1].is_edit?'selected_content':''" :id="'blocks_'+blocks[1].id" v-show="blocks[1].status">
                  {{blocks[1].value}}
                </h4>
                
              </div>

              <form ref="loginUser" @submit.prevent="loginUser()">
                <label>
                  
                  <input type="email" placeholder="Emailo ID or Mobile Number" name="email" value="" required>
                </label>
                
                <label>
                  
                  <input type="password" placeholder="Password" name="password" required>
                </label>
                
                <div class=" mb-3">
                  
                    <span><a  style="color: #3b81c3;font-weight:400!important;">Forgot password?</a></span>
                  
                </div>
                <div>
                  <button type="submit" id="capcee" >Login</button>
                </div>
              </form>
             
              <div class="text-center my-3">
                <span class="text-13  mx-1" style="color: #3b81c3;font-weight:400!important;">New to capcee?</span>
                
                <div>
                  <button type="submit" id="capcee2" class="mt-3" @click="crnt_tab='register'">Sign Up</button>
                </div>

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
                  <img src="/vspn/images/apple.svg" style="width:40px;">
                  <img src="/vspn/images/google.svg" style="width:40px;">
                  <img src="/vspn/images/fb.svg" style="width:40px;">
                  <img src="/vspn/images/twitter.svg" style="width:40px;">
              </div>-->
                



            </div>
        </div>
        <!--<div class="otp-am" v-if="crnt_tab=='otp'">
             
            <div id="signInBorder" class="signin-2">
                <i class="fa fa-close text-dark" @click="$root.login_open='close'" style="position:absolute;top:2%;right:2%;font-size:20px;"></i>
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
              <i class="fa fa-close text-dark" @click="$root.login_open='close'" style="position:absolute;top:2%;right:2%;font-size:20px;"></i>
              <div class="text-center">
                <p id="SignInTxt" class="mb-3">
                  Create a new account
                </p>
                
              </div>

              <form ref="registerUser" @submit.prevent="registerUser()">
                <label>
                  
                  <input type="text" placeholder="Your Name" name="username" value="" required>
                </label>
                <label>
                  
                  <input type="email" placeholder="Email ID" name="email" value="" required>
                </label>
                
                <label>
                  
                  <input type="password" placeholder="Password" name="password1" required>
                </label>
                
                <label>
                  
                  <input type="password" placeholder="Confirm  Password" name="password" required>
                </label>
                
                <div class="text-center max-width-340 my-3">
                  
                    <span class="text-12 text-dark font-weight-400 " >By proceeding you agree to our <a  style="color: #3b81c3;">Terms of service & privacy policy </a></span>
                  
                </div>
                <div>
                    <button id="capcee" type="submit">Register</button>
                </div>
              </form>
             
              <div class="text-center my-3 ">
                <span class="text-13 max-width-340 font-weight-400" style="color: #3b81c3;">Already registered?</span>
               
                <div>
                    <button id="capcee2" type="submit" class="mt-2" @click="crnt_tab='login'">Login</button>
                </div>

                
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
  
  @import '/vspn/style/style.css';

</style>
<style>
.main-content.capcee-login{
  //background-image:linear-gradient(rgb(0 0 0 / 82%), #0f171e), url(/vspn/images/bg1.jpg);
  
    background-size: cover;
   
    
    height: 100vh;
    overflow: hidden;
    position: fixed;
    top: 0;
    background-color: #000000b3;
    width: 100%;
    z-index: 999999999;
    display:none;
    
}
.main-content.capcee-login.open_login{
 
    display:block;

}
@keyframes mymove {
  0%   {top: -100px;}
  
  100% {top: 0px;}
}
.capcee-login form{
  display: flex;
    flex-direction: column;
    align-items: center;

}
#capcee {
    width: 340px;
    height: 45px;
    font-size: 16px;
    color: white;
 
    border: 0.5px solid #3366cc;
    border-radius: 35px;
   
    cursor: pointer;
    background: #36c;
    font-weight: 500;
}
#capcee:hover{
background: white;
color:#36c;
}
#capcee2 {
    width: 340px;
    height: 45px;
    font-size: 16px;
    color: #36c;
    background: initial;
    border: 0.5px solid #36c;
    border-radius: 35px;
   
    cursor: pointer;
    background: initial;
    font-weight: 500;
}
#capcee2:hover{
background: #36c;
color:white;
}
.login-logo{
    width:150px!important;
}

.capcee-login .site-wrapper {
     background: initial;
       height:100vh;
       overflow:auto;
     
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items:center;
     animation: mymove .4s;
    position:relative;
}


#signInBorder{
 
  margin: 0 auto;
 
  width: 420px;
  position:relative;
  background-color:white;
  border-radius:6px;
  padding:10px;

}

.capcee-login input{
  border:none;
  border: 1px solid #ccc!important;
  background: white;
  border-radius: 6px;

  height: 45px;
  width: 340px;
  margin-bottom: 10px;
  font-size:12px;
  color:gray;
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
  color:black;
  font-weight:600;
  padding-top:20px;

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
.max-width-340{
  max-width:340px;
}

@media (max-width: 560px) {
  .main-content.capcee-login{
  background-image:initial;
  background:white;
  }
  .fa-close{
  position:fixed!important;
  cursor:pointer;
  }
}
  .fa-close{
 
  cursor:pointer;
  }
</style>
