"uses client"; // Habilita funciones del cliente como useState

import { useState } from "react";
import styles from './AppointmentForm.module.css'; 

export default function AppointmentForm() {
    const [formData, setFormData] = useState({
        
        name:"",
        phone: "",
        date: "",
        time: "",
    });
    const handleInputChange = (e) => {
        setFormData({ ...formData,[e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Enviando cita:" , formData);
        // Aquí se conecta la Api pero voy con el front primero.

    };

    return(
        <div className={styles.formContainer}>
        <h1 className={styles.playwriteIn}>Agenda Con Nosotros</h1>
        <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    id="name"
                    required
                />
                <label htmlFor="name" className={formData.name || document.getElementById("name")?.focused ? styles.floated : ""}>
                    Nombre
                </label>
            </div>

            <div className={styles.formGroup}>
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    id="phone"
                    required
                />
                <label htmlFor="phone" className={formData.phone || document.getElementById("phone")?.focused ? styles.floated : ""}>
                    Teléfono
                </label>
            </div>

            <div className={styles.formGroup}>
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    id="date"
                    required
                />
                <label htmlFor="date" className={formData.date || document.getElementById("date")?.focused ? styles.floated : ""}>
                   
                </label>
            </div>

            <div className={styles.formGroup}>
                <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    id="time"
                    required
                />
                <label htmlFor="time" className={formData.time || document.getElementById("time")?.focused ? styles.floated : ""}>
                
                </label>
            </div>

            <button type="submit">Agendar Cita</button>
        </form>
    </div>
        
    );

}
