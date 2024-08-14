import styles from '../style/Gallery.module.scss';

const images = import.meta.glob('../assets/images/*.png', { eager: true });

function Gallery() {
    return (
        <div className={styles.galleryContainer}>
            <h2 className={styles.galleryTitle}>FOLLOW US ON INSTAGRAM</h2>
            <div className={styles.galleryGrid}>
                {Object.values(images).map((image, index) => (
                    <div className={styles.galleryItem} key={index}>
                        <img src={image.default} alt={`Gallery ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery;
