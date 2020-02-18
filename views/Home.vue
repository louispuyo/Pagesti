<template>
  <div class="home">
    <DashBoard />
    <Card />
    
  </div>
</template>

<script>
// @ is an alias to /src
import DashBoard from "@/components/DashBoard.vue";
import Card from "../components/Card"
export default {
  name: "Home",
  components: {
    DashBoard,
    Card
  }
};
</script>
