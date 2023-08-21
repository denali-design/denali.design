import type { V2_MetaFunction } from "@remix-run/node";
import DocHeader from "~/DocHeader.tsx";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Dividers" }];


export default function Index() {
    return (
        <div>

        <DocHeader
              title="Dividers"
              description="The divider component visually separates content sections or elements. It helps organize and delineate different parts of an interface, providing clarity and improving the user's ability to navigate and comprehend the content."
          />

        </div>
    )
}