
<template>
  <div class="main-content capcee-plan" :class="$root.plan_open=='open2'?'open_plan':''">
    
    <div class="site-wrapper"> 
      
      <div class="plan-container">
        <i class="fa fa-close text-dark" @click="$root.plan_open='close2'" style="position:absolute;top:6%;right:2%;font-size:20px;"></i>
        <div class="plan-sec p-4 " v-if="crnt_tab=='plans'">
          <h6 class="text-dark text-18 font-weight-500 text-center mb-3 pb-3">Choose your premium plan</h6>
          <!--<h6 class="text-dark text-11 font-weight-400 mb-2">Step 1 of 3</h6>
          <h6 class="text-dark text-14 font-weight-500 mb-2">Subscribe to {{current_plan.name}}</h6>-->
          <div class="plan-card row mx-0">
            
            <div class="col-md-12 plan-card-col">
              <h6 class="text-20 font-weight-700 text-dark my-2 mb-4">Watch Ad-free with {{current_plan.name}}</h6>
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

            </div>
            <div class="col-md-12 plan-card-col pt-3" style="display: flex;width: 100%;gap: 20px;overflow: auto;">
              <div class="plans-card mb-3" v-for="plan in plans" :style="plan.id==current_plan.id?'background: #e7e7e7;border:2px solid #004d9a; border-radius:6px;':'background:  #e7e7e7;border-radius:6px;border:2px solid transparent;'" @click="current_plan=plan">
                <div class="px-3 py-2 rounded2-top position-relative" >
                  
                  <div class="flex-align mb-4" v-if="false">
                    <div class="rounded2 bg-info p-1 text-dark font-weight-600 text-12">
                      LIMITED PERIOD OFFER
                    </div>
                    <div class="rounded2 btn-outline-danger p-1  font-weight-600 text-12" style="border: 1px solid red;">
                      Save 30%
                    </div>
                  </div>
                  <div class="d-flex align-items-center justify-content-center mt-2 ">
                    <div >
                      <div class="text-dark  font-weight-600  text-14">
                        {{plan.duration}} {{plan.date_type}} plan
                      </div>
                      
                    </div>
                    <div class="d-flex" >
                      
                      <template v-if="plan.id==current_plan.id">
                        <div class="choose-btn">
                          <i class="fa fa-check  rounded-circle" style=""></i>
                          Choosed
                        </div>
                      </template>
                      <template v-else>
                        <i class="ml-2 bg-light flex-align2 rounded-circle text-dark" style="display:none;" @click="current_plan=plan"></i>
                      </template>
                    </div>
                  </div>
                </div>
                <div class="rounded2-bottom  p-2 pt-0 text-center text-dark text-14 font-weight-500" >
                  <div class="text-12">
                    {{plan.description}}
                  </div>
                  <div class="text-12 mt-2">
                         <!-- <sup class="text-dark ">₹999</sup> --><span class="text-dark text-20 font-weight-600 ">{{plan.currency_symbol}}{{plan.price}}</span>
                  </div>
                </div>

              </div>

              

            </div>
            <div class="purchase-button">
              <button class="btn btn-primary w-100 rounded2 py-2" v-if="current_plan.id" @click="getPaymentMethods();crnt_tab='payment_methods'">Continue with {{current_plan.currency_symbol}}{{current_plan.price}}</button>
            </div>

          </div>
        </div>
        <div class="plan-sec2 p-4" v-if="crnt_tab=='payment_methods'">
          <!--<h6 class="text-dark text-11 font-weight-400 mb-2">Step 2 of 3</h6>
          <h6 class="text-dark text-14 font-weight-500 mb-2">Payment Methods</h6>-->
          <div class="plan-card2 row mx-0">
            <div class="col-md-12 plan-card-col">
              <h6 class="text-20 font-weight-700 my-2 mb-4">Select Payment Method</h6>

              <button class="btn btn-primary rounded2 py-2 w-100 my-2" v-for="payment_method in payment_methods" @click="setRazorpay(payment_method);crnt_tab='pay'">{{payment_method.name}}</button>
              <h6 class="text-center text-12 mt-2" @click="crnt_tab='plans'">Change plan</h6>

              <div class="or-sec">Or</div>
              <div class="d-flex justify-content-center plans-social-icons my-3" style="gap:20px;">
                <img src="/vspn/images/apple.svg" style="width:40px;">
                <img src="/vspn/images/google.svg" style="width:40px;">
                <img src="/vspn/images/fb.svg" style="width:40px;">
                <img src="/vspn/images/twitter.svg" style="width:40px;">
              </div>

            </div>
           

          </div>
        </div>

        <div class="plan-sec2 p-4" v-if="crnt_tab=='pay'">
          <!--<h6 class="text-dark text-11 font-weight-400 mb-2">Step 3 of 3</h6>
          <h6 class="text-dark text-14 font-weight-500 mb-2">Payment</h6>-->
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
  
  @import '/vspn/style/style.css';

