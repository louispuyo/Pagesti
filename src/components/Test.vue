<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="12" md="12" offset-md="4">
        <v-card dropzone=true>
          <v-toolbar extended>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <template v-slot:extension>
              <v-fab-transition>
                <v-btn
                  v-show="!hidden"
                  color="pink"
                  fab
                  dark
                  small
                  absolute
                  bottom
                  left
                >
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-fab-transition>
            </template>
          </v-toolbar>
          <v-card-text style="height: 100px;" class="grey lighten-5 text-center">
            <v-btn color="#44444" @click="hidden = !hidden">
              {{ hidden ? 'Services' : 'Reduce' }}
            </v-btn>
          </v-card-text>
          <v-card-text style="height: 120px; position: relative">
            <v-fab-transition>
              <v-card-text
                v-show="!hidden"
                color="pink"
                dark
                relative
                top
                right
                fab
              > <v-chip label color="deep-orange" text-color="primary">
                  <v-icon left>mdi-box</v-icon> Wifi Access 34 $
              </v-chip>
              </v-card-text>
            </v-fab-transition>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  export default {
    data: () => ({
      hidden: false,
    }),
  }
</script>