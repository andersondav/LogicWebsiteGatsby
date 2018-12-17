import React from "react"
import PageBackground from "../components/pageBackground"
import pageBackgroundStyles from "../components/pageBackground.module.css"
import firebase from "../firebase.js"
import UserLogo from "../images/GenericUser.png"
import TopPageStripe, {textColor} from "../components/topPageStripe"

var fire = new firebase()

class About extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "",
            color: "grey",
            errorVisbility: "hidden",
            message: "",
            msgColor: "",
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

    handleChange = (event) => {
        this.setState({ color: "black", value: event.target.value.toUpperCase() })
    }

    submitComment = (event) => {
        event.preventDefault()
        if (this.state.value == "") {
            this.setState({ errorVisbility: "visible", message: "Please enter a comment before submitting.", msgColor: "red" })
        } else {
            this.setState({errorVisbility: "visible", message: "Thank you! Your message has been sent.", msgColor: "green" })
            var commentRef = fire.db.ref('Comments/')
            var comment = ""
            if (this.state.user) {
                comment = '------(FROM ' + this.state.user.displayName + ')------\n' + this.state.value
            } else {
                comment = this.state.value
            }
            commentRef.push(comment)
        }
    }

    render() {
        return (
            <div>
                <TopPageStripe loggedIn={this.state.loggedIn}>
                        <div style={{ color: textColor, flexGrow: "1", textAlign: "right" }}>
                            <img onClick={this.state.buttonFunc} style={{ height: "40px", cursor: "pointer" }} alt="G" src={this.state.logo}/>
                        </div>
                    </TopPageStripe>
                <PageBackground contentHeight="auto" contentHeight2="auto">
                    <div className={pageBackgroundStyles.welcome} style={{ border: "none" }}>
                        <h1 className={pageBackgroundStyles.welcomeHeader}>ABOUT THIS SITE</h1>
                        <p style={{ fontSize: "18px" }}>This site was made by Anderson David, a freshman computer science student at Purdue University. I made this website for two reasons:
                        1) to develop my skills as a programmer, and 2) to honor, pay homage to, and show my appreciation for my favorite music artist. Logic's music
                        and his story have been a true inspiration for me, as they have been to many others, and I simply wanted to show love for the positive impact he has
                        had on my life. I'd also like to thank anyone and everyone who has visited this site; I appreciate every one of you. If you have any comments or suggestions
                        for the website, please make sure to send them to me through the comment box below! -Anderson</p>
                    </div>
                    <div className={pageBackgroundStyles.commentBoxContainer}>
                        <textarea className={pageBackgroundStyles.commentBox} style={{ color: this.state.color }}
                        onChange={this.handleChange} placeholder="Write your comment here">
                            {this.state.value}
                        </textarea>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                    <button className={pageBackgroundStyles.submitComment} onClick={this.submitComment}>
                        Submit Comment
                    </button>
                    </div>
                    <div className={pageBackgroundStyles.errorMessage} style={{ visibility: this.state.errorVisbility, color: this.state.msgColor }}>
                        <p>{this.state.message}</p>
                    </div>
                </PageBackground>
            </div>
        )
    }
}

export default About
export {fire}