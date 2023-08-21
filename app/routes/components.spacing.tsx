import type { V2_MetaFunction } from "@remix-run/node";
import DocHeader from "~/DocHeader.tsx";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Spacing" }];

export default function Index() {
    return (
        <div>

            <DocHeader
                title="Spacing"
                description="The spacing component ensures consistent gaps and alignments between interface elements. It aids in creating a clear visual hierarchy, enhancing readability, and ensuring that content and components breathe and interact harmoniously within the layout."
            />
        </div>
    )
}