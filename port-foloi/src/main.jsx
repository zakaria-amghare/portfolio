import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Disable rubber band / overscroll bounce
document.documentElement.addEventListener('wheel', (e) => {
  const el = document.documentElement;
  const atTop = el.scrollTop === 0;
  const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight;
  if ((atTop && e.deltaY < 0) || (atBottom && e.deltaY > 0)) {
    e.preventDefault();
  }
}, { passive: false });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)