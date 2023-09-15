
<template>
  <div class="main-content">
    
    <div class="site-wrapper">   
            <div class="showcase2">
        
            <div class="sign-in-videoflix">
                <div class="logo2 flex-align w-100">
                    <img src="/videoflix_web/images/logo.png">
                    <router-link :to="{name:'sign-in'}"><h6 class="text-danger text-20 font-weight-500">Sign In</h6></router-link>


                </div>

                <div class="showcase2-content-2">
                    <div class="formm2">
                        <form>
                            <h1 class="">Forgot Email/Password</h1>
                            <div class="info">
                                <h6 class="text-dark text-14 mb-3">How would you like to reset your password?</h6>
                                <div class="pl-4 radio-input mb-3">
                                    <input id="email" type="radio" name="help-input"  class="text-18">
                                    <label for="email" class="text-dark px-2">Email</label>
                                    <br>
                                    <br>
                                    <input id="sms" type="radio" name="help-input"  >
                                    <label for="sms" class="text-dark px-2">Text Message (SMS)</label>
                                </div>
                                
                            </div>
                            <div class="info">
                                <h6 class="text-dark text-14 mb-3">We will send you an email with instructions on how to reset your password.</h6>
                                <input class="email" type="email" placeholder="name@example.com">
                            </div>
                            <div class="btn">
                                <button class="btn-primary" type="submit">Email me</button>
                            </div>
                            

                        </form>
        
                    </div>
                    
                    
                    <div class="email-2">
                        <h6 class="text-primary text-12">I can't remember my email address or phone number.</h6>
                        
                    </div>
                    
                     <div class="more">
                        <p class="text-dark mt-2">
                            This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Learn more.</a> 
                        </p>
                </div>

                </div>
               
            </div>


       
            <div class="sign-in-footer">
                
                <div class="ftr-content">
                    <div class="contact">
                        <a href="#">Quesions? Contact us.</a>
                    </div>
                    <div class="ftr row">
                        <a class="col-lg-2 col-md-4 col-6 my-1">Faq</a>
                        <a class="col-lg-2 col-md-4 col-6 my-1">Help center</a>
                        <a class="col-lg-2 col-md-4 col-6 my-1">Terms of use</a>
                        <a class="col-lg-2 col-md-4 col-6 my-1">Privacy</a>
                        <a class="col-lg-2 col-md-4 col-6 my-1">Cookies Preference</a>
                        <a class="col-lg-2 col-md-4 col-6 my-1">Corporate Information</a>


                    </div>
                    <div class="" >
                          
                          
                          <select class="button-3 text-white mr-sm-4 mr-3">
                            <option>English</option>
                            <option>Hindi</option>

                          </select>
                          
                    </div>

                    
                </div>
               
            </div>
       
            </div>





    </div>
  </div>
</template>
<script>

export default {
  metaInfo: {
    
  },
  data() {
    return {
        

    };
  },
 

  

};
</script>
<style scoped>
  
  @import '/videoflix_web/style/style.css';
  @import '/videoflix_web/style/style-2.css';


  .showcase2 {
    width: 100%;
    height: 100vh;
    position: relative;
    
}

.showcase2::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.65);
    box-shadow: inset 30px 10px 150px #000000;
}

.logo2 {
    position: relative;
    z-index: 2;
    height: 90px;
    padding:0 40px;
}

.logo2 img {
    width: 170px;
    
    
}

.showcase2-content-2 {
    position: relative;
    z-index: 2;
    width: 450px;
    max-height: 650px;
    background: #f3f3f3;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
    padding: 40px;
}

.formm2 h1 {
    margin-bottom: 20px;
    font-weight:500;
    font-size:30px;
    color:black;
}

.formm2 {
    width: 100%;
    margin-bottom: 40px;
}

.formm2 .info {
    padding: 5px 0;
    /* margin-bottom: 20px; */
}

.formm2 .info .email {
    margin-bottom: 30px;
    width: 100%;
    height: 50px;
    border-radius: 5px;
    border: none;
    padding: 10px;
    font-size: inherit;
}

.formm2 .btn {
    margin-bottom: 10px;
    width: 100%;
    padding:0;
}

.formm2 .btn-primary {
    width: 100%;
    height: 50px;
    border-radius: 5px;
    background-color: #0080ff;
    background-image: linear-gradient(180deg,#0080ff,#0277ec);
    color: #fff;
    font-size: inherit;
    font-weight: bold;
    border: none;
    cursor: pointer;
    outline: none;
    font-size:22px;
    font-weight:400;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
}

.email-2 .text-primary {
    
   color: #017cf6!important;
    
}

.help {
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
}

.help a {
    color: #999;
    font-weight:500;
}

.help a:hover {
    text-decoration: underline;
}

/* ------ input ------- */

formm2 input[type=checkbox] {
    background: white;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    border: 0;
    height: 16px;
    left: -20px;
    width: 16px;
    margin-right: 5px;
}



/* ------ input end ------- */

.fcbk {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 0.8em;
}

.fcbk img {
    width: 20px;
    margin-right: 10px;
}

.signup {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.signup p {
    margin-right: 5px;
}

.more {
    font-size: 0.8em;
    line-height: 1.1em;
}

.more a {
    color: rgb(17, 108, 228);
}

.more a:hover,
.signup a:hover {
    text-decoration: underline;
}

/* ------ FOOTER ------- */

.sign-in-footer {
    position: absolute;
   
    margin-top: 80px;

    z-index: 2;
    background: rgba(0, 0, 0, 0.65);
    width: 100%;
    height: 200px;

}

.ftr-content {
    margin: 0 10%;
    padding-top: 20px;
    font-size: 1em;
}

.ftr-content a {
    color: #999;
}

.ftr-content a:hover {
    text-decoration: underline;
}

.contact {
    margin-bottom: 30px;
}

.contact a:hover {
    text-decoration: underline;
}

.ftr {
    margin-bottom: 30px;
    width: 100%;
    font-size: 0.8em;
    display: flex;
    justify-content: space-between;
}

.select select {
    width: 100px;
    height: 40px;
    border: none;
    font-size: inherit;
    padding-left: 10px;
    background: #333333;
}
.sign-in-footer .button-3{
    background-color: initial;
}
.radio-input input {
   
   
    width: 1.3rem;
    height: 1.3em;
}
@media screen and (max-width: 560px) {

.showcase2 {
   
    background: initial;
    background-color: white;
}
.showcase2::after {
    content: '';
    
     background: #f3f3f3;
     box-shadow: initial;
   
    }
.showcase2-content-2 {
    
    width: auto;
    padding: 20px;


}
.logo2 img{
    width: 80px;
   
   
}
.logo2 {
   
    height: 40px;
    background-color:white;
    padding: 0 20px
}
.ftr-content {
    margi: 0;
    padding: 20px;
    font-size: 1em;
}
.ftr{
    margin-bottom: 30px;
    width: 100%;
    
   
}

.sign-in-footer {
   
    border-top:1px solid gray;
}
.sign-in-videoflix{
    min-height:calc(100vh - 320px);
    overflow:auto;
}
.email-2 .text-primary {
    font-size:16px;
}
.more p{
    font-size:16px;
    line-height:20px;
}



}
</style>
