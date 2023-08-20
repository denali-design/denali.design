import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Progress" }];


export default function Index() {
    return (
        <div>
            <h1>Progress</h1>
        </div>
    )
}