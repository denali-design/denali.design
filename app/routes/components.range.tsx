import { Link } from "@remix-run/react";
import type { V2_MetaFunction } from "@remix-run/node";
import DocHeader from "~/DocHeader.tsx";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Checkbox" }];

export default function Index() {
    return (
        <div>
            <DocHeader
              title="Range"
              description="The range component enables users to select a value or interval within a predefined spectrum. Presented typically as a slider, it offers a visual and interactive way to adjust settings or filter results, allowing for precise fine-tuning within set boundaries."
          />

        </div>
    )
}