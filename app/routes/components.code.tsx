import { Link } from "@remix-run/react";
import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Remix Notes" }];

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