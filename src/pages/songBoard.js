import React from "react"
import { Link } from "gatsby"
import PageBackground from "../components/pageBackground";
import pageBackgroundStyles from "../components/pageBackground.module.css"
import UserLogo from "../images/GenericUser.png"
import TopPageStripe, {textColor} from "../components/topPageStripe"
import {fire} from "./about.js"

class SongBoard extends React.Component {
    render() {
        return (
            <div>
                <TopPageStripe loggedIn={this.state.loggedIn}>
                    <div style={{ color: textColor, flexGrow: "1", textAlign: "right" }}>
                        <img onClick={this.state.buttonFunc} style={{ height: "40px", cursor: "pointer" }} alt="G" src={this.state.logo}/>
                    </div>
                </TopPageStripe>
                <PageBackground contentHeight="auto" contentHeight2="auto">
                    <div className={pageBackgroundStyles.songBoardHeader}>
                        <span onClick={this.goToSongBoard} style={{ cursor: "pointer", textDecoration: this.state.SBDecor }}>Song Board</span><span>  |  </span>
                        <span onClick={this.goToSubmit} style={{ cursor: "pointer", textDecoration: this.state.subDecor }}>Submit a Song</span>
                    </div>
                    {this.state.currentPage}
                </PageBackground>
            </div>
        )
    }
    
    constructor(props) {
        super(props)
        this.errorPage = (
            <div className={pageBackgroundStyles.songBoardIntro}>
                Sorry, you cannot access this page without being logged in.
            </div>
        )
        
        // this.songBoard = (
        //     <div>
        //         <div className={pageBackgroundStyles.songBoardIntro}>
        //             Welcome to the Song Board! Here you can find and listen to the various Logic songs people have 
        //             recommended! Take a look at some of them below, or click on the "Submit a song" button above to
        //             submit a song to be featured on the song wall!
        //         </div>
        //     </div>
        // )
        this.submitPage = (
            <div className={pageBackgroundStyles.songBoardIntro}>
                Welcome to the Song Board Recommendations Page! Fill out the form and hit submit and you just might
                see your recommended song featured on the song board!
            </div>
        )
        this.state = {
            buttonFunc: this.login,
            user: null,
            logo: UserLogo,
            loggedIn: "hidden",
            currentPage: this.errorPage,
            SBDecor: "none",
            subDecor: "none",
            myData: null,
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
                loggedIn: "visible",
                currentPage: this.songBoard
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
                loggedIn: "hidden",
                currentPage: this.errorPage,
                SBDecor: "none",
                subDecor: "none"
            })
            alert('you are now logged out')
        }) 
    }

    componentDidMount() {
        this.commentRef = fire.db.ref("Comments/")
        var toAdd = []
        this.commentRef.on('value', (snapshot) => {
            snapshot.forEach(function(childSnapShot) {
                var key = childSnapShot.key
                var comment = childSnapShot.val()
                toAdd.push(comment)
            })
          });
        
        let message = "hi my name is Anderson"
        for (let comment in toAdd) {
            message += comment
        }

        const comments = toAdd.map((comm) =>
            <div>
                {comm}
            </div>
        )

        this.songBoard = (
            <div>
                <div className={pageBackgroundStyles.songBoardIntro}>
                    Welcome to the Song Board! Here you can find and listen to the various Logic songs people have 
                    recommended! Take a look at some of them below, or click on the "Submit a song" button above to
                    submit a song to be featured on the song wall!
                </div>
                {comments}
            </div>
        )

        fire.auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({ 
                    user: user,
                    buttonFunc: this.logout,
                    logo: user.photoURL + "",
                    loggedIn: "visible",
                    currentPage: this.songBoard,
                    SBDecor: "underline",
                    subDecor: "none"
                });
            }
        })

        

    }

    goToSongBoard = () => {
        //alert("going to songBoard")
        if (this.state.SBDecor == "underline") {
            //alert("nothing changed")
        } else {
            this.setState( {
                currentPage: this.songBoard,
                SBDecor: "underline",
                subDecor: "none"
            })
        }
    }

    goToSubmit = () => {
        //alert("going to submit")
        if (this.state.subDecor == "underline") {

        } else {
            this.setState({
                currentPage: this.submitPage,
                SBDecor: "none",
                subDecor: "underline"
            })
        }
        
    }
}

export default SongBoard
