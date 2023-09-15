
<template>
  <div class="main-content capcee-profile" :class="$root.mode=='light'?'mode_change':''">
    <div class="site-wrapper" v-if="is_start"> 
        <MainHeader :edit="edit" :blocks="blocks" :current_block="current_block"></MainHeader>
        <div class="profile-container">
          <div class=" profile-body ">
            <b-card no-body>
              <b-tabs pills card vertical>
                <b-tab title="My Profile" active>
                  <div class="profile-tab" v-if="view_profile">
                    <div class="pb-4 tabs-heading">
                      <h4 class="font-weight-600 text-22">My Profile</h4>
                    </div>
                    <div class="flex-align3 py-4" style="gap:15px;">
                      <h6 class="profile-pic">{{profile.username?profile.username[0]:''}}</h6>
                      <div class="profile-head">
                        <h5 class="text-20 font-weight-600 text-22">{{profile.username}}</h5>
                        <h6 class="text-info text-13 mt-1 cursor-pointer" @click="view_profile=false">Edit Profile</h6>

                      </div>
                    </div>
                  </div>
                  <div class="profile-editing-tab"  v-else>
                    <div class="pb-4 tabs-heading">
                      <h4 class="font-weight-600 text-22 ">Edit Profile</h4>
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
                        <div class=" col-lg-6 mx-auto" style="border-top: 0.5px solid lightgray!important;">
                           
                            <div class="my-3 d-flex" style="gap:10px;">
                                <button type="button" class="gender-btn btn" @click="view_profile=true" style="aspect-ratio: 2/.4;">Go back</button>
                              <button type="submit" class="gender-btn btn active_btn" style="aspect-ratio: 2/.4;">Save changes</button>
                            </div>
                        </div>
                    </form>
                  </div>
                </b-tab>
                <b-tab title="My Watchlist" @click="userWatch()">
                  <div class="pb-4 tabs-heading">
                    <h4 class="font-weight-600 text-22">My Watchlist</h4>
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
                                                            <h5 class="text-14 font-weight-600 text-dark">{{watch.movie_detail.name}}</h5>
                                                            <h5 class="text-10 font-weight-600 mt-1 text-dark"><span class=" pr-2">98% match</span><span class=" pr-2">2022</span>2h 30m</h5>
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
                  <div class="pb-4 tabs-heading">
                    <h4 class="font-weight-600 text-22">My Subscription</h4>
                  </div>
                  <div class="profile-tab">
                    <table class="table table-striped">
                        <tr class="">
                            <th>Plan</th>
                            <th>Price</th>
                            <th>Validity</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                        <tr v-for="(subscription,key) in subscriptions">
                            <td>{{subscription.plan_detail.name}}</td>
                            <td>{{subscription.plan_detail.currency_symbol}}{{subscription.plan_detail.price}}</td>
                            <td>{{subscription.plan_detail.duration}}{{subscription.plan_detail.date_type}}{{checkMult(subscription.plan_detail.duration)}}</td>
                            <td>{{dateFormate(subscription.created_on)}}</dh>
                            <td>
                              <span v-if="key==0" class="badge badge-success">Current</span>
                              <span v-else class="badge badge-danger">Expired</span>
                            </td>
                        </tr>
                    </table>
                  </div>
                </b-tab>
                <b-tab title="My Rentals" @click="myRents()">
                  <div class="pb-4 tabs-heading">
                    <h4 class="font-weight-600 text-22">My Rentals</h4>
                  </div>
                  <div class="profile-tab">
                    <table class="table table-striped">
                        <tr class="">
                            <th>Video</th>
                            <th>Price</th>
                            <th>Validity</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                        <tr v-for="(rent,key) in rents">
                            <td>{{rent.movie_detail.name}}</td>
                            <td>{{rent.movie_detail.currency_symbol}}{{rent.price}}</td>
                            <td>{{rent.movie_detail.rent_video.validity}} {{rent.movie_detail.rent_video.duration}}{{checkMult(rent.movie_detail.rent_video.validity)}}</td>
                            <td>{{dateFormate(rent.created_on)}}</td>
                            <td>
                              <span v-if="rent.active" class="badge badge-success">Active</span>
                              <span v-else class="badge badge-danger">Expired</span>
                            </td>
                        </tr>
                    </table>
                  </div>
                </b-tab>
                <b-tab title="My Transactions" @click="myTransactions()">
                  <div class="pb-4 tabs-heading">
                    <h4 class="font-weight-600 text-22">My Transactions</h4>
                  </div>
                  <div class="profile-tab">
                    <table class="table table-striped">
                        <tr class="">
                            <th>Payment Id</th>
                            <th>Payment</th>
                            <th>Payment Method</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                        <tr v-for="(transaction,key) in transactions">
                            <td>{{transaction.payment_id}}</td>
                            <td>{{transaction.name}}</td>
                            <td>{{transaction.payment_type}}</td>
                            <td>{{transaction.details?transaction.details.data.currency+' '+transaction.amount:''}}</td>
                            <td>{{dateFormate(transaction.created_on)}}</td>
                            <td>
                              <span v-if="transaction.status=='Success'" class="badge badge-success">{{transaction.status}}</span>
                              <span v-else class="badge badge-danger">{{transaction.status}}</span>
                            </td>
                        </tr>
                    </table>
                  </div>
                </b-tab>
              </b-tabs>
            </b-card>
          </div>
          

            <MainFooter :edit="edit" :blocks="blocks" :current_block="current_block"></MainFooter>
        </div>



    </div>
    <div class="site-wrapper profile-loading" v-else> 
        <MainHeader :edit="edit" :blocks="blocks" :current_block="current_block"></MainHeader>
        <div class="profile-container">
          <div class=" profile-body ">
            <b-card no-body>
              <b-tabs pills card vertical>
                <b-tab>
                  <div class="profile-tab p-0" >
                    <div class="pb-4 tabs-heading">
                      <h6 class="height5 animated-background" style="width:150px;"></h6>
                    </div>
                    <div class="flex-align3 py-4" style="gap:15px;">
                      <h6 class="animated-background rounded-circle" style="width:50px;height:50px;"></h6>
                      <div class="profile-head">
                        <h6 class="height2 animated-background" style="width:150px;"></h6>
                        <h6 class="height1 animated-background mt-2" style="width:90px;"></h6>
                      </div>
                    </div>
                  </div>
                  
                </b-tab>

                
              </b-tabs>
            </b-card>
          </div>
          

            <MainFooter :edit="edit" :blocks="blocks" :current_block="current_block"></MainFooter>
        </div>



    </div>
    
    
  </div>
