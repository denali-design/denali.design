import { Link } from "@remix-run/react";
import type { V2_MetaFunction } from "@remix-run/node";
import DocHeader from "~/DocHeader.tsx";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Checkbox" }];

export default function Index() {
    return (
        <div>
            <DocHeader
              title="Search Input"
              description="The search input component facilitates keyword-based queries within a platform or dataset. Often accompanied by a magnifying glass icon, it captures user input and initiates searches, streamlining content discovery and ensuring rapid access to relevant results."
          />

        </div>
    )
}