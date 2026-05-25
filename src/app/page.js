import Navbar from "@/component/Navbar";
import styles from "./page.module.css";
import Banner from "@/component/Banner";
import Footer from "@/component/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar/>
      <Banner/>
      <Footer/>
    </div>
  );
}
