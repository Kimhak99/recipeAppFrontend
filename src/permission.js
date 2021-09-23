import router, { adminRoutes } from './router';
import store from './store';
import Vue from "vue";

router.beforeEach((to, from, next) => {
    if (store.getters.token) {
        if (Object.keys(store.getters.userInfo).length == 0) {
            console.log(1);

            store.dispatch("getUserInfo")
                .then(res => {
                    if (res.user_info.is_admin) {
                        router.addRoute(adminRoutes)
                        next();
                    }
                    else {
                        next();
                    }
                })
        }
        else {
            next();
        }
    }
    else if (to.path != '/signin') {
        console.log(3);

        next({ path: '/signin', replace: true })
    } else {
        console.log(4);
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