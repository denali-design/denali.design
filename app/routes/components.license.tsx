import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Remix Notes" }];


export default function Index() {
    return (
        <div>
            <h1>License</h1>
        </div>
    )
}