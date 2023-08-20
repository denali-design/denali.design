import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Pagination" }];


export default function Index() {
    return (
        <div>
            <h1>Pagination</h1>
        </div>
    )
}