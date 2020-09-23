/*
 * @Description: 
 * @version: 
 * @Author: camus
 * @Date: 2020-09-21 15:50:07
 * @LastEditors: camus
 * @LastEditTime: 2020-09-23 11:36:23
 */

import { createRouter, createWebHistory } from 'vue-router';
import Page1 from "../components/learnRouter/page1.vue";
import Page2 from "../components/learnRouter/page2.vue";
const routes = [
  { path: "/page1", name: "page1", component: Page1 },
  { path: "/page2", name: "page2", component: Page2 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
