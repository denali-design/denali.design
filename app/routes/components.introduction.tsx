import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Introduction" }];


export default function Index() {
    return (
        <div>
            <h1>Introduction</h1>
            <p>Denali is more than just a CSS library; it's a tool that equips you with a suite of CSS classes to enhance and streamline the styling of your HTML. Built on the power of PostCSS and TailwindCSS, Denali offers flexibility like no other.

You have the choice to either incorporate our pre-compiled .css file directly or delve deeper by customizing with the PostCSS configuration to suit your unique requirements.

Browse through the four pre-compiled .css files in our repository to determine the best fit for your project, and follow our installation guides for a seamless integration.</p>
        </div>
    )
}