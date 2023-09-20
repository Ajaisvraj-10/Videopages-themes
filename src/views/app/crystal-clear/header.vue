<template>
          <!-- header-section -->
          <div>

          
      <div class="header_div">
  
  <!-- header-section -->

  <div>
    <span class="span_1">Video</span>
    <span class="span_2">flix</span>
  </div>

  <div class="header_frame">
    <div class="movie_category">
      <div class="category_1">
        <div class="items">Movies</div>
      </div>
      <div class="category_1">
        <div class="items">TV Shows</div>
      </div>
      <div class="category_1">
        <div class="items">Series</div>
      </div>
    </div>

    <div class="search_bar">
      <div class="input_placeholder">What do you want to watch</div>
      <div>
        <svg class="search_img" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
<path d="M24.0414 22.1557L29.7517 27.866L27.8661 29.7516L22.1558 24.0413C20.1026 25.684 17.4987 26.6667 14.6667 26.6667C8.04275 26.6667 2.66675 21.2907 2.66675 14.6667C2.66675 8.04266 8.04275 2.66666 14.6667 2.66666C21.2907 2.66666 26.6667 8.04266 26.6667 14.6667C26.6667 17.4987 25.6841 20.1025 24.0414 22.1557ZM21.3663 21.1664C22.9967 19.4861 24.0001 17.1941 24.0001 14.6667C24.0001 9.50999 19.8234 5.33332 14.6667 5.33332C9.51008 5.33332 5.33341 9.50999 5.33341 14.6667C5.33341 19.8233 9.51008 24 14.6667 24C17.1942 24 19.4862 22.9967 21.1665 21.3663L21.3663 21.1664Z" fill="white"/>
</svg>
      </div>
    </div>

    <div class="lang_select">
        <div>
          <svg class="globe_img" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
<path d="M16.0001 29.3333C8.63628 29.3333 2.66675 23.3637 2.66675 16C2.66675 8.63619 8.63628 2.66666 16.0001 2.66666C23.3638 2.66666 29.3334 8.63619 29.3334 16C29.3334 23.3637 23.3638 29.3333 16.0001 29.3333ZM12.9468 26.2232C11.6633 23.5012 10.8765 20.4989 10.7032 17.3333H5.41593C5.94408 21.5687 8.95527 25.0329 12.9468 26.2232ZM13.3743 17.3333C13.5749 20.5851 14.5038 23.6396 16.0001 26.336C17.4963 23.6396 18.4253 20.5851 18.6258 17.3333H13.3743ZM26.5842 17.3333H21.297C21.1237 20.4989 20.3369 23.5012 19.0534 26.2232C23.0449 25.0329 26.0561 21.5687 26.5842 17.3333ZM5.41593 14.6667H10.7032C10.8765 11.501 11.6633 8.49875 12.9468 5.77674C8.95527 6.9671 5.94408 10.4313 5.41593 14.6667ZM13.3743 14.6667H18.6258C18.4253 11.4149 17.4963 8.36032 16.0001 5.66398C14.5038 8.36032 13.5749 11.4149 13.3743 14.6667ZM19.0534 5.77674C20.3369 8.49875 21.1237 11.501 21.297 14.6667H26.5842C26.0561 10.4313 23.0449 6.9671 19.0534 5.77674Z" fill="white"/>
</svg>
        </div>
        <div class="language">Eng</div>
        <div class="drop_down">
          <svg class="drop_down_img" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
<path d="M14.0001 17.5007L9.05029 12.551L10.7002 10.901L14.0001 14.2009L17.2999 10.901L18.9498 12.551L14.0001 17.5007Z" fill="white"/>
</svg>
        </div>
      </div>
      <router-link :to="{ name: 'sign-in'}">
      <div class="profile_img">
        <img src="/crystal-clear/images/new_theme_profile.png" alt="">
      </div>
      </router-link>
  </div>
</div>
<!-- 2header -->
      <div class="header_div_main">
          <div class="section_one">
            <!-- <router-link :to="{ name: 'sidebar'}"> -->
                  <div @click="show_sidebar=!show_sidebar"><svg class="menu_option" xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <path d="M3 4.5H21V6.5H3V4.5ZM3 11.5H21V13.5H3V11.5ZM3 18.5H21V20.5H3V18.5Z" fill="white"/>
  </svg>          
                  </div>
                <!-- </router-link> -->
                  <div>
                      <span class="span1">Video</span>
                      <span class="span2">flix</span>
                  </div>
          </div>

          <div class="section_two">
              <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
