import { Link } from 'react-router-dom'
import qubiaLogo from '../assets/qubia-orbital.png'
import './DashboardPage.css'

function DashboardPage() {
  return (
    <main className="suite-shell">

      <aside className="suite-sidebar">

        <div className="sidebar-brand">
          <img src={qubiaLogo} alt="Qubia" />
          <div>
            <strong>QUBIA</strong>
            <span>SUITE</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          <Link className="nav-item active" to="/suite">
            ⌂ <span>Inicio</span>
          </Link>

          <Link className="nav-item" to="/suite/assistants">
            ✦ <span>Asistentes</span>
          </Link>

          <Link className="nav-item" to="/suite/conversations">
            ◌ <span>Conversaciones</span>
          </Link>

          <Link className="nav-item" to="/suite/analytics">
            ↗ <span>Analítica</span>
          </Link>

          <Link className="nav-item" to="/suite/knowledge">
            ◇ <span>Conocimiento</span>
          </Link>

          <Link className="nav-item" to="/suite/settings">
            ⚙ <span>Configuración</span>
          </Link>
        </nav>

        <div className="sidebar-user">
          <div className="user-avatar">SP</div>
          <div>
            <strong>Administración</strong>
            <span>Qubia Suite</span>
          </div>
        </div>

      </aside>

      <section className="suite-main">

        <header className="suite-header">

          <div>
            <div className="suite-heading">
              <img src={qubiaLogo} alt="" />
              <div>
                <h1 className="brand-title">
                  <span className="brand-qubia">
                    Qub<span className="brand-i">ı</span>a
                  </span>
                  <span className="brand-product"> Suite</span>
                </h1>
                <p>Tus asistentes. Tu negocio. Un solo lugar.</p>
              </div>
            </div>
          </div>

          <div className="header-actions">
            <button>♡</button>
            <button>?</button>
            <button className="company-button">Empresa Demo ▾</button>
          </div>

        </header>

        <section className="assistant-section">

          <h2>¿Con qué quieres trabajar hoy?</h2>

          <div className="assistant-cards">

            <article className="assistant-card">

              <div className="assistant-card-top">
                <span className="mini-icon">◌</span>
                <img src={qubiaLogo} alt="" />
              </div>

              <h3>Qubia Hospitality</h3>
              <p className="assistant-role">Reservas y atención</p>

              <div className="assistant-footer">
                <div className="metric">
                  <strong>24</strong>
                  <span>conversaciones hoy</span>
                </div>

                <Link to="/hospitality">
                  Abrir asistente →
                </Link>
              </div>

            </article>

            <article className="assistant-card">

              <div className="assistant-card-top">
                <span className="mini-icon">⌂</span>
                <img src={qubiaLogo} alt="" />
              </div>

              <h3>Qubia Real Estate</h3>
              <p className="assistant-role">Propiedades, leads y visitas</p>

              <div className="assistant-footer">
                <div className="metric">
                  <strong>12</strong>
                  <span>leads activos</span>
                </div>

                <Link to="/real-estate">
                  Abrir asistente →
                </Link>
              </div>

            </article>

            <article className="assistant-card">

              <div className="assistant-card-top">
                <span className="mini-icon">◇</span>
                <img src={qubiaLogo} alt="" />
              </div>

              <h3>Qubia Stay</h3>
              <p className="assistant-role">Atención a la estancia</p>

              <div className="assistant-footer">
                <div className="metric">
                  <strong>31</strong>
                  <span>consultas resueltas</span>
                </div>

                <Link to="/stay">
                  Abrir asistente →
                </Link>
              </div>

            </article>

          </div>

        </section>

        <section className="dashboard-grid">

          <div className="dashboard-left">

            <div className="section-title-row">
              <h3>Resumen ejecutivo</h3>

              <div>
                <button>Últimos 7 días ▾</button>
                <button>Exportar ↓</button>
              </div>
            </div>

            <div className="stats-grid">

              <article className="stat-card">
                <span>Conversaciones</span>
                <strong>382</strong>
                <small>↗ 18,6%</small>
                <div className="fake-chart"></div>
              </article>

              <article className="stat-card">
                <span>Leads</span>
                <strong>64</strong>
                <small>↗ 24,3%</small>
                <div className="fake-chart"></div>
              </article>

              <article className="stat-card">
                <span>Reservas</span>
                <strong>38</strong>
                <small>↗ 15,8%</small>
                <div className="fake-chart"></div>
              </article>

              <article className="stat-card">
                <span>Visitas</span>
                <strong>27</strong>
                <small>↗ 12,1%</small>
                <div className="fake-chart"></div>
              </article>

            </div>

            <article className="value-card">

              <img src={qubiaLogo} alt="" />

              <div className="value-copy">
                <h3>IA que impulsa tu negocio</h3>
                <p>
                  Asistentes inteligentes diseñados para transformar
                  la forma en que conectas con tus clientes.
                </p>
              </div>

              <div className="value-points">
                <span>Automatiza</span>
                <span>Conecta</span>
                <span>Personaliza</span>
                <span>Impulsa</span>
              </div>

            </article>

          </div>

          <aside className="dashboard-right">

            <article className="activity-card">

              <div className="panel-title">
                <h3>Actividad reciente</h3>
                <button>Ver todo</button>
              </div>

              <div className="activity-item">
                <span>◌</span>
                <div>
                  <strong>Nueva conversación en Hospitality</strong>
                  <small>Reserva confirmada</small>
                </div>
                <time>2 min</time>
              </div>

              <div className="activity-item">
                <span>⌂</span>
                <div>
                  <strong>Nuevo lead en Real Estate</strong>
                  <small>Interesado en una propiedad</small>
                </div>
                <time>12 min</time>
              </div>

              <div className="activity-item">
                <span>◇</span>
                <div>
                  <strong>Consulta resuelta en Stay</strong>
                  <small>Información para huésped</small>
                </div>
                <time>18 min</time>
              </div>

              <div className="activity-item">
                <span>✓</span>
                <div>
                  <strong>Nueva visita agendada</strong>
                  <small>Propiedad registrada</small>
                </div>
                <time>35 min</time>
              </div>

            </article>

            <article className="performance-card">

              <div className="panel-title">
                <h3>Rendimiento general</h3>
                <button>Ver analítica</button>
              </div>

              <div className="performance-chart">
                <div className="chart-line one"></div>
                <div className="chart-line two"></div>
                <div className="chart-line three"></div>
              </div>

              <div className="chart-legend">
                <span>Conversaciones</span>
                <span>Leads</span>
                <span>Reservas</span>
              </div>

            </article>

          </aside>

        </section>

      </section>

    </main>
  )
}

export default DashboardPage
