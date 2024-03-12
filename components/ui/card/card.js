"use client";
import Link from "next/link";
import styles from "./card.module.scss";
import { IoArrowForwardOutline } from "react-icons/io5";

const Card = ({ title, description, href }) => {
  return (
    <Link href={href}>
      <div href={href} className={styles.card}>
        <h2>
          {title}{" "}
          <div className={styles.arrow}>
            <IoArrowForwardOutline />
          </div>
        </h2>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default Card;
