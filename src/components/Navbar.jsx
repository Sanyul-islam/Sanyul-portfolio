const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contacts", href: "#contacts" },
];

export default function Navbar() {
  return (
    <header className="w-full">
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-6 md:px-10">
        <a href="#home" className="font-display text-lg font-semibold">
          Sanyul
        </a>
        <ul className="hidden items-center gap-8 text-sm text-muted md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}