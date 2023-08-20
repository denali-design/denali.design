import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Toast" }];



export default function Index() {
    return (
        <div>
            <h1>Toast</h1>
        </div>
    )
}