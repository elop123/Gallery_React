import Img1 from '../assets/images/Img1.png'
import Img2 from '../assets/images/Img2.png'
import styles from '../style/Main.module.scss'
import Button from './Button';
 
function Main(){
return(
<>
<section className={styles.newStyle}>
    <div>
        
    </div>
<h2>UNDER THE MOON- NEW STYLE</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aliquid 
            odio aut quia officia deleniti nihil tempore repudiandae distinctio voluptate! 
            Exercitationem excepturi sunt quae doloribus commodi natus, beatae voluptas.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aliquid 
        odio aut quia officia deleniti nihil tempore repudiandae distinctio voluptate! 
        Exercitationem excepturi sunt quae doloribus commodi natus, beatae voluptas.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aliqui.</p>
        
<Button text="LÆS MERE" />
</section>
<section className={styles.gallery}>
<div>
<img src={Img1} alt="img1" />
<div className={styles.gal}>
<h3>One 2 One</h3>
<p className={styles.galleryText}>
            Lorem ipsum dolor sit amet consectetur adipisicing. 
            Exercitationem aliquid odio aut quia officia deleniti 
            nihil tempore repudiandae distinctio voluptate! 
            Exercitationem excepturi sunt quae doloribus commodi 
            natus, beatae voluptas.Lorem ipsum dolor sit amet consectetur
             adipisicing elit.</p>
<Button text="BOOK TID" />
</div>
</div>
<div>
<img src={Img2} alt="img2" />
<div className={styles.gal2}>
<h3>Loyalty Free</h3>
<p className={styles.galleryText}>
            Lorem ipsum dolor sit amet consectetur adipisicing. 
            Exercitationem aliquid odio aut quia officia deleniti 
            nihil tempore repudiandae distinctio voluptate! 
            Exercitationem excepturi sunt quae doloribus commodi 
            natus, beatae voluptas.Lorem ipsum dolor sit amet consectetur
             adipisicing elit.</p>
<Button text="LÆS MERE" />
</div>
</div>
</section>
</>
 
)
}
 
export default Main