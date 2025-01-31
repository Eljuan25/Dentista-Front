import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import styles from './AppointmentForm.module.css';

export default function AppointmentForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        date: "",
        time: "",
    });

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [focusedFields, setFocusedFields] = useState({
        name: false,
        phone: false,
        date: false,
        time: false
    });
    const [minDate, setMinDate] = useState(null); // Estado para manejar la fecha mínima

    // Asegurándonos de que la fecha es la misma entre el servidor y el cliente
    useEffect(() => {
        // Usamos useEffect para que solo se ejecute en el cliente
        const initialDate = new Date().toISOString().split("T")[0];
        setFormData((prev) => ({ ...prev, date: initialDate }));
        setMinDate(new Date()); // Establecemos la fecha mínima solo en el cliente
    }, []);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFocus = (field) => {
        setFocusedFields({ ...focusedFields, [field]: true });
    };

    const handleBlur = (field) => {
        setFocusedFields({ ...focusedFields, [field]: formData[field] !== "" });
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setFormData({ ...formData, date: date.toISOString().split("T")[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Enviando cita:", formData);

        try {
            const response = await fetch("http://localhost:5000/api/appointments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Cita creada:", data);
            } else {
                console.error("Error al crear la cita:", response.statusText);
            }
        } catch (error) {
            console.error("Error de red:", error);
        }
    };

    if (!minDate) {
        // Evitamos renderizar el formulario hasta que el valor minDate esté listo
        return null;
    }

    return (
        <div className={styles.formContainer}>
            <div className={styles.formGroupContainer}>
                <h1 className={styles.playwriteIn}>Agenda Con Nosotros</h1>
                <form onSubmit={handleSubmit}>
                    {/* Nombre */}
                    <div className={styles.formGroup}>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            onFocus={() => handleFocus("name")}
                            onBlur={() => handleBlur("name")}
                            id="name"
                            required
                        />
                        <label
                            htmlFor="name"
                            className={formData.name || focusedFields.name ? styles.floated : ""}
                        >
                            Nombre
                        </label>
                    </div>

                    {/* Teléfono */}
                    <div className={styles.formGroup}>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            onFocus={() => handleFocus("phone")}
                            onBlur={() => handleBlur("phone")}
                            id="phone"
                            required
                        />
                        <label
                            htmlFor="phone"
                            className={formData.phone || focusedFields.phone ? styles.floated : ""}
                        >
                            Teléfono
                        </label>
                    </div>

                    {/* Fecha */}
                    <div className={styles.formGroup}>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            onFocus={() => handleFocus("date")}
                            onBlur={() => handleBlur("date")}
                            id="date"
                            required
                            min={minDate.toISOString().split("T")[0]} // Ahora usamos minDate aquí
                        />
                        <label
                            htmlFor="date"
                            className={formData.date || focusedFields.date ? styles.floated : ""}
                        />
                    </div>

                    {/* Hora */}
                    <div className={styles.formGroup}>
                        <input
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleInputChange}
                            onFocus={() => handleFocus("time")}
                            onBlur={() => handleBlur("time")}
                            id="time"
                            required
                        />
                        <label
                            htmlFor="time"
                            className={formData.time || focusedFields.time ? styles.floated : ""}
                        />
                    </div>

                    <button type="submit">Agendar Cita</button>
                </form>
            </div>

            {/* Calendario */}
            <div className={styles.calendarContainer}>
                <Calendar
                    onChange={handleDateChange}
                    value={selectedDate}
                    minDate={minDate} // Aquí usamos minDate también
                />
            </div>
        </div>
    );
}
