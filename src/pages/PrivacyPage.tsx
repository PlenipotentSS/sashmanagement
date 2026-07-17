import LegalLayout from '../components/LegalLayout'

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" effectiveDate="June 4, 2026">
      <p>
        This Privacy Policy describes how Sweet As Home (&ldquo;Sweet As Home,&rdquo;
        &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and protects
        information in connection with this website and the payment facilitation and acceptance
        services we provide on behalf of the businesses we manage and our affiliated entities
        (each, a &ldquo;Managed Business&rdquo;).
      </p>

      <h2>Who We Are</h2>
      <p>
        Sweet As Home acts as the central payment facilitation and acceptance entity for our
        Managed Businesses. When you make a payment to one of our Managed Businesses, Sweet As
        Home may be the party that accepts, processes, and is responsible for handling those
        funds. We share information with the relevant Managed Business as needed to fulfill your
        order, deliver your product or service, and provide support.
      </p>

      <h2>Information We Collect</h2>
      <p>We may collect the following categories of information:</p>
      <ul>
        <li>
          <strong>Contact and identity information</strong> — such as your name, email address,
          postal address, and phone number.
        </li>
        <li>
          <strong>Transaction and payment information</strong> — such as the products or services
          purchased, amounts, and billing details. Card and bank account numbers are handled by
          our PCI-compliant third-party payment processors; we do not store full payment card
          numbers on our systems.
        </li>
        <li>
          <strong>Technical and usage information</strong> — such as IP address, browser type,
          device information, and pages visited, collected automatically through standard web
          technologies.
        </li>
      </ul>

      <h2>How We Use Information</h2>
      <ul>
        <li>To accept, process, settle, and reconcile payments on behalf of our Managed Businesses.</li>
        <li>To fulfill orders and provide the products, services, and support you request.</li>
        <li>To detect, prevent, and address fraud, security issues, and prohibited activity.</li>
        <li>To comply with legal, regulatory, accounting, and recordkeeping obligations.</li>
        <li>To operate, maintain, and improve this website and our services.</li>
      </ul>

      <h2>How We Share Information</h2>
      <p>We share information only as needed and do not sell your personal information. We may share information with:</p>
      <ul>
        <li>
          <strong>Managed Businesses</strong> — the specific business whose products or services
          you purchased, so they can fulfill and support your transaction.
        </li>
        <li>
          <strong>Payment processors and financial institutions</strong> — to process and settle
          payments.
        </li>
        <li>
          <strong>Service providers</strong> — vendors who perform services on our behalf under
          confidentiality obligations.
        </li>
        <li>
          <strong>Legal and regulatory authorities</strong> — when required by law, subpoena, or
          to protect our rights, customers, and the public.
        </li>
      </ul>

      <h2>Payment Card Data &amp; Security</h2>
      <p>
        We use reputable, PCI-DSS-compliant payment processors to handle sensitive payment
        information. We maintain administrative, technical, and physical safeguards designed to
        protect information. No method of transmission or storage is completely secure, and we
        cannot guarantee absolute security.
      </p>

      <h2>Data Retention</h2>
      <p>
        We retain information for as long as necessary to provide our services, comply with our
        legal and financial recordkeeping obligations, resolve disputes, and enforce our
        agreements.
      </p>

      <h2>Your Choices &amp; Rights</h2>
      <p>
        Depending on where you live, you may have rights to access, correct, delete, or restrict
        the use of your personal information, or to opt out of certain processing. To exercise any
        of these rights, contact us using the details below. We will respond consistent with
        applicable law.
      </p>

      <h2>Children&rsquo;s Privacy</h2>
      <p>
        Our website and services are not directed to children under 13, and we do not knowingly
        collect personal information from children.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. When we do, we will revise the
        effective date above. Material changes will be reflected on this page.
      </p>

      <h2>Contact Us</h2>
      <p>
        Questions about this Privacy Policy or our data practices? Email{' '}
        <a href="mailto:privacy@sweetashome.co">privacy@sweetashome.co</a> or{' '}
        <a href="mailto:contact@sweetashome.co">contact@sweetashome.co</a>, or call{' '}
        <a href="tel:+12066591257">+1 206-659-1257</a>.
      </p>

      <p className="legal__disclaimer">
        This Privacy Policy is provided for general informational purposes and does not constitute
        legal advice.
      </p>
    </LegalLayout>
  )
}
