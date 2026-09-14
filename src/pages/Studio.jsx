import { useEffect, useRef, useState } from 'react'
import SiteNav from '../components/SiteNav'
import Footer from '../components/Footer'
import RotatingImage from '../components/RotatingImage'
import './Studio.css'

const servicePositions = [
  { top: '0%', left: '0%' },
  { top: '58%', left: '55%' },
  { top: '12%', left: '62%' },
  { top: '65%', left: '5%' },
  { top: '30%', left: '30%' },
  { top: '2%', left: '58%' },
  { top: '68%', left: '32%' },
]

const services = [
  {
    name: 'Branding',
    description: 'Construimos marcas con una idea central sólida que guía cada decisión.',
  },
  {
    name: 'Visual identity',
    description: 'Sistemas visuales coherentes que dan forma y personalidad a cada marca.',
  },
  {
    name: 'Social media',
    description: 'Contenido y estrategia para conectar marcas con sus comunidades.',
  },
  {
    name: 'Web design',
    description: 'Sitios y experiencias digitales pensadas para las personas.',
  },
  {
    name: 'Naming',
    description: 'Nombres memorables que capturan la esencia de cada proyecto.',
  },
  {
    name: 'Packaging',
    description: 'Diseño de packaging que destaca en el punto de venta.',
  },
  {
    name: 'Art direction',
    description: 'Dirección de arte que da coherencia visual a cada pieza.',
  },
].map((service, i) => ({
  ...service,
  image: `https://picsum.photos/seed/enlace-service-${i + 1}/220/220`,
  position: servicePositions[i % servicePositions.length],
}))

const clientNames = [
  'Abante',
  'Ansón+Bonet',
  'Arribas Garamendi',
  'Ayuntamiento de Toledo',
  'Dazia',
  'Calido',
  'Caja Rural',
  'Enalta',
  'INDITEX',
  'Liga F',
  'Marqas',
  'Máshumano',
  'Mindset',
  'ODL',
  'Pascual',
  'Picnic',
  'Santander',
  'Socialmood',
]

const teamMembers = [
  { name: 'Ana García', role: 'Directora creativa' },
  { name: 'Marc Soler', role: 'Diseño gráfico' },
  { name: 'Laura Pons', role: 'Diseño digital' },
  { name: 'Diego Ruiz', role: 'Estrategia de marca' },
  { name: 'Nora Vidal', role: 'Producción' },
].map((member, i) => ({
  ...member,
  image: `https://picsum.photos/seed/enlace-team-${i + 1}/500/724`,
}))

const staticImage = 'https://picsum.photos/seed/enlace-studio-static/806/816'
const rotatingImages = [
  'https://picsum.photos/seed/enlace-studio-rotate-1/806/816',
  'https://picsum.photos/seed/enlace-studio-rotate-2/806/816',
  'https://picsum.photos/seed/enlace-studio-rotate-3/806/816',
  'https://picsum.photos/seed/enlace-studio-rotate-4/806/816',
  'https://picsum.photos/seed/enlace-studio-rotate-5/806/816',
]

const methodologyCopy = `De la suma de la estrategia y el diseño centrado en las personas
surge nuestra metodología, aportando la flexibilidad que las marcas
necesitan para ir más allá de las barreras de su industria y
pertenencia.`

const teamCopy = `Detrás de cada proyecto hay un equipo multidisciplinar que combina
estrategia, diseño y producción, aportando distintas miradas para dar
forma a ideas que conectan con las personas.`

function useInView(threshold = 0.25) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, visible]
}

function ServicesSection({ items }) {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <section className="studio-services">
      <div className="studio-services-text">
        <span className="studio-services-eyebrow">Services</span>
        <h2 className="studio-services-heading" onMouseLeave={() => setActiveIndex(null)}>
          {items.map((service, i) => (
            <span
              key={service.name}
              className={i === activeIndex ? 'is-active' : ''}
              onMouseEnter={() => setActiveIndex(i)}
            >
              {service.name}
            </span>
          ))}
        </h2>
      </div>

      <div className="studio-services-preview">
        {items.map((service, i) => (
          <div
            key={service.name}
            className={`studio-services-preview-item${i === activeIndex ? ' is-visible' : ''}`}
            style={{ top: service.position.top, left: service.position.left }}
          >
            <div className="studio-services-preview-image">
              <img src={service.image} alt={service.name} loading="lazy" />
            </div>
            <p className="studio-services-preview-copy">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function ClientsIntro() {
  const [ref, visible] = useInView(0.3)

  return (
    <section className="studio-clients-intro" ref={ref}>
      <span className="studio-clients-eyebrow">Clients who trusted Enlace</span>
      <p className="studio-clients-copy">
        {clientNames.map((name, i) => (
          <span
            key={name}
            className={`client-name${visible ? ' is-visible' : ''}`}
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            {name}
            {i < clientNames.length - 1 ? ', ' : ''}
          </span>
        ))}
      </p>
    </section>
  )
}

function TeamSection() {
  return (
    <section className="studio-team">
      <span className="studio-team-eyebrow">Team</span>
      <div className="studio-team-grid">
        {teamMembers.map((member) => (
          <div className="studio-team-card" key={member.name}>
            <div className="studio-team-card-image">
              <img src={member.image} alt={member.name} loading="lazy" />
            </div>
            <div className="studio-team-card-caption">
              <p>{member.name}</p>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="studio-team-copy">{teamCopy}</p>
    </section>
  )
}

function CultureSection() {
  return (
    <section className="studio-culture">
      <span className="studio-culture-eyebrow">Cultura</span>
    </section>
  )
}

function Studio() {
  return (
    <>
      <SiteNav />

      <section className="studio-intro">
        <p className="studio-copy">{methodologyCopy}</p>
      </section>

      <ServicesSection items={services} />

      <section className="studio-tagline">
        <h2 className="studio-tagline-ideas">Where ideas</h2>
        <h2 className="studio-tagline-form">
          <span>find their</span>
          <span>form</span>
        </h2>
      </section>

      <ClientsIntro />

      <TeamSection />

      <CultureSection />

      <section className="studio-images">
        <div className="studio-image studio-image--static">
          <img src={staticImage} alt="Estudio Enlace" />
        </div>
        <div className="studio-image studio-image--rotating">
          <RotatingImage images={rotatingImages} alt="Proceso de trabajo" interval={3500} />
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Studio
