function Navigation({ links }) {
  return (
    <nav className="site-navigation" aria-label="Navegação principal">
      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