<path d="M18.031 17.1168L22.3137 21.3995L20.8995 22.8137L16.6168 18.531C15.0769 19.763 13.124 20.5 11 20.5C6.032 20.5 2 16.468 2 11.5C2 6.532 6.032 2.5 11 2.5C15.968 2.5 20 6.532 20 11.5C20 13.624 19.263 15.5769 18.031 17.1168ZM16.0247 16.3748C17.2475 15.1146 18 13.3956 18 11.5C18 7.6325 14.8675 4.5 11 4.5C7.1325 4.5 4 7.6325 4 11.5C4 15.3675 7.1325 18.5 11 18.5C12.8956 18.5 14.6146 17.7475 15.8748 16.5247L16.0247 16.3748Z" fill="white"/>
</svg>
              </div>
              <div>
                  <img class="profile_img" src="/crystal-clear/images/new_theme_profile.png" alt="">
              </div>
          </div>
      </div>
          <!-- mobile-view Sidebar -->
    <div class="mob_sidebar_container"  v-if="show_sidebar">
      <div class="mob_first_section">
        <div @click="show_sidebar=!show_sidebar">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <path d="M3 4.5H21V6.5H3V4.5ZM3 11.5H21V13.5H3V11.5ZM3 18.5H21V20.5H3V18.5Z" fill="white"/>
</svg>
        </div>
        <div>
          <span class="span1">Video</span>
          <span class="span2">flix</span>
        </div>
      </div>
            <!-- menu-section -->
            <div class="second_section">
                <div class="sidemenu_one">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M21 19.9997C21 20.552 20.5523 20.9997 20 20.9997H4C3.44772 20.9997 3 20.552 3 19.9997V9.48882C3 9.18023 3.14247 8.88893 3.38606 8.69947L11.3861 2.47725C11.7472 2.19639 12.2528 2.19639 12.6139 2.47725L20.6139 8.69947C20.8575 8.88893 21 9.18023 21 9.48882V19.9997ZM11 12.9997V18.9997H13V12.9997H11Z" fill="#00925D"/>
</svg>
                    </div>
                    <div class="txt_home">Home</div>
                </div>

                <div class="sidemenu_two">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM16.5 7.5L14 14L7.5 16.5L10 10L16.5 7.5ZM12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="white"/>
</svg>
                    </div>
                    <div class="txt_home">Discover</div>
                </div>

                <div class="sidemenu_two">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 23C16.1421 23 19.5 19.6421 19.5 15.5C19.5 14.6345 19.2697 13.8032 19 13.0296C17.3333 14.6765 16.0667 15.5 15.2 15.5C19.1954 8.5 17 5.5 11 1.5C11.5 6.49951 8.20403 8.77375 6.86179 10.0366C5.40786 11.4045 4.5 13.3462 4.5 15.5C4.5 19.6421 7.85786 23 12 23ZM12.7094 5.23498C15.9511 7.98528 15.9666 10.1223 13.463 14.5086C12.702 15.8419 13.6648 17.5 15.2 17.5C15.8884 17.5 16.5841 17.2992 17.3189 16.9051C16.6979 19.262 14.5519 21 12 21C8.96243 21 6.5 18.5376 6.5 15.5C6.5 13.9608 7.13279 12.5276 8.23225 11.4932C8.35826 11.3747 8.99749 10.8081 9.02477 10.7836C9.44862 10.4021 9.7978 10.0663 10.1429 9.69677C11.3733 8.37932 12.2571 6.91631 12.7094 5.23498Z" fill="white"/>
