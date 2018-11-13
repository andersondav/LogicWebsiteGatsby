import React from "react"
import pageBackgroundStyles from "./pageBackground.module.css"
import '../fonts/PenumbraFlareStd-Semibold.otf'
import { Link } from "gatsby"
import { backgroundColor, borderColor } from "./imageContainer"


var textColor = borderColor === "#ffffff" ? "#000000" : "#ffffff"
var stripeColor = backgroundColor === "#000000" ? "#ffffff": "#000000"

class TopPageStripe extends React.Component {
    render() {
        return (
        <div className={pageBackgroundStyles.topPageStripe} style={{ backgroundColor: stripeColor }}>
            <Link to="/" style={{ textDecoration: 'none', color: textColor }}>
                LOGIC CENTRAL
            </Link>
        </div>
        )
    }
}

export default TopPageStripe