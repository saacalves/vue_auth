import Vue from 'vue';
import Vuex from 'vuex';
import {TimeModel} from './time-model';
import JwtToken from './services/jwt-token';
import {Time, User} from './services/resources';
import SessionStorage from './services/session-storage';


Vue.use(Vuex);


const state = {
    times: [],
    auth: {
        check: JwtToken.token != null,
        user: SessionStorage.getObject('user')
    }
};

const mutations = {
    'set-times'(state, times){
        state.times = times;
    },
    update(state, time){
        let index = state.times.findIndex(element => time.id == element.id);
        if (index != -1) {
            state.times[index] = time;
        }
    },
    //2X A MESMA COISA???
    setUser(state,user){
        SessionStorage.setObject('user', user);
        state.auth.user = user;
    },
    authenticated(state){
        state.auth.check = true;
    },
    unauthenticated(state){
        state.auth.check = false;
        state.auth.user = null;
        SessionStorage.remove('user');
        JwtToken.token = null;
    }
};

const actions = {
    'load-times'(context){
        Time.query().then(response => {
            let times = response.data.map(element => new TimeModel(element.id, element.nome, element.escudo));
            context.commit('set-times', times);
        });
    },
    //recebe os paramentos de user (email, password)
    // OQUE É CONTEXT (ainda não entendi muito bem)????
    login(context, {email, password}){
        // OQUE É ACCESSTOKEN E PQ ELE RECEBE O EMAIL E SENHA????
        return JwtToken.accessToken(email, password)
            .then(response => {
                // SETA O ESTADO DO USER COMO AUTENTICADO
                context.commit('authenticated');
                // SETA O SESSIONSTORAGE DO USER
                context.dispatch('getUser');
            return response;
        })
    },
    
    //explicar
    getUser(context){
        User.query().then(response => {
            context.commit('setUser', response.data.user);
        })
    }
};

export default new Vuex.Store({
    state,
    getters: {
        timesLibertadores: state => state.times.slice(0, 6),
        timesRebaixados: state => state.times.slice(16, 20),
    },
    mutations,
    actions
});