import { Outlet } from "react-router"
import { NavBar } from "./NavBar"

const Layout = () => {
  return (
    <div className="layout min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
