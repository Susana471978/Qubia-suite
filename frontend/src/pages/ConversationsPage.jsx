import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import qubiaLogo from '../assets/qubia-orbital.png'
import './ConversationsPage.css'

const conversations = [
  {
    id: 1,
    name: 'Ana García',
    assistant: 'Real Estate',
    time: '18:42',
    preview: 'Busco un piso de dos habitaciones con terraza...',
    status: 'resuelta',
    result: 'Lead generado',
    score: 92,
    action: 'Lead cualificado',
    nextAction: 'Concertar visita',
    insight: {
      intention: 'Comprar vivienda',
      budget: 'Hasta 280.000 €',
      zone: 'Santa Cruz',
      needs: '2 hab. · Terraza · Garaje',
    },
    messages: [
      { sender: 'customer', label: 'Ana', text: 'Hola, busco un piso de dos habitaciones, con terraza y garaje.', time: '18:42' },
      { sender: 'qubia', label: 'Qubia', text: 'Claro. Tengo varias opciones que encajan con lo que buscas. ¿Tienes alguna zona o presupuesto aproximado?', time: '18:42' },
      { sender: 'customer', label: 'Ana', text: 'Santa Cruz. Hasta unos 280.000 €.', time: '18:43' },
      { sender: 'qubia', label: 'Qubia', text: 'He encontrado tres propiedades compatibles. La opción con mayor coincidencia es Residencial Atlántico, por 265.000 €, con dos habitaciones, terraza y garaje.', time: '18:43' },
      { sender: 'customer', label: 'Ana', text: 'Me interesa. ¿Puedo concertar una visita?', time: '18:44' },
      { sender: 'qubia', label: 'Qubia', text: 'Por supuesto. He registrado tu interés. Solo necesito confirmar tu teléfono y disponibilidad.', time: '18:44' },
    ],
  },
  {
    id: 2,
    name: 'Carlos Vega',
    assistant: 'Hospitality',
    time: '18:31',
    preview: '¿Tenéis mesa para cuatro personas esta noche?',
    status: 'resuelta',
    result: 'Reserva',
    score: 96,
    action: 'Reserva confirmada',
    nextAction: 'Preparar servicio',
    insight: {
      intention: 'Reservar mesa',
      budget: '—',
      zone: 'Restaurante principal',
      needs: '4 personas · 21:30',
    },
    messages: [
      { sender: 'customer', label: 'Carlos', text: 'Hola, ¿tenéis mesa para cuatro personas esta noche?', time: '18:31' },
      { sender: 'qubia', label: 'Qubia', text: 'Sí. Tenemos disponibilidad a las 21:30. ¿Quieres que haga la reserva?', time: '18:31' },
      { sender: 'customer', label: 'Carlos', text: 'Sí, por favor. A nombre de Carlos Vega.', time: '18:32' },
      { sender: 'qubia', label: 'Qubia', text: 'Reserva confirmada para cuatro personas hoy a las 21:30. Te esperamos.', time: '18:32' },
    ],
  },
  {
    id: 3,
    name: 'Laura Gómez',
    assistant: 'Stay',
    time: '18:17',
    preview: '¿A qué hora puedo hacer el check-in?',
    status: 'resuelta',
    result: 'Consulta',
    score: 100,
    action: 'Consulta resuelta',
    nextAction: 'Sin acción necesaria',
    insight: {
      intention: 'Información de estancia',
      budget: '—',
      zone: 'Apto. Atlántico',
      needs: 'Horario de check-in',
    },
    messages: [
      { sender: 'customer', label: 'Laura', text: 'Hola, ¿a qué hora puedo hacer el check-in?', time: '18:17' },
      { sender: 'qubia', label: 'Qubia', text: 'El check-in está disponible a partir de las 15:00. Si llegas antes, puedo indicarte las opciones disponibles.', time: '18:17' },
      { sender: 'customer', label: 'Laura', text: 'Perfecto, gracias.', time: '18:18' },
      { sender: 'qubia', label: 'Qubia', text: 'Encantada de ayudarte. Si necesitas cualquier información durante tu estancia, estoy disponible.', time: '18:18' },
    ],
  },
  {
    id: 4,
    name: 'Luis Martín',
    assistant: 'Real Estate',
    time: '17:56',
    preview: 'Quiero visitar el ático de la Rambla...',
    status: 'pendiente',
    result: 'Visita',
    score: 84,
    action: 'Visita solicitada',
    nextAction: 'Confirmar disponibilidad',
    insight: {
      intention: 'Visitar propiedad',
      budget: '279.000 €',
      zone: 'Santa Cruz',
      needs: 'Ático Rambla · Visita',
    },
    messages: [
      { sender: 'customer', label: 'Luis', text: 'Quiero visitar el Ático Rambla que aparece en la web.', time: '17:56' },
      { sender: 'qubia', label: 'Qubia', text: 'Perfecto. ¿Qué día y franja horaria te vendría mejor?', time: '17:56' },
      { sender: 'customer', label: 'Luis', text: 'Mañana por la tarde, si es posible.', time: '17:57' },
      { sender: 'qubia', label: 'Qubia', text: 'He registrado tu solicitud. La agencia debe confirmar la disponibilidad de mañana por la tarde.', time: '17:57' },
    ],
  },
  {
    id: 5,
    name: 'Marta Díaz',
    assistant: 'Stay',
    time: '17:39',
    preview: 'Necesito salir más tarde mañana.',
    status: 'humano',
    result: 'Intervención',
    score: 68,
    action: 'Requiere intervención',
    nextAction: 'Revisar late check-out',
    insight: {
      intention: 'Modificar salida',
      budget: '—',
      zone: 'Casa Mar',
      needs: 'Late check-out',
    },
    messages: [
      { sender: 'customer', label: 'Marta', text: 'Necesito salir más tarde mañana. ¿Puedo dejar el alojamiento a las 15:00?', time: '17:39' },
      { sender: 'qubia', label: 'Qubia', text: 'Puedo ayudarte con la solicitud, pero necesito comprobar si existe una entrada posterior y si el alojamiento permite salida tardía.', time: '17:39' },
      { sender: 'qubia', label: 'Qubia', text: 'He enviado la solicitud al equipo para que puedan confirmártelo.', time: '17:40' },
    ],
  },
]

