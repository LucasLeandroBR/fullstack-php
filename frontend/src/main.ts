import { createApp } from "vue";
import DemoLayout from "./layouts/Demo.vue";

import "./assets/css/main.css";
import { router } from "@/routes";

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

createApp(DemoLayout).use(router).use(Toast).mount("#app");
