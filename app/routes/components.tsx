import { Form, Link, NavLink, Outlet, useLoaderData } from "@remix-run/react";

import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Remix Notes" }];

export default function Index() {
    return (
        <div className="flex">
            <nav id="sidebar" className="flex flex-col h-screen border-r border-gray-100  p-4">
                <div className="mb-8 flex flex-col">
                    <p className="font-bold text-black">Getting Started</p>
                    <NavLink to="introduction">Introduction</NavLink>
                    <NavLink to="quickstart">Quickstart</NavLink>
                    <NavLink to="license">License</NavLink>
                </div>

                <div className="mb-8 flex flex-col">
                    <p className="font-bold text-black">Tokens</p>
                    <NavLink to="colors">Colors</NavLink>
                    <NavLink to="spacing">Spacing</NavLink>
                    <NavLink to="shadows">Shadows</NavLink>
                    <NavLink to="typography">Typography</NavLink>
                </div>

                <div className="mb-8 flex flex-col">
                    <p className="font-bold text-black">Display</p>
                    <NavLink to="alerts">Alerts</NavLink>
                    <NavLink to="badges">Badges</NavLink>
                    <NavLink to="breadcrumb">Breadcrumb</NavLink>
                    <NavLink to="cards">Cards</NavLink>
                    <NavLink to="chips">Chips</NavLink>
                    <NavLink to="code">Code</NavLink>
                    <NavLink to="containers">Containers</NavLink>
                    <NavLink to="dividers">Dividers</NavLink>
                    <NavLink to="grids">Grids</NavLink>
                    <NavLink to="modals">Modals</NavLink>
                    <NavLink to="pagination">Pagination</NavLink>

                    {/* <NavLink to="chips">Chips</NavLink> */}


                </div>
            </nav>
            
            <main className="p-8">
                <div className="">
                    <Outlet />
                </div>
            </main>
        </div>
    )
}