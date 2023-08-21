import { Link } from "@remix-run/react";
import type { V2_MetaFunction } from "@remix-run/node";
import DocHeader from "~/DocHeader.tsx";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Code" }];

export default function Index() {
    return (
        <div>
            <DocHeader
              title="Code"
              description="The code component displays snippets of programming or markup language. It's tailored to ensure readability and distinction from regular text, often featuring a monospace font or a distinct background for clarity."
          />


        </div>
    )
}