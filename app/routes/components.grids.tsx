import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Grids" }];


export default function Index() {
    return (
        <div>
            <h1>Grids</h1>
            <p>The grid component organizes content into a systematic layout of rows and columns. It ensures consistent spacing and alignment, making the interface scalable and the content more easily digestible for users.</p>
        </div>
    )
}