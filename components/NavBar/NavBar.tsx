import Link from "next/link";
import styles from "./NavBar.module.scss";

export default function NavBar() {
    return (
        <div className={styles.links}>
            <Link href={"/"} className={styles.link}>Main</Link>
            <Link href={"/characters"} className={styles.link}>Characters</Link>
        </div>
    );
}

