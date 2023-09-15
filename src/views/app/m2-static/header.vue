
<template>
    <header >
        <a class="header-bar">
            <router-link to="profile" class="d-flex g2 align-items-center" style="height:60px;">
                <img src="/m2/images/profile.png" width="30" height="30">
                <div class="hover-visible" style=" width: calc(100% - 40px);">
                    <h6 class="text-white text-12 mb-1">Nithul</h6>
                    <h6 class="text-10">Switch account</h6>
                </div>
            </router-link>
            <div class="header-menu">
                <a class="header-menu-child active">
                    <img src="/m2/images/search.png" width="20" height="20">
                    <div class="hover-visible" style=" width: calc(100% - 30px);">
                        <h6 class="text-white text-12">Search</h6>
                    </div>
                </a>
                <router-link to="/" class="header-menu-child ">
                    <img src="/m2/images/home.png" width="20" height="20">
                    <div class="hover-visible" style=" width: calc(100% - 30px);">
                        <h6 class="text-white text-12">Home</h6>
                    </div>
                </router-link>
                <a class="header-menu-child ">
                    <img src="/m2/images/movies.png" width="20" height="20">
                    <div class="hover-visible" style=" width: calc(100% - 30px);">
                        <h6 class="text-white text-12">Movies</h6>
                    </div>
                </a>
                <a class="header-menu-child ">
                    <img src="/m2/images/shows.png" width="20" height="20">
                    <div class="hover-visible" style=" width: calc(100% - 30px);">
                        <h6 class="text-white text-12">Shows</h6>
                    </div>
                </a>
                <a class="header-menu-child ">
                    <img src="/m2/images/library.png" width="20" height="20">
                    <div class="hover-visible" style=" width: calc(100% - 30px);">
                        <h6 class="text-white text-12">Library</h6>
                    </div>
                </a>
                
            </div>
            <router-link to="profile" class="d-flex g2 align-items-center header-menu-child " style="height:60px;">
                <img src="/m2/images/settings.png" width="20" height="20">
                <div class="hover-visible" style=" width: calc(100% - 30px);">
                    <h6 class="text-white text-12">Settings</h6>
                </div>
            </router-link>
        </a>
    </header>
</template>

<style scoped>
  @import '/m2/style/style.css';

</style>
