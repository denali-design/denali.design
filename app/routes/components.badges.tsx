import { Link } from "@remix-run/react";
import type { V2_MetaFunction } from "@remix-run/node";
import DocHeader from "~/DocHeader.tsx";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Badges" }];

export default function Index() {
    return (
        <div>
            <DocHeader
                title="Badges"
                description="The badge component showcases small pieces of information, like counts or status indicators. It's commonly overlaid on icons or buttons to provide a quick visual cue or emphasis."
            />
        </div>
    )
}