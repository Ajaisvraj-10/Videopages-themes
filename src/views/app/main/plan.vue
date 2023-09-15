
<template>
  <div class="main-content">
    
     <div class="site-wrapper">   

            <header class="header-holder-2" :style="background_start?'background-color:transparent':'background-color:#060606'">             
                <div class="menu-wrapper  d-flex align-items-center justify-content-between">             
                    <div class="header-logo">
                        <a >
                            <img src="/main/images/logo.png" alt="Seppo">
                        </a>               
                    </div>

                  

                    
                        
                    <div class="button-holder text-center mt-3">
                        <router-link :to="{name:'home'}">
                                  <a  class="button text-white w-100 text-center">Sign out</a>
                        </router-link>
                    </div>
                               
                    
                                            
                  
                   
                </div>
            </header>    
            <div id="content" class="site-content center-relative">
                 <!-- Pricing Section -->
                <div id="pricing" class="section">                   
                    
                    <div class="section-wrapper block content-1170 center-relative">                                                
                        <div class="content-wrapper">

                            <div class="one_third">
                                <div class="pricing-table ">
                                    <p class="pricing-num">1</p>
                                    <div class="pricing-wrapper">                   
                                        <div class="pricing-table-header">
                                            <div class="pricing-table-title">Basic</div>                                                
                                        </div>
                                        <div class="pricing-table-price">$25</div>
                                        <div class="pricing-table-desc">PER MONTH</div>
                                        <div class="pricing-table-content-holder">  
                                            <ul>
                                                 <li class="pricing-list included-yes">
                                                    <span class="fa fa-check" aria-hidden="true"></span>
                                                    Good Video Quality
                                                </li>
                                                <li class="pricing-list included-yes">
                                                    <span class="fa fa-check" aria-hidden="true"></span>
                                                    480p Resolution
                                                </li>
                                                <li class="pricing-list included-yes">
                                                    <span class="fa fa-check" aria-hidden="true"></span>
                                                    1 Users per Project
                                                </li>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="pricing-button">
                                        <a href="#" class="button scroll" v-b-modal.plan>
                                            CHOOSE PLAN
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="one_third">
                                <div class="pricing-table ">
                                    <p class="pricing-num">2</p>
                                    <div class="pricing-wrapper">                   
                                        <div class="pricing-table-header">
                                            <div class="pricing-table-title">Standard</div>                                                
                                        </div>
                                        <div class="pricing-table-price">$50</div>
                                        <div class="pricing-table-desc">PER MONTH</div>
                                        <div class="pricing-table-content-holder">  
                                            <ul>                                                 
                                                <li class="pricing-list included-yes">
                                                    <span class="fa fa-check" aria-hidden="true"></span>
                                                    Better Video Quality
                                                </li>
                                                <li class="pricing-list included-yes">
                                                    <span class="fa fa-check" aria-hidden="true"></span>
                                                    1080p Resolution
                                                </li>
                                                <li class="pricing-list included-yes">
                                                    <span class="fa fa-check" aria-hidden="true"></span>
                                                    2 Users per Project
                                                </li>
                                               
                                            </ul>                                            
                                        </div>
                                    </div>
                                    <div class="pricing-button">
                                        <a href="#" class="button scroll" v-b-modal.plan>
                                            CHOOSE PLAN
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="one_third last">
                                <div class="pricing-table ">
                                    <p class="pricing-num">3</p>
                                    <div class="pricing-wrapper">                   
                                        <div class="pricing-table-header">
                                            <div class="pricing-table-title">Premium</div>                                                
                                        </div>
                                        <div class="pricing-table-price">$75</div>
                                        <div class="pricing-table-desc">PER MONTH</div>
                                        <div class="pricing-table-content-holder">  
                                            <ul>
                                                <li class="pricing-list included-yes">
                                                    <span class="fa fa-check" aria-hidden="true"></span>
                                                    Best Video Quality
                                                </li>
                                                <li class="pricing-list included-yes">
                                                    <span class="fa fa-check" aria-hidden="true"></span>
                                                    4K+HDR Resolution
                                                </li>
                                                <li class="pricing-list included-yes">
                                                    <span class="fa fa-check" aria-hidden="true"></span>
                                                    5 Users per Project
                                                </li>
                                               
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="pricing-button">
                                        <a href="#" class="button scroll" v-b-modal.plan>
                                            CHOOSE PLAN
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="clear"></div>
                        </div> 
                        <b-modal id="plan" size="md" hide-header hide-footer>
                            
                            <div class="modal-main">
                                
                               <article class="card">
                                    <div class="p-1">
                                        <div class="">
                                            <h6 class="font-weight-700 text-white">Payment</h6>
                                        </div>
                                        <hr>
                                        <div class="card-body p-0 px-1">
                                            <div class="payment-type">
                                                
                                                <div class="types">
                                                    <div class="type selected">
                                                        <div class="logo">
                                                            <img src="/main/images/credit-card.png " width="70">
                                                        </div>
                                                        <div class="text">
                                                            <p>Pay with Credit Card</p>
                                                        </div>
                                                    </div>
                                                    <div class="type">
                                                        <div class="logo">
                                                            <img src="/main/images/paypal.png" width="70">
                                                            
                                                        </div>
                                                        <div class="text">
                                                            <p>Pay with PayPal</p>
                                                        </div>
                                                    </div>
                                                    <div class="type">
                                                        <div class="logo">
                                                            <img src="/main/images/upid.png" width="70">
                                                            
                                                        </div>
                                                        <div class="text">
                                                            <p>Pay with UP ID</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="payment-info d-flex justify-content-between">
                                               
                                                <div class="column shipping">
                                                    <div class="title">
                                                        
                                                        <h6 class="text-16 text-white font-weight-700">Credit Card Info</h6>
                                                    </div>
                                                    <hr>
                                                    
                                                    <div class="checkout-inputs d-flex justify-content-between">
                                                        <div class="field half">
                                                            <label for="name">Cardholder Name</label>
                                                            <input id="name" type="text" placeholder="Full Name">
                                                        </div>
                                                        <div class="field half">
                                                            <label for="address">Card Number</label>
                                                            <input id="address" type="text" placeholder="1234-5678-9012-3456">
                                                        </div>
                                                    </div>
                                                    <div class="checkout-inputs d-flex justify-content-between">
                                                        <div class="field half">
                                                            <label for="city">Exp. Month</label>
                                                            <input id="city" type="text" placeholder="12">
                                                        </div>
                                                        <div class="field half">
                                                            <label for="state">Exp. Year</label>
                                                            <input id="state" type="text" placeholder="19">
                                                        </div>
                                                    </div>
                                                    <!--<div class="field full my-3">
                                                        <label for="zip">CVC Number</label>
                                                        <input id="zip" type="text" placeholder="468">
                                                    </div>-->
                                                </div>
                                            </div>
                                        </div>
                                        <hr>
                                        <div class="card-actions float-right">
                                           
                                            <div class="flex-end">
                                                <button class="btn btn-alert mr-3 btn-lg" style="border-radius: 25px;" @click="$bvModal.hide('plan')">Back to Plan </button>
                                                <router-link :to="{name:'main'}">
                                                    <button class="btn btn-info btn-lg" style="border-radius: 25px;">Proceed</button>
                                                </router-link>
                                            </div>
                                        </div>
                                    </div>
                                </article>

                            </div>
                        </b-modal>                         
                    </div>
                </div> 

              
            </div> 
            
            <footer class="footer">
                <div class="footer-content center-relative">
                    <div class="footer-logo">
                        <img src="/main/images/footer_logo.png" alt="Seppo" />
                    </div>        
                    

                    <div class="copyright-holder">
                        © 2022 All Rights Reserved <a href="">Capcee Technologies</a>            
                    </div>
                </div>
            </footer>
        </div>
  </div>
</template><script>

export default {
  metaInfo: {
    title: "Home"
  },
  data() {
    return {
       menu_click:false,
        search_click:false,
        background_start:true,
        lastScrollPosition: 0,
        
    };
  },
  mounted(){
   
    var self = this
    document.getElementsByClassName("main-content")[0].addEventListener("scroll", () => {
        self.handleScroll()
    });
  },
  methods: {
    pagination(items,page=10){
      var datas=[];
      var key=0;
      items.forEach(function(value,index){
        if((index%page)==0 || index==0){
          datas[key]=[]
        }
        datas[key].push(value)
        index = index+1
        if((index%page)==0){
          key++;
        }
      })
      key=datas.length
      if(datas.length<=1){key=0}
      return {total:key,datas:datas}
    },
    handleScroll () {
      console.log(this.background_start)
      const currentScrollPosition = document.getElementsByClassName("main-content")[0]
          .scrollTop
      if (currentScrollPosition < 0) {
        return 0
      }
      this.background_start = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
      console.log(this.background_start)
    },
  }

};
</script>
<style scoped>
  @import '/main/style/style.css';
</style>
