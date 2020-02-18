<template>
  <div>
    <v-card class="pa-4">
      <v-card-title primary-title>Hotel Room</v-card-title>
      <v-layout class="ma-2" id="btn--room">
        <v-chip gradient="circle" elevation-10>
          <v-btn rounded color="#4DD0E1" class="ma-2">929</v-btn>
          <v-icon color="#4DD0E1" class="ma-2">mdi-beach</v-icon>Sea View
        </v-chip>
        <v-chip gradient="circle" elevation-10>
          <v-btn rounded color="#FFA000">334</v-btn>
          <v-icon color="#FFA000" class="ma-2">mdi-cash</v-icon>Presidential
        </v-chip>
        <v-chip gradient="circle" elevation-10>
          <v-btn rounded color="#773D8E">432</v-btn>
          <v-icon color="#773D8E" class="ma-2">mdi-account</v-icon>Single
        </v-chip>
        <v-chip gradient="circle" elevation-10>
          <v-btn rounded color="#773D8E">409</v-btn>
          <v-icon color="#773D8E" class="ma-2">mdi-baby</v-icon>Familial
        </v-chip>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>
<style>
#btn--room .v-chip .v-btn {
  border-radius: 10px 100px / 120px;
  padding-block-start: 2px;
}
#btn--room {
  margin-bottom: 3px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  flex-shrink: unset;
  font-weight: 400;
}
</style>