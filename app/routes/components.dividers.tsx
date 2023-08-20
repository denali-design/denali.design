import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Dividers" }];


export default function Index() {
    return (
        <div>
            <h1>Dividers</h1>
        </div>
    )
}