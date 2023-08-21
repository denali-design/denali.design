import { Link } from "@remix-run/react";
import type { V2_MetaFunction } from "@remix-run/node";
import DocHeader from "~/DocHeader.tsx";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Chips" }];

export default function Index() {
    return (
        <div>

            <DocHeader
              title="Chips"
              description="The chip component displays compact tags, attributes, or actions. It's ideal for representing selections or brief pieces of information in a concise format."
            />

        </div>
    )
}