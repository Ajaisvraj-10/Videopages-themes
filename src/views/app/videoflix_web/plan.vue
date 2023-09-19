<template>
    <div class="plan-page">
      <div class="background"></div>
      <div class="content1">
        
        <div class="plan-options">
          <!-- <div class="plan-option1">
            <h3 class="price">Lite</h3>
            <p class="access">Access to basic features</p>
            <p class="scnd-ptag">For creators focused on growing a <br> small video membership online</p>
            <hr />
            <h1 class="price-main">$149/mo</h1>
            <p class="thrd-ptag">+$1.99 per paid member/mo</p>
            <div class="points">
            <li>0% fee on one-time purchases</li>
            <li>Netflix-style video catalog</li>
            <li>Live streaming up to 1 hour</li>
            <li class="decor">Community up to 5 channels</li>
          </div>
            <button class="slct-btn" >Select</button><br>
            <div class="learn-more" ><a href="#">Learn more</a></div>
          </div> -->

          <div class="plan-option" v-for="plan in plans" :style="plan.id==current_plan.id?'background: #673ab714; border-radius:6px;':'border-radius:6px;'" @click="current_plan=plan">
            <!-- <div class="recomd-plan"></div> -->
            <h3 class="price">{{plan.name}}</h3>
            <p class="access">Access to standard features</p>
            <p class="scnd-ptag">For serious creators growing a robust <br> community on mobile & web</p>
            <hr />
            <h1 class="price-main">{{plan.price}}</h1>
            <p class="thrd-ptag"> {{plan.duration}} {{plan.date_type}} plan</p>
            <div class="points">
                {{plan.description}}
          </div>
            <button class="slct-btn" v-if="current_plan.id" @click="handleButtonClick(plan)">Continue with {{current_plan.currency_symbol}}{{current_plan.price}}</button><br>
            <div class="learn-more" ><a href="#">Learn more</a></div>
          </div>



          <div class="popup-container" v-if="showPopup">
      <div class="popup-content">
        <div class="pop-up">
            <div class="plan-sec2 px-3 mt-5" >
          <h6 class="text-white text-11 font-weight-400 mb-2">Step 2 of 3</h6>
          <h6 class="text-white text-14 font-weight-500 mb-2">Payment Methods</h6>
          <div class="plan-card2 row mx-0">
            <div class="col-md-12 plan-card-col">
              <h6 class="text-20 font-weight-700 my-2 mb-4">Select Payment Method</h6>

              <button class="btn btn-primary rounded2 py-2 w-100 my-2" v-for="payment_method in payment_methods" @click="payment_method.name=='Razorpay'?setRazorpay(payment_method):setStripe()">{{payment_method.name}}</button>
              <h6 class="text-center text-12 mt-2" @click="crnt_tab='plans'">Change plan</h6>

              <div class="or-sec">Or</div>
              <div class="d-flex justify-content-center plans-social-icons my-3" style="gap:20px;">
                <img src="/vid_theme_app/images/apple.svg" style="width:40px;">
                <img src="/vid_theme_app/images/google.svg" style="width:40px;">
                <img src="/vid_theme_app/images/fb.svg" style="width:40px;">
                <img src="/vid_theme_app/images/twitter.svg" style="width:40px;">
              </div>
            </div>
          </div>
        </div>  
        <div class="plan-sec2 px-3 mt-5">
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
              <button class="close-btn" @click="closePopup">Close</button>
              <h6 class="text-center text-12 mt-2" @click="crnt_tab='payment_methods'">Change method</h6>
             

            </div>
          </div>
        </div>
       
          </div>
          
      </div>
    </div>


         
      



        
