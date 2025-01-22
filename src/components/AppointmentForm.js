"use client";

import { useState } from "react";
import Calendar from "react-calendar";  // Importamos el calendario
import styles from './AppointmentForm.module.css'; 

export default function AppointmentForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        date: "",
        time: "",
    });
    const [selectedDate, setSelectedDate] = useState(new Date());  // Estado para el calendario

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);  // Actualiza la fecha seleccionada
        setFormData({ ...formData, date: date.toISOString().split("T")[0] }); // Formatea la fecha para el formulario
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Enviando cita:", formData);
        // Aquí se conecta la Api
    };

    return (
        <div className={styles.formContainer}>
            {/* Formulario */}
            <div className={styles.formGroupContainer}>
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
                            Fecha
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
                            Hora
                        </label>
                    </div>

                    <button type="submit">Agendar Cita</button>
                </form>
            </div>

            {/* Calendario */}
            <div className={styles.calendarContainer}>
                <Calendar
                    onChange={handleDateChange}  // Llama a la función cuando se selecciona una fecha
                    value={selectedDate}  // Muestra la fecha seleccionada
                />
            </div>
        </div>
    );
}
