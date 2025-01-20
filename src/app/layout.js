
export const metadata = {
  title: "Consultorió XYC",
  description: "Agenda tu cita fácilmente",
};


export default function RootLayout({children}){
  return(
    <html lang="es">
      <body>
        {/* Navbar séra un componente reutilizable */}
        {children}
      </body>
    </html>
  );
}