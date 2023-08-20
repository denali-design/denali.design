import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Introduction" }];


export default function Index() {
    return (
        <div>
            <h1>Introduction</h1>
        </div>
    )
}