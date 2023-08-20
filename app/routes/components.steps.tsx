import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Steps" }];


export default function Index() {
    return (
        <div>
            <h1>Steps</h1>
            <p>The steps component visually guides users through a sequential process or workflow. By breaking down complex actions into manageable stages, it enhances clarity, provides feedback on progress, and ensures a smoother, more intuitive user journey.</p>
        </div>
    )
}