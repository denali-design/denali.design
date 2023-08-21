import { Link } from "@remix-run/react";
import type { V2_MetaFunction } from "@remix-run/node";
import DocHeader from "~/DocHeader.tsx";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Checkbox" }];

export default function Index() {
    return (
        <div>
            <DocHeader
              title="Textarea"
              description="The textarea component provides a multi-line input field for users to enter or edit longer blocks of text. Ideal for comments, feedback, or detailed responses, it ensures ample space for expressive or extended user input while maintaining a consistent interface interaction."
          />

        <div className="max-w-2xl mb-8">
                <label className="block">
                    <span className="text-gray-700">Textarea</span>
                    <textarea rows="8" className="
                        mt-1
                        block
                        w-full
                        rounded-md
                        border-gray-300
                        shadow-sm
                        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                    "></textarea>
                </label>
            </div>
        </div>

        
    )
}