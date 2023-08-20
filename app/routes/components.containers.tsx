import { Link } from "@remix-run/react";
import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Containers" }];

export default function Index() {
    return (
        <div>
            <h1>Containers</h1>
            <p>The container component structures and aligns content sections within a layout. It aids in creating a cohesive and organized presentation, ensuring content is displayed in a consistent and responsive manner across devices.</p>
        </div>
    )
}