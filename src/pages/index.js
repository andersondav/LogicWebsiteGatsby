import React from "react"
import { Link } from "gatsby"
import PageBackground from "../components/pageBackground";
import pageBackgroundStyles from "../components/pageBackground.module.css"
//import { runInThisContext } from "vm";

class Index extends React.Component {
    render() {
        return (
            <PageBackground contentHeight="auto" contentHeight2="auto">
                <div className={pageBackgroundStyles.welcome}>
				    <h1 className={pageBackgroundStyles.welcomeHeader}>WELCOME!</h1>
				    <p>This website was made to pay homage to hip hop artist Logic. Hailing from Gaithersburg, Maryland,
					Logic began recording at a young age, and, thanks to his strong flows and inspirational message, has quickly risen to become one of the
					most well-known and successful figures in the music industry today. Use the drop-down menus to get song suggestions and learn about Logic's come-up
					as well as the rise of his well-known fanbase, the Rattpack!</p>
			    </div>
            </PageBackground>
        )
    }    
}

export default Index
