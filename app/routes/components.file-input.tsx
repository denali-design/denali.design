import { Link } from "@remix-run/react";
import type { V2_MetaFunction } from "@remix-run/node";
import DocHeader from "~/DocHeader.tsx";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Checkbox" }];

export default function Index() {
    return (
        <div>
            <DocHeader
              title="File Input"
              description="The file input component provides users with a mechanism to upload documents or media. Typically presented as a button or a drag-and-drop area, it facilitates the selection of files from the user's device, ensuring a seamless integration of external content into forms or platforms."
          />

        </div>
    )
}