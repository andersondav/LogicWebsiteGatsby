import React from "react"
import pageBackgroundStyles from "./pageBackground.module.css"
import '../fonts/PenumbraFlareStd-Semibold.otf'
import { Link } from "gatsby"
import { backgroundColor, borderColor } from "./imageContainer"
import BobbyBoy from "../images/BobbyBoy.jpeg"


var textColor = borderColor === "#ffffff" ? "#000000" : "#ffffff"
var stripeColor = backgroundColor === "#000000" ? "#ffffff": "#000000"

class TopPageStripe extends React.Component {
    render() {
        return (
        <div className={pageBackgroundStyles.topPageStripe} style={{ backgroundColor: stripeColor }}>
            <div style={{ color: textColor, flexGrow: "1" }}>
                <Link to="/songBoard" style={{ textDecoration: "none" }}>
                    <img src={BobbyBoy} style={{ height: "40px", visibility: "visible" }}/>
                </Link>
            </div>
            <div style={{ flexGrow: "1", textAlign: "center" }}>
                <Link to="/" style={{ textDecoration: 'none', color: textColor }}>
                    LOGIC CENTRAL
                </Link>
            </div>
            {this.props.children}
        </div>
        )
    }
}

export {textColor}
export default TopPageStripe