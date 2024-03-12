import React from "react";
import Link from "next/link";
import styles from "./backArrow.module.scss";
import { IoArrowForwardOutline } from "react-icons/io5";

const BackArrow = () => {
  return (
    <Link href="/">
      <div className={styles.backToHome}>
        <IoArrowForwardOutline />
      </div>
    </Link>
  );
};

export default BackArrow;
