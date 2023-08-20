import { Link } from "@remix-run/react";
import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Badges" }];

export default function Index() {
    return (
        <div>
            <h1>Badges</h1>
        </div>
    )
}