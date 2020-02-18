import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'md',
  },
  color: {

        primary: '#E53935', // #E53935
        secondary: '#FFCDD2', // #FFCDD2
        accent: colors.indigo.base, // #3F51B5
  
  },
});