</svg>
                    </div>
                    <div class="txt_home">Trending</div>
                </div>

                <div class="sidemenu_two">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M11.9991 22.0001C7.02858 22.0001 2.99914 17.9707 2.99914 13.0001C2.99914 8.02956 7.02858 4.00012 11.9991 4.00012C16.9697 4.00012 20.9991 8.02956 20.9991 13.0001C20.9991 17.9707 16.9697 22.0001 11.9991 22.0001ZM11.9991 20.0001C15.8651 20.0001 18.9991 16.8661 18.9991 13.0001C18.9991 9.13412 15.8651 6.00012 11.9991 6.00012C8.13315 6.00012 4.99914 9.13412 4.99914 13.0001C4.99914 16.8661 8.13315 20.0001 11.9991 20.0001ZM12.9991 13.0001H15.9991V15.0001H10.9991V8.00012H12.9991V13.0001ZM1.74609 6.2826L5.28163 2.74707L6.69584 4.16128L3.16031 7.69682L1.74609 6.2826ZM18.7167 2.74707L22.2522 6.2826L20.838 7.69682L17.3024 4.16128L18.7167 2.74707Z" fill="white"/>
</svg>
                    </div>
                    <div class="txt_home">Coming Soon</div>
                    <div class="notifications">
                <div>
                  <svg class="green_circle" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="14" fill="#00925D"/>
    </svg>
                </div>
                <div class="num_five">5</div>
              </div>
                </div>

                <div class="sidemenu_two">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M4 19V5H9.58579L11.5858 7H20V19H4ZM21 5H12.4142L10.4142 3H3C2.44772 3 2 3.44772 2 4V20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20V6C22 5.44772 21.5523 5 21 5ZM15.0008 12.667L10.1219 9.41435C10.0562 9.37054 9.979 9.34717 9.9 9.34717C9.6791 9.34717 9.5 9.52625 9.5 9.74717V16.2524C9.5 16.3314 9.5234 16.4086 9.5672 16.4743C9.6897 16.6581 9.9381 16.7078 10.1219 16.5852L15.0008 13.3326C15.0447 13.3033 15.0824 13.2656 15.1117 13.2217C15.2343 13.0379 15.1846 12.7895 15.0008 12.667Z" fill="white"/>
</svg>
                    </div>
                    <div class="txt_home">Library</div>
                </div>

                <div class="sidemenu_two">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M2 11.9998C2 11.1353 2.1097 10.2964 2.31595 9.49631C3.40622 9.55283 4.48848 9.01015 5.0718 7.99982C5.65467 6.99025 5.58406 5.78271 4.99121 4.86701C6.18354 3.69529 7.66832 2.82022 9.32603 2.36133C9.8222 3.33385 10.8333 3.99982 12 3.99982C13.1667 3.99982 14.1778 3.33385 14.674 2.36133C16.3317 2.82022 17.8165 3.69529 19.0088 4.86701C18.4159 5.78271 18.3453 6.99025 18.9282 7.99982C19.5115 9.01015 20.5938 9.55283 21.6841 9.49631C21.8903 10.2964 22 11.1353 22 11.9998C22 12.8643 21.8903 13.7032 21.6841 14.5033C20.5938 14.4468 19.5115 14.9895 18.9282 15.9998C18.3453 17.0094 18.4159 18.2169 19.0088 19.1326C17.8165 20.3043 16.3317 21.1794 14.674 21.6383C14.1778 20.6658 13.1667 19.9998 12 19.9998C10.8333 19.9998 9.8222 20.6658 9.32603 21.6383C7.66832 21.1794 6.18354 20.3043 4.99121 19.1326C5.58406 18.2169 5.65467 17.0094 5.0718 15.9998C4.48848 14.9895 3.40622 14.4468 2.31595 14.5033C2.1097 13.7032 2 12.8643 2 11.9998ZM6.80385 14.9998C7.43395 16.0912 7.61458 17.3459 7.36818 18.5236C7.77597 18.8138 8.21005 19.0652 8.66489 19.2741C9.56176 18.4712 10.7392 17.9998 12 17.9998C13.2608 17.9998 14.4382 18.4712 15.3351 19.2741C15.7899 19.0652 16.224 18.8138 16.6318 18.5236C16.3854 17.3459 16.566 16.0912 17.1962 14.9998C17.8262 13.9085 18.8225 13.1248 19.9655 12.7493C19.9884 12.5015 20 12.2516 20 11.9998C20 11.7481 19.9884 11.4981 19.9655 11.2504C18.8225 10.8749 17.8262 10.0912 17.1962 8.99982C16.566 7.90845 16.3854 6.65378 16.6318 5.47605C16.224 5.18588 15.7899 4.93447 15.3351 4.72552C14.4382 5.52844 13.2608 5.99982 12 5.99982C10.7392 5.99982 9.56176 5.52844 8.66489 4.72552C8.21005 4.93447 7.77597 5.18588 7.36818 5.47605C7.61458 6.65378 7.43395 7.90845 6.80385 8.99982C6.17376 10.0912 5.17754 10.8749 4.03451 11.2504C4.01157 11.4981 4 11.7481 4 11.9998C4 12.2516 4.01157 12.5015 4.03451 12.7493C5.17754 13.1248 6.17376 13.9085 6.80385 14.9998ZM12 14.9998C10.3431 14.9998 9 13.6567 9 11.9998C9 10.343 10.3431 8.99982 12 8.99982C13.6569 8.99982 15 10.343 15 11.9998C15 13.6567 13.6569 14.9998 12 14.9998ZM12 12.9998C12.5523 12.9998 13 12.5521 13 11.9998C13 11.4475 12.5523 10.9998 12 10.9998C11.4477 10.9998 11 11.4475 11 11.9998C11 12.5521 11.4477 12.9998 12 12.9998Z" fill="white"/>
