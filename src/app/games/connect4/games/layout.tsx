import React from "react";

export default function Connect4Layout({
                                           children, // will be a page or nested layout
                                       }: {
    children: React.ReactNode
}) {
    return (
        <section>
            {children}
        </section>
    )
}