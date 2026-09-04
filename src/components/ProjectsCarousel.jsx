import './ProjectsCarousel.css'

function ProjectsCarousel({ images, duration = 36, orientation = 'horizontal' }) {
  const track = [...images, ...images]

  return (
    <div className={`projects-carousel projects-carousel--${orientation}`}>
      <div
        className="projects-carousel-track"
        style={{ animationDuration: `${duration}s` }}
      >
        {track.map((src, i) => (
          <div className="projects-carousel-card" key={i}>
            <img src={src} alt="" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectsCarousel
