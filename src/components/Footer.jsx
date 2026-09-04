import { NavLink } from 'react-router-dom'
import './Footer.css'

const navLinks = [
  { to: '/studio', label: 'Studio' },
  { to: '/work', label: 'Work' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <h2 className="site-footer-heading">
          <span>Got a project in mind?</span>
          <span>
            Send us your email to{' '}
            <a href="mailto:hola@enlacestudio.com">hola@enlacestudio.com</a>
          </span>
        </h2>

        <div className="site-footer-columns">
          <ul className="site-footer-column">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to}>{label}</NavLink>
              </li>
            ))}
          </ul>

          <ul className="site-footer-column">
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://behance.net" target="_blank" rel="noreferrer">
                Behance
              </a>
            </li>
          </ul>

          <ul className="site-footer-column">
            <li>Based in Madrid</li>
            <li>Working Worldwide</li>
          </ul>
        </div>

        <p className="site-footer-copy">© {new Date().getFullYear()} Enlace Studio.</p>
      </div>
    </footer>
  )
}

export default Footer
