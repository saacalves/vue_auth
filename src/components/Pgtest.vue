<template>
<div>
        <h1>RESUMOS</h1>

      <ul>
        <li v-for="livro in isLivros" v-bind:key="livro.id"><br/>
          <p>{{livro.name}},</p>
          <a>{{livro.author}},</a> <br/>
          <h2>{{livro.description}}</h2><br/>
        </li>
      </ul>
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
        abrir() {
            this.menuPerfil = this.menuPerfil == false ? true : false;
            },
        // User() {
        //     return User.get(id)
        // },
        // MethoddeTextoTeste() {
        //     return 'TESTE'
        // }
    }
  
}
</script>

<style scoped>
.mx-auto{
    text-align: justify;
}
p{
color: rgb(0, 0, 0);
font-weight: bold;
font-size: 20px;
}
a{
font-size: 12px;
color: rgb(0, 0, 0);
font-weight: bold;
}
h1{
text-align:center;
font-size: 30px;
color: rgb(0, 0, 0);
font-weight: bold;    
}
h2{
font-family: calibri;    
}
</style>