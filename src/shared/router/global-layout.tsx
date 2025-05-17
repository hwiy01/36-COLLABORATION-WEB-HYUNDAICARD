import { Outlet } from "react-router-dom";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import * as styles from "./global-layout.css";

export default function GlobalLayout() {
  return (
    <div className={styles.globalLayoutContainer}>
      <Header />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
