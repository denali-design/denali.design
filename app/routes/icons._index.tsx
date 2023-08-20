import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Icons" }];

export default function Index() {
  return (
    <div>
      <h1>Icons</h1>
      <p>Coming Soon</p>
    </div>
  );
}
