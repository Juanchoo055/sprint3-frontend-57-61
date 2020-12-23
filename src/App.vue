<template>
  <v-app id="inspire">
    <v-app-bar app
    absolute
        
        color="#fcb69f"
        dark
        shrink-on-scroll
        src="https://www.esan.edu.pe/apuntes-empresariales/2016/05/05/fallasequipo_principal.jpg"
        scroll-target="#scrolling-techniques-1"
        height="60px"
        
    >
    <template v-slot:img="{ props }">
      
          <v-img
            v-bind="props"
            gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
          ></v-img>
        </template>
      <v-app-bar-nav-icon @click="drawer = !drawer" color="dark"></v-app-bar-nav-icon>
       <v-spacer></v-spacer>
                
                
                    <a class="nav-link" href="/Home">Inicio</a>
                
               
                    <a class="nav-link" href="/Quienessomos">Quienes somos</a>
                
               
                    <a class="nav-link" href="/Servicio">Servicios</a>

                    <a class="nav-link" href="/CasosExito">Casos de exito</a>
               
                    <a class="nav-link" href="/About">Equipo</a>
                
           

     
    </v-app-bar>
     
    <v-navigation-drawer
     v-model="drawer" 
    fixed temporary
    src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
     >
      <!--  -->
      <v-card class="mx-auto" width="300">
        <v-list>
          <v-list-item 
          to="Home">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon >

            <v-list-item-title>Inicio</v-list-item-title>
          </v-list-item>

           <v-list-item 
          to="Login">
            <v-list-item-icon>
              <v-icon>mdi-login</v-icon>
            </v-list-item-icon >

            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>

             

           
          

          <v-list-group :value="true" prepend-icon="mdi-account-circle">
            <template v-slot:activator>
              <v-list-item-title>Users</v-list-item-title>
            </template>

            <v-list-group :value="true" no-action sub-group>
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>Admin</v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item v-for="([title, icon, ruta], i) in admins" 
              :key="i" 
              :to=ruta
              link>
                <v-list-item-title v-text="title">Administracion</v-list-item-title>

                

                <v-list-item-icon>
                  <v-icon v-text="icon"></v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>

            <v-list-group no-action sub-group>
              
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>Actions</v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item 
              v-for="([title, icon, ruta], i) in cruds" 
              :key="i" 
              :to="ruta"
              link
              >

                <v-list-item-title v-text="title"></v-list-item-title>
                        
                <v-list-item-icon>
                  <v-icon v-text="icon"></v-icon>
                </v-list-item-icon>
              </v-list-item>
            
            </v-list-group>
          </v-list-group>
          <v-list-item 
          @click="cerrarSesion"
          to="Login">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon >

          <v-list-item-title>Cerrar sesion</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-navigation-drawer>
    

    <v-main class="grey lighten-2">
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
      <v-container> </v-container>
    </v-main>
    <div>



    <v-footer
    height="228px"
      class="blue-grey darken-1"
    >
      <v-card
        class="flex blue-grey darken-3 "
        flat
        tile
      >
        <v-card-title class="teal blue-grey darken-1">
          <strong class="subheading blue-grey darken-1" blue-grey darken-1 >Juan Giraldo, Scrum Master:  <a href="https://github.com/Juanchoo055" target="_blank">GitHub</a><br>
          Alejandro Sánchez, Desarrollador Frontend:  <a href="https://github.com/asanchezb" target="_blank">GitHub</a><br>
          Carolina Gutiérrez, Desarrollador Backend:  <a href="https://github.com/CarolinaGutierrez1193" target="_blank">GitHub</a><br>
          Kevin Correa, Desarrollador Frontend:  <a href="https://github.com/kevinkc8" target="_blank">GitHub</a></strong>


          <v-spacer></v-spacer>
           
          <strong class="subheading blue-grey darken-1" blue-grey darken-1>
           
                            <div clas="contact">Contacto: prueba@gmail.com<br>Cel: 3521476547</div>
                <p class="textr blue-grey darken-1 ">Repositorio</p>
               
                <a href="https://github.com/Juanchoo055/semana-2-57-61.git" target="_blank" ><button type="button" class="btn btn-dark">gitHub</button></a></strong>
                 
          
        </v-card-title >
  
        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Service Downtime</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  
</div>
    
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld,
  },

  data: () => ({
    //

    methods: {
      cerrarSesion () {
        localStorage.removeItem("token")
        
      }
    },
    drawer: null,
    admins: [
      ["Usuarios", "mdi-account-multiple-outline", "Usuarios"],
      
    ],
    cruds: [
      ["Articulos", "mdi-cart", "Articulos"],
      ["Categorias", "mdi-view-list", "Categorias"],
  
    ],

    
  }),

}
</script>


 <style scoped>
  .nav-link{
  color: rgb(255, 255, 255) ;
  font-size: large;
}
 .nav-link:hover{
  font-weight: bold;
  color: rgb(84, 196, 211) ;
  text-decoration: none ;
}

.subheading{
  font-size: 14px;
  color: white;
  text-align: left;
  margin-left: 200px;

}
.textr {
  font-size: 14px;
  color: white;
  text-align: right;
  margin-right: 200px;

}

    
 </style>