
<template>
  <div class="main-content capcee-plan">
    
    <div class="site-wrapper"> 
      <div class="px-3 py-2 w-100 plan-header" >
        <div class="flex-align">
            
            <div class="text-center header-right flex-align3" style="gap:20px;">
                      <div v-if="$root.token">
                        <button @click="signOut()" class="btn rounded2" style="background-color: initial;color: white;font-size: 13px;font-weight: 500;border: 1px solid white;border-radius: 5px;">LOGOUT</button>
                      </div>
                      <router-link :to="edit?'':{name:'sign-in'}" v-else>
                          <button class="btn rounded2" style="background-color: initial;color: white;font-size: 13px;font-weight: 500;border: 1px solid white;border-radius: 5px;">LOGIN</button>
                      </router-link>
            </div>
            <div class="flex-align3 px-2" style="gap:20px;">
              <router-link :to="edit?'':{name:'home'}">
                <img src="/video_tv/images/close.png" class="" style="width:16px;">
              </router-link>
             
            </div>
          </div>
      </div>
      <div class="plan-container">
        <div class="plan-sec px-3 " v-if="crnt_tab=='plans'">
          <h6 class="text-white text-14 font-weight-500 text-center mb-3 pb-3">Choose your premium plan</h6>
          <h6 class="text-white text-11 font-weight-400 mb-2">Step 1 of 3</h6>
          <h6 class="text-white text-14 font-weight-500 mb-2">Subscribe to {{current_plan.name}}</h6>
          <div class="plan-card row mx-0">
            
            <div class="col-md-8 plan-card-col" style="display: flex;flex-direction: column;justify-content: center;    background-color: #a056ad14;border-radius: 7px;">
              <h6 class="text-20 font-weight-700 text-white my-2 mb-4">Watch Ad-free with {{current_plan.name}}</h6>
              <div class="plan-items">
                <h6 class="plans">2800+ Blockbuster Movies</h6>
                <i class="fa fa-check"></i>

              </div>
              
              <div class="plan-items">
                <h6 class="plans">150+ Web Series</h6>
                <i class="fa fa-check"></i>

              </div>
              <div class="plan-items">
                <h6 class="plans">{{current_plan.device}} Device</h6>
                <i class="fa fa-check"></i>

              </div>
              <!--<div class="plan-items">
                <h6 class="plans">{{current_plan.description}}</h6>
                <i class="fa fa-info-check"></i>

              </div>-->
              <div class="purchase-button ">
              <button class="btn btn-primary w-100 rounded2 py-2" v-if="current_plan.id" @click="getPaymentMethods();crnt_tab='payment_methods'">Continue with {{current_plan.currency_symbol}}{{current_plan.price}}</button>
            </div>

            </div>
            <div class="col-md-4 plan-card-col plan-prize-card pt-3" style="display: flex;width: 100%;overflow: auto;flex-direction: column;align-items: center;">
              <div class="plans-card" v-for="plan in plans" :style="plan.id==current_plan.id?'background: #de146d14; border-radius:6px;transform:scale(1.1);':'border-radius:6px;'" @click="current_plan=plan">
                <div class="px-3 rounded2-top position-relative" :style="plan.id==current_plan.id?'background: #de146d14; border-radius:6px 6px 0 0;':'border-radius:6px 6px 0 0;padding-bottom:0!important;'" @click="current_plan=plan">
                  
                  <div class="flex-align mb-4" v-if="false">
                    <div class="rounded2 bg-info p-1 text-white font-weight-600 text-12">
                      LIMITED PERIOD OFFER
                    </div>
                    <div class="rounded2 btn-outline-danger p-1  font-weight-600 text-12" style="border: 1px solid red;">
                      Save 30%
                    </div>
                  </div>
                  <div class="d-flex align-items-center justify-content-between ">
                    
                    <h5 class="text-white font-weight-500 py-2  text-14">
                        {{plan.duration}} {{plan.date_type}} plan
                    </h5>
                      
                    
                    <div class="d-flex" >
                      
                      <template v-if="plan.id==current_plan.id">
                        <i class="fa fa-check ml-2 bg-success flex-align2 rounded-circle text-white" style=""></i>
                      </template>
                      <template v-else>
                        <i class="ml-2 bg-light flex-align2 rounded-circle text-white" style="display:none;" @click="current_plan=plan"></i>
                      </template>
                    </div>
                  </div>
                </div>
                <div class="rounded2-bottom px-3 py-2 text-center text-white  text-14 font-weight-500 flex-align" >
                  <h6 class="text-10 text-left">
                    {{plan.description}}
                  </h6>
                  
                  <h6 class="text-white text-14 font-weight-600 ">{{plan.currency_symbol}}{{plan.price}}</h6>
                  
                </div>

              </div>

              

            </div>
            

          </div>
        </div>
        <div class="plan-sec2 px-3 mt-2" v-if="crnt_tab=='payment_methods'">
          <h6 class="text-white text-11 font-weight-400 mb-2">Step 2 of 3</h6>
          <h6 class="text-white text-14 font-weight-500 mb-2">Payment Methods</h6>
          <div class="plan-card2 row mx-0">
            <div class="col-md-12 plan-card-col px-0">
              <h6 class="text-20 font-weight-700 my-2 mb-4">Select Payment Method</h6>

              <button class="btn btn-primary rounded2 py-2 w-100 my-2" v-for="payment_method in payment_methods" @click="setRazorpay(payment_method);crnt_tab='pay'">{{payment_method.name}}</button>
              <h6 class="text-center text-12 mt-2 cursor-pointer" @click="crnt_tab='plans'">Change plan</h6>

              <!--<div class="or-sec">Or</div>
              <div class="d-flex justify-content-center plans-social-icons my-3" style="gap:20px;">
                
                <img src="/zee5_apk/images/google.svg" style="width:40px;">
                <img src="/zee5_apk/images/fb.svg" style="width:40px;">
                <img src="/zee5_apk/images/twitter.svg" style="width:40px;">
              </div>-->

            </div>
           

          </div>
        </div>

        <div class="plan-sec2 px-3" v-if="crnt_tab=='pay'">
          <h6 class="text-white text-11 font-weight-400 mb-2">Step 3 of 3</h6>
          <h6 class="text-white text-14 font-weight-500 mb-2">Payment</h6>
          <div class="plan-card2 row mx-0">
            <div class="col-md-12 plan-card-col">
              <h6 class="text-22 font-weight-600 my-2 mb-4">{{current_method.name}}</h6>
              <div class="text-center">
                <img :src="current_method.logo" style="height:100px">
              </div>
              <h3 class="text-success text-center">{{current_plan.currency_symbol}}{{current_plan.price}}</h3>
              <button class="btn btn-primary rounded2 py-2 w-100 my-2" @click="purchasePlan()" v-if="razorpay_options.key">Pay Now</button>
              <h6 class="text-center text-12 mt-2" @click="crnt_tab='payment_methods'">Change method</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['edit','blocks','current_block'],
  data() {
    return {
      start:false,
      current_page:{},
      menu_click:false,
      crnt_tab:'plans',
      plans:[],
      current_plan:{},
      payment_methods:[],
      current_method:{},
      razorpay_options:{
            key: "",
            amount: "",
            currency: "",
            name: "Purchase Now",
            order_id: "",
            callback_url: "",
      },
    };
  },
  mounted(){
    if(this.edit){
      this.start = true
    }else{
        this.edit=false
        this.blocks = [{},{},{}]
        this.getPage()
    }
    console.log(this.userId)
    this.getPlans()
  },
  methods: {
    getPlans() {
      var headers = new Headers();
      headers.append("Authorization", "Token "+this.$root.token);
      fetch(this.api_url+'/content/plans/', {
          method : 'get',
          headers: headers,
      })
      .then((response) => {
          return response.json()
      })
      .then((jsonData) => {
          this.plans = jsonData
          if(jsonData.length>0){
            this.current_plan = jsonData[0]
          }
      })
    },
    createPlan() {
      var formdata = new FormData()
      formdata.append('user', this.userId)
      formdata.append('plan', this.current_plan.id)
      formdata.append('price', this.current_plan.price)
      var headers = new Headers();
      headers.append("Authorization", "Bearer "+this.$root.token);
      fetch(this.api_url+'/users/user_plans/', {
          method : 'post',
          headers: headers,
          body : formdata
      })
      .then((response) => {
          return response.json()
      })
      .then((jsonData) => {
        if(jsonData.id>0){
          this.showAlert('Plan purchased successfully!')
          this.$router.push('/')
        }else{
          this.showAlert('Something Wrong!')
        }
      })
    },
    getPaymentMethods() {
      var headers = new Headers();
      headers.append("Authorization", "Token "+this.$root.token);
      fetch(this.api_url+'/content/payment_settings/', {
          method : 'get',
          headers: headers,
      })
      .then((response) => {
          return response.json()
      })
      .then((jsonData) => {
        this.payment_methods = jsonData
      })
    },
    setRazorpay(payment_method){
      if(!this.$root.token){
        this.$router.push('/sign-in')
      }
      this.current_method = payment_method
      var headers = new Headers();
      headers.append("Authorization", "Bearer "+this.$root.token);
      fetch(this.api_url+'/payments/razorpay_payment/?data_type=plan&plan_id='+this.current_plan.id, {
        method : 'get',
        headers: headers,
      })
      .then((response) => {
        return response.json()
      })
      .then((jsonData) => {
          this.razorpay_options = {
              key: jsonData.razorpay_merchant_key,
              amount: jsonData.razorpay_amount,
              currency: jsonData.currency,
              name: "Purchase Now",
              order_id: jsonData.razorpay_order_id,
              callback_url: this.api_url+jsonData.callback_url,
          };
      })
    },
    purchasePlan(e){
      var rzp1 = new Razorpay(this.razorpay_options);
      rzp1.open();
      e.preventDefault()
    },
    getPage() {
      var headers = new Headers();
      headers.append("Authorization", "Token "+this.$root.token);
      fetch(this.api_url+'/content/pages_contents/?theme='+theme_name+'&page=/plan', {
          method : 'get',
          headers: headers,
      })
      .then((response) => {
          return response.json()
      })
      .then((jsonData) => {
        this.current_page = jsonData
        this.blocks = jsonData.blocks
        this.start = true
      })
    },
    selectContent(block){
        if(this.edit){
            this.blocks.forEach(function(blk){
                blk.is_edit = false
            })
            block.is_edit=true
            this.$emit('selectedContent', block)
        }
    }
  }

};
</script>
<style scoped>
  
  @import '/video_tv/style/style.css';

