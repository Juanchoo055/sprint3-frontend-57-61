<template>
<div  class="container">



  <v-spacer />
  
    <h3 class="tittle text-center">Servicios</h3>
  
  <v-spacer />

<br>
<div class="container1">
    <v-card
      class="vc2"
      max-width="400"
    >
      <v-img
        src="https://www.tuinformaticapersonal.es/wp-content/uploads/2020/05/Leer-libros-ONLINE.jpg"
        height="200px"
      ></v-img>
  
      <v-card-title>
       Lectura
      </v-card-title>
  
      <v-card-subtitle>
         La lectura es el proceso de comprensión de algún tipo de información o 
              ideas almacenadas en un soporte y transmitidas mediante algún tipo de código, por ende 
              Servicio Downtime te ofrece este metodo para que utilices de una mjejor manera tu tiempo libre en el trabajo.
              <br>
              se realizan ciertas investigaciones sobre la empresa profundizando en la labor del empleado, resultados que nos
               da a conocer que tipo de lectura ofrecer al cliente.
      </v-card-subtitle>
  
      <v-card-actions>
       
  
        <v-spacer></v-spacer>
  
        
        
      </v-card-actions>
  
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
  
          <v-card-text>
          
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
 
   <v-card
      class=""
      max-width="400"
    >
      <v-img
        src="https://www.alfabetajuega.com/wp-content/uploads/2020/01/Los-mejores-X-juegos-baratos-y-gratis-para-jugar-online-en-PC.jpg"
        height="200px"
      ></v-img>
  
      <v-card-title>
       Juegos Online
      </v-card-title>
  
      <v-card-subtitle>
          En service Downtime sabemos que las personas necesitan un espacio para divertirse por eso trasemos
           otra solucion para que utilices tu tiempo para divertirte y alejarte un poco de la parte laboral, 
           por eso te ofrecemos paginas web de juegos online donde puedesingresar al que desees.<br>
         Los videojuegos en línea son aquellos videojuegos jugados vía Internet independientemente
          de la plataforma. Puede tratarse de videojuegos multijugador, en los que se juega con otras 
          personas o videojuegos de navegador que se descargan desde la web y se ejecutan en el navegador.
      </v-card-subtitle>
  
      <v-card-actions>
       
  
        <v-spacer></v-spacer>
  
        
        
      </v-card-actions>
  
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
  
          <v-card-text>
          
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
    </div>
    <div class="container2">
    <v-card
      class=""
      max-width="400"
    >
      <v-img
        src="https://www.zaplo.es/blog/wp-content/uploads/2019/06/cursos-online-gratis-612x361.jpeg"
        height="200px"
      ></v-img>
  
      <v-card-title>
       Cursos Online
      </v-card-title>
  
      <v-card-subtitle>
         Los cursos gratis o subvencionados son una gran oportunidad formativa, y es otro 
         servicio que puedes utilizar en tus tiempos muertos en la empresa, si no 
         dispones de los recursos económicos suficientes para realizar otro tipo de 
         formación o si quieres conocer mejor otro ámbito en concreto.<br>
         Este tipo de cursos no suponen un coste para ti o el coste es muy reducido respecto al coste 
         real del curso.
      </v-card-subtitle>
  
      <v-card-actions>
       
  
        <v-spacer></v-spacer>
  
        
        
      </v-card-actions>
  
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
  
          <v-card-text>
          
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>

    </div>

    <div class="container3">
        <v-spacer />
  
    <h3 class="tittle text-center">Lecturas</h3>
  
  <v-spacer />


        <div class="row mt-md-5 mt-sm-5 mt-xs-5">
    
            <div class="col-lg-6 col-xs-12" v-for="(newss, index) of news" :key="index">
                <div class="d-flex justify-content-center align-items-center">
    
                    <div class="p-3">
                        <img :src="newss.thumbnail" alt="imagen news" width="150">
                    </div>
                    
                    <div class="p-2">
                        <h5>{{newss.title}}</h5>
                        <p>
                            <br>
                            {{newss.content_short}}
                        </p>
                    </div>
    
                </div>
                <div class="d-flex container-fluid justify-content-end pb-2 mt-n2">
                    <a :href="newss.url_download"  target="_blank" class="btn btn-outline-info">Ver más</a>
                </div>
            </div>
          
        </div>
    </div>
    <div class="container4">
    <v-card
      class=""
      max-width="400"
    >
      <v-img
        src="https://www.alfabetajuega.com/wp-content/uploads/2020/01/Los-10-mejores-juegos-baratos-y-gratis-para-jugar-online-en-Nintendo-Switch.jpg"
        height="200px"
      ></v-img>
  
      <v-card-title>
       Juegos
      </v-card-title>
  
      <v-card-subtitle>
         Paginas de juegos online las cuales ofrecemos para el ocio y otros momentos en los 
         que quieras cambiar la página o simplemente distraerte.
         
    <br>
       <a href="https://www.arenagg.com/es/games"  target="_blank" class="btn btn-outline-info">Arenagg</a> <br><br>
       <a href="https://www.1001juegos.com/"  target="_blank" class="btn btn-outline-info">1001juegos</a> 
      
      </v-card-subtitle>
  
      <v-card-actions>
       
  
        <v-spacer></v-spacer>
  
        
        
      </v-card-actions>
  
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
  
          <v-card-text>
          
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
 
   <v-card
      class=""
      max-width="400"
    >
      <v-img
        src="https://uvm.cdn-capital.digital/img/2020/03/cursos-online-gratuitos.jpg"
        height="200px"
      ></v-img>
  
      <v-card-title>
       Cursos
      </v-card-title>
  
      <v-card-subtitle>
          Cursos Online los culaes te ayudan a adquirir nuevos conocimientos o profundizar los que ya poseas.<br>
          <a href="https://www.aulafacil.com/"  target="_blank" class="btn btn-outline-info">Aula facil</a> <br><br>
       <a href="https://es.coursera.org/"  target="_blank" class="btn btn-outline-info">Coursera</a> 
      
      </v-card-subtitle>
  
      <v-card-actions>
       
  
        <v-spacer></v-spacer>
  
        
        
      </v-card-actions>
  
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
  
          <v-card-text>
          
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
    </div>
        </div>
    

</template>

<script>

import axios from 'axios';

export default {
    name: "SectionApi",
    data(){
        return{
            news: null
        }
    },
    mounted(){
        axios
        .get('https://www.etnassoft.com/api/v1/get/?category=libros_programacion&criteria=most_viewed')
        .then(response => {
            (this.news = response.data.slice(0,4))
            console.log(this.news)
        })
        
    }
    
}
</script>

<style scoped>

.container{
    background-color: rgb(233, 233, 227);
    width: 900px;
    height: auto;
    margin-top: 0px;
}

.container1 {
  display: flex;
  justify-content: space-around
}

.container2 {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  color:"dark";
}

.container3{
    background-color: rgb(243, 237, 229);
    margin-top: 20px;
}

.container4{
    display: flex;
  justify-content: space-around;
  margin-top: 20px;
  color:"dark";
  background-color: rgb(243, 237, 229);
}

</style>