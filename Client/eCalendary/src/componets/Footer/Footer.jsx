import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.columns}>
      <h3 className={styles.hh}>Integrantes</h3>
      <div className={styles.column}>
          <h3 className={styles.titulo}></h3>
          <p><a href="https://www.linkedin.com/in/emanuel-gauler/" target="_blank" rel="noopener noreferrer" className={styles.link}>Emanuel Gauler || </a></p>
          <p><a href="https://www.linkedin.com/in/alejandra-motta-1b6b39287?trk=contact-info" target="_blank" rel="noopener noreferrer" className={styles.link}> Alejandra Motta || </a></p>
          <p><a href="https://www.linkedin.com/in/daniel-barraza-034952248" target="_blank" rel="noopener noreferrer" className={styles.link}>Daniel Barraza || </a></p>
          <p><a href="https://www.linkedin.com/in/alexbvart/" target="_blank" rel="noopener noreferrer" className={styles.link}>Alexander Briones || </a></p>
          <p><a href=" https://www.linkedin.com/in/gustavo-cubilla-0175a8241" target="_blank" rel="noopener noreferrer" className={styles.link}>Gustavo Cubilla || </a></p>
          <p><a href=" https://www.linkedin.com/in/pablo-silvawebdeveloper " target="_blank" rel="noopener noreferrer" className={styles.link}>Pablo Silva || </a></p>
          <p><a href="https://www.linkedin.com/in/marcelo-a-diaz-6a7926223/" target="_blank" rel="noopener noreferrer" className={styles.link}>Marcelo Díaz </a></p>
        </div>
        {/* <div className={styles.column}>
          <h3 className={styles.titulo}>Contacto</h3>
          <p><a className={styles.link} href="mailto:ecalendary@gmail.com?subject=Contacto%20desde%20mi%20sitio%20web&amp;body=Hola,%0D%0A%0D%0AQuería contactar con ustedes para obtener más información.%0D%0A%0D%0AGracias.%0D%0A%0D%0ASaludos">ecalendary@gmail.com</a></p>
          <p>(+54) 0800-E-Calendary</p>
        </div>
        <div className={styles.column}>
          <h3 className={styles.titulo}>Acerca de</h3>
          <p><a href="#" target="_blank" rel="noopener noreferrer" className={styles.link}>¿Quienes Somos?</a></p>
          <p>Nuestros valores</p>
          <p>Política de Privacidad</p>
        </div>
        <div className={styles.column}>
          <h3 className={styles.titulo}>Asistencia</h3>
          <p><a className={styles.link} href="mailto:ecalendary@gmail.com?subject=Contacto%20desde%20mi%20sitio%20web&amp;body=Hola,%0D%0A%0D%0AQuería contactar con ustedes para obtener más información.%0D%0A%0D%0AGracias.%0D%0A%0D%0ASaludos">¿Necesitas ayuda?</a></p>
          <p><a href="#" target="_blank" rel="noopener noreferrer" className={styles.link}>Preguntas Frecuentes</a></p>
        </div> */}
      </div>
      <footer className={styles.nav}>
        <p>© 2023 E-Calendry. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Footer;