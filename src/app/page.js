"use client";

import AppointmentForm from "@/components/AppointmentForm";

export default function HomePage(){
    return(
        <main>
            <h1>Bienvenido a Clinica Dentista</h1>
            <p>Agenda tu cita aquí facilmente.</p>
            <AppointmentForm />
        </main>
    );
}