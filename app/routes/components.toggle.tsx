import { Link } from "@remix-run/react";
import type { V2_MetaFunction } from "@remix-run/node";
import DocHeader from "~/DocHeader.tsx";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Checkbox" }];

export default function Index() {
    return (
        <div>
            <DocHeader
              title="Toggle"
              description="The toggle component allows users to switch between two states, often represented as 'on' and 'off'. With a clear visual cue of its current position, it offers an intuitive means to change settings, preferences, or modes, providing immediate feedback upon interaction."
          />
        </div>
    )
}