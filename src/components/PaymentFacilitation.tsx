import { Link } from 'react-router-dom'

const points = [
  {
    title: 'A Single, Accountable Counterparty',
    body: 'Rather than each of our managed and affiliated businesses collecting payments independently, Sweet As Home serves as the central payment facilitation entity. Customers transact with one trusted, accountable party, while the underlying business delivers the product or service.',
  },
  {
    title: 'Responsibility for the Flow of Funds',
    body: 'Sweet As Home takes on the operational responsibility and liability for accepting, processing, and reconciling payments made on behalf of the businesses we manage and our affiliated entities — then settling those funds to the appropriate business under clear internal agreements.',
  },
  {
    title: 'Stewardship of Customer Trust',
    body: 'Handling other people’s money is a responsibility we treat with the same long-view stewardship that defines everything we do. We maintain clear records, sound controls, and transparent terms so that every customer and every business knows exactly who is accountable.',
  },
]

export default function PaymentFacilitation() {
  return (
    <section id="payments" className="payments section-pad">
      <div className="container">
        <div className="payments__intro">
          <span className="section-label">Payment Facilitation</span>
          <h2 className="section-title section-title--light">
            One Trusted Entity Behind Every Transaction
          </h2>
          <div className="gold-rule" />
          <p>
            Sweet As Home acts as the payment facilitation and acceptance entity for the
            businesses we manage and our affiliated entities. When you pay one of our
            businesses, Sweet As Home is the party that accepts and is responsible for handling
            those funds &mdash; bringing accountability, consistency, and trust to every payment.
          </p>
        </div>

        <div className="payments__grid">
          {points.map((p) => (
            <div key={p.title} className="payments__card">
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>

        <div className="payments__notice">
          <p>
            Sweet As Home accepts payments on behalf of its managed and affiliated businesses and
            assumes responsibility for the handling of those funds. Charges from any of our
            businesses may appear on your statement as <strong>Sweet As Home</strong>. For
            questions about a payment, billing, or a specific business relationship, contact{' '}
            <a href="mailto:payments@sweetashome.co">payments@sweetashome.co</a>.
          </p>
          <p className="payments__legal-links">
            Review our{' '}
            <Link to="/privacy">Privacy Policy</Link> and{' '}
            <Link to="/terms">Terms of Use</Link> for full details on how we handle data and
            payments.
          </p>
        </div>
      </div>
    </section>
  )
}
