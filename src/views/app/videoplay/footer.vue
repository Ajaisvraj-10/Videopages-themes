
<template>
    <div>
        <footer class="footer py-md-4 px-md-5" >
            <div class="flex-align" style="flex-wrap:wrap;gap:25px;">
                <div class="flex-align3" style="gap:10px;">
                    <h6 class="text-14">Download Apps</h6>
                    <a class="d-flex" :href="site_footer.playstore_link" target="_blank" v-show="site_footer.is_playstore"><img src="/videoplay/images/play_store.png"></a>
                    <a class="d-flex" :href="site_footer.appstore_link" target="_blank" v-show="site_footer.is_appstore"><img src="/videoplay/images/app_store.png"></a>

                </div>
                <div class="flex-align3 social2" v-show="site_footer.is_social_links">
                    <h6 class="text-14 mr-2">Connect with us</h6>
                    <a v-for="social_link in social_links" :href="social_link.link" target="_blank"><i :class="social_link.icon"></i></a>


                </div>
            </div>
            <div class="text-center my-3">
                <img :src="frontent_settings.main_logo" class="logo my-3"  style="max-width:160px!important;width:100%;" v-show="site_footer.is_logo">
                <div class="flex-align2 mb-2" style="flex-wrap: wrap;">
                    <h6 class="text-13 text-info px-2">Terms and Privacy </h6> 
                    <h6 class="text-13 text-info px-2">Notice </h6> 
                    <h6 class="text-13 text-info px-2">Send us feedback </h6> 
                    <h6 class="text-13 text-info px-2">Help </h6> 
                </div>
                <h6 class="text-13 text-light p-2" v-html="site_footer.description"></h6>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
  props: ['edit','blocks','current_block'],
  data() {
    return {
        site_footer:{},
    };
  },
  mounted(){
    this.getFooter()
  },
  methods: {
    getFooter() {
      var headers = new Headers();
      headers.append("Authorization", "Token "+this.$root.token);
      fetch(this.api_url+'/content/site_footer/1/?theme='+theme_name, {
          method : 'get',
          headers: headers,
      })
      .then((response) => {
          return response.json()
      })
      .then((jsonData) => {
          this.site_footer = jsonData
      })
    },
  }

};
</script>
<style scoped>
  @import '/videoplay/style/style.css';
  @import '/videoplay/style/style-2.css';



</style>