</template>

<script>
import MainHeader from '/src/views/app/t1_light/header'
import MainFooter from '/src/views/app/t1_light/footer'
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
  
  @import '/t1_light/style/style.css';
  @import '/t1_light/style/load-style.css';


</style>
<style>
  .active_btn{
    background: linear-gradient(45deg, rgb(130, 48, 198), rgb(125, 32, 142))!important;
    border: 1px solid #8230c6!important;
    color:white!important;
  }
  .capcee-profile .site-wrapper{
  background:#fff;
  position: absolute;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
  }


.profile-container{
  z-index: 9999999;
    position: absolute;
    height: 100vh;
    overflow: auto;
    width: 100%;
   
    padding-top: 70px;
}

.profile-body .tab-content{
  background-color:#f4f4f499;
}
.profile-body .card-header {
    
    background-color: #f4f4f4;
    padding: 10px;
    min-width:200px;

}
.profile-loading .profile-body .card-header {
    animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background-color: #eeeeee;
  background: linear-gradient(to right, #eeeeee 8%, lightgray 18%, #eeeeee 33%);
  background-size: 800px 104px;
  border-radius: 6px;

  position: relative;
    min-width:200px;
    min-height:350px;

}
.profile-body .card {
 
    border-radius: 0px;
    border: initial;
 
    padding: 2% 4%;
    background-color: rgb(244, 244, 244);
}
.profile-body .nav-pills .nav-link {
    
    color: #999999;
    padding: 15px 30px;
    white-space: nowrap;

}
.profile-body .nav-pills .nav-link.active, .profile-body .nav-pills .show > .nav-link {
    color: #000;
    border-radius: 10px!important;
    font-weight:800;
    background-color:#f4f4f4;

}
.profile-loading .profile-body .nav-pills .nav-link.active, .profile-body .nav-pills .show > .nav-link {
    
    border-right: none;
   
}
.profile-body .no-gutters {
  
     max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    display:block;
}
.profile-body .tabs-heading{
   border-bottom: .5px solid lightgray!important;

}
.text-info {
    color: #8230c6!important;
}
.profile-pic {
    background: linear-gradient(45deg, rgb(130, 48, 198), rgb(125, 32, 142));
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-weight: 600;
    color:white;
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
  background-color:#fbf3ff;
  padding:2px 10px;
  font-weight:100;
}

.edit-profile{
  margin:40px auto;
}
.gender-btn.btn {
    border: 1px solid #f4f4f4;
    background-color: #f4f4f4;
    color: black;
    border-radius: 6px;
    width:100%;
  }
@media (max-width: 990px) {
    .profile-body {
    margin: 20px;
}
}
.profile-body .card-header{
    display: flex;
    flex-direction: row!important;
    overflow: auto;
    width: 100%;
    flex-wrap: nowrap;
     border-radius:10px!important;
    margin-bottom:10px;
    background:#fff;
  }
  .profile-body {
    margin: 0px;
}


.tab-content > .tab-pane {
   
    overflow: auto;
    border-radius: 10px;
    background: #fff;
    min-height:50vh;
}
.table th, .table td {

    font-weight: 400;
}
.profile-body .badge {

    font-weight: 400;
}


</style>
