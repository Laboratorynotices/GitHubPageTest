import type { RouteRecordRaw } from "vue-router";
import type { MenuAndRouteElement, RouterLink } from "@/types";

/**
 * Вся структура сайта с управлением пунктов меню и маршрутов.
 */
const menuElements: Array<MenuAndRouteElement> = [
  {
    path: "/",
    name: "home",
    component: () => import("./views/HomeView.vue"),
    meta: { title: "Home" },
    nameMenu: "Home",
    showInMenu: true,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("./views/AboutView.vue"),
    nameMenu: "About",
    showInMenu: true,
  },
];

/**
 * Переводит структуру сайта в формат, подходящий для маршрутизатора.
 * @param menuElements все данные со структурой сайта
 * @returns данные подходящие для маршрутизатора
 */
const makeArrayOfRouteRecordRawFromMenuElements = (
  menuElements: Array<MenuAndRouteElement>
): Array<RouteRecordRaw> => {
  // Проходимся по каждому отдельному элементу по очереди
  return menuElements.map((element) => {
    // возвращаем лишь нужные данные
    return {
      path: element.path,
      name: element.name,
      component: element.component,
      meta: element.meta,
    } as RouteRecordRaw;
  });
};

/**
 * Экспортирует данные для маршрутизатора.
 */
export const routes: Array<RouteRecordRaw> =
  makeArrayOfRouteRecordRawFromMenuElements(menuElements);

/**
 * Переводит структуру сайта в формад, подходящий для отображения меню
 * @param menuElements все данные со структурой сайта
 * @returns данные подходящие для отображения меню
 */
const makeArrayOfRouterLinkFromMenuElements = (
  menuElements: Array<MenuAndRouteElement>
): Array<RouterLink> => {
  return (
    menuElements
      // Нас интересуют не все данные, а лишь, те что можно отобразить
      .filter((element) => {
        return element.showInMenu;
      })
      // Проходимся по каждому оставшемуся элементу по очереди
      .map((element) => {
        // возвращаем лишь нужные данные
        return {
          nameMenu: element.nameMenu,
          path: element.path,
          showInMenu: element.showInMenu,
        } as RouterLink;
      })
  );
};
  
/**
 * Экспортирует данные для меню
 */
export const navElements: Array<RouterLink> =
  makeArrayOfRouterLinkFromMenuElements(menuElements);
