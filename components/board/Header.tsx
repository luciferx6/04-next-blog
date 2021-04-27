import Link from "next/link";

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/test">
        <a>Test</a>
      </Link>
      <Link href="/test-2">
        <a>Test 2</a>
      </Link>
    </header>
  );
};
