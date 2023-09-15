
<template>
  <div class="main-content capcee-login">
    
    <div class="site-wrapper"> 
      
        
       
        <div class="search-header w-100">
            <router-link :to="edit?'':{name:'home'}" class="float-left">
              <img src="/videomusic_app/images/nav_left.png" style="width:20px;" @click="search_page='close'">
            </router-link>
            <div class="header-logo">
                <router-link :to="edit?'':{name:'home'}">
                  <img src="/videomusic_app/images/logo.png" class="logo">
                </router-link>             
            </div>
            <div></div>
                                
        </div>
        <div class="login-reg-btn">
          <div class="login-tab" @click="crnt_tab='login'" :class="crnt_tab=='login'?'active_login':''">Login</div>
          <div class="login-tab" @click="crnt_tab='register'" :class="crnt_tab=='register'?'active_login':''">Register</div>

        </div>
       
       
        <div class="login-am" v-if="crnt_tab=='login'">
              
            <div id="signInBorder" class="signin-2">
              <div class="text-center">
                
                <h4 class="text-18 font-weight-700 mb-3" style="line-height:20px;" @click="selectContent(blocks[1])" :class="blocks[1].is_edit?'selected_content':''" :id="'blocks_'+blocks[1].id" v-show="blocks[1].status">
                  {{blocks[1].value}}
                </h4>
                <div class="my-4">
                  <form ref="loginUser" @submit.prevent="loginUser()">
                    <label>
                      
                      <input type="email" placeholder="Emailo ID or Mobile Number" name="email" value="" required>
                    </label>
                  
                    <label>
                      
                      <input type="password" placeholder="Password" name="password" required>
                    </label>
                    
                    
                    <div>
                      <button type="submit" id="capcee" >Login</button>
                    </div>
                    <div class="text-center mb-3">
                      
                        <span><a  style="color: lightgray;">Forgot password?</a></span>
                      
                    </div>
                    <div class="social-fixed-btn">
                        <div class="social-capcee" >
                          <i class="fa fa-google"></i>
                                  Google
                        </div>
                        <div class="social-capcee" >
                          <i class="fa fa-facebook "></i>
                                  Facebook
                        </div>
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
            <div id="signInBorder" class="signin-2 mt-4">
              
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
                  
                    <span class="text-12 text-light" style="display: block;line-height: 20px;">By proceeding you agree to our 
                      Terms of service & privacy policy 
                    </span>
                  
                </div>
                <div>
                    <button id="capcee" type="submit">Register</button>
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
  
  @import '/videomusic_app/style/style.css';

</style>
<style>
body{
  background-color:#0f0617;
}
.social-capcee{
  width:320px;
  height:45px;
  font-size:16px;
  color:lightgray;
  background: #92929245;
  border: none;
  display:flex;
  align-items:center;
  justify-content:center;

  gap:10px;
  position: relative;
}
.social-capcee:not(:last-child):after {
    content: '';
    position: absolute;
    right: 0;
   
    height: 30px;
    width: 2px;
    background-color: #858585;
    top: 50%;
    transform: translateY(-50%);
}
.social-fixed-btn{
  display:flex;
  border: 2px solid #80808040;
    border-radius: 6px;
}
    #capcee{
  width:320px;
  height:45px;
  font-size:16px;
  color:lightgray;
  background: #1e4e50;
  border: none;
  border-radius:6px;
  margin-top: 10px;
  position:relative;
}
/* #capcee:after{
  content:'';
  position:absolute;
  top:0;
  right:0;
  width:20px;
  height:20px;
  border-right:2px solid #686868;
  border-top:2px solid #686868;

}
#capcee:before{
  content:'';
  position:absolute;
  bottom:0;
  left:0;
  width:20px;
  height:20px;
  border-left:2px solid #686868;
  border-bottom:2px solid #686868;

}*/

#capcee:hover{
background: white;
color:black;
}

.login-logo{
    width:150px!important;
}

.capcee-login .site-wrapper {
    //background: #0f0617!important;
       height:100vh;
       overflow:auto;
     
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items:center;
}


#signInBorder{
 
  margin: 0 auto;
 
  width: 320px;

}

.capcee-login input{
  
 border: 1px solid lightgray;
  background-color:initial;
  border-radius:6px;

 
  height: 45px;
  width: 320px;
  margin-top:10px;
  font-size:14px;
  color:white;
  padding:10px;
    margin-bottom:5px;
    text-align:center;
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
   width: 320px;
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
  width:320px;
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
label{
  margin-bottom:0;
}
.or-options{

  border-radius:7px!important;
  display:flex;
  align-items:center;
  gap:6px;
}


.login-tab {
    width: 100%;
    height:100%;
    text-align: center;
    font-weight:500;
    font-size:18px;
    display:flex;
    align-items:center;
    justify-content:center;
    background: #92929245;
   
    border-radius:5px;

}

.login-tab.active_login {
    opacity:1;
    background: #f8f8f86b;
    letter-spacing: 3px;
}

.login-reg-btn {
    width: 92%;
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 15px;
   gap:15px;
    height: 55px;
    align-items: center;
    border-radius: 8px;
    
}
.login-reg-btn div{
  position:relative;
}
.login-reg-btn div:not(:last-child):after {
    content: '';
    position: absolute;
    right: 0;
   
    height: 30px;
    width: 3px;
    background-color: #80808040;
    top: 50%;
    transform: translateY(-50%);
}


</style>
