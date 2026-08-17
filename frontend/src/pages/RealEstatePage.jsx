import { Link } from 'react-router-dom'
import qubiaLogo from '../assets/qubia-orbital.png'
import './RealEstatePage.css'

function RealEstatePage() {
  return (
    <main className="real-estate-page">

      <aside className="real-sidebar">

        <div className="real-brand">
          <img src={qubiaLogo} alt="Qubia" />
          <div>
            <strong>QUBIA</strong>
            <span>REAL ESTATE</span>
          </div>
        </div>

        <nav className="real-nav">
          <a href="#" className="active">⌂ <span>Resumen</span></a>
          <a href="#">◌ <span>Conversaciones</span></a>
          <a href="#">◇ <span>Propiedades</span></a>
          <a href="#">✦ <span>Leads</span></a>
          <a href="#">✓ <span>Visitas</span></a>
          <a href="#">↗ <span>Informes</span></a>
          <a href="#">⚙ <span>Configuración</span></a>
        </nav>

        <Link to="/suite" className="real-back">
          ← Volver a Suite
        </Link>

      </aside>

      <section className="real-main">

        <header className="real-header">

          <div className="real-heading">
            <img src={qubiaLogo} alt="" />
            <div>
              <h1 className="brand-title">
                <span className="brand-qubia">
                  Qub<span className="brand-i">ı</span>a
                </span>
                <span className="brand-product"> Real Estate</span>
              </h1>
              <p>Propiedades, leads y visitas en un solo lugar.</p>
            </div>
          </div>

          <div className="real-actions">
            <button>Nueva búsqueda</button>
            <button>+ Añadir propiedad</button>
          </div>

        </header>

        <section className="real-hero">

          <div>
            <h2>
              Encuentra la <span>propiedad</span><br />
              que encaja contigo
            </h2>

            <p>
              El asistente interpreta lo que busca el cliente,
              compara opciones y facilita la siguiente acción.
            </p>

            <div className="search-box">
              <input
                type="text"
                placeholder="Ej. Piso de 2 habitaciones, terraza y garaje..."
              />
              <button>Buscar</button>
            </div>
          </div>

          <div className="hero-summary">

            <div className="summary-card">
              <span>Conversaciones hoy</span>
              <strong>128</strong>
            </div>

            <div className="summary-card">
              <span>Propiedades consultadas</span>
              <strong>342</strong>
            </div>

            <div className="summary-card">
              <span>Leads activos</span>
              <strong>56</strong>
            </div>

            <div className="summary-card">
              <span>Visitas solicitadas</span>
              <strong>19</strong>
            </div>

          </div>

        </section>

        <section className="real-content">

          <article className="properties-panel">

            <div className="panel-title">
              <h3>Propiedades recomendadas</h3>
              <button>Ver todas</button>
            </div>

            <div className="property-grid">

              <article className="property-card">
                <div className="property-image">⌂</div>
                <div className="property-body">
                  <h4>Residencial Atlántico</h4>
                  <p>2 habitaciones · 2 baños · terraza · garaje</p>
                  <span className="property-price">265.000 €</span>
                </div>
              </article>

              <article className="property-card">
                <div className="property-image">⌂</div>
                <div className="property-body">
                  <h4>Ático Rambla</h4>
                  <p>2 habitaciones · 2 baños · gran terraza</p>
                  <span className="property-price">279.000 €</span>
                </div>
              </article>

              <article className="property-card">
                <div className="property-image">⌂</div>
                <div className="property-body">
                  <h4>Jardines del Mar</h4>
                  <p>2 habitaciones · 1 baño · garaje</p>
                  <span className="property-price">255.000 €</span>
                </div>
              </article>

            </div>

          </article>

          <aside className="real-right">

            <article className="leads-panel">

              <div className="panel-title">
                <h3>Leads recientes</h3>
                <button>Ver todos</button>
              </div>

              <div className="lead-row">
                <div>
                  <strong>Ana García</strong>
                  <small>Interesada en terraza y garaje</small>
                </div>
                <span className="lead-score">92</span>
              </div>

              <div className="lead-row">
                <div>
                  <strong>Luis Martín</strong>
                  <small>Solicitó información adicional</small>
                </div>
                <span className="lead-score">78</span>
              </div>

              <div className="lead-row">
                <div>
                  <strong>María Hernández</strong>
                  <small>Quiere concertar una visita</small>
                </div>
                <span className="lead-score">88</span>
              </div>

            </article>

            <article className="activity-panel">

              <div className="panel-title">
                <h3>Actividad reciente</h3>
              </div>

              <div className="real-activity">
                <span>◌</span>
                <div>
                  <strong>Nueva búsqueda</strong>
                  <small>Piso en Santa Cruz</small>
                </div>
                <time>4 min</time>
              </div>

              <div className="real-activity">
                <span>✦</span>
                <div>
                  <strong>Lead generado</strong>
                  <small>Residencial Atlántico</small>
                </div>
                <time>11 min</time>
              </div>

              <div className="real-activity">
                <span>✓</span>
                <div>
                  <strong>Visita solicitada</strong>
                  <small>Ático Rambla</small>
                </div>
                <time>26 min</time>
              </div>

            </article>

          </aside>

        </section>

      </section>

    </main>
  )
}

export default RealEstatePage
