import React from "react"
import { Link } from "gatsby"
import PageBackground from "../components/pageBackground";
import pageBackgroundStyles from "../components/pageBackground.module.css"
import UserLogo from "../images/GenericUser.png"
import TopPageStripe, {textColor} from "../components/topPageStripe"
import {fire} from "./about.js"
//import fiveammp3 from "../music/5AM.mp3"

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
                    <div className={pageBackgroundStyles.songBoardIntro}>
                        {this.state.header}
                    </div>
                    {this.makeList()}
                </PageBackground>
            </div>
        )
    }
    
    constructor(props) {
        super(props)

        this.submitPage = "Welcome to the Song Board Recommendations Page! Fill out the form" +  
        "and hit submit and you just might see your recommended song featured on the song board!"

        this.errorPage = "Sorry, you cannot access this page without being logged in."
        
        this.songBoard = "Welcome to the Song Board! Here you can find and listen to the various Logic" +  
        "songs fellow users have recommended! Take a look at some of them below, or click on the " + 
        "\"Submit a song\" button above to submit a song to be featured on the song wall!"

        this.state = {
            buttonFunc: this.login,
            user: null,
            logo: UserLogo,
            loggedIn: "hidden",
            header: this.songBoard,
            SBDecor: "none",
            subDecor: "none",
            myData: null,
            value: "",
            errorVisibility: "hidden",
            message: ""
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
                header: this.songBoard,
                SBDecor: "none",
                subDecor: "none"
            })
            alert('you are now logged out')
        }) 
    }

    componentDidMount() {
        this.commentRef = fire.db.ref("Embed Codes/")
        var toAdd = []
        this.commentRef.on('value', (snapshot) => {
            snapshot.forEach(function(childSnapShot) {
                var key = childSnapShot.key
                var songName = childSnapShot.val().Code
                var user = childSnapShot.val().User
                toAdd.push({
                    "name": songName,
                    "user": user
                })
            })
            this.setState({
                myData: toAdd    
            })
            //alert(this.state.myData[0] + ", " + this.state.myData[1])
          });
    
        fire.auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({ 
                    user: user,
                    buttonFunc: this.logout,
                    logo: user.photoURL + "",
                    loggedIn: "visible",
                    header: this.songBoard,
                    SBDecor: "underline",
                    subDecor: "none"
                });
            }
        })
    }

    goToSongBoard = () => {
        if (this.state.header != this.errorPage) {
            //alert("going to songBoard")
            if (this.state.SBDecor == "underline") {
                //alert("nothing changed")
            } else {
                this.setState( {
                    header: this.songBoard,
                    SBDecor: "underline",
                    subDecor: "none"
                })
            }
        }
        
    }

    goToSubmit = () => {
        if (this.state.header != this.errorPage) {
            //alert("going to submit")
            if (this.state.subDecor == "underline") {

            } else {
                this.setState({
                    header: this.submitPage,
                    SBDecor: "none",
                    subDecor: "underline"
                })
            }
        }
    }
    
    makeList() {
        if (this.state.header == this.submitPage) {
            return (
                <div className={pageBackgroundStyles.songRecForm}>
                    <p style={{ marginTop: "20px", marginBottom: "0px"}}>Song Name, User Name</p>
                    <textarea className={pageBackgroundStyles.songRecBox}
                        onChange={this.handleChange} placeholder="Enter song title here">
                            {this.state.value}
                    </textarea>
                    <button className={pageBackgroundStyles.submitComment} onClick={this.submitComment}>
                        Submit Comment
                    </button>
                    <div className={pageBackgroundStyles.errorMessage} style={{ visibility: this.state.errorVisbility, color: this.state.msgColor }}>
                        <p>{this.state.message}</p>
                    </div>
                </div>
            )
        } else if (this.state.header == this.errorPage) {
            return (
                <div>
                </div>
            )
        } else {
            if (this.state.myData != null) {
                var myList = this.state.myData.map(function(item) {
                    var name = item.name + ""
                    var user = item.user + ""
                    // if (name.includes("mp3")) {
                    //     return <div className={pageBackgroundStyles.songList}>
                    //         <audio ref="audio_tag" src={fiveammp3} controls/>
                    //         <p className={pageBackgroundStyles.userTag}>Submitted by {user}</p>
                    //     </div>
                    // }
                    // else {
                        return <div className={pageBackgroundStyles.songList}>
                            <iframe src={"https://open.spotify.com/embed/track/" + name} 
                            width="75%" height="80" frameborder="0" 
                            allowtransparency="true" allow="encrypted-media"
                            style={{padding: "0 0", margin: "0 0"}}>
                            </iframe>
                            <p className={pageBackgroundStyles.userTag}>Submitted by {user}</p>
                        </div>
                    //}
                })
                return <div>{ myList }</div>
            } else {
                //var myArr = ["John", "Anderson", "David"]
            }
        }
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value.toUpperCase() })
    }

    submitComment = (event) => {
        event.preventDefault()
        if (this.state.value == "") {
            this.setState({ errorVisbility: "visible", message: "Please enter a song before submitting.", msgColor: "red" })
        } else {
            this.setState({errorVisbility: "visible", message: "Thank you! Your recommendation has been sent.", msgColor: "green" })
            var songRef = fire.db.ref('Songs/')
            var songTitle = {
                    title: this.state.value,
                    user: this.state.user.displayName
                }
            }
            songRef.push(songTitle)
    }
    
}

export default SongBoard
