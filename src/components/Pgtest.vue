<template>
<div>
    Filtrar:<select v-model="selected" name="selected" id="selected" onchange="filtro()"> 
                <option>Selecionar</option>
                <option v-for="option in options" v-bind:key="option.id" :value="option.name"> 
                    {{ option.name }}
                </option>
    </select>
<h1>MEUS LIVROS</h1>
<header class="bg-white shadow-xl ">
    <div class="px-10 py-10 mx-auto max-w-7xl sm:px-6 lg:px-8">    
    <ul>
        <v-row>
        <v-col v-for="livro in isLivros" v-bind:key="livro.id" cols="12" md="4" lg="2">
            <v-card class="mx-auto">
                <br/>
                <v-card-title><p>{{livro.name}},</p></v-card-title>
                <v-card-title><a>{{livro.author}},</a> <br/>
                <h2>{{livro.description}}</h2><br/></v-card-title>
                <v-card-actions>
                    
                    <button class="bg-red-500 hover:bg-white-700 text-white font-bold py-2 px-4 border border-red-700 rounded">
                    <v-btn text small color="primary" @click="deletelivro(livro.id)" value="Refresh Page"> Excluir </v-btn>
                    </button>
                    <router-link v-bind:to="{ name: 'editarlivro', params: {id: livro.id} }">
                    <button class="bg-blue-500 hover:bg-white-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                    <v-btn text small color="primary"> Editar</v-btn>
                    </button>
                    </router-link>

                    <br/>
                </v-card-actions>
                </v-card>
        </v-col>
        </v-row> 
    </ul>
    </div>
 </header>   
</div>
</template>

<script type="text/javascript">
import store from '../store.js';
// import {User} from '../services/resources.js';

export default { 
data () {
return {
menuPerfil: false,

}
},
created(){
if(this.isAuth) {
    store.dispatch('load-livros');
}
},
computed: {
isLivros(){
return store.state.livros;
},
isAuth() {
return store.state.auth.check;
},
},
methods: {

filtro(){

},

abrir() {
this.menuPerfil = this.menuPerfil == false ? true : false;
},
         deletelivro(id){
             if (confirm('Deseja excluir este livro?')){
              const req = fetch(`http://localhost:3000/livros/${id}`,{
                method: "DELETE"
              });
                window.location.reload()
             }
        },
},
// User() {
//     return User.get(id)
// },
// MethoddeTextoTeste() {
//     return 'TESTE'
// }

}

</script>

<style scoped>
.mx-auto{
text-align: justify;
}
p{
color: #115e59;
font-weight: bold;
font-size: 20px;
font-family: Arial black; 
}
a{
font-size: 14px;
color: rgb(0, 0, 0);
font-weight: bold;
}
h1{
text-align:center;
font-size: 30px;
color:#115e59;
font-weight: bold;
font-family: Arial black;    
}
h2{
font-family: 'Times New Roman', Times, serif;
font-size: 20px;
text-align: justify;    
}
.mx-auto{
    text-align: justify;
}
</style>