</svg>
                    </div>
                    <div class="txt_home">Settings</div>
                </div>

                <div class="sidemenu_two">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM13 13.3551V14H11V12.5C11 11.9477 11.4477 11.5 12 11.5C12.8284 11.5 13.5 10.8284 13.5 10C13.5 9.17157 12.8284 8.5 12 8.5C11.2723 8.5 10.6656 9.01823 10.5288 9.70577L8.56731 9.31346C8.88637 7.70919 10.302 6.5 12 6.5C13.933 6.5 15.5 8.067 15.5 10C15.5 11.5855 14.4457 12.9248 13 13.3551Z" fill="white"/>
</svg>
                    </div>
                    <div class="txt_home">About & Help</div>
                </div>
            </div>

            
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      show_sidebar: false,
    };
  },
};
</script>

<style>
@media (max-width: 767px) {
.header_div_main{
    display: flex;
    padding: 18px 24px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #8C8B8B;
    position: fixed;
    top: 0px;
    width: 100%;
    background: #000000;
}
}
@media (min-width: 768px) {
.header_div_main{
    display: flex;
    padding: 18px 24px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #8C8B8B;
    position: fixed;
    top: 0px;
    width: 100%;
    background: #000000;
    display: none;

    
}
}
/* mainheader */
@media (max-width: 767px) {
.header_div{
    display: flex;
    width: 100%;
    padding: 0px 50px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #838383;
    background: #0D0C0F;
    position: fixed;
    display: none;
  }
}
@media (min-width: 768px) {
.header_div{
    display: flex;
    width: 100%;
    padding: 6px 50px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #838383;
    background: #0D0C0F;
    position: fixed;
    top: 0;
  }
}

@media (max-width: 767px) {
  .span_1{
    color: #00925D;
   font-family :system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  }
}
@media (min-width: 768px) {
  .span_1{
    color: #00925D;
   font-family :system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  }
}


@media (max-width: 767px) {
  .span_2{
    color: #FFF;
  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  }
}
@media (min-width: 768px) {
  .span_2{
    color: #FFF;
  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  }
}
  @media (max-width: 767px) {
  .header_frame{
    display: flex;
  align-items: center;
  gap: 32px;
  }
}
@media (min-width: 768px) {
  .header_frame{
    display: flex;
  align-items: center;
  gap: 10px;
    margin-right: -32px;
  }
}

  /* mobile-view sidebar */


  @media (max-width: 767px) {
  .mob_sidebar_container{
    display: inline-flex;
height: 1002px;
flex-direction: column;
align-items: flex-start;
flex-shrink: 0;
border-right: 1px solid #8C8B8B;
background: #0D0C0F;
top: 0;
position: absolute;
  }
}
@media (min-width: 768px) {
  .mob_sidebar_container{
    display: inline-flex;
height: 1002px;
flex-direction: column;
align-items: flex-start;
flex-shrink: 0;
border-right: 1px solid #8C8B8B;
background: #0D0C0F;
top: 0;
position: absolute;
display: none;
  }
}
@media (max-width: 767px) {
.inner_div{
  width: 100%;
    height: 812px;
flex-shrink: 0;
background: rgba(0, 0, 0, 0.31);
}
}
@media (min-width: 768px) {
.inner_div{
  width: 100%;
    height: 812px;
flex-shrink: 0;
background: rgba(0, 0, 0, 0.31);
display: none;

}
}



