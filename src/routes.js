import StartView from "./views/StartView";
import SkillsView from "./views/SkillsView";
import ContactView from "./views/ContactView";
import AboutView from "./views/AboutView";

const routes = [
  { name: "Start", exact: true, path: "/", component: StartView },
  { name: "Skills", exact: false, path: "/skills", component: SkillsView },
  { name: "About", exact: false, path: "/about", component: AboutView },
  { name: "Contact", exact: false, path: "/contact", component: ContactView }
];

export default routes;
