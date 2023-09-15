
<template>
  <div class="main-content capcee-login">
    
    <div class="site-wrapper"> 
      
        <div class="px-3 py-2 w-100 sign-in-header" >    
            <div class="flex-align">         
                
              <router-link :to="edit?'':{name:'home'}" class="float-left">
                  <i class="fa fa-angle-left" style="font-size:26px;color:white;"></i>
              </router-link>
              <div class="login-toggle">
                <span @click="crnt_tab='register'" :class="crnt_tab=='register'?'active-toggle':''">Register</span>
                <span @click="crnt_tab='login'" :class="crnt_tab=='login'?'active-toggle':''">Login</span>
              </div>
            </div>
            <img src="/videopage_mobile/images/logo.png" class="mx-auto d-flex my-4" style="max-width:200px;max-height:80px;object-fit:contain;">
               
        </div>
        <div class="sign-in-body">
          
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
                        
                        <input type="email" placeholder="Emailo ID or Mobile Number" name="email" value="" required>
                      </label>
                      <br>
                      <label>
                        
                        <input type="password" placeholder="Password" name="password" required>
                      </label>
                      <br>
                      <div class="text-center my-3">
                        
                          <span><a  style="color: #ee2938;">Forgot password?</a></span>
                        
                      </div>
                      <div>
                        <button type="submit" id="capcee" >Login</button>
                      </div>
                     
                    </form>
                  </div>

                  <div class="d-flex justify-content-center my-4" style="gap:20px;">
                    <h6 class="text-10 text-white font-weight-400">

                      Or continue with:
                    </h6>
                    
                  </div>
                  <div class="row mt-5">
                    <div class=" col-6" >
                      <i class="fa fa-google text-dalight" style="background-color:#171617;border-radius:10px;font-size:30px;border: 1px solid #2d2d2d;width:100%;padding:15px 10px;"></i>
                      
                    </div>
                    <div class=" col-6" >
                      <i class="fa fa-facebook text-light" style="background-color:#171617;border-radius:10px;font-size:30px;border: 1px solid #2d2d2d;width:100%;padding:15px 10px;"></i>
                     
                    </div>
                   
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
                  <div class="text-center  my-3">
                    
                      <span class="text-13 text-white">By proceeding you agree to our <a  style="color: #ee2938;">Terms of service & privacy policy </a></span>
                    
                  </div>
                  <div>
                      <button id="capcee" type="submit">Register</button>
                  </div>
                </form>
                <div class="d-flex justify-content-center my-4" style="gap:20px;">
                    <h6 class="text-10 text-white font-weight-400">

                      Or continue with:
                    </h6>
                    
                  </div>
                  <div class="row mt-5">
                    <div class="text-center col-6" >
                      <i class="fa fa-google text-dalight" style="background-color:#171617;border-radius:10px;font-size:30px;border: 1px solid #2d2d2d;width:100%;padding:15px 10px;"></i>
                      
                    </div>
                    <div class="text-center col-6" >
                      <i class="fa fa-facebook text-light" style="background-color:#171617;border-radius:10px;font-size:30px;border: 1px solid #2d2d2d;width:100%;padding:15px 10px;"></i>
                     
                    </div>
                   
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
  
  @import '/videopage_mobile/style/style.css';

</style>
<style>
body{
  background-color:#0f0617;
}
    #capcee{
  width:340px;
  height:48px;
  font-size:18px;
  color:lightgray;
  background: initial;
  border: 0.5px solid #ee2938;
  border-radius:5px;
  margin-top: 10px;
  background-color:#ee2938;
  font-weight:600;
}

#capcee:hover{
background: white;
color:#ee2938;
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


#signInBorder{
 
  margin: 0 auto;
 
  width: 340px;

}

.capcee-login input {
    border: none;
    border-bottom: 1px solid #ee2938!important;
    background-color: #171617;
    
    border-width: 0.2px;
    height: 45px;
    width: 340px;
    margin-top: 15px;
    font-size: 12px;
    color: white;
    padding: 15px;
    margin-bottom: 5px;
    border-radius: 6px;
}

.capcee-login input:focus{
  -webkit-box-shadow: 0px 0px 1.5px 1.5px rgba(231,118,0,0.9);
  -moz-box-shadow: 0px 0px 1.5px 1.5px rgba(231,118,0,0.9);
  box-shadow: 0px 0px 1.5px 1.5px rgba(231,118,0,0.9);
  outline:0;
}


#SignInTxt, #blocks_9{

  font-size: 20px;
  color:white;
  font-weight:500;

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
.sign-in-header{
  max-height: 180px;
    height: 100%;
    background:linear-gradient(0deg, #000000a6, #000000a6), url(/videopage_mobile/images/bg1.jpg);
    background-position: top;
    
}
.sign-in-body{

    background-size: cover;
  width: 100%;
    height: 100%;
   
   
    background-position: top;
  
}
::placeholder{
  color:white;
}
.main-content.capcee-login {
    max-width: 600px;
    margin: 0 auto;
}

.login-toggle {
    background-color: #f67e7e;
    
    border-radius: 35px;
    display:flex;
}
.login-toggle span {
   color:black;
   font-weight:600;
   font-size:10px;
   padding: 7px 10px;
   border-radius:35px;
   align-items: center;
    display: flex;
    font-family:sans-serif;
    cursor:pointer;
    border: 3px solid #f67e7e;
}

.login-toggle span.active-toggle{
  background-color:red;
 
  color:white;
  font-weight:500;
  font-family:sans-serif;
}
</style>
