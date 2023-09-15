
<template>
  <div class="main-content capcee-login">
    
    Loading...
  </div>
</template>
<script>

</script>
<style scoped>
  
  @import '/vid_theme_app/style/style.css';

</style>
<style>
body{
  background-color:#0f0617;
}
    #capcee{
  width:340px;
  height:45px;
  font-size:14px;
  color:lightgray;
  background: initial;
  border: 1px solid #898989;
  border-radius:6px;
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

.capcee-login input{
  
  border: none;
  background-color:#262626;
  border-radius: 6px;
  border-width: 0.2px;
  height: 45px;
  width: 340px;
  margin-top: 25px;
  font-size:12px;
  color:white;
  padding:10px;
    margin-bottom:5px;

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
label{
  margin-bottom:0;
}
.or-options{

  border-radius:7px!important;
  display:flex;
  align-items:center;
  gap:6px;
}
</style>
