import Image from "next/image";
import styles from "./page.module.scss";
import Card from "@/components/ui/card/card";
import Header from "@/components/sections/header/header";
import Container from "@/components/sections/container/container";

export default function Home() {
  return (
    <main className={styles.main}>
      <Container>
        <Header />
        <div className={styles.grid}>
          <Card
            title="Questions"
            description="Answers to the personal questions in your application."
            href="/questions"
          />
          <Card
            title="Website Audit"
            description="A brief audit to improve IxDF's website and analytics setup."
            href="/audit"
          />
          <Card
            title="Analytics Plan"
            description="A high-level analytics implementation plan."
            href="/plan"
          />
        </div>
        <p>Best,</p>
        <p>Juan Sebastián</p>
      </Container>
    </main>
  );
}
