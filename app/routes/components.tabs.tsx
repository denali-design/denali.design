import type { V2_MetaFunction } from "@remix-run/node";
import DocHeader from "~/DocHeader.tsx";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Tabs" }];


export default function Index() {
    return (
        <div>
            <DocHeader
                title="Tabs"
                description="The tabs component organizes content into separate sections accessible via clickable headers. By compartmentalizing related information, it streamlines user navigation, allowing for easy switching between topics or subpages without leaving the main view."
            />
        </div>
    )
}

