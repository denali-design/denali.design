import { Link } from "@remix-run/react";
import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Chips" }];

export default function Index() {
    return (
        <div>
            <h1>Chips</h1>
        </div>
    )
}