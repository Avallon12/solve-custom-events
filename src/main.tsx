import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

/**
 * Take scroll restoration away from the browser.
 *
 * On reload the browser restores the previous scroll position — but it does so
 * after React mounts, so the scroll-driven hero had already computed its
 * clip-path, opacity and parallax offsets for scrollY 0. The page then jumped
 * to the restored position with every animation frozen at the wrong value:
 * headline gone, frames stacked, the rest of the hero blank. Starting every
 * load at the top keeps the motion values and the actual position in agreement.
 */
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}

// Every route is prerendered to static HTML at build time, so the normal path
// is hydration. An empty root (the dev server) falls back to a fresh render.
const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
