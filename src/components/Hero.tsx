export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <p className="hero__eyebrow">Pacific Northwest · Est. Generationally</p>
        <h1 className="hero__title">
          Rooted in the Land.<br />
          <em>Built for Generations.</em>
        </h1>
        <p className="hero__subtitle">
          Sweet As Home is a family business grounded in the stewardship, timber, and land
          traditions of the Pacific Northwest — bringing that same long-view ethos to business
          creation, investment, and growth.
        </p>
        <a href="#history" className="hero__cta">
          Our Story
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      <div className="hero__scroll-hint">
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  )
}
