<template>
    <b-container fluid>
        <Navbar />
        <div class="containerr is-widescreen">
            <nuxt />    
        </div>

    <div class="container-fluid">        
        <Footer />
    </div>

</b-container>
     
</template>    

<script>
import Navbar from '~/components/site-partials/Navbar'
import Footer from '~/components/site-partials/Footer'
export default {
    components: {
        Navbar, Footer
    },
    data () {
        return {
            //showNav: false
        }
    }
}
</script>

<style>
    html {
    font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
    text-align: center;
  }

</style>
