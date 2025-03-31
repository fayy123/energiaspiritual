import React from 'react';
import './App.css';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Header from './components/Header.js';
import Section from './components/Section.js';
import Footer from './components/Footer.js';
import Service from './components/Service.js';
import { Helmet } from 'react-helmet-async';


function App() {
  return (
    < >
    
      <Header />
      <Section id="inicio" title="Bienvenida">
        <p>Soy un guía espiritual dedicado a ayudarte a reencontrarte con el amor, descubrir los secretos del destino y resolver tus problemas. Mis servicios están diseñados para brindarte paz, dirección y claridad en los momentos difíciles.</p>
      </Section>
      
      <Section id="servicios" title="Servicios">
        <div className="services">
          <Service title="Rituales para el Amor" description="Ayudo a que las parejas se reconcilien y vuelvan a conectarse. También puedo ayudarte a atraer el amor verdadero a tu vida." />
          <Service title="Lectura de Números de Lotería" description="Consulta para recibir números de la suerte que podrían ayudarte a cambiar tu fortuna." />
          <Service title="Ubicación de Huacas" description="Identifico lugares especiales de energía o sitios históricos para guiarte en el camino espiritual." />
          <Service title="Consejería Espiritual" description="Ofrezco sesiones de apoyo para resolver problemas personales, familiares o de pareja." />
        </div>
      </Section>
      <div className="overplay"></div>

      <section className="testimonials">
  <h2>Testimonios</h2>
  <p>"Gracias a su ayuda, logré reconciliarme con mi pareja y ahora estamos mejor que nunca." <br /> 
    - Cliente Satisfecho</p>
  <p>"Los números de lotería fueron una sorpresa increíble. ¡Sin duda volveré a consultar!" <br /> 
    - Cliente Afortunado</p>
  <p>"Desde la primera consulta, sentí una gran paz interior y claridad en mis decisiones." <br /> 
    - Cliente Inspirado</p>
  <p>"Su guía me ayudó a encontrar el camino correcto en mi vida. Eternamente agradecido." <br /> 
    - Cliente Transformado</p>
</section>

      <Section id="contacto" title="Contacto">
        <p>Puedes contactarme a través de mis redes sociales o WhatsApp. Haz clic en los íconos para comunicarte conmigo.</p>
        <div className="social-icons">
          <a href="https://www.facebook.com/share/18dcn3YY4t/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icon" />
          </a>
          <a href="https://www.instagram.com/indigenakatyusca?igsh=eGNlY2o5MGNsZW05" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
          <a href="https://wa.me/+50764824355" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="icon" />
          </a>
        </div>
      </Section>
      <Footer />
    </>
  );
}

export default App;