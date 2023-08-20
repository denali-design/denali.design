import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Typography" }];



export default function Index() {
    return (
        <div>
            <h1>Typography</h1>
            <p>The typography component defines the style, arrangement, and appearance of text within the interface. By ensuring consistent font usage, weight, and spacing, it enhances readability, sets tone, and establishes visual hierarchy, grounding the overall design in clarity and coherence.</p>
        </div>
    )
}