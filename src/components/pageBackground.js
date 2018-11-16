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
                    <div className={pageBackgroundStyles.welcome}>
					    <h1 className={pageBackgroundStyles.welcomeHeader}>WELCOME!</h1>
					    <p>This website was made to pay homage to hip hop artist Logic. Hailing from Gaithersburg, Maryland,
					    Logic began recording at a young age, and, thanks to his strong flows and inspirational message, has quickly risen to become one of the
					    most well-known and successful figures in the music industry today. Use the drop-down menus to get song suggestions and learn about Logic's come-up
					    as well as the rise of his well-known fanbase, the Rattpack!</p>
				    </div>
                </ContentView>
                <ContentView2 contentHeight={this.props.contentHeight2}/>
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
