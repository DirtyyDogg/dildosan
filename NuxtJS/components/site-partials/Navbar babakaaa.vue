<template>
<div class="fluit-container">


  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand tag="router-link" :to="{ path: '/' }">NavBar</b-navbar-brand>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template v-slot:default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="justify"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item tag="router-link" :to="{ path: '/' }" exact-active-class="active">Home</b-nav-item>
        <b-nav-item tag="router-link" :to="{ path: '/over-ons' }" exact-active-class="active">Over ons</b-nav-item>
        <b-nav-item tag="router-link" :to="{ path: '/projecten' }" exact-active-class="active">Projecten</b-nav-item>

        <b-nav-item-dropdown text="Contact" right>
            <b-dropdown-item href="#">0800 123456</b-dropdown-item>
            <b-dropdown-item tag="router-link" :to="{ path: '/contact' }" exact-active-class="active">Contact</b-dropdown-item>
            <b-dropdown-item tag="router-link" :to="{ path: '/contact/chat' }" exact-active-class="active">Chat *Beta versie</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>


    </b-navbar-nav>
      
                
  
    </b-collapse>
    </b-navbar>
    </div>
</template>

     

        /**
        *  <nuxt-link to="/user/my-account" class="button is-primary" exact-active-class="active">My Account</nuxt-link> 
                    <nuxt-link to="/user/logout" class="button is-light" exact-active-class="active">Logout</nuxt-link>        
    
         */
        
     


<style>

.fluit-container {
    padding-right: 0!important;
    scroll-padding-left: 0%!important;
}
.bg-dark {
    background-color: rgba(0, 0, 0, 0.84) !important;
}
.navbar-collapse {
    text-align: center;
}
</style>