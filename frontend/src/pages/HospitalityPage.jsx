import { Link } from 'react-router-dom'
import qubiaLogo from '../assets/qubia-orbital.png'
import './HospitalityPage.css'

function HospitalityPage() {
  return (
    <main className="hospitality-page">

      <aside className="hospitality-sidebar">

        <div className="hospitality-brand">
          <img src={qubiaLogo} alt="Qubia" />
          <div>
            <strong>QUBIA</strong>
            <span>HOSPITALITY</span>
          </div>
        </div>

        <nav className="hospitality-nav">
          <a href="#" className="active">⌂ <span>Resumen</span></a>
          <a href="#">◌ <span>Conversaciones</span></a>
          <a href="#">◇ <span>Reservas</span></a>
          <a href="#">✦ <span>Consultas</span></a>
          <a href="#">✓ <span>Clientes</span></a>
          <a href="#">↗ <span>Informes</span></a>
          <a href="#">⚙ <span>Configuración</span></a>
        </nav>

        <Link to="/suite" className="hospitality-back">
          ← Volver a Suite
        </Link>

      </aside>

      <section className="hospitality-main">

        <header className="hospitality-header">

          <div className="hospitality-heading">
            <img src={qubiaLogo} alt="" />

            <div>
              <h1 className="brand-title">
                <span className="brand-qubia">
                  Qub<span className="brand-i">ı</span>a
                </span>
                <span className="brand-product"> Hospitality</span>
              </h1>

              <p>Reservas, consultas y atención en un solo lugar.</p>
            </div>
          </div>

          <div className="hospitality-actions">
            <button>Nueva reserva</button>
            <button>+ Añadir servicio</button>
          </div>

        </header>

        <section className="hospitality-hero">

          <div>
            <h2>
              Más reservas.
              <br />
              <span>Menos tareas repetitivas.</span>
            </h2>

            <p>
              Qubia atiende consultas, informa sobre servicios,
              gestiona solicitudes y ayuda a convertir conversaciones en reservas.
            </p>

            <div className="hospitality-search">
              <input
                type="text"
                placeholder="Ej. Mesa para cuatro personas esta noche..."
              />
              <button>Consultar</button>
            </div>
          </div>

          <div className="hospitality-summary">

            <div className="summary-card">
              <span>Conversaciones hoy</span>
              <strong>96</strong>
            </div>

            <div className="summary-card">
              <span>Reservas gestionadas</span>
              <strong>42</strong>
            </div>

            <div className="summary-card">
              <span>Consultas resueltas</span>
              <strong>118</strong>
            </div>

            <div className="summary-card">
              <span>Solicitudes pendientes</span>
              <strong>7</strong>
            </div>

          </div>

        </section>

        <section className="hospitality-content">

          <article className="hospitality-panel">

            <div className="panel-title">
              <h3>Reservas recientes</h3>
              <button>Ver todas</button>
            </div>

            <div className="reservation-grid">

              <article className="reservation-card">
                <div className="reservation-icon">◌</div>
                <div>
                  <h4>Laura Martín</h4>
                  <p>4 personas · 21:30</p>
                  <span>Confirmada</span>
                </div>
              </article>

              <article className="reservation-card">
                <div className="reservation-icon">◌</div>
                <div>
                  <h4>Carlos Vega</h4>
                  <p>2 personas · 20:00</p>
                  <span>Confirmada</span>
                </div>
              </article>

              <article className="reservation-card">
                <div className="reservation-icon">◌</div>
                <div>
                  <h4>Ana Rodríguez</h4>
                  <p>6 personas · 22:00</p>
                  <span>Pendiente</span>
                </div>
              </article>

            </div>

          </article>

          <aside className="hospitality-right">

            <article className="hospitality-panel">

              <div className="panel-title">
                <h3>Consultas frecuentes</h3>
              </div>

              <div className="hospitality-row">
                <strong>Horario</strong>
                <span>31%</span>
              </div>

              <div className="hospitality-row">
                <strong>Reservas</strong>
                <span>27%</span>
              </div>

              <div className="hospitality-row">
                <strong>Menú y servicios</strong>
                <span>24%</span>
              </div>

              <div className="hospitality-row">
                <strong>Ubicación</strong>
                <span>18%</span>
              </div>

            </article>

            <article className="hospitality-panel">

              <div className="panel-title">
                <h3>Actividad reciente</h3>
              </div>

              <div className="hospitality-activity">
                <span>◌</span>
                <div>
                  <strong>Nueva reserva</strong>
                  <small>4 personas · 21:30</small>
                </div>
                <time>3 min</time>
              </div>

              <div className="hospitality-activity">
                <span>✓</span>
                <div>
                  <strong>Consulta resuelta</strong>
                  <small>Información sobre menú</small>
                </div>
                <time>9 min</time>
              </div>

              <div className="hospitality-activity">
                <span>✦</span>
                <div>
                  <strong>Cliente atendido</strong>
                  <small>Solicitud especial</small>
                </div>
                <time>17 min</time>
              </div>

            </article>

          </aside>

        </section>

      </section>

    </main>
  )
}

export default HospitalityPage