<!-- 
          <div class="plan-option3">
            <h3 class="price">Premium</h3>
            <p class="access">Access to premium features</p>
            <p class="scnd-ptag">For established creators needing full  brand control on all devices</p>
            <hr />
            <h1 class="price-main">Custom Pricing</h1>
            <p class="thrd-ptag">Custom per paid member pricing</p>
            <div class="points">
            <li>Full-featured mobile apps</li>
            <li>TV streaming apps</li>
            <li>Custom live stream packages</li>
            <li>API access</li>
          </div>
            <button class="slct-btn">Select</button><br>
            <div class="learn-more" ><a href="#">Learn more</a></div>
          </div> -->
        </div>
      </div>
    </div>
  </template>
  
  <script>

  export default {
    props: ['edit','blocks','current_block'],
    data() {
      return {
        showPopup: false,
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
      // this.$router.push('/')
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
        handleButtonClick(plan) {
    this.openPopup();
    this.current_plan = plan; 
    this.getPaymentMethods();
  },
        openPopup() {
            console.log('Opening pop-up');
      this.showPopup = true; 
    },
    closePopup() {
        console.log('Closing pop-up');
      this.showPopup = false; 
    },
      getPlans() {
        var headers = new Headers();
        headers.append("Authorization", "Bearer "+(this.$root.token?this.$root.token:this.$root.admin_token));
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
        headers.append("Authorization", "Bearer "+(this.$root.token?this.$root.token:this.$root.admin_token));
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
        headers.append("Authorization", "Bearer "+(this.$root.token?this.$root.token:this.$root.admin_token));
        fetch(this.api_url+'/content/pages_contents/?theme='+theme_name+'&page=/plan', {
            method : 'get',
            headers: headers,
        })
        .then((response) => {
            return response.json()
        })
        .then((jsonData) => {
  
          this.is_start = true
  
  
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
  
  @import '/videoflix_web/style/style.css';
  @import '/videoflix_web/style/style-2.css';

  



  .popup-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent background overlay */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999; /* Ensure the pop-up is above other content */
}

/* Style for the pop-up content */
.popup-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
}
.close-btn{
    background-color: #333333;
}

.btn-primary {
   
   background-color: #673ab7!Important;
   border-color: #673ab7!Important;
}
.btn {
    font-weight: 300;
    padding: 0.375rem 0.75rem;
    font-size: initial;
    line-height: 1.5;
    border-radius: 0.15rem;
}

  .showcase3 {
    width: 100%;
    height: 100vh;
    position: relative;
    background-color:#f3f3f3;
    
}

.reg-videoflix {
    background-color: white;
}

.logo2 {
    position: relative;
    z-index: 2;
    height: 90px;
    padding:0 40px;
}

.logo2 img {
    max-width: 170px;
    max-height:60px;
    object-fit:contain;
    padding:5px;
    
    
}
.formm3 .info select{
    height: 60px!important;
    border: 1px solid #000!important;
    border-radius: 0!important;
}
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px white inset !important;
}
.showcase3-content-2 {
    position: relative;
    z-index: 2;
    width: 520px;
    min-height: 350px;
   
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
    padding: 40px;
}

.formm3 h1 {
    margin-bottom: 20px;
    font-weight:500;
    font-size:30px;
    color:black;
}

.formm3 {
    width: 100%;
    margin-bottom: 40px;
}

.formm3 .info {
    padding: 5px 0;
    /* margin-bottom: 20px; */
}

.formm3 .info .email {
   
    width: 100%;
    height: 50px;
    border-radius: 5px;
    border: none;
    padding: 10px;
    font-size: inherit;
}
.formm3 .info input {
    
    height: 60px!important;
    border:1px solid #000!important;
    border-radius:0!important;
    
}
.formm3 .info input.required {
    
  
    border:1px solid #e50914!important;
   
    
}
.formm3 .info input.filled{
    
   
    border:1px solid green!important;
    
    
}


.formm3 .btn {
    margin-bottom: 10px;
    width: 100%;
    padding:0;
}

.formm3 .btn-primary {
    width: 100%;
    max-width: 430px;

    height: 60px;
    border-radius: 5px;
    background-color: #e50914;
   
    color: #fff;
    font-size: inherit;
    font-weight: bold;
    border: none;
    cursor: pointer;
    outline: none;
    font-size:22px;
    font-weight:400;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
}
.plan-form.showcase3-content-2{
    width: 80%;
    max-height: 100%;
}
.email-2 .text-primary {
    
   color: #017cf6!important;
    
}

.help {
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
}

.help a {
    color: #999;
    font-weight:500;
}

.help a:hover {
    text-decoration: underline;
}

/* ------ input ------- */

formm3 input[type=checkbox] {
    background: white;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    border: 0;
    height: 16px;
    left: -20px;
    width: 16px;
    margin-right: 5px;
}



/* ------ input end ------- */

.fcbk {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 0.8em;
}
.pop-up{
    background-color: #000;
}
.pl-3, .px-3 {
    padding-left: 1rem !important;
    /* margin-top: 200px; */
    margin-bottom: 5px;
}

.fcbk img {
    width: 20px;
    margin-right: 10px;
}

.signup {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.signup p {
    margin-right: 5px;
}

.more {
    font-size: 0.8em;
    line-height: 1.1em;
}

.more a {
    color: rgb(17, 108, 228);
}

.more a:hover,
.signup a:hover {
    text-decoration: underline;
}

/* ------ FOOTER ------- */

.reg-footer {
    position: absolute;
   
    padding: 20px 0;

    z-index: 2;
    background: #f3f3f3;
    width: 100%;
    height: auto;
    border-top:1px solid #d3d3d361;

}

.ftr-content {
    margin: 0 10%;
    padding-top: 20px;
    font-size: 1em;
}

.reg-footer .ftr-content a {
    color: gray;
}

.ftr-content a:hover {
    text-decoration: underline;
}

.contact {
    margin-bottom: 30px;
}

.contact a:hover {
    text-decoration: underline;
}

.ftr {
    margin-bottom: 30px;
    width: 100%;
    font-size: 0.8em;
    display: flex;
    justify-content: space-between;
}

.select select {
    width: 100px;
    height: 40px;
    border: none;
    font-size: inherit;
    padding-left: 10px;
    background: #333333;
}
.reg-footer .button-3{
    background-color: white;
    border: 1px solid #adadad;
    color:#000;
}
.radio-input input {
   
   
    width: 1.3rem;
    height: 1.3em;
}
.hide-showcase{
    margin-right:-200px;
    opacity:0;
    transition:.4s;
    display:none
}
.sticky-plan{
    position: sticky;
    top: 0;
}
@media screen and (max-width: 1200px) {

.plan-form.showcase3-content-2{
    width: 100%;
    padding:40px 20px;
}
.showcase3 table {
   
    padding: 0px;
   
}

}
@media screen and (max-width: 860px) {

.plans-card-child {
    width: 100px;
   
}

}
@media screen and (max-width: 768px) {


.planGrid__featureTableRow {
    min-height:90px;
    position:relative;
    padding-top: 37px;
}
.planGrid__featureTableRow:first-child {
   
    padding-top: 0;
}
.planGrid__cell:first-child{
    position:absolute;
    top:0;
    left:50%;
    transform:translate(-50%);
    text-align:center;
    width: 100%;
}
.planGrid__cell {
    
    color: #000;
}
}
@media screen and (max-width: 680px) {

    .plans-card-child{
    width: 100px;
}
.planGrid__cell {
   
    padding: 20px 5px;
   
}
}
@media screen and (max-width: 560px) {


.showcase3::after {
    content: '';
    
     background: #f3f3f3;
     box-shadow: initial;
   
    }

.showcase3-content-2 {
    
    width: auto;
    padding: 20px;


}
.logo2 img{
    width: 80px;
   
   
}
.logo2 {
   
    height: 40px;
    background-color:white;
    padding: 0 20px
}
.ftr-content {
    margin: 0;
    padding: 20px;
    font-size: 1em;
}
.ftr{
    margin-bottom: 30px;
    width: 100%;
    
   
}

.reg-footer {
   
    border-top:1px solid gray;
}
.reg-videoflix{
    min-height:calc(100vh - 320px);
    overflow:auto;
}
.email-2 .text-primary {
    font-size:16px;
}
.more p{
    font-size:16px;
    line-height:20px;
}



}
@media screen and (max-width: 500px) {
    .plans-card-child {
    width: 90px;
    font-size: 14px!important;
 
    
}
.plan-form.showcase3-content-2 {
   
    padding: 20px 10px;
}
.reg-videoflix .logo2 {
    
   
    padding: 0 10px;
}
}

@media screen and (max-width: 440px) {
    .plans-card-child {
    width: 80px;
   
    
}

.profile {
    width: 130px;
    margin: 10px;
}
.profile-wrap{
    
    justify-content: center!important;
    
}
}
@media screen and (max-width: 380px) {
    .plans-card-child {
    width: 65px;
    font-size: 12px!important;

  
    
}
}

.formm3 .btn-primary:hover, .formm3 .btn-outline-primary:hover {
    background: red;
    }
    .formm3 .btn-primary:not(:disabled):not(.disabled):active, .formm3 .btn-primary:not(:disabled):not(.disabled).active, .show > .formm3 .btn-primary.dropdown-toggle {
    color: #fff;
    background-color: red;
    border-color: red;
}

.plan-page {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  
  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/ott/letter-v.png');
    background-size: cover;
    filter: blur(20px); 
  }
  
  .content1 {
    z-index: 1;
    text-align: center;
    padding: 20px;
    background: rgb(255 255 255 / 38%);
    border-radius: 10px;
    margin-top: -40px;

  }
  
  h2 {
    margin-bottom: 20px;
  }
  
  .plan-options {
    height: 660px;
    display: flex;
    justify-content: center;
  }
  
  .plan-option {
    width: 270px;
    padding: 20px;
    margin: 0 10px;
    border: 2px solid #f60000;
    border-radius: 10px;
    background: #ffffffd4;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
  }
  .plan-option1 {
    width: 270px;
    padding: 20px;
    margin: 0 10px;
    border: 5px solid #0000000d;
    border-radius: 10px;
    background: #ffffffd4;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
  }
  .plan-option3 {
    width: 270px;
    padding: 20px;
    margin: 0 10px;
    border: 5px solid #0000000d;
    border-radius: 10px;
    background: #ffffffd4;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
  }
  
  .plan-option:hover {
    transform: scale(1.05);
  }
  
  button {
    padding: 10px 20px;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
    
  }
  .slct-btn{
    border-radius: 30px;
    width: 220px;
    margin-top: 55px;
    background: #dd5b5b;
  }
  .slct-btn:hover{
    background: #ff0000;
  }
  .recomd-plan{
    padding-top: 2px;
    border-radius: 9px;
    height: 30px;
    background-color: red;
    margin-top: -21px;
    color: white;
    font-size: initial;
    font-weight: 700; 
  }
  .learn-more{
    margin-top: 15px;
    text-decoration: underline; 
    color: black;
  }
  .price{
    color: black;
    font-size: xx-large;
    font-weight: 700;
  }
.access{
  color: black;
  font-weight: 600;
}
.price-main{
  color: red;
  font-size: revert;
  font-weight: 600;
}
.points{
  text-align: center;
  color: black;

}
.decor{
  text-decoration: line-through;
  color: black;
}
.scnd-ptag{
    color: black;
}
.thrd-ptag{
    color: black;
}
</style>
