import type { V2_MetaFunction } from "@remix-run/node";
import DocHeader from "~/DocHeader.tsx";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Design" }];

export default function Index() {
  return (
    <div className="p-8">

      <DocHeader
                title="Design"
                description="Coming Soon."
            />
    </div>
  );
}
