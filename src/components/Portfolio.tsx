const ventures = [
  {
    category: 'Premium Canine Breeding',
    description:
      'A boutique Havanese breeding program dedicated to producing healthy, well-socialized companion dogs. Rooted in responsible breeding practices, genetic health testing, and loving placement.',
  },
  {
    category: 'Craft Beverage',
    description:
      'A craft libations brand exploring the artisan amaro spirits and beverage landscape of the Pacific Northwest — built by industry professionals with wild-crafted ingredients, and a sense of place.',
  },
  {
    category: 'Business Development',
    description:
      'The operational and innovation arm of the Sweet As Home family — incubating new business ideas, providing strategic advisory, and accelerating early-stage ventures with capital and counsel.',
  },
  {
    category: 'Real Estate Investing & Lending',
    description:
      'Collaborative development and private lending platform focused on real estate and land transactions in the Pacific Northwest. Combining deep market knowledge with flexible, relationship-driven capital solutions.',
  },
]

export default function Portfolio() {
  return (
    <section id="ventures" className="portfolio section-pad">
      <div className="container">
        <div className="portfolio__intro">
          <span className="section-label">Our Ventures</span>
          <h2 className="section-title">The SASH Family of Businesses</h2>
          <div className="gold-rule" />
          <p>
            From lending to libations, each venture in the Sweet As Home portfolio reflects our
            core values: quality, stewardship, and long-term thinking. We build businesses we
            believe in — and support them for the long haul.
          </p>
        </div>

        <div className="portfolio__grid">
          {ventures.map((v) => (
            <div key={v.category} className="portfolio__card">
              <p className="portfolio__card-category">{v.category}</p>
              {/* <h3>{v.name}</h3> */}
              <p>{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
