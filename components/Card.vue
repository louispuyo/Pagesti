<template>
  <v-card id="lateral">
    <v-toolbar
      dark
      tabs
      flat
      color="indigo"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Free Room</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <template v-slot:extension>
        <v-tabs
          v-model="tabs"
          align-with-title
        >
          <v-tab href="#Menu" tile> Menu</v-tab>
          <v-tab href="#Room" tile> Room</v-tab>
          <v-tab href="#contact" tile> Contact</v-tab>
          <v-tabs-slider color="#FF4081"></v-tabs-slider>
        </v-tabs>
      </template>
    </v-toolbar>
    <v-card-text>
      <v-tabs-items v-model="tabs">
        <v-tab-item
          v-for="content in ['Menu', 'Room', 'contact']"
          :key="content"
          :value="content"
        >
          <v-card
            height="200px"
            flat
          >
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card-text>
     <Contact top/>
    <v-fab-transition>
        
      <v-btn
        :key="activeFab.icon"
        :color="activeFab.color"
        fab
        large
        dark
        bottom
        left
        class="v-btn--example"
        @click="hidden = !hidden"
        
      >{{ hidden ? '+' : '-' }} 
        <v-icon tile>{{ activeFab.icon }}
            </v-icon>
      </v-btn>    

             
    </v-fab-transition>
   
  </v-card>
</template>
<script>
import Contact from '../components/Contact'
  export default {
      components:{
          Contact
      },
    data: () => ({
      fab: false,
      hidden: false,
      tabs: null,
      
    }),

    computed: {
      activeFab () {
        switch (this.tabs) {
          case 'Menu': return { color: '#01579B', icon: 'home' }
          case 'Room': return { color: '#FF4081', icon: 'hotel' }
          case 'contact': return { color: '#2E7D32', icon: 'phone' }
          default: return {}
        }
      },
    },
  }
</script>
<style>
  /* This is for documentation purposes and will not be needed in your application */
  #lateral .v-btn--example {
    bottom: 0;
    position: absolute;
    margin: 0 0 16px 16px;
  }
</style>