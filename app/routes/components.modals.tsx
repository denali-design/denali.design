import type { V2_MetaFunction } from "@remix-run/node";
import DocHeader from "~/DocHeader.tsx";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Modals" }];


export default function Index() {
    return (
        <div>

             <DocHeader
                title="Modals"
                description="The modal component displays content in a layer above the main interface, capturing user attention for actions or information. It interrupts the user flow momentarily, making it ideal for confirming decisions or displaying supplementary details without navigating away from the current page."
            />
        </div>
    )
}