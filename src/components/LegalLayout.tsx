import type { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface LegalLayoutProps {
  title: string
  effectiveDate: string
  children: ReactNode
}

export default function LegalLayout({ title, effectiveDate, children }: LegalLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="legal">
        <div className="container legal__container">
          <header className="legal__header">
            <span className="section-label">Sweet As Home</span>
            <h1 className="legal__title">{title}</h1>
            <div className="gold-rule" />
            <p className="legal__effective">Effective date: {effectiveDate}</p>
          </header>
          <div className="legal__body">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  )
}
