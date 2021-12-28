/* Lista dos componentes da aplicação
 * usados nas rotas e com os devidos 
 * controle de segurançã usando o JWT
 * autor: Antonio Junior Data: 10/12/2021 13:06
 */

// Importes dos componentes da pasta de components
import LoginComponent from './components/auth/Login.vue';
import LogoutComponent from './components/auth/Logout.vue';
import Pgtest from './components/Pgtest.vue';
import Dashboard from './components/Dashboard.vue';
import Autores from './components/autores.vue';
import Cadautores from './components/Cadautores.vue';
import Editarlivro from './components/editarlivro.vue';


export default [
    {
        name: 'auth.login',
        path: '/',
        component: LoginComponent,
        meta: {auth: false}
    },
    {
        name: 'auth.logout',
        path: '/logout',
        component: LogoutComponent,
        meta: {auth: true}
    },
    {
        name: 'pgtest',
        path: '/meuslivros',
        component: Pgtest,
        meta: {auth: true}
    },
    {
        name: 'dashboard',
        path: '/cadastrarlivros',
        component: Dashboard,
        meta: {auth: true}
    },
    {
        name: 'autores',
        path: '/cadastrarautores',
        component: Autores,
        meta: {auth: true}
    },
    {
        name: 'Cadautores',
        path: '/autores',
        component: Cadautores,
        meta: {auth: true}
    },
    {
        name: 'editarlivro',
        path: '/editarlivro',
        component: Editarlivro,
        meta: {auth: true}
    }

];