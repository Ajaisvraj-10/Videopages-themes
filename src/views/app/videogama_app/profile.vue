
<template>
  <div class="main-content capcee-profile" :class="$root.mode=='light'?'mode_change':''">
    
    <div class="site-wrapper"> 
        <MainHeader :edit="edit" :blocks="blocks" :current_block="current_block"></MainHeader>
        <div class="profile-container">
          
          <div class=" profile-body ">
            <b-card no-body>
              <b-tabs pills card vertical>
                <b-tab title="My Profile" active>
                  <div class="profile-tab" v-if="view_profile">
                    <div class="tabs-heading">
                      <h4 class="font-weight-600">My Profile</h4>
                    </div>
                    <div class="flex-align3 py-4" style="gap:15px;">
                      <h6 class="profile-pic">{{profile.username?profile.username[0]:''}}</h6>
                      <div class="profile-head">
                        <h5 class="text-20 font-weight-600">{{profile.username}}</h5>
                        <h6 class="text-info text-13 mt-1" @click="view_profile=false">Edit Profile</h6>

                      </div>
                    </div>
                  </div>
                  <div class="profile-editing-tab"  v-else>
                    <div class="tabs-heading">
                      <h4 class="font-weight-600">Edit Profile</h4>
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
                                  <button type="button" class="gender-btn btn" v-for="gender in genders" :class="profile.gender==gender?'active_btn':''" @click="profile.gender=gender">{{gender}}</button>
                                  <input type="hidden" name="gender" v-model="profile.gender">
                                </div>
                              </div>
                        </div>
                        <div class=" col-lg-6" style="border-top: 0.5px solid #484848!important;">
                           
                            <div class="my-3 d-flex" style="gap:10px;">
                                <button type="button" class="gender-btn btn" @click="view_profile=true" style="aspect-ratio: 2/.45;">Go back</button>
                              <button type="submit" class="gender-btn btn active_btn" style="aspect-ratio: 2/.45;">Save changes</button>
                            </div>
                        </div>
                    </form>
                  </div>
                </b-tab>
                <b-tab title="My Watchlist" @click="userWatch()">
                  <div class="tabs-heading">
                    <h4 class="font-weight-600">My Watchlist</h4>
                  </div>
                  <div class="profile-tab">
                     <div class="row">
                        <div class="col-2" v-for="watch in user_watchs">
                            <div class="image-row" >
                              <div class="hover-modal image" >
                                  <router-link :to="edit?'':{name:'video',params: { type: slugify(watch.movie_detail.type), category: slugify(watch.movie_detail.category_detail.name), slug: watch.movie_detail.slug }, query: {language:watch.movie_detail.language_detail.name}}">
                                      <div class="position-relative" >
                                          <img :src="api_url+watch.movie_detail.thumbnail">
                                                  
                                          <div class="hover-modal-div">
                                                     
                                              <div class="small-details">
                                                  <h5 class="text-14 font-weight-600 mt-1 text-dark2">{{watch.movie_detail.name}}</h5>
                                                  <h5 class="text-10 font-weight-600 mt-1 text-dark"><span class=" pr-2"></span>{{dateFormate(watch.created_on)}}</h5>
                                              </div>
                                          </div>
                                      </div>
                                  </router-link>
                              </div>          
                            </div> 
                        </div>
                    </div>
                  </div>
                </b-tab>
                <b-tab title="My Subcription" @click="mySubscription()">
                  <div class="tabs-heading">
                    <h4 class="font-weight-600">My Subscription</h4>
                  </div>
                  <div class="profile-tab">
                    <table class="table table-striped">
                        <tr class="bg-dark">
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
                </b-tab>
                <b-tab title="My Rentals" @click="myRents()">
                  <div class="tabs-heading">
                    <h4 class="font-weight-600">My Rentals</h4>
                  </div>
                  <div class="profile-tab">
                    <table class="table table-striped">
                        <tr class="bg-dark">
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
                </b-tab>
                <b-tab title="My Transactions" @click="myTransactions()">
                  <div class="tabs-heading">
                    <h4 class="font-weight-600">My Transactions</h4>
                  </div>
                  <div class="profile-tab">
                    <table class="table table-striped">
                        <tr class="bg-dark">
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
                </b-tab>
              </b-tabs>
            </b-card>
          </div>
          

          <footer class="footer pt-2 pb-5" >
                    <div class="flex-align">
                        <div class="flex-align3" style="gap:10px;">
                            <h6 class="text-14 mb-0">Download Apps</h6>
                            <img src="/videogama_app/images/play_store.png">
                            <img src="/videogama_app/images/app_store.png">

                        </div>
                        <div class="flex-align3 social2" >
                            <h6 class="text-14 mr-2 mb-0">Connect with us</h6>
                            <a v-for="social_link in social_links" :href="social_link.link" target="_blank"><i :class="social_link.icon"></i></a>
                        </div>
                    </div>
                                  
          </footer>
        </div>



    </div>
    
    
  </div>
</template>

<script>
import MainHeader from '/src/views/app/videogama_app/header'
export default {
  props: ['edit','blocks','current_block'],
  metaInfo: {
    title: "Movies"
  },
  components:{
    MainHeader,
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
  
  @import '/videogama_app/style/style.css';

</style>
<style>
  .active_btn{
    background-color: #8230c6!important;
    border: 1px solid #8230c6!important;
  }
  .capcee-profile .site-wrapper{
  //background:#fff;
  position: absolute;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    max-width: 460px;
  }
  .capcee-profile .site-wrapper .tabs.row.no-gutters

.profile-container{
  z-index: 9999999;
    position: absolute;
    height: 100vh;
    overflow: auto;
    width: 100%;
   
    padding-top: 120px;
    overflow: auto;
    height: calc(100vh - 72px);
}
.profile-tab{
    overflow:auto;
}
.profile-body{

  margin-top:150px;
}
.profile-body .tab-content.col{
  //background-color: #fff;
}
.profile-body .card-header {
    
   //background-color: #fff;
    padding:  0;
    min-width:200px;
    border-bottom:1px solid gray!important;

}
.profile-body .card {
    border-radius: 0px;
    border: initial;
}
.profile-body .nav-pills .nav-link {
    
    color: #999999;
    padding: 5px 10px;
    margin: 10px 0px;
    white-space: nowrap;
    font-size: 14px;

}
.profile-body .nav-pills .nav-link.active, .profile-body .nav-pills .show > .nav-link {
    color: #000;
    background-color: initial;
    border-right: 1px solid white;
    border-radius: 0rem!important;
    font-weight:800;

}

.profile-body .tabs-heading{
   border-bottom: .5px solid #484848!important;

}
.text-info {
    color: lightgray!important;
}
.profile-pic {
    background-color:#515151;
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
  color: gray;
  background-color:#fff;
  padding:2px 10px;
  font-weight:100;
}

.edit-profile{
  margin:40px 0;
}
.gender-btn.btn {
    border: 1px solid #bdbdbd;
    background-color: #000;
    color: white;
    border-radius: 6px;
    width:100%;
  }

@media (max-width: 660px) {
  .profile-body .card-header{
    display: flex;
    flex-direction: row!important;
    overflow: auto;
    width: 100vw;
    flex-wrap:nowrap;
  }

.profile-body .nav-pills .nav-link.active, .profile-body .nav-pills .show > .nav-link {
   
    border-right: initial;
   
}

}



</style>
