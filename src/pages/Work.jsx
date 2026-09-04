import { Link } from 'react-router-dom'
import SiteNav from '../components/SiteNav'
import Footer from '../components/Footer'
import { projects } from '../data/projects'
import './Work.css'

function Work() {
  return (
    <>
      <SiteNav />

      <section className="work">
        <p className="work-copy">
          De la suma de la estrategia y el diseño centrado en las personas
          surge nuestra metodología, aportando la flexibilidad que las marcas
          necesitan para ir más allá de las barreras de su industria y
          pertenencia.
        </p>

        <span className="work-eyebrow">Latest projects</span>

        <div className="work-grid">
          {projects.map((project) => (
            <Link
              to={`/work/${project.slug}`}
              className="work-card"
              key={project.name}
              style={{ gridRow: project.row, gridColumn: project.col }}
            >
              <div className="work-card-image">
                <img src={project.image} alt={project.name} loading="lazy" />
              </div>
              <div className="work-card-caption">
                <p>{project.name}</p>
                <p>{project.category}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Work
