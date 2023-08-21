import type { V2_MetaFunction } from "@remix-run/node";
import DocHeader from "~/DocHeader.tsx";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Shadows" }];

export default function Index() {
    return (
        <div>
             <DocHeader
                title="Shadows"
                description="The shadow component adds depth and emphasis to interface elements. By simulating natural lighting effects, it differentiates layers, highlights interactive components, and enhances the overall visual hierarchy, making the interface more intuitive and engaging."
            />
        </div>
    )
}