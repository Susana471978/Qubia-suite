import '../App.css'
import { useNavigate } from 'react-router-dom'
import qubiaLogo from '../assets/qubia-orbital.png'

function LoginPage() {
  const navigate = useNavigate()

  const handleLogin = (event) => {
    event.preventDefault()
    navigate('/suite')
  }
  return (
    <main className="login-page">

      <section className="brand-panel">

        <div className="brand-header">
          <img
            src={qubiaLogo}
            alt="Qubia"
            className="qubia-logo"
          />

          <div>
            <p className="suite-name brand-title">
  <span className="brand-qubia">
    Qub<span className="brand-i">ı</span>a
  </span>
  <span className="brand-product"> Suite</span>
</p>
            <p className="suite-tagline">
              Tus asistentes. Tu negocio. Un solo lugar.
            </p>
          </div>
        </div>

        <div className="brand-copy">
          <p className="eyebrow">QUBIA SUITE</p>

          <h1>
            Tus asistentes.
            <br />
            Tu negocio.
            <br />
            <span>Un solo lugar.</span>
          </h1>

          <p className="intro">
            Gestiona asistentes, conversaciones, leads y analítica
            desde un único espacio de trabajo.
          </p>
        </div>

        <div className="assistant-grid">

          <article>
            <div className="assistant-icon">✦</div>
            <h3>Qubia Hospitality</h3>
            <p>Reservas y atención</p>
          </article>

          <article>
            <div className="assistant-icon">⌂</div>
            <h3>Qubia Real Estate</h3>
            <p>Propiedades, leads y visitas</p>
          </article>

          <article>
            <div className="assistant-icon">◌</div>
            <h3>Qubia Stay</h3>
            <p>Atención al huésped</p>
          </article>

        </div>

      </section>

      <section className="login-panel">

        <div className="login-card">

          <div className="login-logo-wrap">
            <img
              src={qubiaLogo}
              alt="Qubia"
              className="login-logo"
            />
          </div>

          <h2>Bienvenido</h2>
          <p>Accede a tu espacio Qubia</p>

          <form onSubmit={handleLogin}>

            <label>
              Correo electrónico
              <input
                type="email"
                placeholder="tu@empresa.com"
              />
            </label>

            <label>
              Contraseña
              <input
                type="password"
                placeholder="••••••••"
              />
            </label>

            <div className="form-options">

              <label className="remember">
                <input type="checkbox" />
                Recordarme
              </label>

              <button type="button" className="link-button">
                ¿Olvidaste tu contraseña?
              </button>

            </div>

            <button className="primary-button" type="submit">
              Iniciar sesión
            </button>

            <button className="secondary-button" type="button">
              Solicitar demo
            </button>

          </form>

          <small>Acceso seguro y cifrado</small>

        </div>

      </section>

    </main>
  )
}

export default LoginPage
