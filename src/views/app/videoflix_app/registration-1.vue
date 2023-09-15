
<template>
  <div class="main-content">
    
    <div class="site-wrapper">   
            <div class="showcase3">
        
            <div class="reg-videoflix">
                <div class="logo2 flex-align w-100 border-bottom">
                    <img src="/videoflix_web/images/logo.png">
                    <router-link :to="{name:'sign-in'}"><h6 class="text-dark text-20 font-weight-500">Sign In</h6></router-link>


                </div>
                <div class="d-flex">
                    <div class="showcase3-content-2" v-if="crnt_tab=='tab1'">
                        <div class="formm3">
                            <form class="text-center">
                                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png" style="width:250px;" class="my-4">
                                <h6 class="text-14 text-dark">STEP 1 OF 3</h6>
                                <h1 class="text-center">Finish setting up your account</h1>
                                <div class="info">
                                    <h6 class="text-dark text-18 text-center mb-3">videoflix is personalised for you. Create a password to watch on any device at any time.</h6>
                                    
                                    
                                </div>
                                
                                <div class="btn"  @click="crnt_tab='tab2'">
                                    <button class="btn-primary" type="button">Next</button>
                                </div>
                                

                            </form>
            
                        </div>
                        
                    </div>
                    <div class="showcase3-content-2" v-if="crnt_tab=='tab2'">
                        <div class="formm3">
                            <form class="">
                                
                                <h6 class="text-14 text-dark">STEP 1 OF 3</h6>
                                <h1 class="">Create a password to start your membership</h1>
                                <div class="info">
                                    <h6 class="text-dark text-18 mb-3">Just a few more steps and you're done!</h6>
                                    <h6 class="text-dark text-18 mb-3">We hate paperwork, too.</h6>
                                    
                                    
                                </div>
                                <div class="info mb-3">
                                    <input class="email required" type="email" placeholder="Email or phone number">
                                    <p class="text-12 text-danger my-1">Email is required</p>
                                    
                                </div>
                                <div class="info mb-3">
                                    
                                    <input class="email filled" type="password" placeholder="Password">
                                </div>
                                
                                <div class="btn" @click="crnt_tab='tab3'">
                                    <button class="btn-primary" type="button">Next</button>
                                </div>
                                

                            </form>
            
                        </div>
                        
                        
                    </div>
                    <div class="showcase3-content-2" v-if="crnt_tab=='tab3'">
                        <div class="formm3 px-md-5 px-3">
                            <form class="text-center">
                                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Checkmark.png" style="width:50px;" class="my-4">
                                <h6 class="text-14 text-dark">STEP 2 OF 3</h6>
                                <h1 class="text-center">Choose your plan.</h1>
                                <div class="info text-left my-3">
                                    <h6 class="d-flex align-items-center  mb-3">
                                        <i class="fa fa-check text-danger mr-3" style="font-size:20px;"></i>
                                        <h6 class="text-dark text-18 ">No commitments, cancel anytime.</h6>
                                    </h6>
                                    <h6 class="d-flex align-items-center  mb-3">
                                        <i class="fa fa-check text-danger mr-3" style="font-size:20px;"></i>
                                        <h6 class="text-dark text-18 ">Everything on videoflix for one low price.</h6>
                                    </h6>
                                    <h6 class="d-flex align-items-center  mb-3">
                                        <i class="fa fa-check text-danger mr-3" style="font-size:20px;"></i>
                                        <h6 class="text-dark text-18 ">No ads and no extra fees. Ever.</h6>
                                    </h6>
                                    
                                    
                                </div>
                                
                                <div class="btn"  @click="crnt_tab='tab4'">
                                    <button class="btn-primary" type="button">Next</button>
                                </div>
                                

                            </form>
            
                        </div>
                        
                        
                    </div>
                    <div class="showcase3-content-2 plan-form " v-if="crnt_tab=='tab4'">
                        <div class="formm3 ">
                            <form class="text-left">
                                
                                <h6 class="text-14 text-dark">STEP 2 OF 3</h6>
                                <h1 class="">Choose the plan that’s right for you</h1>
                                <div class="info text-left my-3">
                                    <h6 class="d-flex align-items-center  mb-3">
                                        <i class="fa fa-check text-danger mr-3" style="font-size:20px;"></i>
                                        <h6 class="text-dark text-18 ">Watch all you want. Ad-free.</h6>
                                    </h6>
                                    <h6 class="d-flex align-items-center  mb-3">
                                        <i class="fa fa-check text-danger mr-3" style="font-size:20px;"></i>
                                        <h6 class="text-dark text-18 ">Recommendations just for you.</h6>
                                    </h6>
                                    <h6 class="d-flex align-items-center  mb-3">
                                        <i class="fa fa-check text-danger mr-3" style="font-size:20px;"></i>
                                        <h6 class="text-dark text-18 ">Change or cancel your plan anytime.</h6>
                                    </h6>
                                    
                                    
                                </div>
                                <table class="planGrid__featureTable" role="table" data-uia="plan-grid-feature-table">
                                   <caption class="planGrid__featureTableCaption">videoflix Plan Features</caption>
                                   <tbody class="planGrid__featureTableBody" >
                                      <tr role="row" class="planGrid__featureTableRow planGrid__featureTableRow--planPrice sticky-plan">
                                         <td class="planGrid__cell planGrid__featureCell " ></td>
                                         <td class="planGrid__cell planGrid__cell--isSelected planGrid__stringCell plans-card"><div class="plans-card-child active-plan">Mobile</div></td>
                                         <td class="planGrid__cell planGrid__cell--isSelected planGrid__stringCell plans-card"><div class="plans-card-child">Basic</div></td>
                                         <td class="planGrid__cell planGrid__cell--isSelected planGrid__stringCell plans-card" ><div class="plans-card-child">Standard</div></td>
                                         <td class="planGrid__cell planGrid__cell--isSelected planGrid__stringCell plans-card" ><div class="plans-card-child">Premium</div></td>
                                         

                                      </tr>
                                      <tr role="row" class="planGrid__featureTableRow planGrid__featureTableRow--planPrice">
                                         <td class="planGrid__cell planGrid__featureCell" role="cell" >Monthly price</td>
                                         <td class="planGrid__cell planGrid__cell--isSelected planGrid__stringCell active-plan-2" role="cell" >₹&nbsp;149</td>
                                         <td class="planGrid__cell planGrid__stringCell" role="cell" >₹&nbsp;199</td>
                                         <td class="planGrid__cell planGrid__stringCell" role="cell" >₹&nbsp;499</td>
                                         <td class="planGrid__cell planGrid__stringCell" role="cell" aria-label="Premium">₹&nbsp;649</td>


                                      </tr>
                                      <tr role="row" class="planGrid__featureTableRow planGrid__featureTableRow--videoQuality">
                                         <td class="planGrid__cell planGrid__featureCell" role="cell" >Video quality</td>
                                         <td class="planGrid__cell planGrid__cell--isSelected planGrid__videoQualityCell active-plan-2" role="cell" >
                                            <div class="planGrid__videoQualityLabel">Good</div>
                                         </td>
                                         <td class="planGrid__cell planGrid__videoQualityCell" role="cell" >
                                            <div class="planGrid__videoQualityLabel">Good</div>
                                         </td>
                                         <td class="planGrid__cell planGrid__videoQualityCell" role="cell" >
                                            <div class="planGrid__videoQualityLabel">Better</div>
                                         </td>
                                         <td class="planGrid__cell planGrid__videoQualityCell" role="cell" >
                                            <div class="planGrid__videoQualityLabel">Best</div>
                                         </td>
                                      </tr>
                                      <tr role="row" class="planGrid__featureTableRow planGrid__featureTableRow--resolution">
                                         <td class="planGrid__cell planGrid__featureCell" role="cell">Resolution</td>
                                         <td class="planGrid__cell planGrid__cell--isSelected planGrid__videoQualityCell active-plan-2" role="cell"  aria-label="Mobile">
                                            <div class="planGrid__videoQualityLabel">480p</div>
                                         </td>
                                         <td class="planGrid__cell planGrid__videoQualityCell" role="cell"  aria-label="Basic">
                                            <div class="planGrid__videoQualityLabel">480p</div>
                                         </td>
                                         <td class="planGrid__cell planGrid__videoQualityCell" role="cell"  aria-label="Standard">
                                            <div class="planGrid__videoQualityLabel">1080p</div>
                                         </td>
                                         <td class="planGrid__cell planGrid__videoQualityCell" role="cell"  aria-label="Premium">
                                            <div class="planGrid__videoQualityLabel">4K+HDR</div>
                                         </td>
                                      </tr>
                                      <tr role="row" class="planGrid__featureTableRow planGrid__featureTableRow--supportedDevices">
                                         <td class="planGrid__cell planGrid__featureCell" role="cell" >Devices you can use to watch</td>
                                         <td class="planGrid__cell planGrid__cell--isSelected planGrid__supportedDevicesCell active-plan-2" role="cell"  aria-label="Mobile">
                                            <div>
                                               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="planGrid__supportedDevicesIcon" focusable="false">
                                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6 0C4.89543 0 4 0.895431 4 2V22C4 23.1046 4.89543 24 6 24H18C19.1046 24 20 23.1046 20 22V2C20 0.89543 19.1046 0 18 0H6ZM6 2L18 2V22H6V2ZM13.5 18.5C13.5 17.6716 12.8284 17 12 17C11.1716 17 10.5 17.6716 10.5 18.5C10.5 19.3284 11.1716 20 12 20C12.8284 20 13.5 19.3284 13.5 18.5Z" fill="currentColor"></path>
                                               </svg>
                                               <div class="planGrid__supportedDevicesLabel">Phone</div>
                                            </div>
                                            <div>
                                               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="planGrid__supportedDevicesIcon" focusable="false">
                                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2 3C0.895431 3 0 3.89543 0 5V19C0 20.1046 0.895431 21 2 21H22C23.1046 21 24 20.1046 24 19V5C24 3.89543 23.1046 3 22 3H2ZM2 5H22V19H2V5ZM18.5 13.5C19.3284 13.5 20 12.8284 20 12C20 11.1716 19.3284 10.5 18.5 10.5C17.6716 10.5 17 11.1716 17 12C17 12.8284 17.6716 13.5 18.5 13.5Z" fill="currentColor"></path>
                                               </svg>
                                               <div class="planGrid__supportedDevicesLabel">Tablet</div>
                                            </div>
                                         </td>
                                         <td class="planGrid__cell planGrid__supportedDevicesCell" role="cell" data-uia="plan-grid-feature-table-cell+supportedDevices-text_1_stream_name" aria-label="Basic">
                                            <div>
                                               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="planGrid__supportedDevicesIcon" focusable="false">
                                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6 0C4.89543 0 4 0.895431 4 2V22C4 23.1046 4.89543 24 6 24H18C19.1046 24 20 23.1046 20 22V2C20 0.89543 19.1046 0 18 0H6ZM6 2L18 2V22H6V2ZM13.5 18.5C13.5 17.6716 12.8284 17 12 17C11.1716 17 10.5 17.6716 10.5 18.5C10.5 19.3284 11.1716 20 12 20C12.8284 20 13.5 19.3284 13.5 18.5Z" fill="currentColor"></path>
                                               </svg>
                                               <div class="planGrid__supportedDevicesLabel">Phone</div>
                                            </div>
                                            <div>
                                               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="planGrid__supportedDevicesIcon" focusable="false">
                                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2 3C0.895431 3 0 3.89543 0 5V19C0 20.1046 0.895431 21 2 21H22C23.1046 21 24 20.1046 24 19V5C24 3.89543 23.1046 3 22 3H2ZM2 5H22V19H2V5ZM18.5 13.5C19.3284 13.5 20 12.8284 20 12C20 11.1716 19.3284 10.5 18.5 10.5C17.6716 10.5 17 11.1716 17 12C17 12.8284 17.6716 13.5 18.5 13.5Z" fill="currentColor"></path>
                                               </svg>
                                               <div class="planGrid__supportedDevicesLabel">Tablet</div>
                                            </div>
                                            <div>
                                               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="planGrid__supportedDevicesIcon" focusable="false">
                                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.99997 3C2.8954 3 1.99997 3.89543 1.99997 5V14C1.99997 15.1046 2.8954 16 3.99997 16H20C21.1045 16 22 15.1046 22 14V5C22 3.89543 21.1045 3 20 3H3.99997ZM3.99997 5L20 5V14H3.99997V5ZM1.11859 20.6355C4.58689 20.2212 8.23466 20 12 20C15.7653 20 19.413 20.2212 22.8813 20.6355L23.1186 18.6497C19.5701 18.2257 15.8431 18 12 18C8.15686 18 4.42984 18.2257 0.881348 18.6497L1.11859 20.6355Z" fill="currentColor"></path>
                                               </svg>
                                               <div class="planGrid__supportedDevicesLabel">Computer</div>
                                            </div>
                                            <div>
                                               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="planGrid__supportedDevicesIcon" focusable="false">
                                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2 3C0.895431 3 0 3.89543 0 5V14C0 15.1046 0.895431 16 2 16H22C23.1046 16 24 15.1046 24 14V5C24 3.89543 23.1046 3 22 3H2ZM2 5L22 5V14H2V5ZM2.1072 20.5232C5.27786 20.1813 8.59078 20 12 20C15.4092 20 18.7221 20.1813 21.8928 20.5232L22.1072 18.5347C18.8643 18.1851 15.4798 18 12 18C8.52024 18 5.13573 18.1851 1.8928 18.5347L2.1072 20.5232Z" fill="currentColor"></path>
                                               </svg>
                                               <div class="planGrid__supportedDevicesLabel">TV</div>
                                            </div>
                                         </td>
                                         <td class="planGrid__cell planGrid__supportedDevicesCell" role="cell" data-uia="plan-grid-feature-table-cell+supportedDevices-text_2_stream_name" aria-label="Standard">
                                            <div>
                                               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="planGrid__supportedDevicesIcon" focusable="false">
                                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6 0C4.89543 0 4 0.895431 4 2V22C4 23.1046 4.89543 24 6 24H18C19.1046 24 20 23.1046 20 22V2C20 0.89543 19.1046 0 18 0H6ZM6 2L18 2V22H6V2ZM13.5 18.5C13.5 17.6716 12.8284 17 12 17C11.1716 17 10.5 17.6716 10.5 18.5C10.5 19.3284 11.1716 20 12 20C12.8284 20 13.5 19.3284 13.5 18.5Z" fill="currentColor"></path>
                                               </svg>
                                               <div class="planGrid__supportedDevicesLabel">Phone</div>
                                            </div>
                                            <div>
                                               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="planGrid__supportedDevicesIcon" focusable="false">
                                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2 3C0.895431 3 0 3.89543 0 5V19C0 20.1046 0.895431 21 2 21H22C23.1046 21 24 20.1046 24 19V5C24 3.89543 23.1046 3 22 3H2ZM2 5H22V19H2V5ZM18.5 13.5C19.3284 13.5 20 12.8284 20 12C20 11.1716 19.3284 10.5 18.5 10.5C17.6716 10.5 17 11.1716 17 12C17 12.8284 17.6716 13.5 18.5 13.5Z" fill="currentColor"></path>
                                               </svg>
                                               <div class="planGrid__supportedDevicesLabel">Tablet</div>
                                            </div>
                                            <div>
                                               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="planGrid__supportedDevicesIcon" focusable="false">
                                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.99997 3C2.8954 3 1.99997 3.89543 1.99997 5V14C1.99997 15.1046 2.8954 16 3.99997 16H20C21.1045 16 22 15.1046 22 14V5C22 3.89543 21.1045 3 20 3H3.99997ZM3.99997 5L20 5V14H3.99997V5ZM1.11859 20.6355C4.58689 20.2212 8.23466 20 12 20C15.7653 20 19.413 20.2212 22.8813 20.6355L23.1186 18.6497C19.5701 18.2257 15.8431 18 12 18C8.15686 18 4.42984 18.2257 0.881348 18.6497L1.11859 20.6355Z" fill="currentColor"></path>
                                               </svg>
                                               <div class="planGrid__supportedDevicesLabel">Computer</div>
                                            </div>
                                            <div>
                                               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="planGrid__supportedDevicesIcon" focusable="false">
                                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2 3C0.895431 3 0 3.89543 0 5V14C0 15.1046 0.895431 16 2 16H22C23.1046 16 24 15.1046 24 14V5C24 3.89543 23.1046 3 22 3H2ZM2 5L22 5V14H2V5ZM2.1072 20.5232C5.27786 20.1813 8.59078 20 12 20C15.4092 20 18.7221 20.1813 21.8928 20.5232L22.1072 18.5347C18.8643 18.1851 15.4798 18 12 18C8.52024 18 5.13573 18.1851 1.8928 18.5347L2.1072 20.5232Z" fill="currentColor"></path>
                                               </svg>
                                               <div class="planGrid__supportedDevicesLabel">TV</div>
                                            </div>
                                         </td>
                                         <td class="planGrid__cell planGrid__supportedDevicesCell" role="cell" data-uia="plan-grid-feature-table-cell+supportedDevices-text_4_stream_name" aria-label="Premium">
                                            <div>
                                               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="planGrid__supportedDevicesIcon" focusable="false">
                                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6 0C4.89543 0 4 0.895431 4 2V22C4 23.1046 4.89543 24 6 24H18C19.1046 24 20 23.1046 20 22V2C20 0.89543 19.1046 0 18 0H6ZM6 2L18 2V22H6V2ZM13.5 18.5C13.5 17.6716 12.8284 17 12 17C11.1716 17 10.5 17.6716 10.5 18.5C10.5 19.3284 11.1716 20 12 20C12.8284 20 13.5 19.3284 13.5 18.5Z" fill="currentColor"></path>
                                               </svg>
                                               <div class="planGrid__supportedDevicesLabel">Phone</div>
                                            </div>
                                            <div>
                                               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="planGrid__supportedDevicesIcon" focusable="false">
                                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2 3C0.895431 3 0 3.89543 0 5V19C0 20.1046 0.895431 21 2 21H22C23.1046 21 24 20.1046 24 19V5C24 3.89543 23.1046 3 22 3H2ZM2 5H22V19H2V5ZM18.5 13.5C19.3284 13.5 20 12.8284 20 12C20 11.1716 19.3284 10.5 18.5 10.5C17.6716 10.5 17 11.1716 17 12C17 12.8284 17.6716 13.5 18.5 13.5Z" fill="currentColor"></path>
                                               </svg>
                                               <div class="planGrid__supportedDevicesLabel">Tablet</div>
                                            </div>
                                            <div>
                                               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="planGrid__supportedDevicesIcon" focusable="false">
                                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.99997 3C2.8954 3 1.99997 3.89543 1.99997 5V14C1.99997 15.1046 2.8954 16 3.99997 16H20C21.1045 16 22 15.1046 22 14V5C22 3.89543 21.1045 3 20 3H3.99997ZM3.99997 5L20 5V14H3.99997V5ZM1.11859 20.6355C4.58689 20.2212 8.23466 20 12 20C15.7653 20 19.413 20.2212 22.8813 20.6355L23.1186 18.6497C19.5701 18.2257 15.8431 18 12 18C8.15686 18 4.42984 18.2257 0.881348 18.6497L1.11859 20.6355Z" fill="currentColor"></path>
                                               </svg>
                                               <div class="planGrid__supportedDevicesLabel">Computer</div>
                                            </div>
                                            <div>
                                               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="planGrid__supportedDevicesIcon" focusable="false">
                                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2 3C0.895431 3 0 3.89543 0 5V14C0 15.1046 0.895431 16 2 16H22C23.1046 16 24 15.1046 24 14V5C24 3.89543 23.1046 3 22 3H2ZM2 5L22 5V14H2V5ZM2.1072 20.5232C5.27786 20.1813 8.59078 20 12 20C15.4092 20 18.7221 20.1813 21.8928 20.5232L22.1072 18.5347C18.8643 18.1851 15.4798 18 12 18C8.52024 18 5.13573 18.1851 1.8928 18.5347L2.1072 20.5232Z" fill="currentColor"></path>
                                               </svg>
                                               <div class="planGrid__supportedDevicesLabel">TV</div>
                                            </div>
                                         </td>
                                      </tr>
                                   </tbody>
                                </table>
                                <h4 class="text-gray mb-3 text-12 font-weight-500" style="line-height:22px;">HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our <a style="color:blue;">Terms of Use</a>  for more details.</h4>

                                <h4 class="text-gray mb-3 text-12 font-weight-500" style="line-height:22px;">Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.</h4>
                                
                                <div class="btn my-2"  @click="crnt_tab='tab5'">
                                    <button class="btn-primary" type="button">Next</button>
                                </div>
                                

                            </form>
            
                        </div>
                        
                        
                    </div>
                    <div class="showcase3-content-2" v-if="crnt_tab=='tab5'">
                        <div class="formm3 ">
                            <form class="text-center">
                                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Lock.png" style="width:50px;" class="my-4">
                                <h6 class="text-14 text-dark">STEP 3 OF 3</h6>
                                <h1 class="text-center mb-2">Choose how to pay</h1>
                                <div class="info  my-3">
                                      
                                    <h6 class="text-dark text-16 mb-3">Your payment is encrypted and you can change how you pay anytime.</h6>
                                    <h6 class="text-dark text-16 font-weight-700 my-2 ">Secure for peace of mind.</h6>
                                    <h6 class="text-dark text-16 font-weight-700 my-2 ">Cancel easily online.</h6>

                                    
                                </div>
                                <div class="flex-align  p-3 mx-1 my-2 border rounded" @click="crnt_tab='tab6'">
                                    <div class="d-flex align-items-center">
                                        <h6 class="text-dark text-14">Credit or Debit Card</h6>
                                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/visa-v3.svg" style="width:30px;" class="mx-2">
                                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/mastercard-v2.svg" style="width:30px;" class="mx-2">
                                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/amex-v2.svg" style="width:30px;" class="mx-2">
                                        <img src="  https://assets.nflxext.com/ffe/siteui/acquisition/payment/icon_dinersclub_v2.png" style="width:30px;" class="mx-2">
                                    </div>
                                    <i class="fa fa-angle-right"></i>
                                </div>
                                <div class="flex-align  p-3 mx-1 my-2 border rounded" @click="crnt_tab='tab7'">
                                    <div class="d-flex align-items-center">
                                        <h6 class="text-dark text-14">UPI AutoPay</h6>
                                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/bhim-upi.svg" style="width:30px;" class="mx-2">
                                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/paytm.svg" style="width:30px;" class="mx-2">
                                        <img src="  https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/phonepe.svg" style="width:30px;" class="mx-2">
                                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/amazonpay.svg" style="width:30px;" class="mx-2">
                                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/gpay.svg" style="width:30px;" class="mx-2">
                                    </div>
                                    <i class="fa fa-angle-right"></i>
                                </div>
                                
                               

                            </form>
            
                        </div>
                        
                        
                    </div>
                    <div class="showcase3-content-2" v-if="crnt_tab=='tab6'">
                        <div class="formm3">
                            <form class="">
                                
                                <h6 class="text-14 text-dark">STEP 3 OF 3</h6>
                                <h1 class="">Set up your credit or debit card</h1>
                                <div class="d-flex align-items-center my-2">
                                       
                                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/visa-v3.svg" style="width:30px;" class="mr-2">
                                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/mastercard-v2.svg" style="width:30px;" class="mr-2">
                                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/amex-v2.svg" style="width:30px;" class="mr-2">
                                        <img src="  https://assets.nflxext.com/ffe/siteui/acquisition/payment/icon_dinersclub_v2.png" style="width:30px;" class="mr-2">
                                </div>
                                
                                <div class="info mb-3">
                                    <input class="email filled" type="name" placeholder="First name" value="Nithul" >
                                </div>
                                <div class="info mb-3">
                                    <input class="email" type="name" placeholder="Last name">
                                </div>
                                <div class="info mb-3">
                                    <input class="email" type="" placeholder="Card number">
                                </div>
                                <div class="info mb-3">
                                    <input class="email required" type="text" placeholder="Expiration date (MM/YY)">
                                    <p class="text-12 text-danger my-1">Exp date is required</p>

                                </div>
                                <div class="info mb-3">
                                    <input class="email required" type="text" placeholder="Security code (CVV)">
                                    <p class="text-12 text-danger my-1">Security code is required</p>

                                </div>
                                <div class="flex-align rounded bg-light  p-3 m-1">
                                    <div>
                                        <h6 class="text-dark text-14 font-weight-500 mb-1">₹ 149/month</h6>
                                        <h6 class="text-gray text-14 font-weight-500">Mobile Plan</h6>

                                    </div>
                                    <h6 class="text-16 text-info font-weight-700" @click="crnt_tab='tab4'">Change</h6>
                                </div>
                                <h6 class="text-12 text-gray px-1 my-2">Any payment above ₹ 2000 shall need additional authentication.</h6>

                                <h6 class="text-12 text-gray px-1 my-2">By checking the checkbox below, you agree to our Terms of Use, Privacy Statement, and that you are over 18. videoflix will automatically continue your membership and charge the membership fee (currently ₹ 149/month) to your payment method until you cancel. You may cancel at any time to avoid future charges.</h6>


                                <div class="px-1 my-2">
                                    <input type="checkbox" style="width: 20px;height: 20px;">
                                    <label class="text-gray pl-3">I agree</label>

                                </div>
                                
                                <div class="btn my-4">
                                    <button class="btn-primary" type="button">Start Membership</button>
                                </div>
                                

                            </form>
            
                        </div>
                        
                        
                    </div>

                    <div class="showcase3-content-2" v-if="crnt_tab=='tab7'">
                        <div class="formm3">
                            <form class="">
                                
                                <h6 class="text-14 text-dark">STEP 3 OF 3</h6>
                                <h1 class="">Set up UPI AutoPay</h1>
                                <h6 class="text-dark text-16">You can change this recurring payment any time in your settings.</h6>
                                
                                
                                <div class="info mb-3">
                                    <select class="email">
                                        <option>Select your API App</option>
                                        <option>BHIM UPI</option>
                                        <option>Paytm</option>
                                        <option>PhonePay</option>
                                        <option>Amazon Pay</option>
                                        <option>Google Pay</option>
                                        <option>Other</option>

                                    </select>
                                   
                                </div>
                               
                               
                                <div class="info mb-3">
                                    <input class="email " type="text" placeholder="UPI ID">
                                    <p class="text-14 text-info my-2 font-weight-500" @click="crnt_tab='tab8'">How do i find my UPI ID</p>

                                </div>
                                
                                
                                
                                <div class="btn my-4" >
                                    <button class="btn-primary" type="button">Next</button>
                                </div>
                                

                            </form>
            
                        </div>
                        
                        
                    </div>
                    <div class="showcase3-content-2" v-if="crnt_tab=='tab8'">
                        <div class="formm3">
                            <form class="">
                                
                              
                                <h1 class="">Find your UPI ID</h1>
                                <div class="d-flex align-items-center my-3">
                                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" aria-hidden="true"><rect width="50" height="50" fill="white"></rect><rect x="13" y="3" width="24" height="44" rx="2.604" stroke="#E50913" stroke-width="1.5"></rect><rect x="19.5623" y="5.25" width="10.937" height="2.25" rx="1.125" fill="#E50913"></rect><rect x="15" y="11" width="20" height="33" rx="1" fill="#E50913"></rect><path d="M19.7029 26.2244V30.9883" stroke="white" stroke-linecap="square"></path><path d="M23.3589 26.2244V30.9883" stroke="white" stroke-linecap="square"></path><path d="M27.0151 26.2244V30.9883" stroke="white" stroke-linecap="square"></path><path d="M30.6711 26.2244V30.9883" stroke="white" stroke-linecap="square"></path><path d="M19.7029 33.3701H30.6711" stroke="white" stroke-linecap="square"></path><path d="M20.5448 23.938L25.187 20.3087L29.8291 23.938H20.5448Z" stroke="white"></path></svg>
                                    <h6 class="text-dark text-16">Go to the app linked to your UPI ID.</h6>
                                </div>
                                <div class="d-flex align-items-center my-3">
                                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" aria-hidden="true"><rect width="50" height="50" fill="white"></rect><rect x="13" y="3" width="24" height="44" rx="2.604" stroke="#E50913" stroke-width="1.5"></rect><rect x="20" y="5" width="10" height="2" rx="1" fill="#E50913"></rect><rect x="15.9924" y="32" width="16.9567" height="2" rx="1" fill="#E50913"></rect><rect x="20.9797" y="36" width="11.9694" height="2" rx="1" fill="#E50913"></rect><rect x="18.9846" y="40" width="13.9643" height="2" rx="1" fill="#E50913"></rect><path d="M25.0003 20.8065C26.604 20.8065 27.9041 19.5067 27.9041 17.9032C27.9041 16.2998 26.604 15 25.0003 15C23.3965 15 22.0964 16.2998 22.0964 17.9032C22.0964 19.5067 23.3965 20.8065 25.0003 20.8065Z" fill="#E50913"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M30 24.8405C28.7262 26.1736 26.9565 26.9998 25 26.9998C23.0435 26.9998 21.2738 26.1736 20 24.8404C20.5576 22.5234 22.5847 20.8064 25 20.8064C27.4153 20.8064 29.4424 22.5235 30 24.8405Z" fill="#E50913"></path><circle cx="25" cy="20" r="8.5" stroke="#E50913"></circle></svg>
                                    <h6 class="text-dark text-16">Tap your profile or settings menu.</h6>
                                </div>
                                <div class="d-flex align-items-center my-3">
                                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" aria-hidden="true"><rect width="50" height="50" fill="white"></rect><rect x="13" y="3" width="24" height="44" rx="2.604" stroke="#E50913" stroke-width="1.5"></rect><rect x="20" y="5" width="10" height="2" rx="1" fill="#E50913" fill-opacity="0.4"></rect><rect x="16" y="25" width="18" height="2" rx="1" fill="#E50913" fill-opacity="0.4"></rect><rect x="16" y="29" width="18" height="2" rx="1" fill="#E50913" fill-opacity="0.4"></rect><rect x="16" y="39" width="18" height="2" rx="1" fill="#E50913" fill-opacity="0.4"></rect><rect x="16" y="33" width="18" height="4" rx="1.25" fill="#E50913"></rect><path d="M25.0609 17.499C26.1946 17.499 27.1136 16.6096 27.1136 15.5126C27.1136 14.4155 26.1946 13.5261 25.0609 13.5261C23.9273 13.5261 23.0083 14.4155 23.0083 15.5126C23.0083 16.6096 23.9273 17.499 25.0609 17.499Z" fill="#E50913" fill-opacity="0.4"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M28.5951 20.2592C27.6946 21.1714 26.4437 21.7367 25.0608 21.7367C23.6778 21.7367 22.4268 21.1713 21.5264 20.2591C21.9206 18.6738 23.3534 17.499 25.0607 17.499C26.768 17.499 28.2009 18.6739 28.5951 20.2592Z" fill="#E50913" fill-opacity="0.4"></path><circle cx="25" cy="17" r="5.5" stroke="#E50913" stroke-opacity="0.4"></circle></svg>
                                    <h6 class="text-dark text-16">Find your ID under “UPI ID”.</h6>
                                </div>
                                <div class="d-flex align-items-center my-3">
                                    <svg width="60" height="50" viewBox="0 0 50 50" fill="none" aria-hidden="true"><rect width="50" height="50" fill="white"></rect><rect x="13" y="3" width="24" height="44" rx="2.604" stroke="#E50913" stroke-width="1.5"></rect><rect x="20" y="5.13306" width="10" height="2" rx="1" fill="#E50913"></rect><g clip-path="url(#clip0_733_8442)"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.6716 16.7503V18.2115V23.6929V36.291C20.3377 36.0942 21.171 36.0177 22.8658 35.9418V31.989V26.7069L26.2587 35.9418C28.3908 35.9936 30.6716 36.291 30.6716 36.291L30.6715 36.2905L30.6716 35.6536V15.291H26.4775V19.5929V24.8751L22.9563 15.291H18.6718H18.6716L18.6718 15.2915L18.6716 15.9282V16.7503Z" fill="#E50914"></path></g><defs><clipPath id="clip0_733_8442"><rect width="14.0149" height="23.7112" fill="white" transform="translate(18.6716 15.291)"></rect></clipPath></defs></svg>
                                    <h6 class="text-dark text-16">Copy your UPI ID and paste it on videoflix to finish payment set up.</h6>
                                </div>
                                
                                <div class="btn my-4" @click="crnt_tab='tab7'">
                                    <button class="btn-primary" type="button">Close</button>
                                </div>
                                

                            </form>
            
                        </div>
                        
                        
                    </div>

                </div>
               
            </div>


       
            <div class="reg-footer">
                
                <div class="ftr-content">
                    <div class="contact">
                        <a href="#">Quesions? Contact us.</a>
                    </div>
                    <div class="ftr row">
                        <a class="col-lg-2 col-md-4 col-6 my-1">Faq</a>
                        <a class="col-lg-2 col-md-4 col-6 my-1">Help center</a>
                        <a class="col-lg-2 col-md-4 col-6 my-1">Terms of use</a>
                        <a class="col-lg-2 col-md-4 col-6 my-1">Privacy</a>
                        <a class="col-lg-2 col-md-4 col-6 my-1">Cookies Preference</a>
                        <a class="col-lg-2 col-md-4 col-6 my-1">Corporate Information</a>


                    </div>
                    <div class="" >
                          
                          
                          <select class="button-3  mr-sm-4 mr-3">
                            <option>English</option>
                            <option>Hindi</option>

                          </select>
                          
                    </div>

                    
                </div>
               
            </div>
       
            </div>





    </div>
  </div>
</template>
<script>

export default {
  metaInfo: {
    
  },
  data() {
    return {
        crnt_tab:'tab1',
        

    };
  },
 

  

};
</script>
<style scoped>
  
  @import '/videoflix_web/style/style.css';
  @import '/videoflix_web/style/style-2.css';


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
    width: 170px;
    
    
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
</style>
