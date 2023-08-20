import { Link } from "@remix-run/react";
import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Cards" }];

export default function Index() {
    return (
        <div>
            <h1>Cards</h1>
            <p>A versatile container that displays information and actions about a single topic, often used in grids or lists to present a summary or overview.</p>
        </div>
    )
}