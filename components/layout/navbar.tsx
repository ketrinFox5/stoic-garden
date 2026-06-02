import Link from "next/link"
import { Container } from "./container"

const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/library",
    label: "Library",
  },
   {
    href: "/concepts",
    label: "Concepts",
  },
  {
    href: "/journal",
    label: "Journal",
  },
  {
    href: "/reflection",
    label: "Reflection",
  },
]

export function Navbar() {
  return (
    <header className="border-b">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="font-semibold"
          >
            Stoic Garden
          </Link>

          <div className="flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </Container>
    </header>
  )
}