import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'
import Inicio from './pages/Inicio'
import SobreMi from './pages/SobreMi'
import Experiencia from './pages/Experiencia'
import Habilidades from './pages/Habilidades'
import Contacto from './pages/Contacto'
import { I18nProvider } from './i18n/I18nProvider'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Inicio /> },
      { path: 'sobre-mi', element: <SobreMi /> },
      { path: 'experiencia', element: <Experiencia /> },
      { path: 'habilidades', element: <Habilidades /> },
      { path: 'contacto', element: <Contacto /> },
    ],
  },
], {
  basename: import.meta.env.BASE_URL,
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nProvider>
      <RouterProvider router={router} />
    </I18nProvider>
  </StrictMode>,
)
