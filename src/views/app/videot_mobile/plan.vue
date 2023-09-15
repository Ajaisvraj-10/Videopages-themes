
<template>
  <div class="main-content capcee-plan">
    
    <div class="site-wrapper"> 

        <header class="header-holder-2" >             
                <div class="menu-wrapper  d-flex align-items-center justify-content-between" style="background:initial;"> 
                    <div class="flex-align3" style="gap:20px;">
                        <router-link to="/">
                          <img src="/videot_mobile/images/prev.png" style="width:20px;">
                        </router-link>         
                        <div class="header-logo">
                            <a >
                                <img :src="frontent_settings.main_logo" >
                            </a>               
                        </div>
                    </div>
                    <div class="text-center header-right flex-align3" style="gap:20px;">
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
           
            <div class="plan-card row mx-0">
               <h6 class=" plan-name">Watch Ad-free with {{current_plan.name}}</h6>
              <div class="col-md-12 plan-card-col">
               
                
                <table class="plan-table w-100">
                  <thead>
                    <tr id="plan-name">
                      <th  scope="col"></th>
                      <th class="active-plan" scope="col">
                        <div>Mobile</div>
                      </th>
                      <th  scope="col">
                        <div>Gold</div>
                      </th>
                      <th scope="col">
                       
                        <div>Platinum</div>
                      </th>
                    </tr>
                  </thead>
                      <tbody class="plan-body">
                            <tr>
                              <th >
                                <div>Movies, Sports, Originals, TV</div>
                              </th>
                              <td class="active-plan">
                                <i class="fa fa-check"></i>
                              </td>
                              <td >
                                <i class="fa fa-check"></i>

                              </td>
                              <td >
                                <i class="fa fa-check"></i>
                                
                              </td>
                            </tr>
                            <tr >
                              <th >
                                <div>Watch on TV</div>
                              </th>
                              <td class="active-plan">
                                <i class="fa fa-close"></i>
                                
                              </td>
                              <td >
                                <i class="fa fa-check"></i>
                                
                              </td>
                              <td >
                                <i class="fa fa-check"></i>
                                
                              </td>
                            </tr>
                            <tr >
                              <th >
                                <div>Ad Free <i>(except live)</i>
                                </div>
                              </th>
                              <td class="active-plan">
                                <i class="fa fa-close"></i>
                                
                              </td>
                              <td >
                                <i class="fa fa-close"></i>
                                
                              </td>
                              <td >
                                <i class="fa fa-check"></i>
                                
                              </td>
                            </tr>
                            <tr >
                              <th >
                                <div>No. of Screens</div>
                              </th>
                              <td class="active-plan">
                                <div>1</div>
                              </td>
                              <td >
                                <div>2</div>
                              </td>
                              <td >
                                <div>4</div>
                              </td>
                            </tr>
                            <tr >
                              <th >
                                <div>Video Quality</div>
                              </th>
                              <td class="active-plan">
                                <div>
                                  <div>HD</div>
                                </div>
                                <div>
                                  <div>720p</div>
                                </div>
                              </td>
                              <td >
                                <div>
                                  <div>Full HD</div>
                                </div>
                                <div>
                                  <div>1080p</div>
                                </div>
                              </td>
                              <td >
                                <div>
                                  <div>Full HD</div>
                                </div>
                                <div>
                                  <div>1080p</div>
                                </div>
                              </td>
                            </tr>
                            <tr class="plan-rate" >
                              <td ></td>
                              <td class="active-plan">
                                
                                  <div>
                                    ₹299/ <span >yr</span>
                                  </div>
                               
                              </td>
                              <td >
                                
                                 
                                  <div >
                                    ₹499/ <span >yr</span>
                                  </div>
                                
                              </td>
                              <td >
                                
                                  
                                  <div >
                                    ₹599/ <span >yr</span>
                                  </div>
                               
                              </td>
                            </tr>
                            <tr class="check-tr" >
                              <td ></td>
                              <td class="active-plan">
                                <div class="plan-check">
                                  <i class="fa fa-check"></i>
                                </div>
                              </td>
                              <td >
                                <div class="plan-check">
                                  <i class="fa fa-check" style="display:none;"></i>
                                  
                                </div>
                              </td>
                              <td >
                                <div class="plan-check">
                                  <i class="fa fa-check" style="display:none;"></i>
                                  
                                </div>
                              </td>
                            </tr>
                      </tbody>

                    
                </table>

                <button class="btn btn-primary w-100   rounded2 mt-5 py-2" v-if="current_plan.id" @click="getPaymentMethods();crnt_tab='payment_methods'">Continue with {{current_plan.currency_symbol}}{{current_plan.price}}</button>

              </div>

            </div>
          </div>
          <div class="plan-sec2 mt-5" v-if="crnt_tab=='payment_methods'">
            <h6 class="text-white text-14 font-weight-400 mb-2">Step 2 of 3</h6>
            <h6 class="text-white font-weight-500 mb-4">Payment Methods</h6>
            <div class="plan-card2 row mx-0">
              <div class="col-md-12 plan-card-col">
                <h6 class="text-22 font-weight-600 my-2 mb-4">Select Payment Method</h6>
                <button class="btn btn-primary rounded2 py-2 w-100 my-2" v-for="payment_method in payment_methods" @click="setRazorpay(payment_method);crnt_tab='pay'">{{payment_method.name}}</button>
                <h6 class="text-center text-12 mt-2" @click="crnt_tab='plans'">Change plan</h6>


                <div class="or-sec">Or</div>
                <div class="d-flex justify-content-center plans-social-icons my-3" style="gap:20px;">
                  <img src="/videot_mobile/images/apple.svg" style="width:40px;">
                  <img src="/videot_mobile/images/google.svg" style="width:40px;">
                  <img src="/videot_mobile/images/fb.svg" style="width:40px;">
                  <img src="/videot_mobile/images/twitter.svg" style="width:40px;">
                </div>

              </div>
             

            </div>
          </div>

          <div class="plan-sec2 mt-5" v-if="crnt_tab=='pay'">
            <h6 class="text-white text-14 font-weight-400 mb-2">Step 3 of 3</h6>
            <h6 class="text-white font-weight-500 mb-4">Payment</h6>
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



          <footer class="footer footer-capc py-4 px-md-5 px-2" >
            <div class="flex-align" style="flex-wrap: wrap;gap: 20px;">
                <div class="flex-align3" style="gap:10px;">
                    <h6 class="text-14">Download Apps</h6>
                    <img src="/videot_mobile/images/play_store.png">
                    <img src="/videot_mobile/images/app_store.png">

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
  
  @import '/videot_mobile/style/style.css';

