<template>
  <v-row>
    <v-col cols="12" sm="6">
      <v-hover v-slot:default="{ hover }" open-delay="200" :dropzone=true>
        <v-card :elevation="hover ? 16 : 2" class="mx-auto" height="350" max-width="350" dropzone=true>
          <v-card-text class="font-weight-medium mt-12 text-center subtitle-1">
            <h2 ma-4>Rooms</h2>
            <v-layout column>
              <v-chip v-for="room in RoomList" :key="room.id" draggable=true >
                  {{room.location}}
                  <v-chip class="ma-3" :color="room.color">
                       {{ room.building }}
                 </v-chip>
                <v-layout >
                  <v-chip v-if="room.available" color="#00E676" column>{{ room.key}}  </v-chip>
                  
                </v-layout>
              </v-chip>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>

    <v-col cols="12" sm="6">
      <v-hover v-slot:default="{ hover }" close-delay="200" dropzone=true>
        <v-card :elevation="hover ? 16 : 2" class="mx-auto" height="350" max-width="350" dropzone=true>
          <v-card-text class="font-weight-medium mt-12 text-center subtitle-1"></v-card-text>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>
<script>
export default {
  components: {
    
  },
  data: () => ({
    RoomList: [
      { key: "001", available: true, location: "ST", code:'0117', building:'saint-tropez tropic', color:'#42A5F5'  },
      { key: "201", available: false, location: "AM", code:'0154', building:'Amsterdam Git', color:'#7E57C2' },
      { key: "002", available: true, location: "AM", code:'0134', building:'Amsterdam Git', color:'#7E57C2' },
      { key: "334", available: true, location: "ST", code:'0186', building:'saint-tropez tropic', color:'#42A5F5'},
      { key: "004", available: false, location: "PA", code:'0112', building:'Paris Palace', color:'#F06292' },
      { key: "005", available: true, location: "AM", code:'0109', building:'Amsterdam Git', color:'#7E57C2' },
      { key: "929", available: true, location: "PA", code:'0132', building:'Paris Palace', color:'#F06292' },
      { key: "007", available: true, location: "PA", code:'0165', building:'Paris Palace', color:'#F06292' }
    ]
  })
};
</script>
<style>
.v-row .v-col .v-hover .v-card .v-card-text .h2 {
  
}

</style>