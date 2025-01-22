import './globals.css'; 



export const metadata = {
  title: "Consultorió XYC",
  description: "Agenda tu cita fácilmente",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Carga de Font Awesome */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
