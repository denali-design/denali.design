import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Toast" }];



export default function Index() {
    return (
        <div>
            <h1>Toast</h1>
            <p>The toast component delivers brief, auto-dismissing messages to inform users of system statuses or actions. Positioned unobtrusively, usually at the screen's edge, it provides timely feedback without hindering ongoing user tasks or requiring direct interaction.</p>
        </div>
    )
}