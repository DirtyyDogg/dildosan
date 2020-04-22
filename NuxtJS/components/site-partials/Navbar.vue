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
            <hr class="navbar-divider">
            <b-dropdown-item tag="router-link" :to="{ path: '/contact' }" exact-active-class="active">Contact</b-dropdown-item>
            <hr class="navbar-divider">
            <b-dropdown-item tag="router-link" :to="{ path: '/contact/chat' }" exact-active-class="active">Chat *Beta versie</b-dropdown-item>
        </b-nav-item-dropdown>
        
     
      <b-navbar-nav
      v-if="!$auth.loggedIn">
        <b-nav-item tag="router-link" :to="{ path: '/puppy' }" exact-active-class="active">Noodle</b-nav-item>
        <b-nav-item tag="router-link" :to="{ path: '/puppyyyy' }" exact-active-class="active">Noodleeeee</b-nav-item>
      </b-navbar-nav>
            
      

        <b-nav-item-dropdown v-if="!$auth.loggedIn" right>
          <template v-slot:button-content>
            <em> Niet ingelogd </em>
          </template>
            <b-dropdown-item tag="router-link" :to="{ path: '/user/register' }" exact-active-class="active">Registreren</b-dropdown-item>
            <b-dropdown-item tag="router-link" :to="{ path: '/user/login' }" exact-active-class="active">Login</b-dropdown-item>
            
        </b-nav-item-dropdown>

        <b-nav-item-dropdown v-if="$auth.loggedIn" right>
          <template v-slot:button-content>
            <em> {{ $auth.user.full_name }} </em>
          </template>
            <b-dropdown-item tag="router-link" :to="{ path: '/user/my-account' }" exact-active-class="active">Mijn Account</b-dropdown-item>
            <b-dropdown-item tag="router-link" :to="{ path: '/user/logout' }" exact-active-class="active">Uitloggen</b-dropdown-item>
            
        </b-nav-item-dropdown>
        

     
      </b-navbar-nav>
      
  </b-collapse>
</b-navbar>
</div>  
</template>
<script>

export default {

}
</script>
        
     

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