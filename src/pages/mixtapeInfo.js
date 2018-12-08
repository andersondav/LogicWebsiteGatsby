import React from "react"
import PageBackground from "../components/pageBackground"
import pageBackgroundStyles from "../components/pageBackground.module.css"
import Psychological from "../images/Albums/Psychological.jpg"
import YoungBroke from "../images/Albums/YoungBroke.jpg"
import YoungSinatra from "../images/Albums/YoungSinatra.jpg"
import YSUndeniable from "../images/Albums/YSUndeniable.jpg"
import YSWTF from "../images/Albums/YSWTF.jpg"
import Step2 from "../images/Tutorial1.png"
import Step3 from "../images/Tutorial2.png"
import Step4 from "../images/Tutorial3.png"
import Step5 from "../images/Tutorial4.png"
import Step6 from "../images/Tutorial5.png"
import UserLogo from "../images/GenericUser.png"
import TopPageStripe, {textColor} from "../components/topPageStripe"
import {fire} from "./about.js"

class MixtapeInfo extends React.Component {

    render() {
        return (
            <div>
                <TopPageStripe>
                    <div style={{ color: textColor, flexGrow: "1", textAlign: "right" }}>
                        <img onClick={this.state.buttonFunc} style={{ height: "40px", cursor: "pointer" }} alt="G" src={this.state.logo}/>
                    </div>
                </TopPageStripe>
                <PageBackground contentHeight="auto" contentHeight2="auto">
                    <div className={pageBackgroundStyles.welcome} style={{ border: "none" }}>
                        <h1 className={pageBackgroundStyles.welcomeHeader}>MIXTAPE DOWNLOAD INFORMATION</h1>
                        <p className={pageBackgroundStyles.normalText} style={{ fontSize: "20px" }}>Before he became the artist he is today, Logic rose to fame largely through his well-known mixtapes.
                        Through these releases, Logic introduced his music to the world for all to enjoy. These tracks were also the birth of the immensely popular
                        "Young Sinatra" series. Unfortunately, due to legal reasons, these mixtapes are not available on common streaming services like Spotify or Apple Music.
                        For that reason, this page was created to spread the word about these Logic classics and to help people download and enjoy them.
                        Scroll down for a mixtape download tutorial!</p>
                    </div>
                    <div>
                        <h1 className={pageBackgroundStyles.stepTitle}>1. Choose a download link</h1>
                        <div style={{ margin: "0 auto", left: "0", right: "0", width: "80%", height: "auto" }}>
                            <div className={pageBackgroundStyles.mixtapeCoverContainer} style={{ marginRight: "5%" }}>
                                <a href="https://www.datpiff.com/Logic-Psychological-Logic-The-Mixtape.469527.html">
                                    <img className={pageBackgroundStyles.mixtapeCovers} src={Psychological} alt="Pyschological"></img>
                                </a>
                            </div>
                            <div className={pageBackgroundStyles.mixtapeCoverContainer} style={{ marginRight: "5%" }}>
                                <a href="https://www.datpiff.com/Logic-Young-Broke-Infamous-mixtape.178715.html">
                                    <img className={pageBackgroundStyles.mixtapeCovers} src={YoungBroke} alt="Young, Broke, and Infamous"></img>
                                </a>
                            </div>
                            <div className={pageBackgroundStyles.mixtapeCoverContainer}>
                                <a href="https://www.datpiff.com/Logic-Young-Sinatra-mixtape.271763.html">
                                    <img className={pageBackgroundStyles.mixtapeCovers} src={YoungSinatra} alt="Young Sinatra"></img>
                                </a>
                            </div>
                        </div>
                        <div style={{ margin: "0 auto", left: "0", right: "0", width: "53.333%", height: "auto" }}>
                            <div className={pageBackgroundStyles.mixtapeCoverContainer2} style={{ marginRight: "5%" }}>
                                <a href="https://www.datpiff.com/Logic-Young-Sinatra-Undeniable-mixtape.346367.html">
                                    <img className={pageBackgroundStyles.mixtapeCovers} src={YSUndeniable} alt="Young Sinatra Undeniable"></img>
                                </a>
                            </div>
                            <div className={pageBackgroundStyles.mixtapeCoverContainer2}>
                                <a href="https://www.datpiff.com/Logic-Young-Sinatra-Welcome-To-Forever-mixtape.483644.html">
                                    <img className={pageBackgroundStyles.mixtapeCovers} src={YSWTF} alt="Young Sinatra Welcome To Forever"></img>
                                </a>
                            </div>
                        </div>                
                    </div>
                    <div className={pageBackgroundStyles.stepDescription}>
                        <p>Logic currently has five mixtapes that can be freely downloaded off of Datpiff, a mixtape download site: 1) Logic the Mixtape
                        (it is disputed whether Logic himself released this tape, but it's still great music so I'll link it), 2) Young, Broke, and Infamous, 3) Young Sinatra,
                        4) Young Sinatra: Undeniable, and 5) Young Sinatra: Welcome to Forever. To start, click an album art above to get to the download site, and hit the red download button
                        to start your download. After the file downloads, unzip the file by opening it in your Downloads folder.</p>
                    </div>
                    <div>
                        <h1 className={pageBackgroundStyles.stepTitle}>2. Move files to a local folder</h1>
                        <div className={pageBackgroundStyles.stepWithPicture}>
                            <img src={Step2} style={{ width: "100%" }}></img>
                        </div>
                        <div className={pageBackgroundStyles.stepDescription}>
                            <p>Next, move the unziped folder of tracks from your Downloads folder to any other folder. For this example, I'll move it to my desktop.</p>
                        </div>
                    </div>
                    <div>
                        <h1 className={pageBackgroundStyles.stepTitle}>3a. (itunes) Import Into Library</h1>
                        <div className={pageBackgroundStyles.stepWithPicture}>
                            <img src={Step3} style={{ width: "100%" }}></img>
                        </div>
                        <div className={pageBackgroundStyles.stepDescription}>
                            <p>For people using iTunes/Apple Music, open iTunes and navigate to your library. Using the command bar at the top of the screen,
                            go to File -> Add to Library. After clicking Add to Library, a file finder should open up. Navigate to the folder, click on it, then hit "Open." The contents of the
                            folder (the mp3 song files) should now be in your iTunes library. Repeat with other desired mixtapes. You can also plug in your phone to
                            the computer and sync iTunes library to get the songs on the go!</p>
                        </div>
                    </div>
                    <div>
                        <h1 className={pageBackgroundStyles.stepTitle}>3b. (Spotify) Enable Local File Source</h1>
                        <div className={pageBackgroundStyles.stepWithPicture}>
                            <img src={Step4} style={{ width: "100%" }}></img>
                        </div>
                        <div className={pageBackgroundStyles.stepDescription}>
                            <p>For those listening on Spotify, open Spotify on the computer. In the top right of the screen, there should be a small "v" symbol next to the
                                account name. Click this symbol, and in the drop down go to settings. On the settings page, scroll down to the "Local Files" Section (shown above). If you haven't added
                                any local files, none of the categories should be toggled on with green. Click on the "Add a source" button, and navigate to the folder that houses the mixtape songs.
                                Click on that folder and hit Open. The folder name should now appear as a category. Toggle it to green if it is not already. If you click on the "Local Files" section
                                on the Nav Bar at the left side of Spotify, you should see all the songs from the folder listed. Additionally, you can efficiently put multiple mixtapes on Spotify at once
                                by putting all the songs into one folder (that is what I have done with the "Music" folder that is toggled green).</p>
                        </div>
                    </div>
                    <div>
                        <h1 className={pageBackgroundStyles.stepTitle}>4. (Spotify) Syncing to Mobile App</h1>
                        <div className={pageBackgroundStyles.stepWithPicture}>
                            <img src={Step5} style={{ width: "100%" }}></img>
                        </div>
                        <div className={pageBackgroundStyles.stepDescription}>
                            <p>Unfortunately, syncing local files from a computer to the Spotify Mobile App is somewhat complicated and unreliable. However, it is still possible
                            to accomplish. First off, the computer with the local files on its Spotify desktop app and the phone with the Spotify mobile app need to be connected to the same Wi-Fi
                            network (Note: does not work with all Wi-Fi networks, I'd recommend a home Wi-Fi network rather than a public one). Next, create a new playlist on the computer to put all
                            the local files on, with any name you want. Once you've made the empty playlist, go into the Local Files section, copy all the songs you want to sync, then paste them
                            into the new playlist.</p>
                        </div>
                    </div>
                    <div>
                        <h1 className={pageBackgroundStyles.stepTitle}>5. (Spotify) Syncing to Mobile App cont.</h1>
                        <div className={pageBackgroundStyles.stepWithPicture}>
                            <img src={Step6} style={{ width: "100%" }}></img>
                        </div>
                        <div className={pageBackgroundStyles.stepDescription}>
                            <p>Now head to the mobile app on your phone. Go to your playlists, and you should see a playlist with the same name as the one you just created on your
                            computer. Click on it, and it should be empty with Spotify asking you to add songs to it (Note: your playlist screen should be different from the one above, which has
                            already synced the local files). Click on the three dots in the upper right of the screen, and hit the Download option. If the phone and computer are on the same
                            Wi-Fi, the local files should begin to download into the playlist. Depending on how many songs are on the playlist, this process could take a few minues. If no songs are
                            beginnning to download, back out to the screen displaying all your playlists. If the playlist of local files has a grey downward pointing arrow, that most likely means you
                            should try a different Wi-Fi network. Once the songs have all downloaded, your playlist screen should look similar to the one above. You can also add these songs to your
                            overall library so that you can shuffle these songs with your other music instead of having to play from the playlist to listen to the mixtapes (for some reason you can only do
                            this in the mobile app as far as I know). To do this, press your finger down on a song and slide to the left. You should see a gray + appear, and if you keep sliding
                            left it should turn green, at which point you can lift your finger off the screen. As of now, the only way to add all the songs to the library is to repeat this
                            process for every song on the playlist individually.</p>
                        </div>
                    </div>
                    <div className={pageBackgroundStyles.mixtapeEndMsg}>
                        Hopefully you should now have all 5 mixtapes on your devices! Enjoy!
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
            logo: UserLogo
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
            });
            alert('you are now logged in as ' + this.state.user.displayName)
            })
    }

    logout = () => {
        fire.auth.signOut().then(() => {
            this.setState({
                user: null,
                buttonFunc: this.login,
                logo: UserLogo
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
                    logo: user.photoURL + ""
                });
            }
        })
    }

}

export default MixtapeInfo