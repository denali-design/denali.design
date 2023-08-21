import { Link } from "@remix-run/react";
import type { V2_MetaFunction } from "@remix-run/node";
import DocHeader from "~/DocHeader.tsx";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Checkbox" }];

export default function Index() {
    return (
        <div>
            <DocHeader
              title="Checkbox"
              description="The checkbox component allows users to select one or multiple options from a set. Presented as a small square that's either empty or marked, it provides a clear visual cue of selection status and offers a simple way to capture user choices in forms or interactive lists."
          />

            <div>
                <label className="inline-flex items-center">
                    <input type="checkbox" className="
                        rounded
                        border-gray-300
                        text-primary
                        shadow-sm
                        focus:border-primary-300
                        focus:ring
                        focus:ring-offset-0
                        focus:ring-primary-200
                        focus:ring-opacity-50
                    " checked="true"/>
                    <span className="ml-2">Checkbox</span>
                </label>
            </div>

        </div>
    )
}