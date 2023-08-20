import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Typography" }];



export default function Index() {
    return (
        <div>
            <h1>Typography</h1>
        </div>
    )
}