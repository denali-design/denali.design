import { Form, Link, NavLink, Outlet, useLoaderData } from "@remix-run/react";

export default function NoteIndexPage() {
    return (
        <div className="flex">
            <nav id="sidebar" className="flex flex-col h-screen border-r border-gray-100  p-4">
                <div className="mb-8 flex flex-col">
                    <p className="uppercase text-black">Getting Started</p>
                    <NavLink to="colors">Introduction</NavLink>
                    <NavLink to="spacing">Quickstart</NavLink>
                </div>

                <div className="mb-8 flex flex-col">
                    <p className="uppercase text-black">Tokens</p>
                    <NavLink to="colors">Colors</NavLink>
                    <NavLink to="spacing">Spacing</NavLink>
                    <NavLink to="shadows">Shadows</NavLink>
                </div>

                <div className="mb-8 flex flex-col">
                    <p className="uppercase text-black">Components</p>
                    <NavLink to="alerts">Alerts</NavLink>
                    <NavLink to="badges">Badges</NavLink>
                    <NavLink to="breadcrumb">Breadcrumb</NavLink>
                    <NavLink to="cards">Cards</NavLink>
                    <NavLink to="chips">Chips</NavLink>
                    <NavLink to="code">Code</NavLink>
                    <NavLink to="containers">Containers</NavLink>
                    <NavLink to="divider">Dividers</NavLink>
                    <NavLink to="grid">Grids</NavLink>
                    <NavLink to="modals">Modals</NavLink>
                    <NavLink to="pagination">Pagination</NavLink>

                    {/* <NavLink to="chips">Chips</NavLink> */}


                </div>
            </nav>
            
            <main className="p-8">
                <h1 className="text-5xl font-bold">This should be dynamic</h1>

                <div className="">
                    <Outlet />
                </div>
            </main>
        </div>
    )
}