/* vue js standartlarına göre router import edildi */
import { createRouter, createWebHistory } from "vue-router";
//import Home from "./views/Home.vue"


//name değeri hangi route da olduğumuzu belirtmede daha kolay olacaktır.
const routes = [
  {
    name: "HomePage",
    path: "/",
    //component: Home
    component: () => import("./views/home-page.vue"),
  },
  {
    name: "AboutPage",
    path: "/hakkimda",
    component: () => import("./views/about-page.vue")
  },
  {
    name: "DetailsPage",
    path:"/details/:userId",
    component: () => import("./views/details-page.vue")
  }



];

const router = createRouter({
    /* yukarıda oluşturulan route array içeriisnde bulunan
     obje halindeki sayfaların yolunu biliyoruz */
    routes,

    /*  */
    history: createWebHistory()
});

export default router;
