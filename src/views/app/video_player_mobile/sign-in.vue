
<template>
  <div class="main-content capcee-login">
    
    <div class="site-wrapper"> 
      
        <div class="px-3 py-2 w-100" >             
                
                    <router-link :to="edit?'':{name:'home'}" class="float-left">
                      <i class="fa fa-angle-left" style="font-size:26px;color:white;"></i>
                    </router-link>
                    <h6 class="text-center text-white" style="display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100%;">
                      Login/Register
                    </h6>
               
        </div>
        <img src="/video_player_mobile/images/logo.png" class="mt-4" style="max-width:200px;max-height:80px;">
        <div class="login-am" v-if="crnt_tab=='login'">
              
            <div id="signInBorder" class="signin-2">
              <div class="text-center">
                <p class="mb-3" @click="selectContent(blocks[0])" :class="blocks[0].is_edit?'selected_content':''" :id="'blocks_'+blocks[0].id" v-show="blocks[0].status">
                  {{blocks[0].value}}
                </p>
                <h4 class=" text-13 mb-4" style="line-height:20px;" @click="selectContent(blocks[1])" :class="blocks[1].is_edit?'selected_content':''" :id="'blocks_'+blocks[1].id" v-show="blocks[1].status">
                  {{blocks[1].value}}
                </h4>
                <div class="my-5">
                  <form ref="loginUser" @submit.prevent="loginUser()">
                    <label>
                      <h6 class="text-light">Emailo ID or Mobile Number</h6>
                      <input type="email" name="email" value="" required>
                    </label>
                    <br>
                    <label>
                      <h6 class="text-light">Password</h6>
                      <input type="password" name="password" required>
                    </label>
                    <br>
                    <div class="text-center my-3">
                      
                        <span><a  style="color: #2196f3;">Forgot password?</a></span>
                      
                    </div>
                    <div>
                      <button type="submit" id="capcee" >Login</button>
                    </div>
                   
                    <div class="text-center my-3">
                      <span class="text-13 text-white mx-1">New to capcee?</span>
                      <span class="text-13  mx-1" style="color: #2196f3;" @click="crnt_tab='register'">Register</span>

                      
                    </div>
                  </form>
                </div>

                <div class="d-flex justify-content-center my-4" style="gap:20px;">
                  <h6 class="text-10 text-white font-weight-400">

                    Or continue with:
                  </h6>
                  
                </div>
                <div class="d-flex justify-content-center my-4 social-icons" style="gap:25px;">
                  <i class="fa fa-apple"></i>
                  <i class="fa fa-google"></i>
                  <i class="fa fa-facebook"></i>
                  <i class="fa fa-twitter"></i>
                  
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
            <div id="signInBorder" class="signin-2 mt-5">
              <div class="text-center">
                <p id="SignInTxt" class="mb-3">
                  Create a new account
                </p>
                
                
              </div>
              <form ref="registerUser" @submit.prevent="registerUser()">
                <label>
                  <h6 class="text-light">Your Name</h6>
                  <input type="text" name="username" value="" required>
                </label>
                <label>
                  <h6 class="text-light">Email ID</h6>
                  <input type="email" name="email" value="" required>
                </label>
                <br>
                <label>
                  <h6 class="text-light">Password</h6>
                  <input type="password" name="password1" required>
                </label>
                <br>
                <label>
                  <h6 class="text-light">Confirm Password</h6>
                  <input type="password" name="password" required>
                </label>
                <br>
                <div class="text-center  my-3">
                  
                    <span class="text-13 text-white">By proceeding you agree to our <a  style="color: #2196f3;">Terms of service & privacy policy </a></span>
                  
                </div>
                <div>
                    <button id="capcee" type="submit">Register</button>
                </div>
              </form>
             
              <div class="text-center my-3">
                <span class="text-13 text-white mx-1">Already registered?</span>
                <span class="text-13 cursor-pointer mx-1" style="color: #2196f3;" @click="crnt_tab='login'">Login</span>

                
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
  
  @import '/video_player_mobile/style/style.css';

</style>
<style>
body{
  background-color:#0f0617;
}
#capcee {
    width: 340px;
    height: 50px;
    font-size: 20px;
    color: lightgray;
    background: linear-gradient(to left, #0079ff, #2689a5);
    border: 0.5px solid #2689a5;
    border-radius: 6px;
    margin-top: 10px;
    cursor: pointer;
    font-weight: 500;
}

#capcee:hover{
background: white;
color:black;
}

.login-logo{
    width:150px!important;
}

.capcee-login .site-wrapper {
     background: linear-gradient(45deg, #1a1a1a, #02254a, #393939);
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
  border-bottom: 2px solid #2196f3!important;
  background-color:initial;
  border-radius: 0px;
  border-width: 0.2px;
  height: 35px;
  width: 340px;
  margin-bottom: 15px;
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
    text-align:left;


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
.social-icons i{
  font-size:35px;
}
</style>
