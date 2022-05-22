/*
 * @Author: TerryMin
 * @Date: 2022-04-28 11:25:24
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-04-29 17:07:45
 * @Description: file not
 */

import { createI18n } from "vue-i18n";

import messages from "./getLangs";

export default createI18n({
	legacy: false,
	locale: window.localStorage.getItem("lang") || "zh_CN",
	messages,
});
