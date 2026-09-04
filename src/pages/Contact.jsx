import SiteNav from '../components/SiteNav'
import './Contact.css'

const image = 'https://picsum.photos/seed/enlace-contact/220/220'

function Contact() {
  return (
    <div className="contact">
      <SiteNav overlay />

      <h1 className="contact-heading">
        <span>Do you have a project in mind?</span>
        <span>Let's make it a reality.</span>
      </h1>

      <div className="contact-email">
        <p>Email</p>
        <p>
          <a href="mailto:hola@enlacestudio.com">hola@enlacestudio.com</a>
        </p>
      </div>

      <div className="contact-links">
        <p>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <br />
          <a href="https://behance.net" target="_blank" rel="noreferrer">
            Behance
          </a>
        </p>
        <p>
          +54XXXXXXXXX
          <br />
          +54XXXXXXXXX
        </p>
        <p>Based in Madrid. Working Worldwide.</p>
      </div>

      <div className="contact-image">
        <img src={image} alt="Enlace Studio" />
      </div>

      <p className="contact-copy">© {new Date().getFullYear()} Enlace Studio.</p>
    </div>
  )
}

export default Contact