</style>
<style>
  .capcee-plan .site-wrapper{
  background:url(/images/bg2.jpg);
  position: absolute;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .capcee-plan .site-wrapper::before{
  background: linear-gradient(180deg, #000000bf, #0f0617);
  content: '';
  display: block;
  height: 100%;
  position: absolute;
  width: 100%;
}

.plan-container{
  z-index: 9999999;
    position: absolute;
    height: 100vh;
    overflow: auto;
    width: 100%;
   background-color: #0d0620;
    padding-top: 80px;
}
.plan-container:after {
    content: '';
    position: absolute;
    background: linear-gradient(360deg, #0d0620, transparent), url(/videot_mobile/images/bg4.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 45vh;
    top: 0;
}
.footer.footer-capc {
   
    background-color: #0d0620;

}
.capcee-plan  .header-holder-2{
   
    background-color: #0d0620;

}
.plan-card{


    margin-bottom: 40px;

  
}
.plan-card2{
  border:1px solid lightgray;
  border-radius:10px;
    margin-bottom: 80px;

  
}
.plan-card-col{
  padding:30px;
}
.plan-card .plan-card-col{
  background-image:linear-gradient(#0d0620,#0d0620), linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0%,rgba(255, 255, 255, 0) 53%);
  border-radius:10px;
 border:1px solid gray;

 
}
.capcee-plan table, .capcee-plan th, .capcee-plan td {
    border: none;
    padding: 15px 10px;
    vertical-align: middle;
    font-weight:400;
    text-align:center;
}
.plan-rate {
    border-top: 1px dotted lightgray;
}
.plan-rate td{
  padding-top:30px;
}
.plan-card-col h6{
 color:white;
}
.capcee-plan tbody tr th{
  text-align:left;
}
.capcee-plan thead th{
  color:#29d4b6;
  border-radius: 6px 6px 0 0;
}
.plan-check{
  width:30px;
  background-color:white;
  height:30px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  margin: 0 auto;
  margin-bottom: -30px;
}
.plan-check i{
  color:#7f0dff;
}
.plan-rate td{
  color:#29d4b6;
}
.plan-sec{
  max-width:900px;
  margin:0 auto;
  z-index: 9999;
    position: relative;
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
  color:white;
  font-weight:500;

}
.plans:before{
  content:"✓";
  position:absolute;
  width:100%;
  height:100%;
  left:0px;
  color:#29d4b6;
  top:0;
  font-weight:800;
}
.capcee-plan .btn-primary {
    color: #000;
    background-color: #29d4b6;
    border-color: #29d4b6!important;
    font-weight:600!important;
}
.capcee-plan .btn-primary:hover {
    color: #29d4b6;
    background-color: #fff;
    border-color: #29d4b6!IMPORTANT;
   
    box-shadow:none;
}
.active-plan {
    background-color: #7f0dff;
}
.check-tr td{
  border-radius:0 0 6px 6px;
}
.plan-name{
  font-size:22px;
  font-weight:600;
  color:white;
  padding-top:10px;
  padding-bottom:20px;

}

@media (max-width: 925px) {
  
.plan-name{
  font-size:20px;
 
  padding-top:50px;
  padding-bottom:50px;
  text-align:center;
  width: 100%;

}
tbody th div{
  font-size:12px;
  line-height:18px;

}
tbody td div{
  font-size:12px;
  line-height:18px;

}
.plan-card .plan-card-col{
  border:none;
  border-radius:0;
  padding: 30px 10px;
}
.capcee-plan table, .capcee-plan th, .capcee-plan td {
 
    padding: 10px;
   
}
.capcee-plan .btn-primary {
    width:320px!important;
    margin: 0 auto;
    display: flex;
   
    justify-content: center;
}
}
</style>
