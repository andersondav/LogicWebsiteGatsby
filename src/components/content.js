import React from "react"
import pageBackgroundStyles from "./pageBackground.module.css"
import '../fonts/PenumbraFlareStd-Semibold.otf'
import { Link } from "gatsby"
import { borderColor } from "./imageContainer"

class ContentView extends React.Component {
    render() { 
        return (
        <div className={pageBackgroundStyles.content} style={{ backgroundColor: "#f9f9f9", 
        color: "black", paddingBottom: "50px", height: this.props.contentHeight }}>
            {this.props.children}
        </div>
    )}

    constructor(props) {
        super(props)
    }

}

export default ContentView