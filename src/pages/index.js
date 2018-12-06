import React from "react"
import { Link } from "gatsby"
import PageBackground from "../components/pageBackground";
import pageBackgroundStyles from "../components/pageBackground.module.css"
import { runInThisContext } from "vm";

class Index extends React.Component {
    render() {
        return (
            <PageBackground contentHeight2={this.state.content2}>
                <this.content ref={this.ref}/>
            </PageBackground>
        )
    }

    constructor(props) {
        super(props)
        this.ref = React.createRef()
        this.state = {
            content2: "750px"
        }
        this.content = React.forwardRef((props, ref) => (
            <div ref={ref} className={pageBackgroundStyles.content} style={{ backgroundColor: "#f9f9f9" }}>
                {this.children}
            </div>
        ))
        this.children = (
            <div className={pageBackgroundStyles.welcome}>
                <h1 className={pageBackgroundStyles.welcomeHeader}>WELCOME!</h1>
                <p>This website was made to pay homage to hip hop artist Logic. Hailing from Gaithersburg, Maryland,
                    Logic began recording at a young age, and, thanks to his strong flows and inspirational message, has quickly risen to become one of the
                    most well-known and successful figures in the music industry today. Use the drop-down menus to get song suggestions and learn about Logic's come-up
                    as well as the rise of his well-known fanbase, the Rattpack!</p>
            </div>
        )
    }

    componentDidMount() {
        window.addEventListener('resize', this.fixHeights())
        //this.setState({ content2: "1000px" })
    }

    fixHeights() {
        var height = this.ref.current.clientHeight
        this.setState({ content2: (height + 300) + "px" })
    }

}

export default Index
