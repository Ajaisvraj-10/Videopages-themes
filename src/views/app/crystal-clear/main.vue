
<template>
    <div class="main-content " style=" background-color: #131313;">
      
      <div class="site-wrapper">   
              <b-modal id="video-modal" size="lg" hide-header hide-footer>
                  <img src="/crystal-clear/images/close.png" class="close-modal" @click="$bvModal.hide('video-modal');current_movie.message=''">
                  <div class="video-in-modal position-relative" v-if="current_movie.message=='play'">
                    <iframe :src="'https://iframe.mediadelivery.net/embed/'+libary_id+'/'+current_movie.video.video_guid+'?autoplay=true'" loading="lazy" style="border: none;height: 400px; width: 100%;" allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowfullscreen="true"></iframe>
                  </div>
                  <div class="video-in-modal position-relative" v-else>
                      <img :src="current_movie.thumbnail" class="w-100">
                      <div class="overlay-in-video">
                          <div class="video-controls video-controls-modal mb-2">
                              <div class="d-flex modal-icons-2">
                                  <h6 class="text-14 px-4 bg-light text-dark2" @click="current_movie.message='play'">
                                      <i class="fa fa-play mr-2"></i>Play
                                  </h6>
                                  <h6 class="text-14 rounded-circle">
                                      <i class="fa fa-plus"></i>
                                  </h6>
                                  <h6 class="text-14 rounded-circle">
                                      <i class="fa fa-thumbs-up"></i>
                                  </h6>
  
                              </div>
                              <h6 class="text-14 rounded-circle border flex-align2" style="width:35px; height:35px;">
                                      <i class="fa fa-volume-up"></i>  
                              </h6>
                                  
                              
                          </div>
                      </div>
                  </div>
                  <div class="vide-description  p-3 px-lg-4">
                      <div class="row mx-0 ">
                          <div class="col-md-6 p-0">
                              <h5>
                                  <span class="text-danger pr-2">97% Match</span>
                                  2022 <span class="rounded border px-1 mx-2">A</span> 2h 12m <span class="rounded border px-1 mx-2">HD</span>
                              </h5>
                          </div>
                          <div class="col-md-6 p-0">
                              <h6 v-for="movie_spec in current_movie.specs"><span class="mr-2">{{movie_spec.label}}:</span> {{movie_spec.name}}</h6>
  
  
                              <h6><span class="mr-2">Genres:</span> {{current_movie.language_detail.name}} Language {{current_movie.type}}, {{current_movie.category_detail.name}}</h6>
                              <h6><span class="mr-2">This movie is:</span> {{current_movie.description}}</h6>
                          </div>
                      </div>
  
                      <div class="third-section mt-4">
                          <h5 class="col p-0">More Like This</h5>
                          <div class="row">
                              <div class="col-lg-4 col-6 my-2 ">
                                  <div class="rounded more-like">
                                      <img src="https://occ-0-4822-2164.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABao775q_3DupPwQNudZDPkhhR8_kEbZjksbOcFHvKUq2WQuCuA4yggkZiOkBRq5-22_m6pjTZc-mvmJQvR9PJQRYLxXKLeaFBn5F.webp?r=283" class="w-100 rounded">
                                      <div class="col-12 modal-cols">
                                          <h5>
                                              <span class="text-danger pr-2">97% Match</span>
                                              2022 <span class="rounded border px-1 mx-2">A</span> 2h 12m <span class="rounded border px-1 mx-2">HD</span>
                                              <h6 class="my-2" v-for="movie_spec in current_movie.specs"><span class="mr-2">{{movie_spec.label}}:</span> {{movie_spec.name}}</h6>
  
  
                                              <h6 class="my-2"><span class="mr-2">Genres:</span> {{current_movie.language_detail.name}} Language {{current_movie.type}}, {{current_movie.category_detail.name}}</h6>
                                              <h6 class="my-2"><span class="mr-2">This movie is:</span> {{current_movie.description}}</h6>
                                          </h5>
                                      </div>
                                  </div>
  
                              </div>
                              <div class="col-lg-4 col-6 my-2 ">
                                  <div class="rounded more-like">
                                      <img src="https://occ-0-4822-2164.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABao775q_3DupPwQNudZDPkhhR8_kEbZjksbOcFHvKUq2WQuCuA4yggkZiOkBRq5-22_m6pjTZc-mvmJQvR9PJQRYLxXKLeaFBn5F.webp?r=283" class="w-100 rounded">
                                      <div class="col-12 modal-cols">
                                          <h5>
                                              <span class="text-danger pr-2">97% Match</span>
                                              2022 <span class="rounded border px-1 mx-2">A</span> 2h 12m <span class="rounded border px-1 mx-2">HD</span>
                                              <h6 class="my-2" v-for="movie_spec in current_movie.specs"><span class="mr-2">{{movie_spec.label}}:</span> {{movie_spec.name}}</h6>
  
  
                                              <h6 class="my-2"><span class="mr-2">Genres:</span> {{current_movie.language_detail.name}} Language {{current_movie.type}}, {{current_movie.category_detail.name}}</h6>
                                              <h6 class="my-2"><span class="mr-2">This movie is:</span> {{current_movie.description}}</h6>
                                          </h5>
                                      </div>
                                  </div>
  
                              </div>
                              <div class="col-lg-4 col-6 my-2 ">
                                  <div class="rounded more-like">
                                      <img src="https://occ-0-4822-2164.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABao775q_3DupPwQNudZDPkhhR8_kEbZjksbOcFHvKUq2WQuCuA4yggkZiOkBRq5-22_m6pjTZc-mvmJQvR9PJQRYLxXKLeaFBn5F.webp?r=283" class="w-100 rounded">
                                      <div class="col-12 modal-cols">
                                          <h5>
                                              <span class="text-danger pr-2">97% Match</span>
                                              2022 <span class="rounded border px-1 mx-2">A</span> 2h 12m <span class="rounded border px-1 mx-2">HD</span>
                                              <h6 class="my-2" v-for="movie_spec in current_movie.specs"><span class="mr-2">{{movie_spec.label}}:</span> {{movie_spec.name}}</h6>
  
  
                                              <h6 class="my-2"><span class="mr-2">Genres:</span> {{current_movie.language_detail.name}} Language {{current_movie.type}}, {{current_movie.category_detail.name}}</h6>
                                              <h6 class="my-2"><span class="mr-2">This movie is:</span> {{current_movie.description}}</h6>
                                          </h5>
                                      </div>
                                  </div>
  
                              </div>
                              <div class="col-lg-4 col-6 my-2 ">
                                  <div class="rounded more-like">
                                      <img src="https://occ-0-4822-2164.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABao775q_3DupPwQNudZDPkhhR8_kEbZjksbOcFHvKUq2WQuCuA4yggkZiOkBRq5-22_m6pjTZc-mvmJQvR9PJQRYLxXKLeaFBn5F.webp?r=283" class="w-100 rounded">
                                      <div class="col-12 modal-cols">
                                          <h5>
                                              <span class="text-danger pr-2">97% Match</span>
                                              2022 <span class="rounded border px-1 mx-2">A</span> 2h 12m <span class="rounded border px-1 mx-2">HD</span>
                                              <h6 class="my-2" v-for="movie_spec in current_movie.specs"><span class="mr-2">{{movie_spec.label}}:</span> {{movie_spec.name}}</h6>
  
  
                                              <h6 class="my-2"><span class="mr-2">Genres:</span> {{current_movie.language_detail.name}} Language {{current_movie.type}}, {{current_movie.category_detail.name}}</h6>
                                              <h6 class="my-2"><span class="mr-2">This movie is:</span> {{current_movie.description}}</h6>
                                          </h5>
                                      </div>
                                  </div>
  
                              </div>
  
                              <div class="col-lg-4 col-6 my-2 ">
                                  <div class="rounded more-like">
                                      <img src="https://occ-0-4822-2164.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABao775q_3DupPwQNudZDPkhhR8_kEbZjksbOcFHvKUq2WQuCuA4yggkZiOkBRq5-22_m6pjTZc-mvmJQvR9PJQRYLxXKLeaFBn5F.webp?r=283" class="w-100 rounded">
                                      <div class="col-12 modal-cols">
                                          <h5>
                                              <span class="text-danger pr-2">97% Match</span>
                                              2022 <span class="rounded border px-1 mx-2">A</span> 2h 12m <span class="rounded border px-1 mx-2">HD</span>
                                              <h6 class="my-2" v-for="movie_spec in current_movie.specs"><span class="mr-2">{{movie_spec.label}}:</span> {{movie_spec.name}}</h6>
  
  
                                              <h6 class="my-2"><span class="mr-2">Genres:</span> {{current_movie.language_detail.name}} Language {{current_movie.type}}, {{current_movie.category_detail.name}}</h6>
                                              <h6 class="my-2"><span class="mr-2">This movie is:</span> {{current_movie.description}}</h6>
                                          </h5>
                                      </div>
                                  </div>
  
                              </div>
                              <div class="col-lg-4 col-6 my-2 ">
                                  <div class="rounded more-like">
                                      <img src="https://occ-0-4822-2164.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABao775q_3DupPwQNudZDPkhhR8_kEbZjksbOcFHvKUq2WQuCuA4yggkZiOkBRq5-22_m6pjTZc-mvmJQvR9PJQRYLxXKLeaFBn5F.webp?r=283" class="w-100 rounded">
                                      <div class="col-12 modal-cols">
                                          <h5>
                                              <span class="text-danger pr-2">97% Match</span>
                                              2022 <span class="rounded border px-1 mx-2">A</span> 2h 12m <span class="rounded border px-1 mx-2">HD</span>
                                              <h6 class="my-2" v-for="movie_spec in current_movie.specs"><span class="mr-2">{{movie_spec.label}}:</span> {{movie_spec.name}}</h6>
  
  
                                              <h6 class="my-2"><span class="mr-2">Genres:</span> {{current_movie.language_detail.name}} Language {{current_movie.type}}, {{current_movie.category_detail.name}}</h6>
                                              <h6 class="my-2"><span class="mr-2">This movie is:</span> {{current_movie.description}}</h6>
                                          </h5>
                                      </div>
                                  </div>
  
                              </div>
  
                          </div>
                          
                      </div>
                      <div class="third-section my-4">
                          <h5 class="col">More Like This</h5>
                          <div class="row m-0">
                              <div class="col-md-4 col-6 my-2 ">
                                  <div class="rounded more-like">
                                      <img src="https://occ-0-4822-2164.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABao775q_3DupPwQNudZDPkhhR8_kEbZjksbOcFHvKUq2WQuCuA4yggkZiOkBRq5-22_m6pjTZc-mvmJQvR9PJQRYLxXKLeaFBn5F.webp?r=283" class="w-100 rounded">
                                      <div class="col-12 modal-cols">
                                          <h5>
                                              <span class="text-danger pr-2">97% Match</span>
                                              2022 <span class="rounded border px-1 mx-2">A</span> 2h 12m <span class="rounded border px-1 mx-2">HD</span>
                                              <h6 class="my-2" v-for="movie_spec in current_movie.specs"><span class="mr-2">{{movie_spec.label}}:</span> {{movie_spec.name}}</h6>
  
  
                                              <h6 class="my-2"><span class="mr-2">Genres:</span> {{current_movie.language_detail.name}} Language {{current_movie.type}}, {{current_movie.category_detail.name}}</h6>
                                              <h6 class="my-2"><span class="mr-2">This movie is:</span> {{current_movie.description}}</h6>
                                          </h5>
                                      </div>
                                  </div>
  
                              </div>
                              <div class="col-md-4 col-6 my-2 ">
                                  <div class="rounded more-like">
                                      <img src="https://occ-0-4822-2164.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABao775q_3DupPwQNudZDPkhhR8_kEbZjksbOcFHvKUq2WQuCuA4yggkZiOkBRq5-22_m6pjTZc-mvmJQvR9PJQRYLxXKLeaFBn5F.webp?r=283" class="w-100 rounded">
                                      <div class="col-12 modal-cols">
                                          <h5>
                                              <span class="text-danger pr-2">97% Match</span>
                                              2022 <span class="rounded border px-1 mx-2">A</span> 2h 12m <span class="rounded border px-1 mx-2">HD</span>
                                              <h6 class="my-2" v-for="movie_spec in current_movie.specs"><span class="mr-2">{{movie_spec.label}}:</span> {{movie_spec.name}}</h6>
  
  
                                              <h6 class="my-2"><span class="mr-2">Genres:</span> {{current_movie.language_detail.name}} Language {{current_movie.type}}, {{current_movie.category_detail.name}}</h6>
                                              <h6 class="my-2"><span class="mr-2">This movie is:</span> {{current_movie.description}}</h6>
                                          </h5>
                                      </div>
                                  </div>
  
                              </div>
                              <div class="col-md-4 col-6 my-2 ">
                                  <div class="rounded more-like">
                                      <img src="https://occ-0-4822-2164.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABao775q_3DupPwQNudZDPkhhR8_kEbZjksbOcFHvKUq2WQuCuA4yggkZiOkBRq5-22_m6pjTZc-mvmJQvR9PJQRYLxXKLeaFBn5F.webp?r=283" class="w-100 rounded">
                                      <div class="col-12 modal-cols">
                                          <h5>
                                              <span class="text-danger pr-2">97% Match</span>
                                              2022 <span class="rounded border px-1 mx-2">A</span> 2h 12m <span class="rounded border px-1 mx-2">HD</span>
                                              <h6 class="my-2" v-for="movie_spec in current_movie.specs"><span class="mr-2">{{movie_spec.label}}:</span> {{movie_spec.name}}</h6>
  
  
                                              <h6 class="my-2"><span class="mr-2">Genres:</span> {{current_movie.language_detail.name}} Language {{current_movie.type}}, {{current_movie.category_detail.name}}</h6>
                                              <h6 class="my-2"><span class="mr-2">This movie is:</span> {{current_movie.description}}</h6>
                                          </h5>
                                      </div>
                                  </div>
  
                              </div>
                              <div class="col-md-4 col-6 my-2 ">
                                  <div class="rounded more-like">
                                      <img src="https://occ-0-4822-2164.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABao775q_3DupPwQNudZDPkhhR8_kEbZjksbOcFHvKUq2WQuCuA4yggkZiOkBRq5-22_m6pjTZc-mvmJQvR9PJQRYLxXKLeaFBn5F.webp?r=283" class="w-100 rounded">
                                      <div class="col-12 modal-cols">
                                          <h5>
                                              <span class="text-danger pr-2">97% Match</span>
                                              2022 <span class="rounded border px-1 mx-2">A</span> 2h 12m <span class="rounded border px-1 mx-2">HD</span>
                                              <h6 class="my-2" v-for="movie_spec in current_movie.specs"><span class="mr-2">{{movie_spec.label}}:</span> {{movie_spec.name}}</h6>
  
  
                                              <h6 class="my-2"><span class="mr-2">Genres:</span> {{current_movie.language_detail.name}} Language {{current_movie.type}}, {{current_movie.category_detail.name}}</h6>
                                              <h6 class="my-2"><span class="mr-2">This movie is:</span> {{current_movie.description}}</h6>
                                          </h5>
                                      </div>
                                  </div>
  
                              </div>
  
                              <div class="col-md-4 col-6 my-2 ">
                                  <div class="rounded more-like">
                                      <img src="https://occ-0-4822-2164.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABao775q_3DupPwQNudZDPkhhR8_kEbZjksbOcFHvKUq2WQuCuA4yggkZiOkBRq5-22_m6pjTZc-mvmJQvR9PJQRYLxXKLeaFBn5F.webp?r=283" class="w-100 rounded">
                                      <div class="col-12 modal-cols">
                                          <h5>
                                              <span class="text-danger pr-2">97% Match</span>
                                              2022 <span class="rounded border px-1 mx-2">A</span> 2h 12m <span class="rounded border px-1 mx-2">HD</span>
                                              <h6 class="my-2" v-for="movie_spec in current_movie.specs"><span class="mr-2">{{movie_spec.label}}:</span> {{movie_spec.name}}</h6>
  
  
                                              <h6 class="my-2"><span class="mr-2">Genres:</span> {{current_movie.language_detail.name}} Language {{current_movie.type}}, {{current_movie.category_detail.name}}</h6>
                                              <h6 class="my-2"><span class="mr-2">This movie is:</span> {{current_movie.description}}</h6>
                                          </h5>
                                      </div>
                                  </div>
  
                              </div>
                              <div class="col-md-4 col-6 my-2 ">
                                  <div class="rounded more-like">
                                      <img src="https://occ-0-4822-2164.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABao775q_3DupPwQNudZDPkhhR8_kEbZjksbOcFHvKUq2WQuCuA4yggkZiOkBRq5-22_m6pjTZc-mvmJQvR9PJQRYLxXKLeaFBn5F.webp?r=283" class="w-100 rounded">
                                      <div class="col-12 modal-cols">
                                          <h5>
                                              <span class="text-danger pr-2">97% Match</span>
                                              2022 <span class="rounded border px-1 mx-2">A</span> 2h 12m <span class="rounded border px-1 mx-2">HD</span>
                                              <h6 class="my-2" v-for="movie_spec in current_movie.specs"><span class="mr-2">{{movie_spec.label}}:</span> {{movie_spec.name}}</h6>
  
  
                                              <h6 class="my-2"><span class="mr-2">Genres:</span> {{current_movie.language_detail.name}} Language {{current_movie.type}}, {{current_movie.category_detail.name}}</h6>
                                              <h6 class="my-2"><span class="mr-2">This movie is:</span> {{current_movie.description}}</h6>
                                          </h5>
                                      </div>
                                  </div>
  
                              </div>
  
                          </div>
                          
                      </div>
                  </div>
  
              </b-modal>
              
              <header class="header-holder" :style="background_start?'background-color:transparent':'background-color:#060606'">             
                  <div class="menu-wrapper2  d-flex align-items-center justify-content-between">             
                      <div class="header-logo d-flex align-items-center">
                          <a >
                              <img src="/crystal-clear/images/logo.png" alt="Seppo">
                          </a>  
                          <div class="d-flex align-items-center menu-list-main">
                              <div class="toggle-holder" >
                                  <h6 class="text-12 browse-size">Browse</h6>
                                  <i class="fa fa-caret-down text-white pl-2 ml-1"></i>
  
                              </div>  
                              <div class="menu-holder">
                                  <nav id="header-main-menu">
                                      <ul class="main-menu sm sm-clean">
                                          <li class="active">
                                              <a >Home</a>
                                          </li>
                                          <li>
                                              <a >TV Shows</a>
                                          </li>
                                          <li>
                                              <a >Movies</a>
                                          </li>
                                          <li>
                                              <a >New & Popular</a>
                                          </li>
                                          <li>
                                              <a >My List</a>
                                          </li>
                                          <li>
                                              <a >Browse by Languages</a>
                                          </li>
                                          
                                      
                                      </ul>
                                      
                                  </nav>                       
                              </div>
                              
                          </div>    
                                 
                      </div>
  
                    
  
                      
                          
                      
                      <div class="d-flex align-items-center ">
                          
                          <div class="search-icon mx-2 px-1">
                              <i class="fa fa-search ml-4" @click="search_click=true"></i>
  
                              <div class="searchbar2" :style="search_click?'width:250px':'width:0px'">
                                  <div class=" d-flex align-items-center">
                                     
                                      <input placeholder="Titles, Peoples, Genres">
                                  </div>
                                  <div class="searchbar-icon" @click="search_click=false">
                                      <i class="fa fa-search"></i>
                                  </div>
  
                              </div>
                          </div>
                          <div class="notification-icon mx-2 px-1">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 4.57092C16.3922 5.05624 18.9998 7.9736 18.9998 11.5V15.2538C20.0486 15.3307 21.0848 15.4245 22.107 15.5347L21.8926 17.5232C18.7219 17.1813 15.409 17 11.9998 17C8.59056 17 5.27764 17.1813 2.10699 17.5232L1.89258 15.5347C2.91473 15.4245 3.95095 15.3307 4.99978 15.2538V11.5C4.99978 7.97345 7.6076 5.05599 11 4.57086V2H13V4.57092ZM8.62568 19.3712C8.6621 20.5173 10.1509 22 11.9993 22C13.8477 22 15.3365 20.5173 15.373 19.3712C15.38 19.1489 15.1756 19 14.9531 19H9.04555C8.82308 19 8.61862 19.1489 8.62568 19.3712Z" fill="currentColor"></path></svg>
  
                              <div class="notification-popup">
                                  <div style="height:20px;"></div>
                                  <div class="notification-hover">
                                      <div class="image-text-notification">
                                            
                                          <img class="title-card multi-landing-stack multi-landing-stack-img" src="https://dnm.nflximg.net/api/v6/kvDymu0eXRyicIuSUzvRrxrm5dU/AAAABcQbp3H3u8kUp3Svzhrs7m-fuBqDXXhDmlyx487DjsCR29L1F19kuq7GLq2CLF6ab0A7AfFgB3r5Jl_XE6iKFQj89pce-5pad0c7GQ4548bfzOM5IiFK3QIumcVYVCtT8sbObdUMg2HQhmI.jpg?r=864" srcset="https://dnm.nflximg.net/api/v6/kvDymu0eXRyicIuSUzvRrxrm5dU/AAAABcQbp3H3u8kUp3Svzhrs7m-fuBqDXXhDmlyx487DjsCR29L1F19kuq7GLq2CLF6ab0A7AfFgB3r5Jl_XE6iKFQj89pce-5pad0c7GQ4548bfzOM5IiFK3QIumcVYVCtT8sbObdUMg2HQhmI.jpg?r=864 112w" alt="Jogi" sizes="112px">
                                          <div class="pl-3">
                                              <h6 class="header text-14">Top 10 today: India</h6>
                                              <h6 class="body text-14">Watch them all</h6>
                                              <h6 class="age">
                                                  <span class="text-light text-12">1 week ago</span>
                                              </h6>
                                          </div>
  
                                      </div>
                                      <div class="image-text-notification">
                                            
                                          <img class="title-card multi-landing-stack multi-landing-stack-img" src="https://dnm.nflximg.net/api/v6/kvDymu0eXRyicIuSUzvRrxrm5dU/AAAABcQbp3H3u8kUp3Svzhrs7m-fuBqDXXhDmlyx487DjsCR29L1F19kuq7GLq2CLF6ab0A7AfFgB3r5Jl_XE6iKFQj89pce-5pad0c7GQ4548bfzOM5IiFK3QIumcVYVCtT8sbObdUMg2HQhmI.jpg?r=864" srcset="https://dnm.nflximg.net/api/v6/kvDymu0eXRyicIuSUzvRrxrm5dU/AAAABcQbp3H3u8kUp3Svzhrs7m-fuBqDXXhDmlyx487DjsCR29L1F19kuq7GLq2CLF6ab0A7AfFgB3r5Jl_XE6iKFQj89pce-5pad0c7GQ4548bfzOM5IiFK3QIumcVYVCtT8sbObdUMg2HQhmI.jpg?r=864 112w" alt="Jogi" sizes="112px">
                                          <div class="pl-3">
                                              <h6 class="header text-14">Top 10 today: India</h6>
                                              <h6 class="body text-14">Watch them all</h6>
                                              <h6 class="age">
                                                  <span class="text-light text-12">1 week ago</span>
                                              </h6>
                                          </div>
  
                                      </div>
                                  </div>
  
                              </div>
                          </div>
                          
                          <div class="mx-2 px-1 profile-icon">
                                      <div class="d-flex align-items-center">
                                         <img src="https://occ-0-2164-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABRFZFS8db1R43jhQH8qYonvQ7XOdqfn1JEgczxD7Uz5vCGx-vnN18_sI8xORbinwQJzWgucNziIuHH8mhFA1iR7CGB8A4ms.png?r=eea" class=" cursor-pointer rounded" style="width:32px!important;" v-b-toggle.profile>
                                         <i class="fa fa-caret-down text-white pl-2 ml-1 max-990"></i>
                                         
                                      </div>
                                      <div class="profile-popup">
                                        
                                         <div style="height:20px;"></div>
                                          <div class="profile-popup-card">
                                              <ul class="sub-menu-list profiles" >
                                                 <li class="sub-menu-item profile" >
                                                      <div class="avatar-wrapper">
                                                          <img class="profile-icon" src="https://occ-0-2164-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABU0sdNpM13koO29ezMQA6bMi9RPARm_Z597mnfMikgSF2sAfS_bE4wSszObi0ttf8vxY-oG59UghveLp2qfQXXMxw_poWPg.png?r=f6f" alt="">
                                                      </div>
                                                      <span class="profile-name">Meril</span>
                                                 </li>
                                                 <li class="sub-menu-item profile" >
                                                      <div class="avatar-wrapper">
                                                          <img class="profile-icon" src="https://occ-0-2164-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABZ2iWyDq0fR9TY_uztNZ4TcwWkPPdS2NdTtUt3EHjC_rkiEAexSxSUfbrAYTaiI5pcHVs5QMIAhgo1tVaDJr67VjRcr_ZCw.png?r=cad" alt="">
                                                      </div>
                                                      <span class="profile-name">Justin</span>
                                                 </li>
                                                 <li class="sub-menu-item profile" >
                                                      <div class="avatar-wrapper">
                                                          <img class="profile-icon" src="https://occ-0-2164-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTznvQlDlb-DTY57Bj9r25bgufQrWczbgk5vxk1gOjBtI9GDbRZrOohvgoY3gzb1b7GnSTJ5Ly0_xl-MOQGQJD8nYZ3bwoc.png?r=a16" alt="">
                                                      </div>
                                                      <span class="profile-name">Martin</span>
                                                 </li>
                                                 <li class="sub-menu-item profile" >
                                                      <div class="avatar-wrapper">
                                                          <img class="profile-icon" src="https://occ-0-2164-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABS4CTDkIXomxoSWG6y9QGObyAB5Gt2_CmlCU7VGKLdjPbOMXGs5vk2ujhhyKvszNedBaOMwgYc3qRcmQenGLuN48P5QNS5g.png?r=f92" alt="">
                                                      </div>
                                                      <span class="profile-name">Able Thankachan</span>
                                                 </li>
                                                 <router-link :to="{name:'watching'}">
                                                 <li class="sub-menu-item profile" >
                                                      
                                                          <div class="avatar-wrapper">
                                                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.2071 7.79285L15.2071 0.792847L13.7929 2.20706L20.7929 9.20706L22.2071 7.79285ZM13.2071 3.79285C12.8166 3.40232 12.1834 3.40232 11.7929 3.79285L2.29289 13.2928C2.10536 13.4804 2 13.7347 2 14V20C2 20.5522 2.44772 21 3 21H9C9.26522 21 9.51957 20.8946 9.70711 20.7071L19.2071 11.2071C19.5976 10.8165 19.5976 10.1834 19.2071 9.79285L13.2071 3.79285ZM17.0858 10.5L8.58579 19H4V14.4142L12.5 5.91417L17.0858 10.5Z" fill="currentColor"></path></svg>
                                                          </div>
                                                          <span class="profile-name">Manage Profiles</span>
                                                      
                                                 </li>
                                                 </router-link>
                                                 <li class="sub-menu-item profile" >
                                                      <div class="avatar-wrapper">
                                                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.00011 8C9.00011 6.34315 10.3433 5 12.0001 5C13.657 5 15.0001 6.34315 15.0001 8C15.0001 9.65685 13.657 11 12.0001 11C10.3433 11 9.00011 9.65685 9.00011 8ZM12.0001 3C9.23869 3 7.00011 5.23858 7.00011 8C7.00011 10.7614 9.23869 13 12.0001 13C14.7615 13 17.0001 10.7614 17.0001 8C17.0001 5.23858 14.7615 3 12.0001 3ZM5.98069 21.1961C6.46867 18.7563 8.61095 17 11.0991 17H12.9011C15.3893 17 17.5316 18.7563 18.0195 21.1961L19.9807 20.8039C19.3057 17.4292 16.3426 15 12.9011 15H11.0991C7.65759 15 4.69447 17.4292 4.01953 20.8039L5.98069 21.1961Z" fill="currentColor"></path></svg>
                                                      </div>
                                                      <span class="profile-name">Account</span>
                                                 </li>
                                                 <li class="sub-menu-item profile" >
                                                      <div class="avatar-wrapper">
                                                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM12 8.5C10.6831 8.5 10 9.24303 10 10H8C8 7.75697 10.0032 6.5 12 6.5C13.9968 6.5 16 7.75697 16 10C16 11.3487 14.9191 12.2679 13.8217 12.68C13.5572 12.7793 13.3322 12.9295 13.1858 13.0913C13.0452 13.2467 13 13.383 13 13.5V14H11V13.5C11 12.0649 12.1677 11.1647 13.1186 10.8076C13.8476 10.5339 14 10.1482 14 10C14 9.24303 13.3169 8.5 12 8.5ZM13.5 16.5C13.5 17.3284 12.8284 18 12 18C11.1716 18 10.5 17.3284 10.5 16.5C10.5 15.6716 11.1716 15 12 15C12.8284 15 13.5 15.6716 13.5 16.5Z" fill="currentColor"></path></svg>
                                                      </div>
                                                      <span class="profile-name">Help centre</span>
                                                 </li>
                                                 <div  style="border-top:1px solid #ffffff61;"></div>
                                                 <li class="sub-menu-item profile" >
                                                      <div class="avatar-wrapper">
                                                          
                                                      </div>
                                                      <router-link :to="{name:'home'}">
                                                          <span class="profile-name">Sign out of videoflix</span>
                                                      </router-link>
                                                 </li>
                                                 
                                              </ul>
                                          </div>
  
                                      </div>
                                          
                          </div>
  
                      </div>
  
                                 
                     
                                              
                    
                     
                  </div>
              </header> 
              <div class=" position-relative" v-if="first_movie.id">
                      <img src="https://occ-0-4822-2164.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABao775q_3DupPwQNudZDPkhhR8_kEbZjksbOcFHvKUq2WQuCuA4yggkZiOkBRq5-22_m6pjTZc-mvmJQvR9PJQRYLxXKLeaFBn5F.webp?r=283" class="w-100 banner-vid">
                      
                     
                      <div class="overlay-in-video-2">
                      </div>
                      <div class="overlay-in-video px-lg-5 px-4">
                         
                          <div class="video-controls mb-2">
                              <div class="w-100">
                                  <div class="w-500 ">
                                      <img src="https://occ-0-4822-2164.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABbMKShl-t8-cM5HUSHy8vAaAkejBiz7-8QbPEOxzOT7YBh05jsjpdFkzGnals632q1SMu1xr_qu6L_t5sCm9Mj3kN11YoakhCjpDdMv-_pmFHH1WnloO9qTp21TM0BLry6ghHAZS7wWYAxdjhmmOGGEgy2rxn4hIDktbXsXHdESKVj7nAQd9PA.webp?r=4af" class="name-tag" >
                                      <h5 class="text-22 my-3 font-weight-600 text-white main-heading-1 ">Watch all of Season 2 now</h5>
                                      <h5 class="text-16 my-3 font-weight-400 text-white main-heading-2">In this emotional reality dating series, single people meet, fall in love and decide if they want to get married before ever seeing each other's faces.</h5>
                                  </div>
  
                                  <div class="flex-align">
                                      <div class="d-flex modal-icons-2" v-b-modal.video-modal @click="current_movie=first_movie;current_movie.message='play'">
                                          <h6 class="text-14 bg-white text-dark2 px-4 font-weight-500">
                                              <i class="fa fa-play mr-2"></i>Play
                                          </h6>
                                          
                                          <h6 class="text-14 bg-gray px-4" v-b-modal.video-modal @click="current_movie=first_movie;current_movie.message=''">
                                              <i class="fa fa-info-circle mr-2"></i>More Info
                                          </h6>
                                      
                                         
                                      </div>
                                      <div class="d-flex align-items-center">
                                          <h6 class=" cursor-pointer text-white mx-2" ><i class="fa fa-volume-up mx-2" style="font-size:20px;"></i>  </h6>
                                          <h6 class=" cursor-pointer text-white border rounded-circle flex-align2" style="width:30px;height:30px;">
                                              <i class="fa fa-repeat mx-2 p-3" style="font-size:16px;"></i>  
                                          </h6>
                                      </div>
  
                                  </div>
                              </div>
                                  
                              
                          </div>
                      </div>
              </div>
              
              <div id="content" class="site-content center-relative main-page-sec videoflix-main-sec" >
  
  
  
                 
                  <div class="second-section mb-2">
                     
                      <div class="image-grid">
                          <div class="position-relative" >
                              <div class="flex-align position-absolute" >
                                  <h6 class="section-sidehead text-white pl-2">New Releases</h6>
                                  <h6 class="text-more mr-2" v-b-modal.explore-modal> </h6>
  
                              </div>
                              <b-carousel
                                  id="movie1"
                                  class="slider-movie pt-4"
                                  :interval="4000"
                                  controls>
                                  <b-carousel-slide v-for="sort_movie in sort_movies.datas">
                                      <template #img>
                                          <div class="image-row">
                                              <div class="hover-modal image" v-b-modal.video-modal v-for="movie in sort_movie" @click="current_movie=movie">
                                                  <img :src="movie.thumbnail">
                                                  <div class="hover-modal-div">
                                                     
                                                     <div class="small-details">
                                                          <div class="flex-align mb-2">
                                                              <div class="d-flex modal-icons">
                                                                  <i class="fa fa-play bg-light text-dark2"></i>
                                                                  <i class="fa fa-plus"></i>
                                                                  <i class="fa fa-thumbs-up"></i>
  
                                                              </div>
                                                              <div class="d-flex modal-icons">
                                                                  
                                                                  <i class="fa fa-angle-down"></i>  
  
                                                              </div>
                                                                  
                                                              
                                                          </div>
                                                          <h6 class=" mt-1 text-white">{{movie.name}}</h6>
                                                          <h6 class=" mt-1 text-white"><span class="text-danger pr-2">98% match</span>2h 30m</h6>
                                                          <h6 class=" mt-1 text-white">{{movie.description}}</h6>
  
                                                     </div>
  
                                                      
                                                  </div>
  
                                                  
                                              </div> 
                                          </div>    
                                      </template>
                                  </b-carousel-slide>
                              </b-carousel>
                          </div>
  
                      </div>
                      <div class="image-grid">
                          <div class="position-relative" >
                              <div class="flex-align position-absolute" >
                                  <h6 class="section-sidehead text-white pl-2">New Releases</h6>
                                  <h6 class="text-more mr-2" v-b-modal.explore-modal> </h6>
  
                              </div>
                              <b-carousel
                                  id="movie1"
                                  class="slider-movie pt-4"
                                  :interval="4000"
                                  controls>
                                  <b-carousel-slide v-for="sort_movie in sort_movies.datas">
                                      <template #img>
                                          <div class="image-row">
                                              <div class="hover-modal image" v-b-modal.video-modal v-for="movie in sort_movie" @click="current_movie=movie">
                                                  <img :src="movie.thumbnail">
                                                  <div class="hover-modal-div">
                                                     
                                                     <div class="small-details">
                                                          <div class="flex-align mb-2">
                                                              <div class="d-flex modal-icons">
                                                                  <i class="fa fa-play bg-light text-dark2"></i>
                                                                  <i class="fa fa-plus"></i>
                                                                  <i class="fa fa-thumbs-up"></i>
  
                                                              </div>
                                                              <div class="d-flex modal-icons">
                                                                  
                                                                  <i class="fa fa-angle-down"></i>  
  
                                                              </div>
                                                                  
                                                              
                                                          </div>
                                                          <h6 class=" mt-1 text-white">{{movie.name}}</h6>
                                                          <h6 class=" mt-1 text-white"><span class="text-danger pr-2">98% match</span>2h 30m</h6>
                                                          <h6 class=" mt-1 text-white">{{movie.description}}</h6>
  
                                                     </div>
  
                                                      
                                                  </div>
  
                                                  
                                              </div> 
                                          </div>    
                                      </template>
                                  </b-carousel-slide>
                              </b-carousel>
                          </div>
  
                      </div>
                      <div class="image-grid">
                          <div class="position-relative" >
                              <div class="flex-align position-absolute" >
                                  <h6 class="section-sidehead text-white pl-2">New Releases</h6>
                                  <h6 class="text-more mr-2" v-b-modal.explore-modal> </h6>
  
                              </div>
                              <b-carousel
                                  id="movie1"
                                  class="slider-movie pt-4"
                                  :interval="4000"
                                  controls>
                                  <b-carousel-slide v-for="sort_movie in sort_movies.datas">
                                      <template #img>
                                          <div class="image-row">
                                              <div class="hover-modal image" v-b-modal.video-modal v-for="movie in sort_movie" @click="current_movie=movie">
                                                  <img :src="movie.thumbnail">
                                                  <div class="hover-modal-div">
                                                     
                                                     <div class="small-details">
                                                          <div class="flex-align mb-2">
                                                              <div class="d-flex modal-icons">
                                                                  <i class="fa fa-play bg-light text-dark2"></i>
                                                                  <i class="fa fa-plus"></i>
                                                                  <i class="fa fa-thumbs-up"></i>
  
                                                              </div>
                                                              <div class="d-flex modal-icons">
                                                                  
                                                                  <i class="fa fa-angle-down"></i> 
  
                                                              </div>
                                                                  
                                                              
                                                          </div>
                                                          <h6 class=" mt-1 text-white">{{movie.name}}</h6>
                                                          <h6 class=" mt-1 text-white"><span class="text-danger pr-2">98% match</span>2h 30m</h6>
                                                          <h6 class=" mt-1 text-white">{{movie.description}}</h6>
  
                                                     </div>
  
                                                      
                                                  </div>
  
                                                  
                                              </div> 
                                          </div>    
                                      </template>
                                  </b-carousel-slide>
                              </b-carousel>
                          </div>
  
                      </div>
                      <div class="image-grid">
                          <div class="position-relative" >
                              <div class="flex-align position-absolute" >
                                  <h6 class="section-sidehead text-white pl-2">New Releases</h6>
                                  <h6 class="text-more mr-2" v-b-modal.explore-modal> </h6>
  
                              </div>
                              <b-carousel
                                  id="movie1"
                                  class="slider-movie  pt-4"
                                  :interval="4000"
                                  controls>
                                  <b-carousel-slide v-for="sort_movie in sort_movies.datas">
                                      <template #img>
                                          <div class="image-row">
                                              <div class="hover-modal image" v-b-modal.video-modal v-for="movie in sort_movie" @click="current_movie=movie">
                                                  <img :src="movie.thumbnail">
                                                  <div class="hover-modal-div">
                                                     
                                                     <div class="small-details">
                                                          <div class="flex-align mb-2">
                                                              <div class="d-flex modal-icons">
                                                                  <i class="fa fa-play bg-light text-dark2"></i>
                                                                  <i class="fa fa-plus"></i>
                                                                  <i class="fa fa-thumbs-up"></i>
  
                                                              </div>
                                                              <div class="d-flex modal-icons">
                                                                  
                                                                  <i class="fa fa-angle-down"></i>  
  
                                                              </div>
                                                                  
                                                              
                                                          </div>
                                                          <h6 class=" mt-1 text-white">{{movie.name}}</h6>
                                                          <h6 class=" mt-1 text-white"><span class="text-danger pr-2">98% match</span>2h 30m</h6>
                                                          <h6 class=" mt-1 text-white">{{movie.description}}</h6>
  
                                                     </div>
  
                                                      
                                                  </div>
  
                                                  
                                              </div> 
                                          </div>    
                                      </template>
                                  </b-carousel-slide>
                              </b-carousel>
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
      title: "Main"
    },
    data() {
      return {
          
          search_click:false,
          background_start:true,
          lastScrollPosition: 0,
          movies:[
              {image:'https://www.nowrunning.com/content/movie/2013/Drishyam/bg1.jpg'},
              {image:'https://movieposters2.com/images/1614171-b.jpg'},
              {image:'https://pbs.twimg.com/media/FUYriQnaMAA5gMM?format=jpg&name=large'},
              {image:'https://live.staticflickr.com/65535/49137122002_7b7185b2a7_b.jpg'},
              {image:'https://live.staticflickr.com/65535/49137122002_7b7185b2a7_b.jpg'},
              {image:'https://live.staticflickr.com/65535/49137122002_7b7185b2a7_b.jpg'},
              {image:'https://movieposters2.com/images/1614171-b.jpg'},
              {image:'https://www.nowrunning.com/content/movie/2013/Drishyam/bg1.jpg'},
              {image:'https://movieposters2.com/images/1614171-b.jpg'},
              {image:'https://pbs.twimg.com/media/FUYriQnaMAA5gMM?format=jpg&name=large'},
              {image:'https://live.staticflickr.com/65535/49137122002_7b7185b2a7_b.jpg'},
              {image:'https://live.staticflickr.com/65535/49137122002_7b7185b2a7_b.jpg'},
              {image:'https://live.staticflickr.com/65535/49137122002_7b7185b2a7_b.jpg'},
              {image:'https://movieposters2.com/images/1614171-b.jpg'},
          ],
          first_movie:{},
          sort_movies2:{datas:[]},
          sort_movies:{datas:[]},
          current_movie:{language_detail:{},category_detail:{},movie_spec:[]},
  
      };
    },
    mounted(){
      this.getMovies()
      var self = this
      document.getElementsByClassName("main-content")[0].addEventListener("scroll", () => {
          self.handleScroll()
      });
    },
    methods: {
      getMovies(filter='') {
        if(filter!=''){
          if(this.movie.type!='Select Type' && this.current_category.id){
            this.filter_movies = []
            filter = '?category='+this.current_category.id+'&type='+this.movie.type
          }else{
            return false
          }
        }
        var headers = new Headers();
        headers.append("Authorization", "Token "+this.$root.token);
        fetch(this.api_url+'/movies/movies/'+filter, {
            method : 'get',
            headers: headers,
        })
        .then((response) => {
            return response.json()
        })
        .then((jsonData) => {
          if(filter){
            this.filter_movies = jsonData
          }else{
            this.movies = jsonData
            if(this.movies.length>0){
              this.first_movie = this.movies[0]
            }
            this.sort_movies = this.pagination(this.movies,6)
            this.sort_movies2 = this.pagination2(this.movies,4)
          }
        })
      },
      pagination2(items,page=10){
        var datas=[];
        var key=0;
        var index=0;
        items.forEach(function(value,index2){
          if((index%page)==0 || index==0){
            datas[key]=[]
          }
          datas[key].push(value)
          index = index+1
          if((index%page)==0){
            key++;
            index = 0
              if(key%2==0){
                  page=4
              }else{
                  page=3
              }
          }
        })
        key=datas.length
        if(datas.length<=1){key=0}
        return {total:key,datas:datas}
      },
      handleScroll () {
        const currentScrollPosition = document.getElementsByClassName("main-content")[0]
            .scrollTop
        if (currentScrollPosition < 0) {
          return 0
        }
        this.background_start = currentScrollPosition < this.lastScrollPosition
        this.lastScrollPosition = currentScrollPosition
      },
    }
  
  };
  </script>
  <style scoped>
    @import '/crystal-clear/style/style.css';
    @import '/crystal-clear/style/style1.css';
  
    @import '/crystal-clear/style/style-2.css';
  
  </style>
  