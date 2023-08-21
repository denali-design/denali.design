import type { V2_MetaFunction } from "@remix-run/node";
import DocHeader from "~/DocHeader.tsx";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Quickstart" }];

export default function Index() {
    return (
        <div>
            <DocHeader
                title="Quickstart"
                description="Coming soon"
            />
        </div>
    )
}