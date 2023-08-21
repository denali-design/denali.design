import type { V2_MetaFunction } from "@remix-run/node";
import DocHeader from "~/DocHeader.tsx";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Pagination" }];


export default function Index() {
    return (
        <div>
            <DocHeader
                title="Pagination"
                description="The pagination component manages the division of content across multiple pages. It provides navigational elements, allowing users to easily transition between sections of extended lists or datasets, ensuring a more organized and user-friendly browsing experience."
            />
        </div>
    )
}