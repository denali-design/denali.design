import type { V2_MetaFunction } from "@remix-run/node";
import DocHeader from "~/DocHeader.tsx";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Tooltips" }];


export default function Index() {
    return (
        <div>
             <DocHeader
                title="Tooltips"
                description="The tooltip component offers concise, contextual information when users hover over or focus on an element. Acting as a supplemental guide, it provides clarity and insights without cluttering the primary interface, ensuring a more informed interaction."
            />

        </div>
    )
}