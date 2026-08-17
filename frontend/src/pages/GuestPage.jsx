import { Link } from 'react-router-dom'
import qubiaLogo from '../assets/qubia-orbital.png'
import './GuestPage.css'

function GuestPage() {
  return (
    <main className="guest-page">

      <aside className="guest-sidebar">

        <div className="guest-brand">
          <img src={qubiaLogo} alt="Qubia" />
          <div>
            <strong>QUBIA</strong>
            <span>GUEST</span>
          </div>
        </div>

        <nav className="guest-nav">
          <a href="#" className="active">⌂ <span>Resumen</span></a>
          <a href="#">◌ <span>Conversaciones</span></a>
          <a href="#">◇ <span>Huéspedes</span></a>
          <a href="#">✦ <span>Consultas</span></a>
          <a href="#">✓ <span>Solicitudes</span></a>
          <a href="#">↗ <span>Informes</span></a>
          <a href="#">⚙ <span>Configuración</span></a>
        </nav>

        <Link to="/suite" className="guest-back">
          ← Volver a Suite
        </Link>

      </aside>

      <section className="guest-main">

        <header className="guest-header">

          <div className="guest-heading">
            <img src={qubiaLogo} alt="" />

            <div>
              <h1 className="brand-title">
                <span className="brand-qubia">
                  Qub<span className="brand-i">ı</span>a
                </span>
                <span className="brand-product"> Guest</span>
              </h1>

              <p>Atención al huésped antes, durante y después de la estancia.</p>
            </div>
          </div>

          <div className="guest-actions">
            <button>Nueva consulta</button>
            <button>+ Añadir alojamiento</button>
          </div>

        </header>

        <section className="guest-hero">

          <div>
            <h2>
              Atención continua.
              <br />
              <span>Experiencias mejores.</span>
            </h2>

            <p>
              Qubia responde preguntas frecuentes, informa sobre el alojamiento
              y acompaña al huésped durante toda su estancia.
            </p>

            <div className="guest-search">
              <input
                type="text"
                placeholder="Ej. ¿A qué hora puedo hacer el check-in?"
              />
              <button>Consultar</button>
            </div>
          </div>

          <div className="guest-summary">

            <div className="summary-card">
              <span>Consultas hoy</span>
              <strong>137</strong>
            </div>

            <div className="summary-card">
              <span>Resueltas automáticamente</span>
              <strong>128</strong>
            </div>

            <div className="summary-card">
              <span>Huéspedes activos</span>
              <strong>46</strong>
            </div>

            <div className="summary-card">
              <span>Solicitudes especiales</span>
              <strong>9</strong>
            </div>

          </div>

        </section>

        <section className="guest-content">

          <article className="guest-panel">

            <div className="panel-title">
              <h3>Consultas frecuentes</h3>
            </div>

            <div className="guest-grid">

              <article>
                <span>⌂</span>
                <h4>Check-in / Check-out</h4>
                <p>Horarios, accesos y salida.</p>
              </article>

              <article>
                <span>◌</span>
                <h4>Wi-Fi y servicios</h4>
                <p>Información práctica del alojamiento.</p>
              </article>

              <article>
                <span>◇</span>
                <h4>Ubicación</h4>
                <p>Cómo llegar, aparcamiento y entorno.</p>
              </article>

              <article>
                <span>✦</span>
                <h4>Solicitudes</h4>
                <p>Necesidades especiales del huésped.</p>
              </article>

            </div>

          </article>

          <aside className="guest-right">

            <article className="guest-panel">

              <div className="panel-title">
                <h3>Huéspedes activos</h3>
                <button>Ver todos</button>
              </div>

              <div className="guest-row">
                <div>
                  <strong>Laura Gómez</strong>
                  <small>Apto. Atlántico · 3 noches</small>
                </div>
                <span>Activo</span>
              </div>

              <div className="guest-row">
                <div>
                  <strong>Daniel Pérez</strong>
                  <small>Loft Centro · 5 noches</small>
                </div>
                <span>Activo</span>
              </div>

              <div className="guest-row">
                <div>
                  <strong>Marta Díaz</strong>
                  <small>Casa Mar · 2 noches</small>
                </div>
                <span>Activo</span>
              </div>

            </article>

            <article className="guest-panel">

              <div className="panel-title">
                <h3>Actividad reciente</h3>
              </div>

              <div className="guest-activity">
                <span>✓</span>
                <div>
                  <strong>Consulta resuelta</strong>
                  <small>Horario de check-in</small>
                </div>
                <time>2 min</time>
              </div>

              <div className="guest-activity">
                <span>◌</span>
                <div>
                  <strong>Nueva conversación</strong>
                  <small>Información sobre Wi-Fi</small>
                </div>
                <time>8 min</time>
              </div>

              <div className="guest-activity">
                <span>✦</span>
                <div>
                  <strong>Solicitud especial</strong>
                  <small>Salida tardía</small>
                </div>
                <time>19 min</time>
              </div>

            </article>

          </aside>

        </section>

      </section>

    </main>
  )
}

export default GuestPage
