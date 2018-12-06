import React from "react"
import TopPageStripe from "./topPageStripe"
import ImageContainer from "./imageContainer"
import NavBar from "./navBar"
import ContentView from "./content.js"
import pageBackgroundStyles from "./pageBackground.module.css"
import Footer from "./footer"
import ContentView2 from "./content2"

import BT2 from '../fonts/PenumbraFlareStd-Semibold.otf'

import { backgroundColor } from "./imageContainer"
import { runInThisContext } from "vm";

class PageBackground extends React.Component {

    render() {
        return (
            <div style={{ backgroundColor: backgroundColor }}>
                <TopPageStripe />
                <ImageContainer />
                <NavBar />
                {this.props.children}
                <ContentView2 contentHeight={this.props.contentHeight2}/>
                <Footer />
            </div>
        )
    }

    constructor(props) {
        super(props)
        this.state = {
            contentHeight2: "750px"
        }
    }

    // componentDidMount() {
    //     document.addEventListener('resize', this.fixHeight())
    // }

    // fixHeight() {
    //     var height = this.ref.current.clientHeight
    //     this.setState({ contentHeight2: (height + 300) + "px" })
    // }
    
    
}

export default PageBackground
