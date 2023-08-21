import { Link } from "@remix-run/react";
import type { V2_MetaFunction } from "@remix-run/node";
import DocHeader from "~/DocHeader.tsx";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Breadcrumbs" }];

export default function Index() {
    return (
        <div>
            <DocHeader
                title="Breadcrumbs"
                description="The breadcrumbs component displays a user's navigation path within a website or application. By illustrating the hierarchy and sequence of pages or views, it provides clarity on one's current location and offers a straightforward way to backtrack or navigate to higher-level sections."
            />
        </div>
    )
}