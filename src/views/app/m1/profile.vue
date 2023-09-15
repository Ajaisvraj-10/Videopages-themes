
<template>
  <div class="main-content capcee-profile" :class="mode=='light'?'mode_change':''">
    
    <div class="site-wrapper"> 
        <MainHeader :edit="edit" :blocks="blocks" :current_block="current_block"></MainHeader>
        <div class="profile-container">
          
          <div class=" profile-body "  v-if="current_tab=='settings'">
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
                          <button class="account-tab" @click="current_tab='my_profile'">
                            <h5>My Profile</h5>
                            <div class="flex-align2 g4">
                              <h6>{{profile.username}}</h6>
                              <img src="/m1/images/stream_right_arrow.png">
                            </div>
                          </button>
                          
                          <button class="account-tab" @click="userWatch();current_tab='my_watchlist'">
                            <h5>My Watchlist</h5>
                            <img src="/m1/images/stream_right_arrow.png">
                          </button>
                          
                          <button class="account-tab" @click="mySubscription();current_tab='my_subscription'">
                            <h5>My Subscription</h5>
                            <img src="/m1/images/stream_right_arrow.png">
                          </button>
                          
                          <button class="account-tab" @click="myRents();current_tab='my_rents'">
                            <h5>My Rentals</h5>
                            <img src="/m1/images/stream_right_arrow.png">
                          </button>
                          
                          <button class="account-tab" @click="myTransactions();current_tab='my_transactions'">
                            <h5>My Transactions</h5>
                            <img src="/m1/images/stream_right_arrow.png">
                          </button>
                          
                          <button class="account-tab" v-b-modal.delete-account @click="current_tab='delete_account'">
                            <h5>Delete Account</h5>
                            <img src="/m1/images/stream_right_arrow.png">
                          </button>
                          <button class="account-tab" @click="signOut()">
                            <h5>Log out</h5>
                            <img src="/m1/images/stream_right_arrow.png">
                          </button>
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
                          <button class="account-tab" @click="show_img=!show_img">
                            <h5>Subtitles</h5>
                            <img src="/m1/images/toggle.png" style="width:40px;object-fit:contain;" v-if="show_img">
                            <img src="/m1/images/off-toggle.png" style="width:40px;object-fit:contain;" v-else>
                          </button>
                          <button class="account-tab">
                            <h5>Subtitles Language</h5>
                            <h6>English</h6>
                          </button>
                         
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
                         
                          <button class="account-tab py-2" style="background:initial;min-height:40px;">
                            <h5 class="font-weight:500;">Today</h5>
                          </button>
                          <button class="account-tab py-2" style="background:initial;min-height:40px;">
                            <h5 class="font-weight:500;">Earth</h5>
                          </button>
                          <button class="account-tab py-2" style="background:initial;min-height:40px;">
                            <h5 class="font-weight:500;">Zaloria</h5>
                          </button>
                          <button class="account-tab py-2" style="background:initial;min-height:40px;">
                            <h5 class="font-weight:500;">2052</h5>
                          </button>
                          <button class="account-tab py-2" style="background:initial;min-height:40px;">
                            <h5 class="font-weight:500;">Infinite</h5>
                          </button>
                          <button class="account-tab py-2" style="background:initial;min-height:40px;">
                            <h5 class="font-weight:500;">Pink City</h5>
                          </button>
                         
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
                          
                          <button class="account-tab">
                            <h5>FAQ’s</h5>
                            <img src="/m1/images/stream_right_arrow.png">
                          </button>
                          <button class="account-tab">
                            <h5>Privacy Policy</h5>
                            <img src="/m1/images/stream_right_arrow.png">
                          </button>
                          <button class="account-tab">
                            <h5>Contact us on</h5>
                            <h6>support@jetstream.com</h6>
                          </button>
                    </div>
                  </div>
                </b-tab>
              </b-tabs>
            </b-card>
          </div>
          <div class=" profile-body px-4" v-if="current_tab=='my_profile'">
            <div class="card p-4" >
                              <div class="flex-align3 g2">
                                <button class="focus-btn border-0" style="background-color:initial;width:30px;" @click="current_tab='settings'"><img src="/all-images/nav_left.png"></button>
                                <h5 class="font-weight-600 text-16">Edit Profile</h5>
                              </div>
                              
                              <form ref="updateProfile" @submit.prevent="updateProfile()">
                                  <div class="edit-profile col-lg-6" style="">
                                        <label class="input my-3">
                                          <input class="input__field" type="text" v-model="profile.username" name="username" placeholder=" " required />
                                          <span class="input__label">Your full name</span>
                                        </label>
                                        <label class="input my-3">
                                          <input class="input__field" type="number" v-model="profile.phone" name="phone" placeholder=" " />
                                          <span class="input__label">Mobile number</span>
                                        </label>
                                        <label class="input my-3">
                                          <input class="input__field" type="date" v-model="profile.dob" name="dob" placeholder=" " />
                                          <span class="input__label">Date of birth</span>
                                        </label>
                                        <div class=" p-0">
                                          <label class="text-14">Gender</label>
                                          <div class="my-3 d-flex" style="gap:10px;">
                                              <button type="button" class="foucs-btn gender-btn btn" v-for="gender in genders" :class="profile.gender==gender?'active_btn':''" @click="profile.gender=gender">{{gender}}</button>
                                              <input type="hidden" name="gender" v-model="profile.gender">
                                            </div>
                                          </div>
                                    </div>
                                    <div class=" col-lg-6 mx-auto" style="border-top: 0.5px solid #484848!important;">
                                      
                                        <div class="my-3 d-flex" style="gap:10px;">
                                          <button type="button" class="foucs-btn gender-btn btn" @click="view_profile=true" style="aspect-ratio: 2/.3;">Go back</button>
                                          <button type="submit" class="btn-light btn foucs-btn w-100" style="aspect-ratio: 2/.4;">Save changes</button>
                                        </div>
                                    </div>
                                </form>
                              
                          </div>
          </div>
          <div class=" profile-body px-4" v-if="current_tab=='my_watchlist'">
            <div class="card p-4" >
                            <div class="flex-align3 g2">
                                <button class="focus-btn border-0" style="background-color:initial;width:30px;" @click="current_tab='settings'"><img src="/all-images/nav_left.png"></button>
                                <h5 class="font-weight-600 text-16">My Watchlist</h5>
                            </div>
                            <div class="profile-tab">
                              <div class="row" style="margin-left:-7px;margin-right:-7px;">
                                  <div class="col-4 col-md-2" style="padding:0px;" v-for="watch in user_watchs">
                                      <div class="image-row" >
                                        <div class="hover-modal image" >
                                            <router-link :to="edit?'':{name:'video',params: { type: slugify(watch.movie_detail.type), category: slugify(watch.movie_detail.category_detail.name), slug: watch.movie_detail.slug }, query: {language:watch.movie_detail.language_detail.name}}">
                                                <div class="position-relative" >
                                                    <img :src="api_url+watch.movie_detail.thumbnail">
                                                            
                                                    <div class="hover-modal-div">
                                                              
                                                        <div class="small-details">
                                                            <h5 class="text-14 font-weight-500 mt-1 text-white">{{watch.movie_detail.name}}</h5>
                                                            <h5 class="text-10 font-weight-500 mt-1 text-light">{{dateFormate(watch.created_on)}}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </router-link>
                                        </div>          
                                      </div> 
                                  </div>
                              </div>
                            </div>
            </div>
          </div>
          <div class=" profile-body px-4" v-if="current_tab=='my_subscription'">
            <div class="card p-4" >
                            <div class="flex-align3 g2">
                                <button class="focus-btn border-0" style="background-color:initial;width:30px;" @click="current_tab='settings'"><img src="/all-images/nav_left.png"></button>
                                <h5 class="font-weight-600 text-16">My Subscription</h5>
                            </div>
                            <div class="card p-3" >
                              <div class="profile-tab">
                                <table class="table table-striped">
                                    <tr class="bg-dark-t1">
                                        <th>Plan</th>
                                        <th>Price</th>
                                        <th>Validity</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                    </tr>
                                    <tr v-for="(subscription,key) in subscriptions">
                                        <th>{{subscription.plan_detail.name}}</th>
                                        <th>{{subscription.plan_detail.currency_symbol}}{{subscription.plan_detail.price}}</th>
                                        <th>{{subscription.plan_detail.duration}}{{subscription.plan_detail.date_type}}{{checkMult(subscription.plan_detail.duration)}}</th>
                                        <th>{{dateFormate(subscription.created_on)}}</th>
                                        <th>
                                          <span v-if="key==0" class="badge badge-success">Current</span>
                                          <span v-else class="badge badge-danger">Expired</span>
                                        </th>
                                    </tr>
                                </table>
                              </div>
                            </div>
                            
            </div>
          </div>
          <div class=" profile-body px-4" v-if="current_tab=='my_rents'">
            <div class="card p-4" >
                            <div class="flex-align3 g2">
                                <button class="focus-btn border-0" style="background-color:initial;width:30px;" @click="current_tab='settings'"><img src="/all-images/nav_left.png"></button>
                                <h5 class="font-weight-600 text-16">My Rentals</h5>
                            </div>
                            <div class="card p-3" >
                              <div class="profile-tab">
                                <table class="table table-striped">
                                    <tr class="bg-dark-t1">
                                        <th>Video</th>
                                        <th>Price</th>
                                        <th>Validity</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                    </tr>
                                    <tr v-for="(rent,key) in rents">
                                        <th>{{rent.movie_detail.name}}</th>
                                        <th>{{rent.movie_detail.currency_symbol}}{{rent.price}}</th>
                                        <th>{{rent.movie_detail.rent_video.validity}} {{rent.movie_detail.rent_video.duration}}{{checkMult(rent.movie_detail.rent_video.validity)}}</th>
                                        <th>{{dateFormate(rent.created_on)}}</th>
                                        <th>
                                          <span v-if="rent.active" class="badge badge-success">Active</span>
                                          <span v-else class="badge badge-danger">Expired</span>
                                        </th>
                                    </tr>
                                </table>
                              </div>
                            </div>
                            
                            
            </div>
          </div>
          <div class=" profile-body px-4" v-if="current_tab=='my_transactions'">
            <div class="card p-4" >
                            <div class="flex-align3 g2">
                                <button class="focus-btn border-0" style="background-color:initial;width:30px;" @click="current_tab='settings'"><img src="/all-images/nav_left.png"></button>
                                <h5 class="font-weight-600 text-16">My Rentals</h5>
                            </div>
                            <div class="card p-3" >
                              <div class="profile-tab">
                                <table class="table table-striped">
                                    <tr class="bg-dark-t1">
                                        <th>Payment Id</th>
                                        <th>Payment</th>
                                        <th>Payment Method</th>
                                        <th>Amount</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                    </tr>
                                    <tr v-for="(transaction,key) in transactions">
                                        <th>{{transaction.payment_id}}</th>
                                        <th>{{transaction.name}}</th>
                                        <th>{{transaction.payment_type}}</th>
                                        <th>{{transaction.details?transaction.details.data.currency+' '+transaction.amount:''}}</th>
                                        <th>{{dateFormate(transaction.created_on)}}</th>
                                        <th>
                                          <span v-if="transaction.status=='Success'" class="badge badge-success">{{transaction.status}}</span>
                                          <span v-else class="badge badge-danger">{{transaction.status}}</span>
                                        </th>
                                    </tr>
                                </table>
                              </div>
                            </div>
                            
                            
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import MainHeader from '/src/views/app/m1/header'
import MainFooter from '/src/views/app/m1/footer'
export default {
  props: ['edit','blocks','current_block'],
  metaInfo: {
    title: "Movies"
  },
  components:{
    MainHeader,
    MainFooter,
  },
  data() {
    return {
      start:false,
      current_page:{},
      profile:{},
      subscriptions:[],
      rents:[],
      transactions:[],
      user_watchs:[],
      view_profile:true,
      genders:['Male','Female','Other'],
      current_tab : 'settings',
      is_start:false,
    };
  },
  mounted(){
   this.getProfile()
  },
  methods: {
    getProfile() {
        var headers = new Headers();
        headers.append("Authorization", "Bearer "+this.$root.token);
        fetch(this.api_url+'/users/users/'+this.userId+'/', {
            method : 'get',
            headers: headers,
        })
        .then((response) => {
            return response.json()
        })
        .then((jsonData) => {
            this.is_start = true

            this.profile = jsonData
        })
    },
    updateProfile() {
        var formdata = new FormData(this.$refs['updateProfile'])
        var headers = new Headers();
        headers.append("Authorization", "Bearer "+this.$root.token);
        fetch(this.api_url+'/customer/profile/'+this.userId+'/', {
            method : 'put',
            body : formdata,
            headers: headers,
        })
        .then((response) => {
            return response.json()
        })
        .then((jsonData) => {
            if(jsonData.id>0){
                this.showAlert('Successfully Saved')
                this.profile = jsonData
            }
        })
    },
    mySubscription() {
        var headers = new Headers();
        headers.append("Authorization", "Bearer "+this.$root.token);
        fetch(this.api_url+'/customer/subscription/', {
            method : 'get',
            headers: headers,
        })
        .then((response) => {
            return response.json()
        })
        .then((jsonData) => {
            this.subscriptions = jsonData
        })
    },
    myRents() {
        var headers = new Headers();
        headers.append("Authorization", "Bearer "+this.$root.token);
        fetch(this.api_url+'/customer/rents/', {
            method : 'get',
            headers: headers,
        })
        .then((response) => {
            return response.json()
        })
        .then((jsonData) => {
            this.rents = jsonData
        })
    },
    myTransactions() {
        var headers = new Headers();
        headers.append("Authorization", "Bearer "+this.$root.token);
        fetch(this.api_url+'/customer/transactions/', {
            method : 'get',
            headers: headers,
        })
        .then((response) => {
            return response.json()
        })
        .then((jsonData) => {
            this.transactions = jsonData
        })
    },
    userWatch() {
        var headers = new Headers();
        headers.append("Authorization", "Bearer "+this.$root.token);
        fetch(this.api_url+'/customer/user_watch/', {
            method : 'get',
            headers: headers,
        })
        .then((response) => {
            return response.json()
        })
        .then((jsonData) => {
            this.user_watchs = jsonData
        })
    },
  },
};
</script>
<style scoped>
  
  @import '/m1/style/style.css';

