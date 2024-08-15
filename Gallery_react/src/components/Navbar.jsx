import styles from '../style/Navbar.module.scss'
 
function Navbar() {
    return (
        <nav className={styles.navStyle}>
            <ul className={styles.navList}>
                <li className={styles.linkStyle}>HJEM</li>
                <li className={styles.linkStyle}>KONCEPTER</li>
                <li className={styles.linkStyle}>UTM LOYALTY</li>
                <li className={styles.linkStyle}>OM</li>
                <li className={styles.linkStyle}>KONTAKT</li>
            </ul>
        </nav>
    );
}
 
export default Navbar