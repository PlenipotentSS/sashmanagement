import { useEffect, useState } from 'react'

const links = [
  { label: 'History', href: '#history' },
  { label: 'About', href: '#about' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Ventures', href: '#ventures' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : 'top'}`}>
      <div className="navbar__inner">
        <a href="#" className="navbar__logo">
          <img src="/logo_notext.png" alt="Sweet As Home Icon" />
          <span className="navbar__logo-text logo-text-scrolled">
            <img src="/text_only.png" alt="Sweet As Home" />
          </span>
          <span className="navbar__logo-text logo-text-top">
            <img src="/text_only_top.png" alt="Sweet As Home" />
          </span>
        </a>

        <ul className={`navbar__links ${menuOpen ? 'open' : ''}`}>
          {links.map(({ label, href }) => (
            <li key={href}>
              <a href={href} onClick={() => setMenuOpen(false)}>{label}</a>
            </li>
          ))}
        </ul>

        <button
          className="navbar__hamburger"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(o => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
