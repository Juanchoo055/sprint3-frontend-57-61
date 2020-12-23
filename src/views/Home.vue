<template>
  <div class="home">
   <v-carousel 
    cycle
   height="350px"
   max-width="950px"
   >
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        
      ></v-carousel-item>
    </v-carousel>
    <v-card
      class="mx-auto blue-grey lighten-5"
      max-width="950px"
      height="auto"
       color="white"

    >
      <v-card-text>
        
        <v-spacer />
  
    <h3 class="tittle text-center">Services Downtime</h3><br>
  <v-spacer />
        <div class="img1">
  <img  src="https://www.creativefabrica.com/wp-content/uploads/2020/07/22/SD-S-D-Logo-Design-with-Black-and-White-Graphics-4686093-1.jpg" alt="Girl in a jacket" width="400" height="300">
  </div><br><br>
        <div class="text--secondary"><h5>
         <p style="text-align: justify" >
          El tiempo es oro. Debemos utilizarlo activamente para evitar retrasos en los proyectos, 
          quejas de los clientes, enfermedades crónico degenerativas y otros problemas que tienen un 
          impacto negativo en la empresa. <br><br>
          En la actualidad, las organizaciones necesitan equipos de 
          trabajo eficientes, pero en determinadas temporadas el trabajo disminuye.<br> <br>
          Es un tema que debemos utilizar, puede mejorar nuestra vida diaria y evitar la presión laboral. <br><br>
          Seamos claros: si estás aquí es porque quieres aumentar la productividad y aprovechar al máximo tu tiempo. Sin embargo, 
           debes saber que esta es una gran realidad. <br><br>No somos robots. Incluso los empresarios de alto 
           rendimiento tienen tiempo de inactividad. <br><br>Ahora es la parte positiva. Ya sea que lo haya 
           programado o que su cuerpo le esté diciendo: "Más despacio, necesito tomar un descanso", 
           un tiempo fuera durante el día puede ser una buena oportunidad para atar cabos sueltos.</p></h5><br><br>
          
        </div>
      </v-card-text>
     
    </v-card>

    
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          src: 'https://www.esan.edu.pe/apuntes-empresariales/2016/06/20/supplydesperdicio_principal.jpg',
        },
        {
          src: 'https://retos-operaciones-logistica.eae.es/wp-content/uploads/2016/05/iStock_000079296393_Small.jpg',
        },
        {
          src: 'https://capitalhumano.emol.com/wp-content/uploads/2019/04/officesleep.jpg',
        },
        {
          src: 'https://www.itmplatform.com/lib/uploads/Control-tiempo.jpg',
        },
      ],
    }
  },

}
</script>

<style scoped>
.img1{
  display: flex;
  justify-content: center;
}
</style>



    