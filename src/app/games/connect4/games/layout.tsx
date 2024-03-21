import React from "react";
import CSS from 'csstype';

export default function Connect4Layout({
                                           children, // will be a page or nested layout
                                       }: {
    children: React.ReactNode
}) {
    const sectionStyle: CSS.Properties = {
        height: '100vh',
        backgroundColor: '#8294C4',
        zIndex: '-1'
    };
    return (
        <section style={sectionStyle}>
            {children}
        </section>
    )
}