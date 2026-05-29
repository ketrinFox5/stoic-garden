import { ReactNode } from "react"
import { Navbar } from "./navbar"
import { Container } from "./container"

type AppShellProps = {
  children: ReactNode
}

export function AppShell({
  children,
}: AppShellProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-8 md:py-12">
        <Container>
          {children}
        </Container>
      </main>
    </div>
  )
}
