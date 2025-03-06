import { useLocation } from "react-router"
import Footer from "../ui/footer/footer"
import { Header, HeaderStatic } from "../ui/header/header"

import * as React from "react"

export const IndexLayout = ({ children }: { children: React.ReactNode }) => {
    const [isHome, setIsHome] = React.useState(true)
    const location = useLocation()
    React.useEffect(() => {
        setIsHome(window.location.pathname === '/')
        window.scrollTo(0, 0)
    }, [location])
    return (
        <>
            {isHome ? <Header></Header>
                : <HeaderStatic></HeaderStatic>}
            {children}
            <Footer></Footer>
        </>
    )
}