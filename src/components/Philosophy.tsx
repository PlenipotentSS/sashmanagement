const pillars = [
  {
    number: '01',
    title: 'Long-Term Vision',
    body: 'We do not chase quarters. Every business we support and every investment we make is evaluated on its capacity to create durable, compounding value over years and decades — not cycles. Patience is a competitive advantage.',
  },
  {
    number: '02',
    title: 'Stewardship First',
    body: 'Ownership is temporary; stewardship is permanent. Whether managing land, capital, or companies, we operate as stewards — accountable to those who came before and those who will come after. This shapes every decision we make.',
  },
  {
    number: '03',
    title: 'Generational Capital',
    body: 'Real estate, land, and businesses that serve real needs are the foundation of lasting family wealth. We invest in tangible assets and operating businesses with structural advantages — anchored in the Northwest and built to transfer across generations.',
  },
  {
    number: '04',
    title: 'Ground-Up Partnership',
    body: 'We are operators and builders, not passive allocators. From ideation through launch and scale, we bring hands-on experience in strategy, finance, and execution — working alongside founders and teams who share our values.',
  },
]

export default function Philosophy() {
  return (
    <section id="philosophy" className="philosophy section-pad">
      <div className="container">
        <div className="philosophy__intro">
          <span className="section-label">How We Think</span>
          <h2 className="section-title section-title--light">Business &amp; Investment Philosophy</h2>
          <div className="gold-rule" />
          <p>
            Decades of experience across forestry, real estate, lending, and consumer businesses
            have shaped a clear, consistent philosophy — one that prioritizes resilience over
            speed, and stewardship over extraction.
          </p>
        </div>

        <div className="philosophy__pillars">
          {pillars.map((pillar) => (
            <div key={pillar.number} className="philosophy__pillar">
              <div className="philosophy__pillar-number">{pillar.number}</div>
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
