<template>
  <div >
    <v-card ma-3>
      <v-card-title primary-title>Hotel Room</v-card-title>
      <v-layout ma-2 id="btn--room">
        <v-chip gradient="circle" ma-3 elevation-10 draggable=true>
          <v-btn rounded color="#4DD0E1" ma-2>929</v-btn>
          <v-icon color="#4DD0E1" pa-2>mdi-beach</v-icon>Sea View
        </v-chip>
        <v-chip gradient="circle" ma-3 elevation-10 draggable=true>
          <v-btn rounded color="#FFA000">334</v-btn>
          <v-icon color="#FFA000" pa-2>mdi-cash</v-icon>Presidential
        </v-chip>
        <v-chip gradient="circle" ma-3 elevation-10 draggable=true>
          <v-btn rounded color="#773D8E">432</v-btn>
          <v-icon color="#773D8E" pa-2>mdi-account</v-icon>Single
        </v-chip>
        <v-chip gradient="circle" ma-3 elevation-10 draggable=true>
          <v-btn rounded color="#773D8E">409</v-btn>
          <v-icon color="#773D8E" pa-2>mdi-baby</v-icon>Familial
        </v-chip>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    RoomList: [
      {
        key: "001",
        available: true,
        location: "ST",
        code: "0117",
        buiding: "saint-tropez tropic"
      },
      {
        key: "201",
        available: false,
        location: "AM",
        code: "0154",
        buiding: "Amsterdam Git"
      },
      {
        key: "002",
        available: true,
        location: "AM",
        code: "0134",
        buiding: "Amsterdam Git"
      },
      {
        key: "334",
        available: true,
        location: "ST",
        code: "0186",
        buiding: "saint-tropez tropic"
      },
      {
        key: "004",
        available: false,
        location: "PA",
        code: "0112",
        buiding: "Paris Palace"
      },
      {
        key: "005",
        available: true,
        location: "AM",
        code: "0109",
        buiding: "Amsterdam Git"
      },
      {
        key: "929",
        available: true,
        location: "PA",
        code: "0132",
        buiding: "Paris Palace"
      },
      {
        key: "007",
        available: true,
        location: "PA",
        code: "0165",
        buiding: "Paris Palace"
      }
    ]
  })
};
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