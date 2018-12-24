import { lazy } from "react";

const lazyImport = filename => lazy(() => import(`${filename}`));
const HomePage = lazyImport("./pages/HomePage");
const AboutPage = lazyImport("./pages/AboutPage");
const MenuPage = lazyImport("./pages/MenuPage");
const ContactPage = lazyImport("./pages/ContactPage");
const NoPage = lazyImport("./pages/NoPage");

export { HomePage, AboutPage, MenuPage, ContactPage, NoPage };
