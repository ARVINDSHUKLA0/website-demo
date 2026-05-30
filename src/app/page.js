import Navbar from "@/component/Navbar";
import styles from "./page.module.css";
import Footer from "@/component/Footer";

export default function Home() {
  const CustomImg = [
    { id: "1", imges: "/assets/img/two.jpg", title: "Capturing Life's Beautiful Moments" },
    { id: "2", imges: "/assets/img/two.jpg", title: "Photography & Videography That Tells Stories" },
    { id: "3", imges: "/assets/img/two.jpg", title: "Where Every Click Becomes a Memory" },
    { id: "4", imges: "/assets/img/two.jpg", title: "Professional Photography & Cinematic Videography" },
    { id: "5", imges: "/assets/img/two.jpg", title: "Moments Captured. Stories Preserved." },
    { id: "6", imges: "/assets/img/two.jpg", title: "Turning Emotions Into Timeless Memories" },
    { id: "7", imges: "/assets/img/two.jpg", title: "Creative Photography & Video Production" },
    { id: "8", imges: "/assets/img/two.jpg", title: "Every Picture Has A Story" },
    { id: "9", imges: "/assets/img/two.jpg", title: "Life Through Our Lens" },
  ]
  return (
    <div className={styles.page}>
      <section>
        <div className={styles.customImges}>
          <img
            src="/assets/img/two.jpg"
            alt="Banner"
            className="img-fluid"
          />
          <div className={styles.navWrapper}>
            <Navbar />
          </div>
        </div>
      </section>
      <section className="container m-auto">
        <div className="py-5 ">
          <p className="fs-12 text-uppercase text-center fw-bold">shop photos</p>
          <h2 className={`text-center w-50 ${styles.custommargin}`}>Creativity, hard work and experience for your ideas</h2>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row m-0">
            {
            CustomImg.map((ShopProdut, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className={`${styles.ProductItem}`}>
                      <img className="img-fluid rounded-2" src={ShopProdut.imges} alt={ShopProdut.title} />
                  </div>
                    <h5 className="py-3 ps-2">{ShopProdut.title}</h5>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      <section className={`${styles.customBg} py-5`} >
            <div className="container py-5">
                <div className="d-flex align-items-center justify-content-between">
                    <div>
                        <h3>Wanna promote your brand?</h3>
                    </div>
                    <div>
                       <button className={`text-uppercase fs-14 fw-bold py-2 px-3 border-0 ${styles.CustomBtn}`}>contact</button>
                    </div>
                </div>
            </div>
      </section>
      <Footer/>
    </div>
  );
}