import React from 'react';
import styles from './Landing.module.css';
import Footer from "../Footer/Footer"

const Landing = () => {
  return (
    <div className={styles.landing}>
      <div className={styles.text}>
        <h1>Bienvenido a E-Calendary</h1>
        <p>Con nuestra aplicación, agendar citas nunca ha sido más fácil. Le proporcionamos un calendario intuitivo para que pueda elegir la cita que mejor se adapte a su horario. Simplifique la gestión de sus compromisos y reserve su próximo encuentro con solo unos pocos clics.</p>
        <button className={styles.button}>Prueba Gratis</button>
      </div>
      <div className={styles.image}>
        <img src="../src/assets/cale.jpeg" alt="Imagen de bienvenida" />
      </div>
      <Footer/>
    </div>
  );
}

export default Landing;
