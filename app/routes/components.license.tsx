import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Denali - License" }];


export default function Index() {
    return (
        <div>
            <h1>License</h1>
            <p>The MIT License permits the free use, modification, and distribution of software. It's a permissive license that ensures code accessibility while allowing for integration into proprietary work. Always refer to the full license text for specifics.</p>

            <p>Full license coming soon</p>
        </div>
    )
}