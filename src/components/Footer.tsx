const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <img src="/logo_notext.png" alt="Sweet As Home" />
            <p>
              A family business rooted in Pacific Northwest forestry and stewardship —
              bringing generational values to business creation, real estate, and investment.
            </p>
          </div>

          <div className="footer__col">
            <h4>Navigate</h4>
            <ul>
              <li><a href="#history">History</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#philosophy">Philosophy</a></li>
              <li><a href="#ventures">Ventures</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:contact@sweetashome.co">contact@sweetashome.co</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {year} Sweet As Home. All rights reserved.</span>
          <span>sweetashome.co</span>
        </div>
      </div>
    </footer>
  )
}
