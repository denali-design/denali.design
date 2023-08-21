import { Link } from "@remix-run/react";
import type { V2_MetaFunction } from "@remix-run/node";
import DocHeader from "~/DocHeader.tsx";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Checkbox" }];

export default function Index() {
    return (
        <div>
            <DocHeader
              title="Radio"
              description="The radio component lets users select one option from a predefined set. Represented typically as small circles, only one can be active at a time, ensuring a clear choice in scenarios where exclusivity of selection is required, such as picking a payment method or choosing a preferred setting."
          />

        </div>
    )
}