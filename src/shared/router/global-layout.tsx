import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import * as styles from "./global-layout.css";

export default function GlobalLayout() {
  const location = useLocation();

  return (
    <div className={styles.globalLayoutContainer}>
      <Header location={location.pathname} />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      <Footer urlParameter={location.pathname} />
    </div>
  );
}
