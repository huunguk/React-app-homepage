import React from "react";
import styles from "./brand.module.css";
import Footer from "./footer";
import BrandItems from "./brandItem";



function Brand() {
  return (
    <div>
      <div className={styles.mainimg}></div>
      <div className={styles.contents}>
        <div className={styles.content_in}>
          <div className={styles.ttl}>
            <h3>Best Brand</h3>
          </div>
          <BrandItems />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Brand;
