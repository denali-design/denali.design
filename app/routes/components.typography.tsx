import type { V2_MetaFunction } from "@remix-run/node";
import DocHeader from "~/DocHeader.tsx";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Typography" }];



export default function Index() {
    return (
        <div>
            <DocHeader
                title="Typography"
                description="The typography component defines the style, arrangement, and appearance of text within the interface. By ensuring consistent font usage, weight, and spacing, it enhances readability, sets tone, and establishes visual hierarchy, grounding the overall design in clarity and coherence."
            />

        <section className="">
                <div>
                    <h1>Heading 1</h1>
                    <h2>Heading 2</h2>
                    <h3>Heading 3</h3>
                    <h4>Heading 4</h4>
                    <h5>Heading 5</h5>
                    <h6>Heading 6</h6>
                </div>

            <div>
                <h2>Display Headings</h2>
                <h1 className="display-1">Display 1</h1>
                <h2 className="display-2">Display 2</h2>
                <h3 className="display-3">Display 3</h3>
                <h4 className="display-4">Display 4</h4>
                <h5 className="display-5">Display 5</h5>
                <h5 className="display-6">Display 6</h5>
            </div>

            <p>Denali, formerly known as Mount McKinley, is the highest peak in North America, located in Alaska.</p>

            <h3>Features of Denali:</h3>
            <ul>
                <li>It rises about 20,310 feet (6,190 meters) above sea level.</li>
                <li>Located in Denali National Park and Preserve.</li>
                <li>Popular for mountaineering and adventures.</li>
            </ul>

            <h3>Top 3 Peaks in North America:</h3>
            <ol>
                <li>Denali</li>
                <li>Mount Logan</li>
                <li>Pico de Orizaba</li>
            </ol>

            <blockquote cite="https://www.nps.gov/dena/index.htm">
                Denali's dynamic glaciated landscape supports a diversity of wildlife with grizzly bears, caribou, wolves, Dall sheep and moose.
            </blockquote>

            <p>Learn more about <a href="https://www.nps.gov/dena/index.htm" target="_blank">Denali National Park and Preserve</a>.</p>

            <p><strong>Denali</strong>, also known as <em>The Great One</em>, is a beacon for adventurers and explorers worldwide.</p>

            </section>
        </div>
    )
}