import Vue from "vue";
import store from "./store";
// import {isMobile} from "mobile-device-detect";
import Router from "vue-router";
import NProgress from "nprogress";
// import authenticate from "./auth/authenticate";

Vue.use(Router);

// create new router

var routes = []
if(theme_name=='main'){
  routes = [
    {
      path: "/",
      component: () => import("./views/app/main"),
      redirect: "/",
      children: [
        {
          path: "",
          name: "home",
          component: () => import("./views/app/main/home"),
        },
        {
          path: "plan",
          name: "plan",
          component: () => import("./views/app/main/plan"),
        },
        {
          path: "main",
          name: "main",
          component: () => import("./views/app/main/main"),
        },
      ]
    },
    {
      path: "/edit/:page",
      name: "edit",
      component: () => import("./views/app/main/edit"),
    },
    {
      path: "*",
      component: () => import("./views/app/main/notFound")
    }
  ];
}
else if(theme_name=='videostar'){
  routes = [
    {
      path: "/",
      component: () => import("./views/app/videostar"),
      redirect: "/",
      children: [
        {
          path: "",
          name: "home",
          component: () => import("./views/app/videostar/home"),
        },
        {
          path: "sign-in",
          name: "sign-in",
          component: () => import("./views/app/videostar/sign-in"),
        },
        {
          path: "plan",
          name: "plan",
          component: () => import("./views/app/videostar/plan"),
        },
        {
          path: "profile",
          name: "profile",
          component: () => import("./views/app/videostar/profile"),
        },
        {
          path: "filter/:type/:category?",
          name: "videos",
          component: () => import("./views/app/videostar/movies"),
        },
        {
          path: ":type/:category/:slug",
          name: "video",
          component: () => import("./views/app/videostar/video"),
        },
      ],
    },
    {
      path: "/edit/:page",
      name: "edit",
      component: () => import("./views/app/videostar/edit"),
    },
    {
      path: "*",
      component: () => import("./views/app/videostar/notFound")
    }
  ];
}
else if(theme_name=='videomusic'){
  routes = [
    {
      path: "/",
      component: () => import("./views/app/videomusic"),
      redirect: "/",
      children: [
        {
          path: "",
          name: "home",
          component: () => import("./views/app/videomusic/home"),
        },
        {
          path: "sign-in",
          name: "sign-in",
          component: () => import("./views/app/videomusic/sign-in"),
        },
        {
          path: "plan",
          name: "plan",
          component: () => import("./views/app/videomusic/plan"),
        },
        {
          path: "profile",
          name: "profile",
          component: () => import("./views/app/videomusic/profile"),
        },
        {
          path: "filter/:type/:category?",
          name: "videos",
          component: () => import("./views/app/videomusic/movies"),
        },
        {
          path: "video",
          name: "video",
          component: () => import("./views/app/videomusic/video"),
        },
      ],
    },
    {
      path: "/edit/:page",
      name: "edit",
      component: () => import("./views/app/videomusic/edit"),
    },
    {
      path: "*",
      component: () => import("./views/app/videomusic/notFound")
    }
  ];
}
else if(theme_name=='videofy'){
  routes = [
    {
      path: "/",
      component: () => import("./views/app/videofy"),
      redirect: "/",
      children: [
        {
          path: "",
          name: "home",
          component: () => import("./views/app/videofy/home"),
        },
        {
          path: "sign-in",
          name: "sign-in",
          component: () => import("./views/app/videofy/sign-in"),
        },
        {
          path: "plan",
          name: "plan",
          component: () => import("./views/app/videofy/plan"),
        },
        {
          path: "profile",
          name: "profile",
          component: () => import("./views/app/videofy/profile"),
        },
        {
          path: "filter/:type/:category?",
          name: "videos",
          component: () => import("./views/app/videofy/movies"),
        },
        {
          path: "video",
          name: "video",
          component: () => import("./views/app/videofy/video"),
        },
      ],
    },
    {
      path: "/edit/:page",
      name: "edit",
      component: () => import("./views/app/videofy/edit"),
    },
    {
      path: "*",
      component: () => import("./views/app/videofy/notFound")
    }
  ];
}
else if(theme_name=='videostar_mobile'){
  routes = [
    {
      path: "/",
      component: () => import("./views/app/videostar_mobile"),
      redirect: "/",
      children: [
        {
          path: "",
          name: "home",
          component: () => import("./views/app/videostar_mobile/home"),
        },
        {
          path: "plan",
          name: "plan",
          component: () => import("./views/app/videostar_mobile/plan"),
        },
        {
          path: "sign-in",
          name: "sign-in",
          component: () => import("./views/app/videostar_mobile/sign-in"),
        },
       
      ]
    },
    {
      path: "/edit/:page",
      name: "edit",
      component: () => import("./views/app/videostar_mobile/edit"),
    },
    {
      path: "*",
      component: () => import("./views/app/videostar_mobile/notFound")
    }
  ];
}
else if(theme_name=='videozone_web'){
  routes = [
    {
      path: "/",
      component: () => import("./views/app/videozone_web"),
      redirect: "/",
      children: [
        {
          path: "",
          name: "home",
          component: () => import("./views/app/videozone_web/home"),
        },
        {
          path: "sign-in",
          name: "sign-in",
          component: () => import("./views/app/videozone_web/sign-in"),
        },
        {
          path: "plan",
          name: "plan",
          component: () => import("./views/app/videozone_web/plan"),
        },
        {
          path: "main",
          name: "main",
          component: () => import("./views/app/videozone_web/main"),
        },
        {
          path: "watching/:video_id/:type/:category/:slug",
          name: "video",
          component: () => import("./views/app/videozone_web/video"),
        },
      ],
    },
    {
      path: "/edit/:page",
      name: "edit",
      component: () => import("./views/app/videozone_web/edit"),
    },
    {
      path: "*",
      component: () => import("./views/app/videozone_web/notFound")
    }
  ];
}
else if(theme_name=='videozone_app'){
  routes = [
    {
      path: "/",
      component: () => import("./views/app/videozone_app"),
      redirect: "/",
      children: [
        {
          path: "",
          name: "home",
          component: () => import("./views/app/videozone_app/home"),
        },
        {
          path: "sign-in",
          name: "sign-in",
          component: () => import("./views/app/videozone_app/sign-in"),
        },
        {
          path: "main",
          name: "main",
          component: () => import("./views/app/videozone_app/main"),
        },
        {
          path: "video",
          name: "video",
          component: () => import("./views/app/videozone_app/video"),
        },
        {
          path: "plan",
          name: "plan",
          component: () => import("./views/app/videozone_app/plan"),
        },
      ],
    },
    {
      path: "/edit/:page",
      name: "edit",
      component: () => import("./views/app/videozone_app/edit"),
    },
    {
      path: "*",
      component: () => import("./views/app/videozone_app/notFound")
    }
  ];
}
else if(theme_name=='videoflix_mobile'){
  routes = [
    {
      path: "/",
      component: () => import("./views/app/videoflix_mobile"),
      redirect: "/",
      children: [
        {
          path: "",
          name: "home",
          component: () => import("./views/app/videoflix_mobile/home"),
        },
        {
          path: "signin",
          name: "signin",
          component: () => import("./views/app/videoflix_mobile/signin"),
        },
        {
          path: "profile",
          name: "profile",
          component: () => import("./views/app/videoflix_mobile/profile"),
        },
        {
          path: "main",
          name: "main",
          component: () => import("./views/app/videoflix_mobile/main"),
        },
        {
          path: "plan",
          name: "plan",
          component: () => import("./views/app/videoflix_mobile/plan"),
        },
      ],
    },
    {
      path: "/edit/:page",
      name: "edit",
      component: () => import("./views/app/videoflix_mobile/edit"),
    },
    {
      path: "*",
      component: () => import("./views/app/videoflix_mobile/notFound")
    }
  ];
}
else if(theme_name=='videoflix_app'){
  routes = [
    {
      path: "/",
      component: () => import("./views/app/videoflix_app"),
      redirect: "/",
      children: [
        {
          path: "",
          name: "home",
          component: () => import("./views/app/videoflix_app/home"),
        },
        {
          path: "signin",
          name: "signin",
          component: () => import("./views/app/videoflix_app/signin"),
        },
        {
          path: "profile",
          name: "profile",
          component: () => import("./views/app/videoflix_app/profile"),
        },
        {
          path: "main",
          name: "main",
          component: () => import("./views/app/videoflix_app/main"),
        },
        {
          path: "plan",
          name: "plan",
          component: () => import("./views/app/videoflix_app/plan"),
        },
       
      ],
    },
    {
      path: "/edit/:page",
      name: "edit",
      component: () => import("./views/app/videoflix_app/edit"),
    },
    {
      path: "*",
      component: () => import("./views/app/videoflix_app/notFound")
    }
  ];
}
else if(theme_name=='videoflix_web'){
  routes = [
    {
      path: "/",
      component: () => import("./views/app/videoflix_web"),
      redirect: "/",
      children: [
        {
          path: "",
          name: "home",
          component: () => import("./views/app/videoflix_web/home"),
        },
        {
          path: "sign-in",
          name: "sign-in",
          component: () => import("./views/app/videoflix_web/sign-in"),
        },
        {
          path: "login-help",
          name: "login-help",
          component: () => import("./views/app/videoflix_web/login-help"),
        },
        {
          path: "sign-up",
          name: "registration",
          component: () => import("./views/app/videoflix_web/registration-1"),
        },
        {
          path: "plan",
          name: "plan",
          component: () => import("./views/app/videoflix_web/plan"),
        },
        {
          path: "profile",
          name: "profile",
          component: () => import("./views/app/videoflix_web/profile"),
        },
        {
          path: "watching/:video_id/:type/:category/:slug",
          name: "watching",
          component: () => import("./views/app/videoflix_web/watching"),
        },
        {
          path: "main",
          name: "main",
          component: () => import("./views/app/videoflix_web/main"),
        },
        {
          path: "video-details",
          name: "video-details",
          component: () => import("./views/app/videoflix_web/video-details"),
        },
        {
          path: "video",
          name: "video",
          component: () => import("./views/app/videoflix_web/video"),
        },

      ],
    },
    {
      path: "/edit/:page",
      name: "edit",
      component: () => import("./views/app/videoflix_web/edit"),
    },
    {
      path: "*",
      component: () => import("./views/app/videoflix_web/notFound")
    }
  ];
}
else if(theme_name=='videotube'){
  routes = [
    {
      path: "/",
      component: () => import("./views/app/videotube"),
      redirect: "/",
      children: [
        {
          path: "",
          name: "home",
          component: () => import("./views/app/videotube/home"),
        },
        {
          path: "playing",
          name: "playing",
          component: () => import("./views/app/videotube/playing"),
          
        },
        {
          path: "plan",
          name: "plan",
          component: () => import("./views/app/videotube/plan"),
          
        },
        {
          path: "sign-in",
          name: "sign-in",
          component: () => import("./views/app/videotube/sign-in"),
          
        },
      ],
    },
    {
      path: "/edit/:page",
      name: "edit",
      component: () => import("./views/app/videotube/edit"),
    },
    {
      path: "*",
      component: () => import("./views/app/videotube/notFound")
    }
  ];
}
else if(theme_name=='videotube_app'){
  routes = [
    {
      path: "/",
      component: () => import("./views/app/videotube_app"),
      redirect: "/",
      children: [
        {
          path: "",
          name: "home",
          component: () => import("./views/app/videotube_app/home"),
        },
        {
          path: "playing",
          name: "playing",
          component: () => import("./views/app/videotube_app/playing"),
          
        },
        {
          path: "plan",
          name: "plan",
          component: () => import("./views/app/videotube_app/plan"),
          
        },
        {
          path: "sign-in",
          name: "sign-in",
          component: () => import("./views/app/videotube_app/sign-in"),
        },
          
      ],
    },
    {
      path: "/edit/:page",
      name: "edit",
      component: () => import("./views/app/videotube_app/edit"),
    },
    {
      path: "*",
      component: () => import("./views/app/videotube_app/notFound")
    }
  ];
}
else if(theme_name=='vid_theme'){
  routes = [
    {
      path: "/",
      component: () => import("./views/app/vid_theme"),
      redirect: "/",
      children: [
        {
          path: "",
          name: "home",
          component: () => import("./views/app/vid_theme/home"),
        },
        {
          path: "sign-in",
          name: "sign-in",
          component: () => import("./views/app/vid_theme/sign-in"),
        },
        {
          path: "plan",
          name: "plan",
          component: () => import("./views/app/vid_theme/plan"),
        },
        {
          path: "profile",
          name: "profile",
          component: () => import("./views/app/vid_theme/profile"),
        },
        {
          path: "filter/:type/:category?",
          name: "videos",
          component: () => import("./views/app/vid_theme/movies"),
        },
        {
          path: ":type/:category/:slug",
          name: "video",
          component: () => import("./views/app/vid_theme/video"),
        },
      ],
    },
    {
      path: "/edit/:page",
      name: "edit",
      component: () => import("./views/app/vid_theme/edit"),
    },
    {
      path: "*",
      component: () => import("./views/app/vid_theme/notFound")
    }
  ];
}
else if(theme_name=='t1_light'){
  routes = [
    {
      path: "/",
      component: () => import("./views/app/t1_light"),
      redirect: "/",
      children: [
        {
          path: "",
          name: "home",
          component: () => import("./views/app/t1_light/home"),
        },
        {
          path: "sign-in",
          name: "sign-in",
          component: () => import("./views/app/t1_light/sign-in"),
        },
        {
          path: "plan",
          name: "plan",
          component: () => import("./views/app/t1_light/plan"),
        },
        {
          path: "profile",
          name: "profile",
          component: () => import("./views/app/t1_light/profile"),
        },
        {
          path: "filter/:type/:category?",
          name: "videos",
          component: () => import("./views/app/t1_light/movies"),
        },
        {
          path: ":type/:category/:slug",
          name: "video",
          component: () => import("./views/app/t1_light/video"),
        },
      ],
    },
    {
      path: "/edit/:page",
      name: "edit",
      component: () => import("./views/app/t1_light/edit"),
    },
    {
      path: "*",
      component: () => import("./views/app/t1_light/notFound")
    }
  ];
}
else if(theme_name=='vid_theme_mobile'){
  routes = [
    {
      path: "/",
      component: () => import("./views/app/vid_theme_mobile"),
      redirect: "/",
      children: [
        {
          path: "",
          name: "home",
          component: () => import("./views/app/vid_theme_mobile/home"),
        },
        {
          path: "sign-in",
          name: "sign-in",
          component: () => import("./views/app/vid_theme_mobile/sign-in"),
        },
        {
          path: "plan",
          name: "plan",
          component: () => import("./views/app/vid_theme_mobile/plan"),
        },
        {
          path: "profile",
          name: "profile",
          component: () => import("./views/app/vid_theme_mobile/profile"),
        },
        {
          path: "filter/:type/:category?",
          name: "videos",
          component: () => import("./views/app/vid_theme_mobile/movies"),
        },
        {
          path: ":type/:category/:slug",
          name: "video",
          component: () => import("./views/app/vid_theme_mobile/video"),
        },
      ],
    },
    {
      path: "/edit/:page",
      name: "edit",
      component: () => import("./views/app/vid_theme_mobile/edit"),
    },
    {
      path: "*",
      component: () => import("./views/app/vid_theme_mobile/notFound")
    }
  ];
}
else if(theme_name=='vid_theme_app'){
  routes = [
    {
      path: "/",
      component: () => import("./views/app/vid_theme_app"),
      redirect: "/",
      children: [
        {
          path: "",
          name: "home",
          component: () => import("./views/app/vid_theme_app/home"),
        },
        {
          path: "sign-in",
          name: "sign-in",
          component: () => import("./views/app/vid_theme_app/sign-in"),
        },
        {
          path: "plan",
          name: "plan",
          component: () => import("./views/app/vid_theme_app/plan"),
        },
        {
          path: "profile",
          name: "profile",
          component: () => import("./views/app/vid_theme_app/profile"),
        },
        {
          path: "filter/:type/:category?",
          name: "videos",
          component: () => import("./views/app/vid_theme_app/movies"),
        },
        {
          path: ":type/:category/:slug",
          name: "video",
          component: () => import("./views/app/vid_theme_app/video"),
        },
      ],
    },
    {
      path: "/edit/:page",
      name: "edit",
      component: () => import("./views/app/vid_theme_app/edit"),
    },
    {
      path: "*",
      component: () => import("./views/app/vid_theme_app/notFound")
    }
  ];
}
else if(theme_name=='video_live_app'){
  routes = [
    {
      path: "/",
      component: () => import("./views/app/video_live_app"),
      redirect: "/",
      children: [
        {
          path: "",
          name: "home",
          component: () => import("./views/app/video_live_app/home"),
        },
        {
          path: "sign-in",
          name: "sign-in",
          component: () => import("./views/app/video_live_app/sign-in"),
        },
        {
          path: "plan",
          name: "plan",
          component: () => import("./views/app/video_live_app/plan"),
        },
        {
          path: "profile",
          name: "profile",
          component: () => import("./views/app/video_live_app/profile"),
        },
        {
          path: "filter/:type/:category?",
          name: "videos",
          component: () => import("./views/app/video_live_app/movies"),
        },
        {
          path: ":type/:category/:slug",
          name: "video",
          component: () => import("./views/app/video_live_app/video"),
        },
      ],
    },
    {
      path: "/edit/:page",
      name: "edit",
      component: () => import("./views/app/video_live_app/edit"),
    },
    {
      path: "*",
      component: () => import("./views/app/video_live_app/notFound")
    }
  ];
}
else if(theme_name=='video_tv_app'){
  routes = [
    {
      path: "/",
      component: () => import("./views/app/video_tv_app"),
      redirect: "/",
      children: [
        {
          path: "",
          name: "home",
          component: () => import("./views/app/video_tv_app/home"),
        },
        {
          path: "sign-in",
          name: "sign-in",
          component: () => import("./views/app/video_tv_app/sign-in"),
        },
        {
          path: "plan",
          name: "plan",
          component: () => import("./views/app/video_tv_app/plan"),
        },
        {
          path: "profile",
          name: "profile",
          component: () => import("./views/app/video_tv_app/profile"),
        },
        {
          path: "filter/:type/:category?",
          name: "videos",
          component: () => import("./views/app/video_tv_app/movies"),
        },
        {
          path: ":type/:category/:slug",
          name: "video",
          component: () => import("./views/app/video_tv_app/video"),
        },
      ],
    },
    {
      path: "/edit/:page",
      name: "edit",
      component: () => import("./views/app/video_tv_app/edit"),
    },
    {
      path: "*",
      component: () => import("./views/app/video_tv_app/notFound")
    }
  ];
}
else if(theme_name=='videomusic_app'){
  routes = [
    {
      path: "/",
      component: () => import("./views/app/videomusic_app"),
      redirect: "/",
      children: [
        {
          path: "",
          name: "home",
          component: () => import("./views/app/videomusic_app/home"),
        },
        {
          path: "sign-in",
          name: "sign-in",
          component: () => import("./views/app/videomusic_app/sign-in"),
        },
        {
          path: "plan",
          name: "plan",
          component: () => import("./views/app/videomusic_app/plan"),
        },
        {
          path: "profile",
          name: "profile",
          component: () => import("./views/app/videomusic_app/profile"),
        },
        {
          path: "filter/:type/:category?",
          name: "videos",
          component: () => import("./views/app/videomusic_app/movies"),
        },
        {
          path: "/video",
          name: "video",
          component: () => import("./views/app/videomusic_app/video"),
        },
      ],
    },
    {
      path: "/edit/:page",
      name: "edit",
      component: () => import("./views/app/videomusic_app/edit"),
    },
    {
      path: "*",
      component: () => import("./views/app/videomusic_app/notFound")
    }
  ];
}
else if(theme_name=='videogama_app'){
  routes = [
    {
      path: "/",
      component: () => import("./views/app/videogama_app"),
      redirect: "/",
      children: [
        {
          path: "",
          name: "home",
          component: () => import("./views/app/videogama_app/home"),
        },
        {
          path: "sign-in",
          name: "sign-in",
          component: () => import("./views/app/videogama_app/sign-in"),
        },
        {
          path: "plan",
          name: "plan",
          component: () => import("./views/app/videogama_app/plan"),
        },
        {
          path: "profile",
          name: "profile",
          component: () => import("./views/app/videogama_app/profile"),
        },
        {
          path: "filter/:type/:category?",
          name: "videos",
          component: () => import("./views/app/videogama_app/movies"),
        },
        {
          path: ":type/:category/:slug",
          name: "video",
          component: () => import("./views/app/videogama_app/video"),
        },
      ],
    },
    {
      path: "/edit/:page",
      name: "edit",
      component: () => import("./views/app/videogama_app/edit"),
    },
    {
      path: "*",
      component: () => import("./views/app/videogama_app/notFound")
    }
  ];
}
else if(theme_name=='vspn'){
  routes = [
    {
      path: "/",
      component: () => import("./views/app/vspn"),
      redirect: "/",
      children: [
        {
          path: "",
          name: "home",
          component: () => import("./views/app/vspn/home"),
        },
        {
          path: "sign-in",
          name: "sign-in",
          component: () => import("./views/app/vspn/sign-in"),
        },
        {
          path: "plan",
          name: "plan",
          component: () => import("./views/app/vspn/plan"),
        },
        {
          path: "profile",
          name: "profile",
          component: () => import("./views/app/vspn/profile"),
        },
        {
          path: "filter/:type/:category?",
          name: "videos",
          component: () => import("./views/app/vspn/movies"),
        },
        {
          path: ":type/:category/:slug",
          name: "video",
          component: () => import("./views/app/vspn/video"),
        },
      ],
    },
    {
      path: "/edit/:page",
      name: "edit",
      component: () => import("./views/app/vspn/edit"),
    },
    {
      path: "*",
      component: () => import("./views/app/vspn/notFound")
    }
  ];
}
else if(theme_name=='video_cinema_mobile'){
  routes = [
    {
      path: "/",
      component: () => import("./views/app/video_cinema_mobile"),
      redirect: "/",
      children: [
        {
          path: "",
          name: "home",
          component: () => import("./views/app/video_cinema_mobile/home"),
        },
        {
          path: "sign-in",
          name: "sign-in",
          component: () => import("./views/app/video_cinema_mobile/sign-in"),
        },
        {
          path: "plan",
          name: "plan",
          component: () => import("./views/app/video_cinema_mobile/plan"),
        },
        {
          path: "profile",
          name: "profile",
          component: () => import("./views/app/video_cinema_mobile/profile"),
        },
        {
          path: "filter/:type/:category?",
          name: "videos",
          component: () => import("./views/app/video_cinema_mobile/movies"),
        },
        {
          path: ":type/:category/:slug",
          name: "video",
          component: () => import("./views/app/video_cinema_mobile/video"),
        },
      ],
    },
    {
      path: "/edit/:page",
      name: "edit",
      component: () => import("./views/app/video_cinema_mobile/edit"),
    },
    {
      path: "*",
      component: () => import("./views/app/video_cinema_mobile/notFound")
    }
  ];
}
else if(theme_name=='videocinema_app'){
  routes = [
    {
      path: "/",
      component: () => import("./views/app/videocinema_app"),
      redirect: "/",
      children: [
        {
          path: "",
          name: "home",
          component: () => import("./views/app/videocinema_app/home"),
        },
        {
          path: "sign-in",
          name: "sign-in",
          component: () => import("./views/app/videocinema_app/sign-in"),
        },
        {
          path: "plan",
          name: "plan",
          component: () => import("./views/app/videocinema_app/plan"),
        },
        {
          path: "profile",
          name: "profile",
          component: () => import("./views/app/videocinema_app/profile"),
        },
        {
          path: "filter/:type/:category?",
          name: "videos",
          component: () => import("./views/app/videocinema_app/movies"),
        },
        {
          path: ":type/:category/:slug",
          name: "video",
          component: () => import("./views/app/videocinema_app/video"),
        },
      ],
    },
    {
      path: "/edit/:page",
      name: "edit",
      component: () => import("./views/app/videocinema_app/edit"),
    },
    {
      path: "*",
      component: () => import("./views/app/videocinema_app/notFound")
    }
  ];
}
else if(theme_name=='videoplayer'){
  routes = [
    {
      path: "/",
      component: () => import("./views/app/videoplayer"),
      redirect: "/",
      children: [
        {
          path: "",
          name: "home",
          component: () => import("./views/app/videoplayer/home"),
        },
        {
          path: "sign-in",
          name: "sign-in",
          component: () => import("./views/app/videoplayer/sign-in"),
        },
        {
          path: "plan",
          name: "plan",
          component: () => import("./views/app/videoplayer/plan"),
        },
        {
          path: "profile",
          name: "profile",
          component: () => import("./views/app/videoplayer/profile"),
        },
        {
          path: "filter/:type/:category?",
          name: "videos",
          component: () => import("./views/app/videoplayer/movies"),
        },
        {
          path: ":type/:category/:slug",
          name: "video",
          component: () => import("./views/app/videoplayer/video"),
        },
      ],
    },
    {
      path: "/edit/:page",
      name: "edit",
      component: () => import("./views/app/videoplayer/edit"),
    },
    {
      path: "*",
      component: () => import("./views/app/videoplayer/notFound")
    }
  ];
}
else if(theme_name=='video_player_mobile'){
  routes = [
    {
      path: "/",
      component: () => import("./views/app/video_player_mobile"),
      redirect: "/",
      children: [
        {
          path: "",
          name: "home",
          component: () => import("./views/app/video_player_mobile/home"),
        },
        {
          path: "sign-in",
          name: "sign-in",
          component: () => import("./views/app/video_player_mobile/sign-in"),
        },
        {
          path: "plan",
          name: "plan",
          component: () => import("./views/app/video_player_mobile/plan"),
        },
        {
          path: "profile",
          name: "profile",
          component: () => import("./views/app/video_player_mobile/profile"),
        },
        {
          path: "filter/:type/:category?",
          name: "videos",
          component: () => import("./views/app/video_player_mobile/movies"),
        },
        {
          path: ":type/:category/:slug",
          name: "video",
          component: () => import("./views/app/video_player_mobile/video"),
        },
      ],
    },
    {
      path: "/edit/:page",
      name: "edit",
      component: () => import("./views/app/video_player_mobile/edit"),
    },
    {
      path: "*",
      component: () => import("./views/app/video_player_mobile/notFound")
    }
  ];
}
else if(theme_name=='video_next_mobile'){
  routes = [
    {
      path: "/",
      component: () => import("./views/app/video_next_mobile"),
      redirect: "/",
      children: [
        {
          path: "",
          name: "home",
          component: () => import("./views/app/video_next_mobile/home"),
        },
        {
          path: "sign-in",
          name: "sign-in",
          component: () => import("./views/app/video_next_mobile/sign-in"),
        },
        {
          path: "plan",
          name: "plan",
          component: () => import("./views/app/video_next_mobile/plan"),
        },
        {
          path: "profile",
          name: "profile",
          component: () => import("./views/app/video_next_mobile/profile"),
        },
        {
          path: "filter/:type/:category?",
          name: "videos",
          component: () => import("./views/app/video_next_mobile/movies"),
        },
        {
          path: ":type/:category/:slug",
          name: "video",
          component: () => import("./views/app/video_next_mobile/video"),
        },
      ],
    },
    {
      path: "/edit/:page",
      name: "edit",
      component: () => import("./views/app/video_next_mobile/edit"),
    },
    {
      path: "*",
      component: () => import("./views/app/video_next_mobile/notFound")
    }
  ];
}
else if(theme_name=='video_next_app'){
  routes = [
    {
      path: "/",
      component: () => import("./views/app/video_next_app"),
      redirect: "/",
      children: [
        {
          path: "",
          name: "home",
          component: () => import("./views/app/video_next_app/home"),
        },
        {
          path: "sign-in",
          name: "sign-in",
          component: () => import("./views/app/video_next_app/sign-in"),
        },
        {
          path: "plan",
          name: "plan",
          component: () => import("./views/app/video_next_app/plan"),
        },
        {
          path: "profile",
          name: "profile",
          component: () => import("./views/app/video_next_app/profile"),
        },
        {
          path: "filter/:type/:category?",
          name: "videos",
          component: () => import("./views/app/video_next_app/movies"),
        },
        {
          path: ":type/:category/:slug",
          name: "video",
          component: () => import("./views/app/video_next_app/video"),
        },
      ],
    },
    {
      path: "/edit/:page",
      name: "edit",
      component: () => import("./views/app/video_next_app/edit"),
    },
    {
      path: "*",
      component: () => import("./views/app/video_next_app/notFound")
    }
  ];
}
else if(theme_name=='videopage'){
  routes = [
    {
      path: "/",
      component: () => import("./views/app/videopage"),
      redirect: "/",
      children: [
        {
          path: "",
          name: "home",
          component: () => import("./views/app/videopage/home"),
        },
        {
          path: "sign-in",
          name: "sign-in",
          component: () => import("./views/app/videopage/sign-in"),
        },
        {
          path: "plan",
          name: "plan",
          component: () => import("./views/app/videopage/plan"),
        },
        {
          path: "profile",
          name: "profile",
          component: () => import("./views/app/videopage/profile"),
        },
        {
          path: "filter/:type/:category?",
          name: "videos",
          component: () => import("./views/app/videopage/movies"),
        },
        {
          path: ":type/:category/:slug",
          name: "video",
          component: () => import("./views/app/videopage/video"),
        },
      ],
    },
    {
      path: "/edit/:page",
      name: "edit",
      component: () => import("./views/app/videopage/edit"),
    },
    {
      path: "*",
      component: () => import("./views/app/videopage/notFound")
    }
  ];
}
else if(theme_name=='video_tv'){
  routes = [
    {
      path: "/",
      component: () => import("./views/app/video_tv"),
      redirect: "/",
      children: [
        {
          path: "",
          name: "home",
          component: () => import("./views/app/video_tv/home"),
        },
        {
          path: "sign-in",
          name: "sign-in",
          component: () => import("./views/app/video_tv/sign-in"),
        },
        {
          path: "plan",
          name: "plan",
          component: () => import("./views/app/video_tv/plan"),
        },
        {
          path: "profile",
          name: "profile",
          component: () => import("./views/app/video_tv/profile"),
        },
        {
          path: "filter/:type/:category?",
          name: "videos",
          component: () => import("./views/app/video_tv/movies"),
        },
        {
          path: ":type/:category/:slug",
          name: "video",
          component: () => import("./views/app/video_tv/video"),
        },
      ],
    },
    {
      path: "/edit/:page",
      name: "edit",
      component: () => import("./views/app/video_tv/edit"),
    },
    {
      path: "*",
      component: () => import("./views/app/video_tv/notFound")
    }
  ];
}
else if(theme_name=='videopage_mobile'){
  routes = [
    {
      path: "/",
      component: () => import("./views/app/videopage_mobile"),
      redirect: "/",
      children: [
        {
          path: "",
          name: "home",
          component: () => import("./views/app/videopage_mobile/home"),
        },
        {
          path: "sign-in",
          name: "sign-in",
          component: () => import("./views/app/videopage_mobile/sign-in"),
        },
        {
          path: "plan",
          name: "plan",
          component: () => import("./views/app/videopage_mobile/plan"),
        },
        {
          path: "profile",
          name: "profile",
          component: () => import("./views/app/videopage_mobile/profile"),
        },
        {
          path: "filter/:type/:category?",
          name: "videos",
          component: () => import("./views/app/videopage_mobile/movies"),
        },
        {
          path: ":type/:category/:slug",
          name: "video",
          component: () => import("./views/app/videopage_mobile/video"),
        },
      ],
    },
    {
      path: "/edit/:page",
      name: "edit",
      component: () => import("./views/app/videopage_mobile/edit"),
    },
    {
      path: "*",
      component: () => import("./views/app/videopage_mobile/notFound")
    }
  ];
}
else if(theme_name=='videogate'){
  routes = [
    {
      path: "/",
      component: () => import("./views/app/videogate"),
      redirect: "/",
      children: [
        {
          path: "",
          name: "home",
          component: () => import("./views/app/videogate/home"),
        },
        {
          path: "sign-in",
          name: "sign-in",
          component: () => import("./views/app/videogate/sign-in"),
        },
        {
          path: "plan",
          name: "plan",
          component: () => import("./views/app/videogate/plan"),
        },
        {
          path: "profile",
          name: "profile",
          component: () => import("./views/app/videogate/profile"),
        },
        {
          path: "filter/:type/:category?",
          name: "videos",
          component: () => import("./views/app/videogate/movies"),
        },
        {
          path: ":type/:category/:slug",
          name: "video",
          component: () => import("./views/app/videogate/video"),
        },
      ],
    },
    {
      path: "/edit/:page",
      name: "edit",
      component: () => import("./views/app/videogate/edit"),
    },
    {
      path: "*",
      component: () => import("./views/app/videogate/notFound")
    }
  ];
}
else if(theme_name=='videoplay'){
  routes = [
    {
      path: "/",
      component: () => import("./views/app/videoplay"),
      redirect: "/",
      children: [
        {
          path: "",
          name: "home",
          component: () => import("./views/app/videoplay/home"),
        },
        {
          path: "sign-in",
          name: "sign-in",
          component: () => import("./views/app/videoplay/sign-in"),
        },
        {
          path: "plan",
          name: "plan",
          component: () => import("./views/app/videoplay/plan"),
        },
        {
          path: "profile",
          name: "profile",
          component: () => import("./views/app/videoplay/profile"),
        },
        {
          path: "filter/:type/:category?",
          name: "videos",
          component: () => import("./views/app/videoplay/movies"),
        },
        {
          path: ":type/:category/:slug",
          name: "video",
          component: () => import("./views/app/videoplay/video"),
        },
      ],
    },
    {
      path: "/edit/:page",
      name: "edit",
      component: () => import("./views/app/videoplay/edit"),
    },
    {
      path: "*",
      component: () => import("./views/app/videoplay/notFound")
    }
  ];
}
else if(theme_name=='videoot'){
  routes = [
    {
      path: "/",
      component: () => import("./views/app/videoot"),
      redirect: "/",
      children: [
        {
          path: "",
          name: "home",
          component: () => import("./views/app/videoot/home"),
        },
        {
          path: "sign-in",
          name: "sign-in",
          component: () => import("./views/app/videoot/sign-in"),
        },
        {
          path: "plan",
          name: "plan",
          component: () => import("./views/app/videoot/plan"),
        },
        {
          path: "profile",
          name: "profile",
          component: () => import("./views/app/videoot/profile"),
        },
        {
          path: "filter/:type/:category?",
          name: "videos",
          component: () => import("./views/app/videoot/movies"),
        },
        {
          path: ":type/:category/:slug",
          name: "video",
          component: () => import("./views/app/videoot/video"),
        },
      ],
    },
    {
      path: "/edit/:page",
      name: "edit",
      component: () => import("./views/app/videoot/edit"),
    },
    {
      path: "*",
      component: () => import("./views/app/videoot/notFound")
    }
  ];
}
else if(theme_name=='videot_mobile'){
  routes = [
    {
      path: "/",
      component: () => import("./views/app/videot_mobile"),
      redirect: "/",
      children: [
        {
          path: "",
          name: "home",
          component: () => import("./views/app/videot_mobile/home"),
        },
        {
          path: "sign-in",
          name: "sign-in",
          component: () => import("./views/app/videot_mobile/sign-in"),
        },
        {
          path: "plan",
          name: "plan",
          component: () => import("./views/app/videot_mobile/plan"),
        },
        {
          path: "profile",
          name: "profile",
          component: () => import("./views/app/videot_mobile/profile"),
        },
        {
          path: "filter/:type/:category?",
          name: "videos",
          component: () => import("./views/app/videot_mobile/movies"),
        },
        {
          path: ":type/:category/:slug",
          name: "video",
          component: () => import("./views/app/videot_mobile/video"),
        },
      ],
    },
    {
      path: "/edit/:page",
      name: "edit",
      component: () => import("./views/app/videot_mobile/edit"),
    },
    {
      path: "*",
      component: () => import("./views/app/videot_mobile/notFound")
    }
  ];
}
else if(theme_name=='c1'){
  routes = [
    {
      path: "/",
      component: () => import("./views/app/c1"),
      redirect: "/",
      children: [
        {
          path: "",
          name: "home",
          component: () => import("./views/app/c1/home"),
        },
        {
          path: "sign-in",
          name: "sign-in",
          component: () => import("./views/app/c1/sign-in"),
        },
        {
          path: "plan",
          name: "plan",
          component: () => import("./views/app/c1/plan"),
        },
        {
          path: "profile",
          name: "profile",
          component: () => import("./views/app/c1/profile"),
        },
        {
          path: "filter/:type/:category?",
          name: "videos",
          component: () => import("./views/app/c1/movies"),
        },
        {
          path: ":type/:category/:slug",
          name: "video",
          component: () => import("./views/app/c1/video"),
        },
      ],
    },
    {
      path: "/edit/:page",
      name: "edit",
      component: () => import("./views/app/c1/edit"),
    },
    {
      path: "*",
      component: () => import("./views/app/c1/notFound")
    }
  ];
}
else if(theme_name=='m1'){
  routes = [
    {
      path: "/",
      component: () => import("./views/app/m1"),
      redirect: "/",
      children: [
        {
          path: "",
          name: "home",
          component: () => import("./views/app/m1/home"),
        },
        {
          path: "qr-login",
          name: "sign-in",
          component: () => import("./views/app/m1/qr-login"),
        },
        {
          path: "sign-in",
          name: "login-in",
          component: () => import("./views/app/m1/sign-in"),
        },
        {
          path: "plan",
          name: "plan",
          component: () => import("./views/app/m1/plan"),
        },
        {
          path: "profile",
          name: "profile",
          component: () => import("./views/app/m1/profile"),
        },
        {
          path: "categories",
          name: "categories",
          component: () => import("./views/app/m1/categories"),
        },
        {
          path: "favorites",
          name: "favorites",
          component: () => import("./views/app/m1/search"),
        },
        {
          path: "filter/:type/:category?",
          name: "videos",
          component: () => import("./views/app/m1/movies"),
        },
        {
          path: ":type/:category/:slug",
          name: "video",
          component: () => import("./views/app/m1/video"),
        },
      ],
    },
    {
      path: "/edit/:page",
      name: "edit",
      component: () => import("./views/app/m1/edit"),
    },
    {
      path: "*",
      component: () => import("./views/app/m1/notFound")
    }
  ];
}
else if(theme_name=='m2'){
  routes = [
    {
      path: "/",
      component: () => import("./views/app/m2"),
      redirect: "/",
      children: [
        {
          path: "",
          name: "home",
          component: () => import("./views/app/m2/home"),
        },
        {
          path: "profile",
          name: "profile",
          component: () => import("./views/app/m2/profile"),
        },
        {
          path: "login",
          name: "login",
          component: () => import("./views/app/m2/login"),
        },
        
      ],
    },
  ];
}
else if(theme_name=='crystal-clear'){
  routes = [
    {
      path: "/",
      component: () => import("./views/app/crystal-clear"),
      redirect: "/",
      children: [
        {
          path: "",
          name: "home",
          component: () => import("./views/app/crystal-clear/home"),
        },
        {
          path: "profile",
          name: "profile",
          component: () => import("./views/app/crystal-clear/profile"),
        },
        {
          path: "sign-in",
          name: "sign-in",
          component: () => import("./views/app/crystal-clear/sign-in"),
        },
        {
          path: "registration-1",
          name: "registration-1",
          component: () => import("./views/app/crystal-clear/registration-1"),
        },
        {
          path: "edit",
          name: "edit",
          component: () => import("./views/app/crystal-clear/edit"),
        },
        {
          path: "footer",
          name: "footer",
          component: () => import("./views/app/crystal-clear/footer"),
        },
        {
          path: "header",
          name: "header",
          component: () => import("./views/app/crystal-clear/header"),
        },
        {
          path: "movies",
          name: "movies",
          component: () => import("./views/app/crystal-clear/movies"),
        },
        {
          path: "notFound",
          name: "notFound",
          component: () => import("./views/app/crystal-clear/notFound"),
        },
        {
          path: "plan",
          name: "plan",
          component: () => import("./views/app/crystal-clear/plan"),
        },
        {
          path: "video",
          name: "video",
          component: () => import("./views/app/crystal-clear/video"),
        },
        {
          path: "homecollapsed",
          name: "homecollapsed",
          component: () => import("./views/app/crystal-clear/homecollapsed"),
        },
        {
          path: "sidebar",
          name: "sidebar",
          component: () => import("./views/app/crystal-clear/sidebar"),
        },
        {
          path: "watching/:video_id/:type/:category/:slug",
          name: "watching",
          component: () => import("./views/app/crystal-clear/watching"),
        },
        
      ],
    },
  ];
}
else{
  routes = []
}

const router = new Router({
  mode: "history",
  linkActiveClass: "open",
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {x: 0, y: 0};
  }
});

router.beforeEach((to, from, next) => {
  // If this isn't an initial page load.
  if (to.path) {
    // Start the route progress bar.

    NProgress.start();
    NProgress.set(0.1);
  }
  next();
});

router.afterEach(() => {
  // Remove initial loading
  const gullPreLoading = document.getElementById("loading_wrap");
  if (gullPreLoading) {
    gullPreLoading.style.display = "none";
  }
  // Complete the animation of the route progress bar.
  setTimeout(() => NProgress.done(), 500);
});

export default router;
