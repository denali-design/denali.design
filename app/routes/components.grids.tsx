import type { V2_MetaFunction } from "@remix-run/node";
import DocHeader from "~/DocHeader.tsx";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Grids" }];


export default function Index() {
    return (
        <div>
            <DocHeader
                title="Grids"
                description="The grid component organizes content into a systematic layout of rows and columns. It ensures consistent spacing and alignment, making the interface scalable and the content more easily digestible for users."
            />
        </div>
    )
}