import { NavLink } from "@remix-run/react";

export default function Navbar() {
    return (
        <header className="px-8 py-2 w-24 shadow-sm w-full">

          <nav className="flex space-x-8 items-center">
            <NavLink to="/"><img className="h-8" src="/images/denali.svg" alt="Denali" /></NavLink>
            
            <div className="space-x-4">
              <NavLink to="/components">Components</NavLink>
              <NavLink to="/design">Design</NavLink>
            </div>
           
          </nav>
        </header>
    )
}

