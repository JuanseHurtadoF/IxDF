"use client";
import styles from "./moreInfo.module.scss";
import { CiCircleInfo } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const MoreInfo = ({ preview, children }) => {
  const [showMore, setShowMore] = useState(false);

  const showMoreInfo = () => {
    setShowMore(!showMore);
  };

  return (
    <div onClick={showMoreInfo} className={styles.moreInfo}>
      <div className={styles.preview}>
        <div className={styles.previewInfo}>
          <CiCircleInfo size={20} />
          <p className={styles.previewText}>{preview}</p>
        </div>
        <div className={styles.arrow}>
          <IoIosArrowDown size={20} />
        </div>
      </div>
      <div data-show={showMore} className={styles.showMoreContent}>
        <div className={styles.moreText}>{children}</div>
      </div>
    </div>
  );
};

export default MoreInfo;
