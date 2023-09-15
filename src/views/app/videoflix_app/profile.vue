
<template>
  <div class="main-content">
    <div class="signin"> 
            <form class="signin-form">
                <div class="position-absolute w-100 text-center" style="top:20px;">
                    
                    <img src="/videoflix_app/images/logo.png" width="110" class="mx-2">


                </div>
                
                <div class="profile text-center mx-auto">
                  <h6 class="text-18 mb-4">Who's watching?</h6>
                  <div class="row mx-4 px-3">
                    <div class="col-6 col-md-4 my-3 px-4">
                      <router-link :to="{name:'main'}">
                        <img src="https://ih0.redbubble.net/image.618379802.1473/flat,1000x1000,075,f.u2.jpg" class="rounded2">
                        <h6 class="my-2">Meril</h6>
                      </router-link>

                    </div>
                    <div class="col-6 col-md-4 my-3 px-4">
                      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png" class="rounded2">
                      <h6 class="my-2">Justin</h6>

                    </div>
                    <div class="col-6 col-md-4 my-3 px-4">
                      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" class="rounded2">
                      <h6 class="my-2">Meril</h6>

                    </div>
                    <div class="col-6 col-md-4 my-3 px-4">
                      <img src="https://i.pinimg.com/474x/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6--vini-cata.jpg" class="rounded2">
                      <h6 class="my-2">Justin</h6>

                    </div>
                    <div class="col-6 col-md-4 my-3 px-4">
                      <img src="https://i.pinimg.com/originals/10/12/c0/1012c06c7e1b0f8f5e60611992785e5a.png" class="rounded2">
                      <h6 class="my-2">Meril</h6>

                    </div>
                   

                  </div>
                </div>
                


            </form>
  


    </div>
      
  </div>

  
</template>
<script>

export default {
  metaInfo: {
    title: "Videoflix"
  },
  data() {
    return {
    };
  },
  mounted(){
    
  }
};
</script>
<style scoped>
  @import 'style/style.css';

  
</style>
<style>
    

</style>
