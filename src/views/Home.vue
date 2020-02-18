<template>
  <div class="home">
    <chips class="ma-1 pa-1" color="#FF4081">
      <DashBoard />
    </chips >
     <v-divider></v-divider>
    <Card />
  </div>
</template>

<script>
// @ is an alias to /src
import DashBoard from "@/components/DashBoard.vue";
import Card from "../components/Card";
export default {
  name: "Home",
  components: {
    DashBoard,
    Card
  }
};
</script>
