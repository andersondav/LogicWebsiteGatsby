import React from "react"
import pageBackgroundStyles from "./pageBackground.module.css"
import '../fonts/PenumbraFlareStd-Semibold.otf'
import { Link } from "gatsby"
import { borderColor } from "./imageContainer"

var textColor

if (borderColor == "#ffffff") {
    textColor = "#000000"
} else {
    textColor = "#ffffff"
}

class NavBar extends React.Component {
    render() {
        return (
            <div className={pageBackgroundStyles.navBarContainer} style={{ position: this.state.containerPos, top: this.state.containerTop }}>
                <div className={pageBackgroundStyles.navBar} style={{ backgroundColor: borderColor, borderColor: borderColor, 
                position: "static" }} >
                    <Link to="/">
                        <div style={{ color: textColor, backgroundColor: this.state.homeColor}} className={pageBackgroundStyles.navLinks} 
                        onMouseOver={() => this.highlightLink("home")} onMouseOut={() => this.unHighlightLink("home")}>
                            Home
                        </div>
                    </Link>
                        <div style={{ color: textColor, backgroundColor: this.state.listenColor }} className={pageBackgroundStyles.navLinks}
                        onMouseOver={() => this.highlightLink("listen")} onMouseOut={() => this.unHighlightLink("listen")}>
                            Listen
                        </div>
                        <div style={{ color: textColor, backgroundColor: this.state.learnColor }} className={pageBackgroundStyles.navLinks}
                        onMouseOver={() => this.highlightLink("learn")} onMouseOut={() => this.unHighlightLink("learn")}>
                            Learn
                        </div>
                    <Link to="/about">    
                        <div style={{ color: textColor, backgroundColor: this.state.aboutColor }} className={pageBackgroundStyles.navLinks}
                        onMouseOver={() => this.highlightLink("about")} onMouseOut={() => this.unHighlightLink("about")}>
                            About
                        </div>
                    </Link>    
                </div>
                <div className={pageBackgroundStyles.navBarR2} style={{ backgroundColor: "transparent", borderColor: borderColor, 
                    position: "static" }}>
                        <div style={{ visibility: "hidden" }} className={pageBackgroundStyles.navLinks}>
                        </div>
                    <Link to="/mixtapeInfo">
                        <div style={{ color: textColor, backgroundColor: this.state.songSuggestorColor, visibility: this.state.songSuggestorVisibility }} className={pageBackgroundStyles.navLinks}
                        onMouseOver={() => this.highlightLink("songSuggestor")} onMouseOut={() => this.unHighlightLink("songSuggestor")}>
                            <div className={pageBackgroundStyles.subNavLinks}>Mixtape Info</div>
                        </div>
                    </Link>
                    <Link to="/logic">
                        <div style={{ color: textColor, backgroundColor: this.state.logicColor, visibility: this.state.logicVisibility }} className={pageBackgroundStyles.navLinks}
                        onMouseOver={() => this.highlightLink("logic")} onMouseOut={() => this.unHighlightLink("logic")}>
                            <div className={pageBackgroundStyles.subNavLinks}>Logic</div>
                        </div>
                    </Link>
                        <div style={{ visibility: "hidden" }}className={pageBackgroundStyles.navLinks}>
                            <div className={pageBackgroundStyles.subNavLinks}>This site</div>
                        </div>
                </div>
            </div>
        )
    }

    constructor(props) {
        super(props)
        this.state = {
            containerPos: "absolute",
            containerTop: "auto",
            homeColor: borderColor,
            listenColor: borderColor,
            learnColor: borderColor,
            aboutColor: borderColor,
            songSuggestorColor: borderColor,
            logicColor: borderColor,
            thisSiteColor: borderColor,
            songSuggestorVisibility: "hidden",
            logicVisibility: "hidden",
            mousePos: "0"
        }
        //this.highlightLink = this.highlightLink.bind(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
        window.addEventListener('mousemove', this.clearSubLinks)
        window.addEventListener('mouseout', this.clearAll)
    }

    handleScroll = () => {
        if (window.scrollY < 258) {
            this.setState({ containerPos: "absolute", containerTop: "auto", testText: window.scrollY, top: "auto", top2: "auto" })
            window.addEventListener('mousemove', this.clearSubLinks)
        } else {
            this.setState({ containerPos: "fixed", containerTop: "0px", testText: window.scrollY, top: "0px", topR2: "50px" })
            window.removeEventListener('mousemove', this.clearSubLinks)
        }
        
    }

    clearSubLinks = (e) => {
        var x = e.screenX
        // var y = e.screenY
        var calc = (x/window.innerWidth)
        this.setState({ mousePos: calc.toString() })
        if (e.screenY < 375 - window.scrollY) {
            this.setState({ songSuggestorVisibility: "hidden", logicVisibility: "hidden" })
        }
        
    }

    highlightLink = (button) => {
        if (button == "home") {
            this.setState({ homeColor: "#b2b2b2", songSuggestorVisibility: "hidden" })
        } else if (button == "listen") {
            this.setState({ listenColor: "#b2b2b2", songSuggestorVisibility: "visible", logicVisibility: "hidden" })
        } else if (button == "learn") {
            this.setState({ learnColor: "#b2b2b2", logicVisibility: "visible", songSuggestorVisibility: "hidden" })
        } else if (button == "about") {
            this.setState({ aboutColor: "#b2b2b2", logicVisibility: "hidden" })      
        } else if (button == "songSuggestor") {
            this.setState({ songSuggestorColor: "#b2b2b2"})
        } else if (button == "logic") {
            this.setState({ logicColor: "#b2b2b2" })
        } else if (button == "thisSite") {
            this.setState({ thisSiteColor: "#b2b2b2" })
        }
    }

    unHighlightLink = (button) => {
        if (button == "home") {
            this.setState({ homeColor: borderColor })
        } else if (button == "listen") {
            this.setState({ listenColor: borderColor })
        } else if (button == "learn") {
            this.setState({ learnColor: borderColor })
        } else if (button == "about") {
            this.setState({ aboutColor: borderColor })
        } else if (button == "songSuggestor") {
            this.setState({ songSuggestorColor: borderColor, songSuggestorVisibility: "hidden" })
        } else if (button == "logic") {
            this.setState({ logicColor: borderColor, logicVisibility: "hidden" })
        } else if (button == "thisSite") {
            this.setState({ thisSiteColor: borderColor})
        }
    }

}

export default NavBar