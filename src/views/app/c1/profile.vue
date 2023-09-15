
<template>
  <div class="main-content capcee-profile" :class="$root.mode=='light'?'mode_change':''">
    
    <div class="site-wrapper"> 
        <div class="search-header m-0 w-100 flex-align" style="background: #353a40;">
            <div class="w-100 flex-align3 g3">
              <router-link :to="edit?'':{name:'home'}" class="float-left">
                <img src="/all-images/nav_left.png" style="width:20px;" @click="search_page='close'">
              </router-link>
              <h5 class="text-white font-weight-400 text-18 mb-0 ml-2">My {{ slugToWord(current_tab) }}</h5>
            </div>
        </div>
        <div class=" profile-body ">
          <div>
            <div>
              <div v-if="current_tab=='profile'">
                <div class="profile-tab p-3" v-if="view_profile">
                  <!--<div class="pb-4 tabs-heading">
                    <h4 class="font-weight-600">My Profile</h4>
                  </div>-->
                  <div class=" py-4" style="margin: 0 auto;display: flex;flex-direction: column;align-items: center;">
                    <h6 class="profile-pic">{{profile.username?profile.username[0]:''}}</h6>
                    <div class="profile-head text-center mt-2">
                      <h5 class="text-20 font-weight-600">{{profile.username}}</h5>
                      <h6 class="btn text-13 px-4 mt-1" style="background-color:#494a4a;border-radius:6px;border:none;" @click="view_profile=false">Edit Profile</h6>
                    </div>
                  </div>
                </div>
                <div class="profile-editing-tab px-2 py-3"  v-else>
                  <div class="pb-2 tabs-heading px-3 py-2">
                    <h6 class="font-weight-400 text-18">Edit Profile</h6>
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
              </div>
              <div v-else-if="current_tab=='watchlist'">
                
                <div class="profile-tab px-2 py-3">
                    <div class="row m-0" >
                      <div class="col-4" style="padding:0px;" v-for="watch in user_watchs">
                          <div class="image-row" >
                            <div class="hover-modal image" >
                                <router-link :to="edit?'':{name:'video',params: { type: slugify(watch.movie_detail.type), category: slugify(watch.movie_detail.category_detail.name), slug: watch.movie_detail.slug }, query: {language:watch.movie_detail.language_detail.name}}">
                                    <div class="position-relative" >
                                        <img :src="api_url+watch.movie_detail.thumbnail">
                                        <div class="hover-modal-div">
                                            <div class="small-details">
                                                <h5 class="text-14 mb-0 font-weight-300 mt-1 text-white" style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap; max-width: 105px;">{{watch.movie_detail.name}}</h5>

                                                <h5 class="text-10 mb-0 font-weight-600 mt-1 text-light">{{dateFormate(watch.created_on)}}</h5>
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
              <div v-else-if="current_tab=='subcriptions'">
                <div class="profile-tab px-2 py-3">
                  <table class="table table-striped">
                      <tr class="table-head-tr">
                          <th>Plan</th>
                          <th>Price</th>
                          <th>Validity</th>
                          <th>Date</th>
                          <th>Status</th>
                      </tr>
                      <tr v-for="(subscription,key) in subscriptions">
                          <td>{{subscription.plan_detail.name}}</th>
                          <td>{{subscription.plan_detail.currency_symbol}}{{subscription.plan_detail.price}}</td>
                          <td>{{subscription.plan_detail.duration}}{{subscription.plan_detail.date_type}}{{checkMult(subscription.plan_detail.duration)}}</td>
                          <td>{{dateFormate(subscription.created_on)}}</td>
                          <td>
                            <span v-if="key==0" class="badge badge-success">Current</span>
                            <span v-else class="badge badge-danger">Expired</span>
                          </td>
                      </tr>
                  </table>
                </div>
              </div>
              <div v-else-if="current_tab=='rents'">
                
                <div class="profile-tab">
                  <table class="table table-striped">
                      <tr class="table-head-tr">
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
              <div v-else-if="current_tab=='transactions'">
                
                <div class="profile-tab px-2 py-3">
                  <table class="table table-striped">
                      <tr class="table-head-tr">
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
              </div>
            </div>
          </div>
        </div>
        



    </div>
    
    
  </div>
</template>

<script>
import MainHeader from '/src/views/app/c1/header'
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
      current_tab:'profile',
      genders:['Male','Female','Other'],
    };
  },
  mounted(){
    if(this.$route.query.tab){
      this.current_tab = this.$route.query.tab
    }
    if(this.current_tab=='watchlist'){
      this.userWatch()
    }else if(this.current_tab=='transactions'){
      this.myTransactions()
    }else if(this.current_tab=='subcriptions'){
      this.mySubscription()
    }else if(this.current_tab=='rents'){
      this.myRents()
    }
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
  
  @import '/c1/style/style.css';

</style>
<style>
  .active_btn{
    background-color: #ffc107!important;
    border: 1px solid #ffc107!important;
    color:black!important;
  }
  .capcee-profile .site-wrapper{
  //background:#24272c;
  position: absolute;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    max-width: 1000px;
  }
 <!-- .capcee-profile .site-wrapper .tabs.row.no-gutters--.

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
.profile-tab {
    overflow: auto;
    height: calc(100vh - 60px);
    overflow: auto;
}
.profile-body{
  margin:40px 80px;
}
.profile-body .tab-content.col{
  background-color: #24272c;
}
.profile-body .card-header {
    
    background-color: #24272c;
    padding:  0 20px;
    min-width:200px;
    display: flex;
    flex-direction: row!important;
    overflow: auto;
    gap:10px;
    flex-wrap:nowrap;

}
.profile-body .card {
    border-radius: 0px;
    border: initial;
}
.profile-body .nav-pills .nav-link {
    
    color: #999999;
    padding: 5px 14px;
    margin: 10px 0px;
    white-space: nowrap;
    font-size: 14px;
    background:#353a4030;
    border-radius:6px!important;
    

}
.profile-body .nav-pills .nav-link.active, .profile-body .nav-pills .show > .nav-link {
    color: #fff;
    background-color: initial;
    border-right: 1px solid white;
    font-weight:800;
    background: #353a40;

}

.profile-body .tabs-heading{
   border-bottom: .5px solid #484848!important;

}
.text-info {
    color: lightgray!important;
}
.profile-pic {
    background-color:#746c55;
    width: 110px;
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-weight: 500;
    font-size:50px;
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
  background-color:#24272c;
  padding:2px 10px;
  font-weight:100;
}

.edit-profile{
  margin:20px 0;
}
.gender-btn.btn {
    border: 1px solid #bdbdbd;
    background-color: #24272c;
    color: white;
    border-radius: 6px;
    width:100%;
  }

    .profile-body {
    margin: 20px;
}


  .profile-body {
    margin: 0px;
}
.profile-body .nav-pills .nav-link.active, .profile-body .nav-pills .show > .nav-link {
   
    border-right: initial;
   
}


.col-auto{
    width:100%;
}
.table-head-tr{
    background: #353a40;
}
.table th, .table td {
    padding: 0.4rem 0.7rem;
}
.table th{
    font-size: 14px;
}
.table td {
    font-size: 13px;
}
::-webkit-calendar-picker-indicator {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 24 24"><path fill="%23bbbbbb" d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"/></svg>');
  }
</style>
