import Navbar from "./Navbar";
import headerImage from "../assets/images/header.jpg";
import style from '../style/Header.module.scss';
 
function Header({ headerText = "Mangler headerText" }) {
    return (
        <>
            <Navbar />
            <div className={style.headerContainer}>
                <img src={headerImage} alt="Header" className={style.headerImage} />
                <div className={style.headerTextContainer}>
                    <h1 className={style.headerTitle}>{headerText}</h1>
                </div>
                <div className={style.headerDescriptionContainer}>
                    <div className={style.headerDescriptionText}>
                        <p className={style.headerSubtitle}>HAIRSTYLIST OG FRISØR</p>
                        <p className={style.headerDescription}>
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