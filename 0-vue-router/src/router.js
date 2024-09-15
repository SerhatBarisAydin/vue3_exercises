/* vue js standartlarına göre router import edildi */
import { createRouter, createWebHistory } from "vue-router";
//import Home from "./views/Home.vue"

const routes = [
  {
    path: "/Anasayfa",
    //component: Home
    component: () => import("./views/home-cmp.vue"),
  },
  {
    path: "/hakkimda",
    component: () => import("./views/about-cmp.vue")
  },



];

const router = createRouter({
    /* yukarıda oluşturulan route array içeriisnde bulunan
     obje halindeki sayfaların yolunu biliyoruz */
    routes,

    /*  */
    history: createWebHistory()
});

export default router;
