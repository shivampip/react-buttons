import React from "react";

import style from "./CircleButton.module.scss";


class CircleButton extends React.Component{
    render(){
        return <div className={style.circleBtn}>Hi, I'm circular button</div>;
    }
}

export default CircleButton;