import { render, router } from "./src/lib";
import AdminContacts from "./src/Pages/admin/AdminContacts";
import AdminHomePage from "./src/Pages/admin/AdminHomePage";
import AdminProject from "./src/Pages/admin/AdminProject";
import AdminProjectAdd from "./src/Pages/admin/AdminProject-Add";
import AdminProjectEdit from "./src/Pages/admin/AdminProject-Edit";
import { HomePage } from "./src/Pages/HomePage";
import SigninPage from "./src/Pages/SigninPage";
import SignupPage from "./src/Pages/SignupPage";

const app = document.querySelector("#app");

router.on("/", () => render(HomePage, app));
router.on("/signin", () => render(SigninPage, app));
router.on("/signup", () => render(SignupPage, app));
router.on("/admin", () => render(AdminHomePage, app));
router.on("/admin/contact", () => render(AdminContacts, app));
router.on("/admin/project", () => render(AdminProject, app));
router.on("/admin/project/add", () => render(AdminProjectAdd, app));
router.on("/admin/project/:id/edit", ({ data }) =>
  render(() => AdminProjectEdit(data), app)
);
router.resolve();
