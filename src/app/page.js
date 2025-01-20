"use client";

import AppointmentForm from "@/components/AppointmentForm";
import Footer from "@/components/Footer.js"
import styles from './HomePage.module.css';
   

export default function HomePage() {
  return (
     
    <main className={styles.mainContainer}>
      
      <h1 className={styles.playwriteIn}>Bienvenido a Clínica Dentista</h1>
      {/* Nueva sección */}
      <section className={styles.descriptionSection}>
        <img 
         src="https://odontologia.iztacala.unam.mx/wp-content/uploads/2022/09/img_webSS01.jpg"
         alt="Los mejores en el país"
         className="styles.image" 
        />
        <div className={styles.textContent}>
        <h2>Nos dedicamos a ofrecerte la mejor atención dental</h2>
        <p>
        En nuestra clínica, nos comprometemos a brindarte un servicio de 
        alta calidad, con un equipo profesional y tecnología avanzada para cuidar de tu salud bucal. Trabajamos constantemente para ofrecerte los tratamientos más innovadores, adaptados a tus necesidades individuales. Desde consultas rutinarias hasta procedimientos más complejos, estamos dedicados a garantizar tu bienestar y comodidad en cada visita. Nos apasiona crear una experiencia positiva para todos nuestros pacientes, brindando confianza y seguridad en cada paso del camino hacia una sonrisa saludable.
       </p>

        </div>

      </section>

       {/* Formulario de citas */}

      <AppointmentForm />

      {/* Footer*/}

      <Footer />

    </main>
  );
}
