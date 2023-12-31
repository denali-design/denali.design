import { Form, Link, NavLink, Outlet, useLoaderData } from "@remix-run/react";

import type { V2_MetaFunction } from "@remix-run/node";
import DocHeader from "~/DocHeader.tsx";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Components" }];

export default function Index() {
    return (
        <div className="flex">
            <nav id="sidebar" className="flex flex-col h-screen overflow-y-scroll border-r border-gray-200 p-4 w-48">
                <div className="mb-6 flex flex-col">
                    <p className="font-bold text-black">Getting Started</p>
                    <NavLink className="text-gray-600" to="introduction">Introduction</NavLink>
                    <NavLink className="text-gray-600" to="quickstart">Quickstart</NavLink>
                    <NavLink className="text-gray-600" to="license">License</NavLink>
                </div>

                <div className="mb-6 flex flex-col">
                    <p className="font-bold text-black">Tokens</p>
                    <NavLink className="text-gray-600" to="colors">Colors</NavLink>
                    <NavLink className="text-gray-600" to="spacing">Spacing</NavLink>
                    <NavLink className="text-gray-600" to="shadows">Shadows</NavLink>
                    <NavLink className="text-gray-600" to="typography">Typography</NavLink>
                </div>

                <div className="mb-6 flex flex-col">
                    <p className="font-bold text-black">Display</p>
                    <NavLink className="text-gray-600" to="alerts">Alerts</NavLink>
                    <NavLink className="text-gray-600" to="badges">Badges</NavLink>
                    <NavLink className="text-gray-600" to="breadcrumb">Breadcrumb</NavLink>
                    <NavLink className="text-gray-600" to="cards">Cards</NavLink>
                    <NavLink className="text-gray-600" to="chips">Chips</NavLink>
                    <NavLink className="text-gray-600" to="code">Code</NavLink>
                    <NavLink className="text-gray-600" to="containers">Containers</NavLink>
                    <NavLink className="text-gray-600" to="dividers">Dividers</NavLink>
                    <NavLink className="text-gray-600" to="grids">Grids</NavLink>
                    <NavLink className="text-gray-600" to="modals">Modals</NavLink>
                    <NavLink className="text-gray-600" to="pagination">Pagination</NavLink>
                    <NavLink className="text-gray-600" to="tables">Tables</NavLink>
                    <NavLink className="text-gray-600" to="tabs">Tabs</NavLink>
                </div>

                <div className="mb-6 flex flex-col">
                    <p className="font-bold text-black">Forms</p>
                    <NavLink className="text-gray-600" to="checkbox">Checkbox</NavLink>
                    <NavLink className="text-gray-600" to="file-input">File Input</NavLink>
                    <NavLink className="text-gray-600" to="input-fields">Input Fields</NavLink>
                    <NavLink className="text-gray-600" to="radio">Radio</NavLink>
                    <NavLink className="text-gray-600" to="range">Range</NavLink>
                    <NavLink className="text-gray-600" to="search-input">Search Input</NavLink>
                    <NavLink className="text-gray-600" to="textarea">Textarea</NavLink>
                    <NavLink className="text-gray-600" to="toggle">Toggle</NavLink>
                </div>
            </nav>
            
            <main className="p-8 flex-1">
                <div className="">
                    <Outlet />
                </div>
            </main>
        </div>
    )
}