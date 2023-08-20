import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";

export const meta: V2_MetaFunction = () => [{ title: "Denali" }];

export default function Index() {
  // const user = useOptionalUser();
  return (
    <main className="relative min-h-screen bg-white flex flex-col items-center justify-center">
      
      <h1 className="text-8xl font-bold">Denali</h1>
      <p>More coming soon</p>
      
    </main>
  );
}
