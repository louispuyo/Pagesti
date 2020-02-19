<template>
  <v-card id="lateral" dropzone=true>
    <v-toolbar dark tabs flat color="indigo">
         Free Rooms
      <v-app-bar style="max-width: 150px" ma-3>
         
        <v-icon ma-4>{{ activeFab.icon2 }}</v-icon>
      </v-app-bar>
      <v-flex xs1>
      <v-toolbar-title v-slot:extended>Free Room</v-toolbar-title>
       </v-flex>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <template v-slot:extension>
        <v-tabs v-model="tabs" align-with-title>
          <v-tab href="#Menu" tile>Paris</v-tab>
          <v-tab href="#Room" tile>Saint-Tropez</v-tab>
          <v-tab href="#contact" tile>Amsterdam</v-tab>
          <v-tabs-slider color="#FF4081"></v-tabs-slider>
        </v-tabs>
      </template>
    </v-toolbar>
    <v-card-text>
      <v-tabs-items v-model="tabs">
        <v-tab-item v-for="content in ['Menu', 'Room', 'contact']" :key="content" :value="content">
          <v-card height="500px" flat>
            <Market />
         
               
            
          </v-card>
        </v-tab-item>
      </v-tabs-items>
       <DropZone />
    </v-card-text>
    <v-fab-transition>
      <v-btn
        :key="activeFab.icon"
        :color="activeFab.color"
        fab
        medium
        dark
        left
        class="v-btn--example"
        @click="hidden = !hidden"
      >
        {{ hidden ? '+' : '-' }}
        <v-icon tile>{{ activeFab.icon }}</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-card>
</template>
<script>
import Market from "./Market";
import DropZone from "./DropZone";
//import Panel from "./Test";

export default {
  components: {
    Market,
    DropZone

    //Panel
  },
  data: () => ({
    fab: false,
    hidden: false,
    tabs: null
    
  }),

  computed: {
    activeFab() {
      switch (this.tabs) {
        case "Menu":
          return {
            color: "#FF4081",
            icon: "hotel",
            icon2: "star star star star star",

          };
        case "Room":
          return {
            color: "#01579B",
            icon: "hotel",
            icon2: "star star star"
          };
        case "contact":
          return { color: "#2E7D32", icon: "hotel", icon2: "star star star star " };
        default:
          return {};
      }
    }
  }
};
</script>
<style>
/* This is for documentation purposes and will not be needed in your application */
#lateral .v-btn--example {
  top: 150px;
  position: absolute;
  margin: 0 0 16px 16px;
  border-start-end-radius: 100%;
}
</style>