import type { V2_MetaFunction } from "@remix-run/node";
import DocHeader from "~/DocHeader.tsx";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Toast" }];



export default function Index() {
    return (
        <div>
            <DocHeader
                title="Toast"
                description="The toast component delivers brief, auto-dismissing messages to inform users of system statuses or actions. Positioned unobtrusively, usually at the screen's edge, it provides timely feedback without hindering ongoing user tasks or requiring direct interaction."
            />

        </div>
    )
}