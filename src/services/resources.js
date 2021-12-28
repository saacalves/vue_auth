import Vue from 'vue';
import VueResource from 'vue-resource';
//import AxiosPlugin from 'axios';
 
// Vue.use(AxiosPlugin)

// var cors = require('cors')
// Vue.use(cors);

Vue.use(VueResource);


require('./interceptors');

export class Jwt{

    static accessToken(email, password){
        return Vue.http.post('http://localhost:3000/auth', {
            email,
            password
        });
    }

    static refreshToken(){
        return Vue.http.post('http://localhost:3000/api/refresh_token');
    }
}

export class createlivro{

    static criarlivro(name, author, description){
        return Vue.http.post('http://localhost:3000/livros', {
            name,
            author,
            description
        });
    }
    
}

const Livroid = Vue.resource(`http://localhost:3000/livros{/id}`);
const Livro = Vue.resource('http://localhost:3000/livros');
const Autor = Vue.resource('http://localhost:3000/autors');
const User = Vue.resource('http://localhost:3000/users');


export {Autor, Livro, User, Livroid};