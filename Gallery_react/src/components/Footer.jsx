import styles from '../style/Footer.module.scss'
 
function Footer (){
    return(
<>
<footer className={styles.main_footer}>
  <div className={styles.footerSection}>
<h2>SUBSCRIBE TO NEWSLATER</h2>
<form className={styles.form}>
<input type="text" placeholder ="Full name" className={styles.nameInput} />
<input type="email" placeholder ="Email" className={styles.emailInput} />
<button>SIGN UP</button>
</form>
</div>
<div className={styles.footerSection}>
<h2>QUIK LINKS</h2>
<ul className={styles.links}>
<li>Hjem</li>
<li>Om os</li>
<li>Prisliste</li>
<li>Booking</li>
<li>Prisliste</li>
<li>Kontakt</li>
</ul>
<h2>FOLLOW US</h2>
<div className={styles.icons}>
<img src="..//src/assets/images/twitter-sign.png"></img>
<img src="..//src/assets/images/twitter-sign.png"></img>
<img src="..//src/assets/images/twitter-sign.png"></img>
</div>
</div>
<div className={styles.footerSection}>
<h2>FIND US</h2>
<p>WhatsApp</p>
<p>+45 23 43 43 43</p>
<p>Telefonnummer</p>
<p> +45 58 84 84 84</p>
<p>Adresse</p>
<p> Supergatan 56,</p>
<p> Oslo, Norway</p>
</div>
</footer>
</>
    )
}
 
export default Footer