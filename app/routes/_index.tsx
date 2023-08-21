import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";

export const meta: V2_MetaFunction = () => [{ title: "Denali" }];

export default function Index() {
  // const user = useOptionalUser();
  return (
    <div>
      <section className="p-8">
        <div className="border-b border-gray-200 py-8">
          <div className="flex flex-col  max-w-screen-lg">
            <h1 className="text-7xl font-bold mb-4">Symantic themeable Tailwindcss Framework</h1>
            <p className="text-2xl text-gray-700 max-w-3xl">Seamlessly integrate the power of TailwindCSS with the versatility of semantic theming to elevate your visual identity.</p>

            <div className="mt-8 space-x-3 flex">
              <Link to="components/introduction" className="btn btn-primary">Start Building</Link>
              <Link to="design" className=" text-blue-500 font-bold px-6 py-4 rounded-full">View Principles</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="p-8 flex gap-8">
        <div className="border border-gray-200 bg-gray-50 w-1/3 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Ready to go components re-themed in a snap.</h2>
          <p>Our components are inherently themeable, ensuring you're not bound to a preset visual design.</p>
        </div>

        <div className="border border-gray-200 bg-gray-50 w-1/3 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">1,000+ solid and outline icons. Available as png, svg, or font.</h2>
          <p>Adding icons to your products is as easy as adding a CSS class - because that’s what they are!</p>
        </div>

        <div className="border border-gray-200 bg-gray-50 w-1/3 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Everything you need to jump right in</h2>
          <p>Whether you're a designer or developer get started with Denali in minutes using our handy guides and resources.</p>
        </div>
      </section>
    </div>
  );
}
