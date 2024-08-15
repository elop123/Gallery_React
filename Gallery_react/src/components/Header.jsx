import Navbar from "./Navbar";
import headerImage from "../assets/images/header.jpg";
import styles from '../style/Header.module.scss';
 
function Header({ headerText = "Mangler headerText" }) {
    return (
        <>
            <Navbar />
            <div className={styles.headerContainer}>
                <img src={headerImage} alt="Header" className={styles.headerImage} />
                <div className={styles.headerTextContainer}>
                    <h1 className={styles.headerTitle}>{headerText}</h1>
                </div>
                <div className={styles.headerDescriptionContainer}>
                    <div className={styles.headerDescriptionText}>
                        <p className={styles.headerSubtitle}>HAIRSTYLIST OG FRISØR</p>
                        <p className={styles.headerDescription}>
                            Lorem ipsum dolor sit amet consectetur. Laoreet in vestibulum id in.
                            At aliquam sed nibh elementum. Gravida et tellus quam nibh diam
                            blandit a odio semper. Eu congue eget dolor commodo pellentesque
                            et ac orci. Accumsan rhoncus sed fermentum malesuada. Eu risus
                            integer consequat egestas diam suspendisse consequat mattis.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Header;