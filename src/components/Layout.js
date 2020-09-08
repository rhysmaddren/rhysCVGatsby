import React from "react"
import Footer from "./Footer"
import Header from "../components/Header"
import Banner from "../components/Banner"

const Layout = ({ children }) => {
    return (
        <div className="container">
            <Header />
            <Banner />
            <main>{children}</main>
            <Footer />
        </div>

    )
}

export default Layout