</style>
<style>

  .capcee-profile .site-wrapper{
  background:#0f171e;
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
    padding: 40px 30px 30px 100px;

}

.profile-body .tab-content.col{
  background-color: #0f171e;
}
.profile-body .col-auto {
    
    background-color: #0f171e;
    padding: 20px 0;
    min-width:300px;

}
.profile-body .card {
    border-radius: 0px;
    border: initial;
    background: #172531;
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
.profile-body .nav-pills .nav-link:hover{
   background: #172531;
   
}
.profile-body .nav-pills .nav-link:focus{
   background: #172531;
   
}
.profile-body .nav-pills .nav-link.active, .profile-body .nav-pills .nav-link.active:hover,  .profile-body .nav-pills .nav-link.active:focus, .profile-body .nav-pills .show > .nav-link {
    color: #0f171e;
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
  background-color:#172531;
  padding:2px 10px;
  font-weight:100;
}

.edit-profile{
  margin:20px auto 40px auto;
}
.gender-btn.btn {
    border: 1px solid #bdbdbd;
    background-color: #172531;
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
    background:#172531;
    padding:16px;
    border-radius:4px;
    cursor:pointer;
    min-height:65px;
    border:none;
}
.account-tab:hover{
    background: #23384a!important;
    outline:none;
}
.account-tab:focus{
    background: #23384a!important;
    outline:none;

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
::-webkit-calendar-picker-indicator {
    filter: invert(1);
}
.table th, .table td {
   
    font-weight: 500;
    font-size: 14px;
}
</style>
