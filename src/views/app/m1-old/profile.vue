
<template>
  <div class="main-content capcee-profile" :class="mode=='light'?'mode_change':''">
    
    <div class="site-wrapper"> 
        <MainHeader :edit="edit" :blocks="blocks" :current_block="current_block"></MainHeader>
        <div class="profile-container menu-wrapper">
          
          <div class=" profile-body ">
            <b-card no-body>
              <b-tabs pills card vertical>

                <b-tab  active>
                    <template #title>
                        <div class="flex-align3">
                            <img src="/m1/images/account-light.png" style="width:20px;margin-right:10px;" class="not-active-icon">
                            <img src="/m1/images/account.png" style="width:20px;margin-right:10px;" class="active-icon">
                            Accounts
                        </div>
                    </template>
                    <div class="profile-tab" >
                        <div class="pb-4 tabs-heading">
                          <h4 class="">Account</h4>
                        </div>
                        <div class="account-tabs">
                          <div class="account-tab">
                            <h5>Switch accounts</h5>
                            <h6>222larabrown@gmail.com</h6>
                          </div>
                          <div class="account-tab">
                            <h5>View subscriptions</h5>
                            <img src="/m1/images/stream_right_arrow.png">
                          </div>
                          <div class="account-tab">
                            <h5>Change password</h5>
                            <img src="/m1/images/stream_right_arrow.png">
                          </div>
                          <div class="account-tab" v-b-modal.delete-account>
                            <h5>Delete Account</h5>
                            <img src="/m1/images/stream_right_arrow.png">
                          </div>
                          <div class="account-tab">
                            <h5>Log out</h5>
                            <img src="/m1/images/stream_right_arrow.png">
                          </div>
                    </div>
                    <b-modal id="delete-account" hide-header hide-footer>
                        <div class="p-4">
                            <h5 class="mb-3" style="color:#121316;font-size:22px;font-weight:500;">Delete account?</h5>
                            <h6 class="mb-3" style="color:#43474E;font-size:14px;font-weight:400;line-height:22px;">By deactivating your account, you will no longer be able to sign in, your activity will be removed from JetStream and your profile preferences will go away. 
                            <br>
                            <br>
                            Do you wish to continue?</h6>
                            <div class="mt-4" style="display:flex;gap:10px">
                                <button class="btn btn-dark w-100 py-2" style="background-color:black;font-weight:400;">Yes, delete my account</button>
                                <button class="btn btn-light w-100 py-2" style="border:1px solid black;font-weight:400;" @click="$bvModal.hide('delete-account')">No, keep it</button>
                            </div>
                       </div>
                    </b-modal>
                  </div>
                </b-tab>
                <b-tab>
                    <template #title>
                        <div class="flex-align3">
                            <img src="/m1/images/about-light.png" style="width:20px;margin-right:10px;" class="not-active-icon">
                            <img src="/m1/images/about.png" style="width:20px;margin-right:10px;" class="active-icon">
                            About
                        </div>
                    </template>
                    <div class="pb-4 ">
                        <h4 class="font-weight-600">About Jetstream</h4>
                        <h6 style="font-size:14px;color:#C4C6CF;line-height:24px;margin-top:30px;margin-bottom:30px;">
                            Welcome to Jetstream! We are a new and exciting streaming platform that offers a vast selection of movies, TV shows, and original content for you to enjoy. Our team is dedicated to providing an intuitive and seamless streaming experience for all users. With a simple and intuitive interface, you can easily find and watch your favourite content in just a few clicks. We are constantly updating and expanding our library, so there is always something new to discover. We also offer personalized recommendations based on your viewing history, so you can easily find new and exciting content to enjoy. Thank you for choosing Jetstream for all of your entertainment needs. We hope you have a great time streaming!
                        </h6>
                        <hr style="border-top: 1px solid #cccccc;">
                        <h6 style="font-size:14px;color:#C4C6CF;margin-top:30px;">Application Version</h6>
                        <h6 style="font-size:14px;color:#C7C6CA;margin-top:20px;">JSV 1.0.1</h6>

                    </div>
                </b-tab>
                <b-tab >
                    <template #title>
                        <div class="flex-align3">
                            <img src="/m1/images/subtitle-light.png" style="width:20px;margin-right:10px;" class="not-active-icon">
                            <img src="/m1/images/subtitle.png" style="width:20px;margin-right:10px;" class="active-icon">
                            Subtitles
                        </div>
                    </template>
                    <div class="profile-tab" >
                        <div class="pb-4 tabs-heading">
                          <h4 class="">Settings</h4>
                        </div>
                        <div class="account-tabs">
                          <div class="account-tab" @click="show_img=!show_img">
                            <h5>Subtitles</h5>
                            <img src="/m1/images/toggle.png" v-if="show_img">
                            <img src="/m1/images/off-toggle.png" v-else>
                          </div>
                          <div class="account-tab">
                            <h5>Subtitles Language</h5>
                            <h6>English</h6>
                          </div>
                         
                        </div>
                    </div>
                </b-tab>
                <b-tab>
                    <template #title>
                        <div class="flex-align3">
                            <img src="/m1/images/language-light.png" style="width:20px;margin-right:10px;" class="not-active-icon">
                            <img src="/m1/images/language.png" style="width:20px;margin-right:10px;" class="active-icon">
                            Preferred Language
                        </div>
                    </template>
                </b-tab>
                <b-tab >
                    <template #title>
                        <div class="flex-align3">
                            <img src="/m1/images/search-light.png" style="width:20px;margin-right:10px;" class="not-active-icon">
                            <img src="/m1/images/search.png" style="width:20px;margin-right:10px;" class="active-icon">
                            Search history
                        </div>
                    </template>
                    <div class="profile-tab" >
                        <div class="pb-4 tabs-heading">
                          <h4 class="">Search history</h4>
                        </div>
                        <button class="btn btn-light px-4" style="background: #43474E;border:1px solid #43474E;color:#C7C6CA;font-weight:400;border-radius:4px;">
                            Clear All
                        </button>
                        <div class="account-tabs mt-4 pt-2" style="border-top: 1px solid #FFFFFF1A">
                         
                          <div class="account-tab py-2" style="background:initial;min-height:40px;">
                            <h5 class="font-weight:500;">Today</h5>
                          </div>
                          <div class="account-tab py-2" style="background:initial;min-height:40px;">
                            <h5 class="font-weight:500;">Earth</h5>
                          </div>
                          <div class="account-tab py-2" style="background:initial;min-height:40px;">
                            <h5 class="font-weight:500;">Zaloria</h5>
                          </div>
                          <div class="account-tab py-2" style="background:initial;min-height:40px;">
                            <h5 class="font-weight:500;">2052</h5>
                          </div>
                          <div class="account-tab py-2" style="background:initial;min-height:40px;">
                            <h5 class="font-weight:500;">Infinite</h5>
                          </div>
                          <div class="account-tab py-2" style="background:initial;min-height:40px;">
                            <h5 class="font-weight:500;">Pink City</h5>
                          </div>
                         
                        </div>
                    </div>
                </b-tab>
                <b-tab>
                    <template #title>
                        <div class="flex-align3">
                            <img src="/m1/images/help-light.png" style="width:20px;margin-right:10px;" class="not-active-icon">
                            <img src="/m1/images/help.png" style="width:20px;margin-right:10px;" class="active-icon">
                            Help and Support
                        </div>
                    </template>
                    <div class="profile-tab" >
                        <div class="pb-4 tabs-heading">
                          <h4 class="">Help and Support</h4>
                        </div>
                        <div class="account-tabs">
                          
                          <div class="account-tab">
                            <h5>FAQ’s</h5>
                            <img src="/m1/images/stream_right_arrow.png">
                          </div>
                          <div class="account-tab">
                            <h5>Privacy Policy</h5>
                            <img src="/m1/images/stream_right_arrow.png">
                          </div>
                          <div class="account-tab">
                            <h5>Contact us on</h5>
                            <h6>support@jetstream.com</h6>
                          </div>
                    </div>
                  </div>
                </b-tab>
              </b-tabs>
            </b-card>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import MainHeader from '/src/views/app/m1/header'
