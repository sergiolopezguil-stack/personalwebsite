import { Link, NavLink, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="min-h-dvh bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-neutral-950/70 border-b border-neutral-200 dark:border-neutral-800">
        <nav className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <Link to="/" className="font-semibold tracking-tight">CV</Link>
          <div className="flex items-center gap-4 text-sm">
            <NavLink to="/sobre-mi" className={({isActive}) => isActive ? 'text-primary' : 'hover:text-primary'}>Sobre mí</NavLink>
            <NavLink to="/experiencia" className={({isActive}) => isActive ? 'text-primary' : 'hover:text-primary'}>Experiencia</NavLink>
            <NavLink to="/proyectos" className={({isActive}) => isActive ? 'text-primary' : 'hover:text-primary'}>Proyectos</NavLink>
            <NavLink to="/habilidades" className={({isActive}) => isActive ? 'text-primary' : 'hover:text-primary'}>Habilidades</NavLink>
            <NavLink to="/contacto" className={({isActive}) => isActive ? 'text-primary' : 'hover:text-primary'}>Contacto</NavLink>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        <Outlet />
      </main>

      <footer className="border-t border-neutral-200 dark:border-neutral-800 py-6 mt-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-sm text-neutral-500">
          © {new Date().getFullYear()} CV
        </div>
      </footer>
    </div>
  )
}


