import { Link } from "@remix-run/react";
import type { V2_MetaFunction } from "@remix-run/node";
import DocHeader from "~/DocHeader.tsx";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Checkbox" }];

export default function Index() {
    return (
        <div>
            <DocHeader
              title="Input Fields"
              description="The input field component allows users to enter and edit text or data. Whether for forms, searches, or data entry, it provides a clear area for interaction, capturing user input while ensuring clarity and consistency in its presentation and function."
          />

            <div className="max-w-2xl mb-8">
                <h2 className="h3 mb-4">Text Input</h2>
                <label className="block">
                    <span className="text-gray-700">Name</span>
                    <input type="text" className="
                        mt-1
                        block
                        w-full
                        rounded-md
                        border-gray-300
                        shadow-sm
                        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                    " placeholder="Enter name"/>
                </label>
            </div>

            <div className="max-w-2xl mb-8">
                <h2 className="h3 mb-4">Number Input</h2>
                <label className="block">
                    <span className="text-gray-700">Number</span>
                    <input type="number" className="
                        mt-1
                        block
                        w-full
                        rounded-md
                        border-gray-300
                        shadow-sm
                        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                    " placeholder=""/>
                </label>
            </div>


            <div className="max-w-2xl mb-8">
                <h2 className="h3 mb-4">Email Input</h2>
                <label className="block">
                    <span className="text-gray-700">Email</span>
                    <input type="email" className="
                        mt-1
                        block
                        w-full
                        rounded-md
                        border-gray-300
                        shadow-sm
                        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                    " placeholder=""/>
                </label>
            </div>

            <div className="max-w-2xl mb-8">
                <h2 className="h3 mb-4">Password Input</h2>
                <label className="block">
                    <span className="text-gray-700">Password</span>
                    <input type="password" className="
                        mt-1
                        block
                        w-full
                        rounded-md
                        border-gray-300
                        shadow-sm
                        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                    " placeholder=""/>
                </label>
            </div>

        </div>
    )
}