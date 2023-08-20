import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Quickstart" }];

export default function Index() {
    return (
        <div>
            <h1>Quickstart</h1>
        </div>
    )
}