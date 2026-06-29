import { useMemo, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Search, Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/worklog', label: 'Worklog' },
  { path: '/aws', label: 'AWS' },
  { path: '/architecture', label: 'Architecture' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/report', label: 'Report' },
  { path: '/proposal', label: 'Proposal' },
  { path: '/events', label: 'Events' },
  { path: '/workshop', label: 'Workshop' },
  { path: '/evaluation', label: 'Evaluation' },
  { path: '/feedback', label: 'Feedback' },
  { path: '/contact', label: 'Contact' },
]

const Navbar = () => {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)

  const filteredItems = useMemo(
    () =>
      navItems.filter((item) =>
        item.label.toLowerCase().includes(query.trim().toLowerCase()),
      ),
    [query],
  )

  return (
    <header className="navbar">
      <div className="navbar-brand">
        <span>AWS Internship Report</span>
      </div>

      <button
        type="button"
        className="navbar-burger"
        aria-label="Toggle navigation"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      <div className={`navbar-menu ${open ? 'open' : ''}`}>
        <div className="navbar-search">
          <Search size={16} />
          <input
            type="search"
            placeholder="Search pages"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <nav className="navbar-links">
          {filteredItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? 'navbar-link active' : 'navbar-link'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="navbar-actions">
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Navbar
