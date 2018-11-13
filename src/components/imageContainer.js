import React from "react"
import pageBackgroundStyles from "./pageBackground.module.css"
import Psychological from "../images/Albums/Psychological.jpg"
import YoungBroke from "../images/Albums/YoungBroke.jpg"
import YoungSinatra from "../images/Albums/YoungSinatra.jpg"
import YSUndeniable from "../images/Albums/YSUndeniable.jpg"
import YSWTF from "../images/Albums/YSWTF.jpg"
import UP from "../images/Albums/UP.jpg"
import TITS from "../images/Albums/TITS.jpg"
import BT from "../images/Albums/BT.jpg"
import Everybody from "../images/Albums/Everybody.jpg"
import BT2 from "../images/Albums/BT2.jpg"
import YS4 from "../images/Albums/YS4.jpg"

const colorAndBackgrounds = [
	["#000000", Psychological, "-25%"],
	["#000000", YoungBroke, "-30%"],
	["#000000", YoungSinatra, "-25%"],
	["#000000", YSUndeniable, "-30%"],
	["#000000", YSWTF, "-35%"],
	["#142328", UP, "-25%"],
	["#1e2850", TITS, "-22.5%"],
	["#dcaa3c", BT, "-22.5%"],
	["#c8b496", Everybody, "-55%"],
	["#dcaa3c", BT2, "-30%"],
	["#000000", YS4, "-25%"]
];

var num = Math.floor(Math.random() * 11)
var backgroundImage = colorAndBackgrounds[num][1]
var margin = colorAndBackgrounds[num][2]
const backgroundColor = colorAndBackgrounds[num][0]
var borderColor

if (backgroundColor == "#000000") {
    borderColor = "#ffffff"
} else {
    borderColor = "#000000"
}

class ImageContainer extends React.Component {
	render = () => (
		<div className={pageBackgroundStyles.imageContainer} style={{ borderColor: borderColor }}>
        	<img src={backgroundImage} className={pageBackgroundStyles.image} style={{ marginTop:margin }} alt=""/>
    	</div> 	
	)
}

export { backgroundColor, borderColor }

export default ImageContainer



