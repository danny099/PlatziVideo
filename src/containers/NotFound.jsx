import React from 'react';
import '../assets/styles/components/NotFound.scss'

const NotFound = () => (
  <React.Fragment>
    <section className="error">
      <section className="error__container">
        <h2 className="error__container--title">404</h2>
        <p>Página no encontrada</p>
      </section>
    </section>
  </React.Fragment>
)

export default NotFound;
