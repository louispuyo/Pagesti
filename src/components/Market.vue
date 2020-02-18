<template>
  <v-row>
    <v-col cols="12" sm="6">
      <v-hover v-slot:default="{ hover }" open-delay="200" dropzone=true>
        <v-card :elevation="hover ? 16 : 2" class="mx-auto" height="350" max-width="350" dropzone=true>
          <v-card-text class="font-weight-medium mt-12 text-center subtitle-1">
            <h2 ma-4>Rooms</h2>
            <v-layout column>
              <v-chip v-for="room in RoomList" :key="room.id" draggable=true>
                  {{room.location}}
                  <v-chip pa-3>
                       {{ room.building }}
                 </v-chip>
                <v-layout >
                  <v-chip v-if="room.available" color="#00E676" >{{ room.key}}  </v-chip>
                  
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
      { key: "001", available: true, location: "ST", code:'0117', buiding:'saint-tropez tropic' },
      { key: "201", available: false, location: "AM", code:'0154', buiding:'Amsterdam Git' },
      { key: "002", available: true, location: "AM", code:'0134', buiding:'Amsterdam Git' },
      { key: "334", available: true, location: "ST", code:'0186', buiding:'saint-tropez tropic' },
      { key: "004", available: false, location: "PA", code:'0112', buiding:'Paris Palace' },
      { key: "005", available: true, location: "AM", code:'0109', buiding:'Amsterdam Git' },
      { key: "929", available: true, location: "PA", code:'0132', buiding:'Paris Palace' },
      { key: "007", available: true, location: "PA", code:'0165', buiding:'Paris Palace' }
    ]
  })
};
</script>
<style>
.v-row .v-col .v-hover .v-card .v-card-text .h2 {
  
}

</style>