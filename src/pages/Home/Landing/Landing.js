import React from 'react'
import "./Landing.scss"
import Landing1 from "../../../utils/land1.jpg"
import Landing2 from "../../../utils/land2.jpg"
import Landing3 from "../../../utils/land3.jpg"
import {withRouter} from "react-router-dom"
import Gallery from "../Segment/Gallery"

const Landing = ({history}) => {
    return (
        <div className="Landing">
            <div className="galleryc">
            <Gallery img1={Landing1} img2={Landing2} img3={Landing3}/></div>
            <h1 className="Landing__title">ROBOT SEARCHER</h1>
            <p>Robots for all tasks</p>
            <h2 onClick={()=>history.push("/rooms")}>SEE OUR ROBOTS</h2>
        </div>
    )
}

export default withRouter(Landing)
