import { useEffect, useRef, useState } from 'react'
import SiteNav from '../components/SiteNav'
import Footer from '../components/Footer'
import RotatingImage from '../components/RotatingImage'
import ProjectsCarousel from '../components/ProjectsCarousel'
import './Studio.css'

const services = [
  'Branding',
  'Visual identity',
  'Social media',
  'Web design',
  'Naming',
  'Packaging',
  'Art direction',
]

const servicesCarouselImages = Array.from(
  { length: 8 },
  (_, i) => `https://picsum.photos/seed/enlace-services-${i + 1}/700/340`,
)

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

function ServicesList({ items }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const itemRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const idx = itemRefs.current.indexOf(entry.target)
          if (idx !== -1) setActiveIndex(idx)
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )

    itemRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [items])

  return (
    <h2 className="studio-services-heading">
      {items.map((service, i) => (
        <span
          key={service}
          ref={(el) => (itemRefs.current[i] = el)}
          className={i === activeIndex ? 'is-active' : ''}
        >
          {service}
        </span>
      ))}
    </h2>
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

function Studio() {
  return (
    <>
      <SiteNav />

      <section className="studio-intro">
        <p className="studio-copy">{methodologyCopy}</p>
      </section>

      <section className="studio-services">
        <div className="studio-services-text">
          <span className="studio-services-eyebrow">Services</span>
          <ServicesList items={services} />
        </div>
        <div className="studio-services-images">
          <ProjectsCarousel
            images={servicesCarouselImages}
            duration={28}
            orientation="vertical"
          />
        </div>
      </section>

      <section className="studio-tagline">
        <h2 className="studio-tagline-ideas">Where ideas</h2>
        <h2 className="studio-tagline-form">
          <span>find their</span>
          <span>form</span>
        </h2>
      </section>

      <ClientsIntro />

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
