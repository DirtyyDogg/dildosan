<template>
  <div>
    <Carousel />
    <h1>Home</h1>
    <hr>

    <h3>Welcome to Express CRUD</h3>  
    
  </div>
</template>
<script>
import Carousel from '~/components/site-partials/Carousel.vue'
export default {
    layout: 'default',
    components: {
      Carousel
    }
}
</script>
<style>
    html {
    font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
    text-align: center;
  }
    /** .carousel min height 310 postition relative */
    .containerr {
    width: 100%;
    padding: 0px;
    margin-right: auto;
    margin-left: auto;
}
.containerr.is-widescreen {
    max-width: 100%;
}
</style>
