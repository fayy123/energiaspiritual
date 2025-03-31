import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
    <footer style={{ textAlign: "center", padding: "10px", background: "#444444" }}>
        <p>© {year} Guía Espiritual en Panamá. Todos los derechos reservados.</p>
    </footer>
    );
}

export default Footer;

