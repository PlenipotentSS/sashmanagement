import { useEffect, useRef } from 'react'

type Service = {
  name: string
  description: string
  href?: string
}

const services: Service[] = [
  {
    name: 'Services',
    description: 'Client services portal',
    href: 'https://services.sweetashome.co/login',
  },
  {
    name: 'Property Management',
    description: 'Owner & resident portal',
  },
  {
    name: 'Asset Management',
    description: 'Powered by Conifore',
    href: 'https://app.conifore.com/',
  },
]

type Props = {
  open: boolean
  onClose: () => void
}

export default function LoginModal({ open, onClose }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    dialogRef.current?.focus()
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="login-lightbox" onClick={onClose}>
      <div
        className="login-lightbox__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-lightbox-title"
        tabIndex={-1}
        ref={dialogRef}
        onClick={e => e.stopPropagation()}
      >
        <button
          className="login-lightbox__close"
          aria-label="Close"
          onClick={onClose}
        >
          ×
        </button>

        <span className="section-label">Client Access</span>
        <h2 id="login-lightbox-title" className="login-lightbox__title">Log In</h2>
        <div className="gold-rule" />

        <ul className="login-lightbox__list">
          {services.map(({ name, description, href }) => (
            <li key={name}>
              {href ? (
                <a className="login-lightbox__option" href={href}>
                  <span>
                    <span className="login-lightbox__name">{name}</span>
                    <span className="login-lightbox__desc">{description}</span>
                  </span>
                  <span className="login-lightbox__arrow" aria-hidden="true">→</span>
                </a>
              ) : (
                <div className="login-lightbox__option is-disabled" aria-disabled="true">
                  <span>
                    <span className="login-lightbox__name">{name}</span>
                    <span className="login-lightbox__desc">{description}</span>
                  </span>
                  <span className="login-lightbox__badge">Coming Soon</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
