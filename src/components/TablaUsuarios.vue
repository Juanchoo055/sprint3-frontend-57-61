<template>
  <div class="blue-grey lighten-5">
    <v-data-table
      :headers="headers"
      :items="usuarios"
      sort-by="id"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Usuarios</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                Agregar Usuario
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                   
                      <v-text-field
                        v-model="editedItem.nombre"
                        label="Usuario"
                      ></v-text-field>
                  </v-row>
                  
                    <v-row>
                    
                      <v-textarea
                        v-model="editedItem.email"
                        label="email"
                        auto-grow
                        counter="500"
                      ></v-textarea>
                    
                    
                    </v-row>
                    <v-row>
                   
                      <v-text-field
                        v-model="editedItem.password"
                        label="password"
                      ></v-text-field>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  Cancel
                </v-btn>
                <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline"
                >Esta seguro que desea cambiar el estado del usuario?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-checkbox-multiple-marked </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Reset </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>

export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    iconocambio : "",
    headers: [
      {
        text: "ID",
        align: "start",
        sortable: true,
        value: "id",
      },
      { text: "Nombre", value: "nombre" },
      { text: "Correo electronico", value: "email" },
      { text: "Estado", value: "estado" },
      { text: "Contraseña", value: "password" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    usuarios: [],
    editedIndex: -1,
    editedItem: {
      nombre: "",
      id: 0,
    
      email: "",
      password: "",
      rol:"",
      estado: 0,
    },
    defaultItem: {
      nombre: "",
      id: 0,
      
      email: "",
      password: "",
      rol:"",
      estado: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nuevo usuario" : "Editar usuario";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
   

    list() {
      this.$axios.get("api/usuario/list")
      .then(  (response) => {
          this.usuarios = response.data
      })
      .catch(error =>{
          return error
      })
    },
     initialize() {
      this.list()
      
    },

    editItem(item) {

      this.editedIndex = this.usuarios.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.usuarios.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {

      if (this.editedItem.estado === 1){
          this.$axios.put("/usuario/deactivate", {id: this.editedItem.id})
        
      } else{
          this.$axios.put("/usuario/activate", {id: this.editedItem.id})

      }
      
      this.closeDelete()
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
      this.list()
    },

    save() {
      if (this.editedIndex > -1) {

         let ObjetoBusqueda = {
             nombre : this.editedItem.nombre,
             email :this.editedItem.email,
             id: this.editedItem.id
           }
         this.$axios.put("/usuario/update", ObjetoBusqueda)
          .then(  () => {
            this.list()
         })
        Object.assign(this.usuarios[this.editedIndex], this.editedItem);
      } else {
        let ObjetoBusqueda = {
             nombre : this.editedItem.nombre,
             email :this.editedItem.email,
             password : this.editedItem.password,
             rol : this.editedItem.rol,
             estado: 1
           }
         this.$axios.post("/usuario/add", ObjetoBusqueda)
         .then(  () => {
            this.list()
         })
        this.usuarios.push(this.editedItem);
      }
     
      this.close();
    },
  },
};
</script>