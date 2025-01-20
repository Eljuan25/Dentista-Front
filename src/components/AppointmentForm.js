"uses client"; // Habilita funciones del cliente como useState

import { useState } from "react";

export default function AppointmentForm() {
    const [formData, setFormData] = useState({
        
        name:"",
        phone: "",
        date: "",
        time: "",
    });
    const handleInpuntChange = (e) => {
        setFormData({ ...formData,[e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Enviando cita:" , formData);
        // Aquí se conecta la Api pero voy con el front primero.

    };

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Nombre:
                <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInpuntChange}
                required
                 />
            </label>
            <label>
                Telefono:
                <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInpuntChange}
                required
                 />
            </label>
            <label>
                Fecha:
                <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInpuntChange}
                required
                 />
            </label>
            <label>
                Hora:
                <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleInpuntChange}
                required
                 />
            </label>
            <button type="submit">Agendar Cita</button>
        </form>
        
    );

}
