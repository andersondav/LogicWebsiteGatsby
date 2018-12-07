import React from "react"
import pageBackgroundStyles from "./pageBackground.module.css"
import '../fonts/PenumbraFlareStd-Semibold.otf'
import { Link } from "gatsby"
import { borderColor } from "./imageContainer"

class ContentView extends React.Component {
    render() { 
        return (
        <div className={pageBackgroundStyles.content} style={{ backgroundColor: "#f9f9f9", color: "black", height: "auto", paddingBottom: "50px" }}>
            {this.props.children}
        </div>
    )}

    constructor(props) {
        super(props)
    }

}

export default ContentView