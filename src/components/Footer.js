import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Ubicación y Teléfono */}
        <p className={styles.location}>📍 Ubicación: Calle Patria</p>
        <p className={styles.phone}>📞 Teléfono: +52 123 456 7890</p>
      </div>

      {/* Mapa de Google */}
      <div className={styles.mapContainer}>
        <h3>Ubicación</h3>
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Newsletter */}
      {/*
      <div className={styles.newsletter}>
        <h3>    
          Newsletter
          <div className={styles.underline}>
            <span></span>
          </div>
        </h3>
        <form className={styles.form}>
          <i className="fa-solid fa-envelope"></i>
          <input type="text" placeholder="Enter Company Email" />
          <button type="submit">
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </form>
      </div> 
     */}

      {/* Íconos Sociales */}
      <div className={styles.socialIcons}>
        <a href="#"><i className="fa-brands fa-facebook"></i></a>
        <a href="#"><i className="fa-brands fa-instagram"></i></a>
        <a href="#"><i className="fa-brands fa-youtube"></i></a>
        <a href="#"><i className="fa-brands fa-google-plus"></i></a>
      </div>
    </footer>
  );
}

