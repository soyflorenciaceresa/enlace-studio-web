import { NavLink } from 'react-router-dom'
import './SiteNav.css'

const navLinks = [
  { to: '/studio', label: 'Studio' },
  { to: '/work', label: 'Work' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

function SiteNav({ overlay = false }) {
  return (
    <header className={`site-nav${overlay ? ' site-nav--overlay' : ''}`}>
      <NavLink to="/" className="site-nav-logo">
        Enlace Studio
      </NavLink>
      <nav>
        <ul>
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to}>{label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default SiteNav
