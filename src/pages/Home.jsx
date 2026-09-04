import { Link } from 'react-router-dom'
import SiteNav from '../components/SiteNav'
import RotatingImage from '../components/RotatingImage'
import ProjectsCarousel from '../components/ProjectsCarousel'
import Footer from '../components/Footer'
import cardImg from '../assets/hero/rectangle-card.png'
import signImg from '../assets/hero/rectangle-sign.png'
import capImg1 from '../assets/hero/girl-cap-1.png'
import redSweaterImg1 from '../assets/hero/redsweater-1.png'
import monadaImg1 from '../assets/hero/monada-1.png'
import './Home.css'

const featuredProjectImages = Array.from(
  { length: 8 },
  (_, i) => `https://picsum.photos/seed/enlace-project-${i + 1}/600/800`,
)

const redSweaterImages = [
  redSweaterImg1,
  'https://picsum.photos/seed/enlace-redsweater-2/440',
  'https://picsum.photos/seed/enlace-redsweater-3/440',
  'https://picsum.photos/seed/enlace-redsweater-4/440',
  'https://picsum.photos/seed/enlace-redsweater-5/440',
]

const monadaImages = [
  monadaImg1,
  'https://picsum.photos/seed/enlace-monada-2/440',
  'https://picsum.photos/seed/enlace-monada-3/440',
  'https://picsum.photos/seed/enlace-monada-4/440',
  'https://picsum.photos/seed/enlace-monada-5/440',
]

function Home() {
  return (
    <>
    <div className="hero">
      <SiteNav overlay />

      <div className="hero-collage">
        <div className="hero-photo hero-photo--card">
          <img src={cardImg} alt="Papelería de marca" />
        </div>
        <div className="hero-photo hero-photo--sign">
          <img src={signImg} alt="Cartel de local" />
        </div>
        <div className="hero-photo hero-photo--cap">
          <img src={capImg1} alt="Prenda bordada" />
        </div>
        <div className="hero-photo hero-photo--monada">
          <RotatingImage images={monadaImages} alt="Producto Monada" interval={3500} />
        </div>
        <div className="hero-photo hero-photo--redsweater">
          <RotatingImage images={redSweaterImages} alt="Gorra bordada" interval={3500} />
        </div>
      </div>

      <h1 className="hero-title hero-title--ideas">Where ideas</h1>

      <h1 className="hero-title hero-title--form">
        <span>find their</span>
        <span>form</span>
      </h1>
    </div>

    <section className="featured">
      <div className="featured-text">
        <p className="featured-copy">
          De la suma de la estrategia y el diseño centrado en las personas
          surge nuestra metodología, aportando la flexibilidad que las marcas
          necesitan para ir más allá de las barreras de su industria y
          pertenencia.
        </p>

        <span className="featured-eyebrow">Featured projects</span>
      </div>

      <ProjectsCarousel images={featuredProjectImages} />

      <Link to="/work" className="featured-more">
        Ver mas proyectos
      </Link>
    </section>

    <Footer />
    </>
  )
}

export default Home