</style>
<style>


.main-content.capcee-plan{
    //background-image:linear-gradient(rgb(0 0 0 / 82%), #0f171e), url(/vspn/images/bg1.jpg);
  
    background-size: cover;
   
   
    height: 100vh;
    overflow: hidden;
    position: fixed;
    top: 0;
    background-color: #000000b3;
    width: 100%;
    z-index: 999999999;
    display: none;
}
.main-content.capcee-plan.open_plan{
  display:block;
}
.main-content.capcee-plan .site-wrapper{
  background:initial;
}
.plan-container{
  
    padding:20px 0;
    max-width: 720px;
    margin: 0 auto;
    position: relative;
    animation: mymove .4s;
   
}
@keyframes mymove {
  0%   {top: -100px;}
  
  100% {top: 0px;}
}
.plan-card{

    position:relative;
    margin-top:20px;
    cursor:pointer;

  
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
 
}

.plan-card-col{
  padding:5px 0 20px 0;
}

.plan-card-col h6{
 color:#004d9a;
 margin: 0;
 font-weight:500;
}
.plan-card-col i{
 color:#004d9a;
 margin: 0;
 width: 22px;
    height: 22px;

}
.plan-card-col .plans-card .choose-btn{
 
    top: -12px;
    left: 50%;
    transform:translate(-50%);
    position: absolute;
   
    color:white;
    background-color:#004d9a;
    border-radius:20px;
    padding:5px 10px;
    display:flex;
    align-items:center;
    font-size:10px;
    gap:5px;
}
.plan-card-col .plans-card i{
  
 margin: 0;
    width: 14px;
    height: 14px;
    background-color: #fff!important;
    color: #004d9a!important;
    display: flex;
    align-items: center;
    justify-content: center;
}
.plan-items {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:  10px 0;
    border-radius: 6px;
   
}
.plan-sec{
  max-width:720px;
  margin:0 auto;
  background-color: white;
  border-radius:15px;
  overflow: auto;
    max-height: 90vh;
}
.plan-sec2{
  max-width:460px;
  margin:0 auto;
  background-color: white;
  border-radius:15px;
  overflow: auto;
    max-height: 90vh;
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
    width: 150px;
    position: relative;
    display: flex;
    flex-direction: column;
    flex: none;
 
    border-radius:6px;
  
}


.plan-header {
   
    min-height: 50px;
   
   
}
.plan-header i{
  z-index:1;
}
.capcee-plan .btn-primary {
   
    background-color: #004d9a!important;
    border-color: #004d9a!Important;
    border-radius:30px;
}
.purchase-button {
  
   
    width: 100%;
   
    padding: 12px;
    
    margin:0 auto;

}
.purchase-button .btn{
    max-width:500px;
    margin:0 auto;
    display:flex;
    justify-content:center;
    height: 50px;
    align-items: center;
}
@media screen and (max-width: 720px) {
  .plan-sec {
    
  
    max-height: initial; 
    height: 100vh;
    border-radius: 0;
    padding-top:50px!important;
}
  .plan-sec2 {
    
  
    max-height: initial; 
    height: 100vh;
    border-radius: 0;
    padding-top:50px!important;
}
.plan-container {
     padding: 0;
}
  .capcee-plan .fa-close{
 
 
  margin-top:-20px;
  }
}
  .capcee-plan .fa-close{
 
  cursor:pointer;

  }
</style>
