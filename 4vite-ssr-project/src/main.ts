/*
 * @Author: TerryMin
 * @Date: 2022-04-27 15:48:29
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-04-28 11:36:48
 * @Description: file not
 */
import { createSSRApp } from "vue";
import { createRouter } from "./router";
import { createStore, key } from "./store";
import { RouteRecordNormalized } from "vue-router";
import App from "./App.vue";
import i18n from './locales/ i18n'

export function createApp() {
    const app = createSSRApp(App);
    const router = createRouter();
    const { store } = createStore();

    router.beforeResolve(async (to, from) => {
        let toMatchedComponents = getMatchedComponents(to.matched);
        let fromMatchedComponents = getMatchedComponents(from.matched);
        // 优化过滤
        let isSameCompoent = false;
        let components = toMatchedComponents.filter((compnent, index) => {
            return isSameCompoent || (isSameCompoent = fromMatchedComponents[index] !== compnent);
        });

        console.log("[components]", components, toMatchedComponents, fromMatchedComponents);

        // 需要执行async的组件
        components.length &&
            (await Promise.allSettled(
                components.map((component) => {
                    // @ts-ignore
                    if (component.asyncData) {
                        // @ts-ignore
                        return component.asyncData({ store, route: to });
                    }
                })
            ));
    });

    app.use(store, key);
    app.use(i18n);
    app.use(router);
    return { app, router, store };
}

function getMatchedComponents(list: RouteRecordNormalized[]) {
    return list.map(({ components }) => {
        return components.default;
    });
}
