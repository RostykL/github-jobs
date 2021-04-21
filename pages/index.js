import Head from "next/head";
import SearchBar from "../components/Searchbar";
import Nav from "../components/Nav/index";

import styles from "../styles/Home.module.scss";
import { default as searchbarstyles } from "../components/Searchbar/searchbar.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className={searchbarstyles.searchbar_wrapper}>
          <SearchBar />
        </div>
      </header>
      <main className={styles.main}>main</main>
      <footer className={styles.footer}>
        <Nav />
        footer
      </footer>
    </div>
  );
}
