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
                <ContentView2 contentHeight={this.props.contentHeight2}/>
                <Footer />
            </div>
        )
    }

    constructor(props) {
        super(props)
        this.state = {
            message: "hmmm"
        }
        //this.contentHeight = React.createRef()
    }

    componentDidMount() {
        // var height = this.contentHeight.current.height
        // this.setState({ message: height + "" })
    }


    
}

export default PageBackground
