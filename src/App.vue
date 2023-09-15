<template>
      <router-view/>
</template>

<script>

export default {
  name: 'App',
  mounted(){
    if(this.$route.name){
      this.init()
    }
  },
  watch: {
    '$route.name' : function(){
        this.init()
    }
  },
  methods : {
    init(){
      // alert('ok')
      if(this.$route.query.preview){
        this.$root.is_preview = true
      }
      if(this.$route.query.signout){
        this.signOut()
      }
      if(this.$route.name=='sign-in' || this.$route.name=='edit' || this.$route.name==null){
        if(this.$route.name=='edit'){
          this.frontentSettings()
        }
      }else{
        if(this.$route.name!=null){
          this.checkLogin();
        }
      }
    },
    async checkLogin(){
      var is_loggin = false
      if(localStorage.getItem("userInfo"))
      {
        if(localStorage.getItem("userInfo").length>0){
          var userdtls = JSON.parse(localStorage["userInfo"]);
          this.$root.token = userdtls.access
          this.userId = userdtls.user_details.id
          this.$root.userInfo = userdtls.user_details
          is_loggin = true
        }
      }else{
        if(this.$route.query.auth_token){
          if(this.load_setting){
            return false
          }
          this.load_setting = true
          var headers = new Headers();
          headers.append("Authorization", "Bearer "+this.$route.query.auth_token);
          await fetch(this.api_url+'/users/user_data/', {
              method : 'get',
              headers: headers,
          })
          .then((response) => {
            if(response.status==401){
              this.signOut()
            }
            return response.json()
          })
          .then((jsonData) => {
            this.load_setting = false
            jsonData = jsonData.user
            var userdtls = jsonData.user_details
            this.$root.token = jsonData.auth_token
            this.userId = userdtls.id
            this.$root.userInfo = userdtls
            is_loggin = true
          })
        }
      }
      if(!is_loggin){
          localStorage.removeItem("userInfo");
          this.$root.token = ''
          this.userId = ''
          this.$root.userInfo = []
      }
      if(!this.$root.admin_token){
        this.frontentSettings()
      }
    },
    async frontentSettings() {
      var headers = new Headers();
      var domain = window.location.hostname
      var filter = '?theme='+theme_name
      filter += '&domain='+domain
      if(this.$root.token){
        headers.append("Authorization", "Bearer "+this.$root.token);
        filter += '&is_loggin=true'
      }
      if(this.load_setting){
        return false
      }
      this.load_setting = true
      await fetch(this.api_url+'/customer/frontent_settings/'+filter, {
          method : 'get',
          headers: headers,
      })
      .then((response) => {
        if(response.status==401){
          this.signOut()
        }
        return response.json()
      })
      .then((jsonData) => {
        this.load_setting = false
        if(jsonData.success){
          this.$root.admin_token = jsonData.admin_token
          for(var l=0;l<jsonData.logos.length;l++){
            var ln = jsonData.logos[l]
            this.frontent_settings[this.slugify(ln.name)] = this.api_url+ln.image
          }
          this.frontent_settings.name = jsonData.name
          this.social_links = jsonData.social_links
          this.frontent_settings.have_plan = jsonData.have_plan
          this.libary_id = jsonData.libary_id
          if(!this.$route.query.preview && jsonData.platform!='Phone'){
            if(jsonData.login_required){
              if(!jsonData.have_plan && this.$root.token){
                this.$router.push('/plan')
              }
              if(!this.$root.token){
                this.$router.push('/sign-in')
              }
            }
            else if(this.$root.token){
              if(!jsonData.have_plan){
                this.$router.push('/plan')
              }
            }
          }
        }else{

        }
      })
    },
  },
};
</script>
