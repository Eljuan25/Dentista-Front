'use client'

import Link from "next/link";
import '../app/styles/Header.css';

export default function Header () {
    return (
        <header className="contenedor">
            <div >   
                <div>
                    <p>Dr. Miguel Puga Preciado</p>

                </div>
                <nav>
                    <Link href="/">Cerrar Sesión</Link>
                </nav>
             </div>    
        </header>
        
    )
}