"use client";


import styles from './Footer.module.css';



export default function Footer () {
    return(
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <p className={styles.location}>
                📍 Ubicación: Calle Patría
                </p> 
                <p className={styles.phone}>
                📞 Teléfono: +52 123 456 7890
                </p>

            </div>
             {/* Mapa de Google */}
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.968449730865!2d-99.1408873!3d19.432607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92a7faff4a5%3A0x4a8a5e7bd9e15b11!2sZ%C3%B3calo%20de%20la%20Ciudad%20de%20M%C3%A9xico!5e0!3m2!1ses!2smx!4v1698412279417!5m2!1ses!2smx"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        </footer>
    );
}