import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Shadows" }];

export default function Index() {
    return (
        <div>
            <h1>Shadows</h1>
        </div>
    )
}