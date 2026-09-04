import { useParams, Navigate } from 'react-router-dom'
import SiteNav from '../components/SiteNav'
import Footer from '../components/Footer'
import { getProjectBySlug } from '../data/projects'
import './ProjectDetail.css'

const detailSections = [
  {
    title: 'El desafío',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    title: 'La estrategia',
    body: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.',
  },
  {
    title: 'El proceso creativo',
    body: 'Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi.',
  },
  {
    title: 'El resultado',
    body: 'Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu.',
  },
]

const methodologyCopy =
  'De la suma de la estrategia y el diseño centrado en las personas surge nuestra metodología, aportando la flexibilidad que las marcas necesitan.'

function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return <Navigate to="/work" replace />
  }

  const heroImage = `https://picsum.photos/seed/enlace-project-hero-${project.slug}/1599/816`
  const detailImages = detailSections.map(
    (_, i) => `https://picsum.photos/seed/enlace-project-detail-${project.slug}-${i + 1}/1155/816`,
  )

  return (
    <>
      <SiteNav />

      <article className="project-detail">
        <header className="project-header">
          <h1 className="project-title">{project.name}</h1>
          <p className="project-excerpt">
            Let the writing speak for itself. Keep a consistent tone and voice
            throughout the website to stay true to the brand image and give
            visitors a taste of the company’s values and personality.
          </p>
          <div className="project-meta">
            <p>{project.category}</p>
            <p>Ubicación: Buenos Aires, Argentina</p>
            <p>Año: 2026</p>
          </div>
        </header>

        <div className="project-hero">
          <img src={heroImage} alt={project.name} />
        </div>

        <p className="project-copy">{methodologyCopy}</p>

        <div className="project-details">
          {detailSections.map((section, i) => (
            <div className="project-detail-row" key={section.title}>
              <div className="project-detail-text">
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </div>
              <div className="project-detail-image">
                <img src={detailImages[i]} alt="" loading="lazy" />
              </div>
            </div>
          ))}
        </div>

        <div className="project-team">
          <span>Team</span>
          <p>
            Director, Brand Marketing
            <br />
            Jessie Young
            <br />
            Design Program Director
            <br />
            Kristen Conner
            <br />
            Principal Designer
            <br />
            Mikaila Weaver
          </p>
        </div>
      </article>

      <Footer />
    </>
  )
}

export default ProjectDetail
