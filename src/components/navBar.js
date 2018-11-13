import React from "react"
import pageBackgroundStyles from "./pageBackground.module.css"
import '../fonts/PenumbraFlareStd-Semibold.otf'
import { Link } from "gatsby"
import { borderColor } from "./imageContainer"

var textColor

if (borderColor == "#ffffff") {
    textColor = "#000000"
} else {
    textColor = "#ffffff"
}

class NavBar extends React.Component {
    render() {
        return (
            <div className={pageBackgroundStyles.navBar} style={{ backgroundColor: borderColor, borderColor: borderColor, 
            position: this.state.barPos, top: this.state.top }} >
                <a href="https://google.com">
                    <div style={{ color: textColor }} className={pageBackgroundStyles.navLinks}>
                        HOME
                    </div>
                </a>
                <Link to="/">
                    <div style={{ color: textColor }} className={pageBackgroundStyles.navLinks} onClick={ () => console.log("hi there")}>
                        Listen
                    </div>
                </Link>
                <Link to="/">
                    <div style={{ color: textColor }} className={pageBackgroundStyles.navLinks}>
                        Learn
                    </div>
                </Link>
                <Link to="/">
                    <div style={{ color: textColor }} className={pageBackgroundStyles.navLinks}>
                        About
                    </div>
                </Link>
            </div>
        )
    }

    constructor(props) {
        super(props)
        this.state = {
            barPos: "auto",
            testText: "0000",
            top: "auto"
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        if (window.scrollY < 258) {
            this.setState({ barPos: "static", testText: window.scrollY, top: "auto" })
        } else {
            this.setState({ barPos: "fixed", testText: window.scrollY, top: "0px" })
        }
        
    }
}

export default NavBar