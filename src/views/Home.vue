<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" class="img1">
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
@keyframes rotation1{
    from {-webkit-transform: rotate(0deg);}
    to {-webkit-transform: rotate(360deg);}
}
.img1{
   transform: rotate(360deg);
    animation: rotation1 3s linear infinite;
}
</style>

