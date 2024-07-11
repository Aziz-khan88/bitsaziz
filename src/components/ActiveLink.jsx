import Link from "next/link";
import { usePathname } from "next/navigation"
import React from "react";
import styles from "../../styles/NewHeader.module.css";


const ActiveLink = ({ href, text, className = "", handle }) => {

  const router = usePathname();
  const currentRoute = router;
  return (
    <button className={styles.megaButton} onClick={handle}>
      <Link
        href={href}
        className={`manrope
        ${currentRoute === href ? `${styles.tabLink}` : `${styles.myLink}`}
        ${className}
      `}
      >
        {text}
      </Link>
    </button>
  );
};
export default ActiveLink;
