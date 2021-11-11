import router, { adminRoutes } from './router';
import store from './store';
import Vue from "vue";

router.beforeEach((to, from, next) => {
    console.log(to.path);

    if (store.getters.token) {
        console.log(1);

        if (Object.keys(store.getters.userInfo).length == 0) {
            store.dispatch("getUserInfo")
                .then(res => {
                    if (res.user_info.is_admin) {
                        router.addRoute(adminRoutes);
                    }

                    next({ path: to.path, replace: true });
                })
        }
        else {
            next();
        }
    }
    else {
        next()
    }
})