const filterOptions = [
  'Todas',
  'Hospitality',
  'Real Estate',
  'Stay',
  'Pendientes',
]

function BrandName() {
  return (
    <span className="conversation-brand-title">
      <span className="conversation-brand-qubia">
        Qub<span className="conversation-brand-i">ı</span>a
      </span>
      <span className="conversation-brand-product"> Suite</span>
    </span>
  )
}

function ConversationsPage() {
  const [selectedId, setSelectedId] = useState(1)
  const [activeFilter, setActiveFilter] = useState('Todas')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredConversations = useMemo(() => {
    const term = searchTerm.trim().toLowerCase()

    return conversations.filter((conversation) => {
      const matchesFilter =
        activeFilter === 'Todas' ||
        conversation.assistant === activeFilter ||
        (
          activeFilter === 'Pendientes' &&
          ['pendiente', 'humano'].includes(conversation.status)
        )

      const searchableText = [
        conversation.name,
        conversation.assistant,
        conversation.preview,
        conversation.result,
        ...conversation.messages.map(message => message.text),
      ]
        .join(' ')
        .toLowerCase()

      const matchesSearch =
        !term || searchableText.includes(term)

      return matchesFilter && matchesSearch
    })
  }, [activeFilter, searchTerm])

  const selected =
    filteredConversations.find(conversation => conversation.id === selectedId) ||
    filteredConversations[0] ||
    null

  const handleFilter = (filter) => {
    setActiveFilter(filter)

    const candidates = conversations.filter((conversation) => {
      if (filter === 'Todas') return true

      if (filter === 'Pendientes') {
        return ['pendiente', 'humano'].includes(conversation.status)
      }

      return conversation.assistant === filter
    })

    if (!candidates.some(conversation => conversation.id === selectedId)) {
      setSelectedId(candidates[0]?.id ?? null)
    }
  }

  return (
    <main className="conversation-shell">

      <aside className="conversation-sidebar">

        <div className="conversation-logo">
          <img src={qubiaLogo} alt="Qubia" />
          <div>
            <strong>QUBIA</strong>
            <span>SUITE</span>
          </div>
        </div>

        <nav className="conversation-nav">
          <Link to="/suite">⌂ <span>Inicio</span></Link>
          <Link to="/suite/assistants">✦ <span>Asistentes</span></Link>
          <Link to="/suite/conversations" className="active">◌ <span>Conversaciones</span></Link>
          <Link to="/suite/analytics">↗ <span>Analítica</span></Link>
          <Link to="/suite/knowledge">◇ <span>Conocimiento</span></Link>
          <Link to="/suite/settings">⚙ <span>Configuración</span></Link>
        </nav>

        <Link to="/" className="conversation-logout">
          ← Cerrar sesión
        </Link>

      </aside>

      <section className="conversation-main">

        <header className="conversation-header">
          <div className="conversation-heading">
            <img src={qubiaLogo} alt="" />
            <div>
              <BrandName />
              <p>Conversaciones de todos tus asistentes.</p>
            </div>
          </div>

          <button className="conversation-company">
            Empresa Demo ▾
          </button>
        </header>

        <section className="conversation-content">

          <div className="conversation-title-row">
            <div>
              <p className="conversation-eyebrow">QUBIA SUITE</p>
              <h1>Conversaciones</h1>
            </div>

            <div className="conversation-stats">
              <div>
                <strong>382</strong>
                <span>esta semana</span>
              </div>

              <div>
                <strong>92%</strong>
                <span>resueltas por IA</span>
              </div>

              <div>
                <strong>8</strong>
                <span>requieren atención</span>
              </div>
            </div>
          </div>

          <div className="conversation-filters">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                className={activeFilter === filter ? 'active' : ''}
                onClick={() => handleFilter(filter)}
              >
                {filter}
              </button>
            ))}

            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Buscar conversación..."
            />
          </div>

          <section className="conversation-workspace">

            <aside className="conversation-list">

              {filteredConversations.length > 0 ? (
                filteredConversations.map(conversation => (
                  <article
                    key={conversation.id}
                    className={`conversation-item ${
                      selected?.id === conversation.id ? 'active' : ''
                    }`}
                    onClick={() => setSelectedId(conversation.id)}
                  >

                    <div className="conversation-avatar">
                      {conversation.name
                        .split(' ')
                        .map(part => part[0])
                        .join('')
                        .slice(0, 2)}
                    </div>

                    <div className="conversation-item-copy">
                      <div className="conversation-item-head">
                        <strong>{conversation.name}</strong>
                        <time>{conversation.time}</time>
                      </div>

                      <span className="conversation-assistant">
                        {conversation.assistant}
                      </span>

                      <p>{conversation.preview}</p>

                      <div className="conversation-tags">
                        <span className={`status ${conversation.status}`}>
                          {conversation.status === 'resuelta' && 'Resuelta'}
                          {conversation.status === 'pendiente' && 'Pendiente'}
                          {conversation.status === 'humano' && 'Requiere humano'}
                        </span>

                        <span className="result">
                          {conversation.result}
                        </span>
                      </div>
                    </div>

                  </article>
                ))
              ) : (
                <div className="conversation-empty-list">
                  <span>◇</span>
                  <strong>Sin resultados</strong>
                  <p>No hay conversaciones que coincidan con estos filtros.</p>
                </div>
              )}

            </aside>

            {selected ? (
              <>
                <article className="conversation-detail">

                  <header className="detail-header">
                    <div>
                      <h2>{selected.name}</h2>
                      <p>Qubia {selected.assistant} · Hoy, {selected.time}</p>
                    </div>

                    <span className={`detail-status ${selected.status}`}>
                      {selected.status === 'resuelta' && 'Resuelta por Qubia'}
                      {selected.status === 'pendiente' && 'Pendiente'}
                      {selected.status === 'humano' && 'Requiere intervención'}
                    </span>
                  </header>

                  <div className="chat-window">
                    {selected.messages.map((message, index) => (
                      <div
                        key={`${selected.id}-${index}`}
                        className={`chat-message ${message.sender}`}
                      >
                        <span>{message.label}</span>
                        <p>{message.text}</p>
                        <time>{message.time}</time>
                      </div>
                    ))}
                  </div>

                  <footer className="detail-compose">
                    <input
                      type="text"
                      placeholder="Escribe una respuesta..."
                    />
                    <button>Enviar</button>
                  </footer>

                </article>

                <aside className="conversation-insight">

                  <p className="insight-eyebrow">
                    RESULTADO DE LA CONVERSACIÓN
                  </p>

                  <div className="insight-result">
                    <span>✦</span>
                    <div>
                      <small>Acción generada</small>
                      <strong>{selected.action}</strong>
                    </div>
                  </div>

                  <div className="insight-score">
                    <span>Interés / resolución</span>
                    <strong>{selected.score}</strong>
                  </div>

                  <div className="insight-data">
                    <div>
                      <span>Asistente</span>
                      <strong>{selected.assistant}</strong>
                    </div>

                    <div>
                      <span>Intención</span>
                      <strong>{selected.insight.intention}</strong>
                    </div>

                    <div>
                      <span>Presupuesto</span>
                      <strong>{selected.insight.budget}</strong>
                    </div>

                    <div>
                      <span>Zona / contexto</span>
                      <strong>{selected.insight.zone}</strong>
                    </div>

                    <div>
                      <span>Necesidades</span>
                      <strong>{selected.insight.needs}</strong>
                    </div>
                  </div>

                  <div className="insight-next">
                    <span>SIGUIENTE ACCIÓN</span>

                    <h3>{selected.nextAction}</h3>

                    <p>
                      Qubia ha analizado la conversación y ha identificado
                      el siguiente paso recomendado.
                    </p>

                    <button>Gestionar acción</button>
                  </div>

                </aside>
              </>
            ) : (
              <div className="conversation-empty-workspace">
                <img src={qubiaLogo} alt="" />
                <h2>Sin conversaciones</h2>
                <p>Prueba con otro filtro o una búsqueda diferente.</p>
              </div>
            )}

          </section>

        </section>

      </section>

    </main>
  )
}

export default ConversationsPage
