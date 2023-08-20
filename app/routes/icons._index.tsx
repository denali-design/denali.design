import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Icons" }];

export default function Index() {
  return (
    <div>
      <h1>Icons</h1>
      <p>The icon component represents actions, content, or concepts through symbolic graphics. By offering a visual shorthand, it enhances user recognition, streamlines navigation, and provides a consistent, intuitive means to convey information or prompt interactions.</p>
    </div>
  );
}
