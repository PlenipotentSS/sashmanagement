import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * On route change, scroll to the top of the page — unless the URL has a hash,
 * in which case let the browser jump to that section anchor.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
