import React from "react"
import pageBackgroundStyles from "./pageBackground.module.css"
import '../fonts/PenumbraFlareStd-Semibold.otf'
import { Link } from "gatsby"
import { borderColor } from "./imageContainer"



class ContentView2 extends React.Component {
    render() { 
        return (
        <div className={pageBackgroundStyles.content2} style={{ color: "black", height: this.props.contentHeight }}>
            {this.props.children}
        </div>
    )}

    constructor(props) {
        super(props)
    }

}

export default ContentView2