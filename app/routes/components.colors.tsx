import { Link } from "@remix-run/react";
import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Remix Notes" }];

export default function Index() {
    return (
        <div>
            
            <h1 className="text-5xl font-bold">Colors</h1>

        <section className="flex flex-col">
            <h2 className="h4 mb-2">Primary</h2>
            <div className="flex gap-4">
            <div>
                <div className="bg-primary h-24 w-24"></div>
                <p className="text-sm">Primary</p>
            </div>
            <div>
                <div className="bg-primary-content h-24 w-24"></div>
                <p className="text-sm">Primary Content</p>
            </div>
            </div>
        </section>

        <section className="flex flex-col">
            <h2 className="h4 mb-2">Secondary</h2>
            <div className="flex gap-4">
            <div>
                <div className="bg-secondary h-24 w-24"></div>
                <p className="text-sm">Secondary</p>
            </div>
            <div>
                <div className="bg-secondary-content h-24 w-24"></div>
                <p className="text-sm">Secondary Content</p>
            </div>
            </div>
        </section>

        <section className="flex flex-col">
            <h2 className="h4 mb-2">Base</h2>
            <div className="flex gap-4">
            <div>
                <div className="bg-base-light h-24 w-24"></div>
                <p className="text-sm">Base Light</p>
            </div>
            <div>
                <div className="bg-base h-24 w-24"></div>
                <p className="text-sm">Base</p>
            </div>
            <div>
                <div className="bg-base-dark h-24 w-24"></div>
                <p className="text-sm">Base Dark</p>
            </div>
            </div>
        </section>

        <section className="flex flex-col">
            <h2 className="h4 mb-2">Success</h2>
            <div className="flex gap-4">
            <div>
                <div className="bg-success-light h-24 w-24"></div>
                <p className="text-sm">Success Light</p>
            </div>
            <div>
                <div className="bg-success h-24 w-24"></div>
                <p className="text-sm">Success</p>
            </div>
            <div>
                <div className="bg-success-dark h-24 w-24"></div>
                <p className="text-sm">Success Dark</p>
            </div>
            </div>
        </section>

        <section className="flex flex-col">
            <h2 className="h4 mb-2">Warning</h2>
            <div className="flex gap-4">
            <div>
                <div className="bg-warning-light h-24 w-24"></div>
                <p className="text-sm">Warning Light</p>
            </div>
            <div>
                <div className="bg-warning h-24 w-24"></div>
                <p className="text-sm">Warning</p>
            </div>
            <div>
                <div className="bg-warning-dark h-24 w-24"></div>
                <p className="text-sm">Warning Dark</p>
            </div>
            </div>
        </section>

        <section className="flex flex-col">
            <h2 className="h4 mb-2">Danger</h2>
            <div className="flex gap-4">
            <div>
                <div className="bg-danger-light h-24 w-24"></div>
                <p className="text-sm">Danger Light</p>
            </div>
            <div>
                <div className="bg-danger h-24 w-24"></div>
                <p className="text-sm">Danger</p>
            </div>
            <div>
                <div className="bg-danger-dark h-24 w-24"></div>
                <p className="text-sm">Danger Dark</p>
            </div>
            </div>
        </section>

        <section className="flex flex-col">
            <h2 className="h4 mb-2">Info</h2>
            <div className="flex gap-4">
            <div>
                <div className="bg-info-light h-24 w-24"></div>
                <p className="text-sm">Info Light</p>
            </div>
            <div>
                <div className="bg-info h-24 w-24"></div>
                <p className="text-sm">Info</p>
            </div>
            <div>
                <div className="bg-info-dark h-24 w-24"></div>
                <p className="text-sm">Info Dark</p>
            </div>
            </div>
        </section>


        <h2 className="text-5xl font-bold">Color Primatives</h2>

        <section class="flex flex-col">
            <h2 class="h4">Gray</h2>
            <div class="flex">
            <div class="h-24 w-24 bg-gray-100"></div>
            <div class="h-24 w-24 bg-gray-200"></div>
            <div class="h-24 w-24 bg-gray-300"></div>
            <div class="h-24 w-24 bg-gray-400"></div>
            <div class="h-24 w-24 bg-gray-500"></div>
            <div class="h-24 w-24 bg-gray-600"></div>
            <div class="h-24 w-24 bg-gray-700"></div>
            <div class="h-24 w-24 bg-gray-800"></div>
            <div class="h-24 w-24 bg-gray-900"></div>
            </div>
        </section>

        <section class="flex flex-col">
            <h2 class="h4">Red</h2>
            <div class="flex">
            <div class="h-24 w-24 bg-red-100"></div>
            <div class="h-24 w-24 bg-red-200"></div>
            <div class="h-24 w-24 bg-red-300"></div>
            <div class="h-24 w-24 bg-red-400"></div>
            <div class="h-24 w-24 bg-red-500"></div>
            <div class="h-24 w-24 bg-red-600"></div>
            <div class="h-24 w-24 bg-red-700"></div>
            <div class="h-24 w-24 bg-red-800"></div>
            <div class="h-24 w-24 bg-red-900"></div>
            </div>
        </section>

        <section class="flex flex-col">
            <h2 class="h4">Blue</h2>
            <div class="flex">
            <div class="h-24 w-24 bg-blue-100"></div>
            <div class="h-24 w-24 bg-blue-200"></div>
            <div class="h-24 w-24 bg-blue-300"></div>
            <div class="h-24 w-24 bg-blue-400"></div>
            <div class="h-24 w-24 bg-blue-500"></div>
            <div class="h-24 w-24 bg-blue-600"></div>
            <div class="h-24 w-24 bg-blue-700"></div>
            <div class="h-24 w-24 bg-blue-800"></div>
            <div class="h-24 w-24 bg-blue-900"></div>
            </div>
        </section>

        <section class="flex flex-col">
            <h2 class="h4">Sky</h2>
            <div class="flex">
            <div class="h-24 w-24 bg-sky-100"></div>
            <div class="h-24 w-24 bg-sky-200"></div>
            <div class="h-24 w-24 bg-sky-300"></div>
            <div class="h-24 w-24 bg-sky-400"></div>
            <div class="h-24 w-24 bg-sky-500"></div>
            <div class="h-24 w-24 bg-sky-600"></div>
            <div class="h-24 w-24 bg-sky-700"></div>
            <div class="h-24 w-24 bg-sky-800"></div>
            <div class="h-24 w-24 bg-sky-900"></div>
            </div>
        </section>

        <section class="flex flex-col">
            <h2 class="h4">Orange</h2>
            <div class="flex">
            <div class="h-24 w-24 bg-orange-100"></div>
            <div class="h-24 w-24 bg-orange-200"></div>
            <div class="h-24 w-24 bg-orange-300"></div>
            <div class="h-24 w-24 bg-orange-400"></div>
            <div class="h-24 w-24 bg-orange-500"></div>
            <div class="h-24 w-24 bg-orange-600"></div>
            <div class="h-24 w-24 bg-orange-700"></div>
            <div class="h-24 w-24 bg-orange-800"></div>
            <div class="h-24 w-24 bg-orange-900"></div>
            </div>
        </section>

        <section class="flex flex-col">
            <h2 class="h4">Yellow</h2>
            <div class="flex">
            <div class="h-24 w-24 bg-yellow-100"></div>
            <div class="h-24 w-24 bg-yellow-200"></div>
            <div class="h-24 w-24 bg-yellow-300"></div>
            <div class="h-24 w-24 bg-yellow-400"></div>
            <div class="h-24 w-24 bg-yellow-500"></div>
            <div class="h-24 w-24 bg-yellow-600"></div>
            <div class="h-24 w-24 bg-yellow-700"></div>
            <div class="h-24 w-24 bg-yellow-800"></div>
            <div class="h-24 w-24 bg-yellow-900"></div>
            </div>
        </section>

        <section class="flex flex-col">
            <h2 class="h4">Lime</h2>
            <div class="flex">
            <div class="h-24 w-24 bg-lime-100"></div>
            <div class="h-24 w-24 bg-lime-200"></div>
            <div class="h-24 w-24 bg-lime-300"></div>
            <div class="h-24 w-24 bg-lime-400"></div>
            <div class="h-24 w-24 bg-lime-500"></div>
            <div class="h-24 w-24 bg-lime-600"></div>
            <div class="h-24 w-24 bg-lime-700"></div>
            <div class="h-24 w-24 bg-lime-800"></div>
            <div class="h-24 w-24 bg-lime-900"></div>
            </div>
        </section>

        <section class="flex flex-col">
            <h2 class="h4">Green</h2>
            <div class="flex">
            <div class="h-24 w-24 bg-green-100"></div>
            <div class="h-24 w-24 bg-green-200"></div>
            <div class="h-24 w-24 bg-green-300"></div>
            <div class="h-24 w-24 bg-green-400"></div>
            <div class="h-24 w-24 bg-green-500"></div>
            <div class="h-24 w-24 bg-green-600"></div>
            <div class="h-24 w-24 bg-green-700"></div>
            <div class="h-24 w-24 bg-green-800"></div>
            <div class="h-24 w-24 bg-green-900"></div>
            </div>
        </section>

        <section class="flex flex-col">
            <h2 class="h4">Purple</h2>
            <div class="flex">
            <div class="h-24 w-24 bg-purple-100"></div>
            <div class="h-24 w-24 bg-purple-200"></div>
            <div class="h-24 w-24 bg-purple-300"></div>
            <div class="h-24 w-24 bg-purple-400"></div>
            <div class="h-24 w-24 bg-purple-500"></div>
            <div class="h-24 w-24 bg-purple-600"></div>
            <div class="h-24 w-24 bg-purple-700"></div>
            <div class="h-24 w-24 bg-purple-800"></div>
            <div class="h-24 w-24 bg-purple-900"></div>
            </div>
        </section>

        <section class="flex flex-col">
            <h2 class="h4">Violet</h2>
            <div class="flex">
            <div class="h-24 w-24 bg-violet-100"></div>
            <div class="h-24 w-24 bg-violet-200"></div>
            <div class="h-24 w-24 bg-violet-300"></div>
            <div class="h-24 w-24 bg-violet-400"></div>
            <div class="h-24 w-24 bg-violet-500"></div>
            <div class="h-24 w-24 bg-violet-600"></div>
            <div class="h-24 w-24 bg-violet-700"></div>
            <div class="h-24 w-24 bg-violet-800"></div>
            <div class="h-24 w-24 bg-violet-900"></div>
            </div>
        </section>

        <section class="flex flex-col">
            <h2 class="h4">Pink</h2>
            <div class="flex">
            <div class="h-24 w-24 bg-pink-100"></div>
            <div class="h-24 w-24 bg-pink-200"></div>
            <div class="h-24 w-24 bg-pink-300"></div>
            <div class="h-24 w-24 bg-pink-400"></div>
            <div class="h-24 w-24 bg-pink-500"></div>
            <div class="h-24 w-24 bg-pink-600"></div>
            <div class="h-24 w-24 bg-pink-700"></div>
            <div class="h-24 w-24 bg-pink-800"></div>
            <div class="h-24 w-24 bg-pink-900"></div>
            </div>
        </section>

        </div>
    )
}