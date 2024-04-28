import React from "react";
import Left from "./Home/Left";
import Middle from "./Home/Middle";
import Right from "./Home/Right";

const Home = ({books}) => {
    return (
    <div className="main-home">
        <Left/>
        <Middle books={books}/>
        <Right/>
    </div>
    )
}

export default Home;