import Vue from 'vue';
import Vuex from 'vuex';

import { login, getUserInfo } from "@/api/generalAPI";
import { meta } from "@/utils/enum";
import { getToken, setToken, removeToken } from '@/utils/auth';
import { adminRoutes } from './router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: getToken(),
    userInfo: {},
    drawer: null,
    routes: [],
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    },
    SET_USERINFO: (state, info) => {
      state.userInfo = info
    },
    SET_DRAWER: (state, info) => {
      state.drawer = info
    },
    SET_ROUTES: (state, info) => {
      state.routes = info
    },
  },
  actions: {
    //invoke one of these
    Login({ commit }, userInfo) { //here i use login, in view n route, i use signin.. ik, i can see that\, just pick up, ok
      return new Promise((resolve, reject) => {
        return login(userInfo).then(res => {
          if (res.meta == meta.OK) {
            setToken(res.data);
            commit('SET_TOKEN', res.data);
          }
          resolve(res);
        }).catch(error => {
          reject(error);
        })
      })
    },
    LogOut({ commit }) {
      return new Promise((resolve) => {
        commit('SET_TOKEN', '');
        commit('SET_USERINFO', {});
        //   commit('SET_PERMISSION', {});
        removeToken();
        resolve();
      })
    }, //LogOut captial log captial out
    getUserInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getUserInfo().then(res => {
          commit('SET_USERINFO', res.user_info);
          // commit('SET_PERMISSION', res.permission_info);
          resolve(res)
        }).catch(error => {
          reject(error)
        })
          .catch(err => console.log(err))
      })
    },
    SetDrawer({ commit }, value) {
      commit('SET_DRAWER', value);
    },
    SetRoutes({ commit }, value) {
      return new Promise((resolve) => {

        if (value.is_admin) {
          commit("SET_ROUTES", adminRoutes);
          resolve(adminRoutes);
          return;
        }

        commit("SET_ROUTES", []);
        resolve([]);
      })
    },
  },
  getters: {
    token: state => state.token,
    userInfo: state => state.userInfo,
    drawer: state => state.drawer,
    routes: state => state.routes,
  }
})

