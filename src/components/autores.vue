<template>
<div class="container" >
    <a class="links" id="paracadastro"></a>
    <a class="links" id="paralogin"></a>
    
    <div class="content">      

      <!--FORMULÁRIO DE CADASTRO-->
      <div id="cadastro">
        <h1 class="mt-6 text-3xl font-extrabold text-center text-gray-900">CADASTRO DE AUTORES</h1>
         </div>
         <div id="div">
        <form @submit.prevent="saveautor()" method="post" action=""> 
          <p> 
            <label for="name" class="mt-6 text-center text-gray-900">Nome</label>
            <input id="name" name="name" required="required" type="text" placeholder="Revolução dos Bichos" v-model="createautor.name"/>
          </p>
          
          <p> 
            <label for="description" class="mt-6 text-center text-gray-900">Descrição</label>
            <textarea id="description" name="description" required="required" type="text" rows="10" cols="47" placeholder="Uma das principais reflexões de 1984..." 
            maxlength="400" v-model="createautor.description"/>
          </p>
          
          <p> 
            <input type="submit" value="Cadastrar"/> 
          </p>
        </form>
        </div>
    </div>
  </div> 
</template>

<script>

import store from '../store.js';
import {Autor} from '../services/resources.js';

export default {
    
    data () {
        return {
            menuPerfil: false,
            createautor: {
              name: '',
              description: ''
            },
        }
    },
    computed: {
        isEmail() { //pegando informação (EMAIL) do usuário de sessão
            return store.state.auth.user.email
        }
    },
    methods: {
        saveautor() { 
        var msg = '';
        
        if ( this.createautor.name == null) {
          msg += "\n Voce deve informar um nome com pelo menos 2 carecteres ";
        }
        if (msg.length < 2) {
        Autor.save({}, {autor: this.createautor}).then(response => {
          // success callback
              console.log(this.createautor) 
              console.log("Criado com Sucesso!")           
          }, response => {    
          // error callback
          });
          } else {
            console.log("Falha ao Criar!")
          alert(msg);
        }
        alert("Autor cadastrado com sucesso!")
        window.location.reload()
        // store.dispatch('savelivro', this.livro)  
        //this.$router.push({name: 'Cadautores'});
        },

        crateLivro(){
            
        },
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
/* CSS reset */
*, *:before, *:after { 
  margin:0;
  padding:0;
  font-family: Arial,sans-serif;
}

body{
  margin:0px;
}

a{
  text-decoration: none;
}

/* esconde as ancoras da tela */
a.links{
  display: none;
}

/* content que contem os formulários */
.content{
  width: 450px;
  margin: 0px auto;
  position: relative;	
}

/* formatando o cabeçalho dos formulários */
h1{
  font-size: 30px;
  color: #115E59;
  padding: 10px 0;
  font-family: Arial black,;

  text-align: center;
  padding-bottom: 3px;
}
h1:after{
  content: ' ';
  display: block;
  width: 100%;
  height: 2px;
  margin-top: 10px;
  background: -webkit-linear-gradient(left, rgba(147,184,189,0) 0%,rgba(147,184,189,0.8) 20%,rgba(147,184,189,1) 53%,rgba(147,184,189,0.8) 79%,rgba(147,184,189,0) 100%); 
  background: linear-gradient(left, rgba(147,184,189,0) 0%,rgba(147,184,189,0.8) 20%,rgba(147,184,189,1) 53%,rgba(147,184,189,0.8) 79%,rgba(147,184,189,0) 100%); 
}

p{
  margin-bottom: 20px;
}
p:first-child{
  margin: 0px;
}
label{
  color: #405c60;
  position: relative;
}

/**** advanced input styling ****/
/* placeholder */
::-webkit-input-placeholder  {
  color: #bebcbc; 
  font-style: italic;
}
input:-moz-placeholder,
textarea:-moz-placeholder{
  color: #000000;
  font-style: arial;
} 
input {
  outline: none;
}

input:not([type="checkbox"]){
  width: 100%;
  margin-top: 4px;
  padding: 5px;	
  border: 0px solid #b2b2b2;
  
  -webkit-border-radius: 3px;
  border-radius: 3px;
  
  -webkit-box-shadow: 0px 1px 4px 0px rgba(168, 168, 168, 0.6) inset;
  box-shadow: 0px 1px 4px 0px rgba(168, 168, 168, 0.6) inset;
  
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
}

/*estilo do botão submit */
input[type="submit"]{
  width: 100%!important;
  cursor: pointer;	
  background: #115E59;
  padding: 8px 5px;
  color: #fff;
  font-size: 20px;	
  border: 1px solid #fff;	
  margin-bottom: 10px;	
  text-shadow: 0 1px 1px #333;
  
  -webkit-border-radius: 5px;
  border-radius: 5px;
  
  transition: all 0.2s linear;
}
input[type="submit"]:hover{
  background: #083532;
}

textarea:not([type="checkbox"]){
  width: 100%;
  margin-top: 4px;
  padding: 5px;	
  border: 0px solid #2e2e2e;
  
  -webkit-border-radius: 3px;
  border-radius: 3px;
  
  -webkit-box-shadow: 0px 1px 4px 0px rgba(168, 168, 168, 0.6) inset;
  box-shadow: 0px 1px 4px 0px rgba(168, 168, 168, 0.6) inset;
  
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
}

/*marcando os links para mudar de um formulário para outro */
.link{
  position: absolute;
  background: #e1eaeb;
  color: #ffffff;
  left: 0px;
  height: 20px;
  width: 440px;
  padding: 17px 30px 20px 30px;
  font-size: 16px;
  text-align: right;
  border-top: 1px solid #dbe5e8;

  -webkit-border-radius: 0 0  5px 5px;
  border-radius: 0 0  5px 5px;
}
.link a {
  font-weight: bold;
  background: #f7f8f1;
  padding: 6px;
  color: rgb(29, 162, 193);
  margin-left: 10px;
  border: 1px solid #cbd518;

  -webkit-border-radius: 4px;
  border-radius: 4px;  

  -webkit-transition: all 0.4s linear;
  transition: all 0.4s  linear;
}
.link a:hover {
  color: #ffffff;
  background: #f7f7f7;
  border: 1px solid #ffffff;
}

/* estilos para para ambos os formulários */

#div, 
#login{
  position: absolute;
  top: 90px;
  width: 100%;	
  padding: 18px 6% 60px 6%;
  margin: 10 0 20px 0;
  background: rgb(255, 255, 255);
  border: 1px solid rgba(147, 184, 189,0.8);
  
  -webkit-box-shadow: 5px;
  border-radius: 5px;
  
  -webkit-animation-duration: 0.5s;
  -webkit-animation-timing-function: ease;
  -webkit-animation-fill-mode: both;

  animation-duration: 0.5s;
  animation-timing-function: ease;
  animation-fill-mode: both;
}

#paracadastro:target ~ .content #cadastro,
#paralogin:target ~ .content #login{
  z-index: 2;
  -webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;

  -webkit-animation-delay: .1s;
  animation-delay: .1s;
}
#registro:target ~ .content #login,
#paralogin:target ~ .content #cadastro{
  -webkit-animation-name: fadeOutLeft;
  animation-name: fadeOutLeft;
}

/*fadeInLeft*/
@-webkit-keyframes fadeInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
  }
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

/*fadeOutLeft*/
@-webkit-keyframes fadeOutLeft {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(-20px);
  }
}

@keyframes fadeOutLeft {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-20px);
  }
}
</style>