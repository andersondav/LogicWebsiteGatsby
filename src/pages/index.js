import React from "react"
import { Link } from "gatsby"
import PageBackground from "../components/pageBackground";
import pageBackgroundStyles from "../components/pageBackground.module.css"
import UserLogo from "../images/GenericUser.png"
import TopPageStripe, {textColor} from "../components/topPageStripe"
import {fire} from "./about.js"

class Index extends React.Component {
    render() {
        return (
            <div>
                <TopPageStripe loggedIn={this.state.loggedIn}>
                    <div style={{ color: textColor, flexGrow: "1", textAlign: "right" }}>
                        <img onClick={this.state.buttonFunc} style={{ height: "40px", cursor: "pointer" }} alt="G" src={this.state.logo}/>
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
    
    constructor(props) {
        super(props)
        this.state = {
            buttonFunc: this.login,
            user: null,
            logo: UserLogo,
            loggedIn: "hidden"
        }
    }

    login = () => {
        //alert("you're about to login")
        fire.auth.signInWithPopup(fire.provider) 
            .then((result) => {
            const user = result.user;
            this.setState({
                user: user,
                buttonFunc: this.logout,
                logo: "" + user.photoURL,
                loggedIn: "visible"
            });
            alert('you are now logged in as ' + this.state.user.displayName)
            })
    }

    logout = () => {
        fire.auth.signOut().then(() => {
            this.setState({
                user: null,
                buttonFunc: this.login,
                logo: UserLogo,
                loggedIn: "hidden"
            })
            alert('you are now logged out')
        }) 
    }

    componentDidMount() {
        fire.auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({ 
                    user: user,
                    buttonFunc: this.logout,
                    logo: user.photoURL + "",
                    loggedIn: "visible"
                });
            }
        })
    }
}

export default Index
