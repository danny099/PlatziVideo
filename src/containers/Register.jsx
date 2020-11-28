import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/components/Login.scss'
import googleIcon from '../assets/static/google-icon.png'
import twitterIcon from '../assets/static/twitter-icon.png'

const Register = () => (
<section className="login">
    <section className="login__container">
        <h2>Registrate</h2>
        <form className="login__container--form">
            <input className="input" type="text" placeholder="Nombre" />
            <input className="input" type="text" placeholder="correo" />
            <input className="input" type="password" placeholder="contraseña" />
            <button className="button">Registrarme</button>
        </form>
        <p className="login__container--iniciar">
            <Link to="/login">
                Iniciar sesión
            </Link>
        </p>
    </section>
</section>

);

export default Register;
