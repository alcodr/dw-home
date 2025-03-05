import Footer from "../ui/footer/footer"
import Header from "../ui/header/header"

import * as React from "react"

export function IndexLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header></Header>
            {children}
            <Footer></Footer>
        </>
    )
}