import React from "react"
import { Link } from "gatsby"
import PageBackground from "../components/pageBackground";
import pageBackgroundStyles from "../components/pageBackground.module.css"
import TopPageStripe from "../components/topPageStripe"
import UserLogo from "../images/GenericUser.png"
import {textColor} from "../components/topPageStripe"

class Index extends React.Component {
    render() {
        return (
            <div>
                <TopPageStripe>
                    <div style={{ color: textColor, flexGrow: "1", textAlign: "right" }}>
                        <img style={{ height: "40px" }} alt="u" src={UserLogo}/>
                    </div>
                </TopPageStripe>
                <PageBackground contentHeight="auto" contentHeight2="auto">
                    <div className={pageBackgroundStyles.welcome}>
                        <h1 className={pageBackgroundStyles.welcomeHeader}>WELCOME!</h1>
                        <p>This website was made to pay homage to hip hop artist Logic. Hailing from Gaithersburg, Maryland,
                        Logic began recording at a young age, and, thanks to his strong flows and inspirational message, has quickly risen to become one of the
                        most well-known and successful figures in the music industry today. Use the drop-down menus to get song suggestions and learn about Logic's come-up
                        as well as the rise of his well-known fanbase, the Rattpack!</p>
                    </div>
                </PageBackground>
            </div>
        )
    }    
}

export default Index
