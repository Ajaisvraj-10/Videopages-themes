
<template>
  <div class="main-content capcee-plan">
    
    <div class="site-wrapper"> 
      <div class="px-3 py-2 w-100" >
        <router-link :to="edit?'':{name:'home'}">
          <i class="fa fa-angle-left" style="font-size:26px;color:white;"></i>
        </router-link>
      </div>
      <div class="plan-container">
        <div class="plan-sec px-3 " v-if="crnt_tab=='plans'">
          <h6 class="text-white text-14 font-weight-500 text-center mb-5 pb-3">Anytime Big Entertainment</h6>
          <h6 class="text-white text-11 font-weight-400 mb-2">Step 1 of 3</h6>
          <h6 class="text-white text-14 font-weight-500 mb-4">Subscribe to {{current_plan.name}}</h6>
          <div class="plan-card row mx-0">
            <div class="plan-icon">
              <img src="/video_cinema_mobile/images/king2.png" >
            </div>
            <div class="col-md-6 plan-card-col">
              <h6 class="text-20 font-weight-700 my-2 mb-4">Watch Ad-free with {{current_plan.name}}</h6>
              <div class="d-flex justify-content-between">
                <h6 class="plans">2800+ Blockbuster Movies</h6>
                <i class="fa fa-info-circle"></i>

              </div>
              
              <div class="d-flex justify-content-between">
                <h6 class="plans">150+ Web Series</h6>
                <i class="fa fa-info-circle"></i>

              </div>
              <div class="d-flex justify-content-between">
                <h6 class="plans">{{current_plan.device}} Device</h6>
                <i class="fa fa-info-circle"></i>
              </div>
              <div class="d-flex justify-content-between">
                <h6 class="plans">{{current_plan.description}}</h6>
                <i class="fa fa-info-circle"></i>
              </div>

            </div>
            <div class="col-md-6 plan-card-col">
              <div class="mb-3" v-for="plan in plans">
                <div class="p-3 rounded2-top" :style="plan.id==current_plan.id?'background: linear-gradient(45deg, rgb(233 30 99 / 21%), transparent); border: 1px dashed #e91e6340;border-radius:6px 6px 0 0;':'background: rgb(237 237 237)'" @click="current_plan=plan">
                  
                  <div class="flex-align mb-4" v-if="false">
                    <div class="rounded2 bg-info p-1 text-white font-weight-600 text-12">
                      LIMITED PERIOD OFFER
                    </div>
                    <div class="rounded2 btn-outline-danger p-1  font-weight-600 text-12" style="border: 1px solid red;">
                      Save 30%
                    </div>
                  </div>
                  <div class="d-flex align-items-center justify-content-between ">
                    <div >
                      <div class="text-dark2 font-weight-600  text-14">
                        {{plan.duration}} {{plan.date_type}} plan
                      </div>
                      
                    </div>
                    <div class="d-flex" >
                      <div class="text-14">
                         <!-- <sup class="text-dark ">₹999</sup> --><span class="text-dark2 text-20 font-weight-600 ">{{plan.currency_symbol}}{{plan.price}}</span>
                      </div>
                      <template v-if="plan.id==current_plan.id">
                        <i class="fa fa-check ml-2 bg-success flex-align2 rounded-circle text-white" style="width:22px;height:22px;"></i>
                      </template>
                      <template v-else>
                        <i class="ml-2 bg-light flex-align2 rounded-circle text-white" style="width:22px;height:22px;cursor:pointer" @click="current_plan=plan"></i>
                      </template>
                    </div>
                  </div>
                </div>
                <div class="rounded2-bottom px-3 py-2 text-dark2 bg-light text-14 font-weight-500" style="border-radius:0 0 6px 6px;">
                  {{plan.description}}
                </div>
              </div>

              <button class="btn btn-primary w-100 rounded2 py-2" v-if="current_plan.id" @click="getPaymentMethods();crnt_tab='payment_methods'">Continue with {{current_plan.currency_symbol}}{{current_plan.price}}</button>

            </div>

          </div>
        </div>
        <div class="plan-sec2 px-3 mt-5" v-if="crnt_tab=='payment_methods'">
          <h6 class="text-white text-11 font-weight-400 mb-2">Step 2 of 3</h6>
          <h6 class="text-white text-14 font-weight-500 mb-4">Payment Methods</h6>
          <div class="plan-card2 row mx-0">
            <div class="col-md-12 plan-card-col">
              <h6 class="text-20 font-weight-700 my-2 mb-4">Select Payment Method</h6>

              <button class="btn btn-primary rounded2 py-2 w-100 my-2" v-for="payment_method in payment_methods" @click="setRazorpay(payment_method);crnt_tab='pay'">{{payment_method.name}}</button>
              <h6 class="text-center text-12 mt-2" @click="crnt_tab='plans'">Change plan</h6>

              <div class="or-sec">Or</div>
              <div class="d-flex justify-content-center plans-social-icons my-3" style="gap:20px;">
                <img src="/video_cinema_mobile/images/apple.svg" style="width:40px;">
                <img src="/video_cinema_mobile/images/google.svg" style="width:40px;">
                <img src="/video_cinema_mobile/images/fb.svg" style="width:40px;">
                <img src="/video_cinema_mobile/images/twitter.svg" style="width:40px;">
              </div>

            </div>
           

          </div>
        </div>

        <div class="plan-sec2 px-3 mt-5" v-if="crnt_tab=='pay'">
          <h6 class="text-white text-11 font-weight-400 mb-2">Step 3 of 3</h6>
          <h6 class="text-white text-14 font-weight-500 mb-4">Payment</h6>
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
  
  @import '/video_cinema_mobile/style/style.css';

</style>
<style>


.main-content.capcee-plan {
    height: 100vh;
    overflow: auto;
}
.plan-container{
  
   
    padding-top: 20px;
}
.plan-card{
  background-color:white;
  border-radius:10px;
    margin-bottom: 40px;
    position:relative;
    margin-top:30px;

  
}
.plan-card:after {
    content: '';
    position: absolute;
    top: 0;
    left: 25px;
    width: 16px;
    height: 26px;
    background-color: #f96b9b;
    border-radius: 0 0 10px 10px;
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
  background-color:white;
  border-radius:10px;
    margin-bottom: 40px;

  
}

.plan-card-col{
  padding:20px;
}
.plan-card .plan-card-col{
  background-color:#f5f5f5;
  border-radius:10px;
  

 
}
.plan-card-col h6{
 color:black;
}
.plan-sec{
  max-width:900px;
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
  padding-left:20px;
  color:black;
  font-weight:500;
  margin-right:5px;
}
.plans:before{
  content:"✓";
  position:absolute;
  width:100%;
  height:100%;
  left:0px;
  color:#f96b9b;
  top:0;
  font-weight:800;
}
.btn-primary {
    border-color: #D9008D;
    background-color: #D9008D;

}
</style>
