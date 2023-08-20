import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Tooltips" }];


export default function Index() {
    return (
        <div>
            <h1>Tooltips</h1>
        </div>
    )
}