import style from '../style/Navbar.module.scss';

function Navbar() {
    return (
        <nav className={style.navStyle}>
            <ul className={style.navList}>
                <li className={style.linkStyle}>HJEM</li>
                <li className={style.linkStyle}>KONCEPTER</li>
                <li className={style.linkStyle}>UTM LOYALTY</li>
                <li className={style.linkStyle}>OM</li>
                <li className={style.linkStyle}>KONTAKT</li>
            </ul>
        </nav>
    );
}

export default Navbar;