</style>
<style>


.main-content.capcee-plan {
    height: 100vh;
    overflow: auto;
    background: #1a2224;
}

.plan-card{

  border-radius:10px;
    margin-bottom: 40px;
    position:relative;
    margin-top:20px;
    cursor:pointer;

  justify-content: center;
}

.plan-card .plan-icon {
   background-color: white;
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
   width: 50px;
    height: 50px;
    position: absolute;
    right: 30px;
    top: -25px;
    z-index: 99;

}
.plan-card .plan-icon img{
    width: 30px;
    height: 30px;
}

.plan-card2{
  
  border-radius:10px;
    margin-bottom: 40px;

  
}

.plan-card-col{
  padding:20px;
}

.plan-card-col h6{
 color:#fff;
 margin: 0;
 font-weight:400;
}
.plan-card-col i{
 color:#de146d;
 margin: 0;
 width: 22px;
    height: 22px;

}
.plan-card-col .plans-card i{
 color:#de146d;
 margin: 0;
 width: 22px;
    height: 22px;
    top: -10px;
    right: -10px;
    position: absolute;
    background-color: white!important;
    color: #de146d!important;
}
.plan-items {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:  10px;
    border-radius: 6px;
    //background-color: #a056ad14;
    margin-bottom: 12px;
}
.plan-sec{
  max-width:990px;
  margin:0 auto;
}
.plan-sec2{
  max-width:460px;
  margin:0 auto;
}
.or-sec{
  width:200px;
  margin: 30px auto;
    text-align: center;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
.or-sec:before {
    content: "";
    position: absolute;
    left: 0;
    width: 42%;
    height: 1px;
    background-color: #bfbfbf;
   
}
.or-sec:after {
    content: "";
    position: absolute;
    right: 0;
    width: 42%;
    height: 1px;
    background-color: #bfbfbf;
   
}
.plans-social-icons img{
  box-shadow: 0 4px 5px 1px #00000033;
    border-radius: 50%;
}
.plans{
  font-size:14px;
  line-height:22px;
  margin-bottom:20px;
  position:relative;
 
  color:black;
  font-weight:500;
  margin-right:5px;
}
.plans-card{
    width: 200px;
    position: relative;
    display: flex;
    flex-direction: column;
    flex: none;
    border:1px solid lightgray;
    border-radius:6px;
}


.plan-header {
    background-image:linear-gradient(rgb(0 0 0 / 64%), #1a2224), url(/video_tv/images/bg1.jpg);
    min-height: 150px;
    background-size: cover;
    //opacity: .5;
   
}
.plan-header i{
  z-index:1;
}
.btn-primary {
   
    background-color: #de146d!important;
    border-color: #de146d!Important;
}
.btn-primary:hover {
   
    box-shadow: 0 8px 25px -8px #de146d;
   
}
/*.purchase-button {
    position: fixed;
    bottom: 0;
    background-color: #0f171e;
    width: 100%;
    left: 0;
    right:0;
    padding: 12px;
    
    margin:0 auto;

}*/
.purchase-button .btn{
    //max-width:500px;
    margin:0 auto;
    display:flex;
    justify-content:center;
}
.plan-sec{
  margin-top:-70px;
}
.plan-prize-card{
   
    gap: 20px;
}
.site-wrapper








@media screen and (max-width: 768px) {
.plan-card-col.plan-prize-card{
    flex-direction: row!important;
    gap: 20px;
    align-items: flex-end!important;
    justify-content: flex-start;
}
}
</style>
