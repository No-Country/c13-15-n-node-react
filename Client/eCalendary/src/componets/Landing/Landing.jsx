import React from 'react';
import styles from './Landing.module.css';
import Footer from "../Footer/Footer"

const Landing = () => {
  return (
    <div className={styles.landing}>
      <div className={styles.text}>
        <h1>Bienvenido a E-Calendry</h1>
        <p>Descubre todas las increíbles funciones que tenemos para ti.</p>
        <button className={styles.button}>Prueba Gratis</button>
      </div>
      <div className={styles.image}>
        <img src="tu_imagen.jpg" alt="Imagen de bienvenida" />
      </div>
      <Footer/>
    </div>
  );
}

export default Landing;
