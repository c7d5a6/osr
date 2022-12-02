import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div>
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.tagline}</h1>
          <div className={styles.buttons}>
          </div>
        </div>
      </header>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`}>
      <HomepageHeader />
      {/* <div className="div-img" style="width:50%"> */}
        <img className="img center-img" src="/img/main.webp"></img>
      {/* </div> */}
    </Layout>
  );
}
