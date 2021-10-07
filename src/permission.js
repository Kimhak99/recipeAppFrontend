import router, { adminRoutes } from './router';
import store from './store';
import Vue from "vue";

router.beforeEach((to, from, next) => {
    if (store.getters.token) {
        console.log(1);

        if (Object.keys(store.getters.userInfo).length == 0) {
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
        console.log(2);
        next({ path: '/signin', replace: true })
    } else {
        console.log(3);
        next()
    }
})

Vue.mixin({
    data() {
        return {
            functionName: ''
        }
    },

});