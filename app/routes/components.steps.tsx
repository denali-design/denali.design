import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Steps" }];


export default function Index() {
    return (
        <div>
            <h1>Steps</h1>
        </div>
    )
}