import MainFooter from '/src/views/app/m1/footer'
export default {
  metaInfo: {
    title: "Movies"
  },
  components:{
    MainHeader,
    MainFooter,
  },
  data() {
    return {
      show_img:true,
    };
  },
  mounted(){
  },
  methods: {
    
  },
};
</script>
<style scoped>
  
  @import '/m1/style/style.css';

</style>
<style>
  .active_btn{
    background-color: #8230c6!important;
    border: 1px solid #8230c6!important;
  }
  .capcee-profile .site-wrapper{
  background:#1a1c1e;
  position: absolute;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
  }


.profile-container{
    z-index: 9;
    position: absolute;
    height: 100vh;
    overflow: auto;
    width: 100%;
    padding-top: 80px;
}

.profile-body .tab-content.col{
  background-color: #1a1c1e;
}
.profile-body .col-auto {
    
    background-color: #1a1c1e;
    padding: 20px 0;
    min-width:300px;

}
.profile-body .card {
    border-radius: 0px;
    border: initial;
}
.profile-body .nav-pills .nav-link {
    
    color:#C7C6CA;
    padding: 16px;
    white-space: nowrap;
    font-weight:500;

}
.profile-body .nav-pills .nav-link .active-icon{
    display:none;
}
.profile-body .nav-pills .nav-link.active .not-active-icon{
    display:none;
}
.profile-body .nav-pills .nav-link.active .active-icon{
    display:block;
}
.profile-body .nav-pills .nav-link.active, .profile-body .nav-pills .show > .nav-link {
    color: #1A1C1E;
   background: #C7C6CA;
    border-radius: 4px!important;
    font-weight:600;

}


