
<template>
  <div class="main-content capcee-plan">
    
    <div class="site-wrapper"> 
        <header class="" >             
                <div class="menu-wrapper p-0 d-flex align-items-center justify-content-end" style="min-height:50px;background-color: #000;"> 
                    <div class="flex-align3" style="position:fixed;top:-6px;left:-4px;z-index: 99999999;">         
                        
                            <router-link to="/">
                                <img src="/videopage_mobile/images/back-cap.png" style="width:30px;transform: rotate(180deg);">
                            </router-link>               
                        
                    </div>
                    <div class="text-center px-3 header-right flex-align3" style="gap:20px;">
                      <div v-if="$root.token">
                        <button @click="signOut()" class="btn rounded2" style="background-color: initial;color: white;font-size: 13px;font-weight: 500;border: 1px solid white;border-radius: 5px;">LOGOUT</button>
                      </div>
                      <router-link :to="edit?'':{name:'sign-in'}" v-else>
                          <button class="btn rounded2" style="background-color: initial;color: white;font-size: 13px;font-weight: 500;border: 1px solid white;border-radius: 5px;">LOGIN</button>
                      </router-link>
                    </div>
                </div>
        </header>
        <div class="plan-container">
          

          <div class="plan-sec " v-if="crnt_tab=='plans'">
            
            <h6 class="text-white text-14 font-weight-400 mb-2">Step 1 of 3</h6>
            <h6 class="text-white font-weight-500 mb-4 text-16">Subscribe to {{current_plan.name}}</h6>
            <div class="plan-card row mx-0">
              <div class="col-lg-6 my-4 my-lg-0 plan-card-col">
                <div class="header-logo text-center my-3" >
                        <router-link :to="edit?'':{name:'home'}">
                            <img :src="frontent_settings.main_logo" class="logo">
                        </router-link>             
                </div>
                <h6 class="text-20 font-weight-500 my-2 mb-4">Watch Ad-free with {{current_plan.name}}</h6>
                <div class="d-flex justify-content-between">
                  <h6 class="plans">2800+ Blockbuster Movies</h6>
                  

                </div>
                <div class="d-flex justify-content-between">
                  <h6 class="plans">2800+ Blockbuster Movies</h6>
                  
                </div>
                <div class="d-flex justify-content-between">
                  <h6 class="plans">150+ Web Series</h6>
                 

                </div>
                <div class="d-flex justify-content-between">
                  <h6 class="plans">{{current_plan.device}} Device</h6>
                  
                </div>
                <div class="d-flex justify-content-between">
                  <h6 class="plans">{{current_plan.description}}</h6>
                  
                </div>


              </div>
              <div class="col-lg-6 plan-card-col">
                <div class="mb-3 rounded" v-for="plan in plans" v-if="plan.status" :style="plan.id==current_plan.id?'background:#ee2938;':'background: initial;'" @click="current_plan=plan">
                  <div class="py-4 px-3 rounded2-top cursor-pointer" >
                    
                    <div class="flex-align mb-4" v-if="false">
                      <div class="rounded2 bg-info p-1 text-white font-weight-600 text-12">
                        LIMITED PERIOD OFFER
                      </div>
                      <div class="rounded2 btn-outline-danger p-1  font-weight-600 text-12" style="border: 1px solid red;">
                        Save 30%
                      </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-between ">
                      <div class="flex-align3" style="gap:15px;">
                        <template v-if="plan.id==current_plan.id">
                          <i class="fa fa-check  flex-align2 rounded-circle" style="width:22px;height:22px;background-color:yellow;color: #382d15;font-size: 12px;"></i>
                        </template>
                        <template v-else>
                          <i class=" flex-align2 rounded-circle text-white" style="width:22px;height:22px;cursor:pointer;border:2px solid white;font-size: 12px;"></i>
                        </template>
                        <div class="text-white font-weight-400  text-14" style="opacity:.8;white-space: nowrap;">
                          {{plan.duration}} {{plan.date_type}} plan
                        </div>
                        
                      </div>
                      <div class="flex-align3" >
                        
                        <div class=" px-3 text-white  text-12 font-weight-300">
                          {{plan.description}}

                        </div>
                        <div class="text-14">
                           <!-- <sup class=" ">₹999</sup> -->
                           <span class=" text-20 font-weight-400 " style="color:yellow;">{{plan.currency_symbol}}{{plan.price}}</span>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  
                </div>

                <button class="btn btn-primary w-100 py-3" v-if="current_plan.id" @click="getPaymentMethods();crnt_tab='payment_methods'">Continue with {{current_plan.currency_symbol}}{{current_plan.price}}</button>

              </div>

            </div>
          </div>
          <div class="plan-sec2 mt-5" v-if="crnt_tab=='payment_methods'">
            <h6 class="text-white text-14 font-weight-400 mb-2">Step 2 of 3</h6>
            <h6 class="text-white font-weight-500 mb-4 text-16">Payment Methods</h6>
            <div class="plan-card2 row mx-0">
              <div class="col-md-12 p-0 plan-card-col">
                <h6 class="text-22 font-weight-500 my-2 mb-4">Select Payment Method</h6>
                <button class="btn btn-primary rounded2 py-2 w-100 my-2" v-for="payment_method in payment_methods" @click="setRazorpay(payment_method);crnt_tab='pay'">{{payment_method.name}}</button>
                <h6 class="text-center text-12 mt-2" @click="crnt_tab='plans'">Change plan</h6>


                <div class="or-sec">Or</div>
                <div class="d-flex justify-content-center plans-social-icons my-3" style="gap:20px;">
                  <img src="/videopage_mobile/images/apple.svg" style="width:40px;">
                  <img src="/videopage_mobile/images/google.svg" style="width:40px;">
                  <img src="/videopage_mobile/images/fb.svg" style="width:40px;">
                  <img src="/videopage_mobile/images/twitter.svg" style="width:40px;">
                </div>

              </div>
             

            </div>
          </div>

          <div class="plan-sec2 mt-5" v-if="crnt_tab=='pay'">
            <h6 class="text-white text-14 font-weight-400 mb-2">Step 3 of 3</h6>
            <h6 class="text-white font-weight-500 mb-4 text-16">Payment</h6>
            <div class="plan-card2 row mx-0">
              <div class="col-md-12 plan-card-col">
                <h6 class="text-22 font-weight-500 my-2 mb-4">{{current_method.name}}</h6>
                <div class="text-center">
                  <img :src="current_method.logo" style="height:100px">
                </div>
                <h3 class="text-success text-center">{{current_plan.currency_symbol}}{{current_plan.price}}</h3>
                <button class="btn btn-primary rounded2 py-2 w-100 my-2" @click="purchasePlan()" v-if="razorpay_options.key">Pay Now</button>
                <h6 class="text-center text-12 mt-2" @click="crnt_tab='payment_methods'">Change method</h6>
              </div>
             

            </div>
          </div>



          <footer class="footer p-3" >
                    <div class="flex-align" style="flex-wrap: wrap; gap: 25px;">
                        <div class="flex-align3" style="gap:10px;">
                            <h6 class="text-14">Download Apps</h6>
                            <img src="/videopage_mobile/images/play_store.png">
                            <img src="/videopage_mobile/images/app_store.png">

                        </div>
                        <div class="flex-align3 social2" >
                            <h6 class="text-14 mr-2">Connect with us</h6>
                            <a v-for="social_link in social_links" :href="social_link.link" target="_blank"><i :class="social_link.icon"></i></a>

                        </div>
                    </div>
                                 
            </footer>
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
  
  @import '/videopage_mobile/style/style.css';

