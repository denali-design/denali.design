import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Spacing" }];


export default function Index() {
    return (
        <div>
            <h1>Spacing</h1>
        </div>
    )
}