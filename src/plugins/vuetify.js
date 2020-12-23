import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';



Vue.use(Vuetify)

const vuetify = new Vuetify({
    theme: {
      themes: {
        light: {
          primary: '#3F51B5',
          secondary: '#00BCD4',
          accent: '#009688',
          error: '#b71c1c',
        },
      },
    },
  })

export default new Vuetify({
 
    
    
})



