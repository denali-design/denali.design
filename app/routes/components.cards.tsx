import { Link } from "@remix-run/react";
import type { V2_MetaFunction } from "@remix-run/node";
import DocHeader from "~/DocHeader.tsx";


export const meta: V2_MetaFunction = () => [{ title: "Denali - Cards" }];


export default function Index() {
    return (
        <div>
            
          <DocHeader
              title="Cards"
              description="A versatile container that displays information and actions about a single topic, often used in grids or lists to present a summary or overview."
          />


    <div className="card card-compact w-96">
        <div className="card-body">
          <h2 className="h4">Example Card Title</h2>
          <p>This is an example card description</p>
          <div className="card-actions mt-12 flex justify-start space-x-4">
            <button className="btn btn-primary">Join</button>
            <button className="btn btn-link">Cancel</button>
          </div>
        </div>
      </div>

      <div className="card bordered w-96">
        <div className="card-body">
          <h2 className="h4">Example Card Title</h2>
          <p>This is an example card description</p>
          <div className="card-actions mt-12 justify-end">
            <button className="btn btn-secondary">Cancel</button>
            <button className="btn btn-primary">Join</button>
          </div>
        </div>
      </div>
        </div>
    )
}