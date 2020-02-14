import React from "react";
// import style from "./DarkButton.module.scss";
import "./DarkButton.scss";

class DarkButton extends React.Component{
    render(){
        // return <button className={style.darkButton}>I'm Dark Button</button>;
        return <button className="darkButton">I'm Dark Button</button>;
    }
}

export default DarkButton;