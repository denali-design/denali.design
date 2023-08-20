import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Grids" }];


export default function Index() {
    return (
        <div>
            <h1>Grids</h1>
        </div>
    )
}