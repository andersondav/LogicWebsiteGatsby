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

class PageBackground extends React.Component {

    render() {
        return (
            <div style={{ backgroundColor: backgroundColor }}>
                <TopPageStripe />
                <ImageContainer />
                <NavBar />
                <ContentView contentHeight={this.props.contentHeight}>
                    {this.props.children}
                </ContentView>
                <ContentView2 contentHeight={this.props.contentHeight2}>
                    {this.props.children}
                    <div style={{ height: "250px" }}>
                        randomness lol
                    </div>
                </ContentView2>
                <Footer />
            </div>
        )
    }

    constructor(props) {
        super(props)
        // this.state = {
        //     content: "--"
        // }
        //this.changeText = this.changeText.bind(this)
        //this.counter = 0
    }

    // changeText = () => {
    //     if (this.counter % 2 == 0) {
    //         this.setState( { content: "Barkour" })
    //     } else {
    //         this.setState( { content: "Henlo" })
    //     }
    //     this.counter += 1
    // }
    
}

export default PageBackground
