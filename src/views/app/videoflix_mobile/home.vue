
<template>
  <div class="main-content">
    <div class="starting">
            <b-carousel
              id="carousel-1"
              v-model="slide"
              :interval="5000"
              controls
              indicators
              background="#000"
              
              img-width="1024"
              img-height="480"
              style="text-shadow: 1px 1px 2px #333;"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
            >
              
              <b-carousel-slide
               
                img-src="/videoflix_mobile/images/bg1.png"
              > 
                    <h1>Unlimited entertainments, one low price</h1>
                    <h5 class="mt-4 text-light">
                        All of videoflix, starting at just $ 149.
                    </h5>
              </b-carousel-slide>

             
              <b-carousel-slide img-src="/videoflix_mobile/images/bg2.png">
                    <h1>Download titles and watch them online</h1>
                    <h5 class="mt-4 text-light">
                        Always have something to watch offline
                    </h5>
              </b-carousel-slide>


             
              <b-carousel-slide  img-src="/videoflix_mobile/images/bg3.png">
                    <h1>No pesky <br> contracts</h1>
                    <h5 class="mt-4 text-light">
                       Join today, cancel at any time.
                    </h5>
              </b-carousel-slide>
            </b-carousel>

         <div class="header-starter flex-align">
            <img src="/videoflix_mobile/images/logo2.png">
            <div class="flex-align3">
                <h6 class="text-12">PRIVACY</h6>
                <router-link :to="{name:'signin'}">
                    <h6 class="text-12">SIGN IN</h6>
                </router-link>

            </div>
         </div>  
         <div class="get-started">
            <button v-b-modal.modal-start>GET STARTED</button>
         </div> 
     </div>


      <b-modal id="modal-start" size="sm" hide-header hide-footer>
        <img src="/videoflix_mobile/images/close.png" class="sm-modal-close" @click="$bvModal.hide('modal-start')">

        <div class="mt-5 pt-5 text-center my-4" style="width: 90%;margin: 0 auto;"> 
            <h2 class="text-dark font-weight-500 text-26">Ready to watch videoflix?</h2>
            <p class=" mt-4">Enter your email to create or sign inyour account</p>
            
            <div class="get-started2 signin">
                <div class="input-container ">
                  <input id="password" class="input" type="text" pattern=".+" required />
                  <label class="label" for="password">Email</label>
                </div>
                <router-link :to="{name:'signin'}">
                    <button class="my-2" v-b-modal.modal-start>GET STARTED</button>
                </router-link>
            </div>

        </div>
      </b-modal>
      
  </div>

  
</template>
<script>

export default {
  metaInfo: {
    title: "Videoflix"
  },
  data() {
    return {
    };
  },
  mounted(){
    
  }
};
</script>
<style scoped>
  @import 'style/style.css';

  
</style>
<style>
    .starting .carousel-indicators li {
    
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin: 8px;
   
}
.starting .carousel-caption {
  
    bottom: 200px;
    right: 10%;
    left: 10%;

}
.starting .carousel-control-prev-icon, .starting .carousel-control-next-icon {
   opacity: .4;
}
.carousel-indicators {
    
    bottom: 140px!important;
}
.starting img{
    height: 100vh;
    object-fit: cover;
}
.starting h1{
    font-size: 34px;
    line-height: 46px;
}
.header-starter{
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   padding: 15px 25px;
}

.header-starter img{
    width: 20px;
    height: auto;
}
.header-starter h6{
    margin: 0 10px;
}

.get-started{
    position: absolute;
   bottom: 0;
   left: 0;
   width: 100%;
   padding: 30px;
    margin:0 auto;
    text-align:center;
}
.get-started button {
    width: 100%;
    height: 55px;
    background-color: #E50914;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 18px;
    max-width:500px;

}
.get-started2{

   width: 100%;
   padding: 20px 0;
   max-width:600px;
   margin:0 auto;
}
.get-started2 button {
    width: 100%;
    height: 55px;
    background-color: #E50914;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 18px;
}
.get-started2 input {
    width: 100%;
    height: 55px;
    background-color: #fff;
    color: gray;
    border: 1px solid blue;
    border-radius: 4px;
    padding:20px;
   
}


</style>
