import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Denali - License" }];


export default function Index() {
    return (
        <div>
            <h1>License</h1>
        </div>
    )
}