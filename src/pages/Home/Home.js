import React from 'react';
import "./Home.scss";
import Landing from "./Landing/Landing"
import BookSegment from "./Segment/BookSegment"
import About from "./About/About"
import Preview from "../Preview/Preview";
import Nav from "../../components/Nav/Nav";
import NavMobile from "../../components/Nav/NavMobile/NavMobile";
import Footer from "../../components/Footer/Footer";

const Home = ({match, history}) => {
    return (
        <div className="home-container">
            <Nav/>
            <NavMobile/>
            <Landing/>
            {/*<Preview/>*/}
            <Footer/>
        </div>
    )
}


export default Home;