.text-info {
    color: #8230c6!important;
}
.profile-pic {
    background-color: #8230c6;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-weight: 600;
}








.profile-body .input {
  position: relative;
 
    width: 100%;
}
.profile-body .input__label {
  position: absolute;
  left:20px;
  top: 50%;
  transform:translateY(-50%);
  background: pink;
  white-space: nowrap;
 
  transform-origin: 0 0;
  background: var(--color-background);
  transition: transform 120ms ease-in;
  font-weight: 400;
  font-size:14px;
  line-height: 1.2;

}
.profile-body .input__field {
   
    box-sizing: border-box;
    display: block;
    width: 100%;
    border: 1px solid #bdbdbd;
  
   
    background: transparent;
    color:gray;
    font-size: 1rem;
    padding: 0 20px;
    height: 48px;
    border-radius: 6px;
}

.profile-body .input__field:focus + .input__label, .input__field:not(:placeholder-shown) + .input__label {
  transform: translate(0.25rem, -150%) scale(0.8);
  color: var(--color-accent);
  background-color:#0f0617;
  padding:2px 10px;
  font-weight:100;
}

.edit-profile{
  margin:40px 0;
}
.gender-btn.btn {
    border: 1px solid #bdbdbd;
    background-color: #0f0617;
    color: white;
    border-radius: 6px;
    width:100%;
  }

.card-header {
    padding: 0;
    background-color:initial;
}
.profile-container .card-body{
    padding-left:100px;
}
.tabs-heading h4{
    color:#C7C6CA;
    font-weight:400;
}
.account-tabs{
    display:flex;
    flex-direction:column;
    gap:15px;
}
.account-tab{
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:100%;
    background:#1E2023;
    padding:16px;
    border-radius:4px;
    cursor:pointer;
    min-height:65px;
}
.account-tab:hover{
    background: #232527!important;
}
.account-tabs h5{
    font-size:15px;
    color:#C7C6CA;
    font-weight:400;
}
.account-tabs h6{
    font-size:14px;
    color:#C7C6CA;
}
</style>
