
<template>
  <div class="main-content">
    <div class="signin"> 
            <form class="signin-form">
                <div class="input-container">
                  <input id="email" class="input" type="text" pattern=".+" required />
                  <label class="label" for="email">Email or phone number</label>
                </div>
                <div class="input-container">
                  <input id="password" class="input" type="text" pattern=".+" required />
                  <label class="label" for="password">Password</label>
                </div>
                <div class="input-container text-center">
                    <router-link :to="{name:'profile'}">
                        <button>Sign In</button>
                    </router-link>

                    <p class="text-light text-13 mt-4">Need help?</p>
                    <h6 class="text-white mt-4 text-15">New to Videoflix? Sign up now.</h6>
                    <p class="text-light text-11 mt-4">Sign in is protected by google reCAPTCHA to ensure tou're not a bot. Learn more</p>

                </div>
                <div class="signin-header flex-align3">
                    <router-link :to="{name:'home'}">
                        <img src="/videoflix_mobile/images/back.png" width="16" class="mx-2">
                    </router-link>
                    <img src="/videoflix_mobile/images/logo.png" width="80" class="mx-2">


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



</style>
