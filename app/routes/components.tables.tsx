import { Link } from "@remix-run/react";
import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Denali - Alerts" }];

import DocHeader from "~/DocHeader.tsx";

export default function Index() {
    return (
        <div>
              <DocHeader
                title="Tables"
                description="The table component displays structured data in rows and columns, facilitating organized presentation and easy comparison of information. Accompanied by headers and sometimes sorting or filtering options, it ensures that users can efficiently navigate, analyze, and derive insights from the presented data."
            />


        <table>
            <thead>
                <tr>
                    <th>Mountain</th>
                    <th>Height (ft)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Denali</td>
                    <td>20,310</td>
                </tr>
                <tr>
                    <td>Mount Logan</td>
                    <td>19,551</td>
                </tr>
                <tr>
                    <td>Pico de Orizaba</td>
                    <td>18,491</td>
                </tr>
            </tbody>
        </table>
        </div>
    )
}