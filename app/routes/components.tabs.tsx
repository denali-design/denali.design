import { Form, Link, NavLink, Outlet, useLoaderData } from "@remix-run/react";


export default function NoteIndexPage() {
    return (
        <div>
            
            <h1 className="text-5xl font-bold">Cards</h1>

            <div className="flex-1 p-6">
                <Outlet />
            </div>

        </div>
    )
}

