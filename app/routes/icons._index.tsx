import type { V2_MetaFunction } from "@remix-run/node";
import DocHeader from "~/DocHeader.tsx";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Icons" }];

export default function Index() {
  return (
    <div className="p-8">
       <DocHeader
                title="Icons"
                description="The icon component represents actions, content, or concepts through symbolic graphics. By offering a visual shorthand, it enhances user recognition, streamlines navigation, and provides a consistent, intuitive means to convey information or prompt interactions."
            />
    </div>
  );
}
