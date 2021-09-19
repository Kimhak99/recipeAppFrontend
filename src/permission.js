import router, { adminRoutes } from './router';
import store from './store';
// import _ from "lodash";
import Vue from "vue";

router.beforeEach((to, from, next) => {
    if (store.getters.token) {
        if (Object.keys(store.getters.userInfo).length == 0) {
            store.dispatch("getUserInfo")
                .then(res => {
                    if(res.user_info.is_admin){
                        adminRoutes.forEach(p => router.addRoute(p));
                    }

                    next()
                })
                .catch(err =>{
                    console.log(err)
                    next({name: "NotFound"})
                })
        }
        else{
            next();
        }
    }
    else if (to.path != '/signin') {
        next({ path: '/signin', replace: true })
    } else {
        next()
    }

    //add role check condition
    //where? in here
})

Vue.mixin({
    data() {
        return {
            functionName: ''
        }
    },

});