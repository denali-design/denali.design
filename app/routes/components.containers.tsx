import { Link } from "@remix-run/react";
import type { V2_MetaFunction } from "@remix-run/node";
import DocHeader from "~/DocHeader.tsx";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Containers" }];

export default function Index() {
    return (
        <div>

            <DocHeader
                title="Containers"
                description="The container component structures and aligns content sections within a layout. It aids in creating a cohesive and organized presentation, ensuring content is displayed in a consistent and responsive manner across devices."
            />
            
        </div>
    )
}