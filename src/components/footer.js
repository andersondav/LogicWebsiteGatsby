import React from "react"
import { borderColor } from "./imageContainer"
import pageBackgroundStyles from "./pageBackground.module.css"

var textColor
if (borderColor == "#000000") {
    textColor = "#ffffff"
} else {
    textColor = "#000000"
}

class Footer extends React.Component {
    render() {
        return (
        <div className={pageBackgroundStyles.footer} style={{backgroundColor: borderColor, color: textColor }}>
            Site created by Anderson David. All media and images are not owned by me. Album artwork owned by Logic's team.
        </div>
        )
    }
}

export default Footer