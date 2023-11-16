'use client'

import { useParams } from 'next/navigation';
import Coders from "@/app/coders/page.js";

export default function DashboardLayout({ children }) {
    const params = useParams();

    return (
    <>
        <div style={{ float: "left" }}>
            <Coders />
        </div>

        {params.id && (
            <div style={{ float: "right" }}>
            {children}
            </div>
        )}
    </>
  );
}
