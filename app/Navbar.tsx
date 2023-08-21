import { NavLink } from "@remix-run/react";

export default function Navbar() {
    return (
        <header className="px-8 py-2 w-24 shadow-sm w-full">

          <nav className="flex space-x-8 items-center">
            <NavLink to="/" className="flex items-center font-bold space-x-1">
              <img className="h-8" src="/images/denali.svg" alt="Denali" />
              <span className="text-2xl">Denali</span> 
            </NavLink>

            <div className="shadow-sm bg-gray-50 py-0.5 px-4 border border-gray-300 rounded-sm">
              v3.0
            </div>
            
            <div className="space-x-4">
              <NavLink to="/components/introduction">Components</NavLink>
              <NavLink to="/design">Design</NavLink>
              <NavLink to="/icons">Icons</NavLink>
              <NavLink to="/about">About</NavLink>
            </div>
           
          </nav>
        </header>
    )
}

