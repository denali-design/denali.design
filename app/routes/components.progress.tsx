import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Progress" }];


export default function Index() {
    return (
        <div>
            <h1>Progress</h1>
            <p>The progress component visually indicates the completion status of a task or process. By providing real-time feedback, it helps users gauge the duration or extent of an action, enhancing their understanding and patience during wait times.</p>
        </div>
    )
}