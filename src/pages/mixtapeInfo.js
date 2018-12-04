import React from "react"
import PageBackground from "../components/pageBackground"
import pageBackgroundStyles from "../components/pageBackground.module.css"
import Psychological from "../images/Albums/Psychological.jpg"
import YoungBroke from "../images/Albums/YoungBroke.jpg"
import YoungSinatra from "../images/Albums/YoungSinatra.jpg"
import YSUndeniable from "../images/Albums/YSUndeniable.jpg"
import YSWTF from "../images/Albums/YSWTF.jpg"

class MixtapeInfo extends React.Component {

    render() {
        return (
            <PageBackground contentHeight="2000px" contentHeight2="2250px">
                <div className={pageBackgroundStyles.welcome} style={{ border: "none" }}>
					<h1 className={pageBackgroundStyles.welcomeHeader}>MIXTAPE DOWNLOAD INFORMATION</h1>
					<p style={{ fontSize: "18px" }}>Before he became the artist he is today, Logic rose to fame largely through his well-known mixtapes.
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
                                <img className={pageBackgroundStyles.mixtapeCovers} src={YoungBroke} alt="Pyschological"></img>
                            </a>
                        </div>
                        <div className={pageBackgroundStyles.mixtapeCoverContainer}>
                            <a href="https://www.datpiff.com/Logic-Young-Sinatra-mixtape.271763.html">
                                <img className={pageBackgroundStyles.mixtapeCovers} src={YoungSinatra} alt="Pyschological"></img>
                            </a>
                        </div>
                    </div>
                    <div style={{ margin: "0 auto", left: "0", right: "0", width: "53.333%", height: "auto" }}>
                        <div className={pageBackgroundStyles.mixtapeCoverContainer2} style={{ marginRight: "5%" }}>
                            <a href="https://www.datpiff.com/Logic-Young-Sinatra-Undeniable-mixtape.346367.html">
                                <img className={pageBackgroundStyles.mixtapeCovers} src={YSUndeniable} alt="Pyschological"></img>
                            </a>
                        </div>
                        <div className={pageBackgroundStyles.mixtapeCoverContainer2}>
                            <a href="https://www.datpiff.com/Logic-Young-Sinatra-Welcome-To-Forever-mixtape.483644.html">
                                <img className={pageBackgroundStyles.mixtapeCovers} src={YSWTF} alt="Pyschological"></img>
                            </a>
                        </div>
                    </div>                
                </div>
            </PageBackground>
        )
    }


}

export default MixtapeInfo