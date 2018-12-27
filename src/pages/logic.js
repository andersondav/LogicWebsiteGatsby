import React from "react"
import PageBackground from "../components/pageBackground"
import pageBackgroundStyles from "../components/pageBackground.module.css"
import Rapture from "../images/rapture.jpg"
import Step6 from "../images/Tutorial5.png"
import {fire} from "./about.js"
import UserLogo from "../images/GenericUser.png"
import TopPageStripe, { textColor } from "../components/topPageStripe"

class Logic extends React.Component {

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
                        <h1 className={pageBackgroundStyles.welcomeHeader}>LOGIC</h1>
                        <p className={pageBackgroundStyles.normalText} style={{ fontSize: "20px" }}>Through his music, Logic has given fans a major glimpse into his life-including his highs, his lows, and everything in between.
                        Entire albums have been devoted to Logic being able to speak his mind about topics from his childhood, rise to success, and even simply about his general
                        opinion on society. Logic makes it very easy for fans to get to know what he is all about. However, in addition to his music, there are also a lot of
                        other great resources where people can learn and explore more about Logic's life and his music. Scroll down to check them out!</p>
                    </div>
                    <div>
                        <h1 className={pageBackgroundStyles.stepTitle}>1. Wikipedia</h1>
                        <div className={pageBackgroundStyles.stepDescription}>
                            <p>The classic way to find any information quickly, Wikipedia actually has lots of information about Logic, going into great detail about his
                            childhood and rise to fame. It talks about his influences, his intro into music, and much more. If you haven't looked much into Logic beyond his music, this
                            is a great way to quickly gain an understanding of the path that led him to where he's at now.</p>
                        </div>
                    </div>
                    <div>
                        <h1 className={pageBackgroundStyles.stepTitle}>2. Lost in Vegas</h1>
                        <iframe style={{ display: "block", right: "0", left: "0", margin: "0 auto", marginBottom: "10px" }}id="LIVEmbed" width="560" height="315" src="https://www.youtube.com/embed/gqcvRym-ivw" frameborder="0" allow="autoplay; encrypted-media"
                        allowfullscreen></iframe>
                        <div className={pageBackgroundStyles.stepDescription}>
                            <p>One of my personal favorites, Lost in Vegas is a great resource as well as an entertaining duo. Over 600 thousand subscribers strong, Ryan and George,
                            founders of the channel, have made a name for themselves reviewing and reacting to all types of music. Although they react to all sorts of genres and artists, when the channel
                            was just beginning, Lost in Vegas went on what they call a "Logic-thon," reacting to countless Logic songs from mixtapes to albums. What makes Lost In Vegas unique from other
                            reaction channels is their rich and deep understanding of music-especially hip-hop music. For an artist like Logic, who packs many references and wordplays into a few seconds
                            of lyrics, Lost In Vegas does a great job at hearing these, pointing them out, and appreciating them with nice feedback on every video. If you want a better understanding of
                            Logic's music and of just how apparent his inspirations are in his music, check Lost In Vegas out. Go check out their channel <a id="LIVLink" 
                            href="https://www.youtube.com/channel/UCJPOmOZzDxZZxPWFgeE50hQ" target="_blank">here</a>, or click on the video above to see their reaction to Logic's "Dead Presidents III"
                            (another favorite video and song of mine).</p>
                        </div>
                    </div>
                    <div>
                        <h1 className={pageBackgroundStyles.stepTitle}>3. Hardknocktv</h1>
                        <iframe style={{ display: "block", right: "0", left: "0", margin: "0 auto", marginBottom: "10px" }}id="LIVEmbed" width="560" height="315" src="https://www.youtube.com/embed/KId52-bSZak" frameborder="0" allow="autoplay; encrypted-media"
                        allowfullscreen></iframe>
                        <div className={pageBackgroundStyles.stepDescription}>
                            <p>Nick Huff Barili, the creator of hardknocktv, literally has one of the best jobs in the world (in my opinion anyways). He sits down with and interviews
                            some of the biggest names in hip-hop, from the likes of J. Cole, Kendrick Lamar, and, of course, Logic. Bobby especially has done numerous interviews with Nick, including his
                            most recent one where the two talked about Logic's latest release, the much anticipated "YSIV." What I enjoy about these interviews is the candidness, as you see a level of
                            intimacy between Nick and Bobby that allows fans to really see into the mind of Logic. There are literally hours of interviews with Logic on the channel, which you can check out <a id="LIVLink"
                            href="https://www.youtube.com/user/hardknocktv" target="_blank">here</a>. Another part of the channel I really enjoy is Nick's interviews with 6ix, Logic's longtime friend and
                            producer. Here, again, we get an inside look at the influences behind Logic's music and more info about the underlying messages and themes behind it.</p>
                        </div>
                    </div>
                    <div>
                        <h1 className={pageBackgroundStyles.stepTitle}>4. Netflix Rapture Series</h1>
                        <div className={pageBackgroundStyles.stepWithPicture}>
                            <a href="https://www.netflix.com/watch/80145232?trackId=13752289&tctx=0%2C0%2C67d1cb1c-7011-45a5-861a-64872d4c3e56-46258699%2C%2C" target="_blank">
                            <img src={Rapture} style={{ width: "100%" }}></img></a>
                        </div>
                        <div className={pageBackgroundStyles.stepDescription}>
                            <p>Like hardknocktv, the Rapture series on Netflix is all about showing a raw and candid side of hip-hop. The 8-episode documentary follows the story
                            off numerous hip-hop artists of varying styles and personalities. The show kicks off its first episode with none other than Logic, who, at the time, was celebrating and
                            reflecting on the release of his widely successful album "Everybody." The show takes viewers through a "Day in the Life" of Logic while he's touring, and he discusses
                            numerous topics, including his battle with anxiety. For a gritty, emotional, and up close look at Bobby, Rapture is the way to go.</p>
                        </div>
                    </div>
                    <div>
                        <h1 className={pageBackgroundStyles.stepTitle}>5. Logic's "Gaming" Channel</h1>
                        <iframe style={{ display: "block", right: "0", left: "0", margin: "0 auto", marginBottom: "10px" }}id="LIVEmbed" width="560" height="315" src="https://www.youtube.com/embed/x8CJhdMx8xA" frameborder="0" allow="autoplay; encrypted-media"
                        allowfullscreen></iframe>
                        <div className={pageBackgroundStyles.stepDescription}>
                            <p>Believe it or not, Logic himself also has a Youtube Channel. Traditionally, fans refer to this as his "gaming" channel, and while he certainly has
                            posted his fair share of him chilling playing video games, he also has done much more on it as well, including even posting his "YSIV Freestyle" on it. Here, Logic shows
                            more of his fun and goofy side as he relaxes and has fun with a game or his close friends. Not many artists reveal themselves to their fans in such an open and fun-loving
                            manner, but Logic's willingness to do so makes for some fun videos and a greater connection between him and his fans. You can check out the channel <a id="LIVLink" 
                            href="https://www.youtube.com/channel/UCoDcFZ5KZ0KwBC_omalJuiA">here</a>.</p>
                        </div>
                    </div>
                    <div>
                        <h1 className={pageBackgroundStyles.stepTitle}>6. r/Logic_301</h1>
                        <script src='https://redditjs.com/subreddit.js' data-subreddit='Logic_301' data-width='500' data-theme='dark'></script>
                        <div className={pageBackgroundStyles.stepDescription}>
                            <p>Logic has one of the most dedicated fanbases of any artist in recent memory. Calling themselves The Rattpack (named after Frank Sinatra's Rat
                            Pack, an artist Logic takes huge inspiration from - see the Young Sinatra series), these fans can be found all over America and all around the globe. According to
                            Logic, the "Ratt" in Rattpack stands for "Real all the time," a motto that describes Logic as well as those he's inspired. Probably the easiest way to join in on the daily discussions of the Rattpack, the r/Logic_301 subreddit is a great place to discuss favorite albums,
                            talk about album theories, and much more. Also, be sure to look out for <a id="LIVLink" href="https://www.reddit.com/user/sermonsdomain" target="_blank">u/sermonsdomain</a> in the comments section, as he is a member of VMG and Logic's team who is happy to join in on the discussions too and talk to fans (without giving out spoilers, of course). </p>
                        </div>
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

export default Logic