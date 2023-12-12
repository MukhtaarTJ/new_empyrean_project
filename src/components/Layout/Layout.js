import { Fragment } from "react";
import AppRoutes from "../Routes/AppRoutes";
import MainNav from "./MainNav";
import Footer from "./Footer";

const Layout = () => {
  return (
    <Fragment>
      <header>
        <MainNav />
      </header>
      <main >
        <AppRoutes />
      </main>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
};

export default Layout;
