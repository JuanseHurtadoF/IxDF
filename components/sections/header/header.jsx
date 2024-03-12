"use client";
import styles from "./header.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";

const Header = () => {
  return (
    <div className={styles.header}>
      <Image src="/idf.svg" width={200} height={60} alt="IxDF Logo" />
      <h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Dear Yulia,
      </h1>
      <p>
        I might have taken &quot;Impress us with your delivery chops!&quot; a
        little too seriously.
      </p>
      <p>
        Jokes aside, thank you for taking the time to review my application. I
        am excited about the opportunity to work at IxDF.
      </p>
      <p>
        I have tried to answer all questions in the most sincere way. I have a
        strong belief that honesty is the best policy, especially when
        you&apos;re trying to see if someone is a good match for the company
        culture.
      </p>
      <p>
        Below, you will find a few cards that will take you to the different
        sections of my application. Hope you enjoy reading this as much as I
        enjoyed writing them.
      </p>
    </div>
  );
};

export default Header;
