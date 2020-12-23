<template>
  <div class="blue-grey lighten-5">
    <v-data-table
      :headers="headers"
      :items="articulos"
      sort-by="id"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Servicios</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                Agregar Servicio
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                 <span class="headline">{{ formTitle }}</span>
                </v-card-title>            
                <v-card-text>
                <v-container grid-list-md>
                    <v-layout wrap>
                      <v-flex xs12 sm12 md12>
                            <v-text-field v-model="editedItem.codigo" label="Codigo">                                        
                            </v-text-field>
                        </v-flex>
                        <v-flex xs12 sm12 md12>
                            <v-text-field v-model="editedItem.nombre" label="Nombre">                                        
                            </v-text-field>
                        </v-flex>
                        <v-flex xs12 sm12 md12>
                            <v-text-field v-model="editedItem.descripcion" label="Descripción">                                        
                            </v-text-field>
                        </v-flex>
                        <v-flex xs12 sm12 md12>
                            <v-text-field v-model="editedItem.categoriaId" label="Categoria">                                        
                            </v-text-field>
                        </v-flex>
                        <v-flex xs12 sm12 md12 v-show="valida">
                            <div class="red--text" v-for="v in validaMensaje" :key="v" v-text="v">

                            </div>
                        </v-flex>
                    </v-layout>
                </v-container>
                </v-card-text>            
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1"  @click="close">Cancelar</v-btn>
                <v-btn color="blue darken-1"  @click="guardar">Guardar</v-btn>
                </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline"
                >Esta seguro que desea cambiar el estado del Articulo?</v-card-title
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
        <v-icon 
        small class="mr-2" 
        @click="editItem(item)"> 
        mdi-pencil 
        </v-icon>
        <v-icon 
        small 
        @click="deleteItem(item)"> 
        mdi-checkbox-multiple-marked </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Reset </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import axios from 'axios'

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
      { text: "Codigo", value: "codigo" },
      { text: "Descripcion", value: "descripcion" },
      { text: "Estado", value: "estado" },
      { text: "Categoria", value: "categoriaId" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    articulos: [],
    editedIndex: -1,

    editedItem: {
      id: 0,
      nombre: "",
      codigo: "",
      descripcion: "",
      estado: 0,
      categoriaId: 0,
      
    },
    defaultItem: {
      id: 0,
      nombre: "",
      codigo: "",
      descripcion: "",
      estado: 1,
      categoriaId: 0,
      
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nuevo Servicio" : "Editar Servicio";
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
      this.$axios.get("/api/articulo/list")
      .then(  (response) => {
          this.articulos = response.data
      })
      .catch(error =>{
          return error
      })
    },
     initialize() {
      this.list()
      
    },

    editItem(item) {

      this.editedIndex = item.id
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.articulos.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {

      if (this.editedItem.estado === 1){
          this.$axios.put("/api/articulo/deactivate", {id: this.editedItem.id})
        
      } else{
          this.$axios.put("/api/articulo/activate", {id: this.editedItem.id})

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
            id: this.editedItem.id,
            nombre : this.editedItem.nombre,
            codigo : this.editedItem.codigo,
            descripcion :this.editedItem.descripcion,
            categoria: this.editedItem.categoriaId
            
          }
        this.$axios.put("/api/articulo/update", ObjetoBusqueda)
        .then( response => {
          this.list()
        })
        .catch(error => {
          return error;
        })

      } else {
        let ObjetoBusqueda = {
            nombre : this.editedItem.nombre,
            codigo : this.editedItem.codigo,
            descripcion :this.editedItem.descripcion,
            categoria: this.editedItem.categoriaId,
            estado: 1
          }
        this.$axios.post("/api/articulo/add", ObjetoBusqueda)
        .then(response => {
          this.list()
        })

        this.articulos.push(this.editedItem);
      }
      
      this.close();
    },
  },
};
</script>