/*
 * @Author: TerryMin
 * @Date: 2023-09-25 20:22:44
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-11-08 14:06:44
 * @Description: file not
 */
class IndexVue {
  #name = "terrymin";
  constructor(options) {
    this.sdk = "we";
    this.options = options;
  }
  importSdk(name) {
    console.log(name);
  }
}
const instance = new IndexVue({ sex: "boy" });

instance.importSdk("ShangeHai");
