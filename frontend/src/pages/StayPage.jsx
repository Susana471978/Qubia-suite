import { Link } from 'react-router-dom'
import qubiaLogo from '../assets/qubia-orbital.png'
import './StayPage.css'

function StayPage() {
  return (
    <main className="stay-page">

      <aside className="stay-sidebar">

        <div className="stay-brand">
          <img src={qubiaLogo} alt="Qubia" />
          <div>
            <strong>QUBIA</strong>
            <span>STAY</span>
          </div>
        </div>

        <nav className="stay-nav">
          <a href="#" className="active">⌂ <span>Resumen</span></a>
          <a href="#">◌ <span>Conversaciones</span></a>
          <a href="#">◇ <span>Huéspedes</span></a>
          <a href="#">✦ <span>Consultas</span></a>
          <a href="#">✓ <span>Solicitudes</span></a>
          <a href="#">↗ <span>Informes</span></a>
          <a href="#">⚙ <span>Configuración</span></a>
        </nav>

        <Link to="/suite" className="stay-back">
          ← Volver a Suite
        </Link>

      </aside>

      <section className="stay-main">

        <header className="stay-header">

          <div className="stay-heading">
            <img src={qubiaLogo} alt="" />

            <div>
              <h1 className="brand-title">
                <span className="brand-qubia">
                  Qub<span className="brand-i">ı</span>a
                </span>
                <span className="brand-product"> Stay</span>
              </h1>

              <p>Atención al huésped antes, durante y después de la estancia.</p>
            </div>
          </div>

          <div className="stay-actions">
            <button>Nueva consulta</button>
            <button>+ Añadir alojamiento</button>
          </div>

        </header>

        <section className="stay-hero">

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

            <div className="stay-search">
              <input
                type="text"
                placeholder="Ej. ¿A qué hora puedo hacer el check-in?"
              />
              <button>Consultar</button>
            </div>
          </div>

          <div className="stay-summary">

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

        <section className="stay-content">

          <article className="stay-panel">

            <div className="panel-title">
              <h3>Consultas frecuentes</h3>
            </div>

            <div className="stay-grid">

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

          <aside className="stay-right">

            <article className="stay-panel">

              <div className="panel-title">
                <h3>Huéspedes activos</h3>
                <button>Ver todos</button>
              </div>

              <div className="stay-row">
                <div>
                  <strong>Laura Gómez</strong>
                  <small>Apto. Atlántico · 3 noches</small>
                </div>
                <span>Activo</span>
              </div>

              <div className="stay-row">
                <div>
                  <strong>Daniel Pérez</strong>
                  <small>Loft Centro · 5 noches</small>
                </div>
                <span>Activo</span>
              </div>

              <div className="stay-row">
                <div>
                  <strong>Marta Díaz</strong>
                  <small>Casa Mar · 2 noches</small>
                </div>
                <span>Activo</span>
              </div>

            </article>

            <article className="stay-panel">

              <div className="panel-title">
                <h3>Actividad reciente</h3>
              </div>

              <div className="stay-activity">
                <span>✓</span>
                <div>
                  <strong>Consulta resuelta</strong>
                  <small>Horario de check-in</small>
                </div>
                <time>2 min</time>
              </div>

              <div className="stay-activity">
                <span>◌</span>
                <div>
                  <strong>Nueva conversación</strong>
                  <small>Información sobre Wi-Fi</small>
                </div>
                <time>8 min</time>
              </div>

              <div className="stay-activity">
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

export default StayPage
