import React from "react";
import Left from "./Home/Left";
import Middle from "./Home/Middle";
import Right from "./Home/Right";

const Home = ({set}) => {
    return (
    <div className="main-home">
        <Left/>
        <Middle set={set}/>
        <Right/>
    </div>
    )
}

export default Home;