
<template>
  <div class="main-content">
    
        <div class="site-wrapper " :class="side_bar?'sidebar_none':''">   


            <div class="header">
              <div class="header__left">
                
                <img src="/videotube_app/images/logo.png" class="header-logo">
              </div>

              <div class="header__search">
                <form action="">
                  <input type="text" placeholder="Search" />
                  <button class="flex-align3"><i class="material-icons px-3">search</i></button>
                </form>
              </div>

              <div class="header__icons text-end flex-align3">
                <div class="max-720">
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z" class="style-scope yt-icon"></path></g></svg>
                </div>
               
                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z M17,6H3v12h14v-6.39l4,1.83V8.56l-4,1.83V6 M18,5v3.83L22,7v8l-4-1.83V19H2V5H18L18,5 z" class="style-scope yt-icon"></path></g></svg>

                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M20,17.35V19H4v-1.65l2-1.88v-5.15c0-2.92,1.56-5.22,4-5.98V3.96 c0-1.42,1.49-2.5,2.99-1.76C13.64,2.52,14,3.23,14,3.96l0,0.39c2.44,0.75,4,3.06,4,5.98v5.15L20,17.35z M19,17.77l-2-1.88v-5.47 c0-2.47-1.19-4.36-3.13-5.1c-1.26-0.53-2.64-0.5-3.84,0.03C8.15,6.11,7,7.99,7,10.42v5.47l-2,1.88V18h14V17.77z" class="style-scope yt-icon"></path></g></svg>
                <div class="menu" @click="side_bar=!side_bar">
                  <div class="profile-pic">
                    N
                  </div>

                </div>
              </div>
            </div>
            <!-- Header Ends -->

            <!-- Main Body Starts -->
            <div class="mainBody">
              <!-- Sidebar Starts -->
              <div class="sidebar">

                <div class="sidebar__categories">
                    <div class="header__left pl-3 mx-2 mt-1 mb-4 d-flex header-left-sidebar">
                        <div class="menu " @click="side_bar=!side_bar">
                            <img src="/videotube_app/images/close.png" style="width:20px;opacity:.7;">

                        </div>
                        
                    </div>
                    <div class="flex-align mb-4" style="padding:8px 18px;">
                      <div class="flex-align3">
                        <div class="profile-pic" style="width:36px;height:36px;line-height:36px;">
                          N
                        </div>
                        <div class="ml-3">
                          <h6 class="text-14 mb-0">nithul kp</h6>
                          <h6 class="text-12 mt-1 mb-0 text-info">Manage your google accound</h6>
                        </div>
                      </div>
                      <div>
                        <i class="fa fa-angle-right"></i>                      
                      </div>
                    </div>
                    <div class="sidebar-tab" :class="$root.header_active=='home'?'active-nav':''" @click="$root.header_active='home'">
                        
                      <div class="sidebar__category" :class="$root.header_active=='home'?'active-nav':''" @click="$root.header_active='home'">
                        <!--<img src="/videotube_app/images/home.png" class="nav-icons">
                        <img src="/videotube_app/images/home2.png" >-->
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
                    <div class="sidebar-tab hide-in-bar-out" :class="$root.header_active=='liked_videos'?'active-nav':''" @click="$root.header_active='liked_videos'">
                      <router-link to="plan">
                      <div class="sidebar__category">
                        <span>Plan</span>
                      </div>
                      </router-link>
                    </div>
                    <div class="sidebar-tab hide-in-bar-out" :class="$root.header_active=='liked_videos'?'active-nav':''" @click="$root.header_active='liked_videos'">
                      <router-link to="sign-in">
                      <div class="sidebar__category">
                        <span>Sign Up</span>
                      </div>
                      </router-link>
                    </div>
                </div>
                
              </div>
              <!-- Sidebar Ends -->

              <!-- Videos Section -->
              <div class="videos">
                <div class="tabs-slide">
                    <button class="btn btn-active-tab">All</button>
                    <button class="btn ">Music</button>
                    <button class="btn ">Live</button>
                    <button class="btn ">Mixes</button>
                    <button class="btn ">Arjith Singh</button>
                    <button class="btn ">A R Rahman</button>
                    <button class="btn ">Music</button>
                    <button class="btn ">Live</button>
                    <button class="btn ">Mixes</button>
                    <button class="btn ">Arjith Singh</button>
                    <button class="btn ">A R Rahman</button>
                    <button class="btn ">Music</button>
                    <button class="btn ">Live</button>
                    <button class="btn ">Mixes</button>
                    <button class="btn ">Arjith Singh</button>
                    <button class="btn ">A R Rahman</button>


                </div>
                
                <div class="videos__container">
                  <!-- Single Video starts -->
                  
                  <div class="video">
                    <router-link :to="{name:'playing'}">
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
                    </router-link>
                  </div>
                  
                  <!-- Single Video Ends -->

                  <!-- Single Video starts -->
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
                  <!-- Single Video Ends -->

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
</template>
<script>

export default {
  props: ['edit'],
  metaInfo: {
    title: "VideoTube"
  },
  data() {
    return {
        side_bar:false,
    };
  },
  mounted(){
  },
};
</script>
<style scoped>
  @import '/videotube_app/style/style2.css';
  @import '/videotube_app/style/style.css';

</style>
