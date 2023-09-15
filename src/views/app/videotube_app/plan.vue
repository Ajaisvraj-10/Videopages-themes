
<template>
  <div class="main-content capcee-plan">
    
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
                      <img src="/videotube_app/images/close2.png" style="width:15px;"></i>
                    </router-link>
                    
               
        </div>
       <div class="plans pt-3">
                <div class="row mx-0">
                  <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 ">
                    <div class="plan-card">
                      <div class="border px-3 py-4">
                        <h5 class="text-28 flex-align2 font-weight-400 text-white">Standard</h5>
                      </div>
                      <h5 class="my-2 text-white" style="line-height:20px;">Enjoy a free month of VideoTube Premium</h5>
                      <h6 class="my-2 font-weight-400" style="line-height:20px;color:lightgray;">Get ad-free access, downloads, and background play when you get VideoTube Premium</h6>
                      <div class="my-3" style="display:flex;justify-content:flex-start;">
                        <h6 class="subscribe-btn" >Subscribe</h6>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 ">
                    <div class="plan-card">
                      <div class="border px-3 py-4">
                        <h5 class="text-28 flex-align2 font-weight-400 text-white">Premium</h5>
                      </div>
                      <h5 class="my-2 text-white" style="line-height:20px;">Enjoy a free month of VideoTube Premium</h5>
                      <h6 class="my-2 font-weight-400" style="line-height:20px;color:lightgray;">Get ad-free access, downloads, and background play when you get VideoTube Premium</h6>
                      <div class="my-3" style="display:flex;justify-content:flex-start;">
                        <h6 class="subscribe-btn" >Subscribe</h6>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 ">
                    <div class="plan-card">
                      <div class="border px-3 py-4">
                        <h5 class="text-28 flex-align2 font-weight-400 text-white">Gold</h5>
                      </div>
                      <h5 class="my-2 text-white" style="line-height:20px;">Enjoy a free month of VideoTube Premium</h5>
                      <h6 class="my-2 font-weight-400" style="line-height:20px;color:lightgray;">Get ad-free access, downloads, and background play when you get VideoTube Premium</h6>
                      <div class="my-3" style="display:flex;justify-content:flex-start;">
                        <h6 class="subscribe-btn">Subscribe</h6>
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
  @import '/videotube_app/style/style2.css';
  @import '/videotube_app/style/style.css';

</style>
<style>

.capcee-plan{
  background-image: linear-gradient(0deg, #180d2cb5, #070707b8), url(/videotube_app/images/bg-gif.gif)!important;
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

.capcee-plan .site-wrapper {
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




h6.subscribe-btn {
    background-color: rgb(6, 95, 212);
    border-radius: 30px;
    padding: 10px 20px;
    font-size: 16px;
    color: white;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 20px 30px 20px;
}

</style>
