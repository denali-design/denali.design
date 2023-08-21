import { Link } from "@remix-run/react";
import type { V2_MetaFunction } from "@remix-run/node";
import DocHeader from "~/DocHeader.tsx";
import DocSwatch from "~/DocSwatch.tsx";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Colors" }];

export default function Index() {
    return (
        <div>

            <DocHeader
              title="Colors"
              description="The color component provides a palette or specific shades for consistent visual design. It ensures uniformity in presentation, setting the tone and mood, while enhancing usability and accessibility across the interface."
            />

            <section className="flex flex-col">
                <h2>Tokens</h2>
                <p className="mb-4">Prioritize using color tokens for your main color choices. For specialized color requirements, refer to the color primitives below.</p>

                <h2 className="h4 mb-2">Primary</h2>
                <div className="flex gap-4 mb-6">
                    <DocSwatch name="primary" color="bg-primary"/>
                    <DocSwatch name="primary-content" color="bg-primary-content"/>
                </div>

                <h2 className="h4 mb-2">Secondary</h2>
                <div className="flex gap-4 mb-6">
                    <DocSwatch name="secondary" color="bg-secondary"/>
                    <DocSwatch name="secondary-content" color="bg-secondary-content"/>
                </div>

                <h2 className="h4 mb-2">Base</h2>
                <div className="flex gap-4 mb-6">
                    <DocSwatch name="base-light" color="bg-base-light"/>
                    <DocSwatch name="base" color="bg-base"/>
                    <DocSwatch name="base-dark" color="bg-base-dark"/>
                </div>

                <h2 className="h4 mb-2">Success</h2>
                <div className="flex gap-4 mb-6">
                    <DocSwatch name="success-light" color="bg-success-light"/>
                    <DocSwatch name="success" color="bg-success"/>
                    <DocSwatch name="success-dark" color="bg-success-dark"/>
                </div>

                <h2 className="h4 mb-2">Warning</h2>
                <div className="flex gap-4 mb-6">
                    <DocSwatch name="warning-light" color="bg-warning-light"/>
                    <DocSwatch name="warning-content" color="bg-warning"/>
                    <DocSwatch name="warning-dark" color="bg-warning-dark"/>
                </div>

                <h2 className="h4 mb-2">Danger</h2>
                <div className="flex gap-4 mb-6">
                    <DocSwatch name="danger-light" color="bg-danger-light"/>
                    <DocSwatch name="danger-content" color="bg-danger"/>
                    <DocSwatch name="danger-dark" color="bg-danger-dark"/>
                </div>

                <h2 className="h4 mb-2">Info</h2>
                <div className="flex gap-4 mb-6">
                    <DocSwatch name="info-light" color="bg-info-light"/>
                    <DocSwatch name="info-content" color="bg-info"/>
                    <DocSwatch name="info-dark" color="bg-info-dark"/>
                </div>
            </section>

            <h2>Color Primitives</h2>
            <p>Color primitives are foundational colors that form the base of a design palette, ensuring consistency and adaptability across various design elements.</p>

            <section className="flex flex-col">
                <h2 className="h4">Gray</h2>
                <div className="flex mb-6">
                    <DocSwatch name="bg-gray-50" color="bg-gray-50"/>
                    <DocSwatch name="bg-gray-100" color="bg-gray-100"/>
                    <DocSwatch name="bg-gray-200" color="bg-gray-200"/>
                    <DocSwatch name="bg-gray-300" color="bg-gray-300"/>
                    <DocSwatch name="bg-gray-400" color="bg-gray-400"/>
                    <DocSwatch name="bg-gray-500" color="bg-gray-500"/>
                    <DocSwatch name="bg-gray-600" color="bg-gray-600"/>
                    <DocSwatch name="bg-gray-700" color="bg-gray-700"/>
                    <DocSwatch name="bg-gray-800" color="bg-gray-800"/>
                    <DocSwatch name="bg-gray-900" color="bg-gray-900"/>
                    <DocSwatch name="bg-gray-950" color="bg-gray-950"/>
                </div>
            </section>

            <section className="flex flex-col">
                <h2 className="h4">Red</h2>
                <div className="flex mb-6">
                    <DocSwatch name="bg-red-50" color="bg-red-50"/>
                    <DocSwatch name="bg-red-100" color="bg-red-100"/>
                    <DocSwatch name="bg-red-200" color="bg-red-200"/>
                    <DocSwatch name="bg-red-300" color="bg-red-300"/>
                    <DocSwatch name="bg-red-400" color="bg-red-400"/>
                    <DocSwatch name="bg-red-500" color="bg-red-500"/>
                    <DocSwatch name="bg-red-600" color="bg-red-600"/>
                    <DocSwatch name="bg-red-700" color="bg-red-700"/>
                    <DocSwatch name="bg-red-800" color="bg-red-800"/>
                    <DocSwatch name="bg-red-900" color="bg-red-900"/>
                    <DocSwatch name="bg-red-950" color="bg-red-950"/>
                </div>
            </section>

            <section className="flex flex-col">
                <h2 className="h4">blue</h2>
                <div className="flex mb-6">
                    <DocSwatch name="bg-blue-50" color="bg-blue-50"/>
                    <DocSwatch name="bg-blue-100" color="bg-blue-100"/>
                    <DocSwatch name="bg-blue-200" color="bg-blue-200"/>
                    <DocSwatch name="bg-blue-300" color="bg-blue-300"/>
                    <DocSwatch name="bg-blue-400" color="bg-blue-400"/>
                    <DocSwatch name="bg-blue-500" color="bg-blue-500"/>
                    <DocSwatch name="bg-blue-600" color="bg-blue-600"/>
                    <DocSwatch name="bg-blue-700" color="bg-blue-700"/>
                    <DocSwatch name="bg-blue-800" color="bg-blue-800"/>
                    <DocSwatch name="bg-blue-900" color="bg-blue-900"/>
                    <DocSwatch name="bg-blue-950" color="bg-blue-950"/>
                </div>
            </section>

            <section className="flex flex-col">
                <h2 className="h4">Sky</h2>
                <div className="flex mb-6">
                    <DocSwatch name="bg-sky-50" color="bg-sky-50"/>
                    <DocSwatch name="bg-sky-100" color="bg-sky-100"/>
                    <DocSwatch name="bg-sky-200" color="bg-sky-200"/>
                    <DocSwatch name="bg-sky-300" color="bg-sky-300"/>
                    <DocSwatch name="bg-sky-400" color="bg-sky-400"/>
                    <DocSwatch name="bg-sky-500" color="bg-sky-500"/>
                    <DocSwatch name="bg-sky-600" color="bg-sky-600"/>
                    <DocSwatch name="bg-sky-700" color="bg-sky-700"/>
                    <DocSwatch name="bg-sky-800" color="bg-sky-800"/>
                    <DocSwatch name="bg-sky-900" color="bg-sky-900"/>
                    <DocSwatch name="bg-sky-950" color="bg-sky-950"/>
                </div>
            </section>

            <section className="flex flex-col">
                <h2 className="h4">Orange</h2>
                <div className="flex mb-6">
                    <DocSwatch name="bg-orange-50" color="bg-orange-50"/>
                    <DocSwatch name="bg-orange-100" color="bg-orange-100"/>
                    <DocSwatch name="bg-orange-200" color="bg-orange-200"/>
                    <DocSwatch name="bg-orange-300" color="bg-orange-300"/>
                    <DocSwatch name="bg-orange-400" color="bg-orange-400"/>
                    <DocSwatch name="bg-orange-500" color="bg-orange-500"/>
                    <DocSwatch name="bg-orange-600" color="bg-orange-600"/>
                    <DocSwatch name="bg-orange-700" color="bg-orange-700"/>
                    <DocSwatch name="bg-orange-800" color="bg-orange-800"/>
                    <DocSwatch name="bg-orange-900" color="bg-orange-900"/>
                    <DocSwatch name="bg-orange-950" color="bg-orange-950"/>
                </div>
            </section>

            <section className="flex flex-col">
                <h2 className="h4">Yellow</h2>
                <div className="flex mb-6">
                    <DocSwatch name="bg-yellow-50" color="bg-yellow-50"/>
                    <DocSwatch name="bg-yellow-100" color="bg-yellow-100"/>
                    <DocSwatch name="bg-yellow-200" color="bg-yellow-200"/>
                    <DocSwatch name="bg-yellow-300" color="bg-yellow-300"/>
                    <DocSwatch name="bg-yellow-400" color="bg-yellow-400"/>
                    <DocSwatch name="bg-yellow-500" color="bg-yellow-500"/>
                    <DocSwatch name="bg-yellow-600" color="bg-yellow-600"/>
                    <DocSwatch name="bg-yellow-700" color="bg-yellow-700"/>
                    <DocSwatch name="bg-yellow-800" color="bg-yellow-800"/>
                    <DocSwatch name="bg-yellow-900" color="bg-yellow-900"/>
                    <DocSwatch name="bg-yellow-950" color="bg-yellow-950"/>
                </div>
            </section>

            <section className="flex flex-col">
                <h2 className="h4">Lime</h2>
                <div className="flex mb-6">
                    <DocSwatch name="bg-lime-50" color="bg-lime-50"/>
                    <DocSwatch name="bg-lime-100" color="bg-lime-100"/>
                    <DocSwatch name="bg-lime-200" color="bg-lime-200"/>
                    <DocSwatch name="bg-lime-300" color="bg-lime-300"/>
                    <DocSwatch name="bg-lime-400" color="bg-lime-400"/>
                    <DocSwatch name="bg-lime-500" color="bg-lime-500"/>
                    <DocSwatch name="bg-lime-600" color="bg-lime-600"/>
                    <DocSwatch name="bg-lime-700" color="bg-lime-700"/>
                    <DocSwatch name="bg-lime-800" color="bg-lime-800"/>
                    <DocSwatch name="bg-lime-900" color="bg-lime-900"/>
                    <DocSwatch name="bg-lime-950" color="bg-lime-950"/>
                </div>
            </section>

             <section className="flex flex-col">
                <h2 className="h4">Green</h2>
                <div className="flex mb-6">
                    <DocSwatch name="bg-green-50" color="bg-green-50"/>
                    <DocSwatch name="bg-green-100" color="bg-green-100"/>
                    <DocSwatch name="bg-green-200" color="bg-green-200"/>
                    <DocSwatch name="bg-green-300" color="bg-green-300"/>
                    <DocSwatch name="bg-green-400" color="bg-green-400"/>
                    <DocSwatch name="bg-green-500" color="bg-green-500"/>
                    <DocSwatch name="bg-green-600" color="bg-green-600"/>
                    <DocSwatch name="bg-green-700" color="bg-green-700"/>
                    <DocSwatch name="bg-green-800" color="bg-green-800"/>
                    <DocSwatch name="bg-green-900" color="bg-green-900"/>
                    <DocSwatch name="bg-green-950" color="bg-green-950"/>
                </div>
            </section>

            <section className="flex flex-col">
                <h2 className="h4">Purple</h2>
                <div className="flex mb-6">
                    <DocSwatch name="bg-purple-50" color="bg-purple-50"/>
                    <DocSwatch name="bg-purple-100" color="bg-purple-100"/>
                    <DocSwatch name="bg-purple-200" color="bg-purple-200"/>
                    <DocSwatch name="bg-purple-300" color="bg-purple-300"/>
                    <DocSwatch name="bg-purple-400" color="bg-purple-400"/>
                    <DocSwatch name="bg-purple-500" color="bg-purple-500"/>
                    <DocSwatch name="bg-purple-600" color="bg-purple-600"/>
                    <DocSwatch name="bg-purple-700" color="bg-purple-700"/>
                    <DocSwatch name="bg-purple-800" color="bg-purple-800"/>
                    <DocSwatch name="bg-purple-900" color="bg-purple-900"/>
                    <DocSwatch name="bg-purple-950" color="bg-purple-950"/>
                </div>
            </section>

            <section className="flex flex-col">
                <h2 className="h4">Violet</h2>
                <div className="flex mb-6">
                    <DocSwatch name="bg-violet-50" color="bg-violet-50"/>
                    <DocSwatch name="bg-violet-100" color="bg-violet-100"/>
                    <DocSwatch name="bg-violet-200" color="bg-violet-200"/>
                    <DocSwatch name="bg-violet-300" color="bg-violet-300"/>
                    <DocSwatch name="bg-violet-400" color="bg-violet-400"/>
                    <DocSwatch name="bg-violet-500" color="bg-violet-500"/>
                    <DocSwatch name="bg-violet-600" color="bg-violet-600"/>
                    <DocSwatch name="bg-violet-700" color="bg-violet-700"/>
                    <DocSwatch name="bg-violet-800" color="bg-violet-800"/>
                    <DocSwatch name="bg-violet-900" color="bg-violet-900"/>
                    <DocSwatch name="bg-violet-950" color="bg-violet-950"/>
                </div>
            </section>

            <section className="flex flex-col">
                <h2 className="h4">Pink</h2>
                <div className="flex mb-6">
                    <DocSwatch name="bg-pink-50" color="bg-pink-50"/>
                    <DocSwatch name="bg-pink-100" color="bg-pink-100"/>
                    <DocSwatch name="bg-pink-200" color="bg-pink-200"/>
                    <DocSwatch name="bg-pink-300" color="bg-pink-300"/>
                    <DocSwatch name="bg-pink-400" color="bg-pink-400"/>
                    <DocSwatch name="bg-pink-500" color="bg-pink-500"/>
                    <DocSwatch name="bg-pink-600" color="bg-pink-600"/>
                    <DocSwatch name="bg-pink-700" color="bg-pink-700"/>
                    <DocSwatch name="bg-pink-800" color="bg-pink-800"/>
                    <DocSwatch name="bg-pink-900" color="bg-pink-900"/>
                    <DocSwatch name="bg-pink-950" color="bg-pink-950"/>
                </div>
            </section>

        </div>
    )
}