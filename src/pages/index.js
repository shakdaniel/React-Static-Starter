import { lazy } from "react";

const lazyImport = filename => lazy(() => import(`${filename}`));
const HomePage = lazyImport("./HomePage");
const AboutPage = lazyImport("./AboutPage");
const MenuPage = lazyImport("./MenuPage");
const ContactPage = lazyImport("./ContactPage");
const NoPage = lazyImport("./NoPage");

export { HomePage, AboutPage, MenuPage, ContactPage, NoPage };
