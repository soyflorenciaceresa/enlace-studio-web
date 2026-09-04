import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './SiteNav.css'

const navLinks = [
  { to: '/studio', label: 'Studio' },
  { to: '/work', label: 'Work' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

function SiteNav({ overlay = false }) {
  const [open, setOpen] = useState(false)

  return (
    <header
      className={`site-nav${overlay ? ' site-nav--overlay' : ''}${open ? ' is-open' : ''}`}
    >
      <NavLink to="/" className="site-nav-logo" onClick={() => setOpen(false)}>
        Enlace Studio
      </NavLink>

      <button
        type="button"
        className="site-nav-toggle"
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className="site-nav-menu">
        <ul>
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} onClick={() => setOpen(false)}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default SiteNav
