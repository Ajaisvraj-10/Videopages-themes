
<template>
  <div class="main-content">
    
        <div class="site-wrapper " :class="side_bar?'sidebar_none':''">   
  

            <!-- Main Body Starts -->
            <div class="mainBody2">
              <div class="sidebar">

                <div class="sidebar__categories">
                    <div class="header__left pl-4 mx-2 mt-1 mb-4 d-flex header-left-sidebar">
                        <div class="menu " @click="side_bar=!side_bar">
                            <span></span>
                            <span></span>
                            <span></span>

                        </div>
                        <img src="/videotube/images/logo.png" class="header-logo">
                      </div>
                    <div class="sidebar-tab" :class="$root.header_active=='home'?'active-nav':''" @click="$root.header_active='home'">
                        
                      <div class="sidebar__category" :class="$root.header_active=='home'?'active-nav':''" @click="$root.header_active='home'">
                        <!--<img src="/videotubeimages/home.png" class="nav-icons">
                        <img src="/videotube/images/home2.png" >-->
                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M4,10V21h6V15h4v6h6V10L12,3Z" class="style-scope yt-icon"></path></g></svg>

                        <span>Home</span>
                      </div>
                    </div>
                    <div class="sidebar-tab" :class="$root.header_active=='explore'?'active-nav':''" @click="$root.header_active='explore'">
                      <div class="sidebar__category">
                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M9.8,9.8l-3.83,8.23l8.23-3.83l3.83-8.23L9.8,9.8z M13.08,12.77c-0.21,0.29-0.51,0.48-0.86,0.54 c-0.07,0.01-0.15,0.02-0.22,0.02c-0.28,0-0.54-0.08-0.77-0.25c-0.29-0.21-0.48-0.51-0.54-0.86c-0.06-0.35,0.02-0.71,0.23-0.99 c0.21-0.29,0.51-0.48,0.86-0.54c0.35-0.06,0.7,0.02,0.99,0.23c0.29,0.21,0.48,0.51,0.54,0.86C13.37,12.13,13.29,12.48,13.08,12.77z M12,3c4.96,0,9,4.04,9,9s-4.04,9-9,9s-9-4.04-9-9S7.04,3,12,3 M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2 L12,2z" class="style-scope yt-icon"></path></g></svg>
                        <span>Explore</span>
                      </div>
                    </div>
                    <div class="sidebar-tab" :class="$root.header_active=='shorts'?'active-nav':''" @click="$root.header_active='shorts'">
                      <div class="sidebar__category">
                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g height="24" viewBox="0 0 24 24" width="24" class="style-scope yt-icon"><path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z" class="style-scope yt-icon"></path></g></svg>
                        <span>Shorts</span>
                      </div>
                    </div>
                    <div class="sidebar-tab" :class="$root.header_active=='subscription'?'active-nav':''" @click="$root.header_active='subscription'">
                      <div class="sidebar__category">
                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z" class="style-scope yt-icon"></path></g></svg>
                        <span>Subscriptions</span>
                      </div>
                    </div>

                    <div class="sm-hr"></div>

                    <div class="sidebar-tab" :class="$root.header_active=='library'?'active-nav':''" @click="$root.header_active='library'">
                      <div class="sidebar__category">
                       <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z" class="style-scope yt-icon"></path></g></svg>
                        <span>Library</span>
                      </div>
                    </div>
                    
                    <div class="sidebar-tab hide-in-bar-out" :class="$root.header_active=='history'?'active-nav':''" @click="$root.header_active='history'">
                
                      <div class="sidebar__category">
                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M22,12c0,5.51-4.49,10-10,10S2,17.51,2,12h1c0,4.96,4.04,9,9,9 s9-4.04,9-9s-4.04-9-9-9C8.81,3,5.92,4.64,4.28,7.38C4.17,7.56,4.06,7.75,3.97,7.94C3.96,7.96,3.95,7.98,3.94,8H8v1H1.96V3h1v4.74 C3,7.65,3.03,7.57,3.07,7.49C3.18,7.27,3.3,7.07,3.42,6.86C5.22,3.86,8.51,2,12,2C17.51,2,22,6.49,22,12z" class="style-scope yt-icon"></path></g></svg>
                        <span>History</span>
                      </div>
                    </div>
                    <div class="sidebar-tab hide-in-bar-out" :class="$root.header_active=='your_videos'?'active-nav':''" @click="$root.header_active='your_videos'">
                      <div class="sidebar__category">
                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M10,8l6,4l-6,4V8L10,8z M21,3v18H3V3H21z M20,4H4v16h16V4z" class="style-scope yt-icon"></path></g></svg>
                        <span>Your Videos</span>
                      </div>
                    </div>
                    <div class="sidebar-tab hide-in-bar-out" :class="$root.header_active=='watch_later'?'active-nav':''" @click="$root.header_active='watch_later'">
                      <div class="sidebar__category">
                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z" class="style-scope yt-icon"></path></g></svg>
                        <span>Watch Later</span>
                      </div>
                    </div>
                    <div class="sidebar-tab hide-in-bar-out" :class="$root.header_active=='liked_videos'?'active-nav':''" @click="$root.header_active='liked_videos'">
                      <div class="sidebar__category">
                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z" class="style-scope yt-icon"></path></g></svg>
                        <span>Liked Videos</span>
                      </div>
                    </div>
                </div>
                
              </div>
              <div class="row main-body3 ">
                <div class="col-lg-8">
                  <div class="video-playing">
                    <img src="https://img.youtube.com/vi/PpXUTUXU7Qc/maxresdefault.jpg" alt="" />
                  </div>
                  <div  class="full-desc my-3">
                    
                 
                     <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false">#Yaarumillaa</a>
                  
                     <a>#AdithyaVarma</a>
                     <h5 class="title-desc text-18">
                       Yaarumillaa Full Video Song || Dhruv Vikram,Banita Sandhu|| Gireesaaya || Radhan
                     </h5>
                    
                     <div  class="flex-align video-details">
                        <div  class="views">
                          
                                <span class="">7,602,754 views</span>
                                <span class="ml-3">Jan 30, 2020</span>
                          
                        </div>
                     
                        <div  class="video-likes flex-align3">
                          <div class="flex-align ml-3">
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M3,11h3v10H3V11z M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11v10h10.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z" class="style-scope yt-icon"></path></g></svg>
                            <h6 class="text-15 ml-1 my-0">101K</h6>
                          </div>
                          <div class="flex-align ml-3">
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z" class="style-scope yt-icon"></path></g></svg>
                            <h6 class="text-15 ml-1 my-0">Dislike</h6>
                          </div>
                          <div class="flex-align ml-3">
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g mirror-in-rtl="" class="style-scope yt-icon"><path d="M15,5.63L20.66,12L15,18.37V15v-1h-1c-3.96,0-7.14,1-9.75,3.09c1.84-4.07,5.11-6.4,9.89-7.1L15,9.86V9V5.63 M14,3v6 C6.22,10.13,3.11,15.33,2,21c2.78-3.97,6.44-6,12-6v6l8-9L14,3L14,3z" class="style-scope yt-icon"></path></g></svg>
                            <h6 class="text-15 ml-1 my-0">Share</h6>
                          </div>
                          <div class="flex-align ml-3">
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M8,7c0,0.55-0.45,1-1,1S6,7.55,6,7c0-0.55,0.45-1,1-1S8,6.45,8,7z M7,16c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1s1-0.45,1-1 C8,16.45,7.55,16,7,16z M10.79,8.23L21,18.44V20h-3.27l-5.76-5.76l-1.27,1.27C10.89,15.97,11,16.47,11,17c0,2.21-1.79,4-4,4 c-2.21,0-4-1.79-4-4c0-2.21,1.79-4,4-4c0.42,0,0.81,0.08,1.19,0.2l1.37-1.37l-1.11-1.11C8,10.89,7.51,11,7,11c-2.21,0-4-1.79-4-4 c0-2.21,1.79-4,4-4c2.21,0,4,1.79,4,4C11,7.43,10.91,7.84,10.79,8.23z M10.08,8.94L9.65,8.5l0.19-0.58C9.95,7.58,10,7.28,10,7 c0-1.65-1.35-3-3-3S4,5.35,4,7c0,1.65,1.35,3,3,3c0.36,0,0.73-0.07,1.09-0.21L8.7,9.55l0.46,0.46l1.11,1.11l0.71,0.71l-0.71,0.71 L8.9,13.91l-0.43,0.43l-0.58-0.18C7.55,14.05,7.27,14,7,14c-1.65,0-3,1.35-3,3c0,1.65,1.35,3,3,3s3-1.35,3-3 c0-0.38-0.07-0.75-0.22-1.12l-0.25-0.61L10,14.8l1.27-1.27l0.71-0.71l0.71,0.71L18.15,19H20v-0.15L10.08,8.94z M17.73,4H21v1.56 l-5.52,5.52l-2.41-2.41L17.73,4z M18.15,5l-3.67,3.67l1,1L20,5.15V5H18.15z" class="style-scope yt-icon"></path></g></svg>
                            <h6 class="text-15 ml-1 my-0">Clip</h6>
                          </div>
                          <div class="flex-align ml-3">
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M22,13h-4v4h-2v-4h-4v-2h4V7h2v4h4V13z M14,7H2v1h12V7z M2,12h8v-1H2V12z M2,16h8v-1H2V16z" class="style-scope yt-icon"></path></g></svg>
                            <h6 class="text-15 ml-1 my-0">Save</h6>
                          </div>
                          <div class="flex-align ml-3">
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M7.5,12c0,0.83-0.67,1.5-1.5,1.5S4.5,12.83,4.5,12s0.67-1.5,1.5-1.5S7.5,11.17,7.5,12z M12,10.5c-0.83,0-1.5,0.67-1.5,1.5 s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5S12.83,10.5,12,10.5z M18,10.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5 S18.83,10.5,18,10.5z" class="style-scope yt-icon"></path></g></svg>
                            
                          </div>
                           
                        </div>
                     </div>
                  </div>

                  <div class="sm-hr"></div>

                  <div class="subscribe d-flex justify-content-between align-items-start my-3">
                    <div class="d-flex">
                      <div class="d-flex">
                        <div class="author">
                          <img
                            src="https://yt3.ggpht.com/ytc/AAUvwnhESPVEatju_1yE-03-KLeSrnSLc5yy0RcvhPd5Lg=s48-c-k-c0x00ffffff-no-rj"
                            alt=""
                          />
                        </div>
                        <div class="title">
                          <h3>Aditya Music</h3>
                          <a href="">6.6M subscribers</a>
                          <span class="mt-3">Watch & Enjoy #Yaarumillaa Full Video Song #AdithyaVarma Tamil Movie</span>
                        </div>
                      </div>
                    </div>
                    <button class="btn btn-danger subscribe-btn rounded-0 btn-lg py-1">SUBSCRIBE</button>
                  </div>

                  <div class="sm-hr"></div>


                </div>
                <div class="col-lg-4 p-0 position-relative">
                  
                  <div class="videos__container">
                  <!-- Single Video starts -->
                  
                

                 
                  <div class="video">
                    <div class="video__thumbnail">
                      <img src="https://img.youtube.com/vi/PpXUTUXU7Qc/maxresdefault.jpg" alt="" />
                    </div>
                    <div class="video__details">
                      <div class="author">
                        <img src="http://aninex.com/images/srvc/web_de_icon.png" alt="" />
                      </div>
                      <div class="title">
                        <h3>
                          Top 5 Programming Languages to Learn in 2021 | Best Programming Languages to Learn
                        </h3>
                        <a href="">FutureCoders</a>
                        <span>10M Views • 3 Months Ago</span>
                      </div>
                    </div>
                  </div>

                  <div class="video">
                    <div class="video__thumbnail">
                      <img src="https://img.youtube.com/vi/YpTmcCBBdTE/maxresdefault.jpg" alt="" />
                    </div>
                    <div class="video__details">
                      <div class="author">
                        <img src="http://aninex.com/images/srvc/web_de_icon.png" alt="" />
                      </div>
                      <div class="title">
                        <h3>Build A Password Generator with React JS - Beginners Tutorial</h3>
                        <a href="">FutureCoders</a>
                        <span>10M Views • 3 Months Ago</span>
                      </div>
                    </div>
                  </div>

                  <div class="video">
                    <div class="video__thumbnail">
                      <img src="https://img.youtube.com/vi/46cXFUzR9XM/maxresdefault.jpg" alt="" />
                    </div>
                    <div class="video__details">
                      <div class="author">
                        <img
                          src="https://yt3.ggpht.com/ytc/AAUvwnh53ZRIGnyzC28QrfuggCINb3cfNbNWo4Uc6qR9=s48-c-k-c0x00ffffff-no-rj"
                          alt=""
                        />
                      </div>
                      <div class="title">
                        <h3>Bella Ciao Full Song | La Casa De Papel | Money Heist | Netflix India</h3>
                        <a href="">Netflix</a>
                        <span>10M Views • 11 Months Ago</span>
                      </div>
                    </div>
                  </div>

                  <div class="video">
                    <div class="video__thumbnail">
                      <img src="https://img.youtube.com/vi/d2na6sCyM5Q/maxresdefault.jpg" alt="" />
                    </div>
                    <div class="video__details">
                      <div class="author">
                        <img
                          src="https://yt3.ggpht.com/ytc/AAUvwnhESPVEatju_1yE-03-KLeSrnSLc5yy0RcvhPd5Lg=s48-c-k-c0x00ffffff-no-rj"
                          alt=""
                        />
                      </div>
                      <div class="title">
                        <h3>DON'T EVER GIVE UP - Elon Musk (Motivational Video)</h3>
                        <a href=""> Chispa Motivation</a>
                        <span>10M Views • 1 Month Ago</span>
                      </div>
                    </div>
                  </div>

                  <div class="video">
                    <div class="video__thumbnail">
                      <img src="https://img.youtube.com/vi/2Ji-clqUYnA/maxresdefault.jpg" alt="" />
                    </div>
                    <div class="video__details">
                      <div class="author">
                        <img
                          src="https://yt3.ggpht.com/ytc/AAUvwniaHN7MZyFEiNvdHuKMzIWnDF604Z2--O4GCMq-FA=s48-c-k-c0x00ffffff-no-rj"
                          alt=""
                        />
                      </div>
                      <div class="title">
                        <h3>Javascript Fundamentals</h3>
                        <a href="">Coding Addict</a>
                        <span>179K • 8 Months Ago</span>
                      </div>
                    </div>
                  </div>

                  <div class="video">
                    <div class="video__thumbnail">
                      <img src="https://img.youtube.com/vi/3PHXvlpOkf4/maxresdefault.jpg" alt="" />
                    </div>
                    <div class="video__details">
                      <div class="author">
                        <img
                          src="https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s48-c-k-c0x00ffffff-no-rj"
                          alt=""
                        />
                      </div>
                      <div class="title">
                        <h3>Build 15 JavaScript Projects - Vanilla JavaScript Course</h3>
                        <a href=""> freeCodeCamp.org </a>
                        <span>470K Views • 8 Months Ago</span>
                      </div>
                    </div>
                  </div>

                  <div class="video">
                    <div class="video__thumbnail">
                      <img src="https://img.youtube.com/vi/CVClHLwv-4I/maxresdefault.jpg" alt="" />
                    </div>
                    <div class="video__details">
                      <div class="author">
                        <img
                          src="https://yt3.ggpht.com/ytc/AAUvwnhIz_0Su6HhW6Ym50QCroJCAnF10X9xnnMDboN2=s48-c-k-c0x00ffffff-no-rj"
                          alt=""
                        />
                      </div>
                      <div class="title">
                        <h3>Build Real Time Face Detection With JavaScript</h3>
                        <a href=""> Web Dev Simplified </a>
                        <span>875K Views • 1 Year Ago</span>
                      </div>
                    </div>
                  </div>

                  <div class="video">
                    <div class="video__thumbnail">
                      <img src="https://img.youtube.com/vi/ulprqHHWlng/maxresdefault.jpg" alt="" />
                    </div>
                    <div class="video__details">
                      <div class="author">
                        <img
                          src="https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s48-c-k-c0x00ffffff-no-rj"
                          alt=""
                        />
                      </div>
                      <div class="title">
                        <h3>AWS Basics for Beginners - Full Course</h3>
                        <a href=""> freeCodeCamp.org </a>
                        <span>36K Views • 1 Day Ago</span>
                      </div>
                    </div>
                  </div>

                  <div class="video">
                    <div class="video__thumbnail">
                      <img src="https://img.youtube.com/vi/PpXUTUXU7Qc/maxresdefault.jpg" alt="" />
                    </div>
                    <div class="video__details">
                      <div class="author">
                        <img src="http://aninex.com/images/srvc/web_de_icon.png" alt="" />
                      </div>
                      <div class="title">
                        <h3>
                          Top 5 Programming Languages to Learn in 2021 | Best Programming Languages to Learn
                        </h3>
                        <a href="">FutureCoders</a>
                        <span>10M Views • 3 Months Ago</span>
                      </div>
                    </div>
                  </div>

                  <div class="video">
                    <div class="video__thumbnail">
                      <img src="https://img.youtube.com/vi/YpTmcCBBdTE/maxresdefault.jpg" alt="" />
                    </div>
                    <div class="video__details">
                      <div class="author">
                        <img src="http://aninex.com/images/srvc/web_de_icon.png" alt="" />
                      </div>
                      <div class="title">
                        <h3>Build A Password Generator with React JS - Beginners Tutorial</h3>
                        <a href="">FutureCoders</a>
                        <span>10M Views • 3 Months Ago</span>
                      </div>
                    </div>
                  </div>

                  <div class="video">
                    <div class="video__thumbnail">
                      <img src="https://img.youtube.com/vi/46cXFUzR9XM/maxresdefault.jpg" alt="" />
                    </div>
                    <div class="video__details">
                      <div class="author">
                        <img
                          src="https://yt3.ggpht.com/ytc/AAUvwnh53ZRIGnyzC28QrfuggCINb3cfNbNWo4Uc6qR9=s48-c-k-c0x00ffffff-no-rj"
                          alt=""
                        />
                      </div>
                      <div class="title">
                        <h3>Bella Ciao Full Song | La Casa De Papel | Money Heist | Netflix India</h3>
                        <a href="">Netflix</a>
                        <span>10M Views • 11 Months Ago</span>
                      </div>
                    </div>
                  </div>

                  <div class="video">
                    <div class="video__thumbnail">
                      <img src="https://img.youtube.com/vi/d2na6sCyM5Q/maxresdefault.jpg" alt="" />
                    </div>
                    <div class="video__details">
                      <div class="author">
                        <img
                          src="https://yt3.ggpht.com/ytc/AAUvwnhESPVEatju_1yE-03-KLeSrnSLc5yy0RcvhPd5Lg=s48-c-k-c0x00ffffff-no-rj"
                          alt=""
                        />
                      </div>
                      <div class="title">
                        <h3>DON'T EVER GIVE UP - Elon Musk (Motivational Video)</h3>
                        <a href=""> Chispa Motivation</a>
                        <span>10M Views • 1 Month Ago</span>
                      </div>
                    </div>
                  </div>

                  <div class="video">
                    <div class="video__thumbnail">
                      <img src="https://img.youtube.com/vi/2Ji-clqUYnA/maxresdefault.jpg" alt="" />
                    </div>
                    <div class="video__details">
                      <div class="author">
                        <img
                          src="https://yt3.ggpht.com/ytc/AAUvwniaHN7MZyFEiNvdHuKMzIWnDF604Z2--O4GCMq-FA=s48-c-k-c0x00ffffff-no-rj"
                          alt=""
                        />
                      </div>
                      <div class="title">
                        <h3>Javascript Fundamentals</h3>
                        <a href="">Coding Addict</a>
                        <span>179K • 8 Months Ago</span>
                      </div>
                    </div>
                  </div>

                  <div class="video">
                    <div class="video__thumbnail">
                      <img src="https://img.youtube.com/vi/3PHXvlpOkf4/maxresdefault.jpg" alt="" />
                    </div>
                    <div class="video__details">
                      <div class="author">
                        <img
                          src="https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s48-c-k-c0x00ffffff-no-rj"
                          alt=""
                        />
                      </div>
                      <div class="title">
                        <h3>Build 15 JavaScript Projects - Vanilla JavaScript Course</h3>
                        <a href=""> freeCodeCamp.org </a>
                        <span>470K Views • 8 Months Ago</span>
                      </div>
                    </div>
                  </div>

                  <div class="video">
                    <div class="video__thumbnail">
                      <img src="https://img.youtube.com/vi/CVClHLwv-4I/maxresdefault.jpg" alt="" />
                    </div>
                    <div class="video__details">
                      <div class="author">
                        <img
                          src="https://yt3.ggpht.com/ytc/AAUvwnhIz_0Su6HhW6Ym50QCroJCAnF10X9xnnMDboN2=s48-c-k-c0x00ffffff-no-rj"
                          alt=""
                        />
                      </div>
                      <div class="title">
                        <h3>Build Real Time Face Detection With JavaScript</h3>
                        <a href=""> Web Dev Simplified </a>
                        <span>875K Views • 1 Year Ago</span>
                      </div>
                    </div>
                  </div>

                  <div class="video">
                    <div class="video__thumbnail">
                      <img src="https://img.youtube.com/vi/ulprqHHWlng/maxresdefault.jpg" alt="" />
                    </div>
                    <div class="video__details">
                      <div class="author">
                        <img
                          src="https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s48-c-k-c0x00ffffff-no-rj"
                          alt=""
                        />
                      </div>
                      <div class="title">
                        <h3>AWS Basics for Beginners - Full Course</h3>
                        <a href=""> freeCodeCamp.org </a>
                        <span>36K Views • 1 Day Ago</span>
                      </div>
                    </div>
                  </div>
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
    title: "VideoTube"
  },
  data() {
    return {
        side_bar:false,
        
      
        
    };
  },
 

};
</script>
<style scoped>
  @import '/videotube_app/style/style2.css';
  @import '/videotube_app/style/style.css';

</style>
