import { Link } from "@remix-run/react";
import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Alerts" }];

import DocHeader from "~/DocHeader.tsx";

export default function Index() {
    return (
        <div>
              <DocHeader
                title="Alerts"
                description="The alert component communicates important messages to users, ranging from success or error notifications to emphasized information that supplements standard text content on a page."
            />

        </div>
    )
}