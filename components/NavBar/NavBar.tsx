import Link from "next/link";
import styles from "./NavBar.module.scss";

export default function NavBar() {
    return (
        <div className={styles.links}>
            <Link href={"/"}>Main</Link>
            <Link href={"/characters"}>Characters</Link>
        </div>
    );
}

