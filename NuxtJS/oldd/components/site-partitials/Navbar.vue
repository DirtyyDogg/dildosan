<template>
    <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Logo Brand"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                Home
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/over-ons' }">
                Over ons
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/projecten' }">
                Projecten
            </b-navbar-item>
            <b-navbar-dropdown label="Contact">
                <b-navbar-item tag="router-link" :to="{ path: '#' }">
                    0800-121290
                </b-navbar-item>
                <hr class="dropdown-divider">
                <b-navbar-item tag="router-link" :to="{ path: '/contact' }">
                    Contact
                </b-navbar-item>
                <hr class="dropdown-divider">
                <b-navbar-item tag="router-link" :to="{ path: '/contact/chat' }">
                    Chat - *Beta modes
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template slot="end"
            v-if="!$auth.loggedIn">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <!--b-navbar-item tag="router-link" :to="{ path: '/' }" class="button is-primary" exact-active-class="active">
                        <strong>Registreer</strong>                    
                    </b-navbar-item-->
                    <nuxt-link class="button is-primary" id="router-link" :to="{ path: '/user/register' }">
                        <strong>Registreer</strong>                    
                    </nuxt-link>
                    
                    <nuxt-link class="button is-light" to="/user/login" exact-active-class="active">
                        <strong>Log in</strong>                    
                    </nuxt-link>
                    
                    
                    
                    
                </div>
            </b-navbar-item>
        </template>

        <template slot="end"
            v-if="$auth.loggedIn">
            <b-navbar-item tag="div">
                <div class="buttons">
                    
                    
                    <nuxt-link to="/user/my-account" class="button is-primary" exact-active-class="active">My Account</nuxt-link> 
                        
                    <nuxt-link to="/user/logout" class="button is-light" exact-active-class="active">Logout</nuxt-link>        
    
                </div>
            </b-navbar-item>
        </template>

    </b-navbar>
</template>

<script>

export default {
    head: {
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  script: [
      { src: 'https://unpkg.com/buefy/dist/buefy.min.js' }
  ],
  link: [
    { rel: 'stylesheet', href: 'https://unpkg.com/buefy/dist/buefy.min.css' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
  ]
}
}
</script>
<style scoped>

</style>