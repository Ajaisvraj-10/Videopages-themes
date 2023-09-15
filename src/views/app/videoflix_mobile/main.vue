
<template>
  <div class="main-content" :class="side_bar=='add-class'?'active_sidebar':''">

    <div class="main" :class="scroll_start?'scroll-class':''" > 
      <div class="surprise flex-align3">
        <img src="/videoflix_mobile/images/logo2.png">
        <h6 class="text-dark ">Surprise Me</h6>
      </div>
      <header >
        <div class="flex-align first-header">
          <div class="logo">
            <img src="/videoflix_mobile/images/logo2.png" >
          </div>
          <div class="flex-align3 profile-main">
            <img src="/videoflix_mobile/images/search.png"  width="20">
            <div>
              <div v-b-toggle.sidebar-dropdown>
                <img src="https://occ-0-2164-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABRFZFS8db1R43jhQH8qYonvQ7XOdqfn1JEgczxD7Uz5vCGx-vnN18_sI8xORbinwQJzWgucNziIuHH8mhFA1iR7CGB8A4ms.png?r=eea" class="rounded" width="30">
              </div>
              <b-sidebar id="sidebar-dropdown"  right shadow> 
                  <div class="capcee-dropdown">
                    <div class="drop-down-head">
                      <img src="https://occ-0-2164-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABRFZFS8db1R43jhQH8qYonvQ7XOdqfn1JEgczxD7Uz5vCGx-vnN18_sI8xORbinwQJzWgucNziIuHH8mhFA1iR7CGB8A4ms.png?r=eea" class="rounded m-0" width="30">
                      <h5>Nithul</h5>
                    </div>
                    <div class="dropdown-body">
                      <router-link to="/plan">
                        <h6>Plan</h6>
                      </router-link>
                      <router-link to="/plan">
                        <h6>Sign In</h6>
                      </router-link>
                    </div>

                  </div>
              </b-sidebar>
            </div>

          </div>
        </div>
        <div class="flex-align  second-header" >
          <h6>TV Shows</h6>
          <h6>Movies</h6>
          <h6>Categories <i class="fa fa-caret-down"></i></h6>
        </div>
      </header>
      
      <div class="Videoflix_mobile-body" >

        <div class="banner">
          <img src="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2021/05/25112219/Money-Heist-2.jpg" >
          <div class="banner-details">
            <img src="https://www.pngplay.com/wp-content/uploads/7/Money-Heist-TV-Series-Transparent-PNG.png" class="nametag">
            <div class="flex-align3 keyword">
              <h6>Emotional</h6>
              <h6>Drama</h6>
              <h6>Thriller</h6>
              <h6>Tv shows</h6>
              <h6>Tv series</h6>
            </div>
            <div class="flex-align2 w-100 controls">
              <div class="text-center mx-4 px-2" @click="click_icon=!click_icon">
                  <img src="/videoflix_mobile/images/add.png" v-if="click_icon">
                  <img src="/videoflix_mobile/images/check.png" v-else>
                 
                  <h6 class="text-10 mt-1">My List</h6>
              </div>
              <div class="text-center btn flex-align3 play-btn mx-4 px-3 ">
                  <img src="/videoflix_mobile/images/play.png" class="pr-2 mr-1">
                  <h6 class=" mt-1">Play</h6>
              </div>
              <div class="text-center mx-4 px-2" v-b-modal.modal-video>
                  <img src="/videoflix_mobile/images/info.png" >
                  <h6 class="text-10 mt-1">Info</h6>
              </div>


            </div>
          </div>
        </div>
        <div class="main-body">
          <div class="genre">
            <h5 class="mb-2">Trending Now</h5>
            <div class="sliders">
              
              <div class="slider-item" v-b-modal.modal-video>
                <img src="https://www.nairtejas.com/wp-content/uploads/2019/12/Moothon-poster-by-Oldmonks-720x1024-514x731.jpg">
              </div>
              <div class="slider-item" v-b-modal.modal-video>
                <img src="https://www.nairtejas.com/wp-content/uploads/2018/12/Padayottam-poster-652x1024-465x731.jpg">
              </div>
              <div class="slider-item" v-b-modal.modal-video>
                <img src="https://i1.wp.com/www.nairtejas.com/wp-content/uploads/2019/12/Under-World-Malayalam-film-poster-by-Oldmonks.jpg?ssl=1">
              </div>
              <div class="slider-item" v-b-modal.modal-video>
                <img src="https://assets.vogue.in/photos/5db93f49177d2f000874668c/master/w_1600%2Cc_limit/main-virus.jpg">
              </div>
            
              <div class="slider-item" v-b-modal.modal-video>
                <img src="http://onlookersmedia.in/wp-content/uploads/2021/02/thinkalazhcha-nishchayam-first-look-poster-2.jpg">
              </div>
              <div class="slider-item" v-b-modal.modal-video>
                <img src="https://www.plumeriamovies.com/hq-malayalam-movie-posters-random/luca-malayalam-movie-poster/">
              </div>
              <div class="slider-item" v-b-modal.modal-video>
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/2baee529323171.55edda9493f77.jpg">
              </div>
            </div>
          </div>
          <div class="genre">
            <h5 class="mb-2">Malayalam</h5>
            <div class="sliders">
              <div class="slider-item" v-b-modal.modal-video>
                <img src="https://assets.vogue.in/photos/5db93f49177d2f000874668c/master/w_1600%2Cc_limit/main-virus.jpg">
              </div>
            
              <div class="slider-item" v-b-modal.modal-video>
                <img src="http://onlookersmedia.in/wp-content/uploads/2021/02/thinkalazhcha-nishchayam-first-look-poster-2.jpg">
              </div>
              <div class="slider-item" v-b-modal.modal-video>
                <img src="https://www.plumeriamovies.com/hq-malayalam-movie-posters-random/luca-malayalam-movie-poster/">
              </div>
              <div class="slider-item" v-b-modal.modal-video>
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/2baee529323171.55edda9493f77.jpg">
              </div>
              <div class="slider-item" v-b-modal.modal-video>
                <img src="https://www.nairtejas.com/wp-content/uploads/2019/12/Moothon-poster-by-Oldmonks-720x1024-514x731.jpg">
              </div>
              <div class="slider-item" v-b-modal.modal-video>
                <img src="https://www.nairtejas.com/wp-content/uploads/2018/12/Padayottam-poster-652x1024-465x731.jpg">
              </div>
              <div class="slider-item" v-b-modal.modal-video>
                <img src="https://i1.wp.com/www.nairtejas.com/wp-content/uploads/2019/12/Under-World-Malayalam-film-poster-by-Oldmonks.jpg?ssl=1">
              </div>
              
            </div>
          </div>
          <div class="genre">
            <h5 class="mb-2">New Releases</h5>
            <div class="sliders">
              <div class="slider-item" v-b-modal.modal-video>
                <img src="https://www.nairtejas.com/wp-content/uploads/2018/12/Padayottam-poster-652x1024-465x731.jpg">
              </div>
              <div class="slider-item" v-b-modal.modal-video>
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/2baee529323171.55edda9493f77.jpg">
              </div>
              <div class="slider-item" v-b-modal.modal-video>
                <img src="https://www.nairtejas.com/wp-content/uploads/2019/12/Moothon-poster-by-Oldmonks-720x1024-514x731.jpg">
              </div>
              
              <div class="slider-item" v-b-modal.modal-video>
                <img src="https://i1.wp.com/www.nairtejas.com/wp-content/uploads/2019/12/Under-World-Malayalam-film-poster-by-Oldmonks.jpg?ssl=1">
              </div>
              <div class="slider-item" v-b-modal.modal-video>
                <img src="https://assets.vogue.in/photos/5db93f49177d2f000874668c/master/w_1600%2Cc_limit/main-virus.jpg">
              </div>
            
              <div class="slider-item" v-b-modal.modal-video>
                <img src="http://onlookersmedia.in/wp-content/uploads/2021/02/thinkalazhcha-nishchayam-first-look-poster-2.jpg">
              </div>
              <div class="slider-item" v-b-modal.modal-video>
                <img src="https://www.plumeriamovies.com/hq-malayalam-movie-posters-random/luca-malayalam-movie-poster/">
              </div>
              
            </div>
          </div>
         
        </div>

      </div>
      <!--<footer>
        <div class="flex-align w-100">
          <div class="footer-item active-footer">
            <img src="/videoflix_mobile/images/home2.png">
            <h6>Home</h6>
          </div>
          <div class="footer-item">
            <img src="/videoflix_mobile/images/games.png">
            <h6>Games</h6>
          </div>
          <div class="footer-item">
            <img src="/videoflix_mobile/images/new-hot.png">
            <h6>New & Hot</h6>
          </div>
          <div class="footer-item">
            <img src="/videoflix_mobile/images/smily.png">
            <h6>Fast Laughs</h6>
          </div>
          <div class="footer-item">
            <img src="/videoflix_mobile/images/downloads.png">
            <h6>Downloads</h6>
          </div>
        </div>
      </footer>-->
      <b-modal id="modal-video" size="lg" hide-header hide-footer hide-backdrop>
                <img src="/videoflix_mobile/images/close2.png" class="lg-modal-close" @click="$bvModal.hide('modal-video')">

                <div class="video-modal"> 
                  <div class="d-flex">
                    <div class="modal-thumbnail">
                      <img src="https://www.lacasadepapel.withspotify.com/images/mobile-splash-bg.png">
                    </div>
                    <div class="modal-details">
                      <h4 style="width: calc(100% - 32px);overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">Money Heist (Spanish)</h4>
                      <h6 class="text-11 text-light">
                        <span class="pr-2">2022</span>
                        <span class="pr-2">U/A 13+</span>
                        <span class="pr-2">1h 5m</span>

                      </h6>
                      <h6 class="modal-contents">
                        Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan. Watch all you want. This riveting crime series won Best Drama at the International Emmy Awards.
                      </h6>

                    </div>

                  </div>
                  <div class=" w-100 controls2">
                    <div class=" rounded-icons ">
                      <div class="modal-control-images play-icon">
                        <img src="/videoflix_mobile/images/play.png" class="">
                      </div>

                      <h6 class="">Play</h6>
                    </div>
                    <div class=" rounded-icons ">
                      <div class="modal-control-images">

                        <img src="/videoflix_mobile/images/download.png" >
                      </div>

                      <h6 class="">Download</h6>
                    </div>
                    <div class=" rounded-icons " >
                      <div class="modal-control-images">
                        <img src="/videoflix_mobile/images/add.png" >
                      
                      </div>
                      <h6 class="">My List</h6>
                    </div>
                  
                    <div class=" rounded-icons " >
                      <div class="modal-control-images">

                        <img src="/videoflix_mobile/images/share.png" >
                      </div>

                        <h6 class="">Share</h6>
                    </div>


                  </div>
                  <div class="flex-align details-more" @click="side_bar='add-class'">
                    <div class='flex-align3'>
                      <img src="/videoflix_mobile/images/info.png" width="15">
                      <h6 class="text-10 ml-2">Details and more</h6>
                    </div> 
                    <img src="/videoflix_mobile/images/next.png" width="15">

                  </div>
                </div>
      </b-modal>
      
      
    </div>
    <div class="video-sidebar">
        <div class="flex-align sidebar-header px-4">
          <img src="/videoflix_mobile/images/back.png" width="16" @click="side_bar='remove_class'">
          <div class="flex-align3">
            <div class="flex-align3">
              <img src="/videoflix_mobile/images/search.png"  width="20" class="ml-4">

              <img src="https://occ-0-2164-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABRFZFS8db1R43jhQH8qYonvQ7XOdqfn1JEgczxD7Uz5vCGx-vnN18_sI8xORbinwQJzWgucNziIuHH8mhFA1iR7CGB8A4ms.png?r=eea" class="rounded ml-4" width="30">

            </div>
          </div>
        </div>
        <div class="video-modal3">
            <img src="https://www.plumeriamovies.com/wp-content/uploads/2019/11/Moothon-Poster-Review.jpg">

            <div class="vide-sidebar-description">
                <div class="video-modal-content"> 
                  <div class="d-flex">
                    <div class="modal-details2">
                      <h2 >Moothon</h2>
                      <h6 class="text-13 text-light my-2">
                        <span class="pr-2">2022</span>
                        <span class="pr-2">U/A 13+</span>
                        <span class="pr-2">1h 5m</span>
                      </h6>
                      
                    </div>
                  </div>
                  <div class="my-3">
                    <button class="btn btn-light flex-align2 w-100 my-3" style="padding:12px;">
                      <img src="/videoflix_mobile/images/play.png" width="25">
                      <h5 class="text-dark text-18 ml-3 font-weight-800">Play</h5>
                    </button>
                    <button class="btn btn-dark flex-align2 w-100 my-3" style="padding:12px;">
                      <img src="/videoflix_mobile/images/download.png" width="25">
                      <h5 class="text-18 ml-3 font-weight-800">Download</h5>
                    </button>

                  </div>
                  <h6 class="modal-contents2">
                        Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan. Watch all you want. This riveting crime series won Best Drama at the International Emmy Awards.
                  </h6>
                  <h6 class="modal-contents2 text-white my-2 text-10">
                        Staring: <span class="text-light">Nivin Pauly, Tovino Thomas, Kallyani Priyadarshan</span>
                  </h6>
                  <h6 class="modal-contents2 text-white my-2 text-10">
                        Director: <span class="text-light">Khalid Rahman</span>
                  </h6>
                  <div class=" w-100 flex-align4 my-3">
                    <div class=" rounded-icons ">
                      <div class="">
                        <img src="/videoflix_mobile/images/add.png" >
                        
                      </div>
                      <h6 class="">My List</h6>
                    </div>
                    <div class=" rounded-icons ">
                      <div class="">
                        <img src="/videoflix_mobile/images/download.png" >
                      </div>
                      <h6 class="">Download</h6>
                    </div>
                    <div class=" rounded-icons " >
                      <div class="">
                        <img src="/videoflix_mobile/images/share.png" >
                      </div>
                        <h6 class="">Share</h6>
                    </div>
                  </div>
                  <div class="genre mt-5">
                    <h6 class="mb-2">Trending Now</h6>
                    <div class="sliders">
                      
                      <div class="slider-item" v-b-modal.modal-video>
                        <img src="https://www.nairtejas.com/wp-content/uploads/2019/12/Moothon-poster-by-Oldmonks-720x1024-514x731.jpg">
                      </div>
                      <div class="slider-item" v-b-modal.modal-video>
                        <img src="https://www.nairtejas.com/wp-content/uploads/2018/12/Padayottam-poster-652x1024-465x731.jpg">
                      </div>
                      <div class="slider-item" v-b-modal.modal-video>
                        <img src="https://i1.wp.com/www.nairtejas.com/wp-content/uploads/2019/12/Under-World-Malayalam-film-poster-by-Oldmonks.jpg?ssl=1">
                      </div>
                      <div class="slider-item" v-b-modal.modal-video>
                        <img src="https://assets.vogue.in/photos/5db93f49177d2f000874668c/master/w_1600%2Cc_limit/main-virus.jpg">
                      </div>
                    
                      <div class="slider-item" v-b-modal.modal-video>
                        <img src="http://onlookersmedia.in/wp-content/uploads/2021/02/thinkalazhcha-nishchayam-first-look-poster-2.jpg">
                      </div>
                      <div class="slider-item" v-b-modal.modal-video>
                        <img src="https://www.plumeriamovies.com/hq-malayalam-movie-posters-random/luca-malayalam-movie-poster/">
                      </div>
                      <div class="slider-item" v-b-modal.modal-video>
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/2baee529323171.55edda9493f77.jpg">
                      </div>
                    </div>
                  </div>
                  <div class="genre mt-5">
                    <h6 class="mb-2">Trending Now</h6>
                    <div class="sliders">
                      
                      <div class="slider-item" v-b-modal.modal-video>
                        <img src="https://www.nairtejas.com/wp-content/uploads/2019/12/Moothon-poster-by-Oldmonks-720x1024-514x731.jpg">
                      </div>
                      <div class="slider-item" v-b-modal.modal-video>
                        <img src="https://www.nairtejas.com/wp-content/uploads/2018/12/Padayottam-poster-652x1024-465x731.jpg">
                      </div>
                      <div class="slider-item" v-b-modal.modal-video>
                        <img src="https://i1.wp.com/www.nairtejas.com/wp-content/uploads/2019/12/Under-World-Malayalam-film-poster-by-Oldmonks.jpg?ssl=1">
                      </div>
                      <div class="slider-item" v-b-modal.modal-video>
                        <img src="https://assets.vogue.in/photos/5db93f49177d2f000874668c/master/w_1600%2Cc_limit/main-virus.jpg">
                      </div>
                    
                      <div class="slider-item" v-b-modal.modal-video>
                        <img src="http://onlookersmedia.in/wp-content/uploads/2021/02/thinkalazhcha-nishchayam-first-look-poster-2.jpg">
                      </div>
                      <div class="slider-item" v-b-modal.modal-video>
                        <img src="https://www.plumeriamovies.com/hq-malayalam-movie-posters-random/luca-malayalam-movie-poster/">
                      </div>
                      <div class="slider-item" v-b-modal.modal-video>
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/2baee529323171.55edda9493f77.jpg">
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
    title: "Videoflix"
  },
  data() {
    return {
        
      scroll_start:true,
      lastScrollPosition: 0,
      click_icon:true,
      side_bar: "open",
       
    };
  },
 mounted() {
  },
  created() {
    window.addEventListener('scroll', this.onScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.onScroll)
  },
   methods:{
     onScroll () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return 0
      }
      this.scroll_start = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    },

  }

};
</script>
<style scoped>
  

</style>
