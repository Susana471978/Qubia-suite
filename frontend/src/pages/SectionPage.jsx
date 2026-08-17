import { Link, useLocation } from 'react-router-dom'
import qubiaLogo from '../assets/qubia-orbital.png'
import './SectionPage.css'

const sections = {
  '/suite/assistants': {
    title: 'Asistentes',
    subtitle: 'Gestiona los asistentes activos de tu empresa.',
  },
  '/suite/conversations': {
    title: 'Conversaciones',
    subtitle: 'Consulta y gestiona las conversaciones de todos tus asistentes.',
  },
  '/suite/analytics': {
    title: 'Analítica',
    subtitle: 'Métricas, rendimiento y resultados de Qubia.',
  },
  '/suite/knowledge': {
    title: 'Conocimiento',
    subtitle: 'Gestiona la información que utilizan tus asistentes.',
  },
  '/suite/settings': {
    title: 'Configuración',
    subtitle: 'Ajustes de empresa, usuarios e integraciones.',
  },
}

function BrandName() {
  return (
    <span className="section-brand-title">
      <span className="section-brand-qubia">
        Qub<span className="section-brand-i">ı</span>a
      </span>
      <span className="section-brand-product"> Suite</span>
    </span>
  )
}

function SectionPage() {
  const location = useLocation()

  const section = sections[location.pathname] || {
    title: 'Qubia Suite',
    subtitle: '',
  }

  return (
    <main className="section-shell">

      <aside className="section-sidebar">

        <div className="section-logo">
          <img src={qubiaLogo} alt="Qubia" />

          <div>
            <strong>QUBIA</strong>
            <span>SUITE</span>
          </div>
        </div>

        <nav className="section-nav">

          <Link to="/suite">
            ⌂ <span>Inicio</span>
          </Link>

          <Link
            to="/suite/assistants"
            className={location.pathname === '/suite/assistants' ? 'active' : ''}
          >
            ✦ <span>Asistentes</span>
          </Link>

          <Link
            to="/suite/conversations"
            className={location.pathname === '/suite/conversations' ? 'active' : ''}
          >
            ◌ <span>Conversaciones</span>
          </Link>

          <Link
            to="/suite/analytics"
            className={location.pathname === '/suite/analytics' ? 'active' : ''}
          >
            ↗ <span>Analítica</span>
          </Link>

          <Link
            to="/suite/knowledge"
            className={location.pathname === '/suite/knowledge' ? 'active' : ''}
          >
            ◇ <span>Conocimiento</span>
          </Link>

          <Link
            to="/suite/settings"
            className={location.pathname === '/suite/settings' ? 'active' : ''}
          >
            ⚙ <span>Configuración</span>
          </Link>

        </nav>

        <Link to="/" className="section-logout">
          ← Cerrar sesión
        </Link>

      </aside>

      <section className="section-main">

        <header className="section-header">

          <div className="section-heading">

            <img src={qubiaLogo} alt="" />

            <div>
              <BrandName />
              <p>Tus asistentes. Tu negocio. Un solo lugar.</p>
            </div>

          </div>

          <div className="section-company">
            Empresa Demo ▾
          </div>

        </header>

        <section className="section-content">

          <p className="section-eyebrow">QUBIA SUITE</p>

          <h1>{section.title}</h1>

          <p className="section-description">
            {section.subtitle}
          </p>

          <article className="section-development-card">

            <img src={qubiaLogo} alt="" />

            <div>
              <span>MÓDULO ACTIVO</span>
              <h2>{section.title}</h2>

              <p>
                Esta sección ya forma parte de la arquitectura de Qubia Suite.
                En la siguiente fase incorporaremos aquí sus funciones,
                datos y herramientas reales.
              </p>
            </div>

          </article>

        </section>

      </section>

    </main>
  )
}

export default SectionPage
