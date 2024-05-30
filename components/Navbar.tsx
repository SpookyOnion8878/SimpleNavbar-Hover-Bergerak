import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav>
      <ul className={styles.navbar}>
        {mounted && (
          <>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
