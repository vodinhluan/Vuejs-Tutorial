import { createRouter, createWebHistory } from "vue-router"; // 2 phuong thuc
import admin from "./admin.js";

const routes = [...admin]; // routes là một mảng các đối tượng route được lấy từ module admin.js

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;