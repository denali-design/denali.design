import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Modals" }];


export default function Index() {
    return (
        <div>
            <h1>Modals</h1>
        </div>
    )
}