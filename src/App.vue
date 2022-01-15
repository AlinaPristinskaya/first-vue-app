<template>
  <div id="app">
    <Notifications />
    <div class="content">
      <AppHeader/>
       <router-view></router-view>
       </div>
     <AppFooter/>

    </div>
    
</template>

<script>


import AppFooter from './components/Footer.vue'
import AppHeader from "./components/Header.vue"
import Notifications from './components/notifications'

export default {
  name: 'App',
  components: {
    AppFooter,
    AppHeader,
    Notifications
   }   
 }

</script>

<style>
#app {
 display: flex;
 flex-direction: column;
 min-height: 100vh;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  
}
.content{
  flex-grow:1;
  
}

</style>