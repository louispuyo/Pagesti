<template>
  <div id="about">
    <h1>Contact us</h1>
   <v-row row="2"> <Contact/> </v-row>
  </div>
</template>
<script>
import Contact from '../components/Contact'

export default {
  components:{
    Contact
  }
  
}
</script>
<style>
.Contact{
  flex: 10%;
  align-content: center;
  }
</style>
