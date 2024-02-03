import React from "react";
import './Checker.scss';

interface CheckerPropsInterface {
    index: number;
}

function Checker(props: CheckerPropsInterface) {
    const style = {
        transform: `translateY(${props.index ? props.index * 5 : props.index}px)`
    }
    return <div className="checker" style={style}>

    </div>
}

export default Checker;