</style>
<style>

  .capcee-plan .site-wrapper{
  background:url(/images/bg2.jpg);
  position: absolute;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-color:#35322e;
  }
  
.capcee-plan .btn-primary{
     border-color: #ee2938;
    background: #ee2938;
}
.capcee-plan .btn-primary:hover{
   
    background: #ee2938;
    box-shadow:none;
}
.plan-container{
  z-index: 9999999;
    position: absolute;
    background-color: black;
   
    width: 100%;
   
    padding-top: 40px;
}
.plan-card{
  
  border-radius:10px;
    margin-bottom: 80px;

  align-items: flex-start;
}
.plan-card2{
  
  border-radius:10px;
    margin-bottom: 80px;

  
}
.plan-card-col{
  padding:0 30px;
}
.plan-card .plan-card-col:first-child{
  background:linear-gradient(219deg, #ee2938, #f44336, #e71000);
  border-radius:10px;
 

 
}
.plan-card-col h6{
 color:white;
}
.plan-sec{
  max-width:900px;
  margin:0 auto;
  padding:0px 25px;
}
.plan-sec2{
  max-width:460px;
  margin:0 auto;
  padding:0 15px;
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
  padding-left:40px;
  color:black;
  font-weight:400;
}
.plans:before{
  content:"✓";
  position:absolute;
  width:100%;
  height:100%;
  left:0px;
  color:white;
  top:0;
  font-weight:800;
}
.plan-head{
  color:white;
  font-weight:400;
  text-align:center;
  margin-bottom:35px;
}
@media (max-width: 990px) {
  .plan-card-col:last-child {
    padding: 0px;
  }
  .footer .flex-align{
  justify-content:center!important;
}

}
@media (max-width: 460px) {
 
  .plan-sec{
 
  padding:0px 15px;
  }
  .plan-head{
  font-size:24px;
 
 
}
.footer{
  padding:20px 10px;
}

}
.capcee-plan .footer{
  background-color:#000;
}
</style>
