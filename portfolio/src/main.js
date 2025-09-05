import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCode,
  faSitemap,
  faPenNib,
  faTasks,
  faUserFriends,
  faMountain,
  faEnvelope,
  faCommentDots,
  faCodeBranch,
  faDatabase,
  faSun,
  faMoon,
  faFilePdf,
  faFileCode,
  faUser,
  faBolt,
  faMusic,
  faTableTennis,
  faHeadphones,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faCode,
  faSitemap,
  faPenNib,
  faTasks,
  faUserFriends,
  faMountain,
  faEnvelope,
  faCommentDots,
  faCodeBranch,
  faDatabase,
  faSun,
  faMoon,
  faFilePdf,
  faFileCode,
  faUser,
  faBolt,
  faMusic,
  faTableTennis,
  faHeadphones
);
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App);

app.use(router).mount("#app");

app.component("font-awesome-icon", FontAwesomeIcon);
