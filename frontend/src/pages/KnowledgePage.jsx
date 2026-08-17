import { useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import qubiaLogo from '../assets/qubia-orbital.png'
import './KnowledgePage.css'

const initialKnowledgeItems = [
  {
    id: 1,
    assistant: 'Real Estate',
    title: 'Catálogo de propiedades',
    type: 'Base de datos',
    source: 'Propiedades activas',
    status: 'indexado',
    updated: 'Hoy, 18:10',
    records: '342 registros',
  },
  {
    id: 2,
    assistant: 'Real Estate',
    title: 'Preguntas frecuentes compradores',
    type: 'FAQ',
    source: 'FAQ_Compradores.pdf',
    status: 'indexado',
    updated: 'Hoy, 16:45',
    records: '28 respuestas',
  },
  {
    id: 3,
    assistant: 'Hospitality',
    title: 'Carta y servicios',
    type: 'Documento',
    source: 'Menu_Servicios.pdf',
    status: 'indexado',
    updated: 'Ayer, 20:30',
    records: '18 páginas',
  },
  {
    id: 4,
    assistant: 'Hospitality',
    title: 'Horarios y reservas',
    type: 'FAQ',
    source: 'Información operativa',
    status: 'indexado',
    updated: 'Ayer, 17:22',
    records: '34 respuestas',
  },
  {
    id: 5,
    assistant: 'Stay',
    title: 'Guía del alojamiento',
    type: 'Documento',
    source: 'Guia_Alojamiento.pdf',
    status: 'indexado',
    updated: 'Hoy, 11:05',
    records: '22 páginas',
  },
  {
    id: 6,
    assistant: 'Stay',
    title: 'Normas y check-in',
    type: 'FAQ',
    source: 'Información huésped',
    status: 'pendiente',
    updated: 'Hace 12 min',
    records: '17 respuestas',
  },
]

const filters = ['Todos', 'Hospitality', 'Real Estate', 'Stay']

function BrandName() {
  return (
    <span className="knowledge-brand-title">
      <span className="knowledge-brand-qubia">
        Qub<span className="knowledge-brand-i">ı</span>a
      </span>
      <span className="knowledge-brand-product"> Suite</span>
    </span>
  )
}

function KnowledgePage() {
  const [knowledgeItems, setKnowledgeItems] = useState(initialKnowledgeItems)
  const [activeFilter, setActiveFilter] = useState('Todos')
  const [search, setSearch] = useState('')
  const [showUpload, setShowUpload] = useState(false)

  const [selectedAssistant, setSelectedAssistant] = useState('Hospitality')
  const [selectedFile, setSelectedFile] = useState(null)
  const [customTitle, setCustomTitle] = useState('')

  const fileInputRef = useRef(null)

  const visibleItems = useMemo(() => {
    const term = search.trim().toLowerCase()

    return knowledgeItems.filter((item) => {
      const matchesAssistant =
        activeFilter === 'Todos' || item.assistant === activeFilter

      const searchable = [
        item.title,
        item.type,
        item.source,
        item.assistant,
        item.status,
      ]
        .join(' ')
        .toLowerCase()

      return matchesAssistant && (!term || searchable.includes(term))
    })
  }, [activeFilter, search, knowledgeItems])

  const handleFileSelect = (event) => {
    const file = event.target.files?.[0]

    if (!file) return

    setSelectedFile(file)

    if (!customTitle) {
      const cleanName = file.name.replace(/\.[^/.]+$/, '')
      setCustomTitle(cleanName)
    }
  }

  const handleCreateSource = () => {
    if (!selectedFile) {
      fileInputRef.current?.click()
      return
    }

    const newItem = {
      id: Date.now(),
      assistant: selectedAssistant,
      title: customTitle.trim() || selectedFile.name,
      type: 'Documento',
      source: selectedFile.name,
      status: 'pendiente',
      updated: 'Ahora',
      records: formatFileSize(selectedFile.size),
    }

    setKnowledgeItems((current) => [newItem, ...current])

    setSelectedFile(null)
    setCustomTitle('')
    setShowUpload(false)

    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleCancelUpload = () => {
    setSelectedFile(null)
    setCustomTitle('')
    setShowUpload(false)

    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <main className="knowledge-shell">

      <aside className="knowledge-sidebar">

        <div className="knowledge-logo">
          <img src={qubiaLogo} alt="Qubia" />
          <div>
            <strong>QUBIA</strong>
            <span>SUITE</span>
          </div>
        </div>

        <nav className="knowledge-nav">
          <Link to="/suite">⌂ <span>Inicio</span></Link>
          <Link to="/suite/assistants">✦ <span>Asistentes</span></Link>
          <Link to="/suite/conversations">◌ <span>Conversaciones</span></Link>
          <Link to="/suite/analytics">↗ <span>Analítica</span></Link>
          <Link to="/suite/knowledge" className="active">◇ <span>Conocimiento</span></Link>
          <Link to="/suite/settings">⚙ <span>Configuración</span></Link>
        </nav>

        <Link to="/" className="knowledge-logout">
          ← Cerrar sesión
        </Link>

      </aside>

      <section className="knowledge-main">

        <header className="knowledge-header">

          <div className="knowledge-heading">
            <img src={qubiaLogo} alt="" />

            <div>
              <BrandName />
              <p>La información que alimenta a tus asistentes.</p>
            </div>
          </div>

          <button className="knowledge-company">
            Empresa Demo ▾
          </button>

        </header>

        <section className="knowledge-content">

          <div className="knowledge-title-row">

            <div>
              <p className="knowledge-eyebrow">QUBIA SUITE</p>
              <h1>Conocimiento</h1>
              <p className="knowledge-description">
                Gestiona documentos, FAQs, catálogos y fuentes de información
                utilizadas por tus asistentes.
              </p>
            </div>

            <button
              className="knowledge-add"
              onClick={() => setShowUpload(!showUpload)}
            >
              + Añadir conocimiento
            </button>

          </div>

          <section className="knowledge-stats">

            <article>
              <span>Fuentes activas</span>
              <strong>{knowledgeItems.length}</strong>
              <small>En los tres asistentes</small>
            </article>

            <article>
              <span>Documentos</span>
              <strong>
                {knowledgeItems.filter(item => item.type === 'Documento').length}
              </strong>
              <small>PDF y contenido estructurado</small>
            </article>

            <article>
              <span>Indexadas</span>
              <strong>
                {knowledgeItems.filter(item => item.status === 'indexado').length}
              </strong>
              <small>Disponibles para Qubia</small>
            </article>

            <article>
              <span>Pendientes</span>
              <strong>
                {knowledgeItems.filter(item => item.status === 'pendiente').length}
              </strong>
              <small>Esperando procesamiento</small>
            </article>

          </section>

          {showUpload && (
            <section className="knowledge-upload knowledge-upload-form">

              <div className="upload-copy">
                <span>NUEVA FUENTE</span>
                <h2>Subir documento</h2>
                <p>
                  Selecciona el asistente que utilizará esta información
                  y añade el archivo.
                </p>
              </div>

              <div className="upload-form-fields">

                <label>
                  Asistente
                  <select
                    value={selectedAssistant}
                    onChange={(event) => setSelectedAssistant(event.target.value)}
                  >
                    <option>Hospitality</option>
                    <option>Real Estate</option>
                    <option>Stay</option>
                  </select>
                </label>

                <label>
                  Nombre de la fuente
                  <input
                    type="text"
                    value={customTitle}
                    onChange={(event) => setCustomTitle(event.target.value)}
                    placeholder="Ej. Manual de servicios"
                  />
                </label>

                <input
                  ref={fileInputRef}
                  className="hidden-file-input"
                  type="file"
                  accept=".pdf,.doc,.docx,.txt"
                  onChange={handleFileSelect}
                />

                <button
                  type="button"
                  className="file-select-button"
                  onClick={() => fileInputRef.current?.click()}
                >
                  {selectedFile ? 'Cambiar archivo' : 'Seleccionar archivo'}
                </button>

                {selectedFile && (
                  <div className="selected-file">
                    <span>▤</span>

                    <div>
                      <strong>{selectedFile.name}</strong>
                      <small>{formatFileSize(selectedFile.size)}</small>
                    </div>
                  </div>
                )}

                <div className="upload-form-actions">
                  <button
                    type="button"
                    className="upload-cancel"
                    onClick={handleCancelUpload}
                  >
                    Cancelar
                  </button>

                  <button
                    type="button"
                    className="upload-confirm"
                    onClick={handleCreateSource}
                  >
                    Añadir fuente
                  </button>
                </div>

              </div>

            </section>
          )}

          <div className="knowledge-toolbar">

            <div className="knowledge-filters">
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={activeFilter === filter ? 'active' : ''}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Buscar fuente..."
            />

          </div>

          <section className="knowledge-grid">

            {visibleItems.map((item) => (
              <article className="knowledge-card" key={item.id}>

                <div className="knowledge-card-top">

                  <span className="knowledge-type-icon">
                    {item.type === 'FAQ' && '?'}
                    {item.type === 'Documento' && '▤'}
                    {item.type === 'Base de datos' && '◇'}
                  </span>

                  <span className={`knowledge-status ${item.status}`}>
                    {item.status === 'indexado' ? 'Indexado' : 'Pendiente'}
                  </span>

                </div>

                <span className="knowledge-assistant">
                  Qubia {item.assistant}
                </span>

                <h3>{item.title}</h3>

                <p>{item.source}</p>

                <div className="knowledge-meta">
                  <div>
                    <span>Tipo</span>
                    <strong>{item.type}</strong>
                  </div>

                  <div>
                    <span>Contenido</span>
                    <strong>{item.records}</strong>
                  </div>
                </div>

                <footer>
                  <span>Actualizado {item.updated}</span>
                  <button>Gestionar →</button>
                </footer>

              </article>
            ))}

          </section>

          {visibleItems.length === 0 && (
            <div className="knowledge-empty">
              <img src={qubiaLogo} alt="" />
              <h2>Sin resultados</h2>
              <p>No hay fuentes que coincidan con la búsqueda.</p>
            </div>
          )}

        </section>

      </section>

    </main>
  )
}

function formatFileSize(bytes) {
  if (!bytes) return '0 KB'

  if (bytes < 1024 * 1024) {
    return `${Math.max(1, Math.round(bytes / 1024))} KB`
  }

  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

export default KnowledgePage
