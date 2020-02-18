<template>
  <v-card color="basil">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold display-3 basil--text">BASiL</h1>
    </v-card-title>

    <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
      <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in texts" :key="item.id">
        <v-card color="basil" flat>
          <v-card-text><v-chip ma-6 pa-3 color="#7CB342">bio</v-chip> {{ item }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
<script>
  export default {
    data () {
      return {
        tab: null,
        items: [
          'Appetizers', 'Entrees', 'Deserts', 'Cocktails',
        ],
        texts:[
        'Our restaurant present a new menu, every single month, Bazil',
        'In Entrees we have : , $, or #',
        'In Deserts we have : # , $, or #',
        'In Cocktails we have : Martini A loca, Capo del pulco, Casmati, jin con late, favela con gaz, Origana Sore, Cola Bazil']

      }
    },
  }
</script>
<style>
/* Helper classes */
.basil {
  background-color: #fffbe6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>