<!--
 * @Author: TerryMin
 * @Date: 2022-04-27 15:48:29
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-05-22 08:43:48
 * @Description: file not
-->
<template>
  <h3>客户端</h3>
  <div>
    client:{{ client }}
  </div>

  <div>
    <a
      href="javascript:;"
      @click="setLocals(locale === 'zh_CN' ? 'en' : 'zh_CN')"
    >
          {{ locale === "zh_CN" ? "中" : "英" }}
    </a>
    <p>{{ t(`index.title`) }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, isReactive, toRefs, reactive, ref } from "vue";
import { Store, useStore } from "vuex";
import { AsyncDataParam, key, State } from "@/store";
import { useI18n } from "vue-i18n";

export default defineComponent({
  asyncData({ store }: AsyncDataParam) {
    console.log("[AYSNC_CLIENT]");

    return store.dispatch("AYSNC_CLIENT");
  },
  setup(props, context) {
    const { client } = useStore<State>(key).state;

    console.log(">>>", client, isReactive(client));

    const { t, locale } = useI18n();
    const getLocals = () => window.localStorage.getItem("lang") || locale.value;
    console.log(getLocals());
    const currentLocale = ref(getLocals());

    const setLocals = (lang = "") => {
      locale.value = lang;

      window.localStorage.setItem("lang", lang);
    };

    if (!window.localStorage.getItem("lang")) {
      setLocals(currentLocale.value);
    } else {
      if (currentLocale.value !== locale.value) {
        setLocals(currentLocale.value);
      }
    }

    return {
      client,
      t,
      locale,
      setLocals
    };
  }
});
</script>
<style lang="scss"></style>
