import React from 'react'
import '../assets/styles/components/Login.scss'
import googleIcon from '../assets/static/google-icon.png'
import twitterIcon from '../assets/static/twitter-icon.png'

const Login = () => (
    <section className="login">
        <section className="login__container">
            <h2>Inicia sesión</h2>
            <form className="login__container--form">
                <input className="input" type="text" placeholder="correo" />
                <input className="input" type="password" placeholder="contraseña" />
                <button className="button">Iniciar sesión</button>
                <div className="login__container--remember-me">
                    <label>
                        <input type="checkbox" id="cbox1" defaultValue="checkbox" /> Recuerdame
                    </label>
                    <a href="/">Olvide mi contraseña</a>
                </div>
            </form>
            <section className="login__container--social-media">
                <div>
                    <img src={googleIcon} alt="Google" />Inicia session con Google
                </div>
                <div>
                    <img src={twitterIcon} alt="Google" />Inicia session con Twitter
                </div>
            </section>
            <p className="login__container--register">No tienes ninguna cuenta <a href="registrar.html">Registrate</a></p>
        </section>
    </section>

);

export default Login;
