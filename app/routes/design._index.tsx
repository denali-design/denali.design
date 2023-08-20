import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Design" }];

export default function Index() {
  return (
    <div>
      <h1>Design</h1>
      <p>Coming Soon</p>
    </div>
  );
}
