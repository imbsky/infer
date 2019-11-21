import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>Android and Java</>,
    description: (
      <>
        Infer checks for null pointer exceptions, resource leaks, annotation
        reachability, missing lock guards, and concurrency race conditions in
        Android and Java code.
      </>
    )
  },
  {
    title: <>C, C++, and iOS/Objective-C</>,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    )
  }
];

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title="Infer Static Analyzer | Infer"
      description={`${siteConfig.tagline}`}
    >
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">
            A tool to detect bugs in Java and C/C++/Objective-C code before it
            ships
          </h1>
          <p className="hero__subtitle">
            "Infer is a static analysis tool – if you give Infer some Java, or
            Objective-C/C++/C code, it produces a list of potential bugs."
          </p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/getting-started")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map(({ title, description }, idx) => (
                  <div key={idx} className="col col--6">
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        <section>
          <div className="container">
            <h2>Using Infer</h2>
            <p>
              Start with the <a href="/docs/getting-started">Getting Started</a>{" "}
              guide and our other <a href="/docs/getting-started">docs</a> to
              download and try Infer yourself. Infer is still evolving, and we
              want to continue to develop it in the open. We hope it will be
              useful for other projects, so please try it out or contribute to
              it, join the community and give us feedback!
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
