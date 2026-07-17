import LegalLayout from '../components/LegalLayout'

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Use" effectiveDate="June 4, 2026">
      <p>
        These Terms of Use (&ldquo;Terms&rdquo;) govern your access to and use of this website and
        the payment facilitation and acceptance services provided by Sweet As Home (&ldquo;Sweet As
        Home,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By using this
        website or making a payment processed by Sweet As Home, you agree to these Terms.
      </p>

      <h2>Our Role as Payment Facilitator</h2>
      <p>
        Sweet As Home acts as the payment facilitation and acceptance entity for the businesses we
        manage and our affiliated entities (each, a &ldquo;Managed Business&rdquo;). This means:
      </p>
      <ul>
        <li>
          Sweet As Home accepts, processes, and is responsible for handling payments made to a
          Managed Business, and settles those funds to the appropriate Managed Business under
          internal agreements.
        </li>
        <li>
          A charge for products or services provided by a Managed Business may appear on your
          payment statement as <strong>Sweet As Home</strong> or a related descriptor.
        </li>
        <li>
          The products and services themselves are provided by the applicable Managed Business.
          Sweet As Home assumes responsibility for the handling of the related funds.
        </li>
      </ul>

      <h2>Payments, Billing &amp; Authorization</h2>
      <ul>
        <li>
          You represent that any payment method you use is yours or that you are authorized to use
          it, and that the information you provide is accurate and complete.
        </li>
        <li>
          You authorize Sweet As Home and its payment processors to charge your selected payment
          method for the amounts you approve, including applicable taxes and fees.
        </li>
        <li>
          By submitting a payment, you authorize Sweet As Home to accept and handle those funds on
          behalf of the relevant Managed Business.
        </li>
      </ul>

      <h2>Refunds, Disputes &amp; Chargebacks</h2>
      <p>
        Refund and cancellation terms are determined by the applicable Managed Business and any
        agreement governing your purchase. To request a refund or raise a billing question,
        contact <a href="mailto:payments@sweetashome.co">payments@sweetashome.co</a>. We encourage
        you to contact us before initiating a chargeback so we can resolve the matter directly.
      </p>

      <h2>Acceptable Use</h2>
      <p>You agree not to use this website or our services to:</p>
      <ul>
        <li>Violate any applicable law or regulation, or facilitate unlawful activity.</li>
        <li>Submit fraudulent, unauthorized, or deceptive payment information.</li>
        <li>Interfere with, disrupt, or attempt to gain unauthorized access to our systems.</li>
        <li>Infringe the intellectual property or other rights of Sweet As Home or others.</li>
      </ul>

      <h2>Intellectual Property</h2>
      <p>
        This website and its content, including text, graphics, logos, and the Sweet As Home name,
        are owned by Sweet As Home or its licensors and are protected by applicable laws. You may
        not use them without our prior written permission.
      </p>

      <h2>Disclaimers</h2>
      <p>
        This website and our services are provided &ldquo;as is&rdquo; and &ldquo;as
        available&rdquo; without warranties of any kind, whether express or implied, to the fullest
        extent permitted by law. We do not warrant that the website will be uninterrupted,
        error-free, or secure.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, Sweet As Home and its affiliates will not be liable
        for any indirect, incidental, special, consequential, or punitive damages, or any loss of
        profits or revenues, arising out of or related to your use of this website or our services.
      </p>

      <h2>Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless Sweet As Home, its affiliates, and its Managed
        Businesses from any claims, losses, or expenses arising out of your violation of these
        Terms or your misuse of the website or services.
      </p>

      <h2>Governing Law</h2>
      <p>
        These Terms are governed by the laws of the State of Washington, without regard to its
        conflict-of-laws principles. Any disputes will be subject to the exclusive jurisdiction of
        the state and federal courts located in Washington.
      </p>

      <h2>Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. When we do, we will revise the effective date
        above. Your continued use of the website or services after changes take effect constitutes
        acceptance of the updated Terms.
      </p>

      <h2>Contact Us</h2>
      <p>
        Questions about these Terms? Email{' '}
        <a href="mailto:payments@sweetashome.co">payments@sweetashome.co</a> or{' '}
        <a href="mailto:contact@sweetashome.co">contact@sweetashome.co</a>, or call{' '}
        <a href="tel:+12066591257">+1 206-659-1257</a>.
      </p>

      <p className="legal__disclaimer">
        These Terms of Use are provided for general informational purposes and do not constitute
        legal advice. We recommend review by qualified legal counsel before relying on them.
      </p>
    </LegalLayout>
  )
}