@media (max-width: 767px) {
.mob_first_section{
  display: flex;
padding: 16px 24px;
align-items: center;
gap: 16px;
}
}

@media (max-width: 767px) {
.second_section{
    display: flex;
width: 259px;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 3px;
}
}
@media (max-width: 767px) {
.sidemenu_one{
    display: flex;
padding: 12px 24px;
align-items: center;
gap: 6px;
align-self: stretch;
border-right: 3px solid #00925D;
background: rgba(0, 146, 93, 0.10);
}
}

@media (max-width: 767px) {
.sidemenu_two{
  display: flex;
padding: 12px 24px;
align-items: center;
gap: 6px;
align-self: stretch;
}
}

/* end of mobile-view */
@media (max-width: 767px) {
  .movie_category{
    display: flex;
  align-items: flex-start;
  }
}
@media (min-width: 768px) {
  .movie_category{
    display: flex;
  align-items: flex-start;
  }
}



@media (max-width: 767px) {
  .category_1{
    color: #FFF;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  }
}
@media (min-width: 768px) {
  .category_1{
    color: #FFF;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  }
}

@media (max-width: 767px) {
  .items{
    display: flex;
    padding: 24px 48px;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
}
@media (min-width: 768px) {
  .items{
    display: flex;
    padding: 24px 48px;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
}

@media (max-width: 767px) {
  .search_bar{
    display: flex;
  width: 645px;
  height: 55px;
  padding: 24px 32px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid rgba(0, 146, 93, 0.70);
  background: linear-gradient(348deg, rgba(0, 146, 93, 0.10) 10.16%, rgba(255, 255, 255, 0.00) 66.56%);
  }
}
@media (min-width: 768px) {
  .search_bar{
    display: flex;
  width: 645px;
  height: 55px;
  padding: 24px 32px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid rgba(0, 146, 93, 0.70);
  background: linear-gradient(348deg, rgba(0, 146, 93, 0.10) 10.16%, rgba(255, 255, 255, 0.00) 66.56%);
  }
}


@media (max-width: 767px) {
  .input_placeholder{
    color: #838383;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  ;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  }
}
@media (min-width: 768px) {
  .input_placeholder{
    color: #838383;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  ;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  }
}


@media (max-width: 767px) {
  .lang_select{
    display: flex;
  padding: 24px 0px;
  align-items: center;
  gap: 8px;
  }
}
@media (min-width: 768px) {
  .lang_select{
    display: flex;
  padding: 24px 0px;
  align-items: center;
  gap: 8px;
  }
}



@media (max-width: 767px) {
  .language{
    color: #FFF;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  ;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  }
}
@media (min-width: 768px) {
  .language{
    color: #FFF;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  ;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  }
}


@media (max-width: 767px) {
  .drop_down_img{
    height: 20px;
  }
}
@media (min-width: 768px) {
  .drop_down_img{
    height: 20px;
  }
}



@media (max-width: 767px) {
  .search_img{
    height: 20px;
  }
}
@media (min-width: 768px) {
  .search_img{
    height: 20px;
  }
}



@media (max-width: 767px) {
  .globe_img{
    height: 20px;
  }
}
@media (min-width: 768px) {
  .globe_img{
    height: 20px;
  }
}


@media (max-width: 767px) {
  .profile_img{
    border-radius: 46px;
  border: 1px solid #FFF;
  }
}
@media (min-width: 768px) {
  .profile_img{
    border-radius: 46px;
  border: 1px solid #FFF;
  }
}

@media (max-width: 767px) {
  .profile_img img{
    height: 30px;
  }
}
@media (min-width: 768px) {
  .profile_img img{
    height: 30px;
  }
}
/* end of header */
@media (max-width: 767px) {
.section_one{
    display: flex;
    align-items: center;
    gap: 16px;
}
}
@media (min-width: 768px) {
.section_one{
    display: flex;
    align-items: center;
    gap: 16px;
}
}

@media (max-width: 767px) {
.profile_img{
height: 30px;
}
}
@media (min-width: 768px) {
.profile_img{
height: 30px;
}
}

@media (max-width: 767px) {
.span1{
    color: #00925D;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
}
@media (min-width: 768px) {
.span1{
    color: #00925D;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
}